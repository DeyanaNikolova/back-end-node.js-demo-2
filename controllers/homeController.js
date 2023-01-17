const { loadTemplate, layout } = require('../util/template');

module.exports = async (req, res) => {
    const homePage = await loadTemplate('home');
    res.write(layout(homePage));
    res.end();
}