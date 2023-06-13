try {
    var objectProxy = new Proxy({
        length: 0,
        other: 0
    }, {});
    var arrayProxy = new Proxy([], {});
    var arrayProxyProxy = new Proxy(arrayProxy, {});
    var visitedOther, injectProxy;
    arrayProxy.other = 0;
    injectProxy = function (name, val) {
        if (name === 'other') {
            visitedOther = true;
        }
        this[1] = objectProxy;
        return val;
    };
    visitedOther = false;
    JSON.parse('[null, null]', injectProxy);
    assert.sameValue(visitedOther, true, 'proxy for ordinary object');
    injectProxy = function (name, val) {
        if (name === 'other') {
            visitedOther = true;
        }
        this[1] = arrayProxy;
        return val;
    };
    visitedOther = false;
    JSON.parse('[null, null]', injectProxy);
    assert.sameValue(visitedOther, false, 'proxy for array');
    injectProxy = function (name, val) {
        if (name === 'other') {
            visitedOther = true;
        }
        this[1] = arrayProxyProxy;
        return val;
    };
    visitedOther = false;
    JSON.parse('[null, null]', injectProxy);
    assert.sameValue(visitedOther, false, 'proxy for array proxy');
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