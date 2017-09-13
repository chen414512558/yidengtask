const Koa = require('koa');
const app = new Koa();
const render = require('koa-swig');
const configs = require('./configs/default');
// const logger = require('koa-logger')
const co = require('co');
const router = require('./controllers');
const serve = require('koa-static');
const errorhandler = require('koa-errorhandler');
const logger = require('./middlewares/koa-log4js');
const log4js = require('log4js');
// const cheseLog = require('./logs');


app.context.render = co.wrap(render({
    root: configs.viewsConf,
    autoescape: true,
    cache: false,
    ext: 'html',
}));
// 错误
app.use(errorhandler());
app.use(logger(configs.log, log4js));
// 设置静态文件
app.use(serve(configs.assetsConf));
// 设置路由
app.use(router.routes());



app.listen(configs.port);
// module.exports = app;