import {
    add,
} from '../../../src/webapp/libs/myfunc';
describe('测试点赞加一功能', function(){
    it('add函数测试', function(){
        expect(add(1)).toBe(2);
        expect(add()).toBe(0);
        expect(add('asd')).toBe(0);
        expect(add('12')).toBe(13);
    });
});