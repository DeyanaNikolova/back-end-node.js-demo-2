const { layout } = require('../util/template');
const aboutPage = `
<div>
    <h1>About Us</h1>
    <p>About Page</p>
</div>`;



module.exports = (req, res) => {
    res.write(layout(aboutPage, 'About'));
    res.end();
};