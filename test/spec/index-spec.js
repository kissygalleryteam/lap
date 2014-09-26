KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('lap', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/lap/0.0.1/']});