const fs = require('fs');

function indexPage(path, response) {
    displayFile(path, response);
}

function aboutPage(path, response) {
    displayFile(path, response);
}

function contactPage(path, response) {
    displayFile(path, response);
}

function subscribePage(path, response) {
    displayFile(path, response);
}

function fourOfourPage(url, path, response) {
    displayFile(path, response);
}

function displayFile(path, response) {
    fs.readFile(path, function(err, data) {
        if(err) {
            console.log(err);
            response.end();
        } else {
            console.log(`${path} file was served.`)
            response.writeHead(response.statusCode, {'Content-Type': 'text/html'});
            response.write(data);
            response.end();
        };   
    });
};

module.exports = {
    indexPage,
    aboutPage,
    contactPage,
    subscribePage,
    fourOfourPage,
}