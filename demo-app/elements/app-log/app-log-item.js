Polymer({
  is: 'app-log-item',
  properties: {
    message: String,
    timestamp: Number,
    error: Boolean
  },

  _computeItemClassName: function(error) {
    var cls = 'item';
    if (error) {
      cls += ' item';
    }
    return cls;
  }
});
