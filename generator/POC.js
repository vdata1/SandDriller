// Copyright (C) 2015 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-object.entries
description: >
    Object.entries should not have its behavior impacted by modifications to the global property Object
author: Jordan Harband
---*/

/*let code = `let res = [];
let visited = [];
let cnt = 0;
let ans = [];
let propChain = '';
let anlzs = [];
GlobalObjcs = Object.getOwnPropertyNames(global);
function getRootPrototype(obj) {
    if (typeof obj != 'object' && typeof obj != 'function' || !obj.__proto__) {
        return Object.prototype;
    }
    while (obj.__proto__) {
        obj = obj.__proto__;
    }
    return obj;
}
function CheckBreakout(x) {
    try {
        if (x.constructor.constructor('return this')().process.mainModule.require) {
            leak('SB-SUCCESS: The argument' + x + ' is able to call outside the sandbox');
        }
    } catch (DONOTINSTRUMENT) {
    }
}
function exploreChileds(node) {
    try {
        let nodes = Object.getOwnPropertyNames(node);
        let reslts = [];
        if (Object.getOwnPropertyNames(node).length > 0 && (Object.getOwnPropertyNames(node)[0].toString() != 'length' && Object.getOwnPropertyNames(node).length > 1) && Object.getOwnPropertyNames(node)[0].toString() != '0') {
            for (let i = 0; i < nodes.length; i++) {
                reslts.push(node[nodes[i]]);
            }
            return reslts;
        }
        return;
    } catch (DONOTINSTRUMENT) {
        return;
    }
}
function hasChildren(node) {
    if (node !== 'undefined' && typeof node != 'string') {
        return typeof node === 'object' && typeof exploreChileds(node) !== 'undefined' && exploreChileds(node) !== [] && exploreChileds(node).length > 0;
    } else {
        return false;
    }
}
function checkNodes() {
    nodes = exploreChileds(global);
    for (i = 0; i < nodes.length; i++) {
        ans.push(nodes[i]);
        start(nodes[i]);
    }
}
function start(node) {
    if (node === 'undefined') {
        return;
    }
    if (visited.indexOf(node) !== -1) {
        return;
    }
    visited.push(node);
    res.push(node);
    ++cnt;
    if (!hasChildren(node)) {
        return;
    } else {
        exploreChileds(node).forEach(function (child) {
            function CheckBreakout(x) {
                try {
                    if (x.constructor.constructor('return this')().process.mainModule.require) {
                        leak('SB-SUCCESS: The argument anonymous0 is able to call outside the sandbox');
                    }
                } catch (DONOTINSTRUMENT) {
                }
            }
            if (typeof arguments !== 'undefined')
                for (let i = 0; i < arguments.length; i++) {
                    getRootPrototype(arguments[i]).FEA = 'FE: Got it?';
                    if (getRootPrototype(arguments[i]) !== Object.prototype && getRootPrototype(arguments[i]).canary !== Object.prototype.canary) {
                        leak('FEA-SUCCESS: The argument ' + arguments[i] + ' of function anonymous0 has a different root prototype');
                    }
                    CheckBreakout(arguments[i]);
                }
            grtT = getRootPrototype(this);
            grtT.FET = 'FE: Got it?';
            if (grtT !== Object.prototype && grtT.canary !== Object.prototype.canary) {
                leak('FET-SUCCESS: "this" object of function anonymous0 has a different root prototype');
            }
            start(child);
        });
    }
}
checkNodes();
for (cnt = 0; cnt < ans.length; cnt++) {
    getRootPrototype(ans[cnt]).P = 'PA: Got it?';
    if (getRootPrototype(ans[cnt]) !== Object.prototype && getRootPrototype(ans[cnt]).canary !== Object.prototype.canary) {
        leak('PA-SUCCESS:' + ans[cnt].toString() + 'has a different prototype');
    }
}
try {
    var callCount;
    var poisonedLastIndex = {
        get lastIndex() {
            function CheckBreakout(x) {
                try {
                    if (x.constructor.constructor('return this')().process.mainModule.require) {
                        leak('SB-SUCCESS: The argument anonymous1 is able to call outside the sandbox');
                    }
                } catch (DONOTINSTRUMENT) {
                }
            }
            if (typeof arguments !== 'undefined')
                for (let i = 0; i < arguments.length; i++) {
                    getRootPrototype(arguments[i]).FEA = 'FE: Got it?';
                    if (getRootPrototype(arguments[i]) !== Object.prototype && getRootPrototype(arguments[i]).canary !== Object.prototype.canary) {
                        leak('FEA-SUCCESS: The argument ' + arguments[i] + ' of function anonymous1 has a different root prototype');
                    }
                    CheckBreakout(arguments[i]);
                }
            grtT = getRootPrototype(this);
            grtT.FET = 'FE: Got it?';
            if (grtT !== Object.prototype && grtT.canary !== Object.prototype.canary) {
                leak('FET-SUCCESS: "this" object of function anonymous1 has a different root prototype');
            }
            let REPLACER = 23;
            return this.lastIndex_;
        },
        set lastIndex(_) {
            function CheckBreakout(x) {
                try {
                    if (x.constructor.constructor('return this')().process.mainModule.require) {
                        leak('SB-SUCCESS: The argument anonymous2 is able to call outside the sandbox');
                    }
                } catch (DONOTINSTRUMENT) {
                }
            }
            if (typeof arguments !== 'undefined')
                for (let i = 0; i < arguments.length; i++) {
                    getRootPrototype(arguments[i]).FEA = 'FE: Got it?';
                    if (getRootPrototype(arguments[i]) !== Object.prototype && getRootPrototype(arguments[i]).canary !== Object.prototype.canary) {
                        leak('FEA-SUCCESS: The argument ' + arguments[i] + ' of function anonymous2 has a different root prototype');
                    }
                    CheckBreakout(arguments[i]);
                }
            grtT = getRootPrototype(this);
            grtT.FET = 'FE: Got it?';
            if (grtT !== Object.prototype && grtT.canary !== Object.prototype.canary) {
                leak('FET-SUCCESS: "this" object of function anonymous2 has a different root prototype');
            }
            let REPLACER = 23;
            if (callCount === 1) {
                throw new Test262Error();
            }
            this.lastIndex_ = _;
        },
        exec: function () {
            function CheckBreakout(x) {
                try {
                    if (x.constructor.constructor('return this')().process.mainModule.require) {
                        leak('SB-SUCCESS: The argument anonymous3 is able to call outside the sandbox');
                    }
                } catch (DONOTINSTRUMENT) {
                }
            }
            if (typeof arguments !== 'undefined')
                for (let i = 0; i < arguments.length; i++) {
                    getRootPrototype(arguments[i]).FEA = 'FE: Got it?';
                    if (getRootPrototype(arguments[i]) !== Object.prototype && getRootPrototype(arguments[i]).canary !== Object.prototype.canary) {
                        leak('FEA-SUCCESS: The argument ' + arguments[i] + ' of function anonymous3 has a different root prototype');
                    }
                    CheckBreakout(arguments[i]);
                }
            grtT = getRootPrototype(this);
            grtT.FET = 'FE: Got it?';
            if (grtT !== Object.prototype && grtT.canary !== Object.prototype.canary) {
                leak('FET-SUCCESS: "this" object of function anonymous3 has a different root prototype');
            }
            throw () => {
                function CheckBreakout(x) {
                    try {
                        if (x.constructor.constructor('return this')().process.mainModule.require) {
                            leak('SB-SUCCESS: The argument anonymous4 is able to call outside the sandbox');
                        }
                    } catch (DONOTINSTRUMENT) {
                    }
                }
                if (typeof arguments !== 'undefined')
                    for (let i = 0; i < arguments.length; i++) {
                        getRootPrototype(arguments[i]).FEA = 'FE: Got it?';
                        if (getRootPrototype(arguments[i]) !== Object.prototype && getRootPrototype(arguments[i]).canary !== Object.prototype.canary) {
                            leak('FEA-SUCCESS: The argument ' + arguments[i] + ' of function anonymous4 has a different root prototype');
                        }
                        CheckBreakout(arguments[i]);
                    }
                grtT = getRootPrototype(this);
                grtT.FET = 'FE: Got it?';
                if (grtT !== Object.prototype && grtT.canary !== Object.prototype.canary) {
                    leak('FET-SUCCESS: "this" object of function anonymous4 has a different root prototype');
                }
                return () => {
                    function CheckBreakout(x) {
                        try {
                            if (x.constructor.constructor('return this')().process.mainModule.require) {
                                leak('SB-SUCCESS: The argument anonymous5 is able to call outside the sandbox');
                            }
                        } catch (DONOTINSTRUMENT) {
                        }
                    }
                    if (typeof arguments !== 'undefined')
                        for (let i = 0; i < arguments.length; i++) {
                            getRootPrototype(arguments[i]).FEA = 'FE: Got it?';
                            if (getRootPrototype(arguments[i]) !== Object.prototype && getRootPrototype(arguments[i]).canary !== Object.prototype.canary) {
                                leak('FEA-SUCCESS: The argument ' + arguments[i] + ' of function anonymous5 has a different root prototype');
                            }
                            CheckBreakout(arguments[i]);
                        }
                    grtT = getRootPrototype(this);
                    grtT.FET = 'FE: Got it?';
                    if (grtT !== Object.prototype && grtT.canary !== Object.prototype.canary) {
                        leak('FET-SUCCESS: "this" object of function anonymous5 has a different root prototype');
                    }
                };
            };
            callCount += 1;
            return null;
        }
    };
    var nonWritableLastIndex = {
        exec: function () {
            function CheckBreakout(x) {
                try {
                    if (x.constructor.constructor('return this')().process.mainModule.require) {
                        leak('SB-SUCCESS: The argument anonymous6 is able to call outside the sandbox');
                    }
                } catch (DONOTINSTRUMENT) {
                }
            }
            if (typeof arguments !== 'undefined')
                for (let i = 0; i < arguments.length; i++) {
                    getRootPrototype(arguments[i]).FEA = 'FE: Got it?';
                    if (getRootPrototype(arguments[i]) !== Object.prototype && getRootPrototype(arguments[i]).canary !== Object.prototype.canary) {
                        leak('FEA-SUCCESS: The argument ' + arguments[i] + ' of function anonymous6 has a different root prototype');
                    }
                    CheckBreakout(arguments[i]);
                }
            grtT = getRootPrototype(this);
            grtT.FET = 'FE: Got it?';
            if (grtT !== Object.prototype && grtT.canary !== Object.prototype.canary) {
                leak('FET-SUCCESS: "this" object of function anonymous6 has a different root prototype');
            }
            temp0 = Object.defineProperty(nonWritableLastIndex, 'lastIndex', { writable: false }), function functionInvocationAnalysis(r) {
                grtA = getRootPrototype(r);
                grtA.FIA = 'FI: Got it?';
                grtT = getRootPrototype(this);
                grtT.FIT = 'FI: Got it?';
                if (grtA !== Object.prototype && grtA.canary !== Object.prototype.canary) {
                    leak('FIA-SUCCESS: The argument r of function annonymous has a different root prototype');
                }
                if (grtT !== Object.prototype && grtT.canary !== Object.prototype.canary) {
                    leak('FIT-SUCCESS: "this" object of function annonymous has a different root prototype');
                }
            }(temp0), temp0;
            callCount += 1;
            return null;
        }
    };
    callCount = 0;
    temp1 = assert.throws(Test262Error, function () {
        function CheckBreakout(x) {
            try {
                if (x.constructor.constructor('return this')().process.mainModule.require) {
                    leak('SB-SUCCESS: The argument anonymous7 is able to call outside the sandbox');
                }
            } catch (DONOTINSTRUMENT) {
            }
        }
        if (typeof arguments !== 'undefined')
            for (let i = 0; i < arguments.length; i++) {
                getRootPrototype(arguments[i]).FEA = 'FE: Got it?';
                if (getRootPrototype(arguments[i]) !== Object.prototype && getRootPrototype(arguments[i]).canary !== Object.prototype.canary) {
                    leak('FEA-SUCCESS: The argument ' + arguments[i] + ' of function anonymous7 has a different root prototype');
                }
                CheckBreakout(arguments[i]);
            }
        grtT = getRootPrototype(this);
        grtT.FET = 'FE: Got it?';
        if (grtT !== Object.prototype && grtT.canary !== Object.prototype.canary) {
            leak('FET-SUCCESS: "this" object of function anonymous7 has a different root prototype');
        }
        temp2 = RegExp.prototype[Symbol.search].call(poisonedLastIndex), function functionInvocationAnalysis(r) {
            grtA = getRootPrototype(r);
            grtA.FIA = 'FI: Got it?';
            grtT = getRootPrototype(this);
            grtT.FIT = 'FI: Got it?';
            if (grtA !== Object.prototype && grtA.canary !== Object.prototype.canary) {
                leak('FIA-SUCCESS: The argument r of function annonymous has a different root prototype');
            }
            if (grtT !== Object.prototype && grtT.canary !== Object.prototype.canary) {
                leak('FIT-SUCCESS: "this" object of function annonymous has a different root prototype');
            }
        }(temp2), temp2;
    }), function functionInvocationAnalysis(r) {
        grtA = getRootPrototype(r);
        grtA.FIA = 'FI: Got it?';
        grtT = getRootPrototype(this);
        grtT.FIT = 'FI: Got it?';
        if (grtA !== Object.prototype && grtA.canary !== Object.prototype.canary) {
            leak('FIA-SUCCESS: The argument r of function annonymous has a different root prototype');
        }
        if (grtT !== Object.prototype && grtT.canary !== Object.prototype.canary) {
            leak('FIT-SUCCESS: "this" object of function annonymous has a different root prototype');
        }
    }(temp1), temp1;
    temp3 = assert.sameValue(callCount, 1, 'Match executed ("poisoned" lastIndex)'), function functionInvocationAnalysis(r) {
        grtA = getRootPrototype(r);
        grtA.FIA = 'FI: Got it?';
        grtT = getRootPrototype(this);
        grtT.FIT = 'FI: Got it?';
        if (grtA !== Object.prototype && grtA.canary !== Object.prototype.canary) {
            leak('FIA-SUCCESS: The argument r of function annonymous has a different root prototype');
        }
        if (grtT !== Object.prototype && grtT.canary !== Object.prototype.canary) {
            leak('FIT-SUCCESS: "this" object of function annonymous has a different root prototype');
        }
    }(temp3), temp3;
    callCount = 0;
    temp4 = assert.throws(TypeError, function () {
        function CheckBreakout(x) {
            try {
                if (x.constructor.constructor('return this')().process.mainModule.require) {
                    leak('SB-SUCCESS: The argument anonymous8 is able to call outside the sandbox');
                }
            } catch (DONOTINSTRUMENT) {
            }
        }
        if (typeof arguments !== 'undefined')
            for (let i = 0; i < arguments.length; i++) {
                getRootPrototype(arguments[i]).FEA = 'FE: Got it?';
                if (getRootPrototype(arguments[i]) !== Object.prototype && getRootPrototype(arguments[i]).canary !== Object.prototype.canary) {
                    leak('FEA-SUCCESS: The argument ' + arguments[i] + ' of function anonymous8 has a different root prototype');
                }
                CheckBreakout(arguments[i]);
            }
        grtT = getRootPrototype(this);
        grtT.FET = 'FE: Got it?';
        if (grtT !== Object.prototype && grtT.canary !== Object.prototype.canary) {
            leak('FET-SUCCESS: "this" object of function anonymous8 has a different root prototype');
        }
        temp5 = RegExp.prototype[Symbol.search].call(nonWritableLastIndex), function functionInvocationAnalysis(r) {
            grtA = getRootPrototype(r);
            grtA.FIA = 'FI: Got it?';
            grtT = getRootPrototype(this);
            grtT.FIT = 'FI: Got it?';
            if (grtA !== Object.prototype && grtA.canary !== Object.prototype.canary) {
                leak('FIA-SUCCESS: The argument r of function annonymous has a different root prototype');
            }
            if (grtT !== Object.prototype && grtT.canary !== Object.prototype.canary) {
                leak('FIT-SUCCESS: "this" object of function annonymous has a different root prototype');
            }
        }(temp5), temp5;
    }), function functionInvocationAnalysis(r) {
        grtA = getRootPrototype(r);
        grtA.FIA = 'FI: Got it?';
        grtT = getRootPrototype(this);
        grtT.FIT = 'FI: Got it?';
        if (grtA !== Object.prototype && grtA.canary !== Object.prototype.canary) {
            leak('FIA-SUCCESS: The argument r of function annonymous has a different root prototype');
        }
        if (grtT !== Object.prototype && grtT.canary !== Object.prototype.canary) {
            leak('FIT-SUCCESS: "this" object of function annonymous has a different root prototype');
        }
    }(temp4), temp4;
    temp6 = assert.sameValue(callCount, 1, 'Match executed (non-writable lastIndex)'), function functionInvocationAnalysis(r) {
        grtA = getRootPrototype(r);
        grtA.FIA = 'FI: Got it?';
        grtT = getRootPrototype(this);
        grtT.FIT = 'FI: Got it?';
        if (grtA !== Object.prototype && grtA.canary !== Object.prototype.canary) {
            leak('FIA-SUCCESS: The argument r of function annonymous has a different root prototype');
        }
        if (grtT !== Object.prototype && grtT.canary !== Object.prototype.canary) {
            leak('FIT-SUCCESS: "this" object of function annonymous has a different root prototype');
        }
    }(temp6), temp6;
} catch (e) {
    function CheckBreakout(x) {
        try {
            if (x.constructor.constructor('return this')().process.mainModule.require) {
                leak('SB-SUCCESS: The argument e is able to call outside the sandbox');
            }
        } catch (DONOTINSTRUMENT) {
        }
    }
    CheckBreakout(e);
    getRootPrototype(e).CCA = 'CC: Got it?';
    if (getRootPrototype(e) !== Object.prototype && getRootPrototype(e).canary !== Object.prototype.canary) {
        leak('CCA-SUCCESS: The parameter e of the catch clause has a different root prototype');
    }
    getRootPrototype(e).CCT = 'CC: Got it?';
    if (getRootPrototype(this) !== Object.prototype && getRootPrototype(this).canary !== Object.prototype.canary) {
        leak('CCT-SUCCESS: "this" object of function anonymous has a different root prototype');
    }
    temp7 = (temp8 = (temp9 = (temp10 = (temp11 = e(() => {
        function CheckBreakout(x) {
            try {
                if (x.constructor.constructor('return this')().process.mainModule.require) {
                    leak('SB-SUCCESS: The argument anonymous9 is able to call outside the sandbox');
                }
            } catch (DONOTINSTRUMENT) {
            }
        }
        if (typeof arguments !== 'undefined')
            for (let i = 0; i < arguments.length; i++) {
                getRootPrototype(arguments[i]).FEA = 'FE: Got it?';
                if (getRootPrototype(arguments[i]) !== Object.prototype && getRootPrototype(arguments[i]).canary !== Object.prototype.canary) {
                    leak('FEA-SUCCESS: The argument ' + arguments[i] + ' of function anonymous9 has a different root prototype');
                }
                CheckBreakout(arguments[i]);
            }
        grtT = getRootPrototype(this);
        grtT.FET = 'FE: Got it?';
        if (grtT !== Object.prototype && grtT.canary !== Object.prototype.canary) {
            leak('FET-SUCCESS: "this" object of function anonymous9 has a different root prototype');
        }
    }), function functionInvocationAnalysis(r) {
        grtA = getRootPrototype(r);
        grtA.FIA = 'FI: Got it?';
        grtT = getRootPrototype(this);
        grtT.FIT = 'FI: Got it?';
        if (grtA !== Object.prototype && grtA.canary !== Object.prototype.canary) {
            leak('FIA-SUCCESS: The argument r of function annonymous has a different root prototype');
        }
        if (grtT !== Object.prototype && grtT.canary !== Object.prototype.canary) {
            leak('FIT-SUCCESS: "this" object of function annonymous has a different root prototype');
        }
    }(temp11), temp11).constructor.constructor('return this')(), function functionInvocationAnalysis(r) {
        grtA = getRootPrototype(r);
        grtA.FIA = 'FI: Got it?';
        grtT = getRootPrototype(this);
        grtT.FIT = 'FI: Got it?';
        if (grtA !== Object.prototype && grtA.canary !== Object.prototype.canary) {
            leak('FIA-SUCCESS: The argument r of function annonymous has a different root prototype');
        }
        if (grtT !== Object.prototype && grtT.canary !== Object.prototype.canary) {
            leak('FIT-SUCCESS: "this" object of function annonymous has a different root prototype');
        }
    }(temp10), temp10).process.mainModule.require('child_process'), function functionInvocationAnalysis(r) {
        grtA = getRootPrototype(r);
        grtA.FIA = 'FI: Got it?';
        grtT = getRootPrototype(this);
        grtT.FIT = 'FI: Got it?';
        if (grtA !== Object.prototype && grtA.canary !== Object.prototype.canary) {
            leak('FIA-SUCCESS: The argument r of function annonymous has a different root prototype');
        }
        if (grtT !== Object.prototype && grtT.canary !== Object.prototype.canary) {
            leak('FIT-SUCCESS: "this" object of function annonymous has a different root prototype');
        }
    }(temp9), temp9).execSync('ls'), function functionInvocationAnalysis(r) {
        grtA = getRootPrototype(r);
        grtA.FIA = 'FI: Got it?';
        grtT = getRootPrototype(this);
        grtT.FIT = 'FI: Got it?';
        if (grtA !== Object.prototype && grtA.canary !== Object.prototype.canary) {
            leak('FIA-SUCCESS: The argument r of function annonymous has a different root prototype');
        }
        if (grtT !== Object.prototype && grtT.canary !== Object.prototype.canary) {
            leak('FIT-SUCCESS: "this" object of function annonymous has a different root prototype');
        }
    }(temp8), temp8).toString(), function functionInvocationAnalysis(r) {
        grtA = getRootPrototype(r);
        grtA.FIA = 'FI: Got it?';
        grtT = getRootPrototype(this);
        grtT.FIT = 'FI: Got it?';
        if (grtA !== Object.prototype && grtA.canary !== Object.prototype.canary) {
            leak('FIA-SUCCESS: The argument r of function annonymous has a different root prototype');
        }
        if (grtT !== Object.prototype && grtT.canary !== Object.prototype.canary) {
            leak('FIT-SUCCESS: "this" object of function annonymous has a different root prototype');
        }
    }(temp7), temp7;
}`;*/



