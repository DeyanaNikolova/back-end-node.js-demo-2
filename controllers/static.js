const fs = require('fs');

module.exports = (req, res) => {
    const file = fs.createReadStream('./static/cat.jpg');
    file.pipe(res);
    // file.on('data', data => res.write(data));
    // file.on('on', () => res.end());
};