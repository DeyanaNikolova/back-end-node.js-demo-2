const { layout } = require('../util/template');
const aboutPage = `
<div>
    <h1>About Us</h1>
    <p>About Page</p>
</div>`;



module.exports = async (req, res) => {
    res.write(await layout(aboutPage, 'About'));
    res.end();
};