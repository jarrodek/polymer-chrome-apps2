'use strict';

/* global app */
window.addEventListener('initializeRouting', function() {
  try {
    history.redirect('!', '/demo-app/');
    page.base(app.baseUrl.replace(/\/$/, ''));
  } catch (e) {}
  // Middleware
  function scrollToTop(ctx, next) {
    app.scrollPageToTop();
    next();
  }

  function closeDrawer(ctx, next) {
    app.closeDrawer();
    next();
  }

  // Routes
  page('*', scrollToTop, closeDrawer, function(ctx, next) {
    next();
  });

  page('/', function() {
    app.route = 'request';
  });
  page('/bluetooth', function() {
    app.route = 'bluetooth';
  });
  // 404
  page('*', function() {
    page.redirect('/');
  });

  page({
    hashbang: true,
    popstate: false
  });

  let event = new Event('DemoInitialized');
  window.dispatchEvent(event);
});
