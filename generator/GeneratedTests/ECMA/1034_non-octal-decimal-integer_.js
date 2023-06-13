try {
    assert.sameValue(8, 8, '08');
    assert.sameValue(9, 9, '09');
    assert.sameValue(8, 8, '008');
    assert.sameValue(18, 18, '018');
    assert.sameValue(28, 28, '028');
    assert.sameValue(38, 38, '038');
    assert.sameValue(48, 48, '048');
    assert.sameValue(58, 58, '058');
    assert.sameValue(68, 68, '068');
    assert.sameValue(78, 78, '078');
    assert.sameValue(88, 88, '088');
    assert.sameValue(98, 98, '098');
    assert.sameValue(708, 708, '708');
    assert.sameValue(718, 718, '718');
    assert.sameValue(728, 728, '728');
    assert.sameValue(738, 738, '738');
    assert.sameValue(748, 748, '748');
    assert.sameValue(758, 758, '758');
    assert.sameValue(768, 768, '768');
    assert.sameValue(778, 778, '778');
    assert.sameValue(788, 788, '788');
    assert.sameValue(798, 798, '798');
    assert.sameValue(9, 9, '009');
    assert.sameValue(19, 19, '019');
    assert.sameValue(29, 29, '029');
    assert.sameValue(39, 39, '039');
    assert.sameValue(49, 49, '049');
    assert.sameValue(59, 59, '059');
    assert.sameValue(69, 69, '069');
    assert.sameValue(79, 79, '079');
    assert.sameValue(89, 89, '089');
    assert.sameValue(99, 99, '099');
    assert.sameValue(709, 709, '0709');
    assert.sameValue(719, 719, '0719');
    assert.sameValue(729, 729, '0729');
    assert.sameValue(739, 739, '0739');
    assert.sameValue(749, 749, '0749');
    assert.sameValue(759, 759, '0759');
    assert.sameValue(769, 769, '0769');
    assert.sameValue(779, 779, '0779');
    assert.sameValue(789, 789, '0789');
    assert.sameValue(799, 799, '0799');
    assert.sameValue(80, 80, '080');
    assert.sameValue(81, 81, '081');
    assert.sameValue(82, 82, '082');
    assert.sameValue(83, 83, '083');
    assert.sameValue(84, 84, '084');
    assert.sameValue(85, 85, '085');
    assert.sameValue(86, 86, '086');
    assert.sameValue(87, 87, '087');
    assert.sameValue(88, 88, '088');
    assert.sameValue(89, 89, '089');
    assert.sameValue(780, 780, '0780');
    assert.sameValue(781, 781, '0781');
    assert.sameValue(782, 782, '0782');
    assert.sameValue(783, 783, '0783');
    assert.sameValue(784, 784, '0784');
    assert.sameValue(785, 785, '0785');
    assert.sameValue(786, 786, '0786');
    assert.sameValue(787, 787, '0787');
    assert.sameValue(788, 788, '0788');
    assert.sameValue(789, 789, '0789');
    assert.sameValue(90, 90, '090');
    assert.sameValue(91, 91, '091');
    assert.sameValue(92, 92, '092');
    assert.sameValue(93, 93, '093');
    assert.sameValue(94, 94, '094');
    assert.sameValue(95, 95, '095');
    assert.sameValue(96, 96, '096');
    assert.sameValue(97, 97, '097');
    assert.sameValue(98, 98, '098');
    assert.sameValue(99, 99, '099');
    assert.sameValue(790, 790, '0790');
    assert.sameValue(791, 791, '0791');
    assert.sameValue(792, 792, '0792');
    assert.sameValue(793, 793, '0793');
    assert.sameValue(794, 794, '0794');
    assert.sameValue(795, 795, '0795');
    assert.sameValue(796, 796, '0796');
    assert.sameValue(797, 797, '0797');
    assert.sameValue(798, 798, '0798');
    assert.sameValue(799, 799, '0799');
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