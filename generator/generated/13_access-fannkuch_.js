try {
    function fannkuch(n) {
        var check = 0;
        var perm = Array(n);
        var perm1 = Array(n);
        var count = Array(n);
        var maxPerm = Array(n);
        var maxFlipsCount = 0;
        var m = n - 1;
        for (var i = 0; i < n; i++)
            perm1[i] = i;
        var r = n;
        while (true) {
            if (check < 30) {
                var s = '';
                for (var i = 0; i < n; i++)
                    s += (perm1[i] + 1).toString();
                check++;
            }
            while (r != 1) {
                count[r - 1] = r;
                r--;
            }
            if (!(perm1[0] == 0 || perm1[m] == m)) {
                for (var i = 0; i < n; i++)
                    perm[i] = perm1[i];
                var flipsCount = 0;
                var k;
                while (!((k = perm[0]) == 0)) {
                    var k2 = k + 1 >> 1;
                    for (var i = 0; i < k2; i++) {
                        var temp = perm[i];
                        perm[i] = perm[k - i];
                        perm[k - i] = temp;
                    }
                    flipsCount++;
                }
                if (flipsCount > maxFlipsCount) {
                    maxFlipsCount = flipsCount;
                    for (var i = 0; i < n; i++)
                        maxPerm[i] = perm1[i];
                }
            }
            while (true) {
                if (r == n)
                    return maxFlipsCount;
                var perm0 = perm1[0];
                var i = 0;
                while (i < r) {
                    var j = i + 1;
                    perm1[i] = perm1[j];
                    i = j;
                }
                perm1[r] = perm0;
                count[r] = count[r] - 1;
                if (count[r] > 0)
                    break;
                r++;
            }
        }
    }
    var n = 8;
    var ret = fannkuch(n);
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