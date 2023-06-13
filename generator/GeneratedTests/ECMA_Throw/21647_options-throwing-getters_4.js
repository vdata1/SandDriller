try {
    function CustomError() {
        let REPLACER = 23;
    }
    const o1 = {
        get localeMatcher() {
            let REPLACER = 23;
            throw new CustomError();
        },
        get numberingSystem() {
            let REPLACER = 23;
            throw 'should not get the numberingSystem option before localeMatcher';
        },
        get style() {
            let REPLACER = 23;
            throw 'should not get the style option before localeMatcher';
        },
        get numeric() {
            throw () => {
                return () => {
                };
            };
            throw 'should not get the numeric option before localeMatcher';
        }
    };
    const o2captures = [];
    const o2 = {
        get localeMatcher() {
            o2captures.push('localeMatcher');
        },
        get numberingSystem() {
            throw new CustomError();
        },
        get style() {
            throw 'should not get the style option before numberingSystem';
        },
        get numeric() {
            throw 'should not get the numeric option before numberingSystem';
        }
    };
    const o3captures = [];
    const o3 = {
        get localeMatcher() {
            o3captures.push('localeMatcher');
        },
        get numberingSystem() {
            o3captures.push('numberingSystem');
        },
        get style() {
            throw new CustomError();
        },
        get numeric() {
            throw 'should not get the numeric option before style';
        }
    };
    const o4captures = [];
    const o4 = {
        get localeMatcher() {
            o4captures.push('localeMatcher');
        },
        get numberingSystem() {
            o4captures.push('numberingSystem');
        },
        get style() {
            o4captures.push('style');
        },
        get numeric() {
            throw new CustomError();
        }
    };
    assert.throws(CustomError, () => {
        new Intl.RelativeTimeFormat('en', o1);
    }, `Exception from localeMatcher getter should be propagated`);
    assert.throws(CustomError, () => {
        new Intl.RelativeTimeFormat('en', o2);
    }, `Exception from numberingSystem getter should be propagated`);
    assert.compareArray(o2captures, ['localeMatcher']);
    assert.throws(CustomError, () => {
        new Intl.RelativeTimeFormat('en', o3);
    }, `Exception from style getter should be propagated`);
    assert.compareArray(o3captures, [
        'localeMatcher',
        'numberingSystem'
    ]);
    assert.throws(CustomError, () => {
        new Intl.RelativeTimeFormat('en', o4);
    }, `Exception from numeric getter should be propagated`);
    assert.compareArray(o4captures, [
        'localeMatcher',
        'numberingSystem',
        'style'
    ]);
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