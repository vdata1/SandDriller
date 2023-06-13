try {
    assert(compareArray([
        0,
        0
    ].fill(1, undefined), [
        1,
        1
    ]), '`undefined` start coerced to 0');
    assert(compareArray([
        0,
        0
    ].fill(1, 0, undefined), [
        1,
        1
    ]), 'If end is undefined, let relativeEnd be len');
    assert(compareArray([
        0,
        0
    ].fill(1, null), [
        1,
        1
    ]), '`null` start coerced to 0');
    assert(compareArray([
        0,
        0
    ].fill(1, 0, null), [
        0,
        0
    ]), '`null` end coerced to 0');
    assert(compareArray([
        0,
        0
    ].fill(1, true), [
        0,
        1
    ]), '`true` start coerced to 1');
    assert(compareArray([
        0,
        0
    ].fill(1, 0, true), [
        1,
        0
    ]), '`true` end coerced to 1');
    assert(compareArray([
        0,
        0
    ].fill(1, false), [
        1,
        1
    ]), '`false` start coerced to 0');
    assert(compareArray([
        0,
        0
    ].fill(1, 0, false), [
        0,
        0
    ]), '`false` end coerced to 0');
    assert(compareArray([
        0,
        0
    ].fill(1, NaN), [
        1,
        1
    ]), '`NaN` start coerced to 0');
    assert(compareArray([
        0,
        0
    ].fill(1, 0, NaN), [
        0,
        0
    ]), '`NaN` end coerced to 0');
    assert(compareArray([
        0,
        0
    ].fill(1, '1'), [
        0,
        1
    ]), 'string start coerced');
    assert(compareArray([
        0,
        0
    ].fill(1, 0, '1'), [
        1,
        0
    ]), 'string end coerced');
    assert(compareArray([
        0,
        0
    ].fill(1, 1.5), [
        0,
        1
    ]), 'start as a float number coerced');
    assert(compareArray([
        0,
        0
    ].fill(1, 0, 1.5), [
        1,
        0
    ]), 'end as a float number coerced');
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