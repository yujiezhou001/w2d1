function getAndPrintHTML () {

    var https =require('https');

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step1.html'
    };

    var completedata = "";

    https.get(requestOptions, function (response) {
        response.on('data', function (data) {
            completedata += data;
            console.log('Chunk Received. Length:', data.length, '\n');
          });
    
        response.on('end', function(data) {
            console.log(completedata);
          });

    })
    
  }

  getAndPrintHTML();