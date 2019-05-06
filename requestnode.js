function getAndPrintHTMLChunks () {

    var https =require('https');

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step1.html'
    };

    https.get(requestOptions, function (response) {
        response.on('data', function (data) {
            console.log(data);
            console.log('Chunk Received. Length:', data.length, '\n');
          });
    })
    /* Add your code here */
  
  }

  getAndPrintHTMLChunks();