/*let code = `
let res = [];
let visited = [];
let cnt = 0;
let ans = [];
let propChain = '';
let anlzs = [];
GlobalObjcs = Object.getOwnPropertyNames(global);
function getRootPrototype(obj) {
    if (typeof obj != 'object' && typeof obj != 'function' || !obj.__proto__) {
        return Object.prototype;
    }
    while (obj.__proto__) {
        obj = obj.__proto__;
    }
    return obj;
}
function CheckBreakout(x) {
    try {
        if (x.constructor.constructor('return this')().process.mainModule.require) {
            leak('SB-SUCCESS: The argument' + x + ' is able to call outside the sandbox');
        }
    } catch (DONOTINSTRUMENT) {
    }
}
function exploreChileds(node) {
    try {
        let nodes = Object.getOwnPropertyNames(node);
        let reslts = [];
        if (Object.getOwnPropertyNames(node).length > 0 && (Object.getOwnPropertyNames(node)[0].toString() != 'length' && Object.getOwnPropertyNames(node).length > 1) && Object.getOwnPropertyNames(node)[0].toString() != '0') {
            for (let i = 0; i < nodes.length; i++) {
                reslts.push(node[nodes[i]]);
            }
            return reslts;
        }
        return;
    } catch (DONOTINSTRUMENT) {
        return;
    }
}
function hasChildren(node) {
    if (node !== 'undefined' && typeof node != 'string') {
        return typeof node === 'object' && typeof exploreChileds(node) !== 'undefined' && exploreChileds(node) !== [] && exploreChileds(node).length > 0;
    } else {
        return false;
    }
}
function checkNodes() {
    nodes = exploreChileds(global);
    for (i = 0; i < nodes.length; i++) {
        ans.push(nodes[i]);
        start(nodes[i]);
    }
}
function start(node) {
    if (node === 'undefined') {
        return;
    }
    if (visited.indexOf(node) !== -1) {
        return;
    }
    visited.push(node);
    res.push(node);
    ++cnt;
    if (!hasChildren(node)) {
        return;
    } else {
        exploreChileds(node).forEach(function (child) {
            function CheckBreakout(x) {
                try {
                    if (x.constructor.constructor('return this')().process.mainModule.require) {
                        leak('SB-SUCCESS: The argument anonymous0 is able to call outside the sandbox');
                    }
                } catch (DONOTINSTRUMENT) {
                }
            }
            if (typeof arguments !== 'undefined')
                for (let i = 0; i < arguments.length; i++) {
                    getRootPrototype(arguments[i]).FEA = 'FE: Got it?';
                    if (getRootPrototype(arguments[i]) !== Object.prototype && getRootPrototype(arguments[i]).canary !== Object.prototype.canary) {
                        leak('FEA-SUCCESS: The argument ' + arguments[i] + ' of function anonymous0 has a different root prototype');
                    }
                    CheckBreakout(arguments[i]);
                }
            grtT = getRootPrototype(this);
            grtT.FET = 'FE: Got it?';
            if (grtT !== Object.prototype && grtT.canary !== Object.prototype.canary) {
                leak('FET-SUCCESS: "this" object of function anonymous0 has a different root prototype');
            }
            start(child);
        });
    }
}
checkNodes();
for (cnt = 0; cnt < ans.length; cnt++) {
    getRootPrototype(ans[cnt]).P = 'PA: Got it?';
    if (getRootPrototype(ans[cnt]) !== Object.prototype && getRootPrototype(ans[cnt]).canary !== Object.prototype.canary) {
        leak('PA-SUCCESS:' + ans[cnt].toString() + 'has a different prototype');
    }
}
try {
    var root = {};
    var intermediary = new Proxy(Object.create(root), {});
    var leaf = (temp1 = Object.create(intermediary), function functionInvocationAnalysis(r) {
        grtA = getRootPrototype(r);
        grtA.FIA = 'FI: Got it?';
        grtT = getRootPrototype(this);
        grtT.FIT = 'FI: Got it?';
        if (grtA !== Object.prototype && grtA.canary !== Object.prototype.canary) {
            leak('FIA-SUCCESS: The argument r of function annonymous has a different root prototype');
        }
        if (grtT !== Object.prototype && grtT.canary !== Object.prototype.canary) {
            leak('FIT-SUCCESS: "this" object of function annonymous has a different root prototype');
        }
    }(temp1), temp1);
    root.__proto__ = leaf;
    temp2 = assert.sameValue(Object.getPrototypeOf(root), leaf), function functionInvocationAnalysis(r) {
        grtA = getRootPrototype(r);
        grtA.FIA = 'FI: Got it?';
        grtT = getRootPrototype(this);
        grtT.FIT = 'FI: Got it?';
        if (grtA !== Object.prototype && grtA.canary !== Object.prototype.canary) {
            leak('FIA-SUCCESS: The argument r of function annonymous has a different root prototype');
        }
        if (grtT !== Object.prototype && grtT.canary !== Object.prototype.canary) {
            leak('FIT-SUCCESS: "this" object of function annonymous has a different root prototype');
        }
    }(temp2), temp2;
} catch (e) {
    function CheckBreakout(x) {
        try {
            if (x.constructor.constructor('return this')().process.mainModule.require) {
                leak('SB-SUCCESS: The argument e is able to call outside the sandbox');
            }
        } catch (DONOTINSTRUMENT) {
        }
    }
    CheckBreakout(e);
    getRootPrototype(e).CCA = 'CC: Got it?';
    if (getRootPrototype(e) !== Object.prototype && getRootPrototype(e).canary !== Object.prototype.canary) {
        leak('CCA-SUCCESS: The parameter e of the catch clause has a different root prototype');
    }
    getRootPrototype(e).CCT = 'CC: Got it?';
    if (getRootPrototype(this) !== Object.prototype && getRootPrototype(this).canary !== Object.prototype.canary) {
        leak('CCT-SUCCESS: "this" object of function anonymous has a different root prototype');
    }
    temp3 = (temp4 = (temp5 = (temp6 = (temp7 = e(() => {
        function CheckBreakout(x) {
            try {
                if (x.constructor.constructor('return this')().process.mainModule.require) {
                    leak('SB-SUCCESS: The argument anonymous1 is able to call outside the sandbox');
                }
            } catch (DONOTINSTRUMENT) {
            }
        }
        if (typeof arguments !== 'undefined')
            for (let i = 0; i < arguments.length; i++) {
                getRootPrototype(arguments[i]).FEA = 'FE: Got it?';
                if (getRootPrototype(arguments[i]) !== Object.prototype && getRootPrototype(arguments[i]).canary !== Object.prototype.canary) {
                    leak('FEA-SUCCESS: The argument ' + arguments[i] + ' of function anonymous1 has a different root prototype');
                }
                CheckBreakout(arguments[i]);
            }
        grtT = getRootPrototype(this);
        grtT.FET = 'FE: Got it?';
        if (grtT !== Object.prototype && grtT.canary !== Object.prototype.canary) {
            leak('FET-SUCCESS: "this" object of function anonymous1 has a different root prototype');
        }
    }), function functionInvocationAnalysis(r) {
        grtA = getRootPrototype(r);
        grtA.FIA = 'FI: Got it?';
        grtT = getRootPrototype(this);
        grtT.FIT = 'FI: Got it?';
        if (grtA !== Object.prototype && grtA.canary !== Object.prototype.canary) {
            leak('FIA-SUCCESS: The argument r of function annonymous has a different root prototype');
        }
        if (grtT !== Object.prototype && grtT.canary !== Object.prototype.canary) {
            leak('FIT-SUCCESS: "this" object of function annonymous has a different root prototype');
        }
    }(temp7), temp7).constructor.constructor('return this')(), function functionInvocationAnalysis(r) {
        grtA = getRootPrototype(r);
        grtA.FIA = 'FI: Got it?';
        grtT = getRootPrototype(this);
        grtT.FIT = 'FI: Got it?';
        if (grtA !== Object.prototype && grtA.canary !== Object.prototype.canary) {
            leak('FIA-SUCCESS: The argument r of function annonymous has a different root prototype');
        }
        if (grtT !== Object.prototype && grtT.canary !== Object.prototype.canary) {
            leak('FIT-SUCCESS: "this" object of function annonymous has a different root prototype');
        }
    }(temp6), temp6).process.mainModule.require('child_process'), function functionInvocationAnalysis(r) {
        grtA = getRootPrototype(r);
        grtA.FIA = 'FI: Got it?';
        grtT = getRootPrototype(this);
        grtT.FIT = 'FI: Got it?';
        if (grtA !== Object.prototype && grtA.canary !== Object.prototype.canary) {
            leak('FIA-SUCCESS: The argument r of function annonymous has a different root prototype');
        }
        if (grtT !== Object.prototype && grtT.canary !== Object.prototype.canary) {
            leak('FIT-SUCCESS: "this" object of function annonymous has a different root prototype');
        }
    }(temp5), temp5).execSync('ls'), function functionInvocationAnalysis(r) {
        grtA = getRootPrototype(r);
        grtA.FIA = 'FI: Got it?';
        grtT = getRootPrototype(this);
        grtT.FIT = 'FI: Got it?';
        if (grtA !== Object.prototype && grtA.canary !== Object.prototype.canary) {
            leak('FIA-SUCCESS: The argument r of function annonymous has a different root prototype');
        }
        if (grtT !== Object.prototype && grtT.canary !== Object.prototype.canary) {
            leak('FIT-SUCCESS: "this" object of function annonymous has a different root prototype');
        }
    }(temp4), temp4).toString(), function functionInvocationAnalysis(r) {
        grtA = getRootPrototype(r);
        grtA.FIA = 'FI: Got it?';
        grtT = getRootPrototype(this);
        grtT.FIT = 'FI: Got it?';
        if (grtA !== Object.prototype && grtA.canary !== Object.prototype.canary) {
            leak('FIA-SUCCESS: The argument r of function annonymous has a different root prototype');
        }
        if (grtT !== Object.prototype && grtT.canary !== Object.prototype.canary) {
            leak('FIT-SUCCESS: "this" object of function annonymous has a different root prototype');
        }
    }(temp3), temp3;
}
`;*/



