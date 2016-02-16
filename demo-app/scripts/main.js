(function(document, window) {
  'use strict';

  let app = document.querySelector('#app');
  app.baseUrl = '/demo-app/';
  // event called when the app is initialized and can remove loader.
  window.addEventListener('DemoInitialized', function() {
    //document.querySelector('loader-screen').close();
  });

  window.addEventListener('WebComponentsReady', function() {
    //event will be handled in elements/routing.html
    let event = new Event('initializeRouting');
    window.dispatchEvent(event);
  });

  app.scrollPageToTop = function() {
    app.$.headerPanelMain.scrollToTop(true);
  };

  app.closeDrawer = function() {
    app.$.paperDrawerPanel.closeDrawer();
  };

  app._menuTap = function(e) {
    e = Polymer.dom(e);
    if (e.rootTarget.dataset.place) {
      page(e.rootTarget.dataset.place);
    }
  };

})(document, window);
