try {
    var data1 = 'data';
    var data2 = 'data';
    var proto = {
        set: function (value) {
            data2 = value;
        }
    };
    var ConstructFun = function () {
    };
    ConstructFun.prototype = proto;
    var child = new ConstructFun();
    child.set = function (value) {
        data1 = value;
    };
    var newObj = Object.create({}, { prop: child });
    var hasProperty = newObj.hasOwnProperty('prop');
    newObj.prop = 'overrideData';
    assert(hasProperty, 'hasProperty !== true');
    assert.sameValue(data1, 'overrideData', 'data1');
    assert.sameValue(data2, 'data', 'data2');
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