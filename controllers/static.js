const fs = require('fs');

module.exports = (req, res) => {
    const fileName = req.url.slice(8);

    const file = fs.createReadStream(`./static/${fileName}`);
    file.on('error', () => {
        res.statusCode = 404;
        res.write('Page is not found!');
        res.end();
    });

    file.pipe(res);

    // file.on('data', data => res.write(data));
    // file.on('on', () => res.end());

};