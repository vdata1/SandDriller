try {
    var evalStr = '//CHECK#4\n' + 'if ( eval === null ) {\n' + '  $ERROR("#4: eval === null");\n' + '}\n' + '//CHECK#5\n' + 'if ( parseInt === null ) {\n' + '  $ERROR("#5: parseInt === null");\n' + '}\n' + '//CHECK#6\n' + 'if ( parseFloat === null ) {\n' + '  $ERROR("#6: parseFloat === null");\n' + '}\n' + '//CHECK#7\n' + 'if ( isNaN === null ) {\n' + '  $ERROR("#7: isNaN === null");\n' + '}\n' + '//CHECK#8\n' + 'if ( isFinite === null ) {\n' + '  $ERROR("#8: isFinite === null");\n' + '}\n' + '//CHECK#9\n' + 'if ( decodeURI === null ) {\n' + '  $ERROR("#9: decodeURI === null");\n' + '}\n' + '//CHECK#10\n' + 'if ( decodeURIComponent === null ) {\n' + '  $ERROR("#10: decodeURIComponent === null");\n' + '}\n' + '//CHECK#11\n' + 'if ( encodeURI === null ) {\n' + '  $ERROR("#11: encodeURI === null");\n' + '}\n' + '//CHECK#12\n' + 'if ( encodeURIComponent === null ) {\n' + '  $ERROR("#12: encodeURIComponent === null");\n' + '}\n' + ';\n';
    eval(evalStr);
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