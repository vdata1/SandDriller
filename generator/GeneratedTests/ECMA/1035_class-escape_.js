try {
    var match;
    match = /\c0/.exec('\x0F\x10\x11');
    assert.sameValue(match, null, '\\c0 outside of CharacterClass');
    match = /[\c0]/.exec('\x0F\x10\x11');
    assert.sameValue(match[0], '\x10', '\\c0 within CharacterClass');
    match = /[\c00]+/.exec('\x0F0\x10\x11');
    assert.sameValue(match[0], '0\x10', '\\c00 within CharacterClass');
    match = /\c1/.exec('\x10\x11\x12');
    assert.sameValue(match, null, '\\c1 outside of CharacterClass');
    match = /[\c1]/.exec('\x10\x11\x12');
    assert.sameValue(match[0], '\x11', '\\c1 within CharacterClass');
    match = /[\c10]+/.exec('\x100\x11\x12');
    assert.sameValue(match[0], '0\x11', '\\c10 within CharacterClass');
    match = /\c8/.exec('\x17\x18\x19');
    assert.sameValue(match, null, '\\c8 outside of CharacterClass');
    match = /[\c8]/.exec('\x17\x18\x19');
    assert.sameValue(match[0], '\x18', '\\c8 within CharacterClass');
    match = /[\c80]+/.exec('\x170\x18\x19');
    assert.sameValue(match[0], '0\x18', '\\c80 within CharacterClass');
    match = /\c9/.exec('\x18\x19\x1A');
    assert.sameValue(match, null, '\\c9 outside of CharacterClass');
    match = /[\c9]/.exec('\x18\x19\x1A');
    assert.sameValue(match[0], '\x19', '\\c9 within CharacterClass');
    match = /[\c90]+/.exec('\x180\x19\x1A');
    assert.sameValue(match[0], '0\x19', '\\c90 within CharacterClass');
    match = /\c_/.exec('\x1E\x1F ');
    assert.sameValue(match, null, '\\c_ outside of CharacterClass');
    match = /[\c_]/.exec('\x1E\x1F ');
    assert.sameValue(match[0], '\x1F', '\\c_ within CharacterClass');
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