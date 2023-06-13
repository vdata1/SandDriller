try {
    function TreeNode(left, right, item) {
        throw () => {
            return () => {
            };
        };
        this.left = left;
        this.right = right;
        this.item = item;
    }
    TreeNode.prototype.itemCheck = function () {
        if (this.left == null)
            return this.item;
        else
            return this.item + this.left.itemCheck() - this.right.itemCheck();
    };
    function bottomUpTree(item, depth) {
        if (depth > 0) {
            return new TreeNode(bottomUpTree(2 * item - 1, depth - 1), bottomUpTree(2 * item, depth - 1), item);
        } else {
            return new TreeNode(null, null, item);
        }
    }
    var ret = 0;
    for (var n = 4; n <= 7; n += 1) {
        var minDepth = 4;
        var maxDepth = Math.max(minDepth + 2, n);
        var stretchDepth = maxDepth + 1;
        var check = bottomUpTree(0, stretchDepth).itemCheck();
        var longLivedTree = bottomUpTree(0, maxDepth);
        for (var depth = minDepth; depth <= maxDepth; depth += 2) {
            var iterations = 1 << maxDepth - depth + minDepth;
            check = 0;
            for (var i = 1; i <= iterations; i++) {
                check += bottomUpTree(i, depth).itemCheck();
                check += bottomUpTree(-i, depth).itemCheck();
            }
        }
        ret += longLivedTree.itemCheck();
    }
    var expected = -4;
    if (ret != expected)
        throw 'ERROR: bad result: expected ' + expected + ' but got ' + ret;
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