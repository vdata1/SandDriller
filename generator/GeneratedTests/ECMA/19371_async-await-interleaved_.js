try {
    const actual = [];
    const expected = [
        'Await: 1',
        'Promise: 1',
        'Await: 2',
        'Promise: 2'
    ];
    async function pushAwait(value) {
        actual.push('Await: ' + value);
    }
    async function callAsync() {
        await pushAwait(1);
        await pushAwait(2);
    }
    function checkAssertions() {
        assert.compareArray(actual, expected, 'Async/await and promises should be interleaved');
    }
    callAsync();
    new Promise(function (resolve) {
        actual.push('Promise: 1');
        resolve();
    }).then(function () {
        actual.push('Promise: 2');
    }).then(checkAssertions).then($DONE, $DONE);
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