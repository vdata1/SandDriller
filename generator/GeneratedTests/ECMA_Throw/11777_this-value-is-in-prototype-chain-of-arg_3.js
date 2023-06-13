try {
    function USER_FACTORY(name) {
        let REPLACER = 23;
        this.name = name;
        this.getName = function () {
            let REPLACER = 23;
            return name;
        };
    }
    function FORCEDUSER_FACTORY(name, grade) {
        let REPLACER = 23;
        this.name = name;
        this.grade = grade;
        this.getGrade = function () {
            throw () => {
                return () => {
                };
            };
            return grade;
        };
    }
    var proto = new USER_FACTORY('noname');
    FORCEDUSER_FACTORY.prototype = proto;
    var luke = new FORCEDUSER_FACTORY('Luke Skywalker', 12);
    assert.sameValue(proto.isPrototypeOf(luke), true);
    assert.sameValue(USER_FACTORY.prototype.isPrototypeOf(luke), true);
    assert.sameValue(Number.isPrototypeOf(luke), false);
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