Polymer({
  is: 'window-demo',
  properties: {
    frameOption: {
      type: String,
      value: 'chrome',
      observer: 'frameOptionChanged'
    },
    isOpened: {
      type: Boolean,
      value: false
    },
    windowState: {
      type: String,
      value: 'normal'
    },
    windowhidden: {
      type: Boolean,
      value: false,
      observer: 'windowhiddenChanged'
    },
    windowid: {
      type: String,
      value: 'demo-window'
    },
    windowmaximized: {
      type: Boolean,
      value: false,
      observer: 'windowmaximizedChanged'
    },
    windowminimized: {
      type: Boolean,
      value: false,
      observer: 'windowminimizedChanged'
    }
  },
  onCreated: function (event, details) {
    console.log('Window created', details);
    this.isOpened = true;
    this.$.log.append('Window "' + this.windowid + '" has been created.');
  },
  onError: function (event, details) {
    console.error('Error from window API', details);
    this.$.log.append('An error occurred: ' + JSON.stringify(), true);
  },
  openWindow: function (event, details) {
    console.log('open window');
    this.$.window.create();
  },
  closeWindow: function () {
    var id = this.$.window.window.id;
    this.$.window.window.close();
    this.isOpened = false;
    this.$.log.append('Window "' + id + '" has been closed.');
  },
  frameOptionChanged: function () {
    // TODO: add "close" / "open" button highlight animation
    // to point a need to reopen a window.
    this.$.log.append('Reopen window so frame options change may take effect.');
  },
  windowhiddenChanged: function () {
    if (this.windowhidden) {
      this.$.log.append('Window is now hidden');
    } else {
      this.$.log.append('Window is now visible');
    }
  },
  windowmaximizedChanged: function () {
    if (this.windowmaximized) {
      this.$.log.append('Window is now maximized');
      this.windowState = 'maximized';
    } else {
      this.$.log.append('Window has been restored');
      if (!this.windowminimized) {
        this.windowState = 'normal';
      } else {
        this.windowState = 'minimized';
      }
    }
  },
  windowminimizedChanged: function () {
    if (this.windowminimized) {
      this.$.log.append('Window is now minimized');
      this.windowState = 'minimized';
    } else {
      this.$.log.append('Window has been restored');
      if (!this.windowmaximized) {
        this.windowState = 'normal';
      } else {
        this.windowState = 'maximized';
      }
    }
  }
});
