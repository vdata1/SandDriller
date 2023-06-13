try {
    var evalStr = '//CHECK#1\n' + 'for (var x in this) {\n' + '  if ( x === \'Object\' ) {\n' + '    $ERROR("#1: \'Object\' have attribute DontEnum");\n' + '  } else if ( x === \'Function\') {\n' + '    $ERROR("#1: \'Function\' have attribute DontEnum");\n' + '  } else if ( x === \'String\' ) {\n' + '    $ERROR("#1: \'String\' have attribute DontEnum");\n' + '  } else if ( x === \'Number\' ) {\n' + '    $ERROR("#1: \'Number\' have attribute DontEnum");\n' + '  } else if ( x === \'Array\' ) {\n' + '    $ERROR("#1: \'Array\' have attribute DontEnum");\n' + '  } else if ( x === \'Boolean\' ) {\n' + '    $ERROR("#1: \'Boolean\' have attribute DontEnum");\n' + '  } else if ( x === \'Date\' ) {\n' + '    $ERROR("#1: \'Date\' have attribute DontEnum");\n' + '  } else if ( x === \'RegExp\' ) {\n' + '    $ERROR("#1: \'RegExp\' have attribute DontEnum");\n' + '  } else if ( x === \'Error\' ) {\n' + '    $ERROR("#1: \'Error\' have attribute DontEnum");\n' + '  } else if ( x === \'EvalError\' ) {\n' + '    $ERROR("#1: \'EvalError\' have attribute DontEnum");\n' + '  } else if ( x === \'RangeError\' ) {\n' + '    $ERROR("#1: \'RangeError\' have attribute DontEnum");\n' + '  } else if ( x === \'ReferenceError\' ) {\n' + '    $ERROR("#1: \'ReferenceError\' have attribute DontEnum");\n' + '  } else if ( x === \'SyntaxError\' ) {\n' + '    $ERROR("#1: \'SyntaxError\' have attribute DontEnum");\n' + '  } else if ( x === \'TypeError\' ) {\n' + '    $ERROR("#1: \'TypeError\' have attribute DontEnum");\n' + '  } else if ( x === \'URIError\' ) {\n' + '    $ERROR("#1: \'URIError\' have attribute DontEnum");\n' + '  }\n' + '}\n';
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