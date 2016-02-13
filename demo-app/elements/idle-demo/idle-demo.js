Polymer({
  is: 'idle-demo',
  properties: {
    interval: {
      type: Number,
      value: 60
    },
    state: {
      type: String,
      value: 'unknown'
    }
  },
  queryState: function () {
    this.$.idle.state();
  },
  showState: function (event, details, sender) {
    this.state = details.state;
    this.$.log.append('Current state is ' + this.state);
  },
  iddleError: function (event, details, sender) {
    this.$.log.append(details.message, true);
  }
});
