var random = require('../http-functions');

function printHTML (html) {
    console.log(html.toLowerCase());
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/lowercase.html'
};


random.getHTML(requestOptions, printHTML);