const fs = require('fs');

module.exports = (req, res) => {
    const target = fs.createWriteStream('./uploads/text.txt');
    req.on('data', data => console.log(data.toString()));
    req.pipe(target);

    res.writeHead(301, {
        'Location': '/catalog'
    });
    res.end();
};