var userHome = require('user-home');
var runFrom = userHome + '/.assemble-wonder';
var Wonderfiles = {
  init: function() {
     require('fs').mkdir(runFrom);
  }
};

Wonderfiles.init();
module.exports = Wonderfiles;
