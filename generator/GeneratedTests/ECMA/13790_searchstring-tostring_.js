try {
    assert.sameValue('foo'.indexOf(''), 0);
    assert.sameValue('__foo__'.indexOf('foo'), 2);
    assert.sameValue('__undefined__'.indexOf(undefined), 2, 'ToString: undefined => "undefined"');
    assert.sameValue('__null__'.indexOf(null), 2, 'ToString: null => "null"');
    assert.sameValue('__true__'.indexOf(true), 2, 'ToString: true => "true"');
    assert.sameValue('__false__'.indexOf(false), 2, 'ToString: false => "false"');
    assert.sameValue('__0__'.indexOf(0), 2, 'ToString: Number to String');
    assert.sameValue('__0__'.indexOf(-0), 2, 'ToString: -0 => "0"');
    assert.sameValue('__Infinity__'.indexOf(Infinity), 2, 'ToString: Infinity => "Infinity"');
    assert.sameValue('__-Infinity__'.indexOf(-Infinity), 2, 'ToString: -Infinity => "-Infinity"');
    assert.sameValue('__NaN__'.indexOf(NaN), 2, 'ToString: NaN => "NaN"');
    assert.sameValue('__123.456__'.indexOf(123.456), 2, 'ToString: Number to String');
    assert.sameValue('__-123.456__'.indexOf(-123.456), 2, 'ToString: Number to String');
    assert.sameValue('foo'.indexOf([]), 0, 'ToString: .toString()');
    assert.sameValue('__foo,bar__'.indexOf([
        'foo',
        'bar'
    ]), 2, 'ToString: .toString()');
    assert.sameValue('__[object Object]__'.indexOf({}), 2, 'ToString: .toString()');
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