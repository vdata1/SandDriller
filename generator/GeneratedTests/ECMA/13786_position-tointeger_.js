try {
    assert.sameValue('aaaa'.indexOf('aa', 0), 0);
    assert.sameValue('aaaa'.indexOf('aa', 1), 1);
    assert.sameValue('aaaa'.indexOf('aa', -0.9), 0, 'ToInteger: truncate towards 0');
    assert.sameValue('aaaa'.indexOf('aa', 0.9), 0, 'ToInteger: truncate towards 0');
    assert.sameValue('aaaa'.indexOf('aa', 1.9), 1, 'ToInteger: truncate towards 0');
    assert.sameValue('aaaa'.indexOf('aa', NaN), 0, 'ToInteger: NaN => 0');
    assert.sameValue('aaaa'.indexOf('aa', Infinity), -1);
    assert.sameValue('aaaa'.indexOf('aa', undefined), 0, 'ToInteger: undefined => NaN => 0');
    assert.sameValue('aaaa'.indexOf('aa', null), 0, 'ToInteger: null => 0');
    assert.sameValue('aaaa'.indexOf('aa', false), 0, 'ToInteger: false => 0');
    assert.sameValue('aaaa'.indexOf('aa', true), 1, 'ToInteger: true => 1');
    assert.sameValue('aaaa'.indexOf('aa', '0'), 0, 'ToInteger: parse Number');
    assert.sameValue('aaaa'.indexOf('aa', '1.9'), 1, 'ToInteger: parse Number => 1.9 => 1');
    assert.sameValue('aaaa'.indexOf('aa', 'Infinity'), -1, 'ToInteger: parse Number');
    assert.sameValue('aaaa'.indexOf('aa', ''), 0, 'ToInteger: unparseable string => NaN => 0');
    assert.sameValue('aaaa'.indexOf('aa', 'foo'), 0, 'ToInteger: unparseable string => NaN => 0');
    assert.sameValue('aaaa'.indexOf('aa', 'true'), 0, 'ToInteger: unparseable string => NaN => 0');
    assert.sameValue('aaaa'.indexOf('aa', 2), 2);
    assert.sameValue('aaaa'.indexOf('aa', '2'), 2, 'ToInteger: parse Number');
    assert.sameValue('aaaa'.indexOf('aa', 2.9), 2, 'ToInteger: truncate towards 0');
    assert.sameValue('aaaa'.indexOf('aa', '2.9'), 2, 'ToInteger: parse Number => truncate towards 0');
    assert.sameValue('aaaa'.indexOf('aa', [0]), 0, 'ToInteger: [0].toString() => "0" => 0');
    assert.sameValue('aaaa'.indexOf('aa', ['1']), 1, 'ToInteger: ["1"].toString() => "1" => 1');
    assert.sameValue('aaaa'.indexOf('aa', {}), 0, 'ToInteger: ({}).toString() => "[object Object]" => NaN => 0');
    assert.sameValue('aaaa'.indexOf('aa', []), 0, 'ToInteger: [].toString() => "" => NaN => 0');
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