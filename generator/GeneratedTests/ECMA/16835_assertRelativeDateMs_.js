try {
    var thrown;
    assertRelativeDateMs(new Date(1970, 0), 0);
    assertRelativeDateMs(new Date(1970, 0, 1, 0, 0, 0, 0), 0);
    assertRelativeDateMs(new Date(1970, 0, 1, 0, 0, 0, 1), 1);
    assertRelativeDateMs(new Date(1970, 0, 1, 0, 0, 0, -1), -1);
    assertRelativeDateMs(new Date(1970, 0, 1, 0, 0, 1, 0), 1000);
    assertRelativeDateMs(new Date(1970, 0, 1, 0, 0, -1, 0), -1000);
    assertRelativeDateMs(new Date(1970, 0, 1, 0, 2, 0, 0), 120000);
    assertRelativeDateMs(new Date(1970, 0, 1, 0, -2, 0, 0), -120000);
    assertRelativeDateMs(new Date(2016, 3, 12, 13, 21, 23, 24), 1460467283024);
    thrown = null;
    try {
        assertRelativeDateMs(new Date(1), 0);
    } catch (err) {
        thrown = err;
    }
    if (!thrown) {
        throw new Error('Expected error, but no error was thrown.');
    } else if (thrown.constructor !== Test262Error) {
        throw new Error('Expected error of type Test262Error.');
    }
    thrown = null;
    try {
        assertRelativeDateMs(new Date(-1), 0);
    } catch (err) {
        thrown = err;
    }
    if (!thrown) {
        throw new Error('Expected error, but no error was thrown.');
    } else if (thrown.constructor !== Test262Error) {
        throw new Error('Expected error of type Test262Error.');
    }
    thrown = null;
    try {
        assertRelativeDateMs(new Date(1970, 0), 1);
    } catch (err) {
        thrown = err;
    }
    if (!thrown) {
        throw new Error('Expected error, but no error was thrown.');
    } else if (thrown.constructor !== Test262Error) {
        throw new Error('Expected error of type Test262Error.');
    }
    thrown = null;
    try {
        assertRelativeDateMs(new Date(1970, 0), -1);
    } catch (err) {
        thrown = err;
    }
    if (!thrown) {
        throw new Error('Expected error, but no error was thrown.');
    } else if (thrown.constructor !== Test262Error) {
        throw new Error('Expected error of type Test262Error.');
    }
    thrown = null;
    try {
        assertRelativeDateMs(new Date('invalid'), NaN);
    } catch (err) {
        thrown = err;
    }
    if (!thrown) {
        throw new Error('Expected error, but no error was thrown.');
    } else if (thrown.constructor !== Test262Error) {
        throw new Error('Expected error of type Test262Error.');
    }
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