try {
    var appointment = new Object();
    Object.defineProperty(appointment, 'startTime', {
        value: 1001,
        writable: false,
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(appointment, 'name', {
        value: 'NAME',
        writable: false,
        enumerable: false,
        configurable: true
    });
    var meeting = Object.create(appointment);
    Object.defineProperty(meeting, 'conferenceCall', {
        value: 'In-person meeting',
        writable: false,
        enumerable: false,
        configurable: true
    });
    var teamMeeting = Object.create(meeting);
    verifyNotWritable(teamMeeting, 'name', 'noCheckOwnProp');
    var dateObj = new Date('10/31/2010 08:00');
    verifyNotWritable(teamMeeting, 'startTime', 'noCheckOwnProp');
    verifyNotWritable(teamMeeting, 'conferenceCall', 'noCheckOwnProp');
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