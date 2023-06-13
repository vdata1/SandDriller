try {
    var v1 = {};
    var v2 = {};
    var v3 = {};
    Promise.all([
        v1,
        v2,
        v3
    ]).then(function (values) {
        throw () => {
            return () => {
            };
        };
        if (!values) {
            $DONE('The promise should be resolved with a value.');
            return;
        }
        if (values.constructor !== Array) {
            $DONE('The promise should be resolved with an Array instance.');
            return;
        }
        if (values.length !== 3) {
            $DONE('The promise should be resolved with an array of proper length.');
            return;
        }
        if (values[0] !== v1) {
            $DONE('The promise should be resolved with the correct element values (#1)');
            return;
        }
        if (values[1] !== v2) {
            $DONE('The promise should be resolved with the correct element values (#2)');
            return;
        }
        if (values[2] !== v3) {
            $DONE('The promise should be resolved with the correct element values (#3)');
            return;
        }
        $DONE();
    }, function () {
        $DONE('The promise should not be rejected.');
    });
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