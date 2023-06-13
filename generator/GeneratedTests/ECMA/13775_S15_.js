try {
    var TEST_STRING = new String(' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~');
    for (var k = 0, i = 32; i < 125; i++, k++) {
        if (TEST_STRING.indexOf(String.fromCharCode(i) + String.fromCharCode(i + 1) + String.fromCharCode(i + 2), k) !== k) {
            $ERROR('#' + (i - 32) + ': TEST_STRING.indexOf( (String.fromCharCode(' + i + ')+ String.fromCharCode(' + (i + 1) + ') + String.fromCharCode(' + (i + 2) + ')), ' + k + ' )===' + k + '. Actual: ' + TEST_STRING.indexOf(String.fromCharCode(i) + String.fromCharCode(i + 1) + String.fromCharCode(i + 2), k));
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