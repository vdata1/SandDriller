try {
    if (Number('1') !== 1) {
        $ERROR('#1: Number("1") === 1');
    }
    if (Number('+1') !== 1) {
        $ERROR('#3: Number("+1") === 1');
    }
    if (Number('-1') !== -1) {
        $ERROR('#3: Number("-1") === -1');
    }
    if (Number('2') !== 2) {
        $ERROR('#4: Number("2") === 2');
    }
    if (Number('+2') !== 2) {
        $ERROR('#5: Number("+2") === 2');
    }
    if (Number('-2') !== -2) {
        $ERROR('#6: Number("-2") === -2');
    }
    if (Number('3') !== 3) {
        $ERROR('#7: Number("3") === 3');
    }
    if (Number('+3') !== 3) {
        $ERROR('#8: Number("+3") === 3');
    }
    if (Number('-3') !== -3) {
        $ERROR('#9: Number("-3") === -3');
    }
    if (Number('4') !== 4) {
        $ERROR('#10: Number("4") === 4');
    }
    if (Number('+4') !== 4) {
        $ERROR('#11: Number("+4") === 4');
    }
    if (Number('-4') !== -4) {
        $ERROR('#12: Number("-4") === -4');
    }
    if (Number('5') !== 5) {
        $ERROR('#13: Number("5") === 5');
    }
    if (Number('+5') !== 5) {
        $ERROR('#14: Number("+5") === 5');
    }
    if (Number('-5') !== -5) {
        $ERROR('#15: Number("-5") === -5');
    }
    if (Number('6') !== 6) {
        $ERROR('#16: Number("6") === 6');
    }
    if (Number('+6') !== 6) {
        $ERROR('#17: Number("+6") === 6');
    }
    if (Number('-6') !== -6) {
        $ERROR('#18: Number("-6") === -6');
    }
    if (Number('7') !== 7) {
        $ERROR('#19: Number("7") === 7');
    }
    if (Number('+7') !== 7) {
        $ERROR('#20: Number("+7") === 7');
    }
    if (Number('-7') !== -7) {
        $ERROR('#21: Number("-7") === -7');
    }
    if (Number('8') !== 8) {
        $ERROR('#22: Number("8") === 8');
    }
    if (Number('+8') !== 8) {
        $ERROR('#23: Number("+8") === 8');
    }
    if (Number('-8') !== -8) {
        $ERROR('#24: Number("-8") === -8');
    }
    if (Number('9') !== 9) {
        $ERROR('#25: Number("9") === 9');
    }
    if (Number('+9') !== 9) {
        $ERROR('#26: Number("+9") === 9');
    }
    if (Number('-9') !== -9) {
        $ERROR('#27: Number("-9") === -9');
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