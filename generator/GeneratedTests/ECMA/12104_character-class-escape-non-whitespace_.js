try {
    var j;
    var i;
    var str;
    var res;
    var whitespaceChars = [
        9,
        10,
        11,
        12,
        13,
        32,
        160,
        5760,
        8192,
        8193,
        8194,
        8195,
        8196,
        8197,
        8198,
        8199,
        8200,
        8201,
        8202,
        8232,
        8233,
        8239,
        8287,
        12288
    ];
    for (j = 0; j < 65536; j++) {
        if (j === 6158) {
            continue;
        }
        if (j === 65279) {
            continue;
        }
        str = String.fromCharCode(j);
        res = str.replace(/\S+/g, 'test262');
        if (whitespaceChars.indexOf(j) >= 0) {
            assert.sameValue(res, str, 'WhiteSpace character, charCode: ' + j);
        } else {
            assert.sameValue(res, 'test262', 'Non WhiteSpace character, charCode: ' + j);
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