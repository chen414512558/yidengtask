const Router = require('koa-router');
const router = new Router();
const rq = require('request-promise');
const thumbRouter = require('./thumb');
// 首页
router.get('/index/index', async (ctx, next)=>{
    await ctx.render('thumbsup');
});

// koa去访问php点击
router.all('/', async (ctx, next)=>{
    let rets = await rq('http://localhost/myphp/yd/yidengtask/zuoye/second/index.php');
    ctx.response.type = 'application/json';
    ctx.body = JSON.stringify(rets);
});

router.use('/thumb', thumbRouter.routes());


router.all('*', async (ctx, next)=>{
    ctx.status = 404;
    ctx.body = '页面没有找到';
})

module.exports = router;