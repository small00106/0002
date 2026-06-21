(function(){
  var app = document.getElementById('app');
  var nav = document.querySelector('.nav');
  var hamburger = document.querySelector('.nav__hamburger');
  var menu = document.querySelector('.nav__menu');
  var overlay = document.querySelector('.nav__mobile-overlay');
  var dropdownToggles = document.querySelectorAll('.nav__link[data-dropdown]');

  var pages = {
    home: function(){ return renderHome(); },
    about: function(){ return renderAbout(); },
    contact: function(){ return renderContact(); },
    services: function(){ return renderServices(); },
    portfolio: function(){ return renderPortfolio(); },
    faq: function(){ return renderFaq(); }
  };

  var pageTitles = {
    home: 'Verdant Studio',
    about: 'About - Verdant Studio',
    contact: 'Contact - Verdant Studio',
    services: 'Services - Verdant Studio',
    portfolio: 'Portfolio - Verdant Studio',
    faq: 'FAQ - Verdant Studio'
  };

  function renderHome(){
    return '<section class="hero">'
      +'<div class="hero__content">'
        +'<span class="hero__tag">Digital Craftsmanship</span>'
        +'<h1 class="hero__title">We Build <span>Digital</span><br>Experiences</h1>'
        +'<p class="hero__subtitle">Blending refined aesthetics with purposeful design to craft immersive web experiences that leave lasting impressions.</p>'
        +'<a href="#about" class="hero__cta">'
          +'Explore Our Work'
          +'<svg viewBox="0 0 24 24"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>'
        +'</a>'
      +'</div>'
    +'</section>'
    +'<section class="features">'
      +'<div class="features__header">'
        +'<p class="features__label">What We Do</p>'
        +'<h2 class="features__title">Crafted With Purpose</h2>'
      +'</div>'
      +'<div class="features__grid">'
        +'<div class="feature-card">'
          +'<div class="feature-card__icon">'
            +'<svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>'
          +'</div>'
          +'<h3 class="feature-card__title">Design Systems</h3>'
          +'<p class="feature-card__desc">Cohesive visual languages that scale seamlessly across products, ensuring consistency and elegance at every touchpoint.</p>'
        +'</div>'
        +'<div class="feature-card">'
          +'<div class="feature-card__icon">'
            +'<svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>'
          +'</div>'
          +'<h3 class="feature-card__title">Interactive Experiences</h3>'
          +'<p class="feature-card__desc">Motion-rich interfaces that respond to every gesture, creating fluid dialogues between users and digital products.</p>'
        +'</div>'
        +'<div class="feature-card">'
          +'<div class="feature-card__icon">'
            +'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>'
          +'</div>'
          +'<h3 class="feature-card__title">Web Architecture</h3>'
          +'<p class="feature-card__desc">Robust front-end architectures built for performance and maintainability, from component design to deployment pipelines.</p>'
        +'</div>'
      +'</div>'
    +'</section>';
  }

  function renderAbout(){
    return '<section class="page-hero">'
      +'<h1 class="page-hero__title">About Us</h1>'
      +'<p class="page-hero__desc">The people and passion behind Verdant Studio</p>'
    +'</section>'
    +'<section class="team">'
      +'<div class="team__header">'
        +'<p class="team__label">Our Team</p>'
        +'<h2 class="team__title">Meet the Makers</h2>'
      +'</div>'
      +'<div class="team__grid">'
        +'<div class="team-card">'
          +'<div class="team-card__inner">'
            +'<div class="team-card__front">'
              +'<div class="team-card__avatar">LW</div>'
              +'<div class="team-card__name">Lena Whitmore</div>'
              +'<div class="team-card__role">Creative Director</div>'
            +'</div>'
            +'<div class="team-card__back">'
              +'<div class="team-card__back-name">Lena Whitmore</div>'
              +'<div class="team-card__back-bio">A decade of experience shaping visual narratives for brands that dare to stand apart. Believes design is a dialogue, not a monologue.</div>'
            +'</div>'
          +'</div>'
        +'</div>'
        +'<div class="team-card">'
          +'<div class="team-card__inner">'
            +'<div class="team-card__front">'
              +'<div class="team-card__avatar">MR</div>'
              +'<div class="team-card__name">Marcus Reyes</div>'
              +'<div class="team-card__role">Lead Engineer</div>'
            +'</div>'
            +'<div class="team-card__back">'
              +'<div class="team-card__back-name">Marcus Reyes</div>'
              +'<div class="team-card__back-bio">Full-stack architect obsessed with performance and accessibility. Turns complex systems into elegant, maintainable code.</div>'
            +'</div>'
          +'</div>'
        +'</div>'
        +'<div class="team-card">'
          +'<div class="team-card__inner">'
            +'<div class="team-card__front">'
              +'<div class="team-card__avatar">AS</div>'
              +'<div class="team-card__name">Aria Sato</div>'
              +'<div class="team-card__role">UX Designer</div>'
            +'</div>'
            +'<div class="team-card__back">'
              +'<div class="team-card__back-name">Aria Sato</div>'
              +'<div class="team-card__back-bio">Research-driven designer who maps user journeys before sketching interfaces. Every pixel has a purpose, every flow a reason.</div>'
            +'</div>'
          +'</div>'
        +'</div>'
        +'<div class="team-card">'
          +'<div class="team-card__inner">'
            +'<div class="team-card__front">'
              +'<div class="team-card__avatar">DK</div>'
              +'<div class="team-card__name">David Kim</div>'
              +'<div class="team-card__role">Motion Designer</div>'
            +'</div>'
            +'<div class="team-card__back">'
              +'<div class="team-card__back-name">David Kim</div>'
              +'<div class="team-card__back-bio">Animator and interaction designer who breathes life into static layouts. Specializes in micro-interactions that delight users.</div>'
            +'</div>'
          +'</div>'
        +'</div>'
      +'</div>'
    +'</section>'
    +'<section class="timeline">'
      +'<div class="timeline__header">'
        +'<p class="timeline__label">Our Journey</p>'
        +'<h2 class="timeline__title">Where We\'ve Been</h2>'
      +'</div>'
      +'<div class="timeline__list">'
        +'<div class="timeline__item">'
          +'<div class="timeline__year">2019</div>'
          +'<div class="timeline__text">Founded Verdant Studio in a shared workspace with a vision to merge art and engineering in digital product design.</div>'
        +'</div>'
        +'<div class="timeline__item">'
          +'<div class="timeline__year">2021</div>'
          +'<div class="timeline__text">Expanded to a team of twelve, delivering design systems for three Fortune 500 companies across healthcare and finance.</div>'
        +'</div>'
        +'<div class="timeline__item">'
          +'<div class="timeline__year">2023</div>'
          +'<div class="timeline__text">Launched our open-source component library, adopted by over 2,000 developers worldwide within the first six months.</div>'
        +'</div>'
        +'<div class="timeline__item">'
          +'<div class="timeline__year">2025</div>'
          +'<div class="timeline__text">Pioneering immersive web experiences with WebGL and spatial computing, redefining what browsers can do.</div>'
        +'</div>'
      +'</div>'
    +'</section>';
  }

  function renderContact(){
    return '<section class="page-hero">'
      +'<h1 class="page-hero__title">Get In Touch</h1>'
      +'<p class="page-hero__desc">We\'d love to hear about your next project</p>'
    +'</section>'
    +'<section class="contact">'
      +'<div class="contact__grid">'
        +'<div class="contact__form-section">'
          +'<p class="contact__label">Send a Message</p>'
          +'<h2 class="contact__form-title">Let\'s Start a Conversation</h2>'
          +'<form id="contactForm">'
            +'<div class="form-group">'
              +'<input type="text" name="name" placeholder=" " required>'
              +'<label>Your Name</label>'
            +'</div>'
            +'<div class="form-group">'
              +'<input type="email" name="email" placeholder=" " required>'
              +'<label>Email Address</label>'
            +'</div>'
            +'<div class="form-group">'
              +'<textarea name="message" placeholder=" " required></textarea>'
              +'<label>Your Message</label>'
            +'</div>'
            +'<button type="submit" class="contact__submit">'
              +'Send Message'
              +'<svg viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>'
            +'</button>'
          +'</form>'
        +'</div>'
        +'<div class="contact__info-section">'
          +'<h2 class="contact__info-title">Our Details</h2>'
          +'<p class="contact__info-desc">Reach out through any channel — we respond within 24 hours on business days. For urgent inquiries, give us a call.</p>'
          +'<div class="contact__info-list">'
            +'<div class="contact__info-item">'
              +'<div class="contact__info-icon">'
                +'<svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>'
              +'</div>'
              +'<div>'
                +'<div class="contact__info-label">Address</div>'
                +'<div class="contact__info-value">128 Greenwood Ave, Portland, OR 97201</div>'
              +'</div>'
            +'</div>'
            +'<div class="contact__info-item">'
              +'<div class="contact__info-icon">'
                +'<svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>'
              +'</div>'
              +'<div>'
                +'<div class="contact__info-label">Phone</div>'
                +'<div class="contact__info-value">+1 (503) 555-0147</div>'
              +'</div>'
            +'</div>'
            +'<div class="contact__info-item">'
              +'<div class="contact__info-icon">'
                +'<svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>'
              +'</div>'
              +'<div>'
                +'<div class="contact__info-label">Email</div>'
                +'<div class="contact__info-value">hello@verdantstudio.io</div>'
              +'</div>'
            +'</div>'
          +'</div>'
        +'</div>'
      +'</div>'
    +'</section>';
  }

  function renderServices(){
    return '<section class="page-hero">'
      +'<h1 class="page-hero__title">Our Services</h1>'
      +'<p class="page-hero__desc">Comprehensive solutions tailored to your digital needs</p>'
    +'</section>'
    +'<section class="services">'
      +'<div class="services__grid">'
        +'<div class="service-card">'
          +'<div class="service-card__icon">'
            +'<svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>'
          +'</div>'
          +'<h3 class="service-card__title">Brand Identity</h3>'
          +'<p class="service-card__desc">Crafting memorable brand systems that resonate with your audience and stand the test of time.</p>'
          +'<ul class="service-card__list"><li>Logo & Visual Identity</li><li>Brand Guidelines</li><li>Design Systems</li></ul>'
        +'</div>'
        +'<div class="service-card">'
          +'<div class="service-card__icon">'
            +'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>'
          +'</div>'
          +'<h3 class="service-card__title">Web Development</h3>'
          +'<p class="service-card__desc">Building performant, accessible, and scalable web applications with modern technologies.</p>'
          +'<ul class="service-card__list"><li>Frontend Architecture</li><li>Performance Optimization</li><li>Accessibility Audits</li></ul>'
        +'</div>'
        +'<div class="service-card">'
          +'<div class="service-card__icon">'
            +'<svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>'
          +'</div>'
          +'<h3 class="service-card__title">UX Design</h3>'
          +'<p class="service-card__desc">Research-driven design that puts users first, creating intuitive and delightful experiences.</p>'
          +'<ul class="service-card__list"><li>User Research</li><li>Wireframing & Prototyping</li><li>Usability Testing</li></ul>'
        +'</div>'
        +'<div class="service-card">'
          +'<div class="service-card__icon">'
            +'<svg viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>'
          +'</div>'
          +'<h3 class="service-card__title">Motion & Animation</h3>'
          +'<p class="service-card__desc">Bringing interfaces to life with purposeful motion that guides and delights users.</p>'
          +'<ul class="service-card__list"><li>Micro-interactions</li><li>Page Transitions</li><li>SVG Animation</li></ul>'
        +'</div>'
        +'<div class="service-card">'
          +'<div class="service-card__icon">'
            +'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>'
          +'</div>'
          +'<h3 class="service-card__title">Digital Strategy</h3>'
          +'<p class="service-card__desc">Aligning design and technology with your business objectives for measurable impact.</p>'
          +'<ul class="service-card__list"><li>Product Roadmapping</li><li>Analytics & Insights</li><li>Growth Optimization</li></ul>'
        +'</div>'
        +'<div class="service-card">'
          +'<div class="service-card__icon">'
            +'<svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
          +'</div>'
          +'<h3 class="service-card__title">Consulting</h3>'
          +'<p class="service-card__desc">Expert guidance for teams looking to level up their design and engineering practices.</p>'
          +'<ul class="service-card__list"><li>Design Audits</li><li>Team Workshops</li><li>Technical Reviews</li></ul>'
        +'</div>'
      +'</div>'
    +'</section>';
  }

  function renderPortfolio(){
    return '<section class="page-hero">'
      +'<h1 class="page-hero__title">Our Portfolio</h1>'
      +'<p class="page-hero__desc">Selected work from projects we are proud of</p>'
    +'</section>'
    +'<section class="portfolio">'
      +'<div class="portfolio__grid">'
        +'<div class="portfolio-card">'
          +'<div class="portfolio-card__media" style="background:linear-gradient(135deg,#1a2f23,#2a4a38)"><div class="portfolio-card__badge">Web App</div></div>'
          +'<div class="portfolio-card__body">'
            +'<h3 class="portfolio-card__title">Fintech Dashboard</h3>'
            +'<p class="portfolio-card__desc">A comprehensive financial management platform with real-time analytics and intuitive data visualization.</p>'
            +'<div class="portfolio-card__tags"><span>React</span><span>D3.js</span><span>Design System</span></div>'
          +'</div>'
        +'</div>'
        +'<div class="portfolio-card">'
          +'<div class="portfolio-card__media" style="background:linear-gradient(135deg,#3d2f1a,#6b5533)"><div class="portfolio-card__badge">E-commerce</div></div>'
          +'<div class="portfolio-card__body">'
            +'<h3 class="portfolio-card__title">Luxury Retail Site</h3>'
            +'<p class="portfolio-card__desc">An immersive shopping experience for a premium fashion brand, blending elegance with performance.</p>'
            +'<div class="portfolio-card__tags"><span>Next.js</span><span>GSAP</span><span>Headless CMS</span></div>'
          +'</div>'
        +'</div>'
        +'<div class="portfolio-card">'
          +'<div class="portfolio-card__media" style="background:linear-gradient(135deg,#1a2f2f,#2a5a5a)"><div class="portfolio-card__badge">Mobile</div></div>'
          +'<div class="portfolio-card__body">'
            +'<h3 class="portfolio-card__title">Health & Wellness App</h3>'
            +'<p class="portfolio-card__desc">A holistic wellness companion featuring habit tracking, guided meditation, and personalized insights.</p>'
            +'<div class="portfolio-card__tags"><span>React Native</span><span>UX Research</span><span>Motion</span></div>'
          +'</div>'
        +'</div>'
        +'<div class="portfolio-card">'
          +'<div class="portfolio-card__media" style="background:linear-gradient(135deg,#2f1a2f,#5a2a5a)"><div class="portfolio-card__badge">Brand</div></div>'
          +'<div class="portfolio-card__body">'
            +'<h3 class="portfolio-card__title">Tech Startup Rebrand</h3>'
            +'<p class="portfolio-card__desc">Complete brand identity redesign for an AI startup, including guidelines and marketing collateral.</p>'
            +'<div class="portfolio-card__tags"><span>Branding</span><span>Design System</span><span>Illustration</span></div>'
          +'</div>'
        +'</div>'
        +'<div class="portfolio-card">'
          +'<div class="portfolio-card__media" style="background:linear-gradient(135deg,#2f2f1a,#5a5a2a)"><div class="portfolio-card__badge">SaaS</div></div>'
          +'<div class="portfolio-card__body">'
            +'<h3 class="portfolio-card__title">Project Management Tool</h3>'
            +'<p class="portfolio-card__desc">A collaborative workspace platform with real-time updates, Kanban boards, and team analytics.</p>'
            +'<div class="portfolio-card__tags"><span>Vue.js</span><span>WebSockets</span><span>Accessibility</span></div>'
          +'</div>'
        +'</div>'
        +'<div class="portfolio-card">'
          +'<div class="portfolio-card__media" style="background:linear-gradient(135deg,#1a1a2f,#2a2a5a)"><div class="portfolio-card__badge">3D / WebGL</div></div>'
          +'<div class="portfolio-card__body">'
            +'<h3 class="portfolio-card__title">Virtual Gallery Experience</h3>'
            +'<p class="portfolio-card__desc">An immersive 3D art gallery with interactive exhibits and spatial audio narration.</p>'
            +'<div class="portfolio-card__tags"><span>Three.js</span><span>WebGL</span><span>Spatial Audio</span></div>'
          +'</div>'
        +'</div>'
      +'</div>'
    +'</section>';
  }

  function renderFaq(){
    return '<section class="page-hero">'
      +'<h1 class="page-hero__title">Frequently Asked Questions</h1>'
      +'<p class="page-hero__desc">Answers to common questions about working with us</p>'
    +'</section>'
    +'<section class="faq">'
      +'<div class="faq__list">'
        +'<div class="faq-item">'
          +'<button class="faq-item__question" aria-expanded="false">'
            +'<span>What is your typical project timeline?</span>'
            +'<svg viewBox="0 0 12 12"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
          +'</button>'
          +'<div class="faq-item__answer"><p>Project timelines vary based on scope and complexity. A typical branding engagement takes 4-6 weeks, while a full web application may require 2-4 months. During our initial consultation, we provide a detailed timeline tailored to your specific needs.</p></div>'
        +'</div>'
        +'<div class="faq-item">'
          +'<button class="faq-item__question" aria-expanded="false">'
            +'<span>How do you handle pricing and billing?</span>'
            +'<svg viewBox="0 0 12 12"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
          +'</button>'
          +'<div class="faq-item__answer"><p>We work on a fixed-price basis for most projects, with payment structured in milestones (typically 30% deposit, 40% mid-project, 30% on completion). For ongoing partnerships, we also offer monthly retainer arrangements. All pricing is discussed upfront with no hidden fees.</p></div>'
        +'</div>'
        +'<div class="faq-item">'
          +'<button class="faq-item__question" aria-expanded="false">'
            +'<span>Do you work with startups and small businesses?</span>'
            +'<svg viewBox="0 0 12 12"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
          +'</button>'
          +'<div class="faq-item__answer"><p>Absolutely. We have extensive experience working with early-stage startups and growing businesses. We can tailor our scope and deliverables to match your budget and stage, and we even offer equity arrangements for exceptional early-stage ventures.</p></div>'
        +'</div>'
        +'<div class="faq-item">'
          +'<button class="faq-item__question" aria-expanded="false">'
            +'<span>What is your design and development process?</span>'
            +'<svg viewBox="0 0 12 12"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
          +'</button>'
          +'<div class="faq-item__answer"><p>Our process is collaborative and iterative: 1) Discovery & Research, 2) Strategy & Wireframing, 3) Visual Design, 4) Development & Testing, 5) Launch & Support. We maintain regular communication throughout, with weekly demos and opportunities for feedback at every stage.</p></div>'
        +'</div>'
        +'<div class="faq-item">'
          +'<button class="faq-item__question" aria-expanded="false">'
            +'<span>Do you provide ongoing support after launch?</span>'
            +'<svg viewBox="0 0 12 12"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
          +'</button>'
          +'<div class="faq-item__answer"><p>Yes, we provide 30 days of complimentary bug-fix support after every project launch. Beyond that, we offer flexible maintenance and support retainers that cover updates, security patches, performance monitoring, and feature enhancements.</p></div>'
        +'</div>'
        +'<div class="faq-item">'
          +'<button class="faq-item__question" aria-expanded="false">'
            +'<span>How do I get started with a project?</span>'
            +'<svg viewBox="0 0 12 12"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
          +'</button>'
          +'<div class="faq-item__answer"><p>Simply reach out through our contact form or email us at hello@verdantstudio.io. We schedule a free 30-minute consultation to understand your goals, then follow up with a detailed proposal and estimate within 2-3 business days.</p></div>'
        +'</div>'
      +'</div>'
    +'</section>';
  }

  function initFaq(){
    var questions = document.querySelectorAll('.faq-item__question');
    questions.forEach(function(q){
      q.addEventListener('click', function(){
        var item = q.closest('.faq-item');
        var isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(function(i){
          i.classList.remove('open');
          i.querySelector('.faq-item__question').setAttribute('aria-expanded','false');
        });
        if(!isOpen){
          item.classList.add('open');
          q.setAttribute('aria-expanded','true');
        }
      });
    });
  }

  function getRoute(){
    var hash = window.location.hash.replace('#','') || 'home';
    return pages[hash] ? hash : 'home';
  }

  function setActivePage(page){
    var links = document.querySelectorAll('.nav__link[data-page]');
    for(var i = 0; i < links.length; i++){
      if(links[i].getAttribute('data-page') === page){
        links[i].classList.add('active');
      }else{
        links[i].classList.remove('active');
      }
    }
    var dropdownItems = document.querySelectorAll('.nav__dropdown-item[data-page]');
    for(var j = 0; j < dropdownItems.length; j++){
      if(dropdownItems[j].getAttribute('data-page') === page){
        dropdownItems[j].classList.add('active');
      }else{
        dropdownItems[j].classList.remove('active');
      }
    }
  }

  function navigateTo(page){
    app.style.opacity = '0';
    app.style.transform = 'translateY(12px)';
    setTimeout(function(){
      app.innerHTML = pages[page]();
      document.title = pageTitles[page] || 'Verdant Studio';
      setActivePage(page);
      window.scrollTo(0, 0);
      requestAnimationFrame(function(){
        app.style.opacity = '1';
        app.style.transform = 'translateY(0)';
      });
      initPageScripts(page);
    }, 200);
  }

  function initPageScripts(page){
    if(page === 'contact'){
      initContactForm();
    }
    if(page === 'about'){
      initScrollAnimations();
    }
    if(page === 'faq'){
      initFaq();
    }
  }

  function initContactForm(){
    var form = document.getElementById('contactForm');
    if(!form) return;
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var name = form.querySelector('[name="name"]');
      var email = form.querySelector('[name="email"]');
      var message = form.querySelector('[name="message"]');
      if(!name.value.trim() || !email.value.trim() || !message.value.trim()){
        showToast('Please fill in all fields');
        return;
      }
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
        showToast('Please enter a valid email');
        return;
      }
      var btn = form.querySelector('.contact__submit');
      btn.disabled = true;
      btn.textContent = 'Sending...';
      fetch('http://localhost:6002/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.value.trim(),
          email: email.value.trim(),
          message: message.value.trim()
        })
      })
      .then(function(res){ return res.json(); })
      .then(function(data){
        if(data.error){
          showToast(data.error);
        } else {
          showToast('Message sent successfully!');
          form.reset();
        }
      })
      .catch(function(){
        showToast('Failed to send. Please try again.');
      })
      .finally(function(){
        btn.disabled = false;
        btn.innerHTML = 'Send Message<svg viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>';
      });
    });
  }

  function showToast(msg){
    var existing = document.querySelector('.contact__toast');
    if(existing) existing.remove();
    var toast = document.createElement('div');
    toast.className = 'contact__toast';
    toast.textContent = msg;
    document.body.appendChild(toast);
    requestAnimationFrame(function(){
      toast.classList.add('show');
    });
    setTimeout(function(){
      toast.classList.remove('show');
      setTimeout(function(){ toast.remove(); }, 300);
    }, 3000);
  }

  function initScrollAnimations(){
    var items = document.querySelectorAll('.timeline__item');
    if(!items.length) return;
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, {threshold: 0.2});
    items.forEach(function(item){
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(item);
    });
  }

  function toggleDropdown(item){
    var wasOpen = item.classList.contains('open');
    var allItems = document.querySelectorAll('.nav__item.open');
    for(var i = 0; i < allItems.length; i++){
      allItems[i].classList.remove('open');
      var link = allItems[i].querySelector('.nav__link');
      if(link) link.setAttribute('aria-expanded', 'false');
    }
    if(!wasOpen){
      item.classList.add('open');
      var link = item.querySelector('.nav__link');
      if(link) link.setAttribute('aria-expanded', 'true');
    }
  }

  for(var i = 0; i < dropdownToggles.length; i++){
    (function(toggle){
      toggle.addEventListener('click', function(e){
        e.preventDefault();
        var item = toggle.closest('.nav__item');
        toggleDropdown(item);
      });
    })(dropdownToggles[i]);
  }

  document.addEventListener('click', function(e){
    var openItem = document.querySelector('.nav__item.open');
    if(openItem && !openItem.contains(e.target)){
      openItem.classList.remove('open');
      var link = openItem.querySelector('.nav__link');
      if(link) link.setAttribute('aria-expanded', 'false');
    }
  });

  if(hamburger){
    hamburger.addEventListener('click', function(){
      hamburger.classList.toggle('open');
      menu.classList.toggle('open');
      if(overlay) overlay.classList.toggle('show');
    });
  }

  if(overlay){
    overlay.addEventListener('click', function(){
      hamburger.classList.remove('open');
      menu.classList.remove('open');
      overlay.classList.remove('show');
    });
  }

  window.addEventListener('scroll', function(){
    if(window.scrollY > 10){
      nav.classList.add('scrolled');
    }else{
      nav.classList.remove('scrolled');
    }
  });

  app.style.transition = 'opacity 0.2s ease, transform 0.2s ease';

  window.addEventListener('hashchange', function(){
    navigateTo(getRoute());
  });

  navigateTo(getRoute());
})();
