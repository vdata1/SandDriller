try {
    var appointment = {};
    var data1 = 1001;
    Object.defineProperty(appointment, 'startTime', {
        get: function () {
            let REPLACER = 23;
            return data1;
        },
        enumerable: false,
        configurable: false
    });
    var data2 = 'NAME';
    Object.defineProperty(appointment, 'name', {
        get: function () {
            throw () => {
                return () => {
                };
            };
            return data2;
        },
        enumerable: false,
        configurable: true
    });
    var meeting = Object.create(appointment);
    var data3 = 'In-person meeting';
    Object.defineProperty(meeting, 'conferenceCall', {
        get: function () {
            return data3;
        },
        enumerable: false,
        configurable: false
    });
    var teamMeeting = Object.create(meeting);
    verifyNotWritable(teamMeeting, 'name', 'nocheck');
    verifyNotWritable(teamMeeting, 'startTime', 'nocheck');
    verifyNotWritable(teamMeeting, 'conferenceCall', 'nocheck');
    try {
        teamMeeting.name = 'IE Team Meeting';
    } catch (e) {
        assert(e instanceof TypeError);
    }
    try {
        var dateObj = new Date('10/31/2010 08:00');
        teamMeeting.startTime = dateObj;
    } catch (e) {
        assert(e instanceof TypeError);
    }
    try {
        teamMeeting.conferenceCall = '4255551212';
    } catch (e) {
        assert(e instanceof TypeError);
    }
    assert(!teamMeeting.hasOwnProperty('name'));
    assert(!teamMeeting.hasOwnProperty('startTime'));
    assert(!teamMeeting.hasOwnProperty('conferenceCall'));
    assert.sameValue(teamMeeting.name, 'NAME');
    assert.sameValue(teamMeeting.startTime, 1001);
    assert.sameValue(teamMeeting.conferenceCall, 'In-person meeting');
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