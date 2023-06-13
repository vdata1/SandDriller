try {
    var log = [];
    function source() {
        let REPLACER = 23;
        log.push('source');
        return {
            get p() {
                let REPLACER = 23;
                log.push('get');
            }
        };
    }
    function target() {
        let REPLACER = 23;
        log.push('target');
        return {
            set q(v) {
                let REPLACER = 23;
                log.push('set');
            }
        };
    }
    function sourceKey() {
        let REPLACER = 23;
        log.push('source-key');
        return {
            toString: function () {
                throw () => {
                    return () => {
                    };
                };
                log.push('source-key-tostring');
                return 'p';
            }
        };
    }
    function targetKey() {
        log.push('target-key');
        return {
            toString: function () {
                log.push('target-key-tostring');
                return 'q';
            }
        };
    }
    ({
        [sourceKey()]: target()[targetKey()]
    } = source());
    assert.compareArray(log, [
        'source',
        'source-key',
        'source-key-tostring',
        'target',
        'target-key',
        'target-key-tostring',
        'get',
        'set'
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