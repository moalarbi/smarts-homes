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
  { name: 'الرئيسية', href: 'index.html', icon: 'home' },
  { name: 'من نحن', href: 'about/index.html', icon: 'info' },
  { name: 'المنتجات', href: 'products/index.html', icon: 'box' },
  { name: 'الحلول', href: 'solutions/index.html', icon: 'lightbulb' },
  { name: 'تواصل معنا', href: 'contact/index.html', icon: 'mail' }
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
 * Helper to get relative path based on current location
 */
function getRelativePath(targetPath) {
  const currentPath = window.location.pathname;
  const isSubPage = currentPath.includes('/about/') || currentPath.includes('/products/') || currentPath.includes('/solutions/') || currentPath.includes('/contact/');
  
  if (isSubPage) {
    if (targetPath === 'index.html') return '../index.html';
    if (targetPath.startsWith('assets/')) return '../' + targetPath;
    return '../' + targetPath;
  }
  return targetPath;
}

/**
 * Initialize the application
 */
function init() {
  renderHeader();
  renderFooter();
  initHeaderScroll();
  initMobileDrawer();
  initRevealAnimations();
}

/**
 * Render Header
 */
function renderHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const currentPath = window.location.pathname;
  const isHome = currentPath.endsWith('/') || currentPath.endsWith('/index.html') || currentPath.endsWith('smarts-homes');
  
  const logoPath = getRelativePath('assets/img/logo.png');
  const homeLink = getRelativePath('index.html');

  header.innerHTML = `
    <header class="site-header ${isHome ? '' : 'scrolled'}">
      <div class="header-inner">
        <a href="${homeLink}" class="logo" aria-label="${CONFIG.siteName} - الصفحة الرئيسية">
          <img src="${logoPath}" alt="" class="logo-img" width="48" height="48">
          <div class="logo-text">
            <span class="logo-title">${CONFIG.siteName}</span>
            <span class="logo-subtitle">Smarts Homes</span>
          </div>
        </a>

        <nav class="desktop-nav" aria-label="التنقل الرئيسي">
          ${NAV_ITEMS.map(item => `
            <a href="${getRelativePath(item.href)}" 
               class="nav-link ${isCurrentPage(item.href) ? 'active' : ''}">
              ${item.name}
            </a>
          `).join('')}
        </nav>

        <div class="header-actions">
          <a href="tel:${CONFIG.phoneNumber}" class="btn btn-primary phone-btn">
            ${ICONS.phone}
            <span>${CONFIG.phoneDisplay}</span>
          </a>
          <button class="burger-btn" aria-label="فتح القائمة">
            ${ICONS.menu}
          </button>
        </div>
      </div>
    </header>

    <div class="mobile-drawer" id="mobile-drawer">
      <div class="drawer-overlay"></div>
      <div class="drawer-content">
        <button class="drawer-close">${ICONS.close}</button>
        <div class="drawer-header">
          <img src="${logoPath}" alt="${CONFIG.siteName}" class="drawer-logo" width="64" height="64">
        </div>
        <nav class="drawer-nav">
          ${NAV_ITEMS.map(item => `
            <a href="${getRelativePath(item.href)}" class="drawer-link ${isCurrentPage(item.href) ? 'active' : ''}">
              ${ICONS[item.icon]}
              <span>${item.name}</span>
            </a>
          `).join('')}
        </nav>
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

  const logoPath = getRelativePath('assets/img/logo.png');
  const homeLink = getRelativePath('index.html');

  footer.innerHTML = `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; padding: 4rem 0;">
          <div class="footer-brand">
            <a href="${homeLink}" class="footer-logo" style="display: flex; align-items: center; gap: 0.75rem; text-decoration: none; color: white; font-weight: 700; font-size: 1.25rem; margin-bottom: 1rem;">
              <img src="${logoPath}" alt="" width="40" height="40">
              <span>${CONFIG.siteName}</span>
            </a>
            <p style="color: rgba(255,255,255,0.7); line-height: 1.6;">نقدم حلول المنازل الذكية المتكاملة بتقنيات عالمية وخبرة محلية.</p>
          </div>

          <div class="footer-links">
            <h4 style="color: white; margin-bottom: 1.5rem;">روابط سريعة</h4>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem;">
              ${NAV_ITEMS.map(item => `<li><a href="${getRelativePath(item.href)}" style="color: rgba(255,255,255,0.7); text-decoration: none;">${item.name}</a></li>`).join('')}
            </ul>
          </div>

          <div class="footer-links">
            <h4 style="color: white; margin-bottom: 1.5rem;">تواصل معنا</h4>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem;">
              <li><a href="tel:${CONFIG.phoneNumber}" style="color: rgba(255,255,255,0.7); text-decoration: none;">${CONFIG.phoneDisplay}</a></li>
              <li><a href="${CONFIG.whatsappLink}" target="_blank" style="color: rgba(255,255,255,0.7); text-decoration: none;">واتساب</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom" style="border-top: 1px solid rgba(255,255,255,0.1); padding: 2rem 0; text-align: center; color: rgba(255,255,255,0.5); font-size: 0.875rem;">
          <p>© ${new Date().getFullYear()} ${CONFIG.siteName}. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  `;
}

/**
 * Check if current page matches nav item
 */
function isCurrentPage(href) {
  const currentPath = window.location.pathname;
  if (href === 'index.html') {
    return currentPath.endsWith('/') || currentPath.endsWith('/index.html') || currentPath.endsWith('smarts-homes');
  }
  return currentPath.includes(href.replace('index.html', ''));
}

/**
 * Header Scroll Effect
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  
  const currentPath = window.location.pathname;
  const isHome = currentPath.endsWith('/') || currentPath.endsWith('/index.html') || currentPath.endsWith('smarts-homes');
  
  if (!isHome) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/**
 * Mobile Drawer Functionality
 */
function initMobileDrawer() {
  const burgerBtn = document.querySelector('.burger-btn');
  const drawer = document.getElementById('mobile-drawer');
  const closeBtn = document.querySelector('.drawer-close');
  const overlay = document.querySelector('.drawer-overlay');

  if (!burgerBtn || !drawer) return;

  burgerBtn.addEventListener('click', () => drawer.classList.add('open'));
  closeBtn.addEventListener('click', () => drawer.classList.remove('open'));
  overlay.addEventListener('click', () => drawer.classList.remove('open'));
}

/**
 * Reveal Animations on Scroll
 */
function initRevealAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Start the app
document.addEventListener('DOMContentLoaded', init);
