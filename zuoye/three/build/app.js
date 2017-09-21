'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaSwig = require('koa-swig');

var _koaSwig2 = _interopRequireDefault(_koaSwig);

var _default = require('./configs/default');

var _default2 = _interopRequireDefault(_default);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _index = require('./controllers/index');

var _index2 = _interopRequireDefault(_index);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaErrorhandler = require('koa-errorhandler');

var _koaErrorhandler2 = _interopRequireDefault(_koaErrorhandler);

var _koaLog4js = require('./middlewares/koa-log4js');

var _koaLog4js2 = _interopRequireDefault(_koaLog4js);

var _log4js = require('log4js');

var _log4js2 = _interopRequireDefault(_log4js);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const logger = require('koa-logger')
const app = new _koa2.default();

app.context.render = _co2.default.wrap((0, _koaSwig2.default)({
    root: _default2.default.viewsConf,
    autoescape: true,
    cache: false,
    ext: 'html'
}));
// 错误
app.use((0, _koaErrorhandler2.default)());
app.use((0, _koaLog4js2.default)(_default2.default.log, _log4js2.default));
// 设置静态文件
app.use((0, _koaStatic2.default)(_default2.default.assetsConf));
// 设置路由
app.use(_index2.default.routes());

app.listen(_default2.default.port);
// module.exports = app;