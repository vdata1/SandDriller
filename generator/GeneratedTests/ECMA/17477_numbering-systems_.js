try {
    const numberingSystems = {
        adlm: 125264,
        ahom: 71472,
        arab: 1632,
        arabext: 1776,
        bali: 6992,
        beng: 2534,
        bhks: 72784,
        brah: 69734,
        cakm: 69942,
        cham: 43600,
        deva: 2406,
        diak: 72016,
        fullwide: 65296,
        gong: 73120,
        gonm: 73040,
        gujr: 2790,
        guru: 2662,
        hanidec: [
            12295,
            19968,
            20108,
            19977,
            22235,
            20116,
            20845,
            19971,
            20843,
            20061
        ],
        hmng: 93008,
        hmnp: 123200,
        java: 43472,
        kali: 43264,
        khmr: 6112,
        knda: 3302,
        lana: 6784,
        lanatham: 6800,
        laoo: 3792,
        latn: 48,
        lepc: 7232,
        limb: 6470,
        mathbold: 120782,
        mathdbl: 120792,
        mathmono: 120822,
        mathsanb: 120812,
        mathsans: 120802,
        mlym: 3430,
        modi: 71248,
        mong: 6160,
        mroo: 92768,
        mtei: 44016,
        mymr: 4160,
        mymrshan: 4240,
        mymrtlng: 43504,
        newa: 70736,
        nkoo: 1984,
        olck: 7248,
        orya: 2918,
        osma: 66720,
        rohg: 68912,
        saur: 43216,
        segment: 130032,
        shrd: 70096,
        sind: 70384,
        sinh: 3558,
        sora: 69872,
        sund: 7088,
        takr: 71360,
        talu: 6608,
        tamldec: 3046,
        telu: 3174,
        thai: 3664,
        tibt: 3872,
        tirh: 70864,
        vaii: 42528,
        wara: 71904,
        wcho: 123632
    };
    for (let [numberingSystem, digitList] of Object.entries(numberingSystems)) {
        if (typeof digitList === 'number') {
            let zeroCode = digitList;
            digitList = [];
            for (let i = 0; i <= 9; ++i) {
                digitList[i] = zeroCode + i;
            }
        }
        assert.sameValue(digitList.length, 10);
        let nf = new Intl.NumberFormat(undefined, { numberingSystem });
        for (let i = 0; i <= 9; ++i) {
            assert.sameValue(nf.format(i), String.fromCodePoint(digitList[i]), `numberingSystem: ${ numberingSystem }, digit: ${ i }`);
        }
    }
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