const Koa = require('koa');
const app = new Koa();
const render = require('koa-swig');
const configs = require('./configs/default');
const co = require('co');
const router = require('./controllers');
const serve = require('koa-static');
const errorhandler = require('koa-errorhandler');
console.log(process.execPath);
app.context.render = co.wrap(render({
    root: configs.viewsConf,
    autoescape: true,
    cache: false,
    ext: 'html',
}));
// 错误
app.use(errorhandler());
// 设置静态文件
app.use(serve(configs.assetsConf));
// 设置路由
app.use(router.routes());



app.listen(configs.port);
// module.exports = app;