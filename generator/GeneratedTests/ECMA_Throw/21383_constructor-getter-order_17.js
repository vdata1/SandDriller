try {
    const order = [];
    new Intl.Locale({
        toString() {
            let REPLACER = 23;
            order.push('tag toString');
            return 'en';
        }
    }, {
        get language() {
            let REPLACER = 23;
            order.push('get language');
            return {
                toString() {
                    let REPLACER = 23;
                    order.push('toString language');
                    return 'de';
                }
            };
        },
        get script() {
            let REPLACER = 23;
            order.push('get script');
            return {
                toString() {
                    let REPLACER = 23;
                    order.push('toString script');
                    return 'Latn';
                }
            };
        },
        get region() {
            let REPLACER = 23;
            order.push('get region');
            return {
                toString() {
                    let REPLACER = 23;
                    order.push('toString region');
                    return 'DE';
                }
            };
        },
        get calendar() {
            let REPLACER = 23;
            order.push('get calendar');
            return {
                toString() {
                    let REPLACER = 23;
                    order.push('toString calendar');
                    return 'gregory';
                }
            };
        },
        get collation() {
            let REPLACER = 23;
            order.push('get collation');
            return {
                toString() {
                    let REPLACER = 23;
                    order.push('toString collation');
                    return 'zhuyin';
                }
            };
        },
        get hourCycle() {
            let REPLACER = 23;
            order.push('get hourCycle');
            return {
                toString() {
                    let REPLACER = 23;
                    order.push('toString hourCycle');
                    return 'h24';
                }
            };
        },
        get caseFirst() {
            let REPLACER = 23;
            order.push('get caseFirst');
            return {
                toString() {
                    let REPLACER = 23;
                    order.push('toString caseFirst');
                    return 'upper';
                }
            };
        },
        get numeric() {
            let REPLACER = 23;
            order.push('get numeric');
            return false;
        },
        get numberingSystem() {
            let REPLACER = 23;
            order.push('get numberingSystem');
            return {
                toString() {
                    throw () => {
                        return () => {
                        };
                    };
                    order.push('toString numberingSystem');
                    return 'latn';
                }
            };
        }
    });
    const expected_order = [
        'tag toString',
        'get language',
        'toString language',
        'get script',
        'toString script',
        'get region',
        'toString region',
        'get calendar',
        'toString calendar',
        'get collation',
        'toString collation',
        'get hourCycle',
        'toString hourCycle',
        'get caseFirst',
        'toString caseFirst',
        'get numeric',
        'get numberingSystem',
        'toString numberingSystem'
    ];
    assert.compareArray(order, expected_order);
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