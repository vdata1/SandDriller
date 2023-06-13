try {
    function empty(...[]) {
    }
    function emptyWithArray(...[[]]) {
    }
    function emptyWithObject(...[{}]) {
    }
    function emptyWithRest(...[...[]]) {
    }
    function emptyWithLeading(x, ...[]) {
    }
    function singleElement(...[a]) {
    }
    function singleElementWithInitializer(...[a = 0]) {
    }
    function singleElementWithArray(...[[a]]) {
    }
    function singleElementWithObject(...[{p: q}]) {
    }
    function singleElementWithRest(...[...a]) {
    }
    function singleElementWithLeading(x, ...[a]) {
    }
    function multiElement(...[a, b, c]) {
    }
    function multiElementWithInitializer(...[a = 0, b, c = 1]) {
    }
    function multiElementWithArray(...[[a], b, [c]]) {
    }
    function multiElementWithObject(...[{p: q}, {r}, {
            s = 0
        }]) {
    }
    function multiElementWithRest(...[a, b, ...c]) {
    }
    function multiElementWithLeading(x, y, ...[a, b, c]) {
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