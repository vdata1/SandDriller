try {
    var x;
    var target = [
        1,
        2,
        3
    ];
    var p = new Proxy(target, {
        enumerate: function () {
            throw new Test262Error('An enumerate property on handler object shouldn\'t trigger a Proxy trap');
        }
    });
    var forInResults = [];
    for (x in p) {
        forInResults.push(x);
    }
    assert(compareArray(forInResults, [
        '0',
        '1',
        '2'
    ]));
    var forOfResults = [];
    for (x of p) {
        forOfResults.push(x);
    }
    assert(compareArray(forOfResults, [
        1,
        2,
        3
    ]));
    var itor = p[Symbol.iterator]();
    var next = itor.next();
    assert.sameValue(next.value, 1);
    assert.sameValue(next.done, false);
    next = itor.next();
    assert.sameValue(next.value, 2);
    assert.sameValue(next.done, false);
    next = itor.next();
    assert.sameValue(next.value, 3);
    assert.sameValue(next.done, false);
    next = itor.next();
    assert.sameValue(next.value, undefined);
    assert.sameValue(next.done, true);
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