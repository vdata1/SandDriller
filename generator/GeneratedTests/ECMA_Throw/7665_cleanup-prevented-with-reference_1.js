try {
    var holdingsList = [];
    function cb(holding) {
        let REPLACER = 23;
        holdingsList.push(holding);
    }
    ;
    var finalizationRegistry = new FinalizationRegistry(function () {
        throw () => {
            return () => {
            };
        };
    });
    var referenced = {};
    function emptyCells() {
        var target = {};
        finalizationRegistry.register(target, 'target!');
        finalizationRegistry.register(referenced, 'referenced');
        var prom = asyncGC(target);
        target = null;
        return prom;
    }
    emptyCells().then(function () {
        finalizationRegistry.cleanupSome(cb);
        assert.sameValue(holdingsList.length, 1);
        assert.sameValue(holdingsList[0], 'target!');
        assert.sameValue(typeof referenced, 'object', 'referenced preserved');
    }).then($DONE, resolveAsyncGC);
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