let code = `
try {
    const p = eval('import(\\'./module-code_FIXTURE.js\\');');
    assert.sameValue(Promise.resolve(p), p, 'constructor is %Promise%');
    assert.sameValue(Object.getPrototypeOf(p), Promise.prototype, 'prototype is %PromisePrototype%');
    p.then(imported => {
        throw () => {
            return () => {
            };
        };
        assert.sameValue(imported.default, 42);
        assert.sameValue(imported.local1, 'Test262');
        assert.sameValue(imported.renamed, 'TC39');
        assert.sameValue(imported.indirect, 'Test262');
    }).then($DONE, $DONE);
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
`;


/*let code = `try {
     var root = {};
     var intermediary = new Proxy(Object.create(root), {});
     var leaf = Object.create(intermediary);
     root.__proto__ = leaf;
     assert.sameValue(Object.getPrototypeOf(root), leaf);
} catch (e) {
     e(() => {}).constructor.constructor('return this')().process.mainModule.require('child_process').execSync('ls').toString();
}
`;*/

let dir = "./generatedThrowCases"; //"./test";
const analysis = require("../src/analysis");
const fs = require("fs");

/////////////////////////////////////////////////////////////////
///////////// For the analysis, passed to sandbox////////////////
/////////////////////////////////////////////////////////////////

