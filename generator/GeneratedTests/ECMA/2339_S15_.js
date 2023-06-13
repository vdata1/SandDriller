try {
    var x = new Array('', '', '');
    if (x.join('') !== '') {
        $ERROR('#0: var x = new Array("","",""); x.join("") === "". Actual: ' + x.join(''));
    }
    var x = new Array('\\', '\\', '\\');
    if (x.join('\\') !== '\\\\\\\\\\') {
        $ERROR('#1: var x = new Array("\\","\\","\\"); x.join("\\") === "\\\\\\\\\\". Actual: ' + x.join('\\'));
    }
    var x = new Array('&', '&', '&');
    if (x.join('&') !== '&&&&&') {
        $ERROR('#2: var x = new Array("&", "&", "&"); x.join("&") === "&&&&&". Actual: ' + x.join('&'));
    }
    var x = new Array(true, true, true);
    if (x.join() !== 'true,true,true') {
        $ERROR('#3: var x = new Array(true,true,true); x.join(true,true,true) === "true,true,true". Actual: ' + x.join(true, true, true));
    }
    var x = new Array(null, null, null);
    if (x.join() !== ',,') {
        $ERROR('#4: var x = new Array(null,null,null); x.join(null,null,null) === ",,". Actual: ' + x.join(null, null, null));
    }
    var x = new Array(undefined, undefined, undefined);
    if (x.join() !== ',,') {
        $ERROR('#5: var x = new Array(undefined,undefined,undefined); x.join(undefined,undefined,undefined) === ",,". Actual: ' + x.join(undefined, undefined, undefined));
    }
    var x = new Array(Infinity, Infinity, Infinity);
    if (x.join() !== 'Infinity,Infinity,Infinity') {
        $ERROR('#6: var x = new Array(Infinity,Infinity,Infinity); x.join(Infinity,Infinity,Infinity) === "Infinity,Infinity,Infinity". Actual: ' + x.join(Infinity, Infinity, Infinity));
    }
    var x = new Array(NaN, NaN, NaN);
    if (x.join() !== 'NaN,NaN,NaN') {
        $ERROR('#7: var x = new Array(NaN,NaN,NaN); x.join(NaN,NaN,NaN) === "NaN,NaN,NaN". Actual: ' + x.join(NaN, NaN, NaN));
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