try {
    assert.sameValue('Wed, 01 Jan 2014 00:00:00 GMT', new Date('2014-01-01T00:00:00Z').toUTCString());
    assert.sameValue('Sat, 01 Feb 2014 00:00:00 GMT', new Date('2014-02-01T00:00:00Z').toUTCString());
    assert.sameValue('Sat, 01 Mar 2014 00:00:00 GMT', new Date('2014-03-01T00:00:00Z').toUTCString());
    assert.sameValue('Tue, 01 Apr 2014 00:00:00 GMT', new Date('2014-04-01T00:00:00Z').toUTCString());
    assert.sameValue('Thu, 01 May 2014 00:00:00 GMT', new Date('2014-05-01T00:00:00Z').toUTCString());
    assert.sameValue('Sun, 01 Jun 2014 00:00:00 GMT', new Date('2014-06-01T00:00:00Z').toUTCString());
    assert.sameValue('Tue, 01 Jul 2014 00:00:00 GMT', new Date('2014-07-01T00:00:00Z').toUTCString());
    assert.sameValue('Fri, 01 Aug 2014 00:00:00 GMT', new Date('2014-08-01T00:00:00Z').toUTCString());
    assert.sameValue('Mon, 01 Sep 2014 00:00:00 GMT', new Date('2014-09-01T00:00:00Z').toUTCString());
    assert.sameValue('Wed, 01 Oct 2014 00:00:00 GMT', new Date('2014-10-01T00:00:00Z').toUTCString());
    assert.sameValue('Sat, 01 Nov 2014 00:00:00 GMT', new Date('2014-11-01T00:00:00Z').toUTCString());
    assert.sameValue('Mon, 01 Dec 2014 00:00:00 GMT', new Date('2014-12-01T00:00:00Z').toUTCString());
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