try {
    var collator = new Intl.Collator();
    var pairs = [
        [
            'ö',
            'ö'
        ],
        [
            'ạ̈',
            'ạ̈'
        ],
        [
            'ạ̈',
            'ạ̈'
        ],
        [
            'ạ̈',
            'ạ̈'
        ],
        [
            'ä̆',
            'ä̆'
        ],
        [
            'ă̈',
            'ă̈'
        ],
        [
            '퓛',
            '퓛'
        ],
        [
            'Å',
            'Å'
        ],
        [
            'Å',
            'Å'
        ],
        [
            'x̛̣',
            'x̛̣'
        ],
        [
            'ự',
            'ự'
        ],
        [
            'ự',
            'ự'
        ],
        [
            'ự',
            'ự'
        ],
        [
            'ự',
            'ự'
        ],
        [
            'Ç',
            'Ç'
        ],
        [
            'q̣̇',
            'q̣̇'
        ],
        [
            '가',
            '가'
        ],
        [
            'Å',
            'Å'
        ],
        [
            'Ω',
            'Ω'
        ],
        [
            'Å',
            'Å'
        ],
        [
            'ô',
            'ô'
        ],
        [
            'ṩ',
            'ṩ'
        ],
        [
            'ḍ̇',
            'ḍ̇'
        ],
        [
            'ḍ̇',
            'ḍ̇'
        ],
        [
            'q̣̇',
            'q̣̇'
        ],
        [
            '\uD834\uDD5E',
            '\uD834\uDD57\uD834\uDD65'
        ],
        [
            '\uD87E\uDC2B',
            '北'
        ]
    ];
    var i;
    for (i = 0; i < pairs.length; i++) {
        var pair = pairs[i];
        assert.sameValue(collator.compare(pair[0], pair[1]), 0, 'Collator.compare considers ' + pair[0] + ' (' + toU(pair[0]) + ') \u2260 ' + pair[1] + ' (' + toU(pair[1]) + ').');
    }
    function toU(s) {
        var result = '';
        var escape = '\\u0000';
        var i;
        for (i = 0; i < s.length; i++) {
            var hex = s.charCodeAt(i).toString(16);
            result += escape.substring(0, escape.length - hex.length) + hex;
        }
        return result;
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