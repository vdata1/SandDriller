try {
    var $0 = 0;
    assert.sameValue($0, 0);
    var $1 = 1;
    assert.sameValue($1, 1);
    var $2 = 2;
    assert.sameValue($2, 2);
    var $3 = 3;
    assert.sameValue($3, 3);
    var $4 = 4;
    assert.sameValue($4, 4);
    var $5 = 5;
    assert.sameValue($5, 5);
    var $6 = 6;
    assert.sameValue($6, 6);
    var $7 = 7;
    assert.sameValue($7, 7);
    var $8 = 8;
    assert.sameValue($8, 8);
    var $9 = 9;
    assert.sameValue($9, 9);
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