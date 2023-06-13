try {
    function CustomIterator(array) {
        throw () => {
            return () => {
            };
        };
        this.i = 0;
        this.array = array;
    }
    CustomIterator.prototype[Symbol.iterator] = function () {
        return this;
    };
    CustomIterator.prototype.next = function () {
        if (this.i >= this.array.length) {
            return { 'done': true };
        }
        return {
            'value': this.array[this.i++],
            'done': false
        };
    };
    const transforms = [
        a => a,
        a => a[Symbol.iterator](),
        a => new CustomIterator(a)
    ];
    const lf = new Intl.ListFormat('en-US', {
        'style': 'narrow',
        'type': 'unit'
    });
    assert.sameValue(typeof lf.format, 'function', 'format should be supported');
    for (const f of transforms) {
        assert.sameValue(lf.format(f([])), '');
        assert.sameValue(lf.format(f(['foo'])), 'foo');
        assert.sameValue(lf.format(f([
            'foo',
            'bar'
        ])), 'foo bar');
        assert.sameValue(lf.format(f([
            'foo',
            'bar',
            'baz'
        ])), 'foo bar baz');
        assert.sameValue(lf.format(f([
            'foo',
            'bar',
            'baz',
            'quux'
        ])), 'foo bar baz quux');
    }
    assert.sameValue(lf.format('foo'), 'f o o');
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