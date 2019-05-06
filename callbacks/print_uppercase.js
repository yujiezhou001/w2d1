var random = require('../http-functions');

function printHTML (html) {
    console.log(html.toUpperCase());
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/uppercase.html'
};


random.getHTML(requestOptions, printHTML);