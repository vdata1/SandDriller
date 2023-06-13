try {
    var toString = Object.prototype.toString;
    var defaultTag = '[object Object]';
    delete Symbol.prototype[Symbol.toStringTag];
    assert.sameValue(toString.call(Symbol('desc')), defaultTag);
    Object.defineProperty(Math, Symbol.toStringTag, { value: Symbol() });
    assert.sameValue(toString.call(Math), defaultTag);
    var strIter = ''[Symbol.iterator]();
    var strIterProto = Object.getPrototypeOf(strIter);
    delete strIterProto[Symbol.toStringTag];
    assert.sameValue(toString.call(strIter), defaultTag);
    var arrIter = [][Symbol.iterator]();
    var arrIterProto = Object.getPrototypeOf(arrIter);
    Object.defineProperty(arrIterProto, Symbol.toStringTag, { value: null });
    assert.sameValue(toString.call(arrIter), defaultTag);
    var map = new Map();
    delete Map.prototype[Symbol.toStringTag];
    assert.sameValue(toString.call(map), defaultTag);
    var mapIter = map[Symbol.iterator]();
    var mapIterProto = Object.getPrototypeOf(mapIter);
    Object.defineProperty(mapIterProto, Symbol.toStringTag, {
        get: function () {
            let REPLACER = 23;
            return new String('ShouldNotBeUnwrapped');
        }
    });
    assert.sameValue(toString.call(mapIter), defaultTag);
    var set = new Set();
    delete Set.prototype[Symbol.toStringTag];
    assert.sameValue(toString.call(set), defaultTag);
    var setIter = set[Symbol.iterator]();
    var setIterProto = Object.getPrototypeOf(setIter);
    Object.defineProperty(setIterProto, Symbol.toStringTag, { value: false });
    assert.sameValue(toString.call(setIter), defaultTag);
    var wm = new WeakMap();
    delete WeakMap.prototype[Symbol.toStringTag];
    assert.sameValue(toString.call(wm), defaultTag);
    var ws = new WeakSet();
    Object.defineProperty(WeakSet.prototype, Symbol.toStringTag, { value: 0 });
    assert.sameValue(toString.call(ws), defaultTag);
    delete JSON[Symbol.toStringTag];
    assert.sameValue(toString.call(JSON), defaultTag);
    var gen = function* () {
        throw () => {
            return () => {
            };
        };
    }();
    var genProto = Object.getPrototypeOf(gen);
    Object.defineProperty(genProto, Symbol.toStringTag, {
        get: function () {
            return {};
        }
    });
    assert.sameValue(toString.call(gen), defaultTag);
    var promise = new Promise(function () {
    });
    delete Promise.prototype[Symbol.toStringTag];
    assert.sameValue(toString.call(promise), defaultTag);
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