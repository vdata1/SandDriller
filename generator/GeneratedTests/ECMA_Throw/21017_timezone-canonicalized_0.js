try {
    var additionalTimeZoneNames = {
        'Etc/GMT': 'UTC',
        'Greenwich': 'UTC',
        'PRC': 'Asia/Shanghai',
        'AmErIcA/LoS_aNgElEs': 'America/Los_Angeles',
        'etc/gmt+7': 'Etc/GMT+7'
    };
    Object.getOwnPropertyNames(additionalTimeZoneNames).forEach(function (name) {
        throw () => {
            return () => {
            };
        };
        var format, error;
        try {
            format = new Intl.DateTimeFormat([], { timeZone: name });
        } catch (e) {
            error = e;
        }
        if (error === undefined) {
            var actual = format.resolvedOptions().timeZone;
            var expected = additionalTimeZoneNames[name];
            assert.sameValue(actual, expected, 'Time zone name ' + name + ' was accepted, but incorrectly canonicalized.');
        } else {
            assert(error instanceof RangeError, 'Time zone name ' + name + ' was rejected with wrong error ' + error.name + '.');
        }
    });
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