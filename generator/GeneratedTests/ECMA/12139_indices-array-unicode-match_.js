try {
    assert.deepEqual([
        [
            1,
            2
        ],
        [
            1,
            2
        ]
    ], 'bab'.match(/(a)/du).indices);
    assert.deepEqual([
        [
            0,
            3
        ],
        [
            1,
            2
        ]
    ], 'bab'.match(/.(a)./du).indices);
    assert.deepEqual([
        [
            0,
            3
        ],
        [
            1,
            2
        ],
        [
            2,
            3
        ]
    ], 'bab'.match(/.(a)(.)/du).indices);
    assert.deepEqual([
        [
            0,
            3
        ],
        [
            1,
            3
        ]
    ], 'bab'.match(/.(\w\w)/du).indices);
    assert.deepEqual([
        [
            0,
            3
        ],
        [
            0,
            3
        ]
    ], 'bab'.match(/(\w\w\w)/du).indices);
    assert.deepEqual([
        [
            0,
            3
        ],
        [
            0,
            2
        ],
        [
            2,
            3
        ]
    ], 'bab'.match(/(\w\w)(\w)/du).indices);
    assert.deepEqual([
        [
            0,
            2
        ],
        [
            0,
            2
        ],
        undefined
    ], 'bab'.match(/(\w\w)(\W)?/du).indices);
    let groups = /(?<a>.)(?<b>.)(?<c>.)\k<c>\k<b>\k<a>/du.exec('abccba').indices.groups;
    assert.compareArray([
        0,
        1
    ], groups.a);
    assert.compareArray([
        1,
        2
    ], groups.b);
    assert.compareArray([
        2,
        3
    ], groups.c);
    verifyProperty(groups, 'a', {
        enumerable: true,
        writable: true,
        configurable: true
    });
    verifyProperty(groups, 'b', {
        enumerable: true,
        writable: true,
        configurable: true
    });
    verifyProperty(groups, 'c', {
        enumerable: true,
        writable: true,
        configurable: true
    });
    assert.sameValue('\uD835\uDC01'.length, 2, 'The length of "\uD835\uDC01" is 2');
    assert.sameValue('\uD835\uDC01'.length, 2, 'The length of "\\u{1d401}" is 2');
    assert.sameValue('\uD835\uDC01'.length, 2, 'The length of "\\uD835\\uDC01" is 2');
    assert.sameValue(2, '\uD835\uDC01'.match(/./u)[0].length, 'The length of a single code point match against "\uD835\uDC01" is 2 (with /du flag)');
    assert.sameValue(2, '\uD835\uDC01'.match(/./u)[0].length, 'The length of a single code point match against "\\u{1d401}" is 2 (with /du flag)');
    assert.sameValue(2, '\uD835\uDC01'.match(/./u)[0].length, 'The length of a single code point match against "\\ud835\\udc01" is 2 (with /du flag)');
    assert.compareArray([
        0,
        2
    ], '\uD835\uDC01'.match(/./du).indices[0], 'Indices for unicode match against "\uD835\uDC01" (with /du flag)');
    assert.compareArray([
        0,
        2
    ], '\uD835\uDC01'.match(/./du).indices[0], 'Indices for unicode match against \\u{1d401} (with /du flag)');
    assert.compareArray([
        0,
        2
    ], '\uD835\uDC01'.match(/./du).indices[0], 'Indices for unicode match against \\ud835\\udc01 (with /du flag)');
    assert.compareArray([
        0,
        2
    ], '\uD835\uDC01'.match(/(?<a>.)/du).indices.groups.a, 'Indices for unicode match against \uD835\uDC01 in groups.a (with /du flag)');
    assert.compareArray([
        0,
        2
    ], '\uD835\uDC01'.match(/(?<a>.)/du).indices.groups.a, 'Indices for unicode match against \\u{1d401} in groups.a (with /du flag)');
    assert.compareArray([
        0,
        2
    ], '\uD835\uDC01'.match(/(?<a>.)/du).indices.groups.a, 'Indices for unicode match against \\ud835\\udc01 in groups.a (with /du flag)');
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