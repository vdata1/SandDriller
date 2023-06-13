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
    ], 'bab'.match(/(a)/d).indices);
    assert.deepEqual([
        [
            0,
            3
        ],
        [
            1,
            2
        ]
    ], 'bab'.match(/.(a)./d).indices);
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
    ], 'bab'.match(/.(a)(.)/d).indices);
    assert.deepEqual([
        [
            0,
            3
        ],
        [
            1,
            3
        ]
    ], 'bab'.match(/.(\w\w)/d).indices);
    assert.deepEqual([
        [
            0,
            3
        ],
        [
            0,
            3
        ]
    ], 'bab'.match(/(\w\w\w)/d).indices);
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
    ], 'bab'.match(/(\w\w)(\w)/d).indices);
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
    ], 'bab'.match(/(\w\w)(\W)?/d).indices);
    let groups = /(?<a>.)(?<b>.)(?<c>.)\k<c>\k<b>\k<a>/d.exec('abccba').indices.groups;
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
    assert.sameValue('\uD835\uDC01'.match(/./)[0].length, 1, 'The length of a single code unit match against "\uD835\uDC01" is 1 (without /u flag)');
    assert.sameValue('\uD835\uDC01'.match(/./)[0].length, 1, 'The length of a single code unit match against "\\u{1d401}" is 1 (without /u flag)');
    assert.sameValue('\uD835\uDC01'.match(/./)[0].length, 1, 'The length of a single code unit match against "\\ud835\\udc01" is 1 (without /u flag)');
    assert.compareArray([
        0,
        1
    ], '\uD835\uDC01'.match(/./d).indices[0], 'Indices for non-unicode match against "\uD835\uDC01" (without /u flag)');
    assert.compareArray([
        0,
        1
    ], '\uD835\uDC01'.match(/./d).indices[0], 'Indices for non-unicode match against "\\u{1d401}" (without /u flag)');
    assert.compareArray([
        0,
        1
    ], '\uD835\uDC01'.match(/./d).indices[0], 'Indices for non-unicode match against "\\ud835\\udc01" (without /u flag)');
    assert.compareArray([
        0,
        1
    ], '\uD835\uDC01'.match(/(?<a>.)/d).indices.groups.a, 'Indices for non-unicode match against "\uD835\uDC01" in groups.a (without /u flag)');
    assert.compareArray([
        0,
        1
    ], '\uD835\uDC01'.match(/(?<a>.)/d).indices.groups.a, 'Indices for non-unicode match against "\\u{1d401}" in groups.a (without /u flag)');
    assert.compareArray([
        0,
        1
    ], '\uD835\uDC01'.match(/(?<a>.)/d).indices.groups.a, 'Indices for non-unicode match against "\\ud835\\udc01" in groups.a (without /u flag)');
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