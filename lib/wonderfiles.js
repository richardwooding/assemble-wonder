var userHome = require('user-home');
var runFrom = userHome + '/.assemble-wonder';
var fs =require('fs');
var Wonderfiles = {
  init: function() {
    if (!fs.existsSync(runFrom)) {
     fs.mkdirSync(runFrom);
   }
  }
};

Wonderfiles.init();
module.exports = Wonderfiles;
