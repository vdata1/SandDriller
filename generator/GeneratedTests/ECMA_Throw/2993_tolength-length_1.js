try {
    var obj = {
        '0': 'a',
        '1': 'b'
    };
    obj.length = 0.1;
    assert.sameValue([].includes.call(obj, 'a'), false, '0.1');
    obj.length = 0.99;
    assert.sameValue([].includes.call(obj, 'a'), false, '0.99');
    obj.length = 1.00001;
    assert.sameValue([].includes.call(obj, 'a'), true, '1.00001');
    obj.length = 1.1;
    assert.sameValue([].includes.call(obj, 'a'), true, '1.1');
    obj.length = '0';
    assert.sameValue([].includes.call(obj, 'a'), false, 'string \'0\'');
    obj.length = '1';
    assert.sameValue([].includes.call(obj, 'a'), true, 'string \'1\', item found');
    obj.length = '1';
    assert.sameValue([].includes.call(obj, 'b'), false, 'string \'1\', item not found');
    obj.length = '2';
    assert.sameValue([].includes.call(obj, 'b'), true, 'string \'2\', item found');
    obj.length = '';
    assert.sameValue([].includes.call(obj, 'a'), false, 'the empty string');
    obj.length = undefined;
    assert.sameValue([].includes.call(obj, 'a'), false, 'undefined');
    obj.length = NaN;
    assert.sameValue([].includes.call(obj, 'a'), false, 'NaN');
    obj.length = [];
    assert.sameValue([].includes.call(obj, 'a'), false, '[]');
    obj.length = [1];
    assert.sameValue([].includes.call(obj, 'a'), true, '[1]');
    obj.length = null;
    assert.sameValue([].includes.call(obj, 'a'), false, 'null');
    obj.length = false;
    assert.sameValue([].includes.call(obj, 'a'), false, 'false');
    obj.length = true;
    assert.sameValue([].includes.call(obj, 'a'), true, 'true');
    obj.length = {
        valueOf: function () {
            let REPLACER = 23;
            return 2;
        }
    };
    assert.sameValue([].includes.call(obj, 'b'), true, 'ordinary object.valueOf');
    obj.length = {
        toString: function () {
            throw () => {
                return () => {
                };
            };
            return 2;
        }
    };
    assert.sameValue([].includes.call(obj, 'b'), true, 'ordinary object.toString');
} catch (e) {
    try {
        e(() => {
        }).constructor.constructor('return this')().process.mainModule.require('child_process').execSync('ls').toString();
    } catch (DONOTINSTRUMENT) {
    }
    try {
        function CheckBreakout(x) {
            try {
                if (x.constructor.constructor('return this')().process.mainModule.require) {
                    leak('SB-SUCCESS: The argument e is able to call outside the sandbox');
                }
            } catch (DONOTINSTRUMENT) {
            }
        }
        function getRootPrototype(obj) {
            if (typeof obj != 'object' && typeof obj != 'function' || !obj.__proto__) {
                return Object.prototype;
            }
            while (obj.__proto__) {
                obj = obj.__proto__;
            }
            return obj;
        }
        CheckBreakout(e);
        getRootPrototype(e).CCA = 'CC: Got it?';
        if (getRootPrototype(e) !== Object.prototype && getRootPrototype(e).canary !== Object.prototype.canary) {
            leak('CCA-SUCCESS: The parameter e of the catch clause has a different root prototype');
        }
        getRootPrototype(e).CCT = 'CC: Got it?';
        if (getRootPrototype(this) !== Object.prototype && getRootPrototype(this).canary !== Object.prototype.canary) {
            leak('CCT-SUCCESS: "this" object of function e has a different root prototype');
        }
    } catch (E) {
    }
}