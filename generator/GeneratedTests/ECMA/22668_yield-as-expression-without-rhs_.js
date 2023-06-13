try {
    var iter, result;
    var obj = {
        *g1() {
            yield;
        },
        *g2() {
            [yield];
        },
        *g3() {
            {
                yield;
            }
        },
        *g4() {
            yield, yield;
        },
        *g5() {
            (yield) ? yield : yield;
        }
    };
    iter = obj.g1();
    result = iter.next();
    assert.sameValue(result.value, undefined, 'Within grouping operator: result `value`');
    assert.sameValue(result.done, false, 'Within grouping operator: result `done` flag');
    result = iter.next();
    assert.sameValue(result.value, undefined, 'Following grouping operator: result `value`');
    assert.sameValue(result.done, true, 'Following grouping operator: result `done` flag');
    iter = obj.g2();
    result = iter.next();
    assert.sameValue(result.value, undefined, 'Within array literal: result `value`');
    assert.sameValue(result.done, false, 'Within array literal: result `done` flag');
    result = iter.next();
    assert.sameValue(result.value, undefined, 'Following array literal: result `value`');
    assert.sameValue(result.done, true, 'Following array literal: result `done` flag');
    iter = obj.g3();
    result = iter.next();
    assert.sameValue(result.value, undefined, 'Within object literal: result `value`');
    assert.sameValue(result.done, false, 'Within object literal: result `done` flag');
    result = iter.next();
    assert.sameValue(result.value, undefined, 'Following object literal: result `value`');
    assert.sameValue(result.done, true, 'Following object literal: result `done` flag');
    iter = obj.g4();
    result = iter.next();
    assert.sameValue(result.value, undefined, 'First expression in comma expression: result `value`');
    assert.sameValue(result.done, false, 'First expression in comma expression: result `done` flag');
    result = iter.next();
    assert.sameValue(result.value, undefined, 'Second expression in comma expression: result `value`');
    assert.sameValue(result.done, false, 'Second expression in comma expression: result `done` flag');
    result = iter.next();
    assert.sameValue(result.value, undefined, 'Following comma expression: result `value`');
    assert.sameValue(result.done, true, 'Following comma expression: result `done` flag');
    iter = obj.g5();
    result = iter.next();
    assert.sameValue(result.value, undefined, 'Conditional expression in conditional operator: result `value`');
    assert.sameValue(result.done, false, 'Conditional expression in conditional operator: result `done` flag');
    result = iter.next();
    assert.sameValue(result.value, undefined, 'Branch in conditional operator: result `value`');
    assert.sameValue(result.done, false, 'Branch in conditional operator: result `done` flag');
    result = iter.next();
    assert.sameValue(result.value, undefined, 'Following conditional operator: result `value`');
    assert.sameValue(result.done, true, 'Following conditional operator: result `done` flag');
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