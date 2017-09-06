const assert = require('assert');
const app = require('../../app');
const request = require('supertest').agent(app.listen());

describe('点击加一的接口测试', ()=>{
    it('/thumb/add测试', (done)=>{
        request.post('/thumb/add')
            .expect(200)
            .end(function(err, res) {
                if (err) throw err;
                // console.log(res);
                assert(res.body.success, true);
                done();
            });
    });
});