try {
    var PI = 3.141592653589793;
    var SOLAR_MASS = 4 * PI * PI;
    var DAYS_PER_YEAR = 365.24;
    function Body(x, y, z, vx, vy, vz, mass) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.vx = vx;
        this.vy = vy;
        this.vz = vz;
        this.mass = mass;
    }
    Body.prototype.offsetMomentum = function (px, py, pz) {
        this.vx = -px / SOLAR_MASS;
        this.vy = -py / SOLAR_MASS;
        this.vz = -pz / SOLAR_MASS;
        return this;
    };
    function Jupiter() {
        return new Body(4.841431442464721, -1.1603200440274284, -0.10362204447112311, 0.001660076642744037 * DAYS_PER_YEAR, 0.007699011184197404 * DAYS_PER_YEAR, -0.0000690460016972063 * DAYS_PER_YEAR, 0.0009547919384243266 * SOLAR_MASS);
    }
    function Saturn() {
        return new Body(8.34336671824458, 4.124798564124305, -0.4035234171143214, -0.002767425107268624 * DAYS_PER_YEAR, 0.004998528012349172 * DAYS_PER_YEAR, 0.000023041729757376393 * DAYS_PER_YEAR, 0.0002858859806661308 * SOLAR_MASS);
    }
    function Uranus() {
        return new Body(12.894369562139131, -15.111151401698631, -0.22330757889265573, 0.002964601375647616 * DAYS_PER_YEAR, 0.0023784717395948095 * DAYS_PER_YEAR, -0.000029658956854023756 * DAYS_PER_YEAR, 0.00004366244043351563 * SOLAR_MASS);
    }
    function Neptune() {
        return new Body(15.379697114850917, -25.919314609987964, 0.17925877295037118, 0.0026806777249038932 * DAYS_PER_YEAR, 0.001628241700382423 * DAYS_PER_YEAR, -0.00009515922545197159 * DAYS_PER_YEAR, 0.000051513890204661145 * SOLAR_MASS);
    }
    function Sun() {
        return new Body(0, 0, 0, 0, 0, 0, SOLAR_MASS);
    }
    function NBodySystem(bodies) {
        this.bodies = bodies;
        var px = 0;
        var py = 0;
        var pz = 0;
        var size = this.bodies.length;
        for (var i = 0; i < size; i++) {
            var b = this.bodies[i];
            var m = b.mass;
            px += b.vx * m;
            py += b.vy * m;
            pz += b.vz * m;
        }
        this.bodies[0].offsetMomentum(px, py, pz);
    }
    NBodySystem.prototype.advance = function (dt) {
        var dx, dy, dz, distance, mag;
        var size = this.bodies.length;
        for (var i = 0; i < size; i++) {
            var bodyi = this.bodies[i];
            for (var j = i + 1; j < size; j++) {
                var bodyj = this.bodies[j];
                dx = bodyi.x - bodyj.x;
                dy = bodyi.y - bodyj.y;
                dz = bodyi.z - bodyj.z;
                distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
                mag = dt / (distance * distance * distance);
                bodyi.vx -= dx * bodyj.mass * mag;
                bodyi.vy -= dy * bodyj.mass * mag;
                bodyi.vz -= dz * bodyj.mass * mag;
                bodyj.vx += dx * bodyi.mass * mag;
                bodyj.vy += dy * bodyi.mass * mag;
                bodyj.vz += dz * bodyi.mass * mag;
            }
        }
        for (var i = 0; i < size; i++) {
            var body = this.bodies[i];
            body.x += dt * body.vx;
            body.y += dt * body.vy;
            body.z += dt * body.vz;
        }
    };
    NBodySystem.prototype.energy = function () {
        var dx, dy, dz, distance;
        var e = 0;
        var size = this.bodies.length;
        for (var i = 0; i < size; i++) {
            var bodyi = this.bodies[i];
            e += 0.5 * bodyi.mass * (bodyi.vx * bodyi.vx + bodyi.vy * bodyi.vy + bodyi.vz * bodyi.vz);
            for (var j = i + 1; j < size; j++) {
                var bodyj = this.bodies[j];
                dx = bodyi.x - bodyj.x;
                dy = bodyi.y - bodyj.y;
                dz = bodyi.z - bodyj.z;
                distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
                e -= bodyi.mass * bodyj.mass / distance;
            }
        }
        return e;
    };
    var ret = 0;
    for (var n = 3; n <= 24; n *= 2) {
        (function () {
            var bodies = new NBodySystem(Array(Sun(), Jupiter(), Saturn(), Uranus(), Neptune()));
            var max = n * 100;
            ret += bodies.energy();
            for (var i = 0; i < max; i++) {
                bodies.advance(0.01);
            }
            ret += bodies.energy();
        }());
    }
    var expected = -1.3524862408537381;
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