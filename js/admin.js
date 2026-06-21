(function () {
  var listEl = document.getElementById('messageList');
  var emptyEl = document.getElementById('emptyState');
  var filterEl = document.getElementById('filterSelect');
  var refreshBtn = document.getElementById('refreshBtn');
  var statTotal = document.getElementById('statTotal');
  var statUnread = document.getElementById('statUnread');

  var allMessages = [];

  function formatTime(iso) {
    var d = new Date(iso);
    var y = d.getFullYear();
    var m = String(d.getMonth() + 1).padStart(2, '0');
    var day = String(d.getDate()).padStart(2, '0');
    var h = String(d.getHours()).padStart(2, '0');
    var min = String(d.getMinutes()).padStart(2, '0');
    return y + '-' + m + '-' + day + ' ' + h + ':' + min;
  }

  function getInitials(name) {
    var parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function updateStats(messages) {
    var total = messages.length;
    var unread = messages.filter(function (m) { return !m.read; }).length;
    statTotal.textContent = total + ' Message' + (total !== 1 ? 's' : '');
    statUnread.textContent = unread + ' Unread';
    if (unread === 0) {
      statUnread.style.display = 'none';
    } else {
      statUnread.style.display = '';
    }
  }

  function renderMessages(messages) {
    listEl.innerHTML = '';
    if (messages.length === 0) {
      var empty = document.createElement('div');
      empty.className = 'admin-empty';
      empty.innerHTML = '<svg viewBox="0 0 24 24" width="48" height="48"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        + '<p>No messages found</p>'
        + '<span>Adjust the filter or wait for new messages from the contact page.</span>';
      listEl.appendChild(empty);
      return;
    }

    messages.forEach(function (msg) {
      var card = document.createElement('div');
      card.className = 'admin-msg' + (msg.read ? '' : ' admin-msg--unread');
      card.dataset.id = msg.id;

      var badgeClass = msg.read ? 'admin-msg__badge admin-msg__badge--read' : 'admin-msg__badge';
      var badgeText = msg.read ? 'Read' : 'Unread';

      card.innerHTML =
        '<div class="admin-msg__header">'
          + '<div class="admin-msg__sender">'
            + '<div class="admin-msg__avatar">' + escapeHtml(getInitials(msg.name)) + '</div>'
            + '<div>'
              + '<div class="admin-msg__name">' + escapeHtml(msg.name) + '</div>'
              + '<a class="admin-msg__email" href="mailto:' + escapeHtml(msg.email) + '">' + escapeHtml(msg.email) + '</a>'
            + '</div>'
          + '</div>'
          + '<div class="admin-msg__meta">'
            + '<span class="admin-msg__time">' + formatTime(msg.time) + '</span>'
            + '<span class="' + badgeClass + '">' + badgeText + '</span>'
          + '</div>'
        + '</div>'
        + '<div class="admin-msg__body">'
          + '<p class="admin-msg__text">' + escapeHtml(msg.message) + '</p>'
        + '</div>'
        + '<div class="admin-msg__actions">'
          + (msg.read ? '' : '<button class="admin-btn admin-btn--mark" data-action="read" data-id="' + msg.id + '">Mark as Read</button>')
          + '<button class="admin-btn admin-btn--danger" data-action="delete" data-id="' + msg.id + '">Delete</button>'
        + '</div>';

      listEl.appendChild(card);
    });
  }

  var API_BASE = window.location.origin;

  function loadMessages() {
    fetch(API_BASE + '/api/messages')
      .then(function (res) { return res.json(); })
      .then(function (data) {
        allMessages = data;
        updateStats(allMessages);
        applyFilter();
      })
      .catch(function () {
        showToast('Failed to load messages');
      });
  }

  function applyFilter() {
    var filter = filterEl.value;
    var filtered = allMessages;
    if (filter === 'unread') {
      filtered = allMessages.filter(function (m) { return !m.read; });
    } else if (filter === 'read') {
      filtered = allMessages.filter(function (m) { return m.read; });
    }
    renderMessages(filtered);
  }

  listEl.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-action]');
    if (!btn) return;
    var action = btn.dataset.action;
    var id = btn.dataset.id;

    if (action === 'read') {
      fetch(API_BASE + '/api/messages/' + id + '/read', { method: 'PATCH' })
        .then(function (res) {
          if (!res.ok) throw new Error();
          return res.json();
        })
        .then(function () {
          var msg = allMessages.find(function (m) { return m.id === id; });
          if (msg) msg.read = true;
          updateStats(allMessages);
          applyFilter();
          showToast('Marked as read');
        })
        .catch(function () {
          showToast('Failed to update');
        });
    }

    if (action === 'delete') {
      if (!confirm('Are you sure you want to delete this message?')) return;
      fetch(API_BASE + '/api/messages/' + id, { method: 'DELETE' })
        .then(function (res) {
          if (!res.ok) throw new Error();
          return res.json();
        })
        .then(function () {
          allMessages = allMessages.filter(function (m) { return m.id !== id; });
          updateStats(allMessages);
          applyFilter();
          showToast('Message deleted');
        })
        .catch(function () {
          showToast('Failed to delete');
        });
    }
  });

  filterEl.addEventListener('change', applyFilter);

  refreshBtn.addEventListener('click', function () {
    loadMessages();
    showToast('Refreshed');
  });

  function showToast(msg) {
    var existing = document.querySelector('.admin-toast');
    if (existing) existing.remove();
    var toast = document.createElement('div');
    toast.className = 'admin-toast';
    toast.textContent = msg;
    document.body.appendChild(toast);
    requestAnimationFrame(function () {
      toast.classList.add('show');
    });
    setTimeout(function () {
      toast.classList.remove('show');
      setTimeout(function () { toast.remove(); }, 300);
    }, 2500);
  }

  loadMessages();
})();
