try {
    assert.sameValue(unescape('%'), '%');
    assert.sameValue(unescape('%0'), '%0');
    assert.sameValue(unescape('%1'), '%1');
    assert.sameValue(unescape('%2'), '%2');
    assert.sameValue(unescape('%3'), '%3');
    assert.sameValue(unescape('%4'), '%4');
    assert.sameValue(unescape('%5'), '%5');
    assert.sameValue(unescape('%6'), '%6');
    assert.sameValue(unescape('%7'), '%7');
    assert.sameValue(unescape('%8'), '%8');
    assert.sameValue(unescape('%9'), '%9');
    assert.sameValue(unescape('%a'), '%a');
    assert.sameValue(unescape('%A'), '%A');
    assert.sameValue(unescape('%b'), '%b');
    assert.sameValue(unescape('%B'), '%B');
    assert.sameValue(unescape('%c'), '%c');
    assert.sameValue(unescape('%C'), '%C');
    assert.sameValue(unescape('%d'), '%d');
    assert.sameValue(unescape('%D'), '%D');
    assert.sameValue(unescape('%e'), '%e');
    assert.sameValue(unescape('%E'), '%E');
    assert.sameValue(unescape('%f'), '%f');
    assert.sameValue(unescape('%F'), '%F');
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