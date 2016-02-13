Polymer({
  is: 'filesystem-demo',
  properties: {
    fileContent: {
      type: String,
      value: ''
    },
    fileName: {
      type: String,
      value: 'file.txt'
    },
    allFiles: {
      type: Array,
      value: []
    },
    useSync: {
      type: Boolean,
      value: true
    },
  },
  onFilesystemFileRead: function(event, details){
    console.log('onFilesystemFileRead',event, details);
    this.fileContent = details.content;
    this.$.log.append('File "'+ this.fileName +'" read.');
  },
  onFilesystemFileWrite: function(event, details){
    console.log('onFilesystemFileWrite', event, details);
    this.$.log.append('File "'+ this.fileName +'" has been saved.');
  },
  onFilesystemError: function(event, details){
    console.error('onFilesystemError',event, details);
    this.$.log.append('Error operating on file: "'+ this.fileName +'": ' + details.message, true);
  },

  readFile: function(){
    this.$.log.append('Reading the file.');
    this.$.fileSystem.read();
  },

  writeFile: function(){
    this.$.log.append('Writing  to the file.');
    this.$.fileSystem.write();
  },

  listFiles: function(){
    this.allFiles = [];
    this.$.listDialog.toggle();
    this.$.fileSystem2.list();
  },

  onFilesystemList: function(event, details){
    if(details && details.files && details.files.length > 0){
      details.files.forEach(function(item){
        this.allFiles.push(item.name);
      }.bind(this));
    }
  },

  selectFile: function(event, details){
    var name = event.target.dataset['name'];
    if(!name) return;

    this.fileName = name;
    this.$.listDialog.toggle();
  },

  deleteFile: function(event, details){
    this.$.fileSystem.remove();
  },

  onFilesystemRemoved: function(){
    this.$.log.append('The file "'+ this.fileName +'" has been removed from the filesystem.');
  }
});
