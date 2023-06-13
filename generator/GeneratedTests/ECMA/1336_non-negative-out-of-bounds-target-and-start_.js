try {
    assert(compareArray([
        0,
        1,
        2,
        3,
        4,
        5
    ].copyWithin(6, 0), [
        0,
        1,
        2,
        3,
        4,
        5
    ]), '[0, 1, 2, 3, 4, 5].copyWithin(6, 0) => [0, 1, 2, 3, 4, 5]');
    assert(compareArray([
        0,
        1,
        2,
        3,
        4,
        5
    ].copyWithin(7, 0), [
        0,
        1,
        2,
        3,
        4,
        5
    ]), '[0, 1, 2, 3, 4, 5].copyWithin(6, 0) => [0, 1, 2, 3, 4, 5]');
    assert(compareArray([
        0,
        1,
        2,
        3,
        4,
        5
    ].copyWithin(Infinity, 0), [
        0,
        1,
        2,
        3,
        4,
        5
    ]), '[0, 1, 2, 3, 4, 5].copyWithin(Infinity, 0) => [0, 1, 2, 3, 4, 5]');
    assert(compareArray([
        0,
        1,
        2,
        3,
        4,
        5
    ].copyWithin(6, 2), [
        0,
        1,
        2,
        3,
        4,
        5
    ]), '[0, 1, 2, 3, 4, 5].copyWithin(6, 2) => [0, 1, 2, 3, 4, 5]');
    assert(compareArray([
        0,
        1,
        2,
        3,
        4,
        5
    ].copyWithin(7, 2), [
        0,
        1,
        2,
        3,
        4,
        5
    ]), '[0, 1, 2, 3, 4, 5].copyWithin(7, 2) => [0, 1, 2, 3, 4, 5]');
    assert(compareArray([
        0,
        1,
        2,
        3,
        4,
        5
    ].copyWithin(Infinity, 2), [
        0,
        1,
        2,
        3,
        4,
        5
    ]), '[0, 1, 2, 3, 4, 5].copyWithin(Infinity, 2) => [0, 1, 2, 3, 4, 5]');
    assert(compareArray([
        0,
        1,
        2,
        3,
        4,
        5
    ].copyWithin(0, 6), [
        0,
        1,
        2,
        3,
        4,
        5
    ]), '[0, 1, 2, 3, 4, 5].copyWithin(0, 6) => [0, 1, 2, 3, 4, 5]');
    assert(compareArray([
        0,
        1,
        2,
        3,
        4,
        5
    ].copyWithin(0, 7), [
        0,
        1,
        2,
        3,
        4,
        5
    ]), '[0, 1, 2, 3, 4, 5].copyWithin(0, 7) => [0, 1, 2, 3, 4, 5]');
    assert(compareArray([
        0,
        1,
        2,
        3,
        4,
        5
    ].copyWithin(0, Infinity), [
        0,
        1,
        2,
        3,
        4,
        5
    ]), '[0, 1, 2, 3, 4, 5].copyWithin(0, Infinity) => [0, 1, 2, 3, 4, 5]');
    assert(compareArray([
        0,
        1,
        2,
        3,
        4,
        5
    ].copyWithin(2, 6), [
        0,
        1,
        2,
        3,
        4,
        5
    ]), '[0, 1, 2, 3, 4, 5].copyWithin(2, 6) => [0, 1, 2, 3, 4, 5]');
    assert(compareArray([
        0,
        1,
        2,
        3,
        4,
        5
    ].copyWithin(1, 7), [
        0,
        1,
        2,
        3,
        4,
        5
    ]), '[0, 1, 2, 3, 4, 5].copyWithin(1, 7) => [0, 1, 2, 3, 4, 5]');
    assert(compareArray([
        0,
        1,
        2,
        3,
        4,
        5
    ].copyWithin(3, Infinity), [
        0,
        1,
        2,
        3,
        4,
        5
    ]), '[0, 1, 2, 3, 4, 5].copyWithin(3, Infinity) => [0, 1, 2, 3, 4, 5]');
    assert(compareArray([
        0,
        1,
        2,
        3,
        4,
        5
    ].copyWithin(6, 6), [
        0,
        1,
        2,
        3,
        4,
        5
    ]), '[0, 1, 2, 3, 4, 5].copyWithin(6, 6) => [0, 1, 2, 3, 4, 5]');
    assert(compareArray([
        0,
        1,
        2,
        3,
        4,
        5
    ].copyWithin(10, 10), [
        0,
        1,
        2,
        3,
        4,
        5
    ]), '[0, 1, 2, 3, 4, 5].copyWithin(10, 10) => [0, 1, 2, 3, 4, 5]');
    assert(compareArray([
        0,
        1,
        2,
        3,
        4,
        5
    ].copyWithin(Infinity, Infinity), [
        0,
        1,
        2,
        3,
        4,
        5
    ]), '[0, 1, 2, 3, 4, 5].copyWithin(Infinity, Infinity) => [0, 1, 2, 3, 4, 5]');
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