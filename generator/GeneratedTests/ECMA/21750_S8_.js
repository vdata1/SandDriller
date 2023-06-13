try {
    var __proto = { phylum: 'avis' };
    if (!('valueOf' in __proto)) {
        $ERROR('#1: var __proto={phylum:"avis"}; "valueOf" in __proto');
    }
    function Robin() {
        this.name = 'robin';
    }
    ;
    Robin.prototype = __proto;
    var __my__robin = new Robin();
    if (!('phylum' in __my__robin)) {
        $ERROR('#2: var __proto={phylum:"avis"}; function Robin(){this.name="robin"}; Robin.prototype=__proto; var __my__robin = new Robin; "phylum" in __my__robin');
    }
    if (__my__robin.hasOwnProperty('phylum')) {
        $ERROR('#3: var __proto={phylum:"avis"}; function Robin(){this.name="robin"}; Robin.prototype=__proto; var __my__robin = new Robin; __my__robin.hasOwnProperty("phylum") === false. Actual: ' + __my__robin.hasOwnProperty('phylum'));
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