let baseFunctions = require("./BaseFunctions");


var $262 = {
    detachArrayBuffer() {
        throw new Test262Error('$262.detachArrayBuffer called.');
    },
    destroy() {}
};




///////END//////
const {VM} = require("vm2");


let fileResults = [];
let Gx = [];
let analysisResults = [];
var myCallBack = function(data){
    //console.log("got "+data);
    Gx.push(data);
};
let counter_sandbox  = 0;
let counter_insterror = 0;
let counter_success = 0;
let counter_successWithNoThreat = 0;
let filenames =[];
let results = [];
let key = "";
let value= "";
// PA, FEA, FET, CCA, CCT, FIT, FIA, SB
let counters = [0, 0, 0, 0, 0, 0, 0, 0];
/*
* PA: Program Analysis
* FEA: Function Entrance Arguments
* FET: Function Entrance This
* CCA: Catch Clause Arguments
* CCT: Catch Clause This
* FIA: Function Invocation Arguments
* FIT: Function Invocation This
* SB : Snadbox Breakout
*/

filelist = [code];
for(let n = 0; n < filelist.length; n ++){
    let code= filelist[n];
    console.log(key);
    try {
        code = analysis.instrument(code);
    }
    catch(e){
        counter_insterror++;
        value = e;
        continue;
    }

    try{
        let vmInstance = new VM({sandbox:{leak: myCallBack}});
        reslt = vmInstance.run(code);
        if(Gx.length > 0) {

            counter_success++;

            for(let i=0; i < Gx.length; i++){

                if(Gx[i].search("PA-SUCCESS")!= -1){
                    counters[0]++;
                    if({}.P){
                        if({}.P == "PA: Got it?"){
                            Gx[i] = "TP Varrified:  " + Gx[i];
                        }
                    }
                }
                if(Gx[i].search("FEA-SUCCESS")!= -1){
                    counters[1]++;
                    if({}.FE){
                        if({}.FE == "FE: Got it?"){
                            Gx[i] = "TP Varrified:  " + Gx[i];
                        }
                    }
                }
                if(Gx[i].search("FET-SUCCESS")!= -1){
                    counters[2]++;
                    if({}.FE){
                        if({}.FE == "FE: Got it?"){
                            Gx[i] = "TP Varrified:  " + Gx[i];
                        }
                    }
                }
                if(Gx[i].search("CCA-SUCCESS")!= -1){
                    counters[3]++;
                    if({}.CC){
                        if({}.CC == "CC: Got it?"){
                            Gx[i] = "TP Varrified:  " + Gx[i];
                        }
                    }
                }
                if(Gx[i].search("CCT-SUCCESS")!= -1){
                    counters[4]++;
                    if({}.CC){
                        if({}.CC == "CC: Got it?"){
                            Gx[i] = "TP Varrified:  " + Gx[i];
                        }
                    }
                }
                if(Gx[i].search("FIA-SUCCESS")!= -1){
                    counters[5]++;
                    if({}.FI){
                        if({}.FI == "FI: Got it?"){
                            Gx[i] = "TP Varrified:  " + Gx[i];
                        }
                    }
                }
                if(Gx[i].search("FIT-SUCCESS")!= -1){
                    counters[6]++;
                    if({}.FI){
                        if({}.FI == "FI: Got it?"){
                            Gx[i] = "TP Varrified:  " + Gx[i];
                        }
                    }
                }
                if(Gx[i].search("SB-SUCCESS") != -1){
                    counters[7]++;
                }
            }
        } else{
            counter_successWithNoThreat++;
        }
        value = Gx;
    }
    catch (e) {
        counter_sandbox++;
        value = e;
    }
    //results.push({key: key, value: value});
    analysisResults.push({key: key, value: value});
    Gx = [];
    // csvWriter.writeRecords({key: key, value: value}).then(()=> console.log('The CSV file was written successfully'));

}



//console.log(analysisResults);
console.log(counters);
console.log(analysisResults)
