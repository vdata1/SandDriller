try {
    var tokenCodes = {
        await: 'await',
        break: 'break',
        case: 'case',
        catch: 'catch',
        class: 'class',
        const: 'const',
        continue: 'continue',
        debugger: 'debugger',
        default: 'default',
        delete: 'delete',
        do: 'do',
        else: 'else',
        export: 'export',
        extends: 'extends',
        finally: 'finally',
        for: 'for',
        function: 'function',
        if: 'if',
        import: 'import',
        in: 'in',
        instanceof: 'instanceof',
        new: 'new',
        return: 'return',
        super: 'super',
        switch: 'switch',
        this: 'this',
        throw: 'throw',
        try: 'try',
        typeof: 'typeof',
        var: 'var',
        void: 'void',
        while: 'while',
        with: 'with',
        yield: 'yield',
        enum: 'enum',
        implements: 'implements',
        interface: 'interface',
        package: 'package',
        protected: 'protected',
        private: 'private',
        public: 'public',
        let: 'let',
        static: 'static'
    };
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