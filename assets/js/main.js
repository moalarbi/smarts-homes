/**
 * Smarts Homes - Main JavaScript
 * Shared functionality across all pages
 */

// Configuration
const CONFIG = {
  phoneNumber: '966537311886',
  phoneDisplay: '+966 53 731 1886',
  whatsappLink: 'https://wa.me/966537311886',
  siteName: 'سمارتس هومز',
  siteUrl: 'https://moalarbi.github.io/smarts-homes'
};

// Navigation items
const NAV_ITEMS = [
  { name: 'الرئيسية', href: '/', icon: 'home' },
  { name: 'من نحن', href: '/about/', icon: 'info' },
  { name: 'المنتجات', href: '/products/', icon: 'box' },
  { name: 'الحلول', href: '/solutions/', icon: 'lightbulb' },
  { name: 'تواصل معنا', href: '/contact/', icon: 'mail' }
];

// SVG Icons
const ICONS = {
  home: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  info: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
  box: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>',
  lightbulb: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>',
  mail: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  menu: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
  close: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  phone: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  whatsapp: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"/><path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"/><path d="M9.5 15.5a5 5 0 0 0 5 0"/></svg>',
  chevronDown: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
  arrowUp: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>'
};

/**
 * Initialize the application
 */
function init() {
  renderHeader();
  renderFooter();
  initHeaderScroll();
  initMobileDrawer();
  initFAQ();
  initRevealAnimations();
  initCounters();
  initBackToTop();
  updateActiveNav();
}

/**
 * Render Header
 */
function renderHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const currentPath = window.location.pathname;
  const isHome = currentPath === '/' || currentPath === '/index.html';

  header.innerHTML = `
    <header class="site-header ${isHome ? '' : 'scrolled'}">
      <div class="header-inner">
        <a href="./" class="logo" aria-label="${CONFIG.siteName} - الصفحة الرئيسية">
          <img src="assets/img/logo.png" alt="" class="logo-img" width="48" height="48">
          <div class="logo-text">
            <span class="logo-title">${CONFIG.siteName}</span>
            <span class="logo-subtitle">Smarts Homes</span>
          </div>
        </a>

        <nav class="desktop-nav" aria-label="التنقل الرئيسي">
          ${NAV_ITEMS.map(item => `
            <a href="${item.href}" 
               class="nav-link ${isCurrentPage(item.href) ? 'active' : ''}" 
               ${isCurrentPage(item.href) ? 'aria-current="page"' : ''}>
              ${item.name}
            </a>
          `).join('')}
        </nav>

        <div class="header-actions">
          <a href="tel:${CONFIG.phoneNumber}" class="btn btn-primary phone-btn" aria-label="اتصل بنا">
            ${ICONS.phone}
            <span>${CONFIG.phoneDisplay}</span>
          </a>
          <button class="burger-btn" aria-label="فتح القائمة" aria-expanded="false" aria-controls="mobile-drawer">
            ${ICONS.menu}
          </button>
        </div>
      </div>
    </header>

    <div class="mobile-drawer" id="mobile-drawer" aria-hidden="true">
      <div class="drawer-overlay"></div>
      <div class="drawer-content" role="dialog" aria-modal="true" aria-label="القائمة">
        <button class="drawer-close" aria-label="إغلاق القائمة">
          ${ICONS.close}
        </button>
        <div class="drawer-header">
          <img src="assets/img/logo.png" alt="${CONFIG.siteName}" class="drawer-logo" width="64" height="64">
        </div>
        <nav class="drawer-nav" aria-label="التنقل المتنقل">
          ${NAV_ITEMS.map(item => `
            <a href="${item.href}" 
               class="drawer-link ${isCurrentPage(item.href) ? 'active' : ''}"
               ${isCurrentPage(item.href) ? 'aria-current="page"' : ''}>
              ${ICONS[item.icon]}
              <span>${item.name}</span>
            </a>
          `).join('')}
        </nav>
        <div class="drawer-footer">
          <a href="tel:${CONFIG.phoneNumber}" class="btn btn-primary" style="width: 100%;">
            ${ICONS.phone}
            <span>${CONFIG.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  `;
}

/**
 * Render Footer
 */
