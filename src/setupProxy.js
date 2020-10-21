const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/date",
    createProxyMiddleware({
      target: "https://dnd-app2-server.herokuapp.com",
      changeOrigin: true,
    })
  );
  app.use(
    "/api/raports",
    createProxyMiddleware({
      target: "https://dnd-app2-server.herokuapp.com",
      changeOrigin: true,
    })
  );
};
