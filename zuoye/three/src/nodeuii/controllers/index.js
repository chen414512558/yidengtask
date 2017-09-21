import Router from 'koa-router';
const router = new Router();
import rq from 'request-promise';
import thumbRouter from './thumb';
// 首页
router.get('/index/index', async (ctx, next)=>{
    await ctx.render('thumbsup', {title: '点赞'});
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

export default router;