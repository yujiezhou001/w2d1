var random = require('./http-functions');

function printHTML (html) {
    console.log(html);
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
};


random.getHTML(requestOptions, printHTML);