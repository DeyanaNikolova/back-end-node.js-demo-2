const handlers = {};

function match(method, url) {
    const methods = handlers[url] || {};
   
    const handler = methods[method];
    
    if (handler == undefined) {
        return defaultHandler;
    } else {
        return handler;
    }
}

function registerHandler(method, url, handler) {
    let methods = handlers[url];

    if(methods == undefined){
        methods = {};
        handlers[url] = methods;
    }

    handlers[url][method] = handler;
}

function defaultHandler(req, res) {
    res.statusCode = 404;
    res.write('Page is not found!');
    res.end();
}

module.exports = {
    registerHandler,
    get: (...params) => registerHandler('GET', ...params),
    post: (...params) => registerHandler('POST', ...params),
    del: (...params) => registerHandler('DELETE', ...params),
    match
};