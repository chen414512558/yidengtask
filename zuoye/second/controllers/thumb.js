const Router = require('koa-router');
const router = new Router();
const thumbModel = require('../models').thumb;
router.post('/add', async (ctx, next)=>{
    let num =  await thumbModel.addNum();
    ctx.response.type = 'application/json';
    ctx.body = JSON.stringify({
        success: true,
        num: num
    });
});

module.exports = router;