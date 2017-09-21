import Router from 'koa-router';
const router = new Router();
import {
    ThumbModel,
} from '../models/index';
router.post('/add', async (ctx, next)=>{
    let num =  await ThumbModel.addNum();
    ctx.response.type = 'application/json';
    ctx.body = JSON.stringify({
        success: true,
        num: num,
    });
});

export default router;