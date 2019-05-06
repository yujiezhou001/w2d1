var https = require('https');

module.exports = {

    getHTML: function (options, callback) {


        var completedata = "";
    
        https.get(options, function (response) {
            
            response.on('data', function (data) {
                completedata += data;
                console.log('Chunk Received. Length:', data.length, '\n');
              });
        
            response.on('end', function(data) {
                callback(completedata)
              });
    
        })
    }
}

  
function printHTML (html) {
    console.log(html);
  }

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
};


// getHTML(requestOptions, printHTML);