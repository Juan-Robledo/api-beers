const routerPosts = require("../components/posts/network");

const routes = function(server){
    server.use('/beers', routerPosts);
}

module.exports = routes;