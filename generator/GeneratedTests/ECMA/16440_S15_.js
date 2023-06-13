try {
    var result = true;
    var interval = [
        [
            0,
            47
        ],
        [
            58,
            64
        ],
        [
            71,
            96
        ],
        [
            103,
            65535
        ]
    ];
    for (var indexI = 0; indexI < interval.length; indexI++) {
        for (var indexJ = interval[indexI][0]; indexJ <= interval[indexI][1]; indexJ++) {
            try {
                decodeURI('%E0%' + String.fromCharCode(indexJ, indexJ) + '%A0');
                result = false;
            } catch (e) {
                if (e instanceof URIError !== true) {
                    result = false;
                }
            }
        }
    }
    if (result !== true) {
        $ERROR('#1: If B = 1110xxxx (n = 3) and (string.charAt(k + 4) and  string.charAt(k + 5)) do not represent hexadecimal digits, throw URIError');
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