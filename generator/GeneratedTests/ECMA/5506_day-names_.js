try {
    assert.sameValue('Sun, 23 Mar 2014 00:00:00 GMT', new Date('2014-03-23T00:00:00Z').toUTCString());
    assert.sameValue('Mon, 24 Mar 2014 00:00:00 GMT', new Date('2014-03-24T00:00:00Z').toUTCString());
    assert.sameValue('Tue, 25 Mar 2014 00:00:00 GMT', new Date('2014-03-25T00:00:00Z').toUTCString());
    assert.sameValue('Wed, 26 Mar 2014 00:00:00 GMT', new Date('2014-03-26T00:00:00Z').toUTCString());
    assert.sameValue('Thu, 27 Mar 2014 00:00:00 GMT', new Date('2014-03-27T00:00:00Z').toUTCString());
    assert.sameValue('Fri, 28 Mar 2014 00:00:00 GMT', new Date('2014-03-28T00:00:00Z').toUTCString());
    assert.sameValue('Sat, 29 Mar 2014 00:00:00 GMT', new Date('2014-03-29T00:00:00Z').toUTCString());
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