try {
    function empty(...{}) {
    }
    function emptyWithArray(...{
        p: []
    }) {
    }
    function emptyWithObject(...{
        p: {}
    }) {
    }
    function emptyWithLeading(x, ...{}) {
    }
    function singleElement(...{a: b}) {
    }
    function singleElementWithInitializer(...{
        a: b = 0
    }) {
    }
    function singleElementWithArray(...{
        p: [a]
    }) {
    }
    function singleElementWithObject(...{
        p: {a: b}
    }) {
    }
    function singleElementWithLeading(x, ...{a: b}) {
    }
    function multiElement(...{
        a: r,
        b: s,
        c: t
    }) {
    }
    function multiElementWithInitializer(...{
        a: r = 0,
        b: s,
        c: t = 1
    }) {
    }
    function multiElementWithArray(...{
        p: [a],
        b,
        q: [c]
    }) {
    }
    function multiElementWithObject(...{
        a: {p: q},
        b: {r},
        c: {
            s = 0
        }
    }) {
    }
    function multiElementWithLeading(x, y, ...{
        a: r,
        b: s,
        c: t
    }) {
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