try {
    function verifyFormatParts(actual, expected, message) {
        assert.sameValue(actual.length, expected.length, `${ message }: length`);
        for (let i = 0; i < actual.length; ++i) {
            assert.sameValue(actual[i].type, expected[i].type, `${ message }: parts[${ i }].type`);
            assert.sameValue(actual[i].value, expected[i].value, `${ message }: parts[${ i }].value`);
        }
    }
    function CustomIterator(array) {
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
    const lf = new Intl.ListFormat('en-US', { 'type': 'unit' });
    assert.sameValue(typeof lf.formatToParts, 'function', 'format should be supported');
    for (const f of transforms) {
        verifyFormatParts(lf.formatToParts(f([])), []);
        verifyFormatParts(lf.formatToParts(f(['foo'])), [{
                'type': 'element',
                'value': 'foo'
            }]);
        verifyFormatParts(lf.formatToParts(f([
            'foo',
            'bar'
        ])), [
            {
                'type': 'element',
                'value': 'foo'
            },
            {
                'type': 'literal',
                'value': ', '
            },
            {
                'type': 'element',
                'value': 'bar'
            }
        ]);
        verifyFormatParts(lf.formatToParts(f([
            'foo',
            'bar',
            'baz'
        ])), [
            {
                'type': 'element',
                'value': 'foo'
            },
            {
                'type': 'literal',
                'value': ', '
            },
            {
                'type': 'element',
                'value': 'bar'
            },
            {
                'type': 'literal',
                'value': ', '
            },
            {
                'type': 'element',
                'value': 'baz'
            }
        ]);
        verifyFormatParts(lf.formatToParts(f([
            'foo',
            'bar',
            'baz',
            'quux'
        ])), [
            {
                'type': 'element',
                'value': 'foo'
            },
            {
                'type': 'literal',
                'value': ', '
            },
            {
                'type': 'element',
                'value': 'bar'
            },
            {
                'type': 'literal',
                'value': ', '
            },
            {
                'type': 'element',
                'value': 'baz'
            },
            {
                'type': 'literal',
                'value': ', '
            },
            {
                'type': 'element',
                'value': 'quux'
            }
        ]);
    }
    verifyFormatParts(lf.formatToParts('foo'), [
        {
            'type': 'element',
            'value': 'f'
        },
        {
            'type': 'literal',
            'value': ', '
        },
        {
            'type': 'element',
            'value': 'o'
        },
        {
            'type': 'literal',
            'value': ', '
        },
        {
            'type': 'element',
            'value': 'o'
        }
    ]);
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