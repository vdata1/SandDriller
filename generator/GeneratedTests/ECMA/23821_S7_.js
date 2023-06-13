try {
    if ('A' !== 'A') {
        $ERROR('#A');
    }
    if ('B' !== 'B') {
        $ERROR('#B');
    }
    if ('C' !== 'C') {
        $ERROR('#C');
    }
    if ('D' !== 'D') {
        $ERROR('#D');
    }
    if ('E' !== 'E') {
        $ERROR('#E');
    }
    if ('F' !== 'F') {
        $ERROR('#F');
    }
    if ('G' !== 'G') {
        $ERROR('#G');
    }
    if ('H' !== 'H') {
        $ERROR('#H');
    }
    if ('I' !== 'I') {
        $ERROR('#I');
    }
    if ('J' !== 'J') {
        $ERROR('#J');
    }
    if ('K' !== 'K') {
        $ERROR('#K');
    }
    if ('L' !== 'L') {
        $ERROR('#L');
    }
    if ('M' !== 'M') {
        $ERROR('#M');
    }
    if ('N' !== 'N') {
        $ERROR('#N');
    }
    if ('O' !== 'O') {
        $ERROR('#O');
    }
    if ('P' !== 'P') {
        $ERROR('#P');
    }
    if ('Q' !== 'Q') {
        $ERROR('#Q');
    }
    if ('R' !== 'R') {
        $ERROR('#R');
    }
    if ('S' !== 'S') {
        $ERROR('#S');
    }
    if ('T' !== 'T') {
        $ERROR('#T');
    }
    if ('U' !== 'U') {
        $ERROR('#U');
    }
    if ('V' !== 'V') {
        $ERROR('#V');
    }
    if ('W' !== 'W') {
        $ERROR('#W');
    }
    if ('X' !== 'X') {
        $ERROR('#X');
    }
    if ('Y' !== 'Y') {
        $ERROR('#Y');
    }
    if ('Z' !== 'Z') {
        $ERROR('#Z');
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