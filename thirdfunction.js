function getAndPrintHTML (options) {

    var https =require('https');

    var completedata = "";

    https.get(options, function (response) {
        response.on('data', function (data) {
            completedata += data;
            console.log('Chunk Received. Length:', data.length, '\n');
          });
    
        response.on('end', function(data) {
            console.log(completedata);
          });

    })
    
  }


  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };


  getAndPrintHTML(requestOptions);