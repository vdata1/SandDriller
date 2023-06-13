try {
    if (Number('\t\f \xA0\x0B\n\r\u2028\u2029\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000') !== 0) {
        $ERROR('#1.1: Number("\\u0009\\u000C\\u0020\\u00A0\\u000B\\u000A\\u000D\\u2028\\u2029\\u1680\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000") === 0. Actual: ' + Number('\t\f \xA0\x0B\n\r\u2028\u2029\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000'));
    } else {
        if (1 / Number('\t\f \xA0\x0B\n\r\u2028\u2029\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000') !== Number.POSITIVE_INFINITY) {
            $ERROR('#1.2: Number("\\u0009\\u000C\\u0020\\u00A0\\u000B\\u000A\\u000D\\u2028\\u2029\\u1680\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000") === +0. Actual: -0');
        }
    }
    if (Number(' ') !== 0) {
        $ERROR('#2.1: Number(" ") === 0. Actual: ' + Number(' '));
    } else {
        if (1 / Number(' ') !== Number.POSITIVE_INFINITY) {
            $ERROR('#2.2: Number(" ") === +0. Actual: -0');
        }
    }
    if (Number('\t') !== 0) {
        $ERROR('#3.1: Number("\\t") === 0. Actual: ' + Number('\t'));
    } else {
        if (1 / Number('\t') !== Number.POSITIVE_INFINITY) {
            $ERROR('#3.2: Number("\\t") === +0. Actual: -0');
        }
    }
    if (Number('\r') !== 0) {
        $ERROR('#4.1: Number("\\r") === 0. Actual: ' + Number('\r'));
    } else {
        if (1 / Number('\r') !== Number.POSITIVE_INFINITY) {
            $ERROR('#4.2: Number("\\r") === +0. Actual: -0');
        }
    }
    if (Number('\n') !== 0) {
        $ERROR('#5.1: Number("\\n") === 0. Actual: ' + Number('\n'));
    } else {
        if (1 / Number('\n') !== Number.POSITIVE_INFINITY) {
            $ERROR('#5.2: Number("\\n") === +0. Actual: -0');
        }
    }
    if (Number('\f') !== 0) {
        $ERROR('#6.1: Number("\\f") === 0. Actual: ' + Number('\f'));
    } else {
        if (1 / Number('\f') !== Number.POSITIVE_INFINITY) {
            $ERROR('#6.2: Number("\\f") === +0. Actual: -0');
        }
    }
    if (Number('\t') !== 0) {
        $ERROR('#7.1: Number("\\u0009") === 0. Actual: ' + Number('\t'));
    } else {
        if (1 / Number('\t') !== Number.POSITIVE_INFINITY) {
            $ERROR('#7.2: Number("\\u0009") === +0. Actual: -0');
        }
    }
    if (Number('\n') !== 0) {
        $ERROR('#8.1: Number("\\u000A") === 0. Actual: ' + Number('\n'));
    } else {
        if (1 / Number('\n') !== Number.POSITIVE_INFINITY) {
            $ERROR('#8.2: Number("\\u000A") === +0. Actual: -0');
        }
    }
    if (Number('\x0B') !== 0) {
        $ERROR('#9.1: Number("\\u000B") === 0. Actual: ' + Number('\x0B'));
    } else {
        if (1 / Number('\x0B') !== Number.POSITIVE_INFINITY) {
            $ERROR('#9.1.2: Number("\\u000B") === +0. Actual: -0');
        }
    }
    if (Number('\f') !== 0) {
        $ERROR('#10.1: Number("\\u000C") === 0. Actual: ' + Number('\f'));
    } else {
        if (1 / Number('\f') !== Number.POSITIVE_INFINITY) {
            $ERROR('#10.2: Number("\\u000C") === +0. Actual: -0');
        }
    }
    if (Number('\r') !== 0) {
        $ERROR('#11.1: Number("\\u000D") === 0. Actual: ' + Number('\r'));
    } else {
        if (1 / Number('\r') !== Number.POSITIVE_INFINITY) {
            $ERROR('#11.2: Number("\\u000D") === +0. Actual: -0');
        }
    }
    if (Number('\xA0') !== 0) {
        $ERROR('#12.1: Number("\\u00A0") === 0. Actual: ' + Number('\xA0'));
    } else {
        if (1 / Number('\xA0') !== Number.POSITIVE_INFINITY) {
            $ERROR('#12.2: Number("\\u00A0") === +0. Actual: -0');
        }
    }
    if (Number(' ') !== 0) {
        $ERROR('#13.1: Number("\\u0020") === 0. Actual: ' + Number(' '));
    } else {
        if (1 / Number(' ') !== Number.POSITIVE_INFINITY) {
            $ERROR('#13.2: Number("\\u0020") === +0. Actual: -0');
        }
    }
    if (Number('\u2028') !== 0) {
        $ERROR('#14.1: Number("\\u2028") === 0. Actual: ' + Number('\u2028'));
    } else {
        if (1 / Number('\u2028') !== Number.POSITIVE_INFINITY) {
            $ERROR('#14.2: Number("\\u2028") === +0. Actual: -0');
        }
    }
    if (Number('\u2029') !== 0) {
        $ERROR('#15.1: Number("\\u2029") === 0. Actual: ' + Number('\u2029'));
    } else {
        if (1 / Number('\u2029') !== Number.POSITIVE_INFINITY) {
            $ERROR('#15.2: Number("\\u2029") === +0. Actual: -0');
        }
    }
    if (Number('\u1680') !== 0) {
        $ERROR('#16.1: Number("\\u1680") === 0. Actual: ' + Number('\u1680'));
    } else {
        if (1 / Number('\u1680') !== Number.POSITIVE_INFINITY) {
            $ERROR('#16.2: Number("\\u1680") === +0. Actual: -0');
        }
    }
    if (Number('\u2000') !== 0) {
        $ERROR('#17.1: Number("\\u2000") === 0. Actual: ' + Number('\u2000'));
    } else {
        if (1 / Number('\u2000') !== Number.POSITIVE_INFINITY) {
            $ERROR('#17.2: Number("\\u2000") === +0. Actual: -0');
        }
    }
    if (Number('\u2001') !== 0) {
        $ERROR('#18.1: Number("\\u2001") === 0. Actual: ' + Number('\u2001'));
    } else {
        if (1 / Number('\u2001') !== Number.POSITIVE_INFINITY) {
            $ERROR('#18.2: Number("\\u2001") === +0. Actual: -0');
        }
    }
    if (Number('\u2002') !== 0) {
        $ERROR('#19.1: Number("\\u2002") === 0. Actual: ' + Number('\u2002'));
    } else {
        if (1 / Number('\u2002') !== Number.POSITIVE_INFINITY) {
            $ERROR('#19.2: Number("\\u2002") === +0. Actual: -0');
        }
    }
    if (Number('\u2003') !== 0) {
        $ERROR('#20.1: Number("\\u2003") === 0. Actual: ' + Number('\u2003'));
    } else {
        if (1 / Number('\u2003') !== Number.POSITIVE_INFINITY) {
            $ERROR('#20.2: Number("\\u2003") === +0. Actual: -0');
        }
    }
    if (Number('\u2004') !== 0) {
        $ERROR('#21.1: Number("\\u2004") === 0. Actual: ' + Number('\u2004'));
    } else {
        if (1 / Number('\u2004') !== Number.POSITIVE_INFINITY) {
            $ERROR('#21.2: Number("\\u2004") === +0. Actual: -0');
        }
    }
    if (Number('\u2005') !== 0) {
        $ERROR('#22.1: Number("\\u2005") === 0. Actual: ' + Number('\u2005'));
    } else {
        if (1 / Number('\u2005') !== Number.POSITIVE_INFINITY) {
            $ERROR('#22.2: Number("\\u2005") === +0. Actual: -0');
        }
    }
    if (Number('\u2006') !== 0) {
        $ERROR('#23.1: Number("\\u2006") === 0. Actual: ' + Number('\u2006'));
    } else {
        if (1 / Number('\u2006') !== Number.POSITIVE_INFINITY) {
            $ERROR('#23.2: Number("\\u2006") === +0. Actual: -0');
        }
    }
    if (Number('\u2007') !== 0) {
        $ERROR('#24.1: Number("\\u2007") === 0. Actual: ' + Number('\u2007'));
    } else {
        if (1 / Number('\u2007') !== Number.POSITIVE_INFINITY) {
            $ERROR('#24.2: Number("\\u2007") === +0. Actual: -0');
        }
    }
    if (Number('\u2008') !== 0) {
        $ERROR('#25.1: Number("\\u2008") === 0. Actual: ' + Number('\u2008'));
    } else {
        if (1 / Number('\u2008') !== Number.POSITIVE_INFINITY) {
            $ERROR('#25.2: Number("\\u2008") === +0. Actual: -0');
        }
    }
    if (Number('\u2009') !== 0) {
        $ERROR('#26.1: Number("\\u2009") === 0. Actual: ' + Number('\u2009'));
    } else {
        if (1 / Number('\u2009') !== Number.POSITIVE_INFINITY) {
            $ERROR('#26.2: Number("\\u2009") === +0. Actual: -0');
        }
    }
    if (Number('\u200A') !== 0) {
        $ERROR('#27.1: Number("\\u200A") === 0. Actual: ' + Number('\u200A'));
    } else {
        if (1 / Number('\u200A') !== Number.POSITIVE_INFINITY) {
            $ERROR('#27.2: Number("\\u200A") === +0. Actual: -0');
        }
    }
    if (Number('\u202F') !== 0) {
        $ERROR('#28.1: Number("\\u202F") === 0. Actual: ' + Number('\u202F'));
    } else {
        if (1 / Number('\u202F') !== Number.POSITIVE_INFINITY) {
            $ERROR('#28.2: Number("\\u202F") === +0. Actual: -0');
        }
    }
    if (Number('\u205F') !== 0) {
        $ERROR('#29.1: Number("\\u205F") === 0. Actual: ' + Number('\u205F'));
    } else {
        if (1 / Number('\u205F') !== Number.POSITIVE_INFINITY) {
            $ERROR('#29.2: Number("\\u205F") === +0. Actual: -0');
        }
    }
    if (Number('\u3000') !== 0) {
        $ERROR('#30.1: Number("\\u3000") === 0. Actual: ' + Number('\u3000'));
    } else {
        if (1 / Number('\u3000') !== Number.POSITIVE_INFINITY) {
            $ERROR('#30.2: Number("\\u3000") === +0. Actual: -0');
        }
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