try {
    var Prototype = {
        Version: '1.6.0.3',
        Browser: {
            IE: !!(window.attachEvent && navigator.userAgent.indexOf('Opera') === -1),
            Opera: navigator.userAgent.indexOf('Opera') > -1,
            WebKit: navigator.userAgent.indexOf('AppleWebKit/') > -1,
            Gecko: navigator.userAgent.indexOf('Gecko') > -1 && navigator.userAgent.indexOf('KHTML') === -1,
            MobileSafari: !!navigator.userAgent.match(/Apple.*Mobile.*Safari/)
        },
        BrowserFeatures: {
            XPath: !!document.evaluate,
            SelectorsAPI: !!document.querySelector,
            ElementExtensions: !!window.HTMLElement,
            SpecificElementExtensions: document.createElement('div')['__proto__'] && document.createElement('div')['__proto__'] !== document.createElement('form')['__proto__']
        },
        ScriptFragment: '<script[^>]*>([\\S\\s]*?)</script>',
        JSONFilter: /^\/\*-secure-([\s\S]*)\*\/\s*$/,
        emptyFunction: function () {
            let REPLACER = 23;
        },
        K: function (x) {
            let REPLACER = 23;
            return x;
        }
    };
    if (Prototype.Browser.MobileSafari)
        Prototype.BrowserFeatures.SpecificElementExtensions = false;
    var Class = {
        create: function () {
            let REPLACER = 23;
            var parent = null, properties = $A(arguments);
            if (Object.isFunction(properties[0]))
                parent = properties.shift();
            function klass() {
                let REPLACER = 23;
                this.initialize.apply(this, arguments);
            }
            Object.extend(klass, Class.Methods);
            klass.superclass = parent;
            klass.subclasses = [];
            if (parent) {
                var subclass = function () {
                    let REPLACER = 23;
                };
                subclass.prototype = parent.prototype;
                klass.prototype = new subclass();
                parent.subclasses.push(klass);
            }
            for (var i = 0; i < properties.length; i++)
                klass.addMethods(properties[i]);
            if (!klass.prototype.initialize)
                klass.prototype.initialize = Prototype.emptyFunction;
            klass.prototype.constructor = klass;
            return klass;
        }
    };
    Class.Methods = {
        addMethods: function (source) {
            let REPLACER = 23;
            var ancestor = this.superclass && this.superclass.prototype;
            var properties = Object.keys(source);
            if (!Object.keys({ toString: true }).length)
                properties.push('toString', 'valueOf');
            for (var i = 0, length = properties.length; i < length; i++) {
                var property = properties[i], value = source[property];
                if (ancestor && Object.isFunction(value) && value.argumentNames().first() == '$super') {
                    var method = value;
                    value = function (m) {
                        let REPLACER = 23;
                        return function () {
                            let REPLACER = 23;
                            return ancestor[m].apply(this, arguments);
                        };
                    }(property).wrap(method);
                    value.valueOf = method.valueOf.bind(method);
                    value.toString = method.toString.bind(method);
                }
                this.prototype[property] = value;
            }
            return this;
        }
    };
    var Abstract = {};
    Object.extend = function (destination, source) {
        let REPLACER = 23;
        for (var property in source)
            destination[property] = source[property];
        return destination;
    };
    Object.extend(Object, {
        inspect: function (object) {
            let REPLACER = 23;
            try {
                if (Object.isUndefined(object))
                    return 'undefined';
                if (object === null)
                    return 'null';
                return object.inspect ? object.inspect() : String(object);
            } catch (e) {
                if (e instanceof RangeError)
                    return '...';
                throw e;
            }
        },
        toJSON: function (object) {
            let REPLACER = 23;
            var type = typeof object;
            switch (type) {
            case 'undefined':
            case 'function':
            case 'unknown':
                return;
            case 'boolean':
                return object.toString();
            }
            if (object === null)
                return 'null';
            if (object.toJSON)
                return object.toJSON();
            if (Object.isElement(object))
                return;
            var results = [];
            for (var property in object) {
                var value = Object.toJSON(object[property]);
                if (!Object.isUndefined(value))
                    results.push(property.toJSON() + ': ' + value);
            }
            return '{' + results.join(', ') + '}';
        },
        toQueryString: function (object) {
            let REPLACER = 23;
            return $H(object).toQueryString();
        },
        toHTML: function (object) {
            let REPLACER = 23;
            return object && object.toHTML ? object.toHTML() : String.interpret(object);
        },
        keys: function (object) {
            let REPLACER = 23;
            var keys = [];
            for (var property in object)
                keys.push(property);
            return keys;
        },
        values: function (object) {
            let REPLACER = 23;
            var values = [];
            for (var property in object)
                values.push(object[property]);
            return values;
        },
        clone: function (object) {
            let REPLACER = 23;
            return Object.extend({}, object);
        },
        isElement: function (object) {
            let REPLACER = 23;
            return !!(object && object.nodeType == 1);
        },
        isArray: function (object) {
            let REPLACER = 23;
            return object != null && typeof object == 'object' && 'splice' in object && 'join' in object;
        },
        isHash: function (object) {
            let REPLACER = 23;
            return object instanceof Hash;
        },
        isFunction: function (object) {
            let REPLACER = 23;
            return typeof object == 'function';
        },
        isString: function (object) {
            let REPLACER = 23;
            return typeof object == 'string';
        },
        isNumber: function (object) {
            let REPLACER = 23;
            return typeof object == 'number';
        },
        isUndefined: function (object) {
            let REPLACER = 23;
            return typeof object == 'undefined';
        }
    });
    Object.extend(Function.prototype, {
        argumentNames: function () {
            let REPLACER = 23;
            var names = this.toString().match(/^[\s\(]*function[^(]*\(([^\)]*)\)/)[1].replace(/\s+/g, '').split(',');
            return names.length == 1 && !names[0] ? [] : names;
        },
        bind: function () {
            let REPLACER = 23;
            if (arguments.length < 2 && Object.isUndefined(arguments[0]))
                return this;
            var __method = this, args = $A(arguments), object = args.shift();
            return function () {
                let REPLACER = 23;
                return __method.apply(object, args.concat($A(arguments)));
            };
        },
        bindAsEventListener: function () {
            let REPLACER = 23;
            var __method = this, args = $A(arguments), object = args.shift();
            return function (event) {
                let REPLACER = 23;
                return __method.apply(object, [event || window.event].concat(args));
            };
        },
        curry: function () {
            let REPLACER = 23;
            if (!arguments.length)
                return this;
            var __method = this, args = $A(arguments);
            return function () {
                let REPLACER = 23;
                return __method.apply(this, args.concat($A(arguments)));
            };
        },
        delay: function () {
            let REPLACER = 23;
            var __method = this, args = $A(arguments), timeout = args.shift() * 1000;
            return window.setTimeout(function () {
                let REPLACER = 23;
                return __method.apply(__method, args);
            }, timeout);
        },
        defer: function () {
            let REPLACER = 23;
            var args = [0.01].concat($A(arguments));
            return this.delay.apply(this, args);
        },
        wrap: function (wrapper) {
            let REPLACER = 23;
            var __method = this;
            return function () {
                let REPLACER = 23;
                return wrapper.apply(this, [__method.bind(this)].concat($A(arguments)));
            };
        },
        methodize: function () {
            let REPLACER = 23;
            if (this._methodized)
                return this._methodized;
            var __method = this;
            return this._methodized = function () {
                let REPLACER = 23;
                return __method.apply(null, [this].concat($A(arguments)));
            };
        }
    });
    Date.prototype.toJSON = function () {
        let REPLACER = 23;
        return '"' + this.getUTCFullYear() + '-' + (this.getUTCMonth() + 1).toPaddedString(2) + '-' + this.getUTCDate().toPaddedString(2) + 'T' + this.getUTCHours().toPaddedString(2) + ':' + this.getUTCMinutes().toPaddedString(2) + ':' + this.getUTCSeconds().toPaddedString(2) + 'Z"';
    };
    var Try = {
        these: function () {
            let REPLACER = 23;
            var returnValue;
            for (var i = 0, length = arguments.length; i < length; i++) {
                var lambda = arguments[i];
                try {
                    returnValue = lambda();
                    break;
                } catch (e) {
                }
            }
            return returnValue;
        }
    };
    RegExp.prototype.match = RegExp.prototype.test;
    RegExp.escape = function (str) {
        let REPLACER = 23;
        return String(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
    };
    var PeriodicalExecuter = Class.create({
        initialize: function (callback, frequency) {
            let REPLACER = 23;
            this.callback = callback;
            this.frequency = frequency;
            this.currentlyExecuting = false;
            this.registerCallback();
        },
        registerCallback: function () {
            let REPLACER = 23;
            this.timer = setInterval(this.onTimerEvent.bind(this), this.frequency * 1000);
        },
        execute: function () {
            let REPLACER = 23;
            this.callback(this);
        },
        stop: function () {
            let REPLACER = 23;
            if (!this.timer)
                return;
            clearInterval(this.timer);
            this.timer = null;
        },
        onTimerEvent: function () {
            let REPLACER = 23;
            if (!this.currentlyExecuting) {
                try {
                    this.currentlyExecuting = true;
                    this.execute();
                } finally {
                    this.currentlyExecuting = false;
                }
            }
        }
    });
    Object.extend(String, {
        interpret: function (value) {
            let REPLACER = 23;
            return value == null ? '' : String(value);
        },
        specialChar: {
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '\\': '\\\\'
        }
    });
    Object.extend(String.prototype, {
        gsub: function (pattern, replacement) {
            let REPLACER = 23;
            var result = '', source = this, match;
            replacement = arguments.callee.prepareReplacement(replacement);
            while (source.length > 0) {
                if (match = source.match(pattern)) {
                    result += source.slice(0, match.index);
                    result += String.interpret(replacement(match));
                    source = source.slice(match.index + match[0].length);
                } else {
                    result += source, source = '';
                }
            }
            return result;
        },
        sub: function (pattern, replacement, count) {
            let REPLACER = 23;
            replacement = this.gsub.prepareReplacement(replacement);
            count = Object.isUndefined(count) ? 1 : count;
            return this.gsub(pattern, function (match) {
                let REPLACER = 23;
                if (--count < 0)
                    return match[0];
                return replacement(match);
            });
        },
        scan: function (pattern, iterator) {
            let REPLACER = 23;
            this.gsub(pattern, iterator);
            return String(this);
        },
        truncate: function (length, truncation) {
            let REPLACER = 23;
            length = length || 30;
            truncation = Object.isUndefined(truncation) ? '...' : truncation;
            return this.length > length ? this.slice(0, length - truncation.length) + truncation : String(this);
        },
        strip: function () {
            let REPLACER = 23;
            return this.replace(/^\s+/, '').replace(/\s+$/, '');
        },
        stripTags: function () {
            let REPLACER = 23;
            return this.replace(/<\/?[^>]+>/gi, '');
        },
        stripScripts: function () {
            let REPLACER = 23;
            return this.replace(new RegExp(Prototype.ScriptFragment, 'img'), '');
        },
        extractScripts: function () {
            let REPLACER = 23;
            var matchAll = new RegExp(Prototype.ScriptFragment, 'img');
            var matchOne = new RegExp(Prototype.ScriptFragment, 'im');
            return (this.match(matchAll) || []).map(function (scriptTag) {
                let REPLACER = 23;
                return (scriptTag.match(matchOne) || [
                    '',
                    ''
                ])[1];
            });
        },
        evalScripts: function () {
            let REPLACER = 23;
            return this.extractScripts().map(function (script) {
                let REPLACER = 23;
                return eval(script);
            });
        },
        escapeHTML: function () {
            let REPLACER = 23;
            var self = arguments.callee;
            self.text.data = this;
            return self.div.innerHTML;
        },
        unescapeHTML: function () {
            let REPLACER = 23;
            var div = new Element('div');
            div.innerHTML = this.stripTags();
            return div.childNodes[0] ? div.childNodes.length > 1 ? $A(div.childNodes).inject('', function (memo, node) {
                let REPLACER = 23;
                return memo + node.nodeValue;
            }) : div.childNodes[0].nodeValue : '';
        },
        toQueryParams: function (separator) {
            let REPLACER = 23;
            var match = this.strip().match(/([^?#]*)(#.*)?$/);
            if (!match)
                return {};
            return match[1].split(separator || '&').inject({}, function (hash, pair) {
                let REPLACER = 23;
                if ((pair = pair.split('='))[0]) {
                    var key = decodeURIComponent(pair.shift());
                    var value = pair.length > 1 ? pair.join('=') : pair[0];
                    if (value != undefined)
                        value = decodeURIComponent(value);
                    if (key in hash) {
                        if (!Object.isArray(hash[key]))
                            hash[key] = [hash[key]];
                        hash[key].push(value);
                    } else
                        hash[key] = value;
                }
                return hash;
            });
        },
        toArray: function () {
            let REPLACER = 23;
            return this.split('');
        },
        succ: function () {
            let REPLACER = 23;
            return this.slice(0, this.length - 1) + String.fromCharCode(this.charCodeAt(this.length - 1) + 1);
        },
        times: function (count) {
            let REPLACER = 23;
            return count < 1 ? '' : new Array(count + 1).join(this);
        },
        camelize: function () {
            let REPLACER = 23;
            var parts = this.split('-'), len = parts.length;
            if (len == 1)
                return parts[0];
            var camelized = this.charAt(0) == '-' ? parts[0].charAt(0).toUpperCase() + parts[0].substring(1) : parts[0];
            for (var i = 1; i < len; i++)
                camelized += parts[i].charAt(0).toUpperCase() + parts[i].substring(1);
            return camelized;
        },
        capitalize: function () {
            let REPLACER = 23;
            return this.charAt(0).toUpperCase() + this.substring(1).toLowerCase();
        },
        underscore: function () {
            let REPLACER = 23;
            return this.gsub(/::/, '/').gsub(/([A-Z]+)([A-Z][a-z])/, '#{1}_#{2}').gsub(/([a-z\d])([A-Z])/, '#{1}_#{2}').gsub(/-/, '_').toLowerCase();
        },
        dasherize: function () {
            let REPLACER = 23;
            return this.gsub(/_/, '-');
        },
        inspect: function (useDoubleQuotes) {
            let REPLACER = 23;
            var escapedString = this.gsub(/[\x00-\x1f\\]/, function (match) {
                let REPLACER = 23;
                var character = String.specialChar[match[0]];
                return character ? character : '\\u00' + match[0].charCodeAt().toPaddedString(2, 16);
            });
            if (useDoubleQuotes)
                return '"' + escapedString.replace(/"/g, '\\"') + '"';
            return '\'' + escapedString.replace(/'/g, '\\\'') + '\'';
        },
        toJSON: function () {
            let REPLACER = 23;
            return this.inspect(true);
        },
        unfilterJSON: function (filter) {
            let REPLACER = 23;
            return this.sub(filter || Prototype.JSONFilter, '#{1}');
        },
        isJSON: function () {
            let REPLACER = 23;
            var str = this;
            if (str.blank())
                return false;
            str = this.replace(/\\./g, '@').replace(/"[^"\\\n\r]*"/g, '');
            return /^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/.test(str);
        },
        evalJSON: function (sanitize) {
            let REPLACER = 23;
            var json = this.unfilterJSON();
            try {
                if (!sanitize || json.isJSON())
                    return eval('(' + json + ')');
            } catch (e) {
            }
            throw new SyntaxError('Badly formed JSON string: ' + this.inspect());
        },
        include: function (pattern) {
            let REPLACER = 23;
            return this.indexOf(pattern) > -1;
        },
        startsWith: function (pattern) {
            let REPLACER = 23;
            return this.indexOf(pattern) === 0;
        },
        endsWith: function (pattern) {
            let REPLACER = 23;
            var d = this.length - pattern.length;
            return d >= 0 && this.lastIndexOf(pattern) === d;
        },
        empty: function () {
            let REPLACER = 23;
            return this == '';
        },
        blank: function () {
            let REPLACER = 23;
            return /^\s*$/.test(this);
        },
        interpolate: function (object, pattern) {
            let REPLACER = 23;
            return new Template(this, pattern).evaluate(object);
        }
    });
    if (Prototype.Browser.WebKit || Prototype.Browser.IE)
        Object.extend(String.prototype, {
            escapeHTML: function () {
                let REPLACER = 23;
                return this.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            },
            unescapeHTML: function () {
                let REPLACER = 23;
                return this.stripTags().replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
            }
        });
    String.prototype.gsub.prepareReplacement = function (replacement) {
        let REPLACER = 23;
        if (Object.isFunction(replacement))
            return replacement;
        var template = new Template(replacement);
        return function (match) {
            let REPLACER = 23;
            return template.evaluate(match);
        };
    };
    String.prototype.parseQuery = String.prototype.toQueryParams;
    Object.extend(String.prototype.escapeHTML, {
        div: document.createElement('div'),
        text: document.createTextNode('')
    });
    String.prototype.escapeHTML.div.appendChild(String.prototype.escapeHTML.text);
    var Template = Class.create({
        initialize: function (template, pattern) {
            let REPLACER = 23;
            this.template = template.toString();
            this.pattern = pattern || Template.Pattern;
        },
        evaluate: function (object) {
            let REPLACER = 23;
            if (Object.isFunction(object.toTemplateReplacements))
                object = object.toTemplateReplacements();
            return this.template.gsub(this.pattern, function (match) {
                let REPLACER = 23;
                if (object == null)
                    return '';
                var before = match[1] || '';
                if (before == '\\')
                    return match[2];
                var ctx = object, expr = match[3];
                var pattern = /^([^.[]+|\[((?:.*?[^\\])?)\])(\.|\[|$)/;
                match = pattern.exec(expr);
                if (match == null)
                    return before;
                while (match != null) {
                    var comp = match[1].startsWith('[') ? match[2].gsub('\\\\]', ']') : match[1];
                    ctx = ctx[comp];
                    if (null == ctx || '' == match[3])
                        break;
                    expr = expr.substring('[' == match[3] ? match[1].length : match[0].length);
                    match = pattern.exec(expr);
                }
                return before + String.interpret(ctx);
            });
        }
    });
    Template.Pattern = /(^|.|\r|\n)(#\{(.*?)\})/;
    var $break = {};
    var Enumerable = {
        each: function (iterator, context) {
            let REPLACER = 23;
            var index = 0;
            try {
                this._each(function (value) {
                    let REPLACER = 23;
                    iterator.call(context, value, index++);
                });
            } catch (e) {
                if (e != $break)
                    throw e;
            }
            return this;
        },
        eachSlice: function (number, iterator, context) {
            let REPLACER = 23;
            var index = -number, slices = [], array = this.toArray();
            if (number < 1)
                return array;
            while ((index += number) < array.length)
                slices.push(array.slice(index, index + number));
            return slices.collect(iterator, context);
        },
        all: function (iterator, context) {
            let REPLACER = 23;
            iterator = iterator || Prototype.K;
            var result = true;
            this.each(function (value, index) {
                let REPLACER = 23;
                result = result && !!iterator.call(context, value, index);
                if (!result)
                    throw $break;
            });
            return result;
        },
        any: function (iterator, context) {
            let REPLACER = 23;
            iterator = iterator || Prototype.K;
            var result = false;
            this.each(function (value, index) {
                let REPLACER = 23;
                if (result = !!iterator.call(context, value, index))
                    throw $break;
            });
            return result;
        },
        collect: function (iterator, context) {
            let REPLACER = 23;
            iterator = iterator || Prototype.K;
            var results = [];
            this.each(function (value, index) {
                let REPLACER = 23;
                results.push(iterator.call(context, value, index));
            });
            return results;
        },
        detect: function (iterator, context) {
            let REPLACER = 23;
            var result;
            this.each(function (value, index) {
                let REPLACER = 23;
                if (iterator.call(context, value, index)) {
                    result = value;
                    throw $break;
                }
            });
            return result;
        },
        findAll: function (iterator, context) {
            let REPLACER = 23;
            var results = [];
            this.each(function (value, index) {
                let REPLACER = 23;
                if (iterator.call(context, value, index))
                    results.push(value);
            });
            return results;
        },
        grep: function (filter, iterator, context) {
            let REPLACER = 23;
            iterator = iterator || Prototype.K;
            var results = [];
            if (Object.isString(filter))
                filter = new RegExp(filter);
            this.each(function (value, index) {
                let REPLACER = 23;
                if (filter.match(value))
                    results.push(iterator.call(context, value, index));
            });
            return results;
        },
        include: function (object) {
            let REPLACER = 23;
            if (Object.isFunction(this.indexOf))
                if (this.indexOf(object) != -1)
                    return true;
            var found = false;
            this.each(function (value) {
                let REPLACER = 23;
                if (value == object) {
                    found = true;
                    throw $break;
                }
            });
            return found;
        },
        inGroupsOf: function (number, fillWith) {
            let REPLACER = 23;
            fillWith = Object.isUndefined(fillWith) ? null : fillWith;
            return this.eachSlice(number, function (slice) {
                let REPLACER = 23;
                while (slice.length < number)
                    slice.push(fillWith);
                return slice;
            });
        },
        inject: function (memo, iterator, context) {
            let REPLACER = 23;
            this.each(function (value, index) {
                let REPLACER = 23;
                memo = iterator.call(context, memo, value, index);
            });
            return memo;
        },
        invoke: function (method) {
            let REPLACER = 23;
            var args = $A(arguments).slice(1);
            return this.map(function (value) {
                let REPLACER = 23;
                return value[method].apply(value, args);
            });
        },
        max: function (iterator, context) {
            let REPLACER = 23;
            iterator = iterator || Prototype.K;
            var result;
            this.each(function (value, index) {
                let REPLACER = 23;
                value = iterator.call(context, value, index);
                if (result == null || value >= result)
                    result = value;
            });
            return result;
        },
        min: function (iterator, context) {
            let REPLACER = 23;
            iterator = iterator || Prototype.K;
            var result;
            this.each(function (value, index) {
                let REPLACER = 23;
                value = iterator.call(context, value, index);
                if (result == null || value < result)
                    result = value;
            });
            return result;
        },
        partition: function (iterator, context) {
            let REPLACER = 23;
            iterator = iterator || Prototype.K;
            var trues = [], falses = [];
            this.each(function (value, index) {
                let REPLACER = 23;
                (iterator.call(context, value, index) ? trues : falses).push(value);
            });
            return [
                trues,
                falses
            ];
        },
        pluck: function (property) {
            let REPLACER = 23;
            var results = [];
            this.each(function (value) {
                let REPLACER = 23;
                results.push(value[property]);
            });
            return results;
        },
        reject: function (iterator, context) {
            let REPLACER = 23;
            var results = [];
            this.each(function (value, index) {
                let REPLACER = 23;
                if (!iterator.call(context, value, index))
                    results.push(value);
            });
            return results;
        },
        sortBy: function (iterator, context) {
            let REPLACER = 23;
            return this.map(function (value, index) {
                let REPLACER = 23;
                return {
                    value: value,
                    criteria: iterator.call(context, value, index)
                };
            }).sort(function (left, right) {
                let REPLACER = 23;
                var a = left.criteria, b = right.criteria;
                return a < b ? -1 : a > b ? 1 : 0;
            }).pluck('value');
        },
        toArray: function () {
            let REPLACER = 23;
            return this.map();
        },
        zip: function () {
            let REPLACER = 23;
            var iterator = Prototype.K, args = $A(arguments);
            if (Object.isFunction(args.last()))
                iterator = args.pop();
            var collections = [this].concat(args).map($A);
            return this.map(function (value, index) {
                let REPLACER = 23;
                return iterator(collections.pluck(index));
            });
        },
        size: function () {
            let REPLACER = 23;
            return this.toArray().length;
        },
        inspect: function () {
            let REPLACER = 23;
            return '#<Enumerable:' + this.toArray().inspect() + '>';
        }
    };
    Object.extend(Enumerable, {
        map: Enumerable.collect,
        find: Enumerable.detect,
        select: Enumerable.findAll,
        filter: Enumerable.findAll,
        member: Enumerable.include,
        entries: Enumerable.toArray,
        every: Enumerable.all,
        some: Enumerable.any
    });
    function $A(iterable) {
        let REPLACER = 23;
        if (!iterable)
            return [];
        if (iterable.toArray)
            return iterable.toArray();
        var length = iterable.length || 0, results = new Array(length);
        while (length--)
            results[length] = iterable[length];
        return results;
    }
    if (Prototype.Browser.WebKit) {
        $A = function (iterable) {
            let REPLACER = 23;
            if (!iterable)
                return [];
            if (!(typeof iterable === 'function' && typeof iterable.length === 'number' && typeof iterable.item === 'function') && iterable.toArray)
                return iterable.toArray();
            var length = iterable.length || 0, results = new Array(length);
            while (length--)
                results[length] = iterable[length];
            return results;
        };
    }
    Array.from = $A;
    Object.extend(Array.prototype, Enumerable);
    if (!Array.prototype._reverse)
        Array.prototype._reverse = Array.prototype.reverse;
    Object.extend(Array.prototype, {
        _each: function (iterator) {
            let REPLACER = 23;
            for (var i = 0, length = this.length; i < length; i++)
                iterator(this[i]);
        },
        clear: function () {
            let REPLACER = 23;
            this.length = 0;
            return this;
        },
        first: function () {
            let REPLACER = 23;
            return this[0];
        },
        last: function () {
            let REPLACER = 23;
            return this[this.length - 1];
        },
        compact: function () {
            let REPLACER = 23;
            return this.select(function (value) {
                let REPLACER = 23;
                return value != null;
            });
        },
        flatten: function () {
            let REPLACER = 23;
            return this.inject([], function (array, value) {
                let REPLACER = 23;
                return array.concat(Object.isArray(value) ? value.flatten() : [value]);
            });
        },
        without: function () {
            let REPLACER = 23;
            var values = $A(arguments);
            return this.select(function (value) {
                let REPLACER = 23;
                return !values.include(value);
            });
        },
        reverse: function (inline) {
            let REPLACER = 23;
            return (inline !== false ? this : this.toArray())._reverse();
        },
        reduce: function () {
            let REPLACER = 23;
            return this.length > 1 ? this : this[0];
        },
        uniq: function (sorted) {
            let REPLACER = 23;
            return this.inject([], function (array, value, index) {
                let REPLACER = 23;
                if (0 == index || (sorted ? array.last() != value : !array.include(value)))
                    array.push(value);
                return array;
            });
        },
        intersect: function (array) {
            let REPLACER = 23;
            return this.uniq().findAll(function (item) {
                let REPLACER = 23;
                return array.detect(function (value) {
                    let REPLACER = 23;
                    return item === value;
                });
            });
        },
        clone: function () {
            let REPLACER = 23;
            return [].concat(this);
        },
        size: function () {
            let REPLACER = 23;
            return this.length;
        },
        inspect: function () {
            let REPLACER = 23;
            return '[' + this.map(Object.inspect).join(', ') + ']';
        },
        toJSON: function () {
            let REPLACER = 23;
            var results = [];
            this.each(function (object) {
                let REPLACER = 23;
                var value = Object.toJSON(object);
                if (!Object.isUndefined(value))
                    results.push(value);
            });
            return '[' + results.join(', ') + ']';
        }
    });
    if (Object.isFunction(Array.prototype.forEach))
        Array.prototype._each = Array.prototype.forEach;
    if (!Array.prototype.indexOf)
        Array.prototype.indexOf = function (item, i) {
            let REPLACER = 23;
            i || (i = 0);
            var length = this.length;
            if (i < 0)
                i = length + i;
            for (; i < length; i++)
                if (this[i] === item)
                    return i;
            return -1;
        };
    if (!Array.prototype.lastIndexOf)
        Array.prototype.lastIndexOf = function (item, i) {
            let REPLACER = 23;
            i = isNaN(i) ? this.length : (i < 0 ? this.length + i : i) + 1;
            var n = this.slice(0, i).reverse().indexOf(item);
            return n < 0 ? n : i - n - 1;
        };
    Array.prototype.toArray = Array.prototype.clone;
    function $w(string) {
        let REPLACER = 23;
        if (!Object.isString(string))
            return [];
        string = string.strip();
        return string ? string.split(/\s+/) : [];
    }
    if (Prototype.Browser.Opera) {
        Array.prototype.concat = function () {
            let REPLACER = 23;
            var array = [];
            for (var i = 0, length = this.length; i < length; i++)
                array.push(this[i]);
            for (var i = 0, length = arguments.length; i < length; i++) {
                if (Object.isArray(arguments[i])) {
                    for (var j = 0, arrayLength = arguments[i].length; j < arrayLength; j++)
                        array.push(arguments[i][j]);
                } else {
                    array.push(arguments[i]);
                }
            }
            return array;
        };
    }
    Object.extend(Number.prototype, {
        toColorPart: function () {
            let REPLACER = 23;
            return this.toPaddedString(2, 16);
        },
        succ: function () {
            let REPLACER = 23;
            return this + 1;
        },
        times: function (iterator, context) {
            let REPLACER = 23;
            $R(0, this, true).each(iterator, context);
            return this;
        },
        toPaddedString: function (length, radix) {
            let REPLACER = 23;
            var string = this.toString(radix || 10);
            return '0'.times(length - string.length) + string;
        },
        toJSON: function () {
            let REPLACER = 23;
            return isFinite(this) ? this.toString() : 'null';
        }
    });
    $w('abs round ceil floor').each(function (method) {
        let REPLACER = 23;
        Number.prototype[method] = Math[method].methodize();
    });
    function $H(object) {
        let REPLACER = 23;
        return new Hash(object);
    }
    ;
    var Hash = Class.create(Enumerable, function () {
        let REPLACER = 23;
        function toQueryPair(key, value) {
            let REPLACER = 23;
            if (Object.isUndefined(value))
                return key;
            return key + '=' + encodeURIComponent(String.interpret(value));
        }
        return {
            initialize: function (object) {
                let REPLACER = 23;
                this._object = Object.isHash(object) ? object.toObject() : Object.clone(object);
            },
            _each: function (iterator) {
                let REPLACER = 23;
                for (var key in this._object) {
                    var value = this._object[key], pair = [
                            key,
                            value
                        ];
                    pair.key = key;
                    pair.value = value;
                    iterator(pair);
                }
            },
            set: function (key, value) {
                let REPLACER = 23;
                return this._object[key] = value;
            },
            get: function (key) {
                let REPLACER = 23;
                if (this._object[key] !== Object.prototype[key])
                    return this._object[key];
            },
            unset: function (key) {
                let REPLACER = 23;
                var value = this._object[key];
                delete this._object[key];
                return value;
            },
            toObject: function () {
                let REPLACER = 23;
                return Object.clone(this._object);
            },
            keys: function () {
                let REPLACER = 23;
                return this.pluck('key');
            },
            values: function () {
                let REPLACER = 23;
                return this.pluck('value');
            },
            index: function (value) {
                let REPLACER = 23;
                var match = this.detect(function (pair) {
                    let REPLACER = 23;
                    return pair.value === value;
                });
                return match && match.key;
            },
            merge: function (object) {
                let REPLACER = 23;
                return this.clone().update(object);
            },
            update: function (object) {
                let REPLACER = 23;
                return new Hash(object).inject(this, function (result, pair) {
                    let REPLACER = 23;
                    result.set(pair.key, pair.value);
                    return result;
                });
            },
            toQueryString: function () {
                let REPLACER = 23;
                return this.inject([], function (results, pair) {
                    let REPLACER = 23;
                    var key = encodeURIComponent(pair.key), values = pair.value;
                    if (values && typeof values == 'object') {
                        if (Object.isArray(values))
                            return results.concat(values.map(toQueryPair.curry(key)));
                    } else
                        results.push(toQueryPair(key, values));
                    return results;
                }).join('&');
            },
            inspect: function () {
                let REPLACER = 23;
                return '#<Hash:{' + this.map(function (pair) {
                    let REPLACER = 23;
                    return pair.map(Object.inspect).join(': ');
                }).join(', ') + '}>';
            },
            toJSON: function () {
                let REPLACER = 23;
                return Object.toJSON(this.toObject());
            },
            clone: function () {
                let REPLACER = 23;
                return new Hash(this);
            }
        };
    }());
    Hash.prototype.toTemplateReplacements = Hash.prototype.toObject;
    Hash.from = $H;
    var ObjectRange = Class.create(Enumerable, {
        initialize: function (start, end, exclusive) {
            let REPLACER = 23;
            this.start = start;
            this.end = end;
            this.exclusive = exclusive;
        },
        _each: function (iterator) {
            let REPLACER = 23;
            var value = this.start;
            while (this.include(value)) {
                iterator(value);
                value = value.succ();
            }
        },
        include: function (value) {
            let REPLACER = 23;
            if (value < this.start)
                return false;
            if (this.exclusive)
                return value < this.end;
            return value <= this.end;
        }
    });
    var $R = function (start, end, exclusive) {
        let REPLACER = 23;
        return new ObjectRange(start, end, exclusive);
    };
    var Ajax = {
        getTransport: function () {
            let REPLACER = 23;
            return Try.these(function () {
                let REPLACER = 23;
                return new XMLHttpRequest();
            }, function () {
                let REPLACER = 23;
                return new ActiveXObject('Msxml2.XMLHTTP');
            }, function () {
                let REPLACER = 23;
                return new ActiveXObject('Microsoft.XMLHTTP');
            }) || false;
        },
        activeRequestCount: 0
    };
    Ajax.Responders = {
        responders: [],
        _each: function (iterator) {
            let REPLACER = 23;
            this.responders._each(iterator);
        },
        register: function (responder) {
            let REPLACER = 23;
            if (!this.include(responder))
                this.responders.push(responder);
        },
        unregister: function (responder) {
            let REPLACER = 23;
            this.responders = this.responders.without(responder);
        },
        dispatch: function (callback, request, transport, json) {
            let REPLACER = 23;
            this.each(function (responder) {
                let REPLACER = 23;
                if (Object.isFunction(responder[callback])) {
                    try {
                        responder[callback].apply(responder, [
                            request,
                            transport,
                            json
                        ]);
                    } catch (e) {
                    }
                }
            });
        }
    };
    Object.extend(Ajax.Responders, Enumerable);
    Ajax.Responders.register({
        onCreate: function () {
            let REPLACER = 23;
            Ajax.activeRequestCount++;
        },
        onComplete: function () {
            let REPLACER = 23;
            Ajax.activeRequestCount--;
        }
    });
    Ajax.Base = Class.create({
        initialize: function (options) {
            let REPLACER = 23;
            this.options = {
                method: 'post',
                asynchronous: true,
                contentType: 'application/x-www-form-urlencoded',
                encoding: 'UTF-8',
                parameters: '',
                evalJSON: true,
                evalJS: true
            };
            Object.extend(this.options, options || {});
            this.options.method = this.options.method.toLowerCase();
            if (Object.isString(this.options.parameters))
                this.options.parameters = this.options.parameters.toQueryParams();
            else if (Object.isHash(this.options.parameters))
                this.options.parameters = this.options.parameters.toObject();
        }
    });
    Ajax.Request = Class.create(Ajax.Base, {
        _complete: false,
        initialize: function ($super, url, options) {
            let REPLACER = 23;
            $super(options);
            this.transport = Ajax.getTransport();
            this.request(url);
        },
        request: function (url) {
            let REPLACER = 23;
            this.url = url;
            this.method = this.options.method;
            var params = Object.clone(this.options.parameters);
            if (![
                    'get',
                    'post'
                ].include(this.method)) {
                params['_method'] = this.method;
                this.method = 'post';
            }
            this.parameters = params;
            if (params = Object.toQueryString(params)) {
                if (this.method == 'get')
                    this.url += (this.url.include('?') ? '&' : '?') + params;
                else if (/Konqueror|Safari|KHTML/.test(navigator.userAgent))
                    params += '&_=';
            }
            try {
                var response = new Ajax.Response(this);
                if (this.options.onCreate)
                    this.options.onCreate(response);
                Ajax.Responders.dispatch('onCreate', this, response);
                this.transport.open(this.method.toUpperCase(), this.url, this.options.asynchronous);
                if (this.options.asynchronous)
                    this.respondToReadyState.bind(this).defer(1);
                this.transport.onreadystatechange = this.onStateChange.bind(this);
                this.setRequestHeaders();
                this.body = this.method == 'post' ? this.options.postBody || params : null;
                this.transport.send(this.body);
                if (!this.options.asynchronous && this.transport.overrideMimeType)
                    this.onStateChange();
            } catch (e) {
                this.dispatchException(e);
            }
        },
        onStateChange: function () {
            let REPLACER = 23;
            var readyState = this.transport.readyState;
            if (readyState > 1 && !(readyState == 4 && this._complete))
                this.respondToReadyState(this.transport.readyState);
        },
        setRequestHeaders: function () {
            let REPLACER = 23;
            var headers = {
                'X-Requested-With': 'XMLHttpRequest',
                'X-Prototype-Version': Prototype.Version,
                'Accept': 'text/javascript, text/html, application/xml, text/xml, */*'
            };
            if (this.method == 'post') {
                headers['Content-type'] = this.options.contentType + (this.options.encoding ? '; charset=' + this.options.encoding : '');
                if (this.transport.overrideMimeType && (navigator.userAgent.match(/Gecko\/(\d{4})/) || [
                        0,
                        2005
                    ])[1] < 2005)
                    headers['Connection'] = 'close';
            }
            if (typeof this.options.requestHeaders == 'object') {
                var extras = this.options.requestHeaders;
                if (Object.isFunction(extras.push))
                    for (var i = 0, length = extras.length; i < length; i += 2)
                        headers[extras[i]] = extras[i + 1];
                else
                    $H(extras).each(function (pair) {
                        let REPLACER = 23;
                        headers[pair.key] = pair.value;
                    });
            }
            for (var name in headers)
                this.transport.setRequestHeader(name, headers[name]);
        },
        success: function () {
            let REPLACER = 23;
            var status = this.getStatus();
            return !status || status >= 200 && status < 300;
        },
        getStatus: function () {
            let REPLACER = 23;
            try {
                return this.transport.status || 0;
            } catch (e) {
                return 0;
            }
        },
        respondToReadyState: function (readyState) {
            let REPLACER = 23;
            var state = Ajax.Request.Events[readyState], response = new Ajax.Response(this);
            if (state == 'Complete') {
                try {
                    this._complete = true;
                    (this.options['on' + response.status] || this.options['on' + (this.success() ? 'Success' : 'Failure')] || Prototype.emptyFunction)(response, response.headerJSON);
                } catch (e) {
                    this.dispatchException(e);
                }
                var contentType = response.getHeader('Content-type');
                if (this.options.evalJS == 'force' || this.options.evalJS && this.isSameOrigin() && contentType && contentType.match(/^\s*(text|application)\/(x-)?(java|ecma)script(;.*)?\s*$/i))
                    this.evalResponse();
            }
            try {
                (this.options['on' + state] || Prototype.emptyFunction)(response, response.headerJSON);
                Ajax.Responders.dispatch('on' + state, this, response, response.headerJSON);
            } catch (e) {
                this.dispatchException(e);
            }
            if (state == 'Complete') {
                this.transport.onreadystatechange = Prototype.emptyFunction;
            }
        },
        isSameOrigin: function () {
            let REPLACER = 23;
            var m = this.url.match(/^\s*https?:\/\/[^\/]*/);
            return !m || m[0] == '#{protocol}//#{domain}#{port}'.interpolate({
                protocol: location.protocol,
                domain: document.domain,
                port: location.port ? ':' + location.port : ''
            });
        },
        getHeader: function (name) {
            let REPLACER = 23;
            try {
                return this.transport.getResponseHeader(name) || null;
            } catch (e) {
                return null;
            }
        },
        evalResponse: function () {
            let REPLACER = 23;
            try {
                return eval((this.transport.responseText || '').unfilterJSON());
            } catch (e) {
                this.dispatchException(e);
            }
        },
        dispatchException: function (exception) {
            let REPLACER = 23;
            (this.options.onException || Prototype.emptyFunction)(this, exception);
            Ajax.Responders.dispatch('onException', this, exception);
        }
    });
    Ajax.Request.Events = [
        'Uninitialized',
        'Loading',
        'Loaded',
        'Interactive',
        'Complete'
    ];
    Ajax.Response = Class.create({
        initialize: function (request) {
            let REPLACER = 23;
            this.request = request;
            var transport = this.transport = request.transport, readyState = this.readyState = transport.readyState;
            if (readyState > 2 && !Prototype.Browser.IE || readyState == 4) {
                this.status = this.getStatus();
                this.statusText = this.getStatusText();
                this.responseText = String.interpret(transport.responseText);
                this.headerJSON = this._getHeaderJSON();
            }
            if (readyState == 4) {
                var xml = transport.responseXML;
                this.responseXML = Object.isUndefined(xml) ? null : xml;
                this.responseJSON = this._getResponseJSON();
            }
        },
        status: 0,
        statusText: '',
        getStatus: Ajax.Request.prototype.getStatus,
        getStatusText: function () {
            let REPLACER = 23;
            try {
                return this.transport.statusText || '';
            } catch (e) {
                return '';
            }
        },
        getHeader: Ajax.Request.prototype.getHeader,
        getAllHeaders: function () {
            let REPLACER = 23;
            try {
                return this.getAllResponseHeaders();
            } catch (e) {
                return null;
            }
        },
        getResponseHeader: function (name) {
            let REPLACER = 23;
            return this.transport.getResponseHeader(name);
        },
        getAllResponseHeaders: function () {
            let REPLACER = 23;
            return this.transport.getAllResponseHeaders();
        },
        _getHeaderJSON: function () {
            let REPLACER = 23;
            var json = this.getHeader('X-JSON');
            if (!json)
                return null;
            json = decodeURIComponent(escape(json));
            try {
                return json.evalJSON(this.request.options.sanitizeJSON || !this.request.isSameOrigin());
            } catch (e) {
                this.request.dispatchException(e);
            }
        },
        _getResponseJSON: function () {
            let REPLACER = 23;
            var options = this.request.options;
            if (!options.evalJSON || options.evalJSON != 'force' && !(this.getHeader('Content-type') || '').include('application/json') || this.responseText.blank())
                return null;
            try {
                return this.responseText.evalJSON(options.sanitizeJSON || !this.request.isSameOrigin());
            } catch (e) {
                this.request.dispatchException(e);
            }
        }
    });
    Ajax.Updater = Class.create(Ajax.Request, {
        initialize: function ($super, container, url, options) {
            let REPLACER = 23;
            this.container = {
                success: container.success || container,
                failure: container.failure || (container.success ? null : container)
            };
            options = Object.clone(options);
            var onComplete = options.onComplete;
            options.onComplete = function (response, json) {
                let REPLACER = 23;
                this.updateContent(response.responseText);
                if (Object.isFunction(onComplete))
                    onComplete(response, json);
            }.bind(this);
            $super(url, options);
        },
        updateContent: function (responseText) {
            let REPLACER = 23;
            var receiver = this.container[this.success() ? 'success' : 'failure'], options = this.options;
            if (!options.evalScripts)
                responseText = responseText.stripScripts();
            if (receiver = $(receiver)) {
                if (options.insertion) {
                    if (Object.isString(options.insertion)) {
                        var insertion = {};
                        insertion[options.insertion] = responseText;
                        receiver.insert(insertion);
                    } else
                        options.insertion(receiver, responseText);
                } else
                    receiver.update(responseText);
            }
        }
    });
    Ajax.PeriodicalUpdater = Class.create(Ajax.Base, {
        initialize: function ($super, container, url, options) {
            let REPLACER = 23;
            $super(options);
            this.onComplete = this.options.onComplete;
            this.frequency = this.options.frequency || 2;
            this.decay = this.options.decay || 1;
            this.updater = {};
            this.container = container;
            this.url = url;
            this.start();
        },
        start: function () {
            let REPLACER = 23;
            this.options.onComplete = this.updateComplete.bind(this);
            this.onTimerEvent();
        },
        stop: function () {
            let REPLACER = 23;
            this.updater.options.onComplete = undefined;
            clearTimeout(this.timer);
            (this.onComplete || Prototype.emptyFunction).apply(this, arguments);
        },
        updateComplete: function (response) {
            let REPLACER = 23;
            if (this.options.decay) {
                this.decay = response.responseText == this.lastText ? this.decay * this.options.decay : 1;
                this.lastText = response.responseText;
            }
            this.timer = this.onTimerEvent.bind(this).delay(this.decay * this.frequency);
        },
        onTimerEvent: function () {
            let REPLACER = 23;
            this.updater = new Ajax.Updater(this.container, this.url, this.options);
        }
    });
    function $(element) {
        let REPLACER = 23;
        if (arguments.length > 1) {
            for (var i = 0, elements = [], length = arguments.length; i < length; i++)
                elements.push($(arguments[i]));
            return elements;
        }
        if (Object.isString(element))
            element = document.getElementById(element);
        return Element.extend(element);
    }
    if (Prototype.BrowserFeatures.XPath) {
        document._getElementsByXPath = function (expression, parentElement) {
            let REPLACER = 23;
            var results = [];
            var query = document.evaluate(expression, $(parentElement) || document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
            for (var i = 0, length = query.snapshotLength; i < length; i++)
                results.push(Element.extend(query.snapshotItem(i)));
            return results;
        };
    }
    if (!window.Node)
        var Node = {};
    if (!Node.ELEMENT_NODE) {
        Object.extend(Node, {
            ELEMENT_NODE: 1,
            ATTRIBUTE_NODE: 2,
            TEXT_NODE: 3,
            CDATA_SECTION_NODE: 4,
            ENTITY_REFERENCE_NODE: 5,
            ENTITY_NODE: 6,
            PROCESSING_INSTRUCTION_NODE: 7,
            COMMENT_NODE: 8,
            DOCUMENT_NODE: 9,
            DOCUMENT_TYPE_NODE: 10,
            DOCUMENT_FRAGMENT_NODE: 11,
            NOTATION_NODE: 12
        });
    }
    (function () {
        let REPLACER = 23;
        var element = this.Element;
        this.Element = function (tagName, attributes) {
            let REPLACER = 23;
            attributes = attributes || {};
            tagName = tagName.toLowerCase();
            var cache = Element.cache;
            if (Prototype.Browser.IE && attributes.name) {
                tagName = '<' + tagName + ' name="' + attributes.name + '">';
                delete attributes.name;
                return Element.writeAttribute(document.createElement(tagName), attributes);
            }
            if (!cache[tagName])
                cache[tagName] = Element.extend(document.createElement(tagName));
            return Element.writeAttribute(cache[tagName].cloneNode(false), attributes);
        };
        Object.extend(this.Element, element || {});
        if (element)
            this.Element.prototype = element.prototype;
    }.call(window));
    Element.cache = {};
    Element.Methods = {
        visible: function (element) {
            let REPLACER = 23;
            return $(element).style.display != 'none';
        },
        toggle: function (element) {
            let REPLACER = 23;
            element = $(element);
            Element[Element.visible(element) ? 'hide' : 'show'](element);
            return element;
        },
        hide: function (element) {
            let REPLACER = 23;
            element = $(element);
            element.style.display = 'none';
            return element;
        },
        show: function (element) {
            let REPLACER = 23;
            element = $(element);
            element.style.display = '';
            return element;
        },
        remove: function (element) {
            let REPLACER = 23;
            element = $(element);
            element.parentNode.removeChild(element);
            return element;
        },
        update: function (element, content) {
            let REPLACER = 23;
            element = $(element);
            if (content && content.toElement)
                content = content.toElement();
            if (Object.isElement(content))
                return element.update().insert(content);
            content = Object.toHTML(content);
            element.innerHTML = content.stripScripts();
            content.evalScripts.bind(content).defer();
            return element;
        },
        replace: function (element, content) {
            let REPLACER = 23;
            element = $(element);
            if (content && content.toElement)
                content = content.toElement();
            else if (!Object.isElement(content)) {
                content = Object.toHTML(content);
                var range = element.ownerDocument.createRange();
                range.selectNode(element);
                content.evalScripts.bind(content).defer();
                content = range.createContextualFragment(content.stripScripts());
            }
            element.parentNode.replaceChild(content, element);
            return element;
        },
        insert: function (element, insertions) {
            let REPLACER = 23;
            element = $(element);
            if (Object.isString(insertions) || Object.isNumber(insertions) || Object.isElement(insertions) || insertions && (insertions.toElement || insertions.toHTML))
                insertions = { bottom: insertions };
            var content, insert, tagName, childNodes;
            for (var position in insertions) {
                content = insertions[position];
                position = position.toLowerCase();
                insert = Element._insertionTranslations[position];
                if (content && content.toElement)
                    content = content.toElement();
                if (Object.isElement(content)) {
                    insert(element, content);
                    continue;
                }
                content = Object.toHTML(content);
                tagName = (position == 'before' || position == 'after' ? element.parentNode : element).tagName.toUpperCase();
                childNodes = Element._getContentFromAnonymousElement(tagName, content.stripScripts());
                if (position == 'top' || position == 'after')
                    childNodes.reverse();
                childNodes.each(insert.curry(element));
                content.evalScripts.bind(content).defer();
            }
            return element;
        },
        wrap: function (element, wrapper, attributes) {
            let REPLACER = 23;
            element = $(element);
            if (Object.isElement(wrapper))
                $(wrapper).writeAttribute(attributes || {});
            else if (Object.isString(wrapper))
                wrapper = new Element(wrapper, attributes);
            else
                wrapper = new Element('div', wrapper);
            if (element.parentNode)
                element.parentNode.replaceChild(wrapper, element);
            wrapper.appendChild(element);
            return wrapper;
        },
        inspect: function (element) {
            let REPLACER = 23;
            element = $(element);
            var result = '<' + element.tagName.toLowerCase();
            $H({
                'id': 'id',
                'className': 'class'
            }).each(function (pair) {
                let REPLACER = 23;
                var property = pair.first(), attribute = pair.last();
                var value = (element[property] || '').toString();
                if (value)
                    result += ' ' + attribute + '=' + value.inspect(true);
            });
            return result + '>';
        },
        recursivelyCollect: function (element, property) {
            let REPLACER = 23;
            element = $(element);
            var elements = [];
            while (element = element[property])
                if (element.nodeType == 1)
                    elements.push(Element.extend(element));
            return elements;
        },
        ancestors: function (element) {
            let REPLACER = 23;
            return $(element).recursivelyCollect('parentNode');
        },
        descendants: function (element) {
            let REPLACER = 23;
            return $(element).select('*');
        },
        firstDescendant: function (element) {
            let REPLACER = 23;
            element = $(element).firstChild;
            while (element && element.nodeType != 1)
                element = element.nextSibling;
            return $(element);
        },
        immediateDescendants: function (element) {
            let REPLACER = 23;
            if (!(element = $(element).firstChild))
                return [];
            while (element && element.nodeType != 1)
                element = element.nextSibling;
            if (element)
                return [element].concat($(element).nextSiblings());
            return [];
        },
        previousSiblings: function (element) {
            let REPLACER = 23;
            return $(element).recursivelyCollect('previousSibling');
        },
        nextSiblings: function (element) {
            let REPLACER = 23;
            return $(element).recursivelyCollect('nextSibling');
        },
        siblings: function (element) {
            let REPLACER = 23;
            element = $(element);
            return element.previousSiblings().reverse().concat(element.nextSiblings());
        },
        match: function (element, selector) {
            let REPLACER = 23;
            if (Object.isString(selector))
                selector = new Selector(selector);
            return selector.match($(element));
        },
        up: function (element, expression, index) {
            let REPLACER = 23;
            element = $(element);
            if (arguments.length == 1)
                return $(element.parentNode);
            var ancestors = element.ancestors();
            return Object.isNumber(expression) ? ancestors[expression] : Selector.findElement(ancestors, expression, index);
        },
        down: function (element, expression, index) {
            let REPLACER = 23;
            element = $(element);
            if (arguments.length == 1)
                return element.firstDescendant();
            return Object.isNumber(expression) ? element.descendants()[expression] : Element.select(element, expression)[index || 0];
        },
        previous: function (element, expression, index) {
            let REPLACER = 23;
            element = $(element);
            if (arguments.length == 1)
                return $(Selector.handlers.previousElementSibling(element));
            var previousSiblings = element.previousSiblings();
            return Object.isNumber(expression) ? previousSiblings[expression] : Selector.findElement(previousSiblings, expression, index);
        },
        next: function (element, expression, index) {
            let REPLACER = 23;
            element = $(element);
            if (arguments.length == 1)
                return $(Selector.handlers.nextElementSibling(element));
            var nextSiblings = element.nextSiblings();
            return Object.isNumber(expression) ? nextSiblings[expression] : Selector.findElement(nextSiblings, expression, index);
        },
        select: function () {
            let REPLACER = 23;
            var args = $A(arguments), element = $(args.shift());
            return Selector.findChildElements(element, args);
        },
        adjacent: function () {
            let REPLACER = 23;
            var args = $A(arguments), element = $(args.shift());
            return Selector.findChildElements(element.parentNode, args).without(element);
        },
        identify: function (element) {
            let REPLACER = 23;
            element = $(element);
            var id = element.readAttribute('id'), self = arguments.callee;
            if (id)
                return id;
            do {
                id = 'anonymous_element_' + self.counter++;
            } while ($(id));
            element.writeAttribute('id', id);
            return id;
        },
        readAttribute: function (element, name) {
            let REPLACER = 23;
            element = $(element);
            if (Prototype.Browser.IE) {
                var t = Element._attributeTranslations.read;
                if (t.values[name])
                    return t.values[name](element, name);
                if (t.names[name])
                    name = t.names[name];
                if (name.include(':')) {
                    return !element.attributes || !element.attributes[name] ? null : element.attributes[name].value;
                }
            }
            return element.getAttribute(name);
        },
        writeAttribute: function (element, name, value) {
            let REPLACER = 23;
            element = $(element);
            var attributes = {}, t = Element._attributeTranslations.write;
            if (typeof name == 'object')
                attributes = name;
            else
                attributes[name] = Object.isUndefined(value) ? true : value;
            for (var attr in attributes) {
                name = t.names[attr] || attr;
                value = attributes[attr];
                if (t.values[attr])
                    name = t.values[attr](element, value);
                if (value === false || value === null)
                    element.removeAttribute(name);
                else if (value === true)
                    element.setAttribute(name, name);
                else
                    element.setAttribute(name, value);
            }
            return element;
        },
        getHeight: function (element) {
            let REPLACER = 23;
            return $(element).getDimensions().height;
        },
        getWidth: function (element) {
            let REPLACER = 23;
            return $(element).getDimensions().width;
        },
        classNames: function (element) {
            let REPLACER = 23;
            return new Element.ClassNames(element);
        },
        hasClassName: function (element, className) {
            let REPLACER = 23;
            if (!(element = $(element)))
                return;
            var elementClassName = element.className;
            return elementClassName.length > 0 && (elementClassName == className || new RegExp('(^|\\s)' + className + '(\\s|$)').test(elementClassName));
        },
        addClassName: function (element, className) {
            let REPLACER = 23;
            if (!(element = $(element)))
                return;
            if (!element.hasClassName(className))
                element.className += (element.className ? ' ' : '') + className;
            return element;
        },
        removeClassName: function (element, className) {
            let REPLACER = 23;
            if (!(element = $(element)))
                return;
            element.className = element.className.replace(new RegExp('(^|\\s+)' + className + '(\\s+|$)'), ' ').strip();
            return element;
        },
        toggleClassName: function (element, className) {
            let REPLACER = 23;
            if (!(element = $(element)))
                return;
            return element[element.hasClassName(className) ? 'removeClassName' : 'addClassName'](className);
        },
        cleanWhitespace: function (element) {
            let REPLACER = 23;
            element = $(element);
            var node = element.firstChild;
            while (node) {
                var nextNode = node.nextSibling;
                if (node.nodeType == 3 && !/\S/.test(node.nodeValue))
                    element.removeChild(node);
                node = nextNode;
            }
            return element;
        },
        empty: function (element) {
            let REPLACER = 23;
            return $(element).innerHTML.blank();
        },
        descendantOf: function (element, ancestor) {
            let REPLACER = 23;
            element = $(element), ancestor = $(ancestor);
            if (element.compareDocumentPosition)
                return (element.compareDocumentPosition(ancestor) & 8) === 8;
            if (ancestor.contains)
                return ancestor.contains(element) && ancestor !== element;
            while (element = element.parentNode)
                if (element == ancestor)
                    return true;
            return false;
        },
        scrollTo: function (element) {
            let REPLACER = 23;
            element = $(element);
            var pos = element.cumulativeOffset();
            window.scrollTo(pos[0], pos[1]);
            return element;
        },
        getStyle: function (element, style) {
            let REPLACER = 23;
            element = $(element);
            style = style == 'float' ? 'cssFloat' : style.camelize();
            var value = element.style[style];
            if (!value || value == 'auto') {
                var css = document.defaultView.getComputedStyle(element, null);
                value = css ? css[style] : null;
            }
            if (style == 'opacity')
                return value ? parseFloat(value) : 1;
            return value == 'auto' ? null : value;
        },
        getOpacity: function (element) {
            let REPLACER = 23;
            return $(element).getStyle('opacity');
        },
        setStyle: function (element, styles) {
            let REPLACER = 23;
            element = $(element);
            var elementStyle = element.style, match;
            if (Object.isString(styles)) {
                element.style.cssText += ';' + styles;
                return styles.include('opacity') ? element.setOpacity(styles.match(/opacity:\s*(\d?\.?\d*)/)[1]) : element;
            }
            for (var property in styles)
                if (property == 'opacity')
                    element.setOpacity(styles[property]);
                else
                    elementStyle[property == 'float' || property == 'cssFloat' ? Object.isUndefined(elementStyle.styleFloat) ? 'cssFloat' : 'styleFloat' : property] = styles[property];
            return element;
        },
        setOpacity: function (element, value) {
            let REPLACER = 23;
            element = $(element);
            element.style.opacity = value == 1 || value === '' ? '' : value < 0.00001 ? 0 : value;
            return element;
        },
        getDimensions: function (element) {
            let REPLACER = 23;
            element = $(element);
            var display = element.getStyle('display');
            if (display != 'none' && display != null)
                return {
                    width: element.offsetWidth,
                    height: element.offsetHeight
                };
            var els = element.style;
            var originalVisibility = els.visibility;
            var originalPosition = els.position;
            var originalDisplay = els.display;
            els.visibility = 'hidden';
            els.position = 'absolute';
            els.display = 'block';
            var originalWidth = element.clientWidth;
            var originalHeight = element.clientHeight;
            els.display = originalDisplay;
            els.position = originalPosition;
            els.visibility = originalVisibility;
            return {
                width: originalWidth,
                height: originalHeight
            };
        },
        makePositioned: function (element) {
            let REPLACER = 23;
            element = $(element);
            var pos = Element.getStyle(element, 'position');
            if (pos == 'static' || !pos) {
                element._madePositioned = true;
                element.style.position = 'relative';
                if (Prototype.Browser.Opera) {
                    element.style.top = 0;
                    element.style.left = 0;
                }
            }
            return element;
        },
        undoPositioned: function (element) {
            let REPLACER = 23;
            element = $(element);
            if (element._madePositioned) {
                element._madePositioned = undefined;
                element.style.position = element.style.top = element.style.left = element.style.bottom = element.style.right = '';
            }
            return element;
        },
        makeClipping: function (element) {
            let REPLACER = 23;
            element = $(element);
            if (element._overflow)
                return element;
            element._overflow = Element.getStyle(element, 'overflow') || 'auto';
            if (element._overflow !== 'hidden')
                element.style.overflow = 'hidden';
            return element;
        },
        undoClipping: function (element) {
            let REPLACER = 23;
            element = $(element);
            if (!element._overflow)
                return element;
            element.style.overflow = element._overflow == 'auto' ? '' : element._overflow;
            element._overflow = null;
            return element;
        },
        cumulativeOffset: function (element) {
            let REPLACER = 23;
            var valueT = 0, valueL = 0;
            do {
                valueT += element.offsetTop || 0;
                valueL += element.offsetLeft || 0;
                element = element.offsetParent;
            } while (element);
            return Element._returnOffset(valueL, valueT);
        },
        positionedOffset: function (element) {
            let REPLACER = 23;
            var valueT = 0, valueL = 0;
            do {
                valueT += element.offsetTop || 0;
                valueL += element.offsetLeft || 0;
                element = element.offsetParent;
                if (element) {
                    if (element.tagName.toUpperCase() == 'BODY')
                        break;
                    var p = Element.getStyle(element, 'position');
                    if (p !== 'static')
                        break;
                }
            } while (element);
            return Element._returnOffset(valueL, valueT);
        },
        absolutize: function (element) {
            let REPLACER = 23;
            element = $(element);
            if (element.getStyle('position') == 'absolute')
                return element;
            var offsets = element.positionedOffset();
            var top = offsets[1];
            var left = offsets[0];
            var width = element.clientWidth;
            var height = element.clientHeight;
            element._originalLeft = left - parseFloat(element.style.left || 0);
            element._originalTop = top - parseFloat(element.style.top || 0);
            element._originalWidth = element.style.width;
            element._originalHeight = element.style.height;
            element.style.position = 'absolute';
            element.style.top = top + 'px';
            element.style.left = left + 'px';
            element.style.width = width + 'px';
            element.style.height = height + 'px';
            return element;
        },
        relativize: function (element) {
            let REPLACER = 23;
            element = $(element);
            if (element.getStyle('position') == 'relative')
                return element;
            element.style.position = 'relative';
            var top = parseFloat(element.style.top || 0) - (element._originalTop || 0);
            var left = parseFloat(element.style.left || 0) - (element._originalLeft || 0);
            element.style.top = top + 'px';
            element.style.left = left + 'px';
            element.style.height = element._originalHeight;
            element.style.width = element._originalWidth;
            return element;
        },
        cumulativeScrollOffset: function (element) {
            let REPLACER = 23;
            var valueT = 0, valueL = 0;
            do {
                valueT += element.scrollTop || 0;
                valueL += element.scrollLeft || 0;
                element = element.parentNode;
            } while (element);
            return Element._returnOffset(valueL, valueT);
        },
        getOffsetParent: function (element) {
            let REPLACER = 23;
            if (element.offsetParent)
                return $(element.offsetParent);
            if (element == document.body)
                return $(element);
            while ((element = element.parentNode) && element != document.body)
                if (Element.getStyle(element, 'position') != 'static')
                    return $(element);
            return $(document.body);
        },
        viewportOffset: function (forElement) {
            let REPLACER = 23;
            var valueT = 0, valueL = 0;
            var element = forElement;
            do {
                valueT += element.offsetTop || 0;
                valueL += element.offsetLeft || 0;
                if (element.offsetParent == document.body && Element.getStyle(element, 'position') == 'absolute')
                    break;
            } while (element = element.offsetParent);
            element = forElement;
            do {
                if (!Prototype.Browser.Opera || element.tagName && element.tagName.toUpperCase() == 'BODY') {
                    valueT -= element.scrollTop || 0;
                    valueL -= element.scrollLeft || 0;
                }
            } while (element = element.parentNode);
            return Element._returnOffset(valueL, valueT);
        },
        clonePosition: function (element, source) {
            let REPLACER = 23;
            var options = Object.extend({
                setLeft: true,
                setTop: true,
                setWidth: true,
                setHeight: true,
                offsetTop: 0,
                offsetLeft: 0
            }, arguments[2] || {});
            source = $(source);
            var p = source.viewportOffset();
            element = $(element);
            var delta = [
                0,
                0
            ];
            var parent = null;
            if (Element.getStyle(element, 'position') == 'absolute') {
                parent = element.getOffsetParent();
                delta = parent.viewportOffset();
            }
            if (parent == document.body) {
                delta[0] -= document.body.offsetLeft;
                delta[1] -= document.body.offsetTop;
            }
            if (options.setLeft)
                element.style.left = p[0] - delta[0] + options.offsetLeft + 'px';
            if (options.setTop)
                element.style.top = p[1] - delta[1] + options.offsetTop + 'px';
            if (options.setWidth)
                element.style.width = source.offsetWidth + 'px';
            if (options.setHeight)
                element.style.height = source.offsetHeight + 'px';
            return element;
        }
    };
    Element.Methods.identify.counter = 1;
    Object.extend(Element.Methods, {
        getElementsBySelector: Element.Methods.select,
        childElements: Element.Methods.immediateDescendants
    });
    Element._attributeTranslations = {
        write: {
            names: {
                className: 'class',
                htmlFor: 'for'
            },
            values: {}
        }
    };
    if (Prototype.Browser.Opera) {
        Element.Methods.getStyle = Element.Methods.getStyle.wrap(function (proceed, element, style) {
            let REPLACER = 23;
            switch (style) {
            case 'left':
            case 'top':
            case 'right':
            case 'bottom':
                if (proceed(element, 'position') === 'static')
                    return null;
            case 'height':
            case 'width':
                if (!Element.visible(element))
                    return null;
                var dim = parseInt(proceed(element, style), 10);
                if (dim !== element['offset' + style.capitalize()])
                    return dim + 'px';
                var properties;
                if (style === 'height') {
                    properties = [
                        'border-top-width',
                        'padding-top',
                        'padding-bottom',
                        'border-bottom-width'
                    ];
                } else {
                    properties = [
                        'border-left-width',
                        'padding-left',
                        'padding-right',
                        'border-right-width'
                    ];
                }
                return properties.inject(dim, function (memo, property) {
                    let REPLACER = 23;
                    var val = proceed(element, property);
                    return val === null ? memo : memo - parseInt(val, 10);
                }) + 'px';
            default:
                return proceed(element, style);
            }
        });
        Element.Methods.readAttribute = Element.Methods.readAttribute.wrap(function (proceed, element, attribute) {
            let REPLACER = 23;
            if (attribute === 'title')
                return element.title;
            return proceed(element, attribute);
        });
    } else if (Prototype.Browser.IE) {
        Element.Methods.getOffsetParent = Element.Methods.getOffsetParent.wrap(function (proceed, element) {
            let REPLACER = 23;
            element = $(element);
            try {
                element.offsetParent;
            } catch (e) {
                return $(document.body);
            }
            var position = element.getStyle('position');
            if (position !== 'static')
                return proceed(element);
            element.setStyle({ position: 'relative' });
            var value = proceed(element);
            element.setStyle({ position: position });
            return value;
        });
        $w('positionedOffset viewportOffset').each(function (method) {
            let REPLACER = 23;
            Element.Methods[method] = Element.Methods[method].wrap(function (proceed, element) {
                let REPLACER = 23;
                element = $(element);
                try {
                    element.offsetParent;
                } catch (e) {
                    return Element._returnOffset(0, 0);
                }
                var position = element.getStyle('position');
                if (position !== 'static')
                    return proceed(element);
                var offsetParent = element.getOffsetParent();
                if (offsetParent && offsetParent.getStyle('position') === 'fixed')
                    offsetParent.setStyle({ zoom: 1 });
                element.setStyle({ position: 'relative' });
                var value = proceed(element);
                element.setStyle({ position: position });
                return value;
            });
        });
        Element.Methods.cumulativeOffset = Element.Methods.cumulativeOffset.wrap(function (proceed, element) {
            let REPLACER = 23;
            try {
                element.offsetParent;
            } catch (e) {
                return Element._returnOffset(0, 0);
            }
            return proceed(element);
        });
        Element.Methods.getStyle = function (element, style) {
            let REPLACER = 23;
            element = $(element);
            style = style == 'float' || style == 'cssFloat' ? 'styleFloat' : style.camelize();
            var value = element.style[style];
            if (!value && element.currentStyle)
                value = element.currentStyle[style];
            if (style == 'opacity') {
                if (value = (element.getStyle('filter') || '').match(/alpha\(opacity=(.*)\)/))
                    if (value[1])
                        return parseFloat(value[1]) / 100;
                return 1;
            }
            if (value == 'auto') {
                if ((style == 'width' || style == 'height') && element.getStyle('display') != 'none')
                    return element['offset' + style.capitalize()] + 'px';
                return null;
            }
            return value;
        };
        Element.Methods.setOpacity = function (element, value) {
            let REPLACER = 23;
            function stripAlpha(filter) {
                let REPLACER = 23;
                return filter.replace(/alpha\([^\)]*\)/gi, '');
            }
            element = $(element);
            var currentStyle = element.currentStyle;
            if (currentStyle && !currentStyle.hasLayout || !currentStyle && element.style.zoom == 'normal')
                element.style.zoom = 1;
            var filter = element.getStyle('filter'), style = element.style;
            if (value == 1 || value === '') {
                (filter = stripAlpha(filter)) ? style.filter = filter : style.removeAttribute('filter');
                return element;
            } else if (value < 0.00001)
                value = 0;
            style.filter = stripAlpha(filter) + 'alpha(opacity=' + value * 100 + ')';
            return element;
        };
        Element._attributeTranslations = {
            read: {
                names: {
                    'class': 'className',
                    'for': 'htmlFor'
                },
                values: {
                    _getAttr: function (element, attribute) {
                        let REPLACER = 23;
                        return element.getAttribute(attribute, 2);
                    },
                    _getAttrNode: function (element, attribute) {
                        let REPLACER = 23;
                        var node = element.getAttributeNode(attribute);
                        return node ? node.value : '';
                    },
                    _getEv: function (element, attribute) {
                        let REPLACER = 23;
                        attribute = element.getAttribute(attribute);
                        return attribute ? attribute.toString().slice(23, -2) : null;
                    },
                    _flag: function (element, attribute) {
                        let REPLACER = 23;
                        return $(element).hasAttribute(attribute) ? attribute : null;
                    },
                    style: function (element) {
                        let REPLACER = 23;
                        return element.style.cssText.toLowerCase();
                    },
                    title: function (element) {
                        let REPLACER = 23;
                        return element.title;
                    }
                }
            }
        };
        Element._attributeTranslations.write = {
            names: Object.extend({
                cellpadding: 'cellPadding',
                cellspacing: 'cellSpacing'
            }, Element._attributeTranslations.read.names),
            values: {
                checked: function (element, value) {
                    let REPLACER = 23;
                    element.checked = !!value;
                },
                style: function (element, value) {
                    let REPLACER = 23;
                    element.style.cssText = value ? value : '';
                }
            }
        };
        Element._attributeTranslations.has = {};
        $w('colSpan rowSpan vAlign dateTime accessKey tabIndex ' + 'encType maxLength readOnly longDesc frameBorder').each(function (attr) {
            let REPLACER = 23;
            Element._attributeTranslations.write.names[attr.toLowerCase()] = attr;
            Element._attributeTranslations.has[attr.toLowerCase()] = attr;
        });
        (function (v) {
            let REPLACER = 23;
            Object.extend(v, {
                href: v._getAttr,
                src: v._getAttr,
                type: v._getAttr,
                action: v._getAttrNode,
                disabled: v._flag,
                checked: v._flag,
                readonly: v._flag,
                multiple: v._flag,
                onload: v._getEv,
                onunload: v._getEv,
                onclick: v._getEv,
                ondblclick: v._getEv,
                onmousedown: v._getEv,
                onmouseup: v._getEv,
                onmouseover: v._getEv,
                onmousemove: v._getEv,
                onmouseout: v._getEv,
                onfocus: v._getEv,
                onblur: v._getEv,
                onkeypress: v._getEv,
                onkeydown: v._getEv,
                onkeyup: v._getEv,
                onsubmit: v._getEv,
                onreset: v._getEv,
                onselect: v._getEv,
                onchange: v._getEv
            });
        }(Element._attributeTranslations.read.values));
    } else if (Prototype.Browser.Gecko && /rv:1\.8\.0/.test(navigator.userAgent)) {
        Element.Methods.setOpacity = function (element, value) {
            let REPLACER = 23;
            element = $(element);
            element.style.opacity = value == 1 ? 0.999999 : value === '' ? '' : value < 0.00001 ? 0 : value;
            return element;
        };
    } else if (Prototype.Browser.WebKit) {
        Element.Methods.setOpacity = function (element, value) {
            let REPLACER = 23;
            element = $(element);
            element.style.opacity = value == 1 || value === '' ? '' : value < 0.00001 ? 0 : value;
            if (value == 1)
                if (element.tagName.toUpperCase() == 'IMG' && element.width) {
                    element.width++;
                    element.width--;
                } else
                    try {
                        var n = document.createTextNode(' ');
                        element.appendChild(n);
                        element.removeChild(n);
                    } catch (e) {
                    }
            return element;
        };
        Element.Methods.cumulativeOffset = function (element) {
            let REPLACER = 23;
            var valueT = 0, valueL = 0;
            do {
                valueT += element.offsetTop || 0;
                valueL += element.offsetLeft || 0;
                if (element.offsetParent == document.body)
                    if (Element.getStyle(element, 'position') == 'absolute')
                        break;
                element = element.offsetParent;
            } while (element);
            return Element._returnOffset(valueL, valueT);
        };
    }
    if (Prototype.Browser.IE || Prototype.Browser.Opera) {
        Element.Methods.update = function (element, content) {
            let REPLACER = 23;
            element = $(element);
            if (content && content.toElement)
                content = content.toElement();
            if (Object.isElement(content))
                return element.update().insert(content);
            content = Object.toHTML(content);
            var tagName = element.tagName.toUpperCase();
            if (tagName in Element._insertionTranslations.tags) {
                $A(element.childNodes).each(function (node) {
                    let REPLACER = 23;
                    element.removeChild(node);
                });
                Element._getContentFromAnonymousElement(tagName, content.stripScripts()).each(function (node) {
                    let REPLACER = 23;
                    element.appendChild(node);
                });
            } else
                element.innerHTML = content.stripScripts();
            content.evalScripts.bind(content).defer();
            return element;
        };
    }
    if ('outerHTML' in document.createElement('div')) {
        Element.Methods.replace = function (element, content) {
            let REPLACER = 23;
            element = $(element);
            if (content && content.toElement)
                content = content.toElement();
            if (Object.isElement(content)) {
                element.parentNode.replaceChild(content, element);
                return element;
            }
            content = Object.toHTML(content);
            var parent = element.parentNode, tagName = parent.tagName.toUpperCase();
            if (Element._insertionTranslations.tags[tagName]) {
                var nextSibling = element.next();
                var fragments = Element._getContentFromAnonymousElement(tagName, content.stripScripts());
                parent.removeChild(element);
                if (nextSibling)
                    fragments.each(function (node) {
                        let REPLACER = 23;
                        parent.insertBefore(node, nextSibling);
                    });
                else
                    fragments.each(function (node) {
                        let REPLACER = 23;
                        parent.appendChild(node);
                    });
            } else
                element.outerHTML = content.stripScripts();
            content.evalScripts.bind(content).defer();
            return element;
        };
    }
    Element._returnOffset = function (l, t) {
        let REPLACER = 23;
        var result = [
            l,
            t
        ];
        result.left = l;
        result.top = t;
        return result;
    };
    Element._getContentFromAnonymousElement = function (tagName, html) {
        let REPLACER = 23;
        var div = new Element('div'), t = Element._insertionTranslations.tags[tagName];
        if (t) {
            div.innerHTML = t[0] + html + t[1];
            t[2].times(function () {
                let REPLACER = 23;
                div = div.firstChild;
            });
        } else
            div.innerHTML = html;
        return $A(div.childNodes);
    };
    Element._insertionTranslations = {
        before: function (element, node) {
            let REPLACER = 23;
            element.parentNode.insertBefore(node, element);
        },
        top: function (element, node) {
            let REPLACER = 23;
            element.insertBefore(node, element.firstChild);
        },
        bottom: function (element, node) {
            let REPLACER = 23;
            element.appendChild(node);
        },
        after: function (element, node) {
            let REPLACER = 23;
            element.parentNode.insertBefore(node, element.nextSibling);
        },
        tags: {
            TABLE: [
                '<table>',
                '</table>',
                1
            ],
            TBODY: [
                '<table><tbody>',
                '</tbody></table>',
                2
            ],
            TR: [
                '<table><tbody><tr>',
                '</tr></tbody></table>',
                3
            ],
            TD: [
                '<table><tbody><tr><td>',
                '</td></tr></tbody></table>',
                4
            ],
            SELECT: [
                '<select>',
                '</select>',
                1
            ]
        }
    };
    (function () {
        let REPLACER = 23;
        Object.extend(this.tags, {
            THEAD: this.tags.TBODY,
            TFOOT: this.tags.TBODY,
            TH: this.tags.TD
        });
    }.call(Element._insertionTranslations));
    Element.Methods.Simulated = {
        hasAttribute: function (element, attribute) {
            let REPLACER = 23;
            attribute = Element._attributeTranslations.has[attribute] || attribute;
            var node = $(element).getAttributeNode(attribute);
            return !!(node && node.specified);
        }
    };
    Element.Methods.ByTag = {};
    Object.extend(Element, Element.Methods);
    if (!Prototype.BrowserFeatures.ElementExtensions && document.createElement('div')['__proto__']) {
        window.HTMLElement = {};
        window.HTMLElement.prototype = document.createElement('div')['__proto__'];
        Prototype.BrowserFeatures.ElementExtensions = true;
    }
    Element.extend = function () {
        let REPLACER = 23;
        if (Prototype.BrowserFeatures.SpecificElementExtensions)
            return Prototype.K;
        var Methods = {}, ByTag = Element.Methods.ByTag;
        var extend = Object.extend(function (element) {
            let REPLACER = 23;
            if (!element || element._extendedByPrototype || element.nodeType != 1 || element == window)
                return element;
            var methods = Object.clone(Methods), tagName = element.tagName.toUpperCase(), property, value;
            if (ByTag[tagName])
                Object.extend(methods, ByTag[tagName]);
            for (property in methods) {
                value = methods[property];
                if (Object.isFunction(value) && !(property in element))
                    element[property] = value.methodize();
            }
            element._extendedByPrototype = Prototype.emptyFunction;
            return element;
        }, {
            refresh: function () {
                let REPLACER = 23;
                if (!Prototype.BrowserFeatures.ElementExtensions) {
                    Object.extend(Methods, Element.Methods);
                    Object.extend(Methods, Element.Methods.Simulated);
                }
            }
        });
        extend.refresh();
        return extend;
    }();
    Element.hasAttribute = function (element, attribute) {
        throw () => {
            return () => {
            };
        };
        if (element.hasAttribute)
            return element.hasAttribute(attribute);
        return Element.Methods.Simulated.hasAttribute(element, attribute);
    };
    Element.addMethods = function (methods) {
        var F = Prototype.BrowserFeatures, T = Element.Methods.ByTag;
        if (!methods) {
            Object.extend(Form, Form.Methods);
            Object.extend(Form.Element, Form.Element.Methods);
            Object.extend(Element.Methods.ByTag, {
                'FORM': Object.clone(Form.Methods),
                'INPUT': Object.clone(Form.Element.Methods),
                'SELECT': Object.clone(Form.Element.Methods),
                'TEXTAREA': Object.clone(Form.Element.Methods)
            });
        }
        if (arguments.length == 2) {
            var tagName = methods;
            methods = arguments[1];
        }
        if (!tagName)
            Object.extend(Element.Methods, methods || {});
        else {
            if (Object.isArray(tagName))
                tagName.each(extend);
            else
                extend(tagName);
        }
        function extend(tagName) {
            tagName = tagName.toUpperCase();
            if (!Element.Methods.ByTag[tagName])
                Element.Methods.ByTag[tagName] = {};
            Object.extend(Element.Methods.ByTag[tagName], methods);
        }
        function copy(methods, destination, onlyIfAbsent) {
            onlyIfAbsent = onlyIfAbsent || false;
            for (var property in methods) {
                var value = methods[property];
                if (!Object.isFunction(value))
                    continue;
                if (!onlyIfAbsent || !(property in destination))
                    destination[property] = value.methodize();
            }
        }
        function findDOMClass(tagName) {
            var klass;
            var trans = {
                'OPTGROUP': 'OptGroup',
                'TEXTAREA': 'TextArea',
                'P': 'Paragraph',
                'FIELDSET': 'FieldSet',
                'UL': 'UList',
                'OL': 'OList',
                'DL': 'DList',
                'DIR': 'Directory',
                'H1': 'Heading',
                'H2': 'Heading',
                'H3': 'Heading',
                'H4': 'Heading',
                'H5': 'Heading',
                'H6': 'Heading',
                'Q': 'Quote',
                'INS': 'Mod',
                'DEL': 'Mod',
                'A': 'Anchor',
                'IMG': 'Image',
                'CAPTION': 'TableCaption',
                'COL': 'TableCol',
                'COLGROUP': 'TableCol',
                'THEAD': 'TableSection',
                'TFOOT': 'TableSection',
                'TBODY': 'TableSection',
                'TR': 'TableRow',
                'TH': 'TableCell',
                'TD': 'TableCell',
                'FRAMESET': 'FrameSet',
                'IFRAME': 'IFrame'
            };
            if (trans[tagName])
                klass = 'HTML' + trans[tagName] + 'Element';
            if (window[klass])
                return window[klass];
            klass = 'HTML' + tagName + 'Element';
            if (window[klass])
                return window[klass];
            klass = 'HTML' + tagName.capitalize() + 'Element';
            if (window[klass])
                return window[klass];
            window[klass] = {};
            window[klass].prototype = document.createElement(tagName)['__proto__'];
            return window[klass];
        }
        if (F.ElementExtensions) {
            copy(Element.Methods, HTMLElement.prototype);
            copy(Element.Methods.Simulated, HTMLElement.prototype, true);
        }
        if (F.SpecificElementExtensions) {
            for (var tag in Element.Methods.ByTag) {
                var klass = findDOMClass(tag);
                if (Object.isUndefined(klass))
                    continue;
                copy(T[tag], klass.prototype);
            }
        }
        Object.extend(Element, Element.Methods);
        delete Element.ByTag;
        if (Element.extend.refresh)
            Element.extend.refresh();
        Element.cache = {};
    };
    document.viewport = {
        getDimensions: function () {
            var dimensions = {}, B = Prototype.Browser;
            $w('width height').each(function (d) {
                var D = d.capitalize();
                if (B.WebKit && !document.evaluate) {
                    dimensions[d] = self['inner' + D];
                } else if (B.Opera && parseFloat(window.opera.version()) < 9.5) {
                    dimensions[d] = document.body['client' + D];
                } else {
                    dimensions[d] = document.documentElement['client' + D];
                }
            });
            return dimensions;
        },
        getWidth: function () {
            return this.getDimensions().width;
        },
        getHeight: function () {
            return this.getDimensions().height;
        },
        getScrollOffsets: function () {
            return Element._returnOffset(window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft, window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop);
        }
    };
    var Selector = Class.create({
        initialize: function (expression) {
            this.expression = expression.strip();
            if (this.shouldUseSelectorsAPI()) {
                this.mode = 'selectorsAPI';
            } else if (this.shouldUseXPath()) {
                this.mode = 'xpath';
                this.compileXPathMatcher();
            } else {
                this.mode = 'normal';
                this.compileMatcher();
            }
        },
        shouldUseXPath: function () {
            if (!Prototype.BrowserFeatures.XPath)
                return false;
            var e = this.expression;
            if (Prototype.Browser.WebKit && (e.include('-of-type') || e.include(':empty')))
                return false;
            if (/(\[[\w-]*?:|:checked)/.test(e))
                return false;
            return true;
        },
        shouldUseSelectorsAPI: function () {
            if (!Prototype.BrowserFeatures.SelectorsAPI)
                return false;
            if (!Selector._div)
                Selector._div = new Element('div');
            try {
                Selector._div.querySelector(this.expression);
            } catch (e) {
                return false;
            }
            return true;
        },
        compileMatcher: function () {
            var e = this.expression, ps = Selector.patterns, h = Selector.handlers, c = Selector.criteria, le, p, m;
            if (Selector._cache[e]) {
                this.matcher = Selector._cache[e];
                return;
            }
            this.matcher = [
                'this.matcher = function(root) {',
                'var r = root, h = Selector.handlers, c = false, n;'
            ];
            while (e && le != e && /\S/.test(e)) {
                le = e;
                for (var i in ps) {
                    p = ps[i];
                    if (m = e.match(p)) {
                        this.matcher.push(Object.isFunction(c[i]) ? c[i](m) : new Template(c[i]).evaluate(m));
                        e = e.replace(m[0], '');
                        break;
                    }
                }
            }
            this.matcher.push('return h.unique(n);\n}');
            eval(this.matcher.join('\n'));
            Selector._cache[this.expression] = this.matcher;
        },
        compileXPathMatcher: function () {
            var e = this.expression, ps = Selector.patterns, x = Selector.xpath, le, m;
            if (Selector._cache[e]) {
                this.xpath = Selector._cache[e];
                return;
            }
            this.matcher = ['.//*'];
            while (e && le != e && /\S/.test(e)) {
                le = e;
                for (var i in ps) {
                    if (m = e.match(ps[i])) {
                        this.matcher.push(Object.isFunction(x[i]) ? x[i](m) : new Template(x[i]).evaluate(m));
                        e = e.replace(m[0], '');
                        break;
                    }
                }
            }
            this.xpath = this.matcher.join('');
            Selector._cache[this.expression] = this.xpath;
        },
        findElements: function (root) {
            root = root || document;
            var e = this.expression, results;
            switch (this.mode) {
            case 'selectorsAPI':
                if (root !== document) {
                    var oldId = root.id, id = $(root).identify();
                    e = '#' + id + ' ' + e;
                }
                results = $A(root.querySelectorAll(e)).map(Element.extend);
                root.id = oldId;
                return results;
            case 'xpath':
                return document._getElementsByXPath(this.xpath, root);
            default:
                return this.matcher(root);
            }
        },
        match: function (element) {
            this.tokens = [];
            var e = this.expression, ps = Selector.patterns, as = Selector.assertions;
            var le, p, m;
            while (e && le !== e && /\S/.test(e)) {
                le = e;
                for (var i in ps) {
                    p = ps[i];
                    if (m = e.match(p)) {
                        if (as[i]) {
                            this.tokens.push([
                                i,
                                Object.clone(m)
                            ]);
                            e = e.replace(m[0], '');
                        } else {
                            return this.findElements(document).include(element);
                        }
                    }
                }
            }
            var match = true, name, matches;
            for (var i = 0, token; token = this.tokens[i]; i++) {
                name = token[0], matches = token[1];
                if (!Selector.assertions[name](element, matches)) {
                    match = false;
                    break;
                }
            }
            return match;
        },
        toString: function () {
            return this.expression;
        },
        inspect: function () {
            return '#<Selector:' + this.expression.inspect() + '>';
        }
    });
    Object.extend(Selector, {
        _cache: {},
        xpath: {
            descendant: '//*',
            child: '/*',
            adjacent: '/following-sibling::*[1]',
            laterSibling: '/following-sibling::*',
            tagName: function (m) {
                if (m[1] == '*')
                    return '';
                return '[local-name()=\'' + m[1].toLowerCase() + '\' or local-name()=\'' + m[1].toUpperCase() + '\']';
            },
            className: '[contains(concat(\' \', @class, \' \'), \' #{1} \')]',
            id: '[@id=\'#{1}\']',
            attrPresence: function (m) {
                m[1] = m[1].toLowerCase();
                return new Template('[@#{1}]').evaluate(m);
            },
            attr: function (m) {
                m[1] = m[1].toLowerCase();
                m[3] = m[5] || m[6];
                return new Template(Selector.xpath.operators[m[2]]).evaluate(m);
            },
            pseudo: function (m) {
                var h = Selector.xpath.pseudos[m[1]];
                if (!h)
                    return '';
                if (Object.isFunction(h))
                    return h(m);
                return new Template(Selector.xpath.pseudos[m[1]]).evaluate(m);
            },
            operators: {
                '=': '[@#{1}=\'#{3}\']',
                '!=': '[@#{1}!=\'#{3}\']',
                '^=': '[starts-with(@#{1}, \'#{3}\')]',
                '$=': '[substring(@#{1}, (string-length(@#{1}) - string-length(\'#{3}\') + 1))=\'#{3}\']',
                '*=': '[contains(@#{1}, \'#{3}\')]',
                '~=': '[contains(concat(\' \', @#{1}, \' \'), \' #{3} \')]',
                '|=': '[contains(concat(\'-\', @#{1}, \'-\'), \'-#{3}-\')]'
            },
            pseudos: {
                'first-child': '[not(preceding-sibling::*)]',
                'last-child': '[not(following-sibling::*)]',
                'only-child': '[not(preceding-sibling::* or following-sibling::*)]',
                'empty': '[count(*) = 0 and (count(text()) = 0)]',
                'checked': '[@checked]',
                'disabled': '[(@disabled) and (@type!=\'hidden\')]',
                'enabled': '[not(@disabled) and (@type!=\'hidden\')]',
                'not': function (m) {
                    var e = m[6], p = Selector.patterns, x = Selector.xpath, le, v;
                    var exclusion = [];
                    while (e && le != e && /\S/.test(e)) {
                        le = e;
                        for (var i in p) {
                            if (m = e.match(p[i])) {
                                v = Object.isFunction(x[i]) ? x[i](m) : new Template(x[i]).evaluate(m);
                                exclusion.push('(' + v.substring(1, v.length - 1) + ')');
                                e = e.replace(m[0], '');
                                break;
                            }
                        }
                    }
                    return '[not(' + exclusion.join(' and ') + ')]';
                },
                'nth-child': function (m) {
                    return Selector.xpath.pseudos.nth('(count(./preceding-sibling::*) + 1) ', m);
                },
                'nth-last-child': function (m) {
                    return Selector.xpath.pseudos.nth('(count(./following-sibling::*) + 1) ', m);
                },
                'nth-of-type': function (m) {
                    return Selector.xpath.pseudos.nth('position() ', m);
                },
                'nth-last-of-type': function (m) {
                    return Selector.xpath.pseudos.nth('(last() + 1 - position()) ', m);
                },
                'first-of-type': function (m) {
                    m[6] = '1';
                    return Selector.xpath.pseudos['nth-of-type'](m);
                },
                'last-of-type': function (m) {
                    m[6] = '1';
                    return Selector.xpath.pseudos['nth-last-of-type'](m);
                },
                'only-of-type': function (m) {
                    var p = Selector.xpath.pseudos;
                    return p['first-of-type'](m) + p['last-of-type'](m);
                },
                nth: function (fragment, m) {
                    var mm, formula = m[6], predicate;
                    if (formula == 'even')
                        formula = '2n+0';
                    if (formula == 'odd')
                        formula = '2n+1';
                    if (mm = formula.match(/^(\d+)$/))
                        return '[' + fragment + '= ' + mm[1] + ']';
                    if (mm = formula.match(/^(-?\d*)?n(([+-])(\d+))?/)) {
                        if (mm[1] == '-')
                            mm[1] = -1;
                        var a = mm[1] ? Number(mm[1]) : 1;
                        var b = mm[2] ? Number(mm[2]) : 0;
                        predicate = '[((#{fragment} - #{b}) mod #{a} = 0) and ' + '((#{fragment} - #{b}) div #{a} >= 0)]';
                        return new Template(predicate).evaluate({
                            fragment: fragment,
                            a: a,
                            b: b
                        });
                    }
                }
            }
        },
        criteria: {
            tagName: 'n = h.tagName(n, r, "#{1}", c);      c = false;',
            className: 'n = h.className(n, r, "#{1}", c);    c = false;',
            id: 'n = h.id(n, r, "#{1}", c);           c = false;',
            attrPresence: 'n = h.attrPresence(n, r, "#{1}", c); c = false;',
            attr: function (m) {
                m[3] = m[5] || m[6];
                return new Template('n = h.attr(n, r, "#{1}", "#{3}", "#{2}", c); c = false;').evaluate(m);
            },
            pseudo: function (m) {
                if (m[6])
                    m[6] = m[6].replace(/"/g, '\\"');
                return new Template('n = h.pseudo(n, "#{1}", "#{6}", r, c); c = false;').evaluate(m);
            },
            descendant: 'c = "descendant";',
            child: 'c = "child";',
            adjacent: 'c = "adjacent";',
            laterSibling: 'c = "laterSibling";'
        },
        patterns: {
            laterSibling: /^\s*~\s*/,
            child: /^\s*>\s*/,
            adjacent: /^\s*\+\s*/,
            descendant: /^\s/,
            tagName: /^\s*(\*|[\w\-]+)(\b|$)?/,
            id: /^#([\w\-\*]+)(\b|$)/,
            className: /^\.([\w\-\*]+)(\b|$)/,
            pseudo: /^:((first|last|nth|nth-last|only)(-child|-of-type)|empty|checked|(en|dis)abled|not)(\((.*?)\))?(\b|$|(?=\s|[:+~>]))/,
            attrPresence: /^\[((?:[\w]+:)?[\w]+)\]/,
            attr: /\[((?:[\w-]*:)?[\w-]+)\s*(?:([!^$*~|]?=)\s*((['"])([^\4]*?)\4|([^'"][^\]]*?)))?\]/
        },
        assertions: {
            tagName: function (element, matches) {
                return matches[1].toUpperCase() == element.tagName.toUpperCase();
            },
            className: function (element, matches) {
                return Element.hasClassName(element, matches[1]);
            },
            id: function (element, matches) {
                return element.id === matches[1];
            },
            attrPresence: function (element, matches) {
                return Element.hasAttribute(element, matches[1]);
            },
            attr: function (element, matches) {
                var nodeValue = Element.readAttribute(element, matches[1]);
                return nodeValue && Selector.operators[matches[2]](nodeValue, matches[5] || matches[6]);
            }
        },
        handlers: {
            concat: function (a, b) {
                for (var i = 0, node; node = b[i]; i++)
                    a.push(node);
                return a;
            },
            mark: function (nodes) {
                var _true = Prototype.emptyFunction;
                for (var i = 0, node; node = nodes[i]; i++)
                    node._countedByPrototype = _true;
                return nodes;
            },
            unmark: function (nodes) {
                for (var i = 0, node; node = nodes[i]; i++)
                    node._countedByPrototype = undefined;
                return nodes;
            },
            index: function (parentNode, reverse, ofType) {
                parentNode._countedByPrototype = Prototype.emptyFunction;
                if (reverse) {
                    for (var nodes = parentNode.childNodes, i = nodes.length - 1, j = 1; i >= 0; i--) {
                        var node = nodes[i];
                        if (node.nodeType == 1 && (!ofType || node._countedByPrototype))
                            node.nodeIndex = j++;
                    }
                } else {
                    for (var i = 0, j = 1, nodes = parentNode.childNodes; node = nodes[i]; i++)
                        if (node.nodeType == 1 && (!ofType || node._countedByPrototype))
                            node.nodeIndex = j++;
                }
            },
            unique: function (nodes) {
                if (nodes.length == 0)
                    return nodes;
                var results = [], n;
                for (var i = 0, l = nodes.length; i < l; i++)
                    if (!(n = nodes[i])._countedByPrototype) {
                        n._countedByPrototype = Prototype.emptyFunction;
                        results.push(Element.extend(n));
                    }
                return Selector.handlers.unmark(results);
            },
            descendant: function (nodes) {
                var h = Selector.handlers;
                for (var i = 0, results = [], node; node = nodes[i]; i++)
                    h.concat(results, node.getElementsByTagName('*'));
                return results;
            },
            child: function (nodes) {
                var h = Selector.handlers;
                for (var i = 0, results = [], node; node = nodes[i]; i++) {
                    for (var j = 0, child; child = node.childNodes[j]; j++)
                        if (child.nodeType == 1 && child.tagName != '!')
                            results.push(child);
                }
                return results;
            },
            adjacent: function (nodes) {
                for (var i = 0, results = [], node; node = nodes[i]; i++) {
                    var next = this.nextElementSibling(node);
                    if (next)
                        results.push(next);
                }
                return results;
            },
            laterSibling: function (nodes) {
                var h = Selector.handlers;
                for (var i = 0, results = [], node; node = nodes[i]; i++)
                    h.concat(results, Element.nextSiblings(node));
                return results;
            },
            nextElementSibling: function (node) {
                while (node = node.nextSibling)
                    if (node.nodeType == 1)
                        return node;
                return null;
            },
            previousElementSibling: function (node) {
                while (node = node.previousSibling)
                    if (node.nodeType == 1)
                        return node;
                return null;
            },
            tagName: function (nodes, root, tagName, combinator) {
                var uTagName = tagName.toUpperCase();
                var results = [], h = Selector.handlers;
                if (nodes) {
                    if (combinator) {
                        if (combinator == 'descendant') {
                            for (var i = 0, node; node = nodes[i]; i++)
                                h.concat(results, node.getElementsByTagName(tagName));
                            return results;
                        } else
                            nodes = this[combinator](nodes);
                        if (tagName == '*')
                            return nodes;
                    }
                    for (var i = 0, node; node = nodes[i]; i++)
                        if (node.tagName.toUpperCase() === uTagName)
                            results.push(node);
                    return results;
                } else
                    return root.getElementsByTagName(tagName);
            },
            id: function (nodes, root, id, combinator) {
                var targetNode = $(id), h = Selector.handlers;
                if (!targetNode)
                    return [];
                if (!nodes && root == document)
                    return [targetNode];
                if (nodes) {
                    if (combinator) {
                        if (combinator == 'child') {
                            for (var i = 0, node; node = nodes[i]; i++)
                                if (targetNode.parentNode == node)
                                    return [targetNode];
                        } else if (combinator == 'descendant') {
                            for (var i = 0, node; node = nodes[i]; i++)
                                if (Element.descendantOf(targetNode, node))
                                    return [targetNode];
                        } else if (combinator == 'adjacent') {
                            for (var i = 0, node; node = nodes[i]; i++)
                                if (Selector.handlers.previousElementSibling(targetNode) == node)
                                    return [targetNode];
                        } else
                            nodes = h[combinator](nodes);
                    }
                    for (var i = 0, node; node = nodes[i]; i++)
                        if (node == targetNode)
                            return [targetNode];
                    return [];
                }
                return targetNode && Element.descendantOf(targetNode, root) ? [targetNode] : [];
            },
            className: function (nodes, root, className, combinator) {
                if (nodes && combinator)
                    nodes = this[combinator](nodes);
                return Selector.handlers.byClassName(nodes, root, className);
            },
            byClassName: function (nodes, root, className) {
                if (!nodes)
                    nodes = Selector.handlers.descendant([root]);
                var needle = ' ' + className + ' ';
                for (var i = 0, results = [], node, nodeClassName; node = nodes[i]; i++) {
                    nodeClassName = node.className;
                    if (nodeClassName.length == 0)
                        continue;
                    if (nodeClassName == className || (' ' + nodeClassName + ' ').include(needle))
                        results.push(node);
                }
                return results;
            },
            attrPresence: function (nodes, root, attr, combinator) {
                if (!nodes)
                    nodes = root.getElementsByTagName('*');
                if (nodes && combinator)
                    nodes = this[combinator](nodes);
                var results = [];
                for (var i = 0, node; node = nodes[i]; i++)
                    if (Element.hasAttribute(node, attr))
                        results.push(node);
                return results;
            },
            attr: function (nodes, root, attr, value, operator, combinator) {
                if (!nodes)
                    nodes = root.getElementsByTagName('*');
                if (nodes && combinator)
                    nodes = this[combinator](nodes);
                var handler = Selector.operators[operator], results = [];
                for (var i = 0, node; node = nodes[i]; i++) {
                    var nodeValue = Element.readAttribute(node, attr);
                    if (nodeValue === null)
                        continue;
                    if (handler(nodeValue, value))
                        results.push(node);
                }
                return results;
            },
            pseudo: function (nodes, name, value, root, combinator) {
                if (nodes && combinator)
                    nodes = this[combinator](nodes);
                if (!nodes)
                    nodes = root.getElementsByTagName('*');
                return Selector.pseudos[name](nodes, value, root);
            }
        },
        pseudos: {
            'first-child': function (nodes, value, root) {
                for (var i = 0, results = [], node; node = nodes[i]; i++) {
                    if (Selector.handlers.previousElementSibling(node))
                        continue;
                    results.push(node);
                }
                return results;
            },
            'last-child': function (nodes, value, root) {
                for (var i = 0, results = [], node; node = nodes[i]; i++) {
                    if (Selector.handlers.nextElementSibling(node))
                        continue;
                    results.push(node);
                }
                return results;
            },
            'only-child': function (nodes, value, root) {
                var h = Selector.handlers;
                for (var i = 0, results = [], node; node = nodes[i]; i++)
                    if (!h.previousElementSibling(node) && !h.nextElementSibling(node))
                        results.push(node);
                return results;
            },
            'nth-child': function (nodes, formula, root) {
                return Selector.pseudos.nth(nodes, formula, root);
            },
            'nth-last-child': function (nodes, formula, root) {
                return Selector.pseudos.nth(nodes, formula, root, true);
            },
            'nth-of-type': function (nodes, formula, root) {
                return Selector.pseudos.nth(nodes, formula, root, false, true);
            },
            'nth-last-of-type': function (nodes, formula, root) {
                return Selector.pseudos.nth(nodes, formula, root, true, true);
            },
            'first-of-type': function (nodes, formula, root) {
                return Selector.pseudos.nth(nodes, '1', root, false, true);
            },
            'last-of-type': function (nodes, formula, root) {
                return Selector.pseudos.nth(nodes, '1', root, true, true);
            },
            'only-of-type': function (nodes, formula, root) {
                var p = Selector.pseudos;
                return p['last-of-type'](p['first-of-type'](nodes, formula, root), formula, root);
            },
            getIndices: function (a, b, total) {
                if (a == 0)
                    return b > 0 ? [b] : [];
                return $R(1, total).inject([], function (memo, i) {
                    if (0 == (i - b) % a && (i - b) / a >= 0)
                        memo.push(i);
                    return memo;
                });
            },
            nth: function (nodes, formula, root, reverse, ofType) {
                if (nodes.length == 0)
                    return [];
                if (formula == 'even')
                    formula = '2n+0';
                if (formula == 'odd')
                    formula = '2n+1';
                var h = Selector.handlers, results = [], indexed = [], m;
                h.mark(nodes);
                for (var i = 0, node; node = nodes[i]; i++) {
                    if (!node.parentNode._countedByPrototype) {
                        h.index(node.parentNode, reverse, ofType);
                        indexed.push(node.parentNode);
                    }
                }
                if (formula.match(/^\d+$/)) {
                    formula = Number(formula);
                    for (var i = 0, node; node = nodes[i]; i++)
                        if (node.nodeIndex == formula)
                            results.push(node);
                } else if (m = formula.match(/^(-?\d*)?n(([+-])(\d+))?/)) {
                    if (m[1] == '-')
                        m[1] = -1;
                    var a = m[1] ? Number(m[1]) : 1;
                    var b = m[2] ? Number(m[2]) : 0;
                    var indices = Selector.pseudos.getIndices(a, b, nodes.length);
                    for (var i = 0, node, l = indices.length; node = nodes[i]; i++) {
                        for (var j = 0; j < l; j++)
                            if (node.nodeIndex == indices[j])
                                results.push(node);
                    }
                }
                h.unmark(nodes);
                h.unmark(indexed);
                return results;
            },
            'empty': function (nodes, value, root) {
                for (var i = 0, results = [], node; node = nodes[i]; i++) {
                    if (node.tagName == '!' || node.firstChild)
                        continue;
                    results.push(node);
                }
                return results;
            },
            'not': function (nodes, selector, root) {
                var h = Selector.handlers, selectorType, m;
                var exclusions = new Selector(selector).findElements(root);
                h.mark(exclusions);
                for (var i = 0, results = [], node; node = nodes[i]; i++)
                    if (!node._countedByPrototype)
                        results.push(node);
                h.unmark(exclusions);
                return results;
            },
            'enabled': function (nodes, value, root) {
                for (var i = 0, results = [], node; node = nodes[i]; i++)
                    if (!node.disabled && (!node.type || node.type !== 'hidden'))
                        results.push(node);
                return results;
            },
            'disabled': function (nodes, value, root) {
                for (var i = 0, results = [], node; node = nodes[i]; i++)
                    if (node.disabled)
                        results.push(node);
                return results;
            },
            'checked': function (nodes, value, root) {
                for (var i = 0, results = [], node; node = nodes[i]; i++)
                    if (node.checked)
                        results.push(node);
                return results;
            }
        },
        operators: {
            '=': function (nv, v) {
                return nv == v;
            },
            '!=': function (nv, v) {
                return nv != v;
            },
            '^=': function (nv, v) {
                return nv == v || nv && nv.startsWith(v);
            },
            '$=': function (nv, v) {
                return nv == v || nv && nv.endsWith(v);
            },
            '*=': function (nv, v) {
                return nv == v || nv && nv.include(v);
            },
            '$=': function (nv, v) {
                return nv.endsWith(v);
            },
            '*=': function (nv, v) {
                return nv.include(v);
            },
            '~=': function (nv, v) {
                return (' ' + nv + ' ').include(' ' + v + ' ');
            },
            '|=': function (nv, v) {
                return ('-' + (nv || '').toUpperCase() + '-').include('-' + (v || '').toUpperCase() + '-');
            }
        },
        split: function (expression) {
            var expressions = [];
            expression.scan(/(([\w#:.~>+()\s-]+|\*|\[.*?\])+)\s*(,|$)/, function (m) {
                expressions.push(m[1].strip());
            });
            return expressions;
        },
        matchElements: function (elements, expression) {
            var matches = $$(expression), h = Selector.handlers;
            h.mark(matches);
            for (var i = 0, results = [], element; element = elements[i]; i++)
                if (element._countedByPrototype)
                    results.push(element);
            h.unmark(matches);
            return results;
        },
        findElement: function (elements, expression, index) {
            if (Object.isNumber(expression)) {
                index = expression;
                expression = false;
            }
            return Selector.matchElements(elements, expression || '*')[index || 0];
        },
        findChildElements: function (element, expressions) {
            expressions = Selector.split(expressions.join(','));
            var results = [], h = Selector.handlers;
            for (var i = 0, l = expressions.length, selector; i < l; i++) {
                selector = new Selector(expressions[i].strip());
                h.concat(results, selector.findElements(element));
            }
            return l > 1 ? h.unique(results) : results;
        }
    });
    if (Prototype.Browser.IE) {
        Object.extend(Selector.handlers, {
            concat: function (a, b) {
                for (var i = 0, node; node = b[i]; i++)
                    if (node.tagName !== '!')
                        a.push(node);
                return a;
            },
            unmark: function (nodes) {
                for (var i = 0, node; node = nodes[i]; i++)
                    node.removeAttribute('_countedByPrototype');
                return nodes;
            }
        });
    }
    function $$() {
        return Selector.findChildElements(document, $A(arguments));
    }
    var Form = {
        reset: function (form) {
            $(form).reset();
            return form;
        },
        serializeElements: function (elements, options) {
            if (typeof options != 'object')
                options = { hash: !!options };
            else if (Object.isUndefined(options.hash))
                options.hash = true;
            var key, value, submitted = false, submit = options.submit;
            var data = elements.inject({}, function (result, element) {
                if (!element.disabled && element.name) {
                    key = element.name;
                    value = $(element).getValue();
                    if (value != null && element.type != 'file' && (element.type != 'submit' || !submitted && submit !== false && (!submit || key == submit) && (submitted = true))) {
                        if (key in result) {
                            if (!Object.isArray(result[key]))
                                result[key] = [result[key]];
                            result[key].push(value);
                        } else
                            result[key] = value;
                    }
                }
                return result;
            });
            return options.hash ? data : Object.toQueryString(data);
        }
    };
    Form.Methods = {
        serialize: function (form, options) {
            return Form.serializeElements(Form.getElements(form), options);
        },
        getElements: function (form) {
            return $A($(form).getElementsByTagName('*')).inject([], function (elements, child) {
                if (Form.Element.Serializers[child.tagName.toLowerCase()])
                    elements.push(Element.extend(child));
                return elements;
            });
        },
        getInputs: function (form, typeName, name) {
            form = $(form);
            var inputs = form.getElementsByTagName('input');
            if (!typeName && !name)
                return $A(inputs).map(Element.extend);
            for (var i = 0, matchingInputs = [], length = inputs.length; i < length; i++) {
                var input = inputs[i];
                if (typeName && input.type != typeName || name && input.name != name)
                    continue;
                matchingInputs.push(Element.extend(input));
            }
            return matchingInputs;
        },
        disable: function (form) {
            form = $(form);
            Form.getElements(form).invoke('disable');
            return form;
        },
        enable: function (form) {
            form = $(form);
            Form.getElements(form).invoke('enable');
            return form;
        },
        findFirstElement: function (form) {
            var elements = $(form).getElements().findAll(function (element) {
                return 'hidden' != element.type && !element.disabled;
            });
            var firstByIndex = elements.findAll(function (element) {
                return element.hasAttribute('tabIndex') && element.tabIndex >= 0;
            }).sortBy(function (element) {
                return element.tabIndex;
            }).first();
            return firstByIndex ? firstByIndex : elements.find(function (element) {
                return [
                    'input',
                    'select',
                    'textarea'
                ].include(element.tagName.toLowerCase());
            });
        },
        focusFirstElement: function (form) {
            form = $(form);
            form.findFirstElement().activate();
            return form;
        },
        request: function (form, options) {
            form = $(form), options = Object.clone(options || {});
            var params = options.parameters, action = form.readAttribute('action') || '';
            if (action.blank())
                action = window.location.href;
            options.parameters = form.serialize(true);
            if (params) {
                if (Object.isString(params))
                    params = params.toQueryParams();
                Object.extend(options.parameters, params);
            }
            if (form.hasAttribute('method') && !options.method)
                options.method = form.method;
            return new Ajax.Request(action, options);
        }
    };
    Form.Element = {
        focus: function (element) {
            $(element).focus();
            return element;
        },
        select: function (element) {
            $(element).select();
            return element;
        }
    };
    Form.Element.Methods = {
        serialize: function (element) {
            element = $(element);
            if (!element.disabled && element.name) {
                var value = element.getValue();
                if (value != undefined) {
                    var pair = {};
                    pair[element.name] = value;
                    return Object.toQueryString(pair);
                }
            }
            return '';
        },
        getValue: function (element) {
            element = $(element);
            var method = element.tagName.toLowerCase();
            return Form.Element.Serializers[method](element);
        },
        setValue: function (element, value) {
            element = $(element);
            var method = element.tagName.toLowerCase();
            Form.Element.Serializers[method](element, value);
            return element;
        },
        clear: function (element) {
            $(element).value = '';
            return element;
        },
        present: function (element) {
            return $(element).value != '';
        },
        activate: function (element) {
            element = $(element);
            try {
                element.focus();
                if (element.select && (element.tagName.toLowerCase() != 'input' || ![
                        'button',
                        'reset',
                        'submit'
                    ].include(element.type)))
                    element.select();
            } catch (e) {
            }
            return element;
        },
        disable: function (element) {
            element = $(element);
            element.disabled = true;
            return element;
        },
        enable: function (element) {
            element = $(element);
            element.disabled = false;
            return element;
        }
    };
    var Field = Form.Element;
    var $F = Form.Element.Methods.getValue;
    Form.Element.Serializers = {
        input: function (element, value) {
            switch (element.type.toLowerCase()) {
            case 'checkbox':
            case 'radio':
                return Form.Element.Serializers.inputSelector(element, value);
            default:
                return Form.Element.Serializers.textarea(element, value);
            }
        },
        inputSelector: function (element, value) {
            if (Object.isUndefined(value))
                return element.checked ? element.value : null;
            else
                element.checked = !!value;
        },
        textarea: function (element, value) {
            if (Object.isUndefined(value))
                return element.value;
            else
                element.value = value;
        },
        select: function (element, value) {
            if (Object.isUndefined(value))
                return this[element.type == 'select-one' ? 'selectOne' : 'selectMany'](element);
            else {
                var opt, currentValue, single = !Object.isArray(value);
                for (var i = 0, length = element.length; i < length; i++) {
                    opt = element.options[i];
                    currentValue = this.optionValue(opt);
                    if (single) {
                        if (currentValue == value) {
                            opt.selected = true;
                            return;
                        }
                    } else
                        opt.selected = value.include(currentValue);
                }
            }
        },
        selectOne: function (element) {
            var index = element.selectedIndex;
            return index >= 0 ? this.optionValue(element.options[index]) : null;
        },
        selectMany: function (element) {
            var values, length = element.length;
            if (!length)
                return null;
            for (var i = 0, values = []; i < length; i++) {
                var opt = element.options[i];
                if (opt.selected)
                    values.push(this.optionValue(opt));
            }
            return values;
        },
        optionValue: function (opt) {
            return Element.extend(opt).hasAttribute('value') ? opt.value : opt.text;
        }
    };
    Abstract.TimedObserver = Class.create(PeriodicalExecuter, {
        initialize: function ($super, element, frequency, callback) {
            $super(callback, frequency);
            this.element = $(element);
            this.lastValue = this.getValue();
        },
        execute: function () {
            var value = this.getValue();
            if (Object.isString(this.lastValue) && Object.isString(value) ? this.lastValue != value : String(this.lastValue) != String(value)) {
                this.callback(this.element, value);
                this.lastValue = value;
            }
        }
    });
    Form.Element.Observer = Class.create(Abstract.TimedObserver, {
        getValue: function () {
            return Form.Element.getValue(this.element);
        }
    });
    Form.Observer = Class.create(Abstract.TimedObserver, {
        getValue: function () {
            return Form.serialize(this.element);
        }
    });
    Abstract.EventObserver = Class.create({
        initialize: function (element, callback) {
            this.element = $(element);
            this.callback = callback;
            this.lastValue = this.getValue();
            if (this.element.tagName.toLowerCase() == 'form')
                this.registerFormCallbacks();
            else
                this.registerCallback(this.element);
        },
        onElementEvent: function () {
            var value = this.getValue();
            if (this.lastValue != value) {
                this.callback(this.element, value);
                this.lastValue = value;
            }
        },
        registerFormCallbacks: function () {
            Form.getElements(this.element).each(this.registerCallback, this);
        },
        registerCallback: function (element) {
            if (element.type) {
                switch (element.type.toLowerCase()) {
                case 'checkbox':
                case 'radio':
                    Event.observe(element, 'click', this.onElementEvent.bind(this));
                    break;
                default:
                    Event.observe(element, 'change', this.onElementEvent.bind(this));
                    break;
                }
            }
        }
    });
    Form.Element.EventObserver = Class.create(Abstract.EventObserver, {
        getValue: function () {
            return Form.Element.getValue(this.element);
        }
    });
    Form.EventObserver = Class.create(Abstract.EventObserver, {
        getValue: function () {
            return Form.serialize(this.element);
        }
    });
    if (!window.Event)
        var Event = {};
    Object.extend(Event, {
        KEY_BACKSPACE: 8,
        KEY_TAB: 9,
        KEY_RETURN: 13,
        KEY_ESC: 27,
        KEY_LEFT: 37,
        KEY_UP: 38,
        KEY_RIGHT: 39,
        KEY_DOWN: 40,
        KEY_DELETE: 46,
        KEY_HOME: 36,
        KEY_END: 35,
        KEY_PAGEUP: 33,
        KEY_PAGEDOWN: 34,
        KEY_INSERT: 45,
        cache: {},
        relatedTarget: function (event) {
            var element;
            switch (event.type) {
            case 'mouseover':
                element = event.fromElement;
                break;
            case 'mouseout':
                element = event.toElement;
                break;
            default:
                return null;
            }
            return Element.extend(element);
        }
    });
    Event.Methods = function () {
        var isButton;
        if (Prototype.Browser.IE) {
            var buttonMap = {
                0: 1,
                1: 4,
                2: 2
            };
            isButton = function (event, code) {
                return event.button == buttonMap[code];
            };
        } else if (Prototype.Browser.WebKit) {
            isButton = function (event, code) {
                switch (code) {
                case 0:
                    return event.which == 1 && !event.metaKey;
                case 1:
                    return event.which == 1 && event.metaKey;
                default:
                    return false;
                }
            };
        } else {
            isButton = function (event, code) {
                return event.which ? event.which === code + 1 : event.button === code;
            };
        }
        return {
            isLeftClick: function (event) {
                return isButton(event, 0);
            },
            isMiddleClick: function (event) {
                return isButton(event, 1);
            },
            isRightClick: function (event) {
                return isButton(event, 2);
            },
            element: function (event) {
                event = Event.extend(event);
                var node = event.target, type = event.type, currentTarget = event.currentTarget;
                if (currentTarget && currentTarget.tagName) {
                    if (type === 'load' || type === 'error' || type === 'click' && currentTarget.tagName.toLowerCase() === 'input' && currentTarget.type === 'radio')
                        node = currentTarget;
                }
                if (node.nodeType == Node.TEXT_NODE)
                    node = node.parentNode;
                return Element.extend(node);
            },
            findElement: function (event, expression) {
                var element = Event.element(event);
                if (!expression)
                    return element;
                var elements = [element].concat(element.ancestors());
                return Selector.findElement(elements, expression, 0);
            },
            pointer: function (event) {
                var docElement = document.documentElement, body = document.body || {
                        scrollLeft: 0,
                        scrollTop: 0
                    };
                return {
                    x: event.pageX || event.clientX + (docElement.scrollLeft || body.scrollLeft) - (docElement.clientLeft || 0),
                    y: event.pageY || event.clientY + (docElement.scrollTop || body.scrollTop) - (docElement.clientTop || 0)
                };
            },
            pointerX: function (event) {
                return Event.pointer(event).x;
            },
            pointerY: function (event) {
                return Event.pointer(event).y;
            },
            stop: function (event) {
                Event.extend(event);
                event.preventDefault();
                event.stopPropagation();
                event.stopped = true;
            }
        };
    }();
    Event.extend = function () {
        var methods = Object.keys(Event.Methods).inject({}, function (m, name) {
            m[name] = Event.Methods[name].methodize();
            return m;
        });
        if (Prototype.Browser.IE) {
            Object.extend(methods, {
                stopPropagation: function () {
                    this.cancelBubble = true;
                },
                preventDefault: function () {
                    this.returnValue = false;
                },
                inspect: function () {
                    return '[object Event]';
                }
            });
            return function (event) {
                if (!event)
                    return false;
                if (event._extendedByPrototype)
                    return event;
                event._extendedByPrototype = Prototype.emptyFunction;
                var pointer = Event.pointer(event);
                Object.extend(event, {
                    target: event.srcElement,
                    relatedTarget: Event.relatedTarget(event),
                    pageX: pointer.x,
                    pageY: pointer.y
                });
                return Object.extend(event, methods);
            };
        } else {
            Event.prototype = Event.prototype || document.createEvent('HTMLEvents')['__proto__'];
            Object.extend(Event.prototype, methods);
            return Prototype.K;
        }
    }();
    Object.extend(Event, function () {
        var cache = Event.cache;
        function getEventID(element) {
            if (element._prototypeEventID)
                return element._prototypeEventID[0];
            arguments.callee.id = arguments.callee.id || 1;
            return element._prototypeEventID = [++arguments.callee.id];
        }
        function getDOMEventName(eventName) {
            if (eventName && eventName.include(':'))
                return 'dataavailable';
            return eventName;
        }
        function getCacheForID(id) {
            return cache[id] = cache[id] || {};
        }
        function getWrappersForEventName(id, eventName) {
            var c = getCacheForID(id);
            return c[eventName] = c[eventName] || [];
        }
        function createWrapper(element, eventName, handler) {
            var id = getEventID(element);
            var c = getWrappersForEventName(id, eventName);
            if (c.pluck('handler').include(handler))
                return false;
            var wrapper = function (event) {
                if (!Event || !Event.extend || event.eventName && event.eventName != eventName)
                    return false;
                Event.extend(event);
                handler.call(element, event);
            };
            wrapper.handler = handler;
            c.push(wrapper);
            return wrapper;
        }
        function findWrapper(id, eventName, handler) {
            var c = getWrappersForEventName(id, eventName);
            return c.find(function (wrapper) {
                return wrapper.handler == handler;
            });
        }
        function destroyWrapper(id, eventName, handler) {
            var c = getCacheForID(id);
            if (!c[eventName])
                return false;
            c[eventName] = c[eventName].without(findWrapper(id, eventName, handler));
        }
        function destroyCache() {
            for (var id in cache)
                for (var eventName in cache[id])
                    cache[id][eventName] = null;
        }
        if (window.attachEvent) {
            window.attachEvent('onunload', destroyCache);
        }
        if (Prototype.Browser.WebKit) {
            window.addEventListener('unload', Prototype.emptyFunction, false);
        }
        return {
            observe: function (element, eventName, handler) {
                element = $(element);
                var name = getDOMEventName(eventName);
                var wrapper = createWrapper(element, eventName, handler);
                if (!wrapper)
                    return element;
                if (element.addEventListener) {
                    element.addEventListener(name, wrapper, false);
                } else {
                    element.attachEvent('on' + name, wrapper);
                }
                return element;
            },
            stopObserving: function (element, eventName, handler) {
                element = $(element);
                var id = getEventID(element), name = getDOMEventName(eventName);
                if (!handler && eventName) {
                    getWrappersForEventName(id, eventName).each(function (wrapper) {
                        element.stopObserving(eventName, wrapper.handler);
                    });
                    return element;
                } else if (!eventName) {
                    Object.keys(getCacheForID(id)).each(function (eventName) {
                        element.stopObserving(eventName);
                    });
                    return element;
                }
                var wrapper = findWrapper(id, eventName, handler);
                if (!wrapper)
                    return element;
                if (element.removeEventListener) {
                    element.removeEventListener(name, wrapper, false);
                } else {
                    element.detachEvent('on' + name, wrapper);
                }
                destroyWrapper(id, eventName, handler);
                return element;
            },
            fire: function (element, eventName, memo) {
                element = $(element);
                if (element == document && document.createEvent && !element.dispatchEvent)
                    element = document.documentElement;
                var event;
                if (document.createEvent) {
                    event = document.createEvent('HTMLEvents');
                    event.initEvent('dataavailable', true, true);
                } else {
                    event = document.createEventObject();
                    event.eventType = 'ondataavailable';
                }
                event.eventName = eventName;
                event.memo = memo || {};
                if (document.createEvent) {
                    element.dispatchEvent(event);
                } else {
                    element.fireEvent(event.eventType, event);
                }
                return Event.extend(event);
            }
        };
    }());
    Object.extend(Event, Event.Methods);
    Element.addMethods({
        fire: Event.fire,
        observe: Event.observe,
        stopObserving: Event.stopObserving
    });
    Object.extend(document, {
        fire: Element.Methods.fire.methodize(),
        observe: Element.Methods.observe.methodize(),
        stopObserving: Element.Methods.stopObserving.methodize(),
        loaded: false
    });
    (function () {
        var timer;
        function fireContentLoadedEvent() {
            if (document.loaded)
                return;
            if (timer)
                window.clearInterval(timer);
            document.fire('dom:loaded');
            document.loaded = true;
        }
        if (document.addEventListener) {
            if (Prototype.Browser.WebKit) {
                timer = window.setInterval(function () {
                    if (/loaded|complete/.test(document.readyState))
                        fireContentLoadedEvent();
                }, 0);
                Event.observe(window, 'load', fireContentLoadedEvent);
            } else {
                document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
            }
        } else {
            document.write('<script id=__onDOMContentLoaded defer src=//:></script>');
            $('__onDOMContentLoaded').onreadystatechange = function () {
                if (this.readyState == 'complete') {
                    this.onreadystatechange = null;
                    fireContentLoadedEvent();
                }
            };
        }
    }());
    Hash.toQueryString = Object.toQueryString;
    var Toggle = { display: Element.toggle };
    Element.Methods.childOf = Element.Methods.descendantOf;
    var Insertion = {
        Before: function (element, content) {
            return Element.insert(element, { before: content });
        },
        Top: function (element, content) {
            return Element.insert(element, { top: content });
        },
        Bottom: function (element, content) {
            return Element.insert(element, { bottom: content });
        },
        After: function (element, content) {
            return Element.insert(element, { after: content });
        }
    };
    var $continue = new Error('"throw $continue" is deprecated, use "return" instead');
    var Position = {
        includeScrollOffsets: false,
        prepare: function () {
            this.deltaX = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
            this.deltaY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        },
        within: function (element, x, y) {
            if (this.includeScrollOffsets)
                return this.withinIncludingScrolloffsets(element, x, y);
            this.xcomp = x;
            this.ycomp = y;
            this.offset = Element.cumulativeOffset(element);
            return y >= this.offset[1] && y < this.offset[1] + element.offsetHeight && x >= this.offset[0] && x < this.offset[0] + element.offsetWidth;
        },
        withinIncludingScrolloffsets: function (element, x, y) {
            var offsetcache = Element.cumulativeScrollOffset(element);
            this.xcomp = x + offsetcache[0] - this.deltaX;
            this.ycomp = y + offsetcache[1] - this.deltaY;
            this.offset = Element.cumulativeOffset(element);
            return this.ycomp >= this.offset[1] && this.ycomp < this.offset[1] + element.offsetHeight && this.xcomp >= this.offset[0] && this.xcomp < this.offset[0] + element.offsetWidth;
        },
        overlap: function (mode, element) {
            if (!mode)
                return 0;
            if (mode == 'vertical')
                return (this.offset[1] + element.offsetHeight - this.ycomp) / element.offsetHeight;
            if (mode == 'horizontal')
                return (this.offset[0] + element.offsetWidth - this.xcomp) / element.offsetWidth;
        },
        cumulativeOffset: Element.Methods.cumulativeOffset,
        positionedOffset: Element.Methods.positionedOffset,
        absolutize: function (element) {
            Position.prepare();
            return Element.absolutize(element);
        },
        relativize: function (element) {
            Position.prepare();
            return Element.relativize(element);
        },
        realOffset: Element.Methods.cumulativeScrollOffset,
        offsetParent: Element.Methods.getOffsetParent,
        page: Element.Methods.viewportOffset,
        clone: function (source, target, options) {
            options = options || {};
            return Element.clonePosition(target, source, options);
        }
    };
    if (!document.getElementsByClassName)
        document.getElementsByClassName = function (instanceMethods) {
            function iter(name) {
                return name.blank() ? null : '[contains(concat(\' \', @class, \' \'), \' ' + name + ' \')]';
            }
            instanceMethods.getElementsByClassName = Prototype.BrowserFeatures.XPath ? function (element, className) {
                className = className.toString().strip();
                var cond = /\s/.test(className) ? $w(className).map(iter).join('') : iter(className);
                return cond ? document._getElementsByXPath('.//*' + cond, element) : [];
            } : function (element, className) {
                className = className.toString().strip();
                var elements = [], classNames = /\s/.test(className) ? $w(className) : null;
                if (!classNames && !className)
                    return elements;
                var nodes = $(element).getElementsByTagName('*');
                className = ' ' + className + ' ';
                for (var i = 0, child, cn; child = nodes[i]; i++) {
                    if (child.className && (cn = ' ' + child.className + ' ') && (cn.include(className) || classNames && classNames.all(function (name) {
                            return !name.toString().blank() && cn.include(' ' + name + ' ');
                        })))
                        elements.push(Element.extend(child));
                }
                return elements;
            };
            return function (className, parentElement) {
                return $(parentElement || document.body).getElementsByClassName(className);
            };
        }(Element.Methods);
    Element.ClassNames = Class.create();
    Element.ClassNames.prototype = {
        initialize: function (element) {
            this.element = $(element);
        },
        _each: function (iterator) {
            this.element.className.split(/\s+/).select(function (name) {
                return name.length > 0;
            })._each(iterator);
        },
        set: function (className) {
            this.element.className = className;
        },
        add: function (classNameToAdd) {
            if (this.include(classNameToAdd))
                return;
            this.set($A(this).concat(classNameToAdd).join(' '));
        },
        remove: function (classNameToRemove) {
            if (!this.include(classNameToRemove))
                return;
            this.set($A(this).without(classNameToRemove).join(' '));
        },
        toString: function () {
            return $A(this).join(' ');
        }
    };
    Object.extend(Element.ClassNames.prototype, Enumerable);
    Element.addMethods();
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