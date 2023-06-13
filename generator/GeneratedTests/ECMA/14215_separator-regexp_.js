try {
    assert.compareArray('x'.split(/^/), ['x'], '"x".split(/^/) must return ["x"]');
    assert.compareArray('x'.split(/$/), ['x'], '"x".split(/$/) must return ["x"]');
    assert.compareArray('x'.split(/.?/), [
        '',
        ''
    ], '"x".split(/.?/) must return ["", ""]');
    assert.compareArray('x'.split(/.*/), [
        '',
        ''
    ], '"x".split(/.*/) must return ["", ""]');
    assert.compareArray('x'.split(/.+/), [
        '',
        ''
    ], '"x".split(/.+/) must return ["", ""]');
    assert.compareArray('x'.split(/.*?/), ['x'], '"x".split(/.*?/) must return ["x"]');
    assert.compareArray('x'.split(/.{1}/), [
        '',
        ''
    ], '"x".split(/.{1}/) must return ["", ""]');
    assert.compareArray('x'.split(/.{1,}/), [
        '',
        ''
    ], '"x".split(/.{1,}/) must return ["", ""]');
    assert.compareArray('x'.split(/.{1,2}/), [
        '',
        ''
    ], '"x".split(/.{1,2}/) must return ["", ""]');
    assert.compareArray('x'.split(/()/), ['x'], '"x".split(/()/) must return ["x"]');
    assert.compareArray('x'.split(/./), [
        '',
        ''
    ], '"x".split(/./) must return ["",""]');
    assert.compareArray('x'.split(/(?:)/), ['x'], '"x".split(/(?:)/) must return ["x"]');
    assert.compareArray('x'.split(/(...)/), ['x'], '"x".split(/(...)/) must return ["x"]');
    assert.compareArray('x'.split(/(|)/), ['x'], '"x".split(/(|)/) must return ["x"]');
    assert.compareArray('x'.split(/[]/), ['x'], '"x".split(/[]/) must return ["x"]');
    assert.compareArray('x'.split(/[^]/), [
        '',
        ''
    ], '"x".split(/[^]/) must return ["", ""]');
    assert.compareArray('x'.split(/[.-.]/), ['x'], '"x".split(/[.-.]/) must return ["x"]');
    assert.compareArray('x'.split(/\0/), ['x'], '"x".split(/\\0/) must return ["x"]');
    assert.compareArray('x'.split(/\b/), ['x'], '"x".split(/\\b/) must return ["x"]');
    assert.compareArray('x'.split(/\B/), ['x'], '"x".split(/\\B/) must return ["x"]');
    assert.compareArray('x'.split(/\d/), ['x'], '"x".split(/\\d/) must return ["x"]');
    assert.compareArray('x'.split(/\D/), [
        '',
        ''
    ], '"x".split(/\\D/) must return ["", ""]');
    assert.compareArray('x'.split(/\n/), ['x'], '"x".split(/\\n/) must return ["x"]');
    assert.compareArray('x'.split(/\r/), ['x'], '"x".split(/\\r/) must return ["x"]');
    assert.compareArray('x'.split(/\s/), ['x'], '"x".split(/\\s/) must return ["x"]');
    assert.compareArray('x'.split(/\S/), [
        '',
        ''
    ], '"x".split(/\\S/) must return ["", ""]');
    assert.compareArray('x'.split(/\v/), ['x'], '"x".split(/\\v/) must return ["x"]');
    assert.compareArray('x'.split(/\w/), [
        '',
        ''
    ], '"x".split(/\\w/) must return ["", ""]');
    assert.compareArray('x'.split(/\W/), ['x'], '"x".split(/\\W/) must return ["x"]');
    assert.compareArray('x'.split(/\k<x>/), ['x'], '"x".split(/\\k<x>/) must return ["x"]');
    assert.compareArray('x'.split(/\xA0/), ['x'], '"x".split(/\\xA0/) must return ["x"]');
    assert.compareArray('x'.split(/\XA0/), ['x'], '"x".split(/\\XA0/) must return ["x"]');
    assert.compareArray('x'.split(/\ddd/), ['x'], '"x".split(/\\ddd/) must return ["x"]');
    assert.compareArray('x'.split(/\cY/), ['x'], '"x".split(/\\cY/) must return ["x"]');
    assert.compareArray('x'.split(/[\b]/), ['x'], '"x".split(/[\\b]/) must return ["x"]');
    assert.compareArray('x'.split(/\x/), [
        '',
        ''
    ], '"x".split(/\\x/) must return ["", ""]');
    assert.compareArray('x'.split(/\X/), ['x'], '"x".split(/\\X/) must return ["x"]');
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