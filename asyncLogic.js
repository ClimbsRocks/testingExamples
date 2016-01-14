var fs = require('fs');

module.exports = function(callback) {
  fs.readFile('helloWorld.txt', function(err, data) {
    if(err) {
      console.error(err);
    } else {
      callback(data.toString());
    }
  });
};


