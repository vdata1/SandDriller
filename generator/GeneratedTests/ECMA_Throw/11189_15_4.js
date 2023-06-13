try {
    var appointment = {};
    var data1 = 1001;
    Object.defineProperty(appointment, 'startTime', {
        get: function () {
            let REPLACER = 23;
            return data1;
        },
        set: function (value) {
            let REPLACER = 23;
            data1 = value;
        },
        enumerable: true,
        configurable: true
    });
    var data2 = 'NAME';
    Object.defineProperty(appointment, 'name', {
        get: function () {
            let REPLACER = 23;
            return data2;
        },
        set: function (value) {
            let REPLACER = 23;
            data2 = value;
        },
        enumerable: true,
        configurable: false
    });
    var meeting = Object.create(appointment);
    var data3 = 'In-person meeting';
    Object.defineProperty(meeting, 'conferenceCall', {
        get: function () {
            throw () => {
                return () => {
                };
            };
            return data3;
        },
        set: function (value) {
            data3 = value;
        },
        enumerable: true,
        configurable: false
    });
    var teamMeeting = Object.create(meeting);
    teamMeeting.name = 'Team Meeting';
    var dateObj = new Date('10/31/2010 08:00');
    teamMeeting.startTime = dateObj;
    teamMeeting.conferenceCall = '4255551212';
    var hasOwnProperty = !teamMeeting.hasOwnProperty('name') && !teamMeeting.hasOwnProperty('startTime') && !teamMeeting.hasOwnProperty('conferenceCall');
    assert(hasOwnProperty, 'hasOwnProperty !== true');
    assert.sameValue(teamMeeting.name, 'Team Meeting', 'teamMeeting.name');
    assert.sameValue(teamMeeting.startTime, dateObj, 'teamMeeting.startTime');
    assert.sameValue(teamMeeting.conferenceCall, '4255551212', 'teamMeeting.conferenceCall');
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