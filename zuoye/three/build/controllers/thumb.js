'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _index = require('../models/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = new _koaRouter2.default();

router.post('/add', async (ctx, next) => {
    let num = await _index.ThumbModel.addNum();
    ctx.response.type = 'application/json';
    ctx.body = JSON.stringify({
        success: true,
        num: num
    });
});

exports.default = router;