function renderFooter() {
  const footer = document.getElementById('site-footer');
  if (!footer) return;

  footer.innerHTML = `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="./" class="footer-logo">
              <img src="assets/img/logo.png" alt="" width="40" height="40">
              <span>${CONFIG.siteName}</span>
            </a>
            <p>نقدم حلول المنازل الذكية المتكاملة بتقنيات عالمية وخبرة محلية. نحول منزلك إلى مساحة ذكية تجمع بين الراحة والأمان.</p>
            <div class="footer-social">
              <a href="https://twitter.com/smartshomes" target="_blank" rel="noopener" aria-label="تويتر">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://instagram.com/smartshomes" target="_blank" rel="noopener" aria-label="انستغرام">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://linkedin.com/company/smartshomes" target="_blank" rel="noopener" aria-label="لينكد إن">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          <div class="footer-links">
            <h4>روابط سريعة</h4>
            <ul>
              ${NAV_ITEMS.map(item => `<li><a href="${item.href}">${item.name}</a></li>`).join('')}
            </ul>
          </div>

          <div class="footer-links">
            <h4>خدماتنا</h4>
            <ul>
              <li><a href="solutions/">الإنارة الذكية</a></li>
              <li><a href="solutions/">التكييف والمناخ</a></li>
              <li><a href="solutions/">الأمان والمراقبة</a></li>
              <li><a href="solutions/">الستائر الذكية</a></li>
              <li><a href="solutions/">أنظمة الصوت</a></li>
            </ul>
          </div>

          <div class="footer-links">
            <h4>تواصل معنا</h4>
            <ul>
              <li><a href="tel:${CONFIG.phoneNumber}">${CONFIG.phoneDisplay}</a></li>
              <li><a href="${CONFIG.whatsappLink}" target="_blank">واتساب</a></li>
              <li><a href="mailto:info@smartshomes.sa">info@smartshomes.sa</a></li>
              <li>الرياض، المملكة العربية السعودية</li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© ${new Date().getFullYear()} ${CONFIG.siteName}. جميع الحقوق محفوظة.</p>
          <button class="back-to-top" onclick="scrollToTop()" aria-label="العودة إلى الأعلى">
            <span>العودة للأعلى</span>
            ${ICONS.arrowUp}
          </button>
        </div>
      </div>
    </footer>

    <a href="${CONFIG.whatsappLink}" target="_blank" rel="noopener" class="whatsapp-float" aria-label="تواصل عبر واتساب">
      ${ICONS.whatsapp}
    </a>
  `;
}

/**
 * Check if current page matches nav item
 */
function isCurrentPage(href) {
  const currentPath = window.location.pathname;
  if (href === '/') {
    return currentPath === '/' || currentPath === '/index.html';
  }
  return currentPath.startsWith(href);
}

/**
 * Update active nav item
 */
function updateActiveNav() {
  document.querySelectorAll('.nav-link, .drawer-link').forEach(link => {
    link.classList.remove('active');
    link.removeAttribute('aria-current');
    if (isCurrentPage(link.getAttribute('href'))) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

/**
 * Header scroll effect
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let ticking = false;
  
  function updateHeader() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }, { passive: true });
}

/**
 * Mobile drawer functionality
 */
function initMobileDrawer() {
  const burgerBtn = document.querySelector('.burger-btn');
  const drawer = document.querySelector('.mobile-drawer');
  const closeBtn = document.querySelector('.drawer-close');
  const overlay = document.querySelector('.drawer-overlay');
  
  if (!burgerBtn || !drawer) return;

  function openDrawer() {
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    burgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    burgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    burgerBtn.focus();
  }

  burgerBtn.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  overlay?.addEventListener('click', closeDrawer);

  // Close on link click
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  // Focus trap
  drawer.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    
    const focusableElements = drawer.querySelectorAll('a, button');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  });
}

/**
 * FAQ accordion
 */
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const isOpen = item.classList.contains('open');
      
      // Close all others (optional - remove if you want multiple open)
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

/**
 * Reveal animations on scroll
 */
function initRevealAnimations() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/**
 * Animated counters
 */
function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-counter'));
  const suffix = element.getAttribute('data-suffix') || '';
  const duration = 2000;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(easeOut * target);
    
    element.textContent = current + suffix;
    
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = target + suffix;
    }
  }

  requestAnimationFrame(update);
}

/**
 * Back to top button
 */
function initBackToTop() {
  // Already handled inline in footer
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Form validation and submission
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Validate
    if (!data.name || !data.phone) {
      showFormMessage('يرجى ملء الحقول المطلوبة', 'error');
      return;
    }

    // Create WhatsApp message
    const message = `مرحباً، أنا ${data.name}\n` +
      `رقم الجوال: ${data.phone}\n` +
      `${data.city ? `المدينة: ${data.city}\n` : ''}` +
      `${data.property ? `نوع العقار: ${data.property}\n` : ''}` +
      `${data.message ? `الرسالة: ${data.message}` : ''}`;

    const whatsappUrl = `${CONFIG.whatsappLink}?text=${encodeURIComponent(message)}`;
    
    showFormMessage('جاري تحويلك إلى واتساب...', 'success');
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 500);
  });
}

function showFormMessage(text, type) {
  const existing = document.querySelector('.form-message');
  if (existing) existing.remove();

  const message = document.createElement('div');
  message.className = `form-message form-message-${type}`;
  message.textContent = text;
  
  const form = document.getElementById('contact-form');
  form.insertBefore(message, form.firstChild);

  setTimeout(() => message.remove(), 5000);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Export for global access
window.CONFIG = CONFIG;
window.scrollToTop = scrollToTop;
