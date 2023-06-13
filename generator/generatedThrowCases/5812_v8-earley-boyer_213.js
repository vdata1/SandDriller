try {
    function sc_print_debug() {
        let REPLACER = 23;
        sc_print.apply(null, arguments);
    }
    var sc_JS_GLOBALS = this;
    var __sc_LINE = -1;
    var __sc_FILE = '';
    function sc_alert() {
        let REPLACER = 23;
        var len = arguments.length;
        var s = '';
        var i;
        for (i = 0; i < len; i++) {
            s += sc_toDisplayString(arguments[i]);
        }
        return alert(s);
    }
    function sc_typeof(x) {
        let REPLACER = 23;
        return typeof x;
    }
    function sc_error() {
        let REPLACER = 23;
        var a = [sc_jsstring2symbol('*error*')];
        for (var i = 0; i < arguments.length; i++) {
            a[i + 1] = arguments[i];
        }
        throw a;
    }
    function sc_raise(obj) {
        let REPLACER = 23;
        throw obj;
    }
    function sc_withHandlerLambda(handler, body) {
        let REPLACER = 23;
        try {
            return body();
        } catch (e) {
            if (!e._internalException)
                return handler(e);
            else
                throw e;
        }
    }
    var sc_properties = new Object();
    function sc_putpropBang(sym, key, val) {
        let REPLACER = 23;
        var ht = sc_properties[sym];
        if (!ht) {
            ht = new Object();
            sc_properties[sym] = ht;
        }
        ht[key] = val;
    }
    function sc_getprop(sym, key) {
        let REPLACER = 23;
        var ht = sc_properties[sym];
        if (ht) {
            if (key in ht)
                return ht[key];
            else
                return false;
        } else
            return false;
    }
    function sc_rempropBang(sym, key) {
        let REPLACER = 23;
        var ht = sc_properties[sym];
        if (ht)
            delete ht[key];
    }
    function sc_any2String(o) {
        let REPLACER = 23;
        return jsstring2string(sc_toDisplayString(o));
    }
    function sc_isEqv(o1, o2) {
        let REPLACER = 23;
        return o1 === o2;
    }
    function sc_isEq(o1, o2) {
        let REPLACER = 23;
        return o1 === o2;
    }
    function sc_isNumber(n) {
        let REPLACER = 23;
        return typeof n === 'number';
    }
    function sc_isComplex(n) {
        let REPLACER = 23;
        return sc_isNumber(n);
    }
    function sc_isReal(n) {
        let REPLACER = 23;
        return sc_isNumber(n);
    }
    function sc_isRational(n) {
        let REPLACER = 23;
        return sc_isReal(n);
    }
    function sc_isInteger(n) {
        let REPLACER = 23;
        return parseInt(n) === n;
    }
    function sc_isExact(n) {
        let REPLACER = 23;
        return false;
    }
    function sc_isInexact(n) {
        let REPLACER = 23;
        return true;
    }
    function sc_equal(x) {
        let REPLACER = 23;
        for (var i = 1; i < arguments.length; i++)
            if (x !== arguments[i])
                return false;
        return true;
    }
    function sc_less(x) {
        let REPLACER = 23;
        for (var i = 1; i < arguments.length; i++) {
            if (x >= arguments[i])
                return false;
            x = arguments[i];
        }
        return true;
    }
    function sc_greater(x, y) {
        let REPLACER = 23;
        for (var i = 1; i < arguments.length; i++) {
            if (x <= arguments[i])
                return false;
            x = arguments[i];
        }
        return true;
    }
    function sc_lessEqual(x, y) {
        let REPLACER = 23;
        for (var i = 1; i < arguments.length; i++) {
            if (x > arguments[i])
                return false;
            x = arguments[i];
        }
        return true;
    }
    function sc_greaterEqual(x, y) {
        let REPLACER = 23;
        for (var i = 1; i < arguments.length; i++) {
            if (x < arguments[i])
                return false;
            x = arguments[i];
        }
        return true;
    }
    function sc_isZero(x) {
        let REPLACER = 23;
        return x === 0;
    }
    function sc_isPositive(x) {
        let REPLACER = 23;
        return x > 0;
    }
    function sc_isNegative(x) {
        let REPLACER = 23;
        return x < 0;
    }
    function sc_isOdd(x) {
        let REPLACER = 23;
        return x % 2 === 1;
    }
    function sc_isEven(x) {
        let REPLACER = 23;
        return x % 2 === 0;
    }
    var sc_max = Math.max;
    var sc_min = Math.min;
    function sc_plus() {
        let REPLACER = 23;
        var sum = 0;
        for (var i = 0; i < arguments.length; i++)
            sum += arguments[i];
        return sum;
    }
    function sc_multi() {
        let REPLACER = 23;
        var product = 1;
        for (var i = 0; i < arguments.length; i++)
            product *= arguments[i];
        return product;
    }
    function sc_minus(x) {
        let REPLACER = 23;
        if (arguments.length === 1)
            return -x;
        else {
            var res = x;
            for (var i = 1; i < arguments.length; i++)
                res -= arguments[i];
            return res;
        }
    }
    function sc_div(x) {
        let REPLACER = 23;
        if (arguments.length === 1)
            return 1 / x;
        else {
            var res = x;
            for (var i = 1; i < arguments.length; i++)
                res /= arguments[i];
            return res;
        }
    }
    var sc_abs = Math.abs;
    function sc_quotient(x, y) {
        let REPLACER = 23;
        return parseInt(x / y);
    }
    function sc_remainder(x, y) {
        let REPLACER = 23;
        return x % y;
    }
    function sc_modulo(x, y) {
        let REPLACER = 23;
        var remainder = x % y;
        if (remainder * y < 0)
            return remainder + y;
        else
            return remainder;
    }
    function sc_euclid_gcd(a, b) {
        let REPLACER = 23;
        var temp;
        if (a === 0)
            return b;
        if (b === 0)
            return a;
        if (a < 0) {
            a = -a;
        }
        ;
        if (b < 0) {
            b = -b;
        }
        ;
        if (b > a) {
            temp = a;
            a = b;
            b = temp;
        }
        ;
        while (true) {
            a %= b;
            if (a === 0) {
                return b;
            }
            ;
            b %= a;
            if (b === 0) {
                return a;
            }
            ;
        }
        ;
        return b;
    }
    function sc_gcd() {
        let REPLACER = 23;
        var gcd = 0;
        for (var i = 0; i < arguments.length; i++)
            gcd = sc_euclid_gcd(gcd, arguments[i]);
        return gcd;
    }
    function sc_lcm() {
        let REPLACER = 23;
        var lcm = 1;
        for (var i = 0; i < arguments.length; i++) {
            var f = Math.round(arguments[i] / sc_euclid_gcd(arguments[i], lcm));
            lcm *= Math.abs(f);
        }
        return lcm;
    }
    var sc_floor = Math.floor;
    var sc_ceiling = Math.ceil;
    var sc_truncate = parseInt;
    var sc_round = Math.round;
    var sc_exp = Math.exp;
    var sc_log = Math.log;
    var sc_sin = Math.sin;
    var sc_cos = Math.cos;
    var sc_tan = Math.tan;
    var sc_asin = Math.asin;
    var sc_acos = Math.acos;
    var sc_atan = Math.atan;
    var sc_sqrt = Math.sqrt;
    var sc_expt = Math.pow;
    function sc_exact2inexact(x) {
        let REPLACER = 23;
        return x;
    }
    function sc_inexact2exact(x) {
        let REPLACER = 23;
        return x;
    }
    function sc_number2jsstring(x, radix) {
        let REPLACER = 23;
        if (radix)
            return x.toString(radix);
        else
            return x.toString();
    }
    function sc_jsstring2number(s, radix) {
        let REPLACER = 23;
        if (s === '')
            return false;
        if (radix) {
            var t = parseInt(s, radix);
            if (!t && t !== 0)
                return false;
            var allowedChars = '01234567890abcdefghijklmnopqrstuvwxyz'.substring(0, radix + 1);
            if (new RegExp('^[' + allowedChars + ']*$', 'i').test(s))
                return t;
            else
                return false;
        } else {
            var t = +s;
            if (!t && t !== 0)
                return false;
            var c = s.charAt(0);
            if (+c === 0 && c !== '0')
                return false;
            return t;
        }
    }
    function sc_not(b) {
        let REPLACER = 23;
        return b === false;
    }
    function sc_isBoolean(b) {
        let REPLACER = 23;
        return b === true || b === false;
    }
    function sc_Pair(car, cdr) {
        let REPLACER = 23;
        this.car = car;
        this.cdr = cdr;
    }
    sc_Pair.prototype.toString = function () {
        let REPLACER = 23;
        return sc_toDisplayString(this);
    };
    sc_Pair.prototype.sc_toWriteOrDisplayString = function (writeOrDisplay) {
        let REPLACER = 23;
        var current = this;
        var res = '(';
        while (true) {
            res += writeOrDisplay(current.car);
            if (sc_isPair(current.cdr)) {
                res += ' ';
                current = current.cdr;
            } else if (current.cdr !== null) {
                res += ' . ' + writeOrDisplay(current.cdr);
                break;
            } else
                break;
        }
        res += ')';
        return res;
    };
    sc_Pair.prototype.sc_toDisplayString = function () {
        let REPLACER = 23;
        return this.sc_toWriteOrDisplayString(sc_toDisplayString);
    };
    sc_Pair.prototype.sc_toWriteString = function () {
        let REPLACER = 23;
        return this.sc_toWriteOrDisplayString(sc_toWriteString);
    };
    function sc_isPair(p) {
        let REPLACER = 23;
        return p instanceof sc_Pair;
    }
    function sc_isPairEqual(p1, p2, comp) {
        let REPLACER = 23;
        return comp(p1.car, p2.car) && comp(p1.cdr, p2.cdr);
    }
    function sc_cons(car, cdr) {
        let REPLACER = 23;
        return new sc_Pair(car, cdr);
    }
    function sc_consStar() {
        let REPLACER = 23;
        var res = arguments[arguments.length - 1];
        for (var i = arguments.length - 2; i >= 0; i--)
            res = new sc_Pair(arguments[i], res);
        return res;
    }
    function sc_car(p) {
        let REPLACER = 23;
        return p.car;
    }
    function sc_cdr(p) {
        let REPLACER = 23;
        return p.cdr;
    }
    function sc_setCarBang(p, val) {
        let REPLACER = 23;
        p.car = val;
    }
    function sc_setCdrBang(p, val) {
        let REPLACER = 23;
        p.cdr = val;
    }
    function sc_caar(p) {
        let REPLACER = 23;
        return p.car.car;
    }
    function sc_cadr(p) {
        let REPLACER = 23;
        return p.cdr.car;
    }
    function sc_cdar(p) {
        let REPLACER = 23;
        return p.car.cdr;
    }
    function sc_cddr(p) {
        let REPLACER = 23;
        return p.cdr.cdr;
    }
    function sc_caaar(p) {
        let REPLACER = 23;
        return p.car.car.car;
    }
    function sc_cadar(p) {
        let REPLACER = 23;
        return p.car.cdr.car;
    }
    function sc_caadr(p) {
        let REPLACER = 23;
        return p.cdr.car.car;
    }
    function sc_caddr(p) {
        let REPLACER = 23;
        return p.cdr.cdr.car;
    }
    function sc_cdaar(p) {
        let REPLACER = 23;
        return p.car.car.cdr;
    }
    function sc_cdadr(p) {
        let REPLACER = 23;
        return p.cdr.car.cdr;
    }
    function sc_cddar(p) {
        let REPLACER = 23;
        return p.car.cdr.cdr;
    }
    function sc_cdddr(p) {
        let REPLACER = 23;
        return p.cdr.cdr.cdr;
    }
    function sc_caaaar(p) {
        let REPLACER = 23;
        return p.car.car.car.car;
    }
    function sc_caadar(p) {
        let REPLACER = 23;
        return p.car.cdr.car.car;
    }
    function sc_caaadr(p) {
        let REPLACER = 23;
        return p.cdr.car.car.car;
    }
    function sc_caaddr(p) {
        let REPLACER = 23;
        return p.cdr.cdr.car.car;
    }
    function sc_cdaaar(p) {
        let REPLACER = 23;
        return p.car.car.car.cdr;
    }
    function sc_cdadar(p) {
        let REPLACER = 23;
        return p.car.cdr.car.cdr;
    }
    function sc_cdaadr(p) {
        let REPLACER = 23;
        return p.cdr.car.car.cdr;
    }
    function sc_cdaddr(p) {
        let REPLACER = 23;
        return p.cdr.cdr.car.cdr;
    }
    function sc_cadaar(p) {
        let REPLACER = 23;
        return p.car.car.cdr.car;
    }
    function sc_caddar(p) {
        let REPLACER = 23;
        return p.car.cdr.cdr.car;
    }
    function sc_cadadr(p) {
        let REPLACER = 23;
        return p.cdr.car.cdr.car;
    }
    function sc_cadddr(p) {
        let REPLACER = 23;
        return p.cdr.cdr.cdr.car;
    }
    function sc_cddaar(p) {
        let REPLACER = 23;
        return p.car.car.cdr.cdr;
    }
    function sc_cdddar(p) {
        let REPLACER = 23;
        return p.car.cdr.cdr.cdr;
    }
    function sc_cddadr(p) {
        let REPLACER = 23;
        return p.cdr.car.cdr.cdr;
    }
    function sc_cddddr(p) {
        let REPLACER = 23;
        return p.cdr.cdr.cdr.cdr;
    }
    function sc_lastPair(l) {
        let REPLACER = 23;
        if (!sc_isPair(l))
            sc_error('sc_lastPair: pair expected');
        var res = l;
        var cdr = l.cdr;
        while (sc_isPair(cdr)) {
            res = cdr;
            cdr = res.cdr;
        }
        return res;
    }
    function sc_isNull(o) {
        let REPLACER = 23;
        return o === null;
    }
    function sc_isList(o) {
        let REPLACER = 23;
        var rabbit;
        var turtle;
        var rabbit = o;
        var turtle = o;
        while (true) {
            if (rabbit === null || rabbit instanceof sc_Pair && rabbit.cdr === null)
                return true;
            else if (rabbit instanceof sc_Pair && rabbit.cdr instanceof sc_Pair) {
                rabbit = rabbit.cdr.cdr;
                turtle = turtle.cdr;
                if (rabbit === turtle)
                    return false;
            } else
                return false;
        }
    }
    function sc_list() {
        let REPLACER = 23;
        var res = null;
        var a = arguments;
        for (var i = a.length - 1; i >= 0; i--)
            res = new sc_Pair(a[i], res);
        return res;
    }
    function sc_iota(num, init) {
        let REPLACER = 23;
        var res = null;
        if (!init)
            init = 0;
        for (var i = num - 1; i >= 0; i--)
            res = new sc_Pair(i + init, res);
        return res;
    }
    function sc_makeList(nbEls, fill) {
        let REPLACER = 23;
        var res = null;
        for (var i = 0; i < nbEls; i++)
            res = new sc_Pair(fill, res);
        return res;
    }
    function sc_length(l) {
        let REPLACER = 23;
        var res = 0;
        while (l !== null) {
            res++;
            l = l.cdr;
        }
        return res;
    }
    function sc_remq(o, l) {
        let REPLACER = 23;
        var dummy = { cdr: null };
        var tail = dummy;
        while (l !== null) {
            if (l.car !== o) {
                tail.cdr = sc_cons(l.car, null);
                tail = tail.cdr;
            }
            l = l.cdr;
        }
        return dummy.cdr;
    }
    function sc_remqBang(o, l) {
        let REPLACER = 23;
        var dummy = { cdr: null };
        var tail = dummy;
        var needsAssig = true;
        while (l !== null) {
            if (l.car === o) {
                needsAssig = true;
            } else {
                if (needsAssig) {
                    tail.cdr = l;
                    needsAssig = false;
                }
                tail = l;
            }
            l = l.cdr;
        }
        tail.cdr = null;
        return dummy.cdr;
    }
    function sc_delete(o, l) {
        let REPLACER = 23;
        var dummy = { cdr: null };
        var tail = dummy;
        while (l !== null) {
            if (!sc_isEqual(l.car, o)) {
                tail.cdr = sc_cons(l.car, null);
                tail = tail.cdr;
            }
            l = l.cdr;
        }
        return dummy.cdr;
    }
    function sc_deleteBang(o, l) {
        let REPLACER = 23;
        var dummy = { cdr: null };
        var tail = dummy;
        var needsAssig = true;
        while (l !== null) {
            if (sc_isEqual(l.car, o)) {
                needsAssig = true;
            } else {
                if (needsAssig) {
                    tail.cdr = l;
                    needsAssig = false;
                }
                tail = l;
            }
            l = l.cdr;
        }
        tail.cdr = null;
        return dummy.cdr;
    }
    function sc_reverseAppendBang(l1, l2) {
        let REPLACER = 23;
        var res = l2;
        while (l1 !== null) {
            var tmp = res;
            res = l1;
            l1 = l1.cdr;
            res.cdr = tmp;
        }
        return res;
    }
    function sc_dualAppend(l1, l2) {
        let REPLACER = 23;
        if (l1 === null)
            return l2;
        if (l2 === null)
            return l1;
        var rev = sc_reverse(l1);
        return sc_reverseAppendBang(rev, l2);
    }
    function sc_append() {
        let REPLACER = 23;
        if (arguments.length === 0)
            return null;
        var res = arguments[arguments.length - 1];
        for (var i = arguments.length - 2; i >= 0; i--)
            res = sc_dualAppend(arguments[i], res);
        return res;
    }
    function sc_dualAppendBang(l1, l2) {
        let REPLACER = 23;
        if (l1 === null)
            return l2;
        if (l2 === null)
            return l1;
        var tmp = l1;
        while (tmp.cdr !== null)
            tmp = tmp.cdr;
        tmp.cdr = l2;
        return l1;
    }
    function sc_appendBang() {
        let REPLACER = 23;
        var res = null;
        for (var i = 0; i < arguments.length; i++)
            res = sc_dualAppendBang(res, arguments[i]);
        return res;
    }
    function sc_reverse(l1) {
        let REPLACER = 23;
        var res = null;
        while (l1 !== null) {
            res = sc_cons(l1.car, res);
            l1 = l1.cdr;
        }
        return res;
    }
    function sc_reverseBang(l) {
        let REPLACER = 23;
        return sc_reverseAppendBang(l, null);
    }
    function sc_listTail(l, k) {
        let REPLACER = 23;
        var res = l;
        for (var i = 0; i < k; i++) {
            res = res.cdr;
        }
        return res;
    }
    function sc_listRef(l, k) {
        let REPLACER = 23;
        return sc_listTail(l, k).car;
    }
    function sc_memq(o, l) {
        let REPLACER = 23;
        while (l !== null) {
            if (l.car === o)
                return l;
            l = l.cdr;
        }
        return false;
    }
    function sc_memv(o, l) {
        let REPLACER = 23;
        while (l !== null) {
            if (l.car === o)
                return l;
            l = l.cdr;
        }
        return false;
    }
    function sc_member(o, l) {
        let REPLACER = 23;
        while (l !== null) {
            if (sc_isEqual(l.car, o))
                return l;
            l = l.cdr;
        }
        return false;
    }
    function sc_assq(o, al) {
        let REPLACER = 23;
        while (al !== null) {
            if (al.car.car === o)
                return al.car;
            al = al.cdr;
        }
        return false;
    }
    function sc_assv(o, al) {
        let REPLACER = 23;
        while (al !== null) {
            if (al.car.car === o)
                return al.car;
            al = al.cdr;
        }
        return false;
    }
    function sc_assoc(o, al) {
        let REPLACER = 23;
        while (al !== null) {
            if (sc_isEqual(al.car.car, o))
                return al.car;
            al = al.cdr;
        }
        return false;
    }
    function sc_isCharStringEqual(cs1, cs2) {
        let REPLACER = 23;
        return cs1.val === cs2.val;
    }
    function sc_isCharStringLess(cs1, cs2) {
        let REPLACER = 23;
        return cs1.val < cs2.val;
    }
    function sc_isCharStringGreater(cs1, cs2) {
        let REPLACER = 23;
        return cs1.val > cs2.val;
    }
    function sc_isCharStringLessEqual(cs1, cs2) {
        let REPLACER = 23;
        return cs1.val <= cs2.val;
    }
    function sc_isCharStringGreaterEqual(cs1, cs2) {
        let REPLACER = 23;
        return cs1.val >= cs2.val;
    }
    function sc_isCharStringCIEqual(cs1, cs2) {
        let REPLACER = 23;
        return cs1.val.toLowerCase() === cs2.val.toLowerCase();
    }
    function sc_isCharStringCILess(cs1, cs2) {
        let REPLACER = 23;
        return cs1.val.toLowerCase() < cs2.val.toLowerCase();
    }
    function sc_isCharStringCIGreater(cs1, cs2) {
        let REPLACER = 23;
        return cs1.val.toLowerCase() > cs2.val.toLowerCase();
    }
    function sc_isCharStringCILessEqual(cs1, cs2) {
        let REPLACER = 23;
        return cs1.val.toLowerCase() <= cs2.val.toLowerCase();
    }
    function sc_isCharStringCIGreaterEqual(cs1, cs2) {
        let REPLACER = 23;
        return cs1.val.toLowerCase() >= cs2.val.toLowerCase();
    }
    function sc_Char(c) {
        let REPLACER = 23;
        var cached = sc_Char.lazy[c];
        if (cached)
            return cached;
        this.val = c;
        sc_Char.lazy[c] = this;
        return undefined;
    }
    sc_Char.lazy = new Object();
    sc_Char.char2readable = {
        '\0': '#\\null',
        '\x07': '#\\bell',
        '\b': '#\\backspace',
        '\t': '#\\tab',
        '\n': '#\\newline',
        '\f': '#\\page',
        '\r': '#\\return',
        '\x1B': '#\\escape',
        ' ': '#\\space',
        '\x7F': '#\\delete',
        '\x01': '#\\soh',
        '\x02': '#\\stx',
        '\x03': '#\\etx',
        '\x04': '#\\eot',
        '\x05': '#\\enq',
        '\x06': '#\\ack',
        '\x0B': '#\\vt',
        '\x0E': '#\\so',
        '\x0F': '#\\si',
        '\x10': '#\\dle',
        '\x11': '#\\dc1',
        '\x12': '#\\dc2',
        '\x13': '#\\dc3',
        '\x14': '#\\dc4',
        '\x15': '#\\nak',
        '\x16': '#\\syn',
        '\x17': '#\\etb',
        '\x18': '#\\can',
        '\x19': '#\\em',
        '\x1A': '#\\sub',
        '\x1B': '#\\esc',
        '\x1C': '#\\fs',
        '\x1D': '#\\gs',
        '\x1E': '#\\rs',
        '\x1F': '#\\us'
    };
    sc_Char.readable2char = {
        'null': '\0',
        'bell': '\x07',
        'backspace': '\b',
        'tab': '\t',
        'newline': '\n',
        'page': '\f',
        'return': '\r',
        'escape': '\x1B',
        'space': ' ',
        'delete': '\0',
        'soh': '\x01',
        'stx': '\x02',
        'etx': '\x03',
        'eot': '\x04',
        'enq': '\x05',
        'ack': '\x06',
        'bel': '\x07',
        'bs': '\b',
        'ht': '\t',
        'nl': '\n',
        'vt': '\x0B',
        'np': '\f',
        'cr': '\r',
        'so': '\x0E',
        'si': '\x0F',
        'dle': '\x10',
        'dc1': '\x11',
        'dc2': '\x12',
        'dc3': '\x13',
        'dc4': '\x14',
        'nak': '\x15',
        'syn': '\x16',
        'etb': '\x17',
        'can': '\x18',
        'em': '\x19',
        'sub': '\x1A',
        'esc': '\x1B',
        'fs': '\x1C',
        'gs': '\x1D',
        'rs': '\x1E',
        'us': '\x1F',
        'sp': ' ',
        'del': '\x7F'
    };
    sc_Char.prototype.toString = function () {
        let REPLACER = 23;
        return this.val;
    };
    sc_Char.prototype.sc_toWriteString = function () {
        let REPLACER = 23;
        var entry = sc_Char.char2readable[this.val];
        if (entry)
            return entry;
        else
            return '#\\' + this.val;
    };
    function sc_isChar(c) {
        let REPLACER = 23;
        return c instanceof sc_Char;
    }
    var sc_isCharEqual = sc_isCharStringEqual;
    var sc_isCharLess = sc_isCharStringLess;
    var sc_isCharGreater = sc_isCharStringGreater;
    var sc_isCharLessEqual = sc_isCharStringLessEqual;
    var sc_isCharGreaterEqual = sc_isCharStringGreaterEqual;
    var sc_isCharCIEqual = sc_isCharStringCIEqual;
    var sc_isCharCILess = sc_isCharStringCILess;
    var sc_isCharCIGreater = sc_isCharStringCIGreater;
    var sc_isCharCILessEqual = sc_isCharStringCILessEqual;
    var sc_isCharCIGreaterEqual = sc_isCharStringCIGreaterEqual;
    var SC_NUMBER_CLASS = '0123456789';
    var SC_WHITESPACE_CLASS = ' \r\n\t\f';
    var SC_LOWER_CLASS = 'abcdefghijklmnopqrstuvwxyz';
    var SC_UPPER_CLASS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    function sc_isCharOfClass(c, cl) {
        let REPLACER = 23;
        return cl.indexOf(c) != -1;
    }
    function sc_isCharAlphabetic(c) {
        let REPLACER = 23;
        return sc_isCharOfClass(c.val, SC_LOWER_CLASS) || sc_isCharOfClass(c.val, SC_UPPER_CLASS);
    }
    function sc_isCharNumeric(c) {
        let REPLACER = 23;
        return sc_isCharOfClass(c.val, SC_NUMBER_CLASS);
    }
    function sc_isCharWhitespace(c) {
        let REPLACER = 23;
        var tmp = c.val;
        return tmp === ' ' || tmp === '\r' || tmp === '\n' || tmp === '\t' || tmp === '\f';
    }
    function sc_isCharUpperCase(c) {
        let REPLACER = 23;
        return sc_isCharOfClass(c.val, SC_UPPER_CLASS);
    }
    function sc_isCharLowerCase(c) {
        let REPLACER = 23;
        return sc_isCharOfClass(c.val, SC_LOWER_CLASS);
    }
    function sc_char2integer(c) {
        let REPLACER = 23;
        return c.val.charCodeAt(0);
    }
    function sc_integer2char(n) {
        let REPLACER = 23;
        return new sc_Char(String.fromCharCode(n));
    }
    function sc_charUpcase(c) {
        let REPLACER = 23;
        return new sc_Char(c.val.toUpperCase());
    }
    function sc_charDowncase(c) {
        let REPLACER = 23;
        return new sc_Char(c.val.toLowerCase());
    }
    function sc_makeJSStringOfLength(k, c) {
        let REPLACER = 23;
        var fill;
        if (c === undefined)
            fill = ' ';
        else
            fill = c;
        var res = '';
        var len = 1;
        while (k >= len) {
            if (k & len)
                res = res.concat(fill);
            fill = fill.concat(fill);
            len *= 2;
        }
        return res;
    }
    function sc_makejsString(k, c) {
        let REPLACER = 23;
        var fill;
        if (c)
            fill = c.val;
        else
            fill = ' ';
        return sc_makeJSStringOfLength(k, fill);
    }
    function sc_jsstring2list(s) {
        let REPLACER = 23;
        var res = null;
        for (var i = s.length - 1; i >= 0; i--)
            res = sc_cons(new sc_Char(s.charAt(i)), res);
        return res;
    }
    function sc_list2jsstring(l) {
        let REPLACER = 23;
        var a = new Array();
        while (l !== null) {
            a.push(l.car.val);
            l = l.cdr;
        }
        return ''.concat.apply('', a);
    }
    var sc_Vector = Array;
    sc_Vector.prototype.sc_toWriteOrDisplayString = function (writeOrDisplay) {
        let REPLACER = 23;
        if (this.length === 0)
            return '#()';
        var res = '#(' + writeOrDisplay(this[0]);
        for (var i = 1; i < this.length; i++)
            res += ' ' + writeOrDisplay(this[i]);
        res += ')';
        return res;
    };
    sc_Vector.prototype.sc_toDisplayString = function () {
        let REPLACER = 23;
        return this.sc_toWriteOrDisplayString(sc_toDisplayString);
    };
    sc_Vector.prototype.sc_toWriteString = function () {
        let REPLACER = 23;
        return this.sc_toWriteOrDisplayString(sc_toWriteString);
    };
    function sc_isVector(v) {
        let REPLACER = 23;
        return v instanceof sc_Vector;
    }
    function sc_isVectorEqual(v1, v2, comp) {
        let REPLACER = 23;
        if (v1.length !== v2.length)
            return false;
        for (var i = 0; i < v1.length; i++)
            if (!comp(v1[i], v2[i]))
                return false;
        return true;
    }
    function sc_makeVector(size, fill) {
        let REPLACER = 23;
        var a = new sc_Vector(size);
        if (fill !== undefined)
            sc_vectorFillBang(a, fill);
        return a;
    }
    function sc_vector() {
        let REPLACER = 23;
        var a = new sc_Vector();
        for (var i = 0; i < arguments.length; i++)
            a.push(arguments[i]);
        return a;
    }
    function sc_vectorLength(v) {
        let REPLACER = 23;
        return v.length;
    }
    function sc_vectorRef(v, pos) {
        let REPLACER = 23;
        return v[pos];
    }
    function sc_vectorSetBang(v, pos, val) {
        let REPLACER = 23;
        v[pos] = val;
    }
    function sc_vector2list(a) {
        let REPLACER = 23;
        var res = null;
        for (var i = a.length - 1; i >= 0; i--)
            res = sc_cons(a[i], res);
        return res;
    }
    function sc_list2vector(l) {
        let REPLACER = 23;
        var a = new sc_Vector();
        while (l !== null) {
            a.push(l.car);
            l = l.cdr;
        }
        return a;
    }
    function sc_vectorFillBang(a, fill) {
        let REPLACER = 23;
        for (var i = 0; i < a.length; i++)
            a[i] = fill;
    }
    function sc_copyVector(a, len) {
        let REPLACER = 23;
        if (len <= a.length)
            return a.slice(0, len);
        else {
            var tmp = a.concat();
            tmp.length = len;
            return tmp;
        }
    }
    function sc_vectorCopy(a, start, end) {
        let REPLACER = 23;
        return a.slice(start, end);
    }
    function sc_vectorCopyBang(target, tstart, source, sstart, send) {
        let REPLACER = 23;
        if (!sstart)
            sstart = 0;
        if (!send)
            send = source.length;
        if (tstart <= sstart) {
            for (var i = tstart, j = sstart; j < send; i++, j++) {
                target[i] = source[j];
            }
        } else {
            var diff = send - sstart;
            for (var i = tstart + diff - 1, j = send - 1; j >= sstart; i--, j--) {
                target[i] = source[j];
            }
        }
        return target;
    }
    function sc_isProcedure(o) {
        let REPLACER = 23;
        return typeof o === 'function';
    }
    function sc_apply(proc) {
        let REPLACER = 23;
        var args = new Array();
        for (var i = 1; i < arguments.length - 1; i++)
            args.push(arguments[i]);
        var l = arguments[arguments.length - 1];
        while (l !== null) {
            args.push(l.car);
            l = l.cdr;
        }
        return proc.apply(null, args);
    }
    function sc_map(proc, l1) {
        let REPLACER = 23;
        if (l1 === undefined)
            return null;
        var nbApplyArgs = arguments.length - 1;
        var applyArgs = new Array(nbApplyArgs);
        var revres = null;
        while (l1 !== null) {
            for (var i = 0; i < nbApplyArgs; i++) {
                applyArgs[i] = arguments[i + 1].car;
                arguments[i + 1] = arguments[i + 1].cdr;
            }
            revres = sc_cons(proc.apply(null, applyArgs), revres);
        }
        return sc_reverseAppendBang(revres, null);
    }
    function sc_mapBang(proc, l1) {
        let REPLACER = 23;
        if (l1 === undefined)
            return null;
        var l1_orig = l1;
        var nbApplyArgs = arguments.length - 1;
        var applyArgs = new Array(nbApplyArgs);
        while (l1 !== null) {
            var tmp = l1;
            for (var i = 0; i < nbApplyArgs; i++) {
                applyArgs[i] = arguments[i + 1].car;
                arguments[i + 1] = arguments[i + 1].cdr;
            }
            tmp.car = proc.apply(null, applyArgs);
        }
        return l1_orig;
    }
    function sc_forEach(proc, l1) {
        let REPLACER = 23;
        if (l1 === undefined)
            return undefined;
        var nbApplyArgs = arguments.length - 1;
        var applyArgs = new Array(nbApplyArgs);
        while (l1 !== null) {
            for (var i = 0; i < nbApplyArgs; i++) {
                applyArgs[i] = arguments[i + 1].car;
                arguments[i + 1] = arguments[i + 1].cdr;
            }
            proc.apply(null, applyArgs);
        }
        return undefined;
    }
    function sc_filter(proc, l1) {
        let REPLACER = 23;
        var dummy = { cdr: null };
        var tail = dummy;
        while (l1 !== null) {
            if (proc(l1.car) !== false) {
                tail.cdr = sc_cons(l1.car, null);
                tail = tail.cdr;
            }
            l1 = l1.cdr;
        }
        return dummy.cdr;
    }
    function sc_filterBang(proc, l1) {
        let REPLACER = 23;
        var head = sc_cons('dummy', l1);
        var it = head;
        var next = l1;
        while (next !== null) {
            if (proc(next.car) !== false) {
                it.cdr = next;
                it = next;
            }
            next = next.cdr;
        }
        it.cdr = null;
        return head.cdr;
    }
    function sc_filterMap1(proc, l1) {
        let REPLACER = 23;
        var revres = null;
        while (l1 !== null) {
            var tmp = proc(l1.car);
            if (tmp !== false)
                revres = sc_cons(tmp, revres);
            l1 = l1.cdr;
        }
        return sc_reverseAppendBang(revres, null);
    }
    function sc_filterMap2(proc, l1, l2) {
        let REPLACER = 23;
        var revres = null;
        while (l1 !== null) {
            var tmp = proc(l1.car, l2.car);
            if (tmp !== false)
                revres = sc_cons(tmp, revres);
            l1 = l1.cdr;
            l2 = l2.cdr;
        }
        return sc_reverseAppendBang(revres, null);
    }
    function sc_filterMap(proc, l1, l2, l3) {
        let REPLACER = 23;
        if (l2 === undefined)
            return sc_filterMap1(proc, l1);
        else if (l3 === undefined)
            return sc_filterMap2(proc, l1, l2);
        var nbApplyArgs = arguments.length - 1;
        var applyArgs = new Array(nbApplyArgs);
        var revres = null;
        while (l1 !== null) {
            for (var i = 0; i < nbApplyArgs; i++) {
                applyArgs[i] = arguments[i + 1].car;
                arguments[i + 1] = arguments[i + 1].cdr;
            }
            var tmp = proc.apply(null, applyArgs);
            if (tmp !== false)
                revres = sc_cons(tmp, revres);
        }
        return sc_reverseAppendBang(revres, null);
    }
    function sc_any(proc, l) {
        let REPLACER = 23;
        var revres = null;
        while (l !== null) {
            var tmp = proc(l.car);
            if (tmp !== false)
                return tmp;
            l = l.cdr;
        }
        return false;
    }
    function sc_anyPred(proc, l) {
        let REPLACER = 23;
        return sc_any(proc, l) !== false;
    }
    function sc_every(proc, l) {
        let REPLACER = 23;
        var revres = null;
        var tmp = true;
        while (l !== null) {
            tmp = proc(l.car);
            if (tmp === false)
                return false;
            l = l.cdr;
        }
        return tmp;
    }
    function sc_everyPred(proc, l) {
        let REPLACER = 23;
        var tmp = sc_every(proc, l);
        if (tmp !== false)
            return true;
        return false;
    }
    function sc_force(o) {
        let REPLACER = 23;
        return o();
    }
    function sc_makePromise(proc) {
        let REPLACER = 23;
        var isResultReady = false;
        var result = undefined;
        return function () {
            let REPLACER = 23;
            if (!isResultReady) {
                var tmp = proc();
                if (!isResultReady) {
                    isResultReady = true;
                    result = tmp;
                }
            }
            return result;
        };
    }
    function sc_Values(values) {
        let REPLACER = 23;
        this.values = values;
    }
    function sc_values() {
        let REPLACER = 23;
        if (arguments.length === 1)
            return arguments[0];
        else
            return new sc_Values(arguments);
    }
    function sc_callWithValues(producer, consumer) {
        let REPLACER = 23;
        var produced = producer();
        if (produced instanceof sc_Values)
            return consumer.apply(null, produced.values);
        else
            return consumer(produced);
    }
    function sc_dynamicWind(before, thunk, after) {
        let REPLACER = 23;
        before();
        try {
            var res = thunk();
            return res;
        } finally {
            after();
        }
    }
    function sc_Struct(name) {
        let REPLACER = 23;
        this.name = name;
    }
    sc_Struct.prototype.sc_toDisplayString = function () {
        let REPLACER = 23;
        return '#<struct' + sc_hash(this) + '>';
    };
    sc_Struct.prototype.sc_toWriteString = sc_Struct.prototype.sc_toDisplayString;
    function sc_makeStruct(name) {
        let REPLACER = 23;
        return new sc_Struct(name);
    }
    function sc_isStruct(o) {
        let REPLACER = 23;
        return o instanceof sc_Struct;
    }
    function sc_isStructNamed(name, s) {
        let REPLACER = 23;
        return s instanceof sc_Struct && s.name === name;
    }
    function sc_getStructField(s, name, field) {
        let REPLACER = 23;
        return s[field];
    }
    function sc_setStructFieldBang(s, name, field, val) {
        let REPLACER = 23;
        s[field] = val;
    }
    function sc_bitNot(x) {
        let REPLACER = 23;
        return ~x;
    }
    function sc_bitAnd(x, y) {
        let REPLACER = 23;
        return x & y;
    }
    function sc_bitOr(x, y) {
        let REPLACER = 23;
        return x | y;
    }
    function sc_bitXor(x, y) {
        let REPLACER = 23;
        return x ^ y;
    }
    function sc_bitLsh(x, y) {
        let REPLACER = 23;
        return x << y;
    }
    function sc_bitRsh(x, y) {
        let REPLACER = 23;
        return x >> y;
    }
    function sc_bitUrsh(x, y) {
        let REPLACER = 23;
        return x >>> y;
    }
    function sc_jsField(o, field) {
        let REPLACER = 23;
        return o[field];
    }
    function sc_setJsFieldBang(o, field, val) {
        let REPLACER = 23;
        return o[field] = val;
    }
    function sc_deleteJsFieldBang(o, field) {
        let REPLACER = 23;
        delete o[field];
    }
    function sc_jsCall(o, fun) {
        let REPLACER = 23;
        var args = new Array();
        for (var i = 2; i < arguments.length; i++)
            args[i - 2] = arguments[i];
        return fun.apply(o, args);
    }
    function sc_jsMethodCall(o, field) {
        let REPLACER = 23;
        var args = new Array();
        for (var i = 2; i < arguments.length; i++)
            args[i - 2] = arguments[i];
        return o[field].apply(o, args);
    }
    function sc_jsNew(c) {
        let REPLACER = 23;
        var evalStr = 'new c(';
        evalStr += arguments.length > 1 ? 'arguments[1]' : '';
        for (var i = 2; i < arguments.length; i++)
            evalStr += ', arguments[' + i + ']';
        evalStr += ')';
        return eval(evalStr);
    }
    function sc_pregexp(re) {
        let REPLACER = 23;
        return new RegExp(sc_string2jsstring(re));
    }
    function sc_pregexpMatch(re, s) {
        let REPLACER = 23;
        var reg = re instanceof RegExp ? re : sc_pregexp(re);
        var tmp = reg.exec(sc_string2jsstring(s));
        if (tmp == null)
            return false;
        var res = null;
        for (var i = tmp.length - 1; i >= 0; i--) {
            if (tmp[i] !== null) {
                res = sc_cons(sc_jsstring2string(tmp[i]), res);
            } else {
                res = sc_cons(false, res);
            }
        }
        return res;
    }
    function sc_pregexpReplace(re, s1, s2) {
        let REPLACER = 23;
        var reg;
        var jss1 = sc_string2jsstring(s1);
        var jss2 = sc_string2jsstring(s2);
        if (re instanceof RegExp) {
            if (re.global)
                reg = re;
            else
                reg = new RegExp(re.source);
        } else {
            reg = new RegExp(sc_string2jsstring(re));
        }
        return jss1.replace(reg, jss2);
    }
    function sc_pregexpReplaceAll(re, s1, s2) {
        let REPLACER = 23;
        var reg;
        var jss1 = sc_string2jsstring(s1);
        var jss2 = sc_string2jsstring(s2);
        if (re instanceof RegExp) {
            if (re.global)
                reg = re;
            else
                reg = new RegExp(re.source, 'g');
        } else {
            reg = new RegExp(sc_string2jsstring(re), 'g');
        }
        return jss1.replace(reg, jss2);
    }
    function sc_pregexpSplit(re, s) {
        let REPLACER = 23;
        var reg = re instanceof RegExp ? re : new RegExp(sc_string2jsstring(re));
        var jss = sc_string2jsstring(s);
        var tmp = jss.split(reg);
        if (tmp == null)
            return false;
        return sc_vector2list(tmp);
    }
    function sc_random(n) {
        let REPLACER = 23;
        return Math.floor(Math.random() * n);
    }
    function sc_currentDate() {
        let REPLACER = 23;
        return new Date();
    }
    function sc_Hashtable() {
        let REPLACER = 23;
    }
    sc_Hashtable.prototype.toString = function () {
        let REPLACER = 23;
        return '#{%hashtable}';
    };
    function sc_HashtableElement(key, val) {
        let REPLACER = 23;
        this.key = key;
        this.val = val;
    }
    function sc_makeHashtable() {
        let REPLACER = 23;
        return new sc_Hashtable();
    }
    function sc_hashtablePutBang(ht, key, val) {
        let REPLACER = 23;
        var hash = sc_hash(key);
        ht[hash] = new sc_HashtableElement(key, val);
    }
    function sc_hashtableGet(ht, key) {
        let REPLACER = 23;
        var hash = sc_hash(key);
        if (hash in ht)
            return ht[hash].val;
        else
            return false;
    }
    function sc_hashtableForEach(ht, f) {
        let REPLACER = 23;
        for (var v in ht) {
            if (ht[v] instanceof sc_HashtableElement)
                f(ht[v].key, ht[v].val);
        }
    }
    function sc_hashtableContains(ht, key) {
        let REPLACER = 23;
        var hash = sc_hash(key);
        if (hash in ht)
            return true;
        else
            return false;
    }
    var SC_HASH_COUNTER = 0;
    function sc_hash(o) {
        let REPLACER = 23;
        if (o === null)
            return 'null';
        else if (o === undefined)
            return 'undefined';
        else if (o === true)
            return 'true';
        else if (o === false)
            return 'false';
        else if (typeof o === 'number')
            return 'num-' + o;
        else if (typeof o === 'string')
            return 'jsstr-' + o;
        else if (o.sc_getHash)
            return o.sc_getHash();
        else
            return sc_counterHash.call(o);
    }
    function sc_counterHash() {
        throw () => {
            return () => {
            };
        };
        if (!this.sc_hash) {
            this.sc_hash = 'hash-' + SC_HASH_COUNTER;
            SC_HASH_COUNTER++;
        }
        return this.sc_hash;
    }
    function sc_Trampoline(args, maxTailCalls) {
        this['__trampoline return__'] = true;
        this.args = args;
        this.MAX_TAIL_CALLs = maxTailCalls;
    }
    sc_Trampoline.prototype.restart = function () {
        var o = this;
        while (true) {
            SC_TAIL_OBJECT.calls = o.MAX_TAIL_CALLs - 1;
            var fun = o.args.callee;
            var res = fun.apply(SC_TAIL_OBJECT, o.args);
            if (res instanceof sc_Trampoline)
                o = res;
            else
                return res;
        }
    };
    function sc_bindExitLambda(proc) {
        var escape_obj = new sc_BindExitException();
        var escape = function (res) {
            escape_obj.res = res;
            throw escape_obj;
        };
        try {
            return proc(escape);
        } catch (e) {
            if (e === escape_obj) {
                return e.res;
            }
            throw e;
        }
    }
    function sc_BindExitException() {
        this._internalException = true;
    }
    var SC_SCM2JS_GLOBALS = new Object();
    var SC_TAIL_OBJECT = new Object();
    SC_SCM2JS_GLOBALS.TAIL_OBJECT = SC_TAIL_OBJECT;
    function sc_EOF() {
    }
    var SC_EOF_OBJECT = new sc_EOF();
    function sc_Port() {
    }
    function sc_InputPort() {
    }
    sc_InputPort.prototype = new sc_Port();
    sc_InputPort.prototype.peekChar = function () {
        if (!('peeked' in this))
            this.peeked = this.getNextChar();
        return this.peeked;
    };
    sc_InputPort.prototype.readChar = function () {
        var tmp = this.peekChar();
        delete this.peeked;
        return tmp;
    };
    sc_InputPort.prototype.isCharReady = function () {
        return true;
    };
    sc_InputPort.prototype.close = function () {
    };
    function sc_ErrorInputPort() {
    }
    ;
    sc_ErrorInputPort.prototype = new sc_InputPort();
    sc_ErrorInputPort.prototype.getNextChar = function () {
        throw 'can\'t read from error-port.';
    };
    sc_ErrorInputPort.prototype.isCharReady = function () {
        return false;
    };
    function sc_StringInputPort(jsStr) {
        this.str = new String(jsStr);
        this.pos = 0;
    }
    sc_StringInputPort.prototype = new sc_InputPort();
    sc_StringInputPort.prototype.getNextChar = function () {
        if (this.pos >= this.str.length)
            return SC_EOF_OBJECT;
        return this.str.charAt(this.pos++);
    };
    function sc_Token(type, val, pos) {
        this.type = type;
        this.val = val;
        this.pos = pos;
    }
    sc_Token.EOF = 0;
    sc_Token.OPEN_PAR = 1;
    sc_Token.CLOSE_PAR = 2;
    sc_Token.OPEN_BRACE = 3;
    sc_Token.CLOSE_BRACE = 4;
    sc_Token.OPEN_BRACKET = 5;
    sc_Token.CLOSE_BRACKET = 6;
    sc_Token.WHITESPACE = 7;
    sc_Token.QUOTE = 8;
    sc_Token.ID = 9;
    sc_Token.DOT = 10;
    sc_Token.STRING = 11;
    sc_Token.NUMBER = 12;
    sc_Token.ERROR = 13;
    sc_Token.VECTOR_BEGIN = 14;
    sc_Token.TRUE = 15;
    sc_Token.FALSE = 16;
    sc_Token.UNSPECIFIED = 17;
    sc_Token.REFERENCE = 18;
    sc_Token.STORE = 19;
    sc_Token.CHAR = 20;
    var SC_ID_CLASS = SC_LOWER_CLASS + SC_UPPER_CLASS + '!$%*+-./:<=>?@^_~';
    function sc_Tokenizer(port) {
        this.port = port;
    }
    sc_Tokenizer.prototype.peekToken = function () {
        if (this.peeked)
            return this.peeked;
        var newToken = this.nextToken();
        this.peeked = newToken;
        return newToken;
    };
    sc_Tokenizer.prototype.readToken = function () {
        var tmp = this.peekToken();
        delete this.peeked;
        return tmp;
    };
    sc_Tokenizer.prototype.nextToken = function () {
        var port = this.port;
        function isNumberChar(c) {
            return c >= '0' && c <= '9';
        }
        ;
        function isIdOrNumberChar(c) {
            return SC_ID_CLASS.indexOf(c) != -1 || c >= '0' && c <= '9';
        }
        function isWhitespace(c) {
            return c === ' ' || c === '\r' || c === '\n' || c === '\t' || c === '\f';
        }
        ;
        function isWhitespaceOrEOF(c) {
            return isWhitespace(c) || c === SC_EOF_OBJECT;
        }
        ;
        function readString() {
            res = '';
            while (true) {
                var c = port.readChar();
                switch (c) {
                case '"':
                    return new sc_Token(11, res);
                case '\\':
                    var tmp = port.readChar();
                    switch (tmp) {
                    case '0':
                        res += '\0';
                        break;
                    case 'a':
                        res += 'a';
                        break;
                    case 'b':
                        res += '\b';
                        break;
                    case 'f':
                        res += '\f';
                        break;
                    case 'n':
                        res += '\n';
                        break;
                    case 'r':
                        res += '\r';
                        break;
                    case 't':
                        res += '\t';
                        break;
                    case 'v':
                        res += '\x0B';
                        break;
                    case '"':
                        res += '"';
                        break;
                    case '\\':
                        res += '\\';
                        break;
                    case 'x':
                        var nb = 0;
                        while (true) {
                            var hexC = port.peekChar();
                            if (hexC >= '0' && hexC <= '9') {
                                port.readChar();
                                nb = nb * 16 + hexC.charCodeAt(0) - '0'.charCodeAt(0);
                            } else if (hexC >= 'a' && hexC <= 'f') {
                                port.readChar();
                                nb = nb * 16 + hexC.charCodeAt(0) - 'a'.charCodeAt(0);
                            } else if (hexC >= 'A' && hexC <= 'F') {
                                port.readChar();
                                nb = nb * 16 + hexC.charCodeAt(0) - 'A'.charCodeAt(0);
                            } else {
                                res += String.fromCharCode(nb);
                                break;
                            }
                        }
                        break;
                    default:
                        if (tmp === SC_EOF_OBJECT) {
                            return new sc_Token(13, 'unclosed string-literal' + res);
                        }
                        res += tmp;
                    }
                    break;
                default:
                    if (c === SC_EOF_OBJECT) {
                        return new sc_Token(13, 'unclosed string-literal' + res);
                    }
                    res += c;
                }
            }
        }
        ;
        function readIdOrNumber(firstChar) {
            var res = firstChar;
            while (isIdOrNumberChar(port.peekChar()))
                res += port.readChar();
            if (isNaN(res))
                return new sc_Token(9, res);
            else
                return new sc_Token(12, res - 0);
        }
        ;
        function skipWhitespaceAndComments() {
            var done = false;
            while (!done) {
                done = true;
                while (isWhitespace(port.peekChar()))
                    port.readChar();
                if (port.peekChar() === ';') {
                    port.readChar();
                    done = false;
                    while (true) {
                        curChar = port.readChar();
                        if (curChar === SC_EOF_OBJECT || curChar === '\n')
                            break;
                    }
                }
            }
        }
        ;
        function readDot() {
            if (isWhitespace(port.peekChar()))
                return new sc_Token(10);
            else
                return readIdOrNumber('.');
        }
        ;
        function readSharp() {
            var c = port.readChar();
            if (isWhitespace(c))
                return new sc_Token(13, 'bad #-pattern0.');
            if (isNumberChar(c)) {
                var nb = c - 0;
                while (isNumberChar(port.peekChar()))
                    nb = nb * 10 + (port.readChar() - 0);
                switch (port.readChar()) {
                case '#':
                    return new sc_Token(18, nb);
                case '=':
                    return new sc_Token(19, nb);
                default:
                    return new sc_Token(13, 'bad #-pattern1.' + nb);
                }
            }
            if (c === '(')
                return new sc_Token(14);
            if (c === '\\') {
                var tmp = '';
                while (!isWhitespaceOrEOF(port.peekChar()))
                    tmp += port.readChar();
                switch (tmp.length) {
                case 0:
                    if (sc_isEOFObject(port.peekChar))
                        return new sc_Token(13, 'bad #-pattern2.');
                    else
                        return new sc_Token(20, port.readChar());
                case 1:
                    return new sc_Token(20, tmp);
                default:
                    var entry = sc_Char.readable2char[tmp.toLowerCase()];
                    if (entry)
                        return new sc_Token(20, entry);
                    else
                        return new sc_Token(13, 'unknown character description: #\\' + tmp);
                }
            }
            var res;
            var needing;
            switch (c) {
            case 't':
                res = new sc_Token(15, true);
                needing = '';
                break;
            case 'f':
                res = new sc_Token(16, false);
                needing = '';
                break;
            case 'u':
                res = new sc_Token(17, undefined);
                needing = 'nspecified';
                break;
            default:
                return new sc_Token(13, 'bad #-pattern3: ' + c);
            }
            while (true) {
                c = port.peekChar();
                if ((isWhitespaceOrEOF(c) || c === ')') && needing == '')
                    return res;
                else if (isWhitespace(c) || needing == '')
                    return new sc_Token(13, 'bad #-pattern4 ' + c + ' ' + needing);
                else if (needing.charAt(0) == c) {
                    port.readChar();
                    needing = needing.slice(1);
                } else
                    return new sc_Token(13, 'bad #-pattern5');
            }
        }
        ;
        skipWhitespaceAndComments();
        var curChar = port.readChar();
        if (curChar === SC_EOF_OBJECT)
            return new sc_Token(0, curChar);
        switch (curChar) {
        case ' ':
        case '\n':
        case '\t':
            return readWhitespace();
        case '(':
            return new sc_Token(1);
        case ')':
            return new sc_Token(2);
        case '{':
            return new sc_Token(3);
        case '}':
            return new sc_Token(4);
        case '[':
            return new sc_Token(5);
        case ']':
            return new sc_Token(6);
        case '\'':
            return new sc_Token(8);
        case '#':
            return readSharp();
        case '.':
            return readDot();
        case '"':
            return readString();
        default:
            if (isIdOrNumberChar(curChar))
                return readIdOrNumber(curChar);
            throw 'unexpected character: ' + curChar;
        }
    };
    function sc_Reader(tokenizer) {
        this.tokenizer = tokenizer;
        this.backref = new Array();
    }
    sc_Reader.prototype.read = function () {
        function readList(listBeginType) {
            function matchesPeer(open, close) {
                return open === 1 && close === 2 || open === 3 && close === 4 || open === 5 && close === 6;
            }
            ;
            var res = null;
            while (true) {
                var token = tokenizer.peekToken();
                switch (token.type) {
                case 2:
                case 4:
                case 6:
                    if (matchesPeer(listBeginType, token.type)) {
                        tokenizer.readToken();
                        return sc_reverseBang(res);
                    } else
                        throw 'closing par doesn\'t match: ' + listBeginType + ' ' + listEndType;
                case 0:
                    throw 'unexpected end of file';
                case 10:
                    tokenizer.readToken();
                    var cdr = this.read();
                    var par = tokenizer.readToken();
                    if (!matchesPeer(listBeginType, par.type))
                        throw 'closing par doesn\'t match: ' + listBeginType + ' ' + par.type;
                    else
                        return sc_reverseAppendBang(res, cdr);
                default:
                    res = sc_cons(this.read(), res);
                }
            }
        }
        ;
        function readQuote() {
            return sc_cons('quote', sc_cons(this.read(), null));
        }
        ;
        function readVector() {
            var a = new Array();
            while (true) {
                var token = tokenizer.peekToken();
                switch (token.type) {
                case 2:
                    tokenizer.readToken();
                    return a;
                default:
                    a.push(this.read());
                }
            }
        }
        ;
        function storeRefence(nb) {
            var tmp = this.read();
            this.backref[nb] = tmp;
            return tmp;
        }
        ;
        function readReference(nb) {
            if (nb in this.backref)
                return this.backref[nb];
            else
                throw 'bad reference: ' + nb;
        }
        ;
        var tokenizer = this.tokenizer;
        var token = tokenizer.readToken();
        if (token.type === 13)
            throw token.val;
        switch (token.type) {
        case 1:
        case 3:
        case 5:
            return readList.call(this, token.type);
        case 8:
            return readQuote.call(this);
        case 11:
            return sc_jsstring2string(token.val);
        case 20:
            return new sc_Char(token.val);
        case 14:
            return readVector.call(this);
        case 18:
            return readReference.call(this, token.val);
        case 19:
            return storeRefence.call(this, token.val);
        case 9:
            return sc_jsstring2symbol(token.val);
        case 0:
        case 12:
        case 15:
        case 16:
        case 17:
            return token.val;
        default:
            throw 'unexpected token ' + token.type + ' ' + token.val;
        }
    };
    function sc_read(port) {
        if (port === undefined)
            port = SC_DEFAULT_IN;
        var reader = new sc_Reader(new sc_Tokenizer(port));
        return reader.read();
    }
    function sc_readChar(port) {
        if (port === undefined)
            port = SC_DEFAULT_IN;
        var t = port.readChar();
        return t === SC_EOF_OBJECT ? t : new sc_Char(t);
    }
    function sc_peekChar(port) {
        if (port === undefined)
            port = SC_DEFAULT_IN;
        var t = port.peekChar();
        return t === SC_EOF_OBJECT ? t : new sc_Char(t);
    }
    function sc_isCharReady(port) {
        if (port === undefined)
            port = SC_DEFAULT_IN;
        return port.isCharReady();
    }
    function sc_closeInputPort(p) {
        return p.close();
    }
    function sc_isInputPort(o) {
        return o instanceof sc_InputPort;
    }
    function sc_isEOFObject(o) {
        return o === SC_EOF_OBJECT;
    }
    function sc_currentInputPort() {
        return SC_DEFAULT_IN;
    }
    function sc_callWithInputFile(s, proc) {
        throw 'can\'t open ' + s;
    }
    function sc_callWithOutputFile(s, proc) {
        throw 'can\'t open ' + s;
    }
    function sc_withInputFromFile(s, thunk) {
        throw 'can\'t open ' + s;
    }
    function sc_withOutputToFile(s, thunk) {
        throw 'can\'t open ' + s;
    }
    function sc_openInputFile(s) {
        throw 'can\'t open ' + s;
    }
    function sc_openOutputFile(s) {
        throw 'can\'t open ' + s;
    }
    function sc_basename(p) {
        var i = p.lastIndexOf('/');
        if (i >= 0)
            return p.substring(i + 1, p.length);
        else
            return '';
    }
    function sc_dirname(p) {
        var i = p.lastIndexOf('/');
        if (i >= 0)
            return p.substring(0, i);
        else
            return '';
    }
    function sc_withInputFromPort(p, thunk) {
        try {
            var tmp = SC_DEFAULT_IN;
            SC_DEFAULT_IN = p;
            return thunk();
        } finally {
            SC_DEFAULT_IN = tmp;
        }
    }
    function sc_withInputFromString(s, thunk) {
        return sc_withInputFromPort(new sc_StringInputPort(sc_string2jsstring(s)), thunk);
    }
    function sc_withOutputToPort(p, thunk) {
        try {
            var tmp = SC_DEFAULT_OUT;
            SC_DEFAULT_OUT = p;
            return thunk();
        } finally {
            SC_DEFAULT_OUT = tmp;
        }
    }
    function sc_withOutputToString(thunk) {
        var p = new sc_StringOutputPort();
        sc_withOutputToPort(p, thunk);
        return p.close();
    }
    function sc_withOutputToProcedure(proc, thunk) {
        var t = function (s) {
            proc(sc_jsstring2string(s));
        };
        return sc_withOutputToPort(new sc_GenericOutputPort(t), thunk);
    }
    function sc_openOutputString() {
        return new sc_StringOutputPort();
    }
    function sc_openInputString(str) {
        return new sc_StringInputPort(sc_string2jsstring(str));
    }
    function sc_OutputPort() {
    }
    sc_OutputPort.prototype = new sc_Port();
    sc_OutputPort.prototype.appendJSString = function (obj) {
    };
    sc_OutputPort.prototype.close = function () {
    };
    function sc_StringOutputPort() {
        this.res = '';
    }
    sc_StringOutputPort.prototype = new sc_OutputPort();
    sc_StringOutputPort.prototype.appendJSString = function (s) {
        this.res += s;
    };
    sc_StringOutputPort.prototype.close = function () {
        return sc_jsstring2string(this.res);
    };
    function sc_getOutputString(sp) {
        return sc_jsstring2string(sp.res);
    }
    function sc_ErrorOutputPort() {
    }
    sc_ErrorOutputPort.prototype = new sc_OutputPort();
    sc_ErrorOutputPort.prototype.appendJSString = function (s) {
        throw 'don\'t write on ErrorPort!';
    };
    sc_ErrorOutputPort.prototype.close = function () {
    };
    function sc_GenericOutputPort(appendJSString, close) {
        this.appendJSString = appendJSString;
        if (close)
            this.close = close;
    }
    sc_GenericOutputPort.prototype = new sc_OutputPort();
    function sc_isOutputPort(o) {
        return o instanceof sc_OutputPort;
    }
    function sc_closeOutputPort(p) {
        return p.close();
    }
    function sc_write(o, p) {
        if (p === undefined)
            p = SC_DEFAULT_OUT;
        p.appendJSString(sc_toWriteString(o));
    }
    function sc_toWriteString(o) {
        if (o === null)
            return '()';
        else if (o === true)
            return '#t';
        else if (o === false)
            return '#f';
        else if (o === undefined)
            return '#unspecified';
        else if (typeof o === 'function')
            return '#<procedure ' + sc_hash(o) + '>';
        else if (o.sc_toWriteString)
            return o.sc_toWriteString();
        else
            return o.toString();
    }
    function sc_escapeWriteString(s) {
        var res = '';
        var j = 0;
        for (i = 0; i < s.length; i++) {
            switch (s.charAt(i)) {
            case '\0':
                res += s.substring(j, i) + '\\0';
                j = i + 1;
                break;
            case '\b':
                res += s.substring(j, i) + '\\b';
                j = i + 1;
                break;
            case '\f':
                res += s.substring(j, i) + '\\f';
                j = i + 1;
                break;
            case '\n':
                res += s.substring(j, i) + '\\n';
                j = i + 1;
                break;
            case '\r':
                res += s.substring(j, i) + '\\r';
                j = i + 1;
                break;
            case '\t':
                res += s.substring(j, i) + '\\t';
                j = i + 1;
                break;
            case '\x0B':
                res += s.substring(j, i) + '\\v';
                j = i + 1;
                break;
            case '"':
                res += s.substring(j, i) + '\\"';
                j = i + 1;
                break;
            case '\\':
                res += s.substring(j, i) + '\\\\';
                j = i + 1;
                break;
            default:
                var c = s.charAt(i);
                if ('a' !== 'a' && c == 'a') {
                    res += s.substring(j, i) + '\\a';
                    j = i + 1;
                    continue;
                }
                if ('\x0B' !== 'v' && c == '\x0B') {
                    res += s.substring(j, i) + '\\v';
                    j = i + 1;
                    continue;
                }
                if (s.charAt(i) < ' ') {
                    res += s.substring(j, i) + '\\x' + s.charCodeAt(i).toString(16);
                    j = i + 1;
                }
            }
        }
        res += s.substring(j, i);
        return res;
    }
    function sc_display(o, p) {
        if (p === undefined)
            p = SC_DEFAULT_OUT;
        p.appendJSString(sc_toDisplayString(o));
    }
    function sc_toDisplayString(o) {
        if (o === null)
            return '()';
        else if (o === true)
            return '#t';
        else if (o === false)
            return '#f';
        else if (o === undefined)
            return '#unspecified';
        else if (typeof o === 'function')
            return '#<procedure ' + sc_hash(o) + '>';
        else if (o.sc_toDisplayString)
            return o.sc_toDisplayString();
        else
            return o.toString();
    }
    function sc_newline(p) {
        if (p === undefined)
            p = SC_DEFAULT_OUT;
        p.appendJSString('\n');
    }
    function sc_writeChar(c, p) {
        if (p === undefined)
            p = SC_DEFAULT_OUT;
        p.appendJSString(c.val);
    }
    function sc_writeCircle(o, p) {
        if (p === undefined)
            p = SC_DEFAULT_OUT;
        p.appendJSString(sc_toWriteCircleString(o));
    }
    function sc_toWriteCircleString(o) {
        var symb = sc_gensym('writeCircle');
        var nbPointer = new Object();
        nbPointer.nb = 0;
        sc_prepWriteCircle(o, symb, nbPointer);
        return sc_genToWriteCircleString(o, symb);
    }
    function sc_prepWriteCircle(o, symb, nbPointer) {
        if (o instanceof sc_Pair || o instanceof sc_Vector) {
            if (o[symb] !== undefined) {
                o[symb]++;
                if (!o[symb + 'nb'])
                    o[symb + 'nb'] = nbPointer.nb++;
                return;
            }
            o[symb] = 0;
            if (o instanceof sc_Pair) {
                sc_prepWriteCircle(o.car, symb, nbPointer);
                sc_prepWriteCircle(o.cdr, symb, nbPointer);
            } else {
                for (var i = 0; i < o.length; i++)
                    sc_prepWriteCircle(o[i], symb, nbPointer);
            }
        }
    }
    function sc_genToWriteCircleString(o, symb) {
        if (!(o instanceof sc_Pair || o instanceof sc_Vector))
            return sc_toWriteString(o);
        return o.sc_toWriteCircleString(symb);
    }
    sc_Pair.prototype.sc_toWriteCircleString = function (symb, inList) {
        if (this[symb + 'use']) {
            var nb = this[symb + 'nb'];
            if (this[symb]-- === 0) {
                delete this[symb];
                delete this[symb + 'nb'];
                delete this[symb + 'use'];
            }
            if (inList)
                return '. #' + nb + '#';
            else
                return '#' + nb + '#';
        }
        if (this[symb]-- === 0) {
            delete this[symb];
            delete this[symb + 'nb'];
            delete this[symb + 'use'];
        }
        var res = '';
        if (this[symb] !== undefined) {
            this[symb + 'use'] = true;
            if (inList)
                res += '. #' + this[symb + 'nb'] + '=';
            else
                res += '#' + this[symb + 'nb'] + '=';
            inList = false;
        }
        if (!inList)
            res += '(';
        res += sc_genToWriteCircleString(this.car, symb);
        if (sc_isPair(this.cdr)) {
            res += ' ' + this.cdr.sc_toWriteCircleString(symb, true);
        } else if (this.cdr !== null) {
            res += ' . ' + sc_genToWriteCircleString(this.cdr, symb);
        }
        if (!inList)
            res += ')';
        return res;
    };
    sc_Vector.prototype.sc_toWriteCircleString = function (symb) {
        if (this[symb + 'use']) {
            var nb = this[symb + 'nb'];
            if (this[symb]-- === 0) {
                delete this[symb];
                delete this[symb + 'nb'];
                delete this[symb + 'use'];
            }
            return '#' + nb + '#';
        }
        if (this[symb]-- === 0) {
            delete this[symb];
            delete this[symb + 'nb'];
            delete this[symb + 'use'];
        }
        var res = '';
        if (this[symb] !== undefined) {
            this[symb + 'use'] = true;
            res += '#' + this[symb + 'nb'] + '=';
        }
        res += '#(';
        for (var i = 0; i < this.length; i++) {
            res += sc_genToWriteCircleString(this[i], symb);
            if (i < this.length - 1)
                res += ' ';
        }
        res += ')';
        return res;
    };
    function sc_print(s) {
        if (arguments.length === 1) {
            sc_display(s);
            sc_newline();
        } else {
            for (var i = 0; i < arguments.length; i++)
                sc_display(arguments[i]);
            sc_newline();
        }
    }
    function sc_format(s, args) {
        var len = s.length;
        var p = new sc_StringOutputPort();
        var i = 0, j = 1;
        while (i < len) {
            var i2 = s.indexOf('~', i);
            if (i2 == -1) {
                p.appendJSString(s.substring(i, len));
                return p.close();
            } else {
                if (i2 > i) {
                    if (i2 == len - 1) {
                        p.appendJSString(s.substring(i, len));
                        return p.close();
                    } else {
                        p.appendJSString(s.substring(i, i2));
                        i = i2;
                    }
                }
                switch (s.charCodeAt(i2 + 1)) {
                case 65:
                case 97:
                    sc_display(arguments[j], p);
                    i += 2;
                    j++;
                    break;
                case 83:
                case 115:
                    sc_write(arguments[j], p);
                    i += 2;
                    j++;
                    break;
                case 86:
                case 118:
                    sc_display(arguments[j], p);
                    p.appendJSString('\n');
                    i += 2;
                    j++;
                    break;
                case 67:
                case 99:
                    p.appendJSString(String.fromCharCode(arguments[j]));
                    i += 2;
                    j++;
                    break;
                case 88:
                case 120:
                    p.appendJSString(arguments[j].toString(6));
                    i += 2;
                    j++;
                    break;
                case 79:
                case 111:
                    p.appendJSString(arguments[j].toString(8));
                    i += 2;
                    j++;
                    break;
                case 66:
                case 98:
                    p.appendJSString(arguments[j].toString(2));
                    i += 2;
                    j++;
                    break;
                case 37:
                case 110:
                    p.appendJSString('\n');
                    i += 2;
                    break;
                case 114:
                    p.appendJSString('\r');
                    i += 2;
                    break;
                case 126:
                    p.appendJSString('~');
                    i += 2;
                    break;
                default:
                    sc_error('format: illegal ~' + String.fromCharCode(s.charCodeAt(i2 + 1)) + ' sequence');
                    return '';
                }
            }
        }
        return p.close();
    }
    var SC_DEFAULT_IN = new sc_ErrorInputPort();
    var SC_DEFAULT_OUT = new sc_ErrorOutputPort();
    var SC_ERROR_OUT = new sc_ErrorOutputPort();
    var sc_SYMBOL_PREFIX = 'ẜ';
    var sc_KEYWORD_PREFIX = 'ẝ';
    function sc_jsstring2string(s) {
        return s;
    }
    function sc_jsstring2symbol(s) {
        return sc_SYMBOL_PREFIX + s;
    }
    function sc_string2jsstring(s) {
        return s;
    }
    function sc_symbol2jsstring(s) {
        return s.slice(1);
    }
    function sc_keyword2jsstring(k) {
        return k.slice(1);
    }
    function sc_jsstring2keyword(s) {
        return sc_KEYWORD_PREFIX + s;
    }
    function sc_isKeyword(s) {
        return typeof s === 'string' && s.charAt(0) === sc_KEYWORD_PREFIX;
    }
    var sc_gensym = function () {
        var counter = 1000;
        return function (sym) {
            counter++;
            if (!sym)
                sym = sc_SYMBOL_PREFIX;
            return sym + 's' + counter + '~' + '^sC-GeNsYm ';
        };
    }();
    function sc_isEqual(o1, o2) {
        return o1 === o2 || sc_isPair(o1) && sc_isPair(o2) && sc_isPairEqual(o1, o2, sc_isEqual) || sc_isVector(o1) && sc_isVector(o2) && sc_isVectorEqual(o1, o2, sc_isEqual);
    }
    function sc_number2symbol(x, radix) {
        return sc_SYMBOL_PREFIX + sc_number2jsstring(x, radix);
    }
    var sc_number2string = sc_number2jsstring;
    function sc_symbol2number(s, radix) {
        return sc_jsstring2number(s.slice(1), radix);
    }
    var sc_string2number = sc_jsstring2number;
    function sc_string2integer(s, radix) {
        if (!radix)
            return +s;
        return parseInt(s, radix);
    }
    function sc_string2real(s) {
        return +s;
    }
    function sc_isSymbol(s) {
        return typeof s === 'string' && s.charAt(0) === sc_SYMBOL_PREFIX;
    }
    function sc_symbol2string(s) {
        return s.slice(1);
    }
    function sc_string2symbol(s) {
        return sc_SYMBOL_PREFIX + s;
    }
    function sc_symbolAppend() {
        var res = sc_SYMBOL_PREFIX;
        for (var i = 0; i < arguments.length; i++)
            res += arguments[i].slice(1);
        return res;
    }
    function sc_char2string(c) {
        return c.val;
    }
    function sc_char2symbol(c) {
        return sc_SYMBOL_PREFIX + c.val;
    }
    function sc_isString(s) {
        return typeof s === 'string' && s.charAt(0) !== sc_SYMBOL_PREFIX;
    }
    var sc_makeString = sc_makejsString;
    function sc_string() {
        for (var i = 0; i < arguments.length; i++)
            arguments[i] = arguments[i].val;
        return ''.concat.apply('', arguments);
    }
    function sc_stringLength(s) {
        return s.length;
    }
    function sc_stringRef(s, k) {
        return new sc_Char(s.charAt(k));
    }
    function sc_isStringEqual(s1, s2) {
        return s1 === s2;
    }
    function sc_isStringLess(s1, s2) {
        return s1 < s2;
    }
    function sc_isStringGreater(s1, s2) {
        return s1 > s2;
    }
    function sc_isStringLessEqual(s1, s2) {
        return s1 <= s2;
    }
    function sc_isStringGreaterEqual(s1, s2) {
        return s1 >= s2;
    }
    function sc_isStringCIEqual(s1, s2) {
        return s1.toLowerCase() === s2.toLowerCase();
    }
    function sc_isStringCILess(s1, s2) {
        return s1.toLowerCase() < s2.toLowerCase();
    }
    function sc_isStringCIGreater(s1, s2) {
        return s1.toLowerCase() > s2.toLowerCase();
    }
    function sc_isStringCILessEqual(s1, s2) {
        return s1.toLowerCase() <= s2.toLowerCase();
    }
    function sc_isStringCIGreaterEqual(s1, s2) {
        return s1.toLowerCase() >= s2.toLowerCase();
    }
    function sc_substring(s, start, end) {
        return s.substring(start, end);
    }
    function sc_isSubstring_at(s1, s2, i) {
        return s2 == s1.substring(i, i + s2.length);
    }
    function sc_stringAppend() {
        return ''.concat.apply('', arguments);
    }
    var sc_string2list = sc_jsstring2list;
    var sc_list2string = sc_list2jsstring;
    function sc_stringCopy(s) {
        return s;
    }
    function sc_keyword2string(o) {
        return o.slice(1);
    }
    function sc_string2keyword(o) {
        return sc_KEYWORD_PREFIX + o;
    }
    String.prototype.sc_toDisplayString = function () {
        if (this.charAt(0) === sc_SYMBOL_PREFIX)
            return this.slice(1);
        else if (this.charAt(0) === sc_KEYWORD_PREFIX)
            return ':' + this.slice(1);
        else
            return this.toString();
    };
    String.prototype.sc_toWriteString = function () {
        if (this.charAt(0) === sc_SYMBOL_PREFIX)
            return this.slice(1);
        else if (this.charAt(0) === sc_KEYWORD_PREFIX)
            return ':' + this.slice(1);
        else
            return '"' + sc_escapeWriteString(this) + '"';
    };
    var BgL_testzd2boyerzd2;
    var BgL_nboyerzd2benchmarkzd2;
    var BgL_setupzd2boyerzd2;
    var translate_term_nboyer;
    var translate_args_nboyer;
    var untranslate_term_nboyer;
    var BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer;
    var BgL_sc_za2symbolzd2recordszd2alistza2_2z00_nboyer;
    var translate_alist_nboyer;
    var apply_subst_nboyer;
    var apply_subst_lst_nboyer;
    var tautologyp_nboyer;
    var if_constructor_nboyer;
    var rewrite_count_nboyer;
    var rewrite_nboyer;
    var rewrite_args_nboyer;
    var unify_subst_nboyer;
    var one_way_unify1_nboyer;
    var false_term_nboyer;
    var true_term_nboyer;
    var trans_of_implies1_nboyer;
    var is_term_equal_nboyer;
    var is_term_member_nboyer;
    var const_nboyer;
    var sc_const_3_nboyer;
    var sc_const_4_nboyer;
    {
        sc_const_4_nboyer = new sc_Pair('ẜimplies', new sc_Pair(new sc_Pair('ẜand', new sc_Pair(new sc_Pair('ẜimplies', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), new sc_Pair(new sc_Pair('ẜand', new sc_Pair(new sc_Pair('ẜimplies', new sc_Pair('ẜy', new sc_Pair('ẜz', null))), new sc_Pair(new sc_Pair('ẜand', new sc_Pair(new sc_Pair('ẜimplies', new sc_Pair('ẜz', new sc_Pair('ẜu', null))), new sc_Pair(new sc_Pair('ẜimplies', new sc_Pair('ẜu', new sc_Pair('ẜw', null))), null))), null))), null))), new sc_Pair(new sc_Pair('ẜimplies', new sc_Pair('ẜx', new sc_Pair('ẜw', null))), null)));
        sc_const_3_nboyer = sc_list(new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜcompile', new sc_Pair('ẜform', null)), new sc_Pair(new sc_Pair('ẜreverse', new sc_Pair(new sc_Pair('ẜcodegen', new sc_Pair(new sc_Pair('ẜoptimize', new sc_Pair('ẜform', null)), new sc_Pair(new sc_Pair('ẜnil', null), null))), null)), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜeqp', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), new sc_Pair(new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜfix', new sc_Pair('ẜx', null)), new sc_Pair(new sc_Pair('ẜfix', new sc_Pair('ẜy', null)), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜgreaterp', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), new sc_Pair(new sc_Pair('ẜlessp', new sc_Pair('ẜy', new sc_Pair('ẜx', null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜlesseqp', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), new sc_Pair(new sc_Pair('ẜnot', new sc_Pair(new sc_Pair('ẜlessp', new sc_Pair('ẜy', new sc_Pair('ẜx', null))), null)), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜgreatereqp', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), new sc_Pair(new sc_Pair('ẜnot', new sc_Pair(new sc_Pair('ẜlessp', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), null)), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜboolean', new sc_Pair('ẜx', null)), new sc_Pair(new sc_Pair('ẜor', new sc_Pair(new sc_Pair('ẜequal', new sc_Pair('ẜx', new sc_Pair(new sc_Pair('ẜt', null), null))), new sc_Pair(new sc_Pair('ẜequal', new sc_Pair('ẜx', new sc_Pair(new sc_Pair('ẜf', null), null))), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜiff', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), new sc_Pair(new sc_Pair('ẜand', new sc_Pair(new sc_Pair('ẜimplies', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), new sc_Pair(new sc_Pair('ẜimplies', new sc_Pair('ẜy', new sc_Pair('ẜx', null))), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜeven1', new sc_Pair('ẜx', null)), new sc_Pair(new sc_Pair('ẜif', new sc_Pair(new sc_Pair('ẜzerop', new sc_Pair('ẜx', null)), new sc_Pair(new sc_Pair('ẜt', null), new sc_Pair(new sc_Pair('ẜodd', new sc_Pair(new sc_Pair('ẜsub1', new sc_Pair('ẜx', null)), null)), null)))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜcountps-', new sc_Pair('ẜl', new sc_Pair('ẜpred', null))), new sc_Pair(new sc_Pair('ẜcountps-loop', new sc_Pair('ẜl', new sc_Pair('ẜpred', new sc_Pair(new sc_Pair('ẜzero', null), null)))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜfact-', new sc_Pair('ẜi', null)), new sc_Pair(new sc_Pair('ẜfact-loop', new sc_Pair('ẜi', new sc_Pair(1, null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜreverse-', new sc_Pair('ẜx', null)), new sc_Pair(new sc_Pair('ẜreverse-loop', new sc_Pair('ẜx', new sc_Pair(new sc_Pair('ẜnil', null), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜdivides', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), new sc_Pair(new sc_Pair('ẜzerop', new sc_Pair(new sc_Pair('ẜremainder', new sc_Pair('ẜy', new sc_Pair('ẜx', null))), null)), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜassume-true', new sc_Pair('ẜvar', new sc_Pair('ẜalist', null))), new sc_Pair(new sc_Pair('ẜcons', new sc_Pair(new sc_Pair('ẜcons', new sc_Pair('ẜvar', new sc_Pair(new sc_Pair('ẜt', null), null))), new sc_Pair('ẜalist', null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜassume-false', new sc_Pair('ẜvar', new sc_Pair('ẜalist', null))), new sc_Pair(new sc_Pair('ẜcons', new sc_Pair(new sc_Pair('ẜcons', new sc_Pair('ẜvar', new sc_Pair(new sc_Pair('ẜf', null), null))), new sc_Pair('ẜalist', null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜtautology-checker', new sc_Pair('ẜx', null)), new sc_Pair(new sc_Pair('ẜtautologyp', new sc_Pair(new sc_Pair('ẜnormalize', new sc_Pair('ẜx', null)), new sc_Pair(new sc_Pair('ẜnil', null), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜfalsify', new sc_Pair('ẜx', null)), new sc_Pair(new sc_Pair('ẜfalsify1', new sc_Pair(new sc_Pair('ẜnormalize', new sc_Pair('ẜx', null)), new sc_Pair(new sc_Pair('ẜnil', null), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜprime', new sc_Pair('ẜx', null)), new sc_Pair(new sc_Pair('ẜand', new sc_Pair(new sc_Pair('ẜnot', new sc_Pair(new sc_Pair('ẜzerop', new sc_Pair('ẜx', null)), null)), new sc_Pair(new sc_Pair('ẜnot', new sc_Pair(new sc_Pair('ẜequal', new sc_Pair('ẜx', new sc_Pair(new sc_Pair('ẜadd1', new sc_Pair(new sc_Pair('ẜzero', null), null)), null))), null)), new sc_Pair(new sc_Pair('ẜprime1', new sc_Pair('ẜx', new sc_Pair(new sc_Pair('ẜsub1', new sc_Pair('ẜx', null)), null))), null)))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜand', new sc_Pair('ẜp', new sc_Pair('ẜq', null))), new sc_Pair(new sc_Pair('ẜif', new sc_Pair('ẜp', new sc_Pair(new sc_Pair('ẜif', new sc_Pair('ẜq', new sc_Pair(new sc_Pair('ẜt', null), new sc_Pair(new sc_Pair('ẜf', null), null)))), new sc_Pair(new sc_Pair('ẜf', null), null)))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜor', new sc_Pair('ẜp', new sc_Pair('ẜq', null))), new sc_Pair(new sc_Pair('ẜif', new sc_Pair('ẜp', new sc_Pair(new sc_Pair('ẜt', null), new sc_Pair(new sc_Pair('ẜif', new sc_Pair('ẜq', new sc_Pair(new sc_Pair('ẜt', null), new sc_Pair(new sc_Pair('ẜf', null), null)))), null)))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜnot', new sc_Pair('ẜp', null)), new sc_Pair(new sc_Pair('ẜif', new sc_Pair('ẜp', new sc_Pair(new sc_Pair('ẜf', null), new sc_Pair(new sc_Pair('ẜt', null), null)))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜimplies', new sc_Pair('ẜp', new sc_Pair('ẜq', null))), new sc_Pair(new sc_Pair('ẜif', new sc_Pair('ẜp', new sc_Pair(new sc_Pair('ẜif', new sc_Pair('ẜq', new sc_Pair(new sc_Pair('ẜt', null), new sc_Pair(new sc_Pair('ẜf', null), null)))), new sc_Pair(new sc_Pair('ẜt', null), null)))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜfix', new sc_Pair('ẜx', null)), new sc_Pair(new sc_Pair('ẜif', new sc_Pair(new sc_Pair('ẜnumberp', new sc_Pair('ẜx', null)), new sc_Pair('ẜx', new sc_Pair(new sc_Pair('ẜzero', null), null)))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜif', new sc_Pair(new sc_Pair('ẜif', new sc_Pair('ẜa', new sc_Pair('ẜb', new sc_Pair('ẜc', null)))), new sc_Pair('ẜd', new sc_Pair('ẜe', null)))), new sc_Pair(new sc_Pair('ẜif', new sc_Pair('ẜa', new sc_Pair(new sc_Pair('ẜif', new sc_Pair('ẜb', new sc_Pair('ẜd', new sc_Pair('ẜe', null)))), new sc_Pair(new sc_Pair('ẜif', new sc_Pair('ẜc', new sc_Pair('ẜd', new sc_Pair('ẜe', null)))), null)))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜzerop', new sc_Pair('ẜx', null)), new sc_Pair(new sc_Pair('ẜor', new sc_Pair(new sc_Pair('ẜequal', new sc_Pair('ẜx', new sc_Pair(new sc_Pair('ẜzero', null), null))), new sc_Pair(new sc_Pair('ẜnot', new sc_Pair(new sc_Pair('ẜnumberp', new sc_Pair('ẜx', null)), null)), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜplus', new sc_Pair(new sc_Pair('ẜplus', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), new sc_Pair('ẜz', null))), new sc_Pair(new sc_Pair('ẜplus', new sc_Pair('ẜx', new sc_Pair(new sc_Pair('ẜplus', new sc_Pair('ẜy', new sc_Pair('ẜz', null))), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜplus', new sc_Pair('ẜa', new sc_Pair('ẜb', null))), new sc_Pair(new sc_Pair('ẜzero', null), null))), new sc_Pair(new sc_Pair('ẜand', new sc_Pair(new sc_Pair('ẜzerop', new sc_Pair('ẜa', null)), new sc_Pair(new sc_Pair('ẜzerop', new sc_Pair('ẜb', null)), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜdifference', new sc_Pair('ẜx', new sc_Pair('ẜx', null))), new sc_Pair(new sc_Pair('ẜzero', null), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜplus', new sc_Pair('ẜa', new sc_Pair('ẜb', null))), new sc_Pair(new sc_Pair('ẜplus', new sc_Pair('ẜa', new sc_Pair('ẜc', null))), null))), new sc_Pair(new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜfix', new sc_Pair('ẜb', null)), new sc_Pair(new sc_Pair('ẜfix', new sc_Pair('ẜc', null)), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜzero', null), new sc_Pair(new sc_Pair('ẜdifference', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), null))), new sc_Pair(new sc_Pair('ẜnot', new sc_Pair(new sc_Pair('ẜlessp', new sc_Pair('ẜy', new sc_Pair('ẜx', null))), null)), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜequal', new sc_Pair('ẜx', new sc_Pair(new sc_Pair('ẜdifference', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), null))), new sc_Pair(new sc_Pair('ẜand', new sc_Pair(new sc_Pair('ẜnumberp', new sc_Pair('ẜx', null)), new sc_Pair(new sc_Pair('ẜor', new sc_Pair(new sc_Pair('ẜequal', new sc_Pair('ẜx', new sc_Pair(new sc_Pair('ẜzero', null), null))), new sc_Pair(new sc_Pair('ẜzerop', new sc_Pair('ẜy', null)), null))), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜmeaning', new sc_Pair(new sc_Pair('ẜplus-tree', new sc_Pair(new sc_Pair('ẜappend', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), null)), new sc_Pair('ẜa', null))), new sc_Pair(new sc_Pair('ẜplus', new sc_Pair(new sc_Pair('ẜmeaning', new sc_Pair(new sc_Pair('ẜplus-tree', new sc_Pair('ẜx', null)), new sc_Pair('ẜa', null))), new sc_Pair(new sc_Pair('ẜmeaning', new sc_Pair(new sc_Pair('ẜplus-tree', new sc_Pair('ẜy', null)), new sc_Pair('ẜa', null))), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜmeaning', new sc_Pair(new sc_Pair('ẜplus-tree', new sc_Pair(new sc_Pair('ẜplus-fringe', new sc_Pair('ẜx', null)), null)), new sc_Pair('ẜa', null))), new sc_Pair(new sc_Pair('ẜfix', new sc_Pair(new sc_Pair('ẜmeaning', new sc_Pair('ẜx', new sc_Pair('ẜa', null))), null)), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜappend', new sc_Pair(new sc_Pair('ẜappend', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), new sc_Pair('ẜz', null))), new sc_Pair(new sc_Pair('ẜappend', new sc_Pair('ẜx', new sc_Pair(new sc_Pair('ẜappend', new sc_Pair('ẜy', new sc_Pair('ẜz', null))), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜreverse', new sc_Pair(new sc_Pair('ẜappend', new sc_Pair('ẜa', new sc_Pair('ẜb', null))), null)), new sc_Pair(new sc_Pair('ẜappend', new sc_Pair(new sc_Pair('ẜreverse', new sc_Pair('ẜb', null)), new sc_Pair(new sc_Pair('ẜreverse', new sc_Pair('ẜa', null)), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜtimes', new sc_Pair('ẜx', new sc_Pair(new sc_Pair('ẜplus', new sc_Pair('ẜy', new sc_Pair('ẜz', null))), null))), new sc_Pair(new sc_Pair('ẜplus', new sc_Pair(new sc_Pair('ẜtimes', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), new sc_Pair(new sc_Pair('ẜtimes', new sc_Pair('ẜx', new sc_Pair('ẜz', null))), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜtimes', new sc_Pair(new sc_Pair('ẜtimes', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), new sc_Pair('ẜz', null))), new sc_Pair(new sc_Pair('ẜtimes', new sc_Pair('ẜx', new sc_Pair(new sc_Pair('ẜtimes', new sc_Pair('ẜy', new sc_Pair('ẜz', null))), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜtimes', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), new sc_Pair(new sc_Pair('ẜzero', null), null))), new sc_Pair(new sc_Pair('ẜor', new sc_Pair(new sc_Pair('ẜzerop', new sc_Pair('ẜx', null)), new sc_Pair(new sc_Pair('ẜzerop', new sc_Pair('ẜy', null)), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜexec', new sc_Pair(new sc_Pair('ẜappend', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), new sc_Pair('ẜpds', new sc_Pair('ẜenvrn', null)))), new sc_Pair(new sc_Pair('ẜexec', new sc_Pair('ẜy', new sc_Pair(new sc_Pair('ẜexec', new sc_Pair('ẜx', new sc_Pair('ẜpds', new sc_Pair('ẜenvrn', null)))), new sc_Pair('ẜenvrn', null)))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜmc-flatten', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), new sc_Pair(new sc_Pair('ẜappend', new sc_Pair(new sc_Pair('ẜflatten', new sc_Pair('ẜx', null)), new sc_Pair('ẜy', null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜmember', new sc_Pair('ẜx', new sc_Pair(new sc_Pair('ẜappend', new sc_Pair('ẜa', new sc_Pair('ẜb', null))), null))), new sc_Pair(new sc_Pair('ẜor', new sc_Pair(new sc_Pair('ẜmember', new sc_Pair('ẜx', new sc_Pair('ẜa', null))), new sc_Pair(new sc_Pair('ẜmember', new sc_Pair('ẜx', new sc_Pair('ẜb', null))), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜmember', new sc_Pair('ẜx', new sc_Pair(new sc_Pair('ẜreverse', new sc_Pair('ẜy', null)), null))), new sc_Pair(new sc_Pair('ẜmember', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜlength', new sc_Pair(new sc_Pair('ẜreverse', new sc_Pair('ẜx', null)), null)), new sc_Pair(new sc_Pair('ẜlength', new sc_Pair('ẜx', null)), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜmember', new sc_Pair('ẜa', new sc_Pair(new sc_Pair('ẜintersect', new sc_Pair('ẜb', new sc_Pair('ẜc', null))), null))), new sc_Pair(new sc_Pair('ẜand', new sc_Pair(new sc_Pair('ẜmember', new sc_Pair('ẜa', new sc_Pair('ẜb', null))), new sc_Pair(new sc_Pair('ẜmember', new sc_Pair('ẜa', new sc_Pair('ẜc', null))), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜnth', new sc_Pair(new sc_Pair('ẜzero', null), new sc_Pair('ẜi', null))), new sc_Pair(new sc_Pair('ẜzero', null), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜexp', new sc_Pair('ẜi', new sc_Pair(new sc_Pair('ẜplus', new sc_Pair('ẜj', new sc_Pair('ẜk', null))), null))), new sc_Pair(new sc_Pair('ẜtimes', new sc_Pair(new sc_Pair('ẜexp', new sc_Pair('ẜi', new sc_Pair('ẜj', null))), new sc_Pair(new sc_Pair('ẜexp', new sc_Pair('ẜi', new sc_Pair('ẜk', null))), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜexp', new sc_Pair('ẜi', new sc_Pair(new sc_Pair('ẜtimes', new sc_Pair('ẜj', new sc_Pair('ẜk', null))), null))), new sc_Pair(new sc_Pair('ẜexp', new sc_Pair(new sc_Pair('ẜexp', new sc_Pair('ẜi', new sc_Pair('ẜj', null))), new sc_Pair('ẜk', null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜreverse-loop', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), new sc_Pair(new sc_Pair('ẜappend', new sc_Pair(new sc_Pair('ẜreverse', new sc_Pair('ẜx', null)), new sc_Pair('ẜy', null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜreverse-loop', new sc_Pair('ẜx', new sc_Pair(new sc_Pair('ẜnil', null), null))), new sc_Pair(new sc_Pair('ẜreverse', new sc_Pair('ẜx', null)), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜcount-list', new sc_Pair('ẜz', new sc_Pair(new sc_Pair('ẜsort-lp', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), null))), new sc_Pair(new sc_Pair('ẜplus', new sc_Pair(new sc_Pair('ẜcount-list', new sc_Pair('ẜz', new sc_Pair('ẜx', null))), new sc_Pair(new sc_Pair('ẜcount-list', new sc_Pair('ẜz', new sc_Pair('ẜy', null))), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜappend', new sc_Pair('ẜa', new sc_Pair('ẜb', null))), new sc_Pair(new sc_Pair('ẜappend', new sc_Pair('ẜa', new sc_Pair('ẜc', null))), null))), new sc_Pair(new sc_Pair('ẜequal', new sc_Pair('ẜb', new sc_Pair('ẜc', null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜplus', new sc_Pair(new sc_Pair('ẜremainder', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), new sc_Pair(new sc_Pair('ẜtimes', new sc_Pair('ẜy', new sc_Pair(new sc_Pair('ẜquotient', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), null))), null))), new sc_Pair(new sc_Pair('ẜfix', new sc_Pair('ẜx', null)), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜpower-eval', new sc_Pair(new sc_Pair('ẜbig-plus1', new sc_Pair('ẜl', new sc_Pair('ẜi', new sc_Pair('ẜbase', null)))), new sc_Pair('ẜbase', null))), new sc_Pair(new sc_Pair('ẜplus', new sc_Pair(new sc_Pair('ẜpower-eval', new sc_Pair('ẜl', new sc_Pair('ẜbase', null))), new sc_Pair('ẜi', null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜpower-eval', new sc_Pair(new sc_Pair('ẜbig-plus', new sc_Pair('ẜx', new sc_Pair('ẜy', new sc_Pair('ẜi', new sc_Pair('ẜbase', null))))), new sc_Pair('ẜbase', null))), new sc_Pair(new sc_Pair('ẜplus', new sc_Pair('ẜi', new sc_Pair(new sc_Pair('ẜplus', new sc_Pair(new sc_Pair('ẜpower-eval', new sc_Pair('ẜx', new sc_Pair('ẜbase', null))), new sc_Pair(new sc_Pair('ẜpower-eval', new sc_Pair('ẜy', new sc_Pair('ẜbase', null))), null))), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜremainder', new sc_Pair('ẜy', new sc_Pair(1, null))), new sc_Pair(new sc_Pair('ẜzero', null), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜlessp', new sc_Pair(new sc_Pair('ẜremainder', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), new sc_Pair('ẜy', null))), new sc_Pair(new sc_Pair('ẜnot', new sc_Pair(new sc_Pair('ẜzerop', new sc_Pair('ẜy', null)), null)), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜremainder', new sc_Pair('ẜx', new sc_Pair('ẜx', null))), new sc_Pair(new sc_Pair('ẜzero', null), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜlessp', new sc_Pair(new sc_Pair('ẜquotient', new sc_Pair('ẜi', new sc_Pair('ẜj', null))), new sc_Pair('ẜi', null))), new sc_Pair(new sc_Pair('ẜand', new sc_Pair(new sc_Pair('ẜnot', new sc_Pair(new sc_Pair('ẜzerop', new sc_Pair('ẜi', null)), null)), new sc_Pair(new sc_Pair('ẜor', new sc_Pair(new sc_Pair('ẜzerop', new sc_Pair('ẜj', null)), new sc_Pair(new sc_Pair('ẜnot', new sc_Pair(new sc_Pair('ẜequal', new sc_Pair('ẜj', new sc_Pair(1, null))), null)), null))), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜlessp', new sc_Pair(new sc_Pair('ẜremainder', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), new sc_Pair('ẜx', null))), new sc_Pair(new sc_Pair('ẜand', new sc_Pair(new sc_Pair('ẜnot', new sc_Pair(new sc_Pair('ẜzerop', new sc_Pair('ẜy', null)), null)), new sc_Pair(new sc_Pair('ẜnot', new sc_Pair(new sc_Pair('ẜzerop', new sc_Pair('ẜx', null)), null)), new sc_Pair(new sc_Pair('ẜnot', new sc_Pair(new sc_Pair('ẜlessp', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), null)), null)))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜpower-eval', new sc_Pair(new sc_Pair('ẜpower-rep', new sc_Pair('ẜi', new sc_Pair('ẜbase', null))), new sc_Pair('ẜbase', null))), new sc_Pair(new sc_Pair('ẜfix', new sc_Pair('ẜi', null)), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜpower-eval', new sc_Pair(new sc_Pair('ẜbig-plus', new sc_Pair(new sc_Pair('ẜpower-rep', new sc_Pair('ẜi', new sc_Pair('ẜbase', null))), new sc_Pair(new sc_Pair('ẜpower-rep', new sc_Pair('ẜj', new sc_Pair('ẜbase', null))), new sc_Pair(new sc_Pair('ẜzero', null), new sc_Pair('ẜbase', null))))), new sc_Pair('ẜbase', null))), new sc_Pair(new sc_Pair('ẜplus', new sc_Pair('ẜi', new sc_Pair('ẜj', null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜgcd', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), new sc_Pair(new sc_Pair('ẜgcd', new sc_Pair('ẜy', new sc_Pair('ẜx', null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜnth', new sc_Pair(new sc_Pair('ẜappend', new sc_Pair('ẜa', new sc_Pair('ẜb', null))), new sc_Pair('ẜi', null))), new sc_Pair(new sc_Pair('ẜappend', new sc_Pair(new sc_Pair('ẜnth', new sc_Pair('ẜa', new sc_Pair('ẜi', null))), new sc_Pair(new sc_Pair('ẜnth', new sc_Pair('ẜb', new sc_Pair(new sc_Pair('ẜdifference', new sc_Pair('ẜi', new sc_Pair(new sc_Pair('ẜlength', new sc_Pair('ẜa', null)), null))), null))), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜdifference', new sc_Pair(new sc_Pair('ẜplus', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), new sc_Pair('ẜx', null))), new sc_Pair(new sc_Pair('ẜfix', new sc_Pair('ẜy', null)), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜdifference', new sc_Pair(new sc_Pair('ẜplus', new sc_Pair('ẜy', new sc_Pair('ẜx', null))), new sc_Pair('ẜx', null))), new sc_Pair(new sc_Pair('ẜfix', new sc_Pair('ẜy', null)), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜdifference', new sc_Pair(new sc_Pair('ẜplus', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), new sc_Pair(new sc_Pair('ẜplus', new sc_Pair('ẜx', new sc_Pair('ẜz', null))), null))), new sc_Pair(new sc_Pair('ẜdifference', new sc_Pair('ẜy', new sc_Pair('ẜz', null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜtimes', new sc_Pair('ẜx', new sc_Pair(new sc_Pair('ẜdifference', new sc_Pair('ẜc', new sc_Pair('ẜw', null))), null))), new sc_Pair(new sc_Pair('ẜdifference', new sc_Pair(new sc_Pair('ẜtimes', new sc_Pair('ẜc', new sc_Pair('ẜx', null))), new sc_Pair(new sc_Pair('ẜtimes', new sc_Pair('ẜw', new sc_Pair('ẜx', null))), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜremainder', new sc_Pair(new sc_Pair('ẜtimes', new sc_Pair('ẜx', new sc_Pair('ẜz', null))), new sc_Pair('ẜz', null))), new sc_Pair(new sc_Pair('ẜzero', null), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜdifference', new sc_Pair(new sc_Pair('ẜplus', new sc_Pair('ẜb', new sc_Pair(new sc_Pair('ẜplus', new sc_Pair('ẜa', new sc_Pair('ẜc', null))), null))), new sc_Pair('ẜa', null))), new sc_Pair(new sc_Pair('ẜplus', new sc_Pair('ẜb', new sc_Pair('ẜc', null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜdifference', new sc_Pair(new sc_Pair('ẜadd1', new sc_Pair(new sc_Pair('ẜplus', new sc_Pair('ẜy', new sc_Pair('ẜz', null))), null)), new sc_Pair('ẜz', null))), new sc_Pair(new sc_Pair('ẜadd1', new sc_Pair('ẜy', null)), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜlessp', new sc_Pair(new sc_Pair('ẜplus', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), new sc_Pair(new sc_Pair('ẜplus', new sc_Pair('ẜx', new sc_Pair('ẜz', null))), null))), new sc_Pair(new sc_Pair('ẜlessp', new sc_Pair('ẜy', new sc_Pair('ẜz', null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜlessp', new sc_Pair(new sc_Pair('ẜtimes', new sc_Pair('ẜx', new sc_Pair('ẜz', null))), new sc_Pair(new sc_Pair('ẜtimes', new sc_Pair('ẜy', new sc_Pair('ẜz', null))), null))), new sc_Pair(new sc_Pair('ẜand', new sc_Pair(new sc_Pair('ẜnot', new sc_Pair(new sc_Pair('ẜzerop', new sc_Pair('ẜz', null)), null)), new sc_Pair(new sc_Pair('ẜlessp', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜlessp', new sc_Pair('ẜy', new sc_Pair(new sc_Pair('ẜplus', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), null))), new sc_Pair(new sc_Pair('ẜnot', new sc_Pair(new sc_Pair('ẜzerop', new sc_Pair('ẜx', null)), null)), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜgcd', new sc_Pair(new sc_Pair('ẜtimes', new sc_Pair('ẜx', new sc_Pair('ẜz', null))), new sc_Pair(new sc_Pair('ẜtimes', new sc_Pair('ẜy', new sc_Pair('ẜz', null))), null))), new sc_Pair(new sc_Pair('ẜtimes', new sc_Pair('ẜz', new sc_Pair(new sc_Pair('ẜgcd', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜvalue', new sc_Pair(new sc_Pair('ẜnormalize', new sc_Pair('ẜx', null)), new sc_Pair('ẜa', null))), new sc_Pair(new sc_Pair('ẜvalue', new sc_Pair('ẜx', new sc_Pair('ẜa', null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜflatten', new sc_Pair('ẜx', null)), new sc_Pair(new sc_Pair('ẜcons', new sc_Pair('ẜy', new sc_Pair(new sc_Pair('ẜnil', null), null))), null))), new sc_Pair(new sc_Pair('ẜand', new sc_Pair(new sc_Pair('ẜnlistp', new sc_Pair('ẜx', null)), new sc_Pair(new sc_Pair('ẜequal', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜlistp', new sc_Pair(new sc_Pair('ẜgopher', new sc_Pair('ẜx', null)), null)), new sc_Pair(new sc_Pair('ẜlistp', new sc_Pair('ẜx', null)), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜsamefringe', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), new sc_Pair(new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜflatten', new sc_Pair('ẜx', null)), new sc_Pair(new sc_Pair('ẜflatten', new sc_Pair('ẜy', null)), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜgreatest-factor', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), new sc_Pair(new sc_Pair('ẜzero', null), null))), new sc_Pair(new sc_Pair('ẜand', new sc_Pair(new sc_Pair('ẜor', new sc_Pair(new sc_Pair('ẜzerop', new sc_Pair('ẜy', null)), new sc_Pair(new sc_Pair('ẜequal', new sc_Pair('ẜy', new sc_Pair(1, null))), null))), new sc_Pair(new sc_Pair('ẜequal', new sc_Pair('ẜx', new sc_Pair(new sc_Pair('ẜzero', null), null))), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜgreatest-factor', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), new sc_Pair(1, null))), new sc_Pair(new sc_Pair('ẜequal', new sc_Pair('ẜx', new sc_Pair(1, null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜnumberp', new sc_Pair(new sc_Pair('ẜgreatest-factor', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), null)), new sc_Pair(new sc_Pair('ẜnot', new sc_Pair(new sc_Pair('ẜand', new sc_Pair(new sc_Pair('ẜor', new sc_Pair(new sc_Pair('ẜzerop', new sc_Pair('ẜy', null)), new sc_Pair(new sc_Pair('ẜequal', new sc_Pair('ẜy', new sc_Pair(1, null))), null))), new sc_Pair(new sc_Pair('ẜnot', new sc_Pair(new sc_Pair('ẜnumberp', new sc_Pair('ẜx', null)), null)), null))), null)), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜtimes-list', new sc_Pair(new sc_Pair('ẜappend', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), null)), new sc_Pair(new sc_Pair('ẜtimes', new sc_Pair(new sc_Pair('ẜtimes-list', new sc_Pair('ẜx', null)), new sc_Pair(new sc_Pair('ẜtimes-list', new sc_Pair('ẜy', null)), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜprime-list', new sc_Pair(new sc_Pair('ẜappend', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), null)), new sc_Pair(new sc_Pair('ẜand', new sc_Pair(new sc_Pair('ẜprime-list', new sc_Pair('ẜx', null)), new sc_Pair(new sc_Pair('ẜprime-list', new sc_Pair('ẜy', null)), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜequal', new sc_Pair('ẜz', new sc_Pair(new sc_Pair('ẜtimes', new sc_Pair('ẜw', new sc_Pair('ẜz', null))), null))), new sc_Pair(new sc_Pair('ẜand', new sc_Pair(new sc_Pair('ẜnumberp', new sc_Pair('ẜz', null)), new sc_Pair(new sc_Pair('ẜor', new sc_Pair(new sc_Pair('ẜequal', new sc_Pair('ẜz', new sc_Pair(new sc_Pair('ẜzero', null), null))), new sc_Pair(new sc_Pair('ẜequal', new sc_Pair('ẜw', new sc_Pair(1, null))), null))), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜgreatereqp', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), new sc_Pair(new sc_Pair('ẜnot', new sc_Pair(new sc_Pair('ẜlessp', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), null)), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜequal', new sc_Pair('ẜx', new sc_Pair(new sc_Pair('ẜtimes', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), null))), new sc_Pair(new sc_Pair('ẜor', new sc_Pair(new sc_Pair('ẜequal', new sc_Pair('ẜx', new sc_Pair(new sc_Pair('ẜzero', null), null))), new sc_Pair(new sc_Pair('ẜand', new sc_Pair(new sc_Pair('ẜnumberp', new sc_Pair('ẜx', null)), new sc_Pair(new sc_Pair('ẜequal', new sc_Pair('ẜy', new sc_Pair(1, null))), null))), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜremainder', new sc_Pair(new sc_Pair('ẜtimes', new sc_Pair('ẜy', new sc_Pair('ẜx', null))), new sc_Pair('ẜy', null))), new sc_Pair(new sc_Pair('ẜzero', null), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜtimes', new sc_Pair('ẜa', new sc_Pair('ẜb', null))), new sc_Pair(1, null))), new sc_Pair(sc_list('ẜand', new sc_Pair('ẜnot', new sc_Pair(new sc_Pair('ẜequal', new sc_Pair('ẜa', new sc_Pair(new sc_Pair('ẜzero', null), null))), null)), new sc_Pair('ẜnot', new sc_Pair(new sc_Pair('ẜequal', new sc_Pair('ẜb', new sc_Pair(new sc_Pair('ẜzero', null), null))), null)), new sc_Pair('ẜnumberp', new sc_Pair('ẜa', null)), new sc_Pair('ẜnumberp', new sc_Pair('ẜb', null)), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜsub1', new sc_Pair('ẜa', null)), new sc_Pair(new sc_Pair('ẜzero', null), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜsub1', new sc_Pair('ẜb', null)), new sc_Pair(new sc_Pair('ẜzero', null), null)))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜlessp', new sc_Pair(new sc_Pair('ẜlength', new sc_Pair(new sc_Pair('ẜdelete', new sc_Pair('ẜx', new sc_Pair('ẜl', null))), null)), new sc_Pair(new sc_Pair('ẜlength', new sc_Pair('ẜl', null)), null))), new sc_Pair(new sc_Pair('ẜmember', new sc_Pair('ẜx', new sc_Pair('ẜl', null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜsort2', new sc_Pair(new sc_Pair('ẜdelete', new sc_Pair('ẜx', new sc_Pair('ẜl', null))), null)), new sc_Pair(new sc_Pair('ẜdelete', new sc_Pair('ẜx', new sc_Pair(new sc_Pair('ẜsort2', new sc_Pair('ẜl', null)), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜdsort', new sc_Pair('ẜx', null)), new sc_Pair(new sc_Pair('ẜsort2', new sc_Pair('ẜx', null)), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜlength', new sc_Pair(new sc_Pair('ẜcons', new sc_Pair('ẜx1', new sc_Pair(new sc_Pair('ẜcons', new sc_Pair('ẜx2', new sc_Pair(new sc_Pair('ẜcons', new sc_Pair('ẜx3', new sc_Pair(new sc_Pair('ẜcons', new sc_Pair('ẜx4', new sc_Pair(new sc_Pair('ẜcons', new sc_Pair('ẜx5', new sc_Pair(new sc_Pair('ẜcons', new sc_Pair('ẜx6', new sc_Pair('ẜx7', null))), null))), null))), null))), null))), null))), null)), new sc_Pair(new sc_Pair('ẜplus', new sc_Pair(6, new sc_Pair(new sc_Pair('ẜlength', new sc_Pair('ẜx7', null)), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜdifference', new sc_Pair(new sc_Pair('ẜadd1', new sc_Pair(new sc_Pair('ẜadd1', new sc_Pair('ẜx', null)), null)), new sc_Pair(2, null))), new sc_Pair(new sc_Pair('ẜfix', new sc_Pair('ẜx', null)), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜquotient', new sc_Pair(new sc_Pair('ẜplus', new sc_Pair('ẜx', new sc_Pair(new sc_Pair('ẜplus', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), null))), new sc_Pair(2, null))), new sc_Pair(new sc_Pair('ẜplus', new sc_Pair('ẜx', new sc_Pair(new sc_Pair('ẜquotient', new sc_Pair('ẜy', new sc_Pair(2, null))), null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜsigma', new sc_Pair(new sc_Pair('ẜzero', null), new sc_Pair('ẜi', null))), new sc_Pair(new sc_Pair('ẜquotient', new sc_Pair(new sc_Pair('ẜtimes', new sc_Pair('ẜi', new sc_Pair(new sc_Pair('ẜadd1', new sc_Pair('ẜi', null)), null))), new sc_Pair(2, null))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜplus', new sc_Pair('ẜx', new sc_Pair(new sc_Pair('ẜadd1', new sc_Pair('ẜy', null)), null))), new sc_Pair(new sc_Pair('ẜif', new sc_Pair(new sc_Pair('ẜnumberp', new sc_Pair('ẜy', null)), new sc_Pair(new sc_Pair('ẜadd1', new sc_Pair(new sc_Pair('ẜplus', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), null)), new sc_Pair(new sc_Pair('ẜadd1', new sc_Pair('ẜx', null)), null)))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜdifference', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), new sc_Pair(new sc_Pair('ẜdifference', new sc_Pair('ẜz', new sc_Pair('ẜy', null))), null))), new sc_Pair(new sc_Pair('ẜif', new sc_Pair(new sc_Pair('ẜlessp', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), new sc_Pair(new sc_Pair('ẜnot', new sc_Pair(new sc_Pair('ẜlessp', new sc_Pair('ẜy', new sc_Pair('ẜz', null))), null)), new sc_Pair(new sc_Pair('ẜif', new sc_Pair(new sc_Pair('ẜlessp', new sc_Pair('ẜz', new sc_Pair('ẜy', null))), new sc_Pair(new sc_Pair('ẜnot', new sc_Pair(new sc_Pair('ẜlessp', new sc_Pair('ẜy', new sc_Pair('ẜx', null))), null)), new sc_Pair(new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜfix', new sc_Pair('ẜx', null)), new sc_Pair(new sc_Pair('ẜfix', new sc_Pair('ẜz', null)), null))), null)))), null)))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜmeaning', new sc_Pair(new sc_Pair('ẜplus-tree', new sc_Pair(new sc_Pair('ẜdelete', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), null)), new sc_Pair('ẜa', null))), new sc_Pair(new sc_Pair('ẜif', new sc_Pair(new sc_Pair('ẜmember', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), new sc_Pair(new sc_Pair('ẜdifference', new sc_Pair(new sc_Pair('ẜmeaning', new sc_Pair(new sc_Pair('ẜplus-tree', new sc_Pair('ẜy', null)), new sc_Pair('ẜa', null))), new sc_Pair(new sc_Pair('ẜmeaning', new sc_Pair('ẜx', new sc_Pair('ẜa', null))), null))), new sc_Pair(new sc_Pair('ẜmeaning', new sc_Pair(new sc_Pair('ẜplus-tree', new sc_Pair('ẜy', null)), new sc_Pair('ẜa', null))), null)))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜtimes', new sc_Pair('ẜx', new sc_Pair(new sc_Pair('ẜadd1', new sc_Pair('ẜy', null)), null))), new sc_Pair(new sc_Pair('ẜif', new sc_Pair(new sc_Pair('ẜnumberp', new sc_Pair('ẜy', null)), new sc_Pair(new sc_Pair('ẜplus', new sc_Pair('ẜx', new sc_Pair(new sc_Pair('ẜtimes', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), null))), new sc_Pair(new sc_Pair('ẜfix', new sc_Pair('ẜx', null)), null)))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜnth', new sc_Pair(new sc_Pair('ẜnil', null), new sc_Pair('ẜi', null))), new sc_Pair(new sc_Pair('ẜif', new sc_Pair(new sc_Pair('ẜzerop', new sc_Pair('ẜi', null)), new sc_Pair(new sc_Pair('ẜnil', null), new sc_Pair(new sc_Pair('ẜzero', null), null)))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜlast', new sc_Pair(new sc_Pair('ẜappend', new sc_Pair('ẜa', new sc_Pair('ẜb', null))), null)), new sc_Pair(new sc_Pair('ẜif', new sc_Pair(new sc_Pair('ẜlistp', new sc_Pair('ẜb', null)), new sc_Pair(new sc_Pair('ẜlast', new sc_Pair('ẜb', null)), new sc_Pair(new sc_Pair('ẜif', new sc_Pair(new sc_Pair('ẜlistp', new sc_Pair('ẜa', null)), new sc_Pair(new sc_Pair('ẜcons', new sc_Pair(new sc_Pair('ẜcar', new sc_Pair(new sc_Pair('ẜlast', new sc_Pair('ẜa', null)), null)), new sc_Pair('ẜb', null))), new sc_Pair('ẜb', null)))), null)))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜlessp', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), new sc_Pair('ẜz', null))), new sc_Pair(new sc_Pair('ẜif', new sc_Pair(new sc_Pair('ẜlessp', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), new sc_Pair(new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜt', null), new sc_Pair('ẜz', null))), new sc_Pair(new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜf', null), new sc_Pair('ẜz', null))), null)))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜassignment', new sc_Pair('ẜx', new sc_Pair(new sc_Pair('ẜappend', new sc_Pair('ẜa', new sc_Pair('ẜb', null))), null))), new sc_Pair(new sc_Pair('ẜif', new sc_Pair(new sc_Pair('ẜassignedp', new sc_Pair('ẜx', new sc_Pair('ẜa', null))), new sc_Pair(new sc_Pair('ẜassignment', new sc_Pair('ẜx', new sc_Pair('ẜa', null))), new sc_Pair(new sc_Pair('ẜassignment', new sc_Pair('ẜx', new sc_Pair('ẜb', null))), null)))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜcar', new sc_Pair(new sc_Pair('ẜgopher', new sc_Pair('ẜx', null)), null)), new sc_Pair(new sc_Pair('ẜif', new sc_Pair(new sc_Pair('ẜlistp', new sc_Pair('ẜx', null)), new sc_Pair(new sc_Pair('ẜcar', new sc_Pair(new sc_Pair('ẜflatten', new sc_Pair('ẜx', null)), null)), new sc_Pair(new sc_Pair('ẜzero', null), null)))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜflatten', new sc_Pair(new sc_Pair('ẜcdr', new sc_Pair(new sc_Pair('ẜgopher', new sc_Pair('ẜx', null)), null)), null)), new sc_Pair(new sc_Pair('ẜif', new sc_Pair(new sc_Pair('ẜlistp', new sc_Pair('ẜx', null)), new sc_Pair(new sc_Pair('ẜcdr', new sc_Pair(new sc_Pair('ẜflatten', new sc_Pair('ẜx', null)), null)), new sc_Pair(new sc_Pair('ẜcons', new sc_Pair(new sc_Pair('ẜzero', null), new sc_Pair(new sc_Pair('ẜnil', null), null))), null)))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜquotient', new sc_Pair(new sc_Pair('ẜtimes', new sc_Pair('ẜy', new sc_Pair('ẜx', null))), new sc_Pair('ẜy', null))), new sc_Pair(new sc_Pair('ẜif', new sc_Pair(new sc_Pair('ẜzerop', new sc_Pair('ẜy', null)), new sc_Pair(new sc_Pair('ẜzero', null), new sc_Pair(new sc_Pair('ẜfix', new sc_Pair('ẜx', null)), null)))), null))), new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜget', new sc_Pair('ẜj', new sc_Pair(new sc_Pair('ẜset', new sc_Pair('ẜi', new sc_Pair('ẜval', new sc_Pair('ẜmem', null)))), null))), new sc_Pair(new sc_Pair('ẜif', new sc_Pair(new sc_Pair('ẜeqp', new sc_Pair('ẜj', new sc_Pair('ẜi', null))), new sc_Pair('ẜval', new sc_Pair(new sc_Pair('ẜget', new sc_Pair('ẜj', new sc_Pair('ẜmem', null))), null)))), null))));
        const_nboyer = new sc_Pair(new sc_Pair('ẜx', new sc_Pair('ẜf', new sc_Pair(new sc_Pair('ẜplus', new sc_Pair(new sc_Pair('ẜplus', new sc_Pair('ẜa', new sc_Pair('ẜb', null))), new sc_Pair(new sc_Pair('ẜplus', new sc_Pair('ẜc', new sc_Pair(new sc_Pair('ẜzero', null), null))), null))), null))), new sc_Pair(new sc_Pair('ẜy', new sc_Pair('ẜf', new sc_Pair(new sc_Pair('ẜtimes', new sc_Pair(new sc_Pair('ẜtimes', new sc_Pair('ẜa', new sc_Pair('ẜb', null))), new sc_Pair(new sc_Pair('ẜplus', new sc_Pair('ẜc', new sc_Pair('ẜd', null))), null))), null))), new sc_Pair(new sc_Pair('ẜz', new sc_Pair('ẜf', new sc_Pair(new sc_Pair('ẜreverse', new sc_Pair(new sc_Pair('ẜappend', new sc_Pair(new sc_Pair('ẜappend', new sc_Pair('ẜa', new sc_Pair('ẜb', null))), new sc_Pair(new sc_Pair('ẜnil', null), null))), null)), null))), new sc_Pair(new sc_Pair('ẜu', new sc_Pair('ẜequal', new sc_Pair(new sc_Pair('ẜplus', new sc_Pair('ẜa', new sc_Pair('ẜb', null))), new sc_Pair(new sc_Pair('ẜdifference', new sc_Pair('ẜx', new sc_Pair('ẜy', null))), null)))), new sc_Pair(new sc_Pair('ẜw', new sc_Pair('ẜlessp', new sc_Pair(new sc_Pair('ẜremainder', new sc_Pair('ẜa', new sc_Pair('ẜb', null))), new sc_Pair(new sc_Pair('ẜmember', new sc_Pair('ẜa', new sc_Pair(new sc_Pair('ẜlength', new sc_Pair('ẜb', null)), null))), null)))), null)))));
        BgL_nboyerzd2benchmarkzd2 = function () {
            var args = null;
            for (var sc_tmp = arguments.length - 1; sc_tmp >= 0; sc_tmp--) {
                args = sc_cons(arguments[sc_tmp], args);
            }
            var n;
            return n = args === null ? 0 : args.car, BgL_setupzd2boyerzd2(), BgL_runzd2benchmarkzd2('nboyer' + sc_number2string(n), 1, function () {
                return BgL_testzd2boyerzd2(n);
            }, function (rewrites) {
                if (sc_isNumber(rewrites))
                    switch (n) {
                    case 0:
                        return rewrites === 95024;
                        break;
                    case 1:
                        return rewrites === 591777;
                        break;
                    case 2:
                        return rewrites === 1813975;
                        break;
                    case 3:
                        return rewrites === 5375678;
                        break;
                    case 4:
                        return rewrites === 16445406;
                        break;
                    case 5:
                        return rewrites === 51507739;
                        break;
                    default:
                        return true;
                        break;
                    }
                else
                    return false;
            });
        };
        BgL_setupzd2boyerzd2 = function () {
            return true;
        };
        BgL_testzd2boyerzd2 = function () {
            return true;
        };
        translate_term_nboyer = function (term) {
            var lst;
            return !(term instanceof sc_Pair) ? term : new sc_Pair(BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer(term.car), (lst = term.cdr, lst === null ? null : new sc_Pair(translate_term_nboyer(lst.car), translate_args_nboyer(lst.cdr))));
        };
        translate_args_nboyer = function (lst) {
            var sc_lst_5;
            var term;
            return lst === null ? null : new sc_Pair((term = lst.car, !(term instanceof sc_Pair) ? term : new sc_Pair(BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer(term.car), translate_args_nboyer(term.cdr))), (sc_lst_5 = lst.cdr, sc_lst_5 === null ? null : new sc_Pair(translate_term_nboyer(sc_lst_5.car), translate_args_nboyer(sc_lst_5.cdr))));
        };
        untranslate_term_nboyer = function (term) {
            var optrOpnd;
            var tail1131;
            var L1127;
            var falseHead1130;
            var symbol_record;
            if (!(term instanceof sc_Pair))
                return term;
            else {
                falseHead1130 = new sc_Pair(null, null);
                L1127 = term.cdr;
                tail1131 = falseHead1130;
                while (!(L1127 === null)) {
                    {
                        tail1131.cdr = new sc_Pair(untranslate_term_nboyer(L1127.car), null);
                        tail1131 = tail1131.cdr;
                        L1127 = L1127.cdr;
                    }
                }
                optrOpnd = falseHead1130.cdr;
                return new sc_Pair((symbol_record = term.car, symbol_record[0]), optrOpnd);
            }
        };
        BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer = function (sym) {
            var r;
            var x;
            return x = sc_assq(sym, BgL_sc_za2symbolzd2recordszd2alistza2_2z00_nboyer), x !== false ? x.cdr : (r = [
                sym,
                null
            ], BgL_sc_za2symbolzd2recordszd2alistza2_2z00_nboyer = new sc_Pair(new sc_Pair(sym, r), BgL_sc_za2symbolzd2recordszd2alistza2_2z00_nboyer), r);
        };
        BgL_sc_za2symbolzd2recordszd2alistza2_2z00_nboyer = null;
        translate_alist_nboyer = function (alist) {
            var sc_alist_6;
            var term;
            return alist === null ? null : new sc_Pair(new sc_Pair(alist.car.car, (term = alist.car.cdr, !(term instanceof sc_Pair) ? term : new sc_Pair(BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer(term.car), translate_args_nboyer(term.cdr)))), (sc_alist_6 = alist.cdr, sc_alist_6 === null ? null : new sc_Pair(new sc_Pair(sc_alist_6.car.car, translate_term_nboyer(sc_alist_6.car.cdr)), translate_alist_nboyer(sc_alist_6.cdr))));
        };
        apply_subst_nboyer = function (alist, term) {
            var lst;
            var temp_temp;
            return !(term instanceof sc_Pair) ? (temp_temp = sc_assq(term, alist), temp_temp !== false ? temp_temp.cdr : term) : new sc_Pair(term.car, (lst = term.cdr, lst === null ? null : new sc_Pair(apply_subst_nboyer(alist, lst.car), apply_subst_lst_nboyer(alist, lst.cdr))));
        };
        apply_subst_lst_nboyer = function (alist, lst) {
            var sc_lst_7;
            return lst === null ? null : new sc_Pair(apply_subst_nboyer(alist, lst.car), (sc_lst_7 = lst.cdr, sc_lst_7 === null ? null : new sc_Pair(apply_subst_nboyer(alist, sc_lst_7.car), apply_subst_lst_nboyer(alist, sc_lst_7.cdr))));
        };
        tautologyp_nboyer = function (sc_x_11, true_lst, false_lst) {
            var tmp1125;
            var x;
            var tmp1126;
            var sc_x_8;
            var sc_tmp1125_9;
            var sc_tmp1126_10;
            var sc_x_11;
            var true_lst;
            var false_lst;
            while (true) {
                if ((sc_tmp1126_10 = is_term_equal_nboyer(sc_x_11, true_term_nboyer), sc_tmp1126_10 !== false ? sc_tmp1126_10 : is_term_member_nboyer(sc_x_11, true_lst)) !== false)
                    return true;
                else if ((sc_tmp1125_9 = is_term_equal_nboyer(sc_x_11, false_term_nboyer), sc_tmp1125_9 !== false ? sc_tmp1125_9 : is_term_member_nboyer(sc_x_11, false_lst)) !== false)
                    return false;
                else if (!(sc_x_11 instanceof sc_Pair))
                    return false;
                else if (sc_x_11.car === if_constructor_nboyer)
                    if ((sc_x_8 = sc_x_11.cdr.car, tmp1126 = is_term_equal_nboyer(sc_x_8, true_term_nboyer), tmp1126 !== false ? tmp1126 : is_term_member_nboyer(sc_x_8, true_lst)) !== false)
                        sc_x_11 = sc_x_11.cdr.cdr.car;
                    else if ((x = sc_x_11.cdr.car, tmp1125 = is_term_equal_nboyer(x, false_term_nboyer), tmp1125 !== false ? tmp1125 : is_term_member_nboyer(x, false_lst)) !== false)
                        sc_x_11 = sc_x_11.cdr.cdr.cdr.car;
                    else if (tautologyp_nboyer(sc_x_11.cdr.cdr.car, new sc_Pair(sc_x_11.cdr.car, true_lst), false_lst) !== false) {
                        false_lst = new sc_Pair(sc_x_11.cdr.car, false_lst);
                        sc_x_11 = sc_x_11.cdr.cdr.cdr.car;
                    } else
                        return false;
                else
                    return false;
            }
        };
        if_constructor_nboyer = 'ẜ*';
        rewrite_count_nboyer = 0;
        rewrite_nboyer = function (term) {
            var term2;
            var sc_term_12;
            var lst;
            var symbol_record;
            var sc_lst_13;
            {
                ++rewrite_count_nboyer;
                if (!(term instanceof sc_Pair))
                    return term;
                else {
                    sc_term_12 = new sc_Pair(term.car, (sc_lst_13 = term.cdr, sc_lst_13 === null ? null : new sc_Pair(rewrite_nboyer(sc_lst_13.car), rewrite_args_nboyer(sc_lst_13.cdr))));
                    lst = (symbol_record = term.car, symbol_record[1]);
                    while (true) {
                        if (lst === null)
                            return sc_term_12;
                        else if ((term2 = lst.car.cdr.car, unify_subst_nboyer = null, one_way_unify1_nboyer(sc_term_12, term2)) !== false)
                            return rewrite_nboyer(apply_subst_nboyer(unify_subst_nboyer, lst.car.cdr.cdr.car));
                        else
                            lst = lst.cdr;
                    }
                }
            }
        };
        rewrite_args_nboyer = function (lst) {
            var sc_lst_14;
            return lst === null ? null : new sc_Pair(rewrite_nboyer(lst.car), (sc_lst_14 = lst.cdr, sc_lst_14 === null ? null : new sc_Pair(rewrite_nboyer(sc_lst_14.car), rewrite_args_nboyer(sc_lst_14.cdr))));
        };
        unify_subst_nboyer = 'ẜ*';
        one_way_unify1_nboyer = function (term1, term2) {
            var lst1;
            var lst2;
            var temp_temp;
            if (!(term2 instanceof sc_Pair)) {
                temp_temp = sc_assq(term2, unify_subst_nboyer);
                if (temp_temp !== false)
                    return is_term_equal_nboyer(term1, temp_temp.cdr);
                else if (sc_isNumber(term2))
                    return sc_isEqual(term1, term2);
                else {
                    unify_subst_nboyer = new sc_Pair(new sc_Pair(term2, term1), unify_subst_nboyer);
                    return true;
                }
            } else if (!(term1 instanceof sc_Pair))
                return false;
            else if (term1.car === term2.car) {
                lst1 = term1.cdr;
                lst2 = term2.cdr;
                while (true) {
                    if (lst1 === null)
                        return lst2 === null;
                    else if (lst2 === null)
                        return false;
                    else if (one_way_unify1_nboyer(lst1.car, lst2.car) !== false) {
                        lst1 = lst1.cdr;
                        lst2 = lst2.cdr;
                    } else
                        return false;
                }
            } else
                return false;
        };
        false_term_nboyer = 'ẜ*';
        true_term_nboyer = 'ẜ*';
        trans_of_implies1_nboyer = function (n) {
            var sc_n_15;
            return sc_isEqual(n, 1) ? sc_list('ẜimplies', 0, 1) : sc_list('ẜand', sc_list('ẜimplies', n - 1, n), (sc_n_15 = n - 1, sc_isEqual(sc_n_15, 1) ? sc_list('ẜimplies', 0, 1) : sc_list('ẜand', sc_list('ẜimplies', sc_n_15 - 1, sc_n_15), trans_of_implies1_nboyer(sc_n_15 - 1))));
        };
        is_term_equal_nboyer = function (x, y) {
            var lst1;
            var lst2;
            var r2;
            var r1;
            if (x instanceof sc_Pair)
                if (y instanceof sc_Pair)
                    if ((r1 = x.car, r2 = y.car, r1 === r2) !== false) {
                        lst1 = x.cdr;
                        lst2 = y.cdr;
                        while (true) {
                            if (lst1 === null)
                                return lst2 === null;
                            else if (lst2 === null)
                                return false;
                            else if (is_term_equal_nboyer(lst1.car, lst2.car) !== false) {
                                lst1 = lst1.cdr;
                                lst2 = lst2.cdr;
                            } else
                                return false;
                        }
                    } else
                        return false;
                else
                    return false;
            else
                return sc_isEqual(x, y);
        };
        is_term_member_nboyer = function (x, lst) {
            var x;
            var lst;
            while (true) {
                if (lst === null)
                    return false;
                else if (is_term_equal_nboyer(x, lst.car) !== false)
                    return true;
                else
                    lst = lst.cdr;
            }
        };
        BgL_setupzd2boyerzd2 = function () {
            var symbol_record;
            var value;
            var BgL_sc_symbolzd2record_16zd2;
            var sym;
            var sc_sym_17;
            var term;
            var lst;
            var sc_term_18;
            var sc_term_19;
            {
                BgL_sc_za2symbolzd2recordszd2alistza2_2z00_nboyer = null;
                if_constructor_nboyer = BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer('ẜif');
                false_term_nboyer = (sc_term_19 = new sc_Pair('ẜf', null), !(sc_term_19 instanceof sc_Pair) ? sc_term_19 : new sc_Pair(BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer(sc_term_19.car), translate_args_nboyer(sc_term_19.cdr)));
                true_term_nboyer = (sc_term_18 = new sc_Pair('ẜt', null), !(sc_term_18 instanceof sc_Pair) ? sc_term_18 : new sc_Pair(BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer(sc_term_18.car), translate_args_nboyer(sc_term_18.cdr)));
                lst = sc_const_3_nboyer;
                while (!(lst === null)) {
                    {
                        term = lst.car;
                        if (term instanceof sc_Pair && (term.car === 'ẜequal' && term.cdr.car instanceof sc_Pair)) {
                            sc_sym_17 = term.cdr.car.car;
                            value = new sc_Pair(!(term instanceof sc_Pair) ? term : new sc_Pair(BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer(term.car), translate_args_nboyer(term.cdr)), (sym = term.cdr.car.car, BgL_sc_symbolzd2record_16zd2 = BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer(sym), BgL_sc_symbolzd2record_16zd2[1]));
                            symbol_record = BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer(sc_sym_17);
                            symbol_record[1] = value;
                        } else
                            sc_error('ADD-LEMMA did not like term:  ', term);
                        lst = lst.cdr;
                    }
                }
                return true;
            }
        };
        BgL_testzd2boyerzd2 = function (n) {
            var optrOpnd;
            var term;
            var sc_n_20;
            var answer;
            var sc_term_21;
            var sc_term_22;
            {
                rewrite_count_nboyer = 0;
                term = sc_const_4_nboyer;
                sc_n_20 = n;
                while (!(sc_n_20 === 0)) {
                    {
                        term = sc_list('ẜor', term, new sc_Pair('ẜf', null));
                        --sc_n_20;
                    }
                }
                sc_term_22 = term;
                if (!(sc_term_22 instanceof sc_Pair))
                    optrOpnd = sc_term_22;
                else
                    optrOpnd = new sc_Pair(BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer(sc_term_22.car), translate_args_nboyer(sc_term_22.cdr));
                sc_term_21 = apply_subst_nboyer(const_nboyer === null ? null : new sc_Pair(new sc_Pair(const_nboyer.car.car, translate_term_nboyer(const_nboyer.car.cdr)), translate_alist_nboyer(const_nboyer.cdr)), optrOpnd);
                answer = tautologyp_nboyer(rewrite_nboyer(sc_term_21), null, null);
                sc_write(rewrite_count_nboyer);
                sc_display(' rewrites');
                sc_newline();
                if (answer !== false)
                    return rewrite_count_nboyer;
                else
                    return false;
            }
        };
    }
    var BgL_parsezd2ze3nbzd2treesze3;
    var BgL_earleyzd2benchmarkzd2;
    var BgL_parsezd2ze3parsedzf3zc2;
    var test;
    var BgL_parsezd2ze3treesz31;
    var BgL_makezd2parserzd2;
    var const_earley;
    {
        const_earley = new sc_Pair(new sc_Pair('ẜs', new sc_Pair(new sc_Pair('ẜa', null), new sc_Pair(new sc_Pair('ẜs', new sc_Pair('ẜs', null)), null))), null);
        BgL_makezd2parserzd2 = function (grammar, lexer) {
            var i;
            var parser_descr;
            var def_loop;
            var nb_nts;
            var names;
            var steps;
            var predictors;
            var enders;
            var starters;
            var nts;
            var sc_names_1;
            var sc_steps_2;
            var sc_predictors_3;
            var sc_enders_4;
            var sc_starters_5;
            var nb_confs;
            var BgL_sc_defzd2loop_6zd2;
            var BgL_sc_nbzd2nts_7zd2;
            var sc_nts_8;
            var BgL_sc_defzd2loop_9zd2;
            var ind;
            {
                ind = function (nt, sc_nts_10) {
                    var i;
                    {
                        i = sc_nts_10.length - 1;
                        while (true) {
                            if (i >= 0)
                                if (sc_isEqual(sc_nts_10[i], nt))
                                    return i;
                                else
                                    --i;
                            else
                                return false;
                        }
                    }
                };
                sc_nts_8 = (BgL_sc_defzd2loop_9zd2 = function (defs, sc_nts_11) {
                    var rule_loop;
                    var head;
                    var def;
                    return defs instanceof sc_Pair ? (def = defs.car, head = def.car, rule_loop = function (rules, sc_nts_12) {
                        var nt;
                        var l;
                        var sc_nts_13;
                        var rule;
                        if (rules instanceof sc_Pair) {
                            rule = rules.car;
                            l = rule;
                            sc_nts_13 = sc_nts_12;
                            while (l instanceof sc_Pair) {
                                {
                                    nt = l.car;
                                    l = l.cdr;
                                    sc_nts_13 = sc_member(nt, sc_nts_13) !== false ? sc_nts_13 : new sc_Pair(nt, sc_nts_13);
                                }
                            }
                            return rule_loop(rules.cdr, sc_nts_13);
                        } else
                            return BgL_sc_defzd2loop_9zd2(defs.cdr, sc_nts_12);
                    }, rule_loop(def.cdr, sc_member(head, sc_nts_11) !== false ? sc_nts_11 : new sc_Pair(head, sc_nts_11))) : sc_list2vector(sc_reverse(sc_nts_11));
                }, BgL_sc_defzd2loop_9zd2(grammar, null));
                BgL_sc_nbzd2nts_7zd2 = sc_nts_8.length;
                nb_confs = (BgL_sc_defzd2loop_6zd2 = function (defs, BgL_sc_nbzd2confs_14zd2) {
                    var rule_loop;
                    var def;
                    return defs instanceof sc_Pair ? (def = defs.car, rule_loop = function (rules, BgL_sc_nbzd2confs_15zd2) {
                        var l;
                        var BgL_sc_nbzd2confs_16zd2;
                        var rule;
                        if (rules instanceof sc_Pair) {
                            rule = rules.car;
                            l = rule;
                            BgL_sc_nbzd2confs_16zd2 = BgL_sc_nbzd2confs_15zd2;
                            while (l instanceof sc_Pair) {
                                {
                                    l = l.cdr;
                                    ++BgL_sc_nbzd2confs_16zd2;
                                }
                            }
                            return rule_loop(rules.cdr, BgL_sc_nbzd2confs_16zd2 + 1);
                        } else
                            return BgL_sc_defzd2loop_6zd2(defs.cdr, BgL_sc_nbzd2confs_15zd2);
                    }, rule_loop(def.cdr, BgL_sc_nbzd2confs_14zd2)) : BgL_sc_nbzd2confs_14zd2;
                }, BgL_sc_defzd2loop_6zd2(grammar, 0)) + BgL_sc_nbzd2nts_7zd2;
                sc_starters_5 = sc_makeVector(BgL_sc_nbzd2nts_7zd2, null);
                sc_enders_4 = sc_makeVector(BgL_sc_nbzd2nts_7zd2, null);
                sc_predictors_3 = sc_makeVector(BgL_sc_nbzd2nts_7zd2, null);
                sc_steps_2 = sc_makeVector(nb_confs, false);
                sc_names_1 = sc_makeVector(nb_confs, false);
                nts = sc_nts_8;
                starters = sc_starters_5;
                enders = sc_enders_4;
                predictors = sc_predictors_3;
                steps = sc_steps_2;
                names = sc_names_1;
                nb_nts = sc_nts_8.length;
                i = nb_nts - 1;
                while (i >= 0) {
                    {
                        sc_steps_2[i] = i - nb_nts;
                        sc_names_1[i] = sc_list(sc_nts_8[i], 0);
                        sc_enders_4[i] = sc_list(i);
                        --i;
                    }
                }
                def_loop = function (defs, conf) {
                    var rule_loop;
                    var head;
                    var def;
                    return defs instanceof sc_Pair ? (def = defs.car, head = def.car, rule_loop = function (rules, conf, rule_num) {
                        var i;
                        var sc_i_17;
                        var nt;
                        var l;
                        var sc_conf_18;
                        var sc_i_19;
                        var rule;
                        if (rules instanceof sc_Pair) {
                            rule = rules.car;
                            names[conf] = sc_list(head, rule_num);
                            sc_i_19 = ind(head, nts);
                            starters[sc_i_19] = new sc_Pair(conf, starters[sc_i_19]);
                            l = rule;
                            sc_conf_18 = conf;
                            while (l instanceof sc_Pair) {
                                {
                                    nt = l.car;
                                    steps[sc_conf_18] = ind(nt, nts);
                                    sc_i_17 = ind(nt, nts);
                                    predictors[sc_i_17] = new sc_Pair(sc_conf_18, predictors[sc_i_17]);
                                    l = l.cdr;
                                    ++sc_conf_18;
                                }
                            }
                            steps[sc_conf_18] = ind(head, nts) - nb_nts;
                            i = ind(head, nts);
                            enders[i] = new sc_Pair(sc_conf_18, enders[i]);
                            return rule_loop(rules.cdr, sc_conf_18 + 1, rule_num + 1);
                        } else
                            return def_loop(defs.cdr, conf);
                    }, rule_loop(def.cdr, conf, 1)) : undefined;
                };
                def_loop(grammar, sc_nts_8.length);
                parser_descr = [
                    lexer,
                    sc_nts_8,
                    sc_starters_5,
                    sc_enders_4,
                    sc_predictors_3,
                    sc_steps_2,
                    sc_names_1
                ];
                return function (input) {
                    var optrOpnd;
                    var sc_optrOpnd_20;
                    var sc_optrOpnd_21;
                    var sc_optrOpnd_22;
                    var loop1;
                    var BgL_sc_stateza2_23za2;
                    var toks;
                    var BgL_sc_nbzd2nts_24zd2;
                    var sc_steps_25;
                    var sc_enders_26;
                    var state_num;
                    var BgL_sc_statesza2_27za2;
                    var states;
                    var i;
                    var conf;
                    var l;
                    var tok_nts;
                    var sc_i_28;
                    var sc_i_29;
                    var l1;
                    var l2;
                    var tok;
                    var tail1129;
                    var L1125;
                    var goal_enders;
                    var BgL_sc_statesza2_30za2;
                    var BgL_sc_nbzd2nts_31zd2;
                    var BgL_sc_nbzd2confs_32zd2;
                    var nb_toks;
                    var goal_starters;
                    var sc_states_33;
                    var BgL_sc_nbzd2confs_34zd2;
                    var BgL_sc_nbzd2toks_35zd2;
                    var sc_toks_36;
                    var falseHead1128;
                    var sc_names_37;
                    var sc_steps_38;
                    var sc_predictors_39;
                    var sc_enders_40;
                    var sc_starters_41;
                    var sc_nts_42;
                    var lexer;
                    var sc_ind_43;
                    var make_states;
                    var BgL_sc_confzd2setzd2getza2_44za2;
                    var conf_set_merge_new_bang;
                    var conf_set_adjoin;
                    var BgL_sc_confzd2setzd2adjoinza2_45za2;
                    var BgL_sc_confzd2setzd2adjoinza2za2_46z00;
                    var conf_set_union;
                    var forw;
                    var is_parsed;
                    var deriv_trees;
                    var BgL_sc_derivzd2treesza2_47z70;
                    var nb_deriv_trees;
                    var BgL_sc_nbzd2derivzd2treesza2_48za2;
                    {
                        sc_ind_43 = function (nt, sc_nts_49) {
                            var i;
                            {
                                i = sc_nts_49.length - 1;
                                while (true) {
                                    if (i >= 0)
                                        if (sc_isEqual(sc_nts_49[i], nt))
                                            return i;
                                        else
                                            --i;
                                    else
                                        return false;
                                }
                            }
                        };
                        make_states = function (BgL_sc_nbzd2toks_50zd2, BgL_sc_nbzd2confs_51zd2) {
                            var v;
                            var i;
                            var sc_states_52;
                            {
                                sc_states_52 = sc_makeVector(BgL_sc_nbzd2toks_50zd2 + 1, false);
                                i = BgL_sc_nbzd2toks_50zd2;
                                while (i >= 0) {
                                    {
                                        v = sc_makeVector(BgL_sc_nbzd2confs_51zd2 + 1, false);
                                        v[0] = -1;
                                        sc_states_52[i] = v;
                                        --i;
                                    }
                                }
                                return sc_states_52;
                            }
                        };
                        BgL_sc_confzd2setzd2getza2_44za2 = function (state, BgL_sc_statezd2num_53zd2, sc_conf_54) {
                            var conf_set;
                            var BgL_sc_confzd2set_55zd2;
                            return BgL_sc_confzd2set_55zd2 = state[sc_conf_54 + 1], BgL_sc_confzd2set_55zd2 !== false ? BgL_sc_confzd2set_55zd2 : (conf_set = sc_makeVector(BgL_sc_statezd2num_53zd2 + 6, false), conf_set[1] = -3, conf_set[2] = -1, conf_set[3] = -1, conf_set[4] = -1, state[sc_conf_54 + 1] = conf_set, conf_set);
                        };
                        conf_set_merge_new_bang = function (conf_set) {
                            return conf_set[conf_set[1] + 5] = conf_set[4], conf_set[1] = conf_set[3], conf_set[3] = -1, conf_set[4] = -1;
                        };
                        conf_set_adjoin = function (state, conf_set, sc_conf_56, i) {
                            var tail;
                            return tail = conf_set[3], conf_set[i + 5] = -1, conf_set[tail + 5] = i, conf_set[3] = i, tail < 0 ? (conf_set[0] = state[0], state[0] = sc_conf_56) : undefined;
                        };
                        BgL_sc_confzd2setzd2adjoinza2_45za2 = function (sc_states_57, BgL_sc_statezd2num_58zd2, l, i) {
                            var conf_set;
                            var sc_conf_59;
                            var l1;
                            var state;
                            {
                                state = sc_states_57[BgL_sc_statezd2num_58zd2];
                                l1 = l;
                                while (l1 instanceof sc_Pair) {
                                    {
                                        sc_conf_59 = l1.car;
                                        conf_set = BgL_sc_confzd2setzd2getza2_44za2(state, BgL_sc_statezd2num_58zd2, sc_conf_59);
                                        if (conf_set[i + 5] === false) {
                                            conf_set_adjoin(state, conf_set, sc_conf_59, i);
                                            l1 = l1.cdr;
                                        } else
                                            l1 = l1.cdr;
                                    }
                                }
                                return undefined;
                            }
                        };
                        BgL_sc_confzd2setzd2adjoinza2za2_46z00 = function (sc_states_60, BgL_sc_statesza2_61za2, BgL_sc_statezd2num_62zd2, sc_conf_63, i) {
                            var BgL_sc_confzd2setza2_64z70;
                            var BgL_sc_stateza2_65za2;
                            var conf_set;
                            var state;
                            return state = sc_states_60[BgL_sc_statezd2num_62zd2], (conf_set = state[sc_conf_63 + 1], conf_set !== false ? conf_set[i + 5] : false) !== false ? (BgL_sc_stateza2_65za2 = BgL_sc_statesza2_61za2[BgL_sc_statezd2num_62zd2], BgL_sc_confzd2setza2_64z70 = BgL_sc_confzd2setzd2getza2_44za2(BgL_sc_stateza2_65za2, BgL_sc_statezd2num_62zd2, sc_conf_63), BgL_sc_confzd2setza2_64z70[i + 5] === false ? conf_set_adjoin(BgL_sc_stateza2_65za2, BgL_sc_confzd2setza2_64z70, sc_conf_63, i) : undefined, true) : false;
                        };
                        conf_set_union = function (state, conf_set, sc_conf_66, other_set) {
                            var i;
                            {
                                i = other_set[2];
                                while (i >= 0) {
                                    if (conf_set[i + 5] === false) {
                                        conf_set_adjoin(state, conf_set, sc_conf_66, i);
                                        i = other_set[i + 5];
                                    } else
                                        i = other_set[i + 5];
                                }
                                return undefined;
                            }
                        };
                        forw = function (sc_states_67, BgL_sc_statezd2num_68zd2, sc_starters_69, sc_enders_70, sc_predictors_71, sc_steps_72, sc_nts_73) {
                            var next_set;
                            var next;
                            var conf_set;
                            var ender;
                            var l;
                            var starter_set;
                            var starter;
                            var sc_l_74;
                            var sc_loop1_75;
                            var head;
                            var BgL_sc_confzd2set_76zd2;
                            var BgL_sc_statezd2num_77zd2;
                            var state;
                            var sc_states_78;
                            var preds;
                            var BgL_sc_confzd2set_79zd2;
                            var step;
                            var sc_conf_80;
                            var BgL_sc_nbzd2nts_81zd2;
                            var sc_state_82;
                            {
                                sc_state_82 = sc_states_67[BgL_sc_statezd2num_68zd2];
                                BgL_sc_nbzd2nts_81zd2 = sc_nts_73.length;
                                while (true) {
                                    {
                                        sc_conf_80 = sc_state_82[0];
                                        if (sc_conf_80 >= 0) {
                                            step = sc_steps_72[sc_conf_80];
                                            BgL_sc_confzd2set_79zd2 = sc_state_82[sc_conf_80 + 1];
                                            head = BgL_sc_confzd2set_79zd2[4];
                                            sc_state_82[0] = BgL_sc_confzd2set_79zd2[0];
                                            conf_set_merge_new_bang(BgL_sc_confzd2set_79zd2);
                                            if (step >= 0) {
                                                sc_l_74 = sc_starters_69[step];
                                                while (sc_l_74 instanceof sc_Pair) {
                                                    {
                                                        starter = sc_l_74.car;
                                                        starter_set = BgL_sc_confzd2setzd2getza2_44za2(sc_state_82, BgL_sc_statezd2num_68zd2, starter);
                                                        if (starter_set[BgL_sc_statezd2num_68zd2 + 5] === false) {
                                                            conf_set_adjoin(sc_state_82, starter_set, starter, BgL_sc_statezd2num_68zd2);
                                                            sc_l_74 = sc_l_74.cdr;
                                                        } else
                                                            sc_l_74 = sc_l_74.cdr;
                                                    }
                                                }
                                                l = sc_enders_70[step];
                                                while (l instanceof sc_Pair) {
                                                    {
                                                        ender = l.car;
                                                        if ((conf_set = sc_state_82[ender + 1], conf_set !== false ? conf_set[BgL_sc_statezd2num_68zd2 + 5] : false) !== false) {
                                                            next = sc_conf_80 + 1;
                                                            next_set = BgL_sc_confzd2setzd2getza2_44za2(sc_state_82, BgL_sc_statezd2num_68zd2, next);
                                                            conf_set_union(sc_state_82, next_set, next, BgL_sc_confzd2set_79zd2);
                                                            l = l.cdr;
                                                        } else
                                                            l = l.cdr;
                                                    }
                                                }
                                            } else {
                                                preds = sc_predictors_71[step + BgL_sc_nbzd2nts_81zd2];
                                                sc_states_78 = sc_states_67;
                                                state = sc_state_82;
                                                BgL_sc_statezd2num_77zd2 = BgL_sc_statezd2num_68zd2;
                                                BgL_sc_confzd2set_76zd2 = BgL_sc_confzd2set_79zd2;
                                                sc_loop1_75 = function (l) {
                                                    var sc_state_83;
                                                    var BgL_sc_nextzd2set_84zd2;
                                                    var sc_next_85;
                                                    var pred_set;
                                                    var i;
                                                    var pred;
                                                    if (l instanceof sc_Pair) {
                                                        pred = l.car;
                                                        i = head;
                                                        while (i >= 0) {
                                                            {
                                                                pred_set = (sc_state_83 = sc_states_78[i], sc_state_83[pred + 1]);
                                                                if (pred_set !== false) {
                                                                    sc_next_85 = pred + 1;
                                                                    BgL_sc_nextzd2set_84zd2 = BgL_sc_confzd2setzd2getza2_44za2(state, BgL_sc_statezd2num_77zd2, sc_next_85);
                                                                    conf_set_union(state, BgL_sc_nextzd2set_84zd2, sc_next_85, pred_set);
                                                                }
                                                                i = BgL_sc_confzd2set_76zd2[i + 5];
                                                            }
                                                        }
                                                        return sc_loop1_75(l.cdr);
                                                    } else
                                                        return undefined;
                                                };
                                                sc_loop1_75(preds);
                                            }
                                        } else
                                            return undefined;
                                    }
                                }
                            }
                        };
                        is_parsed = function (nt, i, j, sc_nts_86, sc_enders_87, sc_states_88) {
                            var conf_set;
                            var state;
                            var sc_conf_89;
                            var l;
                            var BgL_sc_ntza2_90za2;
                            {
                                BgL_sc_ntza2_90za2 = sc_ind_43(nt, sc_nts_86);
                                if (BgL_sc_ntza2_90za2 !== false) {
                                    sc_nts_86.length;
                                    l = sc_enders_87[BgL_sc_ntza2_90za2];
                                    while (true) {
                                        if (l instanceof sc_Pair) {
                                            sc_conf_89 = l.car;
                                            if ((state = sc_states_88[j], conf_set = state[sc_conf_89 + 1], conf_set !== false ? conf_set[i + 5] : false) !== false)
                                                return true;
                                            else
                                                l = l.cdr;
                                        } else
                                            return false;
                                    }
                                } else
                                    return false;
                            }
                        };
                        deriv_trees = function (sc_conf_91, i, j, sc_enders_92, sc_steps_93, sc_names_94, sc_toks_95, sc_states_96, BgL_sc_nbzd2nts_97zd2) {
                            var sc_loop1_98;
                            var prev;
                            var name;
                            return name = sc_names_94[sc_conf_91], name !== false ? sc_conf_91 < BgL_sc_nbzd2nts_97zd2 ? sc_list(sc_list(name, sc_toks_95[i].car)) : sc_list(sc_list(name)) : (prev = sc_conf_91 - 1, sc_loop1_98 = function (l1, l2) {
                                var loop2;
                                var ender_set;
                                var state;
                                var ender;
                                var l1;
                                var l2;
                                while (true) {
                                    if (l1 instanceof sc_Pair) {
                                        ender = l1.car;
                                        ender_set = (state = sc_states_96[j], state[ender + 1]);
                                        if (ender_set !== false) {
                                            loop2 = function (k, l2) {
                                                var loop3;
                                                var ender_trees;
                                                var prev_trees;
                                                var conf_set;
                                                var sc_state_99;
                                                var k;
                                                var l2;
                                                while (true) {
                                                    if (k >= 0)
                                                        if (k >= i && (sc_state_99 = sc_states_96[k], conf_set = sc_state_99[prev + 1], conf_set !== false ? conf_set[i + 5] : false) !== false) {
                                                            prev_trees = deriv_trees(prev, i, k, sc_enders_92, sc_steps_93, sc_names_94, sc_toks_95, sc_states_96, BgL_sc_nbzd2nts_97zd2);
                                                            ender_trees = deriv_trees(ender, k, j, sc_enders_92, sc_steps_93, sc_names_94, sc_toks_95, sc_states_96, BgL_sc_nbzd2nts_97zd2);
                                                            loop3 = function (l3, l2) {
                                                                var l4;
                                                                var sc_l2_100;
                                                                var ender_tree;
                                                                if (l3 instanceof sc_Pair) {
                                                                    ender_tree = sc_list(l3.car);
                                                                    l4 = prev_trees;
                                                                    sc_l2_100 = l2;
                                                                    while (l4 instanceof sc_Pair) {
                                                                        {
                                                                            sc_l2_100 = new sc_Pair(sc_append(l4.car, ender_tree), sc_l2_100);
                                                                            l4 = l4.cdr;
                                                                        }
                                                                    }
                                                                    return loop3(l3.cdr, sc_l2_100);
                                                                } else
                                                                    return loop2(ender_set[k + 5], l2);
                                                            };
                                                            return loop3(ender_trees, l2);
                                                        } else
                                                            k = ender_set[k + 5];
                                                    else
                                                        return sc_loop1_98(l1.cdr, l2);
                                                }
                                            };
                                            return loop2(ender_set[2], l2);
                                        } else
                                            l1 = l1.cdr;
                                    } else
                                        return l2;
                                }
                            }, sc_loop1_98(sc_enders_92[sc_steps_93[prev]], null));
                        };
                        BgL_sc_derivzd2treesza2_47z70 = function (nt, i, j, sc_nts_101, sc_enders_102, sc_steps_103, sc_names_104, sc_toks_105, sc_states_106) {
                            var conf_set;
                            var state;
                            var sc_conf_107;
                            var l;
                            var trees;
                            var BgL_sc_nbzd2nts_108zd2;
                            var BgL_sc_ntza2_109za2;
                            {
                                BgL_sc_ntza2_109za2 = sc_ind_43(nt, sc_nts_101);
                                if (BgL_sc_ntza2_109za2 !== false) {
                                    BgL_sc_nbzd2nts_108zd2 = sc_nts_101.length;
                                    l = sc_enders_102[BgL_sc_ntza2_109za2];
                                    trees = null;
                                    while (l instanceof sc_Pair) {
                                        {
                                            sc_conf_107 = l.car;
                                            if ((state = sc_states_106[j], conf_set = state[sc_conf_107 + 1], conf_set !== false ? conf_set[i + 5] : false) !== false) {
                                                l = l.cdr;
                                                trees = sc_append(deriv_trees(sc_conf_107, i, j, sc_enders_102, sc_steps_103, sc_names_104, sc_toks_105, sc_states_106, BgL_sc_nbzd2nts_108zd2), trees);
                                            } else
                                                l = l.cdr;
                                        }
                                    }
                                    return trees;
                                } else
                                    return false;
                            }
                        };
                        nb_deriv_trees = function (sc_conf_110, i, j, sc_enders_111, sc_steps_112, sc_toks_113, sc_states_114, BgL_sc_nbzd2nts_115zd2) {
                            var sc_loop1_116;
                            var tmp1124;
                            var prev;
                            return prev = sc_conf_110 - 1, (tmp1124 = sc_conf_110 < BgL_sc_nbzd2nts_115zd2, tmp1124 !== false ? tmp1124 : sc_steps_112[prev] < 0) !== false ? 1 : (sc_loop1_116 = function (l, sc_n_118) {
                                var nb_ender_trees;
                                var nb_prev_trees;
                                var conf_set;
                                var state;
                                var k;
                                var n;
                                var ender_set;
                                var sc_state_117;
                                var ender;
                                var l;
                                var sc_n_118;
                                while (true) {
                                    if (l instanceof sc_Pair) {
                                        ender = l.car;
                                        ender_set = (sc_state_117 = sc_states_114[j], sc_state_117[ender + 1]);
                                        if (ender_set !== false) {
                                            k = ender_set[2];
                                            n = sc_n_118;
                                            while (k >= 0) {
                                                if (k >= i && (state = sc_states_114[k], conf_set = state[prev + 1], conf_set !== false ? conf_set[i + 5] : false) !== false) {
                                                    nb_prev_trees = nb_deriv_trees(prev, i, k, sc_enders_111, sc_steps_112, sc_toks_113, sc_states_114, BgL_sc_nbzd2nts_115zd2);
                                                    nb_ender_trees = nb_deriv_trees(ender, k, j, sc_enders_111, sc_steps_112, sc_toks_113, sc_states_114, BgL_sc_nbzd2nts_115zd2);
                                                    k = ender_set[k + 5];
                                                    n += nb_prev_trees * nb_ender_trees;
                                                } else
                                                    k = ender_set[k + 5];
                                            }
                                            return sc_loop1_116(l.cdr, n);
                                        } else
                                            l = l.cdr;
                                    } else
                                        return sc_n_118;
                                }
                            }, sc_loop1_116(sc_enders_111[sc_steps_112[prev]], 0));
                        };
                        BgL_sc_nbzd2derivzd2treesza2_48za2 = function (nt, i, j, sc_nts_119, sc_enders_120, sc_steps_121, sc_toks_122, sc_states_123) {
                            var conf_set;
                            var state;
                            var sc_conf_124;
                            var l;
                            var nb_trees;
                            var BgL_sc_nbzd2nts_125zd2;
                            var BgL_sc_ntza2_126za2;
                            {
                                BgL_sc_ntza2_126za2 = sc_ind_43(nt, sc_nts_119);
                                if (BgL_sc_ntza2_126za2 !== false) {
                                    BgL_sc_nbzd2nts_125zd2 = sc_nts_119.length;
                                    l = sc_enders_120[BgL_sc_ntza2_126za2];
                                    nb_trees = 0;
                                    while (l instanceof sc_Pair) {
                                        {
                                            sc_conf_124 = l.car;
                                            if ((state = sc_states_123[j], conf_set = state[sc_conf_124 + 1], conf_set !== false ? conf_set[i + 5] : false) !== false) {
                                                l = l.cdr;
                                                nb_trees = nb_deriv_trees(sc_conf_124, i, j, sc_enders_120, sc_steps_121, sc_toks_122, sc_states_123, BgL_sc_nbzd2nts_125zd2) + nb_trees;
                                            } else
                                                l = l.cdr;
                                        }
                                    }
                                    return nb_trees;
                                } else
                                    return false;
                            }
                        };
                        lexer = parser_descr[0];
                        sc_nts_42 = parser_descr[1];
                        sc_starters_41 = parser_descr[2];
                        sc_enders_40 = parser_descr[3];
                        sc_predictors_39 = parser_descr[4];
                        sc_steps_38 = parser_descr[5];
                        sc_names_37 = parser_descr[6];
                        falseHead1128 = new sc_Pair(null, null);
                        L1125 = lexer(input);
                        tail1129 = falseHead1128;
                        while (!(L1125 === null)) {
                            {
                                tok = L1125.car;
                                l1 = tok.cdr;
                                l2 = null;
                                while (l1 instanceof sc_Pair) {
                                    {
                                        sc_i_29 = sc_ind_43(l1.car, sc_nts_42);
                                        if (sc_i_29 !== false) {
                                            l1 = l1.cdr;
                                            l2 = new sc_Pair(sc_i_29, l2);
                                        } else
                                            l1 = l1.cdr;
                                    }
                                }
                                sc_optrOpnd_22 = new sc_Pair(tok.car, sc_reverse(l2));
                                sc_optrOpnd_21 = new sc_Pair(sc_optrOpnd_22, null);
                                tail1129.cdr = sc_optrOpnd_21;
                                tail1129 = tail1129.cdr;
                                L1125 = L1125.cdr;
                            }
                        }
                        sc_optrOpnd_20 = falseHead1128.cdr;
                        sc_toks_36 = sc_list2vector(sc_optrOpnd_20);
                        BgL_sc_nbzd2toks_35zd2 = sc_toks_36.length;
                        BgL_sc_nbzd2confs_34zd2 = sc_steps_38.length;
                        sc_states_33 = make_states(BgL_sc_nbzd2toks_35zd2, BgL_sc_nbzd2confs_34zd2);
                        goal_starters = sc_starters_41[0];
                        BgL_sc_confzd2setzd2adjoinza2_45za2(sc_states_33, 0, goal_starters, 0);
                        forw(sc_states_33, 0, sc_starters_41, sc_enders_40, sc_predictors_39, sc_steps_38, sc_nts_42);
                        sc_i_28 = 0;
                        while (sc_i_28 < BgL_sc_nbzd2toks_35zd2) {
                            {
                                tok_nts = sc_toks_36[sc_i_28].cdr;
                                BgL_sc_confzd2setzd2adjoinza2_45za2(sc_states_33, sc_i_28 + 1, tok_nts, sc_i_28);
                                forw(sc_states_33, sc_i_28 + 1, sc_starters_41, sc_enders_40, sc_predictors_39, sc_steps_38, sc_nts_42);
                                ++sc_i_28;
                            }
                        }
                        nb_toks = sc_toks_36.length;
                        BgL_sc_nbzd2confs_32zd2 = sc_steps_38.length;
                        BgL_sc_nbzd2nts_31zd2 = sc_nts_42.length;
                        BgL_sc_statesza2_30za2 = make_states(nb_toks, BgL_sc_nbzd2confs_32zd2);
                        goal_enders = sc_enders_40[0];
                        l = goal_enders;
                        while (l instanceof sc_Pair) {
                            {
                                conf = l.car;
                                BgL_sc_confzd2setzd2adjoinza2za2_46z00(sc_states_33, BgL_sc_statesza2_30za2, nb_toks, conf, 0);
                                l = l.cdr;
                            }
                        }
                        i = nb_toks;
                        while (i >= 0) {
                            {
                                states = sc_states_33;
                                BgL_sc_statesza2_27za2 = BgL_sc_statesza2_30za2;
                                state_num = i;
                                sc_enders_26 = sc_enders_40;
                                sc_steps_25 = sc_steps_38;
                                BgL_sc_nbzd2nts_24zd2 = BgL_sc_nbzd2nts_31zd2;
                                toks = sc_toks_36;
                                BgL_sc_stateza2_23za2 = BgL_sc_statesza2_30za2[i];
                                loop1 = function () {
                                    var sc_loop1_127;
                                    var prev;
                                    var BgL_sc_statesza2_128za2;
                                    var sc_states_129;
                                    var j;
                                    var i;
                                    var sc_i_130;
                                    var head;
                                    var conf_set;
                                    var sc_conf_131;
                                    {
                                        sc_conf_131 = BgL_sc_stateza2_23za2[0];
                                        if (sc_conf_131 >= 0) {
                                            conf_set = BgL_sc_stateza2_23za2[sc_conf_131 + 1];
                                            head = conf_set[4];
                                            BgL_sc_stateza2_23za2[0] = conf_set[0];
                                            conf_set_merge_new_bang(conf_set);
                                            sc_i_130 = head;
                                            while (sc_i_130 >= 0) {
                                                {
                                                    i = sc_i_130;
                                                    j = state_num;
                                                    sc_states_129 = states;
                                                    BgL_sc_statesza2_128za2 = BgL_sc_statesza2_27za2;
                                                    prev = sc_conf_131 - 1;
                                                    if (sc_conf_131 >= BgL_sc_nbzd2nts_24zd2 && sc_steps_25[prev] >= 0) {
                                                        sc_loop1_127 = function (l) {
                                                            var k;
                                                            var ender_set;
                                                            var state;
                                                            var ender;
                                                            var l;
                                                            while (true) {
                                                                if (l instanceof sc_Pair) {
                                                                    ender = l.car;
                                                                    ender_set = (state = sc_states_129[j], state[ender + 1]);
                                                                    if (ender_set !== false) {
                                                                        k = ender_set[2];
                                                                        while (k >= 0) {
                                                                            {
                                                                                if (k >= i)
                                                                                    if (BgL_sc_confzd2setzd2adjoinza2za2_46z00(sc_states_129, BgL_sc_statesza2_128za2, k, prev, i) !== false)
                                                                                        BgL_sc_confzd2setzd2adjoinza2za2_46z00(sc_states_129, BgL_sc_statesza2_128za2, j, ender, k);
                                                                                k = ender_set[k + 5];
                                                                            }
                                                                        }
                                                                        return sc_loop1_127(l.cdr);
                                                                    } else
                                                                        l = l.cdr;
                                                                } else
                                                                    return undefined;
                                                            }
                                                        };
                                                        sc_loop1_127(sc_enders_26[sc_steps_25[prev]]);
                                                    }
                                                    sc_i_130 = conf_set[sc_i_130 + 5];
                                                }
                                            }
                                            return loop1();
                                        } else
                                            return undefined;
                                    }
                                };
                                loop1();
                                --i;
                            }
                        }
                        optrOpnd = BgL_sc_statesza2_30za2;
                        return [
                            sc_nts_42,
                            sc_starters_41,
                            sc_enders_40,
                            sc_predictors_39,
                            sc_steps_38,
                            sc_names_37,
                            sc_toks_36,
                            optrOpnd,
                            is_parsed,
                            BgL_sc_derivzd2treesza2_47z70,
                            BgL_sc_nbzd2derivzd2treesza2_48za2
                        ];
                    }
                };
            }
        };
        BgL_parsezd2ze3parsedzf3zc2 = function (parse, nt, i, j) {
            var is_parsed;
            var states;
            var enders;
            var nts;
            return nts = parse[0], enders = parse[2], states = parse[7], is_parsed = parse[8], is_parsed(nt, i, j, nts, enders, states);
        };
        BgL_parsezd2ze3treesz31 = function (parse, nt, i, j) {
            var BgL_sc_derivzd2treesza2_132z70;
            var states;
            var toks;
            var names;
            var steps;
            var enders;
            var nts;
            return nts = parse[0], enders = parse[2], steps = parse[4], names = parse[5], toks = parse[6], states = parse[7], BgL_sc_derivzd2treesza2_132z70 = parse[9], BgL_sc_derivzd2treesza2_132z70(nt, i, j, nts, enders, steps, names, toks, states);
        };
        BgL_parsezd2ze3nbzd2treesze3 = function (parse, nt, i, j) {
            var BgL_sc_nbzd2derivzd2treesza2_133za2;
            var states;
            var toks;
            var steps;
            var enders;
            var nts;
            return nts = parse[0], enders = parse[2], steps = parse[4], toks = parse[6], states = parse[7], BgL_sc_nbzd2derivzd2treesza2_133za2 = parse[10], BgL_sc_nbzd2derivzd2treesza2_133za2(nt, i, j, nts, enders, steps, toks, states);
        };
        test = function (k) {
            var x;
            var p;
            return p = BgL_makezd2parserzd2(const_earley, function (l) {
                var sc_x_134;
                var tail1134;
                var L1130;
                var falseHead1133;
                {
                    falseHead1133 = new sc_Pair(null, null);
                    tail1134 = falseHead1133;
                    L1130 = l;
                    while (!(L1130 === null)) {
                        {
                            tail1134.cdr = new sc_Pair((sc_x_134 = L1130.car, sc_list(sc_x_134, sc_x_134)), null);
                            tail1134 = tail1134.cdr;
                            L1130 = L1130.cdr;
                        }
                    }
                    return falseHead1133.cdr;
                }
            }), x = p(sc_vector2list(sc_makeVector(k, 'ẜa'))), sc_length(BgL_parsezd2ze3treesz31(x, 'ẜs', 0, k));
        };
        BgL_earleyzd2benchmarkzd2 = function () {
            var args = null;
            for (var sc_tmp = arguments.length - 1; sc_tmp >= 0; sc_tmp--) {
                args = sc_cons(arguments[sc_tmp], args);
            }
            var k;
            return k = args === null ? 7 : args.car, BgL_runzd2benchmarkzd2('earley', 1, function () {
                return test(k);
            }, function (result) {
                return sc_display(result), sc_newline(), result == 132;
            });
        };
    }
    SC_DEFAULT_OUT = new sc_GenericOutputPort(function (s) {
    });
    SC_ERROR_OUT = SC_DEFAULT_OUT;
    function RunBenchmark(name, count, run, warn) {
        for (var n = 0; n < count; ++n) {
            result = run();
            if (!warn(result)) {
                throw new Error('Earley or Boyer did incorrect number of rewrites');
            }
        }
    }
    var BgL_runzd2benchmarkzd2 = RunBenchmark;
    for (var i = 0; i < 4; ++i) {
        BgL_earleyzd2benchmarkzd2();
        BgL_nboyerzd2benchmarkzd2();
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