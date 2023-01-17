const fs = require('fs/promises');

async function loadTemplate(name) {
    try{
    const template = await fs.readFile(`./views/${name}.html`);
    return template;
    } catch(err){
        return '';
    }
}

function layout(html, title = 'Welcome') {
    const layout = loadTemplate('layout');
   return layout.replace('{{title}}', title).replace('{{body}}', html)
}

module.exports = {
    loadTemplate,
    layout
};