try {
    var threeTwentyTwo = 1467818520000;
    var threeFiftyNine = 1467820740000;
    var minMs = 60 * 1000;
    assert.sameValue(new Date(threeTwentyTwo).getUTCMinutes(), 22, 'first millisecond');
    assert.sameValue(new Date(threeTwentyTwo - 1).getUTCMinutes(), 21, 'previous millisecond');
    assert.sameValue(new Date(threeTwentyTwo + minMs - 1).getUTCMinutes(), 22, 'final millisecond');
    assert.sameValue(new Date(threeTwentyTwo + minMs).getUTCMinutes(), 23, 'subsequent millisecond');
    assert.sameValue(new Date(threeFiftyNine).getUTCMinutes(), 59, 'first millisecond (day boundary)');
    assert.sameValue(new Date(threeFiftyNine - 1).getUTCMinutes(), 58, 'previous millisecond (day boundary)');
    assert.sameValue(new Date(threeFiftyNine + minMs - 1).getUTCMinutes(), 59, 'final millisecond (day boundary)');
    assert.sameValue(new Date(threeFiftyNine + minMs).getUTCMinutes(), 0, 'subsequent millisecond (day boundary)');
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