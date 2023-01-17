const fs = require('fs');

module.exports = (req, res) => {
    const fileName = req.url.slice(8);

    try{
        const file = fs.createReadStream(`./static/${fileName}`);
        file.pipe(res);

        // file.on('data', data => res.write(data));
        // file.on('on', () => res.end());
    } catch(err){
        res.statusCode = 404;
        res.write('Page is not found!');
        res.end();
    }  
};