'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _thumb = require('./thumb');

var _thumb2 = _interopRequireDefault(_thumb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = new _koaRouter2.default();

// 首页
router.get('/index/index', async (ctx, next) => {
    await ctx.render('thumbsup', { title: '点赞' });
});

// koa去访问php点击
router.all('/', async (ctx, next) => {
    let rets = await (0, _requestPromise2.default)('http://localhost/myphp/yd/yidengtask/zuoye/second/index.php');
    ctx.response.type = 'application/json';
    ctx.body = JSON.stringify(rets);
});

router.use('/thumb', _thumb2.default.routes());

router.all('*', async (ctx, next) => {
    ctx.status = 404;
    ctx.body = '页面没有找到';
});

exports.default = router;