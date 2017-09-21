describe('测试点赞加一功能', function(){
    it('add函数测试', function(){
        expect(myFunc.add(1)).toBe(2);
        expect(myFunc.add()).toBe(0);
        expect(myFunc.add('asd')).toBe(0);
        expect(myFunc.add('12')).toBe(13);
    });
});