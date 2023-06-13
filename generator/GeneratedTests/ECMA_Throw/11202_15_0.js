try {
    var appointment = {};
    var data1 = 1001;
    Object.defineProperty(appointment, 'startTime', {
        get: function () {
            throw () => {
                return () => {
                };
            };
            return data1;
        },
        enumerable: false,
        configurable: true
    });
    var data2 = 'NAME';
    Object.defineProperty(appointment, 'name', {
        get: function () {
            return data2;
        },
        enumerable: false,
        configurable: false
    });
    var meeting = Object.create(appointment);
    var data3 = 'In-person meeting';
    Object.defineProperty(meeting, 'conferenceCall', {
        get: function () {
            return data3;
        },
        enumerable: false,
        configurable: true
    });
    var teamMeeting = Object.create(meeting);
    var verifyTimeProp = false;
    var verifyNameProp = false;
    var verifyCallProp = false;
    for (var p in teamMeeting) {
        if (p === 'startTime') {
            verifyTimeProp = true;
        }
        if (p === 'name') {
            verifyNameProp = true;
        }
        if (p === 'conferenceCall') {
            verifyCallProp = true;
        }
    }
    var hasOwnProperty = !teamMeeting.hasOwnProperty('name') && !teamMeeting.hasOwnProperty('startTime') && !teamMeeting.hasOwnProperty('conferenceCall');
    assert(hasOwnProperty, 'hasOwnProperty !== true');
    assert.sameValue(verifyTimeProp, false, 'verifyTimeProp');
    assert.sameValue(verifyNameProp, false, 'verifyNameProp');
    assert.sameValue(verifyCallProp, false, 'verifyCallProp');
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