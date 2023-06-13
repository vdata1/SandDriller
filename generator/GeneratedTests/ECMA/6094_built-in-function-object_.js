try {
    const visited = [];
    function visit(ns, path) {
        if (visited.includes(ns)) {
            return;
        }
        visited.push(ns);
        if (typeof ns === 'function') {
            assertNativeFunction(ns, path);
        }
        if (typeof ns !== 'function' && (typeof ns !== 'object' || ns === null)) {
            return;
        }
        const descriptors = Object.getOwnPropertyDescriptors(ns);
        Reflect.ownKeys(descriptors).forEach(name => {
            const desc = descriptors[name];
            const p = typeof name === 'symbol' ? `${ path }[Symbol(${ name.description })]` : `${ path }.${ name }`;
            if ('value' in desc) {
                visit(desc.value, p);
            } else {
                visit(desc.get, p);
                visit(desc.set, p);
            }
        });
    }
    WellKnownIntrinsicObjects.forEach(intrinsic => {
        visit(intrinsic.value, intrinsic.name);
    });
    assert.notSameValue(visited.length, 0);
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