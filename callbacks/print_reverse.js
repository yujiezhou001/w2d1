var random = require('../http-functions');

function printHTML (html) {
    console.log(html.split("").reverse().join(""));
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/reverse.html'
};


random.getHTML(requestOptions, printHTML);