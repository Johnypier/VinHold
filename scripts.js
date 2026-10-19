/**
 * Holding Vinimpex - Production Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Toggle
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // 2. Header and Back-to-Top Scroll Listener
  const siteHeader = document.getElementById('site-header');
  const backToTop = document.getElementById('back-to-top');

  const checkScrollState = () => {
    // Cross-browser scroll position check
    const scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Header styling
    if (siteHeader) {
      if (scrollPos > 50) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    // Back to top visibility threshold set to 200px
    if (backToTop) {
      if (scrollPos > 200) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
  };

  // Run on scroll and once on load (handles mid-page reloads)
  window.addEventListener('scroll', checkScrollState, { passive: true });
  checkScrollState();

  // 3. Back to Top Click Action
  if (backToTop) {
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 4. Progressive Scroll Reveal Animation
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealElements.length > 0) {
    document.body.classList.add('has-animations');

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -30px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }
});