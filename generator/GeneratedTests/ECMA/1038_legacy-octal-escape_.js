try {
    assert.sameValue(/\1/.exec('\x01')[0], '\x01', '\\1');
    assert.sameValue(/\2/.exec('\x02')[0], '\x02', '\\2');
    assert.sameValue(/\3/.exec('\x03')[0], '\x03', '\\3');
    assert.sameValue(/\4/.exec('\x04')[0], '\x04', '\\4');
    assert.sameValue(/\5/.exec('\x05')[0], '\x05', '\\5');
    assert.sameValue(/\6/.exec('\x06')[0], '\x06', '\\6');
    assert.sameValue(/\7/.exec('\x07')[0], '\x07', '\\7');
    assert.sameValue(/\00/.exec('\0')[0], '\0', '\\00');
    assert.sameValue(/\07/.exec('\x07')[0], '\x07', '\\07');
    assert.sameValue(/\30/.exec('\x18')[0], '\x18', '\\30');
    assert.sameValue(/\37/.exec('\x1F')[0], '\x1F', '\\37');
    assert.sameValue(/\40/.exec(' ')[0], ' ', '\\40');
    assert.sameValue(/\47/.exec('\'')[0], '\'', '\\47');
    assert.sameValue(/\70/.exec('8')[0], '8', '\\70');
    assert.sameValue(/\77/.exec('?')[0], '?', '\\77');
    assert.sameValue(/\400/.exec(' 0')[0], ' 0', '\\400');
    assert.sameValue(/\470/.exec('\'0')[0], '\'0', '\\470');
    assert.sameValue(/\700/.exec('80')[0], '80', '\\700');
    assert.sameValue(/\770/.exec('?0')[0], '?0', '\\770');
    assert.sameValue(/\000/.exec('\0')[0], '\0', '\\000');
    assert.sameValue(/\007/.exec('\x07')[0], '\x07', '\\007');
    assert.sameValue(/\070/.exec('8')[0], '8', '\\070');
    assert.sameValue(/\300/.exec('À')[0], 'À', '\\300');
    assert.sameValue(/\307/.exec('Ç')[0], 'Ç', '\\307');
    assert.sameValue(/\370/.exec('ø')[0], 'ø', '\\370');
    assert.sameValue(/\377/.exec('ÿ')[0], 'ÿ', '\\377');
    assert.sameValue(/\0111/.exec('\t1')[0], '\t1', '\\0111');
    assert.sameValue(/\0022/.exec('\x022')[0], '\x022', '\\0022');
    assert.sameValue(/\0003/.exec('\x003')[0], '\x003', '\\0003');
    var match = /(.)\1/.exec('a\x01 aa');
    assert.sameValue(match[0], 'aa', 'DecimalEscape takes precedence over LegacyOctalEscapeSequence');
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