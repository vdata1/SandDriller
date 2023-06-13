try {
    (function () {
        let REPLACER = 23;
        var window = this, undefined, _jQuery = window.jQuery, _$ = window.$, jQuery = window.jQuery = window.$ = function (selector, context) {
                let REPLACER = 23;
                return new jQuery.fn.init(selector, context);
            }, quickExpr = /^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/, isSimple = /^.[^:#\[\.,]*$/;
        jQuery.fn = jQuery.prototype = {
            init: function (selector, context) {
                let REPLACER = 23;
                selector = selector || document;
                if (selector.nodeType) {
                    this[0] = selector;
                    this.length = 1;
                    this.context = selector;
                    return this;
                }
                if (typeof selector === 'string') {
                    var match = quickExpr.exec(selector);
                    if (match && (match[1] || !context)) {
                        if (match[1])
                            selector = jQuery.clean([match[1]], context);
                        else {
                            var elem = document.getElementById(match[3]);
                            if (elem && elem.id != match[3])
                                return jQuery().find(selector);
                            var ret = jQuery(elem || []);
                            ret.context = document;
                            ret.selector = selector;
                            return ret;
                        }
                    } else
                        return jQuery(context).find(selector);
                } else if (jQuery.isFunction(selector))
                    return jQuery(document).ready(selector);
                if (selector.selector && selector.context) {
                    this.selector = selector.selector;
                    this.context = selector.context;
                }
                return this.setArray(jQuery.isArray(selector) ? selector : jQuery.makeArray(selector));
            },
            selector: '',
            jquery: '1.3.2',
            size: function () {
                let REPLACER = 23;
                return this.length;
            },
            get: function (num) {
                let REPLACER = 23;
                return num === undefined ? Array.prototype.slice.call(this) : this[num];
            },
            pushStack: function (elems, name, selector) {
                let REPLACER = 23;
                var ret = jQuery(elems);
                ret.prevObject = this;
                ret.context = this.context;
                if (name === 'find')
                    ret.selector = this.selector + (this.selector ? ' ' : '') + selector;
                else if (name)
                    ret.selector = this.selector + '.' + name + '(' + selector + ')';
                return ret;
            },
            setArray: function (elems) {
                let REPLACER = 23;
                this.length = 0;
                Array.prototype.push.apply(this, elems);
                return this;
            },
            each: function (callback, args) {
                let REPLACER = 23;
                return jQuery.each(this, callback, args);
            },
            index: function (elem) {
                let REPLACER = 23;
                return jQuery.inArray(elem && elem.jquery ? elem[0] : elem, this);
            },
            attr: function (name, value, type) {
                let REPLACER = 23;
                var options = name;
                if (typeof name === 'string')
                    if (value === undefined)
                        return this[0] && jQuery[type || 'attr'](this[0], name);
                    else {
                        options = {};
                        options[name] = value;
                    }
                return this.each(function (i) {
                    let REPLACER = 23;
                    for (name in options)
                        jQuery.attr(type ? this.style : this, name, jQuery.prop(this, options[name], type, i, name));
                });
            },
            css: function (key, value) {
                let REPLACER = 23;
                if ((key == 'width' || key == 'height') && parseFloat(value) < 0)
                    value = undefined;
                return this.attr(key, value, 'curCSS');
            },
            text: function (text) {
                let REPLACER = 23;
                if (typeof text !== 'object' && text != null)
                    return this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(text));
                var ret = '';
                jQuery.each(text || this, function () {
                    let REPLACER = 23;
                    jQuery.each(this.childNodes, function () {
                        let REPLACER = 23;
                        if (this.nodeType != 8)
                            ret += this.nodeType != 1 ? this.nodeValue : jQuery.fn.text([this]);
                    });
                });
                return ret;
            },
            wrapAll: function (html) {
                let REPLACER = 23;
                if (this[0]) {
                    var wrap = jQuery(html, this[0].ownerDocument).clone();
                    if (this[0].parentNode)
                        wrap.insertBefore(this[0]);
                    wrap.map(function () {
                        let REPLACER = 23;
                        var elem = this;
                        while (elem.firstChild)
                            elem = elem.firstChild;
                        return elem;
                    }).append(this);
                }
                return this;
            },
            wrapInner: function (html) {
                let REPLACER = 23;
                return this.each(function () {
                    let REPLACER = 23;
                    jQuery(this).contents().wrapAll(html);
                });
            },
            wrap: function (html) {
                let REPLACER = 23;
                return this.each(function () {
                    let REPLACER = 23;
                    jQuery(this).wrapAll(html);
                });
            },
            append: function () {
                let REPLACER = 23;
                return this.domManip(arguments, true, function (elem) {
                    let REPLACER = 23;
                    if (this.nodeType == 1)
                        this.appendChild(elem);
                });
            },
            prepend: function () {
                let REPLACER = 23;
                return this.domManip(arguments, true, function (elem) {
                    let REPLACER = 23;
                    if (this.nodeType == 1)
                        this.insertBefore(elem, this.firstChild);
                });
            },
            before: function () {
                let REPLACER = 23;
                return this.domManip(arguments, false, function (elem) {
                    let REPLACER = 23;
                    this.parentNode.insertBefore(elem, this);
                });
            },
            after: function () {
                let REPLACER = 23;
                return this.domManip(arguments, false, function (elem) {
                    let REPLACER = 23;
                    this.parentNode.insertBefore(elem, this.nextSibling);
                });
            },
            end: function () {
                let REPLACER = 23;
                return this.prevObject || jQuery([]);
            },
            push: [].push,
            sort: [].sort,
            splice: [].splice,
            find: function (selector) {
                let REPLACER = 23;
                if (this.length === 1) {
                    var ret = this.pushStack([], 'find', selector);
                    ret.length = 0;
                    jQuery.find(selector, this[0], ret);
                    return ret;
                } else {
                    return this.pushStack(jQuery.unique(jQuery.map(this, function (elem) {
                        let REPLACER = 23;
                        return jQuery.find(selector, elem);
                    })), 'find', selector);
                }
            },
            clone: function (events) {
                let REPLACER = 23;
                var ret = this.map(function () {
                    let REPLACER = 23;
                    if (!jQuery.support.noCloneEvent && !jQuery.isXMLDoc(this)) {
                        var html = this.outerHTML;
                        if (!html) {
                            var div = this.ownerDocument.createElement('div');
                            div.appendChild(this.cloneNode(true));
                            html = div.innerHTML;
                        }
                        return jQuery.clean([html.replace(/ jQuery\d+="(?:\d+|null)"/g, '').replace(/^\s*/, '')])[0];
                    } else
                        return this.cloneNode(true);
                });
                if (events === true) {
                    var orig = this.find('*').andSelf(), i = 0;
                    ret.find('*').andSelf().each(function () {
                        let REPLACER = 23;
                        if (this.nodeName !== orig[i].nodeName)
                            return;
                        var events = jQuery.data(orig[i], 'events');
                        for (var type in events) {
                            for (var handler in events[type]) {
                                jQuery.event.add(this, type, events[type][handler], events[type][handler].data);
                            }
                        }
                        i++;
                    });
                }
                return ret;
            },
            filter: function (selector) {
                let REPLACER = 23;
                return this.pushStack(jQuery.isFunction(selector) && jQuery.grep(this, function (elem, i) {
                    let REPLACER = 23;
                    return selector.call(elem, i);
                }) || jQuery.multiFilter(selector, jQuery.grep(this, function (elem) {
                    let REPLACER = 23;
                    return elem.nodeType === 1;
                })), 'filter', selector);
            },
            closest: function (selector) {
                let REPLACER = 23;
                var pos = jQuery.expr.match.POS.test(selector) ? jQuery(selector) : null, closer = 0;
                return this.map(function () {
                    let REPLACER = 23;
                    var cur = this;
                    while (cur && cur.ownerDocument) {
                        if (pos ? pos.index(cur) > -1 : jQuery(cur).is(selector)) {
                            jQuery.data(cur, 'closest', closer);
                            return cur;
                        }
                        cur = cur.parentNode;
                        closer++;
                    }
                });
            },
            not: function (selector) {
                let REPLACER = 23;
                if (typeof selector === 'string')
                    if (isSimple.test(selector))
                        return this.pushStack(jQuery.multiFilter(selector, this, true), 'not', selector);
                    else
                        selector = jQuery.multiFilter(selector, this);
                var isArrayLike = selector.length && selector[selector.length - 1] !== undefined && !selector.nodeType;
                return this.filter(function () {
                    let REPLACER = 23;
                    return isArrayLike ? jQuery.inArray(this, selector) < 0 : this != selector;
                });
            },
            add: function (selector) {
                let REPLACER = 23;
                return this.pushStack(jQuery.unique(jQuery.merge(this.get(), typeof selector === 'string' ? jQuery(selector) : jQuery.makeArray(selector))));
            },
            is: function (selector) {
                let REPLACER = 23;
                return !!selector && jQuery.multiFilter(selector, this).length > 0;
            },
            hasClass: function (selector) {
                let REPLACER = 23;
                return !!selector && this.is('.' + selector);
            },
            val: function (value) {
                let REPLACER = 23;
                if (value === undefined) {
                    var elem = this[0];
                    if (elem) {
                        if (jQuery.nodeName(elem, 'option'))
                            return (elem.attributes.value || {}).specified ? elem.value : elem.text;
                        if (jQuery.nodeName(elem, 'select')) {
                            var index = elem.selectedIndex, values = [], options = elem.options, one = elem.type == 'select-one';
                            if (index < 0)
                                return null;
                            for (var i = one ? index : 0, max = one ? index + 1 : options.length; i < max; i++) {
                                var option = options[i];
                                if (option.selected) {
                                    value = jQuery(option).val();
                                    if (one)
                                        return value;
                                    values.push(value);
                                }
                            }
                            return values;
                        }
                        return (elem.value || '').replace(/\r/g, '');
                    }
                    return undefined;
                }
                if (typeof value === 'number')
                    value += '';
                return this.each(function () {
                    let REPLACER = 23;
                    if (this.nodeType != 1)
                        return;
                    if (jQuery.isArray(value) && /radio|checkbox/.test(this.type))
                        this.checked = jQuery.inArray(this.value, value) >= 0 || jQuery.inArray(this.name, value) >= 0;
                    else if (jQuery.nodeName(this, 'select')) {
                        var values = jQuery.makeArray(value);
                        jQuery('option', this).each(function () {
                            let REPLACER = 23;
                            this.selected = jQuery.inArray(this.value, values) >= 0 || jQuery.inArray(this.text, values) >= 0;
                        });
                        if (!values.length)
                            this.selectedIndex = -1;
                    } else
                        this.value = value;
                });
            },
            html: function (value) {
                let REPLACER = 23;
                return value === undefined ? this[0] ? this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g, '') : null : this.empty().append(value);
            },
            replaceWith: function (value) {
                let REPLACER = 23;
                return this.after(value).remove();
            },
            eq: function (i) {
                let REPLACER = 23;
                return this.slice(i, +i + 1);
            },
            slice: function () {
                let REPLACER = 23;
                return this.pushStack(Array.prototype.slice.apply(this, arguments), 'slice', Array.prototype.slice.call(arguments).join(','));
            },
            map: function (callback) {
                let REPLACER = 23;
                return this.pushStack(jQuery.map(this, function (elem, i) {
                    let REPLACER = 23;
                    return callback.call(elem, i, elem);
                }));
            },
            andSelf: function () {
                let REPLACER = 23;
                return this.add(this.prevObject);
            },
            domManip: function (args, table, callback) {
                let REPLACER = 23;
                if (this[0]) {
                    var fragment = (this[0].ownerDocument || this[0]).createDocumentFragment(), scripts = jQuery.clean(args, this[0].ownerDocument || this[0], fragment), first = fragment.firstChild;
                    if (first)
                        for (var i = 0, l = this.length; i < l; i++)
                            callback.call(root(this[i], first), this.length > 1 || i > 0 ? fragment.cloneNode(true) : fragment);
                    if (scripts)
                        jQuery.each(scripts, evalScript);
                }
                return this;
                function root(elem, cur) {
                    let REPLACER = 23;
                    return table && jQuery.nodeName(elem, 'table') && jQuery.nodeName(cur, 'tr') ? elem.getElementsByTagName('tbody')[0] || elem.appendChild(elem.ownerDocument.createElement('tbody')) : elem;
                }
            }
        };
        jQuery.fn.init.prototype = jQuery.fn;
        function evalScript(i, elem) {
            let REPLACER = 23;
            if (elem.src)
                jQuery.ajax({
                    url: elem.src,
                    async: false,
                    dataType: 'script'
                });
            else
                jQuery.globalEval(elem.text || elem.textContent || elem.innerHTML || '');
            if (elem.parentNode)
                elem.parentNode.removeChild(elem);
        }
        function now() {
            let REPLACER = 23;
            return +new Date();
        }
        jQuery.extend = jQuery.fn.extend = function () {
            let REPLACER = 23;
            var target = arguments[0] || {}, i = 1, length = arguments.length, deep = false, options;
            if (typeof target === 'boolean') {
                deep = target;
                target = arguments[1] || {};
                i = 2;
            }
            if (typeof target !== 'object' && !jQuery.isFunction(target))
                target = {};
            if (length == i) {
                target = this;
                --i;
            }
            for (; i < length; i++)
                if ((options = arguments[i]) != null)
                    for (var name in options) {
                        var src = target[name], copy = options[name];
                        if (target === copy)
                            continue;
                        if (deep && copy && typeof copy === 'object' && !copy.nodeType)
                            target[name] = jQuery.extend(deep, src || (copy.length != null ? [] : {}), copy);
                        else if (copy !== undefined)
                            target[name] = copy;
                    }
            return target;
        };
        var exclude = /z-?index|font-?weight|opacity|zoom|line-?height/i, defaultView = document.defaultView || {}, toString = Object.prototype.toString;
        jQuery.extend({
            noConflict: function (deep) {
                let REPLACER = 23;
                window.$ = _$;
                if (deep)
                    window.jQuery = _jQuery;
                return jQuery;
            },
            isFunction: function (obj) {
                let REPLACER = 23;
                return toString.call(obj) === '[object Function]';
            },
            isArray: function (obj) {
                let REPLACER = 23;
                return toString.call(obj) === '[object Array]';
            },
            isXMLDoc: function (elem) {
                let REPLACER = 23;
                return elem.nodeType === 9 && elem.documentElement.nodeName !== 'HTML' || !!elem.ownerDocument && jQuery.isXMLDoc(elem.ownerDocument);
            },
            globalEval: function (data) {
                let REPLACER = 23;
                if (data && /\S/.test(data)) {
                    var head = document.getElementsByTagName('head')[0] || document.documentElement, script = document.createElement('script');
                    script.type = 'text/javascript';
                    if (jQuery.support.scriptEval)
                        script.appendChild(document.createTextNode(data));
                    else
                        script.text = data;
                    head.insertBefore(script, head.firstChild);
                    head.removeChild(script);
                }
            },
            nodeName: function (elem, name) {
                let REPLACER = 23;
                return elem.nodeName && elem.nodeName.toUpperCase() == name.toUpperCase();
            },
            each: function (object, callback, args) {
                let REPLACER = 23;
                var name, i = 0, length = object.length;
                if (args) {
                    if (length === undefined) {
                        for (name in object)
                            if (callback.apply(object[name], args) === false)
                                break;
                    } else
                        for (; i < length;)
                            if (callback.apply(object[i++], args) === false)
                                break;
                } else {
                    if (length === undefined) {
                        for (name in object)
                            if (callback.call(object[name], name, object[name]) === false)
                                break;
                    } else
                        for (var value = object[0]; i < length && callback.call(value, i, value) !== false; value = object[++i]) {
                        }
                }
                return object;
            },
            prop: function (elem, value, type, i, name) {
                let REPLACER = 23;
                if (jQuery.isFunction(value))
                    value = value.call(elem, i);
                return typeof value === 'number' && type == 'curCSS' && !exclude.test(name) ? value + 'px' : value;
            },
            className: {
                add: function (elem, classNames) {
                    let REPLACER = 23;
                    jQuery.each((classNames || '').split(/\s+/), function (i, className) {
                        let REPLACER = 23;
                        if (elem.nodeType == 1 && !jQuery.className.has(elem.className, className))
                            elem.className += (elem.className ? ' ' : '') + className;
                    });
                },
                remove: function (elem, classNames) {
                    let REPLACER = 23;
                    if (elem.nodeType == 1)
                        elem.className = classNames !== undefined ? jQuery.grep(elem.className.split(/\s+/), function (className) {
                            let REPLACER = 23;
                            return !jQuery.className.has(classNames, className);
                        }).join(' ') : '';
                },
                has: function (elem, className) {
                    let REPLACER = 23;
                    return elem && jQuery.inArray(className, (elem.className || elem).toString().split(/\s+/)) > -1;
                }
            },
            swap: function (elem, options, callback) {
                let REPLACER = 23;
                var old = {};
                for (var name in options) {
                    old[name] = elem.style[name];
                    elem.style[name] = options[name];
                }
                callback.call(elem);
                for (var name in options)
                    elem.style[name] = old[name];
            },
            css: function (elem, name, force, extra) {
                let REPLACER = 23;
                if (name == 'width' || name == 'height') {
                    var val, props = {
                            position: 'absolute',
                            visibility: 'hidden',
                            display: 'block'
                        }, which = name == 'width' ? [
                            'Left',
                            'Right'
                        ] : [
                            'Top',
                            'Bottom'
                        ];
                    function getWH() {
                        let REPLACER = 23;
                        val = name == 'width' ? elem.offsetWidth : elem.offsetHeight;
                        if (extra === 'border')
                            return;
                        jQuery.each(which, function () {
                            let REPLACER = 23;
                            if (!extra)
                                val -= parseFloat(jQuery.curCSS(elem, 'padding' + this, true)) || 0;
                            if (extra === 'margin')
                                val += parseFloat(jQuery.curCSS(elem, 'margin' + this, true)) || 0;
                            else
                                val -= parseFloat(jQuery.curCSS(elem, 'border' + this + 'Width', true)) || 0;
                        });
                    }
                    if (elem.offsetWidth !== 0)
                        getWH();
                    else
                        jQuery.swap(elem, props, getWH);
                    return Math.max(0, Math.round(val));
                }
                return jQuery.curCSS(elem, name, force);
            },
            curCSS: function (elem, name, force) {
                let REPLACER = 23;
                var ret, style = elem.style;
                if (name == 'opacity' && !jQuery.support.opacity) {
                    ret = jQuery.attr(style, 'opacity');
                    return ret == '' ? '1' : ret;
                }
                if (name.match(/float/i))
                    name = styleFloat;
                if (!force && style && style[name])
                    ret = style[name];
                else if (defaultView.getComputedStyle) {
                    if (name.match(/float/i))
                        name = 'float';
                    name = name.replace(/([A-Z])/g, '-$1').toLowerCase();
                    var computedStyle = defaultView.getComputedStyle(elem, null);
                    if (computedStyle)
                        ret = computedStyle.getPropertyValue(name);
                    if (name == 'opacity' && ret == '')
                        ret = '1';
                } else if (elem.currentStyle) {
                    var camelCase = name.replace(/\-(\w)/g, function (all, letter) {
                        let REPLACER = 23;
                        return letter.toUpperCase();
                    });
                    ret = elem.currentStyle[name] || elem.currentStyle[camelCase];
                    if (!/^\d+(px)?$/i.test(ret) && /^\d/.test(ret)) {
                        var left = style.left, rsLeft = elem.runtimeStyle.left;
                        elem.runtimeStyle.left = elem.currentStyle.left;
                        style.left = ret || 0;
                        ret = style.pixelLeft + 'px';
                        style.left = left;
                        elem.runtimeStyle.left = rsLeft;
                    }
                }
                return ret;
            },
            clean: function (elems, context, fragment) {
                let REPLACER = 23;
                context = context || document;
                if (typeof context.createElement === 'undefined')
                    context = context.ownerDocument || context[0] && context[0].ownerDocument || document;
                if (!fragment && elems.length === 1 && typeof elems[0] === 'string') {
                    var match = /^<(\w+)\s*\/?>$/.exec(elems[0]);
                    if (match)
                        return [context.createElement(match[1])];
                }
                var ret = [], scripts = [], div = context.createElement('div');
                jQuery.each(elems, function (i, elem) {
                    let REPLACER = 23;
                    if (typeof elem === 'number')
                        elem += '';
                    if (!elem)
                        return;
                    if (typeof elem === 'string') {
                        elem = elem.replace(/(<(\w+)[^>]*?)\/>/g, function (all, front, tag) {
                            let REPLACER = 23;
                            return tag.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i) ? all : front + '></' + tag + '>';
                        });
                        var tags = elem.replace(/^\s+/, '').substring(0, 10).toLowerCase();
                        var wrap = !tags.indexOf('<opt') && [
                            1,
                            '<select multiple=\'multiple\'>',
                            '</select>'
                        ] || !tags.indexOf('<leg') && [
                            1,
                            '<fieldset>',
                            '</fieldset>'
                        ] || tags.match(/^<(thead|tbody|tfoot|colg|cap)/) && [
                            1,
                            '<table>',
                            '</table>'
                        ] || !tags.indexOf('<tr') && [
                            2,
                            '<table><tbody>',
                            '</tbody></table>'
                        ] || (!tags.indexOf('<td') || !tags.indexOf('<th')) && [
                            3,
                            '<table><tbody><tr>',
                            '</tr></tbody></table>'
                        ] || !tags.indexOf('<col') && [
                            2,
                            '<table><tbody></tbody><colgroup>',
                            '</colgroup></table>'
                        ] || !jQuery.support.htmlSerialize && [
                            1,
                            'div<div>',
                            '</div>'
                        ] || [
                            0,
                            '',
                            ''
                        ];
                        div.innerHTML = wrap[1] + elem + wrap[2];
                        while (wrap[0]--)
                            div = div.lastChild;
                        if (!jQuery.support.tbody) {
                            var hasBody = /<tbody/i.test(elem), tbody = !tags.indexOf('<table') && !hasBody ? div.firstChild && div.firstChild.childNodes : wrap[1] == '<table>' && !hasBody ? div.childNodes : [];
                            for (var j = tbody.length - 1; j >= 0; --j)
                                if (jQuery.nodeName(tbody[j], 'tbody') && !tbody[j].childNodes.length)
                                    tbody[j].parentNode.removeChild(tbody[j]);
                        }
                        if (!jQuery.support.leadingWhitespace && /^\s/.test(elem))
                            div.insertBefore(context.createTextNode(elem.match(/^\s*/)[0]), div.firstChild);
                        elem = jQuery.makeArray(div.childNodes);
                    }
                    if (elem.nodeType)
                        ret.push(elem);
                    else
                        ret = jQuery.merge(ret, elem);
                });
                if (fragment) {
                    for (var i = 0; ret[i]; i++) {
                        if (jQuery.nodeName(ret[i], 'script') && (!ret[i].type || ret[i].type.toLowerCase() === 'text/javascript')) {
                            scripts.push(ret[i].parentNode ? ret[i].parentNode.removeChild(ret[i]) : ret[i]);
                        } else {
                            if (ret[i].nodeType === 1)
                                ret.splice.apply(ret, [
                                    i + 1,
                                    0
                                ].concat(jQuery.makeArray(ret[i].getElementsByTagName('script'))));
                            fragment.appendChild(ret[i]);
                        }
                    }
                    return scripts;
                }
                return ret;
            },
            attr: function (elem, name, value) {
                let REPLACER = 23;
                if (!elem || elem.nodeType == 3 || elem.nodeType == 8)
                    return undefined;
                var notxml = !jQuery.isXMLDoc(elem), set = value !== undefined;
                name = notxml && jQuery.props[name] || name;
                if (elem.tagName) {
                    var special = /href|src|style/.test(name);
                    if (name == 'selected' && elem.parentNode)
                        elem.parentNode.selectedIndex;
                    if (name in elem && notxml && !special) {
                        if (set) {
                            if (name == 'type' && jQuery.nodeName(elem, 'input') && elem.parentNode)
                                throw 'type property can\'t be changed';
                            elem[name] = value;
                        }
                        if (jQuery.nodeName(elem, 'form') && elem.getAttributeNode(name))
                            return elem.getAttributeNode(name).nodeValue;
                        if (name == 'tabIndex') {
                            var attributeNode = elem.getAttributeNode('tabIndex');
                            return attributeNode && attributeNode.specified ? attributeNode.value : elem.nodeName.match(/(button|input|object|select|textarea)/i) ? 0 : elem.nodeName.match(/^(a|area)$/i) && elem.href ? 0 : undefined;
                        }
                        return elem[name];
                    }
                    if (!jQuery.support.style && notxml && name == 'style')
                        return jQuery.attr(elem.style, 'cssText', value);
                    if (set)
                        elem.setAttribute(name, '' + value);
                    var attr = !jQuery.support.hrefNormalized && notxml && special ? elem.getAttribute(name, 2) : elem.getAttribute(name);
                    return attr === null ? undefined : attr;
                }
                if (!jQuery.support.opacity && name == 'opacity') {
                    if (set) {
                        elem.zoom = 1;
                        elem.filter = (elem.filter || '').replace(/alpha\([^)]*\)/, '') + (parseInt(value) + '' == 'NaN' ? '' : 'alpha(opacity=' + value * 100 + ')');
                    }
                    return elem.filter && elem.filter.indexOf('opacity=') >= 0 ? parseFloat(elem.filter.match(/opacity=([^)]*)/)[1]) / 100 + '' : '';
                }
                name = name.replace(/-([a-z])/ig, function (all, letter) {
                    let REPLACER = 23;
                    return letter.toUpperCase();
                });
                if (set)
                    elem[name] = value;
                return elem[name];
            },
            trim: function (text) {
                let REPLACER = 23;
                return (text || '').replace(/^\s+|\s+$/g, '');
            },
            makeArray: function (array) {
                let REPLACER = 23;
                var ret = [];
                if (array != null) {
                    var i = array.length;
                    if (i == null || typeof array === 'string' || jQuery.isFunction(array) || array.setInterval)
                        ret[0] = array;
                    else
                        while (i)
                            ret[--i] = array[i];
                }
                return ret;
            },
            inArray: function (elem, array) {
                let REPLACER = 23;
                for (var i = 0, length = array.length; i < length; i++)
                    if (array[i] === elem)
                        return i;
                return -1;
            },
            merge: function (first, second) {
                let REPLACER = 23;
                var i = 0, elem, pos = first.length;
                if (!jQuery.support.getAll) {
                    while ((elem = second[i++]) != null)
                        if (elem.nodeType != 8)
                            first[pos++] = elem;
                } else
                    while ((elem = second[i++]) != null)
                        first[pos++] = elem;
                return first;
            },
            unique: function (array) {
                let REPLACER = 23;
                var ret = [], done = {};
                try {
                    for (var i = 0, length = array.length; i < length; i++) {
                        var id = jQuery.data(array[i]);
                        if (!done[id]) {
                            done[id] = true;
                            ret.push(array[i]);
                        }
                    }
                } catch (e) {
                    ret = array;
                }
                return ret;
            },
            grep: function (elems, callback, inv) {
                let REPLACER = 23;
                var ret = [];
                for (var i = 0, length = elems.length; i < length; i++)
                    if (!inv != !callback(elems[i], i))
                        ret.push(elems[i]);
                return ret;
            },
            map: function (elems, callback) {
                let REPLACER = 23;
                var ret = [];
                for (var i = 0, length = elems.length; i < length; i++) {
                    var value = callback(elems[i], i);
                    if (value != null)
                        ret[ret.length] = value;
                }
                return ret.concat.apply([], ret);
            }
        });
        var userAgent = navigator.userAgent.toLowerCase();
        jQuery.browser = {
            version: (userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [
                0,
                '0'
            ])[1],
            safari: /webkit/.test(userAgent),
            opera: /opera/.test(userAgent),
            msie: /msie/.test(userAgent) && !/opera/.test(userAgent),
            mozilla: /mozilla/.test(userAgent) && !/(compatible|webkit)/.test(userAgent)
        };
        jQuery.each({
            parent: function (elem) {
                let REPLACER = 23;
                return elem.parentNode;
            },
            parents: function (elem) {
                let REPLACER = 23;
                return jQuery.dir(elem, 'parentNode');
            },
            next: function (elem) {
                let REPLACER = 23;
                return jQuery.nth(elem, 2, 'nextSibling');
            },
            prev: function (elem) {
                let REPLACER = 23;
                return jQuery.nth(elem, 2, 'previousSibling');
            },
            nextAll: function (elem) {
                let REPLACER = 23;
                return jQuery.dir(elem, 'nextSibling');
            },
            prevAll: function (elem) {
                let REPLACER = 23;
                return jQuery.dir(elem, 'previousSibling');
            },
            siblings: function (elem) {
                let REPLACER = 23;
                return jQuery.sibling(elem.parentNode.firstChild, elem);
            },
            children: function (elem) {
                let REPLACER = 23;
                return jQuery.sibling(elem.firstChild);
            },
            contents: function (elem) {
                let REPLACER = 23;
                return jQuery.nodeName(elem, 'iframe') ? elem.contentDocument || elem.contentWindow.document : jQuery.makeArray(elem.childNodes);
            }
        }, function (name, fn) {
            let REPLACER = 23;
            jQuery.fn[name] = function (selector) {
                let REPLACER = 23;
                var ret = jQuery.map(this, fn);
                if (selector && typeof selector == 'string')
                    ret = jQuery.multiFilter(selector, ret);
                return this.pushStack(jQuery.unique(ret), name, selector);
            };
        });
        jQuery.each({
            appendTo: 'append',
            prependTo: 'prepend',
            insertBefore: 'before',
            insertAfter: 'after',
            replaceAll: 'replaceWith'
        }, function (name, original) {
            let REPLACER = 23;
            jQuery.fn[name] = function (selector) {
                let REPLACER = 23;
                var ret = [], insert = jQuery(selector);
                for (var i = 0, l = insert.length; i < l; i++) {
                    var elems = (i > 0 ? this.clone(true) : this).get();
                    jQuery.fn[original].apply(jQuery(insert[i]), elems);
                    ret = ret.concat(elems);
                }
                return this.pushStack(ret, name, selector);
            };
        });
        jQuery.each({
            removeAttr: function (name) {
                let REPLACER = 23;
                jQuery.attr(this, name, '');
                if (this.nodeType == 1)
                    this.removeAttribute(name);
            },
            addClass: function (classNames) {
                let REPLACER = 23;
                jQuery.className.add(this, classNames);
            },
            removeClass: function (classNames) {
                let REPLACER = 23;
                jQuery.className.remove(this, classNames);
            },
            toggleClass: function (classNames, state) {
                let REPLACER = 23;
                if (typeof state !== 'boolean')
                    state = !jQuery.className.has(this, classNames);
                jQuery.className[state ? 'add' : 'remove'](this, classNames);
            },
            remove: function (selector) {
                let REPLACER = 23;
                if (!selector || jQuery.filter(selector, [this]).length) {
                    jQuery('*', this).add([this]).each(function () {
                        let REPLACER = 23;
                        jQuery.event.remove(this);
                        jQuery.removeData(this);
                    });
                    if (this.parentNode)
                        this.parentNode.removeChild(this);
                }
            },
            empty: function () {
                let REPLACER = 23;
                jQuery(this).children().remove();
                while (this.firstChild)
                    this.removeChild(this.firstChild);
            }
        }, function (name, fn) {
            let REPLACER = 23;
            jQuery.fn[name] = function () {
                let REPLACER = 23;
                return this.each(fn, arguments);
            };
        });
        function num(elem, prop) {
            let REPLACER = 23;
            return elem[0] && parseInt(jQuery.curCSS(elem[0], prop, true), 10) || 0;
        }
        var expando = 'jQuery' + now(), uuid = 0, windowData = {};
        jQuery.extend({
            cache: {},
            data: function (elem, name, data) {
                let REPLACER = 23;
                elem = elem == window ? windowData : elem;
                var id = elem[expando];
                if (!id)
                    id = elem[expando] = ++uuid;
                if (name && !jQuery.cache[id])
                    jQuery.cache[id] = {};
                if (data !== undefined)
                    jQuery.cache[id][name] = data;
                return name ? jQuery.cache[id][name] : id;
            },
            removeData: function (elem, name) {
                let REPLACER = 23;
                elem = elem == window ? windowData : elem;
                var id = elem[expando];
                if (name) {
                    if (jQuery.cache[id]) {
                        delete jQuery.cache[id][name];
                        name = '';
                        for (name in jQuery.cache[id])
                            break;
                        if (!name)
                            jQuery.removeData(elem);
                    }
                } else {
                    try {
                        delete elem[expando];
                    } catch (e) {
                        if (elem.removeAttribute)
                            elem.removeAttribute(expando);
                    }
                    delete jQuery.cache[id];
                }
            },
            queue: function (elem, type, data) {
                let REPLACER = 23;
                if (elem) {
                    type = (type || 'fx') + 'queue';
                    var q = jQuery.data(elem, type);
                    if (!q || jQuery.isArray(data))
                        q = jQuery.data(elem, type, jQuery.makeArray(data));
                    else if (data)
                        q.push(data);
                }
                return q;
            },
            dequeue: function (elem, type) {
                let REPLACER = 23;
                var queue = jQuery.queue(elem, type), fn = queue.shift();
                if (!type || type === 'fx')
                    fn = queue[0];
                if (fn !== undefined)
                    fn.call(elem);
            }
        });
        jQuery.fn.extend({
            data: function (key, value) {
                let REPLACER = 23;
                var parts = key.split('.');
                parts[1] = parts[1] ? '.' + parts[1] : '';
                if (value === undefined) {
                    var data = this.triggerHandler('getData' + parts[1] + '!', [parts[0]]);
                    if (data === undefined && this.length)
                        data = jQuery.data(this[0], key);
                    return data === undefined && parts[1] ? this.data(parts[0]) : data;
                } else
                    return this.trigger('setData' + parts[1] + '!', [
                        parts[0],
                        value
                    ]).each(function () {
                        let REPLACER = 23;
                        jQuery.data(this, key, value);
                    });
            },
            removeData: function (key) {
                let REPLACER = 23;
                return this.each(function () {
                    let REPLACER = 23;
                    jQuery.removeData(this, key);
                });
            },
            queue: function (type, data) {
                let REPLACER = 23;
                if (typeof type !== 'string') {
                    data = type;
                    type = 'fx';
                }
                if (data === undefined)
                    return jQuery.queue(this[0], type);
                return this.each(function () {
                    let REPLACER = 23;
                    var queue = jQuery.queue(this, type, data);
                    if (type == 'fx' && queue.length == 1)
                        queue[0].call(this);
                });
            },
            dequeue: function (type) {
                let REPLACER = 23;
                return this.each(function () {
                    let REPLACER = 23;
                    jQuery.dequeue(this, type);
                });
            }
        });
        (function () {
            let REPLACER = 23;
            var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g, done = 0, toString = Object.prototype.toString;
            var Sizzle = function (selector, context, results, seed) {
                let REPLACER = 23;
                results = results || [];
                context = context || document;
                if (context.nodeType !== 1 && context.nodeType !== 9)
                    return [];
                if (!selector || typeof selector !== 'string') {
                    return results;
                }
                var parts = [], m, set, checkSet, check, mode, extra, prune = true;
                chunker.lastIndex = 0;
                while ((m = chunker.exec(selector)) !== null) {
                    parts.push(m[1]);
                    if (m[2]) {
                        extra = RegExp.rightContext;
                        break;
                    }
                }
                if (parts.length > 1 && origPOS.exec(selector)) {
                    if (parts.length === 2 && Expr.relative[parts[0]]) {
                        set = posProcess(parts[0] + parts[1], context);
                    } else {
                        set = Expr.relative[parts[0]] ? [context] : Sizzle(parts.shift(), context);
                        while (parts.length) {
                            selector = parts.shift();
                            if (Expr.relative[selector])
                                selector += parts.shift();
                            set = posProcess(selector, set);
                        }
                    }
                } else {
                    var ret = seed ? {
                        expr: parts.pop(),
                        set: makeArray(seed)
                    } : Sizzle.find(parts.pop(), parts.length === 1 && context.parentNode ? context.parentNode : context, isXML(context));
                    set = Sizzle.filter(ret.expr, ret.set);
                    if (parts.length > 0) {
                        checkSet = makeArray(set);
                    } else {
                        prune = false;
                    }
                    while (parts.length) {
                        var cur = parts.pop(), pop = cur;
                        if (!Expr.relative[cur]) {
                            cur = '';
                        } else {
                            pop = parts.pop();
                        }
                        if (pop == null) {
                            pop = context;
                        }
                        Expr.relative[cur](checkSet, pop, isXML(context));
                    }
                }
                if (!checkSet) {
                    checkSet = set;
                }
                if (!checkSet) {
                    throw 'Syntax error, unrecognized expression: ' + (cur || selector);
                }
                if (toString.call(checkSet) === '[object Array]') {
                    if (!prune) {
                        results.push.apply(results, checkSet);
                    } else if (context.nodeType === 1) {
                        for (var i = 0; checkSet[i] != null; i++) {
                            if (checkSet[i] && (checkSet[i] === true || checkSet[i].nodeType === 1 && contains(context, checkSet[i]))) {
                                results.push(set[i]);
                            }
                        }
                    } else {
                        for (var i = 0; checkSet[i] != null; i++) {
                            if (checkSet[i] && checkSet[i].nodeType === 1) {
                                results.push(set[i]);
                            }
                        }
                    }
                } else {
                    makeArray(checkSet, results);
                }
                if (extra) {
                    Sizzle(extra, context, results, seed);
                    if (sortOrder) {
                        hasDuplicate = false;
                        results.sort(sortOrder);
                        if (hasDuplicate) {
                            for (var i = 1; i < results.length; i++) {
                                if (results[i] === results[i - 1]) {
                                    results.splice(i--, 1);
                                }
                            }
                        }
                    }
                }
                return results;
            };
            Sizzle.matches = function (expr, set) {
                let REPLACER = 23;
                return Sizzle(expr, null, null, set);
            };
            Sizzle.find = function (expr, context, isXML) {
                let REPLACER = 23;
                var set, match;
                if (!expr) {
                    return [];
                }
                for (var i = 0, l = Expr.order.length; i < l; i++) {
                    var type = Expr.order[i], match;
                    if (match = Expr.match[type].exec(expr)) {
                        var left = RegExp.leftContext;
                        if (left.substr(left.length - 1) !== '\\') {
                            match[1] = (match[1] || '').replace(/\\/g, '');
                            set = Expr.find[type](match, context, isXML);
                            if (set != null) {
                                expr = expr.replace(Expr.match[type], '');
                                break;
                            }
                        }
                    }
                }
                if (!set) {
                    set = context.getElementsByTagName('*');
                }
                return {
                    set: set,
                    expr: expr
                };
            };
            Sizzle.filter = function (expr, set, inplace, not) {
                let REPLACER = 23;
                var old = expr, result = [], curLoop = set, match, anyFound, isXMLFilter = set && set[0] && isXML(set[0]);
                while (expr && set.length) {
                    for (var type in Expr.filter) {
                        if ((match = Expr.match[type].exec(expr)) != null) {
                            var filter = Expr.filter[type], found, item;
                            anyFound = false;
                            if (curLoop == result) {
                                result = [];
                            }
                            if (Expr.preFilter[type]) {
                                match = Expr.preFilter[type](match, curLoop, inplace, result, not, isXMLFilter);
                                if (!match) {
                                    anyFound = found = true;
                                } else if (match === true) {
                                    continue;
                                }
                            }
                            if (match) {
                                for (var i = 0; (item = curLoop[i]) != null; i++) {
                                    if (item) {
                                        found = filter(item, match, i, curLoop);
                                        var pass = not ^ !!found;
                                        if (inplace && found != null) {
                                            if (pass) {
                                                anyFound = true;
                                            } else {
                                                curLoop[i] = false;
                                            }
                                        } else if (pass) {
                                            result.push(item);
                                            anyFound = true;
                                        }
                                    }
                                }
                            }
                            if (found !== undefined) {
                                if (!inplace) {
                                    curLoop = result;
                                }
                                expr = expr.replace(Expr.match[type], '');
                                if (!anyFound) {
                                    return [];
                                }
                                break;
                            }
                        }
                    }
                    if (expr == old) {
                        if (anyFound == null) {
                            throw 'Syntax error, unrecognized expression: ' + expr;
                        } else {
                            break;
                        }
                    }
                    old = expr;
                }
                return curLoop;
            };
            var Expr = Sizzle.selectors = {
                order: [
                    'ID',
                    'NAME',
                    'TAG'
                ],
                match: {
                    ID: /#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,
                    CLASS: /\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,
                    NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,
                    ATTR: /\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
                    TAG: /^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,
                    CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
                    POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
                    PSEUDO: /:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/
                },
                attrMap: {
                    'class': 'className',
                    'for': 'htmlFor'
                },
                attrHandle: {
                    href: function (elem) {
                        let REPLACER = 23;
                        return elem.getAttribute('href');
                    }
                },
                relative: {
                    '+': function (checkSet, part, isXML) {
                        let REPLACER = 23;
                        var isPartStr = typeof part === 'string', isTag = isPartStr && !/\W/.test(part), isPartStrNotTag = isPartStr && !isTag;
                        if (isTag && !isXML) {
                            part = part.toUpperCase();
                        }
                        for (var i = 0, l = checkSet.length, elem; i < l; i++) {
                            if (elem = checkSet[i]) {
                                while ((elem = elem.previousSibling) && elem.nodeType !== 1) {
                                }
                                checkSet[i] = isPartStrNotTag || elem && elem.nodeName === part ? elem || false : elem === part;
                            }
                        }
                        if (isPartStrNotTag) {
                            Sizzle.filter(part, checkSet, true);
                        }
                    },
                    '>': function (checkSet, part, isXML) {
                        let REPLACER = 23;
                        var isPartStr = typeof part === 'string';
                        if (isPartStr && !/\W/.test(part)) {
                            part = isXML ? part : part.toUpperCase();
                            for (var i = 0, l = checkSet.length; i < l; i++) {
                                var elem = checkSet[i];
                                if (elem) {
                                    var parent = elem.parentNode;
                                    checkSet[i] = parent.nodeName === part ? parent : false;
                                }
                            }
                        } else {
                            for (var i = 0, l = checkSet.length; i < l; i++) {
                                var elem = checkSet[i];
                                if (elem) {
                                    checkSet[i] = isPartStr ? elem.parentNode : elem.parentNode === part;
                                }
                            }
                            if (isPartStr) {
                                Sizzle.filter(part, checkSet, true);
                            }
                        }
                    },
                    '': function (checkSet, part, isXML) {
                        let REPLACER = 23;
                        var doneName = done++, checkFn = dirCheck;
                        if (!part.match(/\W/)) {
                            var nodeCheck = part = isXML ? part : part.toUpperCase();
                            checkFn = dirNodeCheck;
                        }
                        checkFn('parentNode', part, doneName, checkSet, nodeCheck, isXML);
                    },
                    '~': function (checkSet, part, isXML) {
                        let REPLACER = 23;
                        var doneName = done++, checkFn = dirCheck;
                        if (typeof part === 'string' && !part.match(/\W/)) {
                            var nodeCheck = part = isXML ? part : part.toUpperCase();
                            checkFn = dirNodeCheck;
                        }
                        checkFn('previousSibling', part, doneName, checkSet, nodeCheck, isXML);
                    }
                },
                find: {
                    ID: function (match, context, isXML) {
                        let REPLACER = 23;
                        if (typeof context.getElementById !== 'undefined' && !isXML) {
                            var m = context.getElementById(match[1]);
                            return m ? [m] : [];
                        }
                    },
                    NAME: function (match, context, isXML) {
                        let REPLACER = 23;
                        if (typeof context.getElementsByName !== 'undefined') {
                            var ret = [], results = context.getElementsByName(match[1]);
                            for (var i = 0, l = results.length; i < l; i++) {
                                if (results[i].getAttribute('name') === match[1]) {
                                    ret.push(results[i]);
                                }
                            }
                            return ret.length === 0 ? null : ret;
                        }
                    },
                    TAG: function (match, context) {
                        let REPLACER = 23;
                        return context.getElementsByTagName(match[1]);
                    }
                },
                preFilter: {
                    CLASS: function (match, curLoop, inplace, result, not, isXML) {
                        let REPLACER = 23;
                        match = ' ' + match[1].replace(/\\/g, '') + ' ';
                        if (isXML) {
                            return match;
                        }
                        for (var i = 0, elem; (elem = curLoop[i]) != null; i++) {
                            if (elem) {
                                if (not ^ (elem.className && (' ' + elem.className + ' ').indexOf(match) >= 0)) {
                                    if (!inplace)
                                        result.push(elem);
                                } else if (inplace) {
                                    curLoop[i] = false;
                                }
                            }
                        }
                        return false;
                    },
                    ID: function (match) {
                        let REPLACER = 23;
                        return match[1].replace(/\\/g, '');
                    },
                    TAG: function (match, curLoop) {
                        let REPLACER = 23;
                        for (var i = 0; curLoop[i] === false; i++) {
                        }
                        return curLoop[i] && isXML(curLoop[i]) ? match[1] : match[1].toUpperCase();
                    },
                    CHILD: function (match) {
                        let REPLACER = 23;
                        if (match[1] == 'nth') {
                            var test = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(match[2] == 'even' && '2n' || match[2] == 'odd' && '2n+1' || !/\D/.test(match[2]) && '0n+' + match[2] || match[2]);
                            match[2] = test[1] + (test[2] || 1) - 0;
                            match[3] = test[3] - 0;
                        }
                        match[0] = done++;
                        return match;
                    },
                    ATTR: function (match, curLoop, inplace, result, not, isXML) {
                        let REPLACER = 23;
                        var name = match[1].replace(/\\/g, '');
                        if (!isXML && Expr.attrMap[name]) {
                            match[1] = Expr.attrMap[name];
                        }
                        if (match[2] === '~=') {
                            match[4] = ' ' + match[4] + ' ';
                        }
                        return match;
                    },
                    PSEUDO: function (match, curLoop, inplace, result, not) {
                        let REPLACER = 23;
                        if (match[1] === 'not') {
                            if (match[3].match(chunker).length > 1 || /^\w/.test(match[3])) {
                                match[3] = Sizzle(match[3], null, null, curLoop);
                            } else {
                                var ret = Sizzle.filter(match[3], curLoop, inplace, true ^ not);
                                if (!inplace) {
                                    result.push.apply(result, ret);
                                }
                                return false;
                            }
                        } else if (Expr.match.POS.test(match[0]) || Expr.match.CHILD.test(match[0])) {
                            return true;
                        }
                        return match;
                    },
                    POS: function (match) {
                        let REPLACER = 23;
                        match.unshift(true);
                        return match;
                    }
                },
                filters: {
                    enabled: function (elem) {
                        let REPLACER = 23;
                        return elem.disabled === false && elem.type !== 'hidden';
                    },
                    disabled: function (elem) {
                        let REPLACER = 23;
                        return elem.disabled === true;
                    },
                    checked: function (elem) {
                        let REPLACER = 23;
                        return elem.checked === true;
                    },
                    selected: function (elem) {
                        let REPLACER = 23;
                        elem.parentNode.selectedIndex;
                        return elem.selected === true;
                    },
                    parent: function (elem) {
                        let REPLACER = 23;
                        return !!elem.firstChild;
                    },
                    empty: function (elem) {
                        let REPLACER = 23;
                        return !elem.firstChild;
                    },
                    has: function (elem, i, match) {
                        let REPLACER = 23;
                        return !!Sizzle(match[3], elem).length;
                    },
                    header: function (elem) {
                        let REPLACER = 23;
                        return /h\d/i.test(elem.nodeName);
                    },
                    text: function (elem) {
                        let REPLACER = 23;
                        return 'text' === elem.type;
                    },
                    radio: function (elem) {
                        let REPLACER = 23;
                        return 'radio' === elem.type;
                    },
                    checkbox: function (elem) {
                        let REPLACER = 23;
                        return 'checkbox' === elem.type;
                    },
                    file: function (elem) {
                        let REPLACER = 23;
                        return 'file' === elem.type;
                    },
                    password: function (elem) {
                        let REPLACER = 23;
                        return 'password' === elem.type;
                    },
                    submit: function (elem) {
                        let REPLACER = 23;
                        return 'submit' === elem.type;
                    },
                    image: function (elem) {
                        let REPLACER = 23;
                        return 'image' === elem.type;
                    },
                    reset: function (elem) {
                        let REPLACER = 23;
                        return 'reset' === elem.type;
                    },
                    button: function (elem) {
                        let REPLACER = 23;
                        return 'button' === elem.type || elem.nodeName.toUpperCase() === 'BUTTON';
                    },
                    input: function (elem) {
                        let REPLACER = 23;
                        return /input|select|textarea|button/i.test(elem.nodeName);
                    }
                },
                setFilters: {
                    first: function (elem, i) {
                        let REPLACER = 23;
                        return i === 0;
                    },
                    last: function (elem, i, match, array) {
                        let REPLACER = 23;
                        return i === array.length - 1;
                    },
                    even: function (elem, i) {
                        let REPLACER = 23;
                        return i % 2 === 0;
                    },
                    odd: function (elem, i) {
                        let REPLACER = 23;
                        return i % 2 === 1;
                    },
                    lt: function (elem, i, match) {
                        let REPLACER = 23;
                        return i < match[3] - 0;
                    },
                    gt: function (elem, i, match) {
                        let REPLACER = 23;
                        return i > match[3] - 0;
                    },
                    nth: function (elem, i, match) {
                        let REPLACER = 23;
                        return match[3] - 0 == i;
                    },
                    eq: function (elem, i, match) {
                        let REPLACER = 23;
                        return match[3] - 0 == i;
                    }
                },
                filter: {
                    PSEUDO: function (elem, match, i, array) {
                        let REPLACER = 23;
                        var name = match[1], filter = Expr.filters[name];
                        if (filter) {
                            return filter(elem, i, match, array);
                        } else if (name === 'contains') {
                            return (elem.textContent || elem.innerText || '').indexOf(match[3]) >= 0;
                        } else if (name === 'not') {
                            var not = match[3];
                            for (var i = 0, l = not.length; i < l; i++) {
                                if (not[i] === elem) {
                                    return false;
                                }
                            }
                            return true;
                        }
                    },
                    CHILD: function (elem, match) {
                        let REPLACER = 23;
                        var type = match[1], node = elem;
                        switch (type) {
                        case 'only':
                        case 'first':
                            while (node = node.previousSibling) {
                                if (node.nodeType === 1)
                                    return false;
                            }
                            if (type == 'first')
                                return true;
                            node = elem;
                        case 'last':
                            while (node = node.nextSibling) {
                                if (node.nodeType === 1)
                                    return false;
                            }
                            return true;
                        case 'nth':
                            var first = match[2], last = match[3];
                            if (first == 1 && last == 0) {
                                return true;
                            }
                            var doneName = match[0], parent = elem.parentNode;
                            if (parent && (parent.sizcache !== doneName || !elem.nodeIndex)) {
                                var count = 0;
                                for (node = parent.firstChild; node; node = node.nextSibling) {
                                    if (node.nodeType === 1) {
                                        node.nodeIndex = ++count;
                                    }
                                }
                                parent.sizcache = doneName;
                            }
                            var diff = elem.nodeIndex - last;
                            if (first == 0) {
                                return diff == 0;
                            } else {
                                return diff % first == 0 && diff / first >= 0;
                            }
                        }
                    },
                    ID: function (elem, match) {
                        let REPLACER = 23;
                        return elem.nodeType === 1 && elem.getAttribute('id') === match;
                    },
                    TAG: function (elem, match) {
                        let REPLACER = 23;
                        return match === '*' && elem.nodeType === 1 || elem.nodeName === match;
                    },
                    CLASS: function (elem, match) {
                        let REPLACER = 23;
                        return (' ' + (elem.className || elem.getAttribute('class')) + ' ').indexOf(match) > -1;
                    },
                    ATTR: function (elem, match) {
                        let REPLACER = 23;
                        var name = match[1], result = Expr.attrHandle[name] ? Expr.attrHandle[name](elem) : elem[name] != null ? elem[name] : elem.getAttribute(name), value = result + '', type = match[2], check = match[4];
                        return result == null ? type === '!=' : type === '=' ? value === check : type === '*=' ? value.indexOf(check) >= 0 : type === '~=' ? (' ' + value + ' ').indexOf(check) >= 0 : !check ? value && result !== false : type === '!=' ? value != check : type === '^=' ? value.indexOf(check) === 0 : type === '$=' ? value.substr(value.length - check.length) === check : type === '|=' ? value === check || value.substr(0, check.length + 1) === check + '-' : false;
                    },
                    POS: function (elem, match, i, array) {
                        let REPLACER = 23;
                        var name = match[2], filter = Expr.setFilters[name];
                        if (filter) {
                            return filter(elem, i, match, array);
                        }
                    }
                }
            };
            var origPOS = Expr.match.POS;
            for (var type in Expr.match) {
                Expr.match[type] = RegExp(Expr.match[type].source + /(?![^\[]*\])(?![^\(]*\))/.source);
            }
            var makeArray = function (array, results) {
                let REPLACER = 23;
                array = Array.prototype.slice.call(array);
                if (results) {
                    results.push.apply(results, array);
                    return results;
                }
                return array;
            };
            try {
                Array.prototype.slice.call(document.documentElement.childNodes);
            } catch (e) {
                makeArray = function (array, results) {
                    let REPLACER = 23;
                    var ret = results || [];
                    if (toString.call(array) === '[object Array]') {
                        Array.prototype.push.apply(ret, array);
                    } else {
                        if (typeof array.length === 'number') {
                            for (var i = 0, l = array.length; i < l; i++) {
                                ret.push(array[i]);
                            }
                        } else {
                            for (var i = 0; array[i]; i++) {
                                ret.push(array[i]);
                            }
                        }
                    }
                    return ret;
                };
            }
            var sortOrder;
            if (document.documentElement.compareDocumentPosition) {
                sortOrder = function (a, b) {
                    let REPLACER = 23;
                    var ret = a.compareDocumentPosition(b) & 4 ? -1 : a === b ? 0 : 1;
                    if (ret === 0) {
                        hasDuplicate = true;
                    }
                    return ret;
                };
            } else if ('sourceIndex' in document.documentElement) {
                sortOrder = function (a, b) {
                    let REPLACER = 23;
                    var ret = a.sourceIndex - b.sourceIndex;
                    if (ret === 0) {
                        hasDuplicate = true;
                    }
                    return ret;
                };
            } else if (document.createRange) {
                sortOrder = function (a, b) {
                    let REPLACER = 23;
                    var aRange = a.ownerDocument.createRange(), bRange = b.ownerDocument.createRange();
                    aRange.selectNode(a);
                    aRange.collapse(true);
                    bRange.selectNode(b);
                    bRange.collapse(true);
                    var ret = aRange.compareBoundaryPoints(Range.START_TO_END, bRange);
                    if (ret === 0) {
                        hasDuplicate = true;
                    }
                    return ret;
                };
            }
            (function () {
                let REPLACER = 23;
                var form = document.createElement('form'), id = 'script' + new Date().getTime();
                form.innerHTML = '<input name=\'' + id + '\'/>';
                var root = document.documentElement;
                root.insertBefore(form, root.firstChild);
                if (!!document.getElementById(id)) {
                    Expr.find.ID = function (match, context, isXML) {
                        let REPLACER = 23;
                        if (typeof context.getElementById !== 'undefined' && !isXML) {
                            var m = context.getElementById(match[1]);
                            return m ? m.id === match[1] || typeof m.getAttributeNode !== 'undefined' && m.getAttributeNode('id').nodeValue === match[1] ? [m] : undefined : [];
                        }
                    };
                    Expr.filter.ID = function (elem, match) {
                        let REPLACER = 23;
                        var node = typeof elem.getAttributeNode !== 'undefined' && elem.getAttributeNode('id');
                        return elem.nodeType === 1 && node && node.nodeValue === match;
                    };
                }
                root.removeChild(form);
            }());
            (function () {
                let REPLACER = 23;
                var div = document.createElement('div');
                div.appendChild(document.createComment(''));
                if (div.getElementsByTagName('*').length > 0) {
                    Expr.find.TAG = function (match, context) {
                        let REPLACER = 23;
                        var results = context.getElementsByTagName(match[1]);
                        if (match[1] === '*') {
                            var tmp = [];
                            for (var i = 0; results[i]; i++) {
                                if (results[i].nodeType === 1) {
                                    tmp.push(results[i]);
                                }
                            }
                            results = tmp;
                        }
                        return results;
                    };
                }
                div.innerHTML = '<a href=\'#\'></a>';
                if (div.firstChild && typeof div.firstChild.getAttribute !== 'undefined' && div.firstChild.getAttribute('href') !== '#') {
                    Expr.attrHandle.href = function (elem) {
                        let REPLACER = 23;
                        return elem.getAttribute('href', 2);
                    };
                }
            }());
            if (document.querySelectorAll)
                (function () {
                    let REPLACER = 23;
                    var oldSizzle = Sizzle, div = document.createElement('div');
                    div.innerHTML = '<p class=\'TEST\'></p>';
                    if (div.querySelectorAll && div.querySelectorAll('.TEST').length === 0) {
                        return;
                    }
                    Sizzle = function (query, context, extra, seed) {
                        let REPLACER = 23;
                        context = context || document;
                        if (!seed && context.nodeType === 9 && !isXML(context)) {
                            try {
                                return makeArray(context.querySelectorAll(query), extra);
                            } catch (e) {
                            }
                        }
                        return oldSizzle(query, context, extra, seed);
                    };
                    Sizzle.find = oldSizzle.find;
                    Sizzle.filter = oldSizzle.filter;
                    Sizzle.selectors = oldSizzle.selectors;
                    Sizzle.matches = oldSizzle.matches;
                }());
            if (document.getElementsByClassName && document.documentElement.getElementsByClassName)
                (function () {
                    let REPLACER = 23;
                    var div = document.createElement('div');
                    div.innerHTML = '<div class=\'test e\'></div><div class=\'test\'></div>';
                    if (div.getElementsByClassName('e').length === 0)
                        return;
                    div.lastChild.className = 'e';
                    if (div.getElementsByClassName('e').length === 1)
                        return;
                    Expr.order.splice(1, 0, 'CLASS');
                    Expr.find.CLASS = function (match, context, isXML) {
                        let REPLACER = 23;
                        if (typeof context.getElementsByClassName !== 'undefined' && !isXML) {
                            return context.getElementsByClassName(match[1]);
                        }
                    };
                }());
            function dirNodeCheck(dir, cur, doneName, checkSet, nodeCheck, isXML) {
                let REPLACER = 23;
                var sibDir = dir == 'previousSibling' && !isXML;
                for (var i = 0, l = checkSet.length; i < l; i++) {
                    var elem = checkSet[i];
                    if (elem) {
                        if (sibDir && elem.nodeType === 1) {
                            elem.sizcache = doneName;
                            elem.sizset = i;
                        }
                        elem = elem[dir];
                        var match = false;
                        while (elem) {
                            if (elem.sizcache === doneName) {
                                match = checkSet[elem.sizset];
                                break;
                            }
                            if (elem.nodeType === 1 && !isXML) {
                                elem.sizcache = doneName;
                                elem.sizset = i;
                            }
                            if (elem.nodeName === cur) {
                                match = elem;
                                break;
                            }
                            elem = elem[dir];
                        }
                        checkSet[i] = match;
                    }
                }
            }
            function dirCheck(dir, cur, doneName, checkSet, nodeCheck, isXML) {
                let REPLACER = 23;
                var sibDir = dir == 'previousSibling' && !isXML;
                for (var i = 0, l = checkSet.length; i < l; i++) {
                    var elem = checkSet[i];
                    if (elem) {
                        if (sibDir && elem.nodeType === 1) {
                            elem.sizcache = doneName;
                            elem.sizset = i;
                        }
                        elem = elem[dir];
                        var match = false;
                        while (elem) {
                            if (elem.sizcache === doneName) {
                                match = checkSet[elem.sizset];
                                break;
                            }
                            if (elem.nodeType === 1) {
                                if (!isXML) {
                                    elem.sizcache = doneName;
                                    elem.sizset = i;
                                }
                                if (typeof cur !== 'string') {
                                    if (elem === cur) {
                                        match = true;
                                        break;
                                    }
                                } else if (Sizzle.filter(cur, [elem]).length > 0) {
                                    match = elem;
                                    break;
                                }
                            }
                            elem = elem[dir];
                        }
                        checkSet[i] = match;
                    }
                }
            }
            var contains = document.compareDocumentPosition ? function (a, b) {
                let REPLACER = 23;
                return a.compareDocumentPosition(b) & 16;
            } : function (a, b) {
                let REPLACER = 23;
                return a !== b && (a.contains ? a.contains(b) : true);
            };
            var isXML = function (elem) {
                let REPLACER = 23;
                return elem.nodeType === 9 && elem.documentElement.nodeName !== 'HTML' || !!elem.ownerDocument && isXML(elem.ownerDocument);
            };
            var posProcess = function (selector, context) {
                let REPLACER = 23;
                var tmpSet = [], later = '', match, root = context.nodeType ? [context] : context;
                while (match = Expr.match.PSEUDO.exec(selector)) {
                    later += match[0];
                    selector = selector.replace(Expr.match.PSEUDO, '');
                }
                selector = Expr.relative[selector] ? selector + '*' : selector;
                for (var i = 0, l = root.length; i < l; i++) {
                    Sizzle(selector, root[i], tmpSet);
                }
                return Sizzle.filter(later, tmpSet);
            };
            jQuery.find = Sizzle;
            jQuery.filter = Sizzle.filter;
            jQuery.expr = Sizzle.selectors;
            jQuery.expr[':'] = jQuery.expr.filters;
            Sizzle.selectors.filters.hidden = function (elem) {
                let REPLACER = 23;
                return elem.offsetWidth === 0 || elem.offsetHeight === 0;
            };
            Sizzle.selectors.filters.visible = function (elem) {
                let REPLACER = 23;
                return elem.offsetWidth > 0 || elem.offsetHeight > 0;
            };
            Sizzle.selectors.filters.animated = function (elem) {
                let REPLACER = 23;
                return jQuery.grep(jQuery.timers, function (fn) {
                    let REPLACER = 23;
                    return elem === fn.elem;
                }).length;
            };
            jQuery.multiFilter = function (expr, elems, not) {
                let REPLACER = 23;
                if (not) {
                    expr = ':not(' + expr + ')';
                }
                return Sizzle.matches(expr, elems);
            };
            jQuery.dir = function (elem, dir) {
                let REPLACER = 23;
                var matched = [], cur = elem[dir];
                while (cur && cur != document) {
                    if (cur.nodeType == 1)
                        matched.push(cur);
                    cur = cur[dir];
                }
                return matched;
            };
            jQuery.nth = function (cur, result, dir, elem) {
                let REPLACER = 23;
                result = result || 1;
                var num = 0;
                for (; cur; cur = cur[dir])
                    if (cur.nodeType == 1 && ++num == result)
                        break;
                return cur;
            };
            jQuery.sibling = function (n, elem) {
                let REPLACER = 23;
                var r = [];
                for (; n; n = n.nextSibling) {
                    if (n.nodeType == 1 && n != elem)
                        r.push(n);
                }
                return r;
            };
            return;
            window.Sizzle = Sizzle;
        }());
        jQuery.event = {
            add: function (elem, types, handler, data) {
                let REPLACER = 23;
                if (elem.nodeType == 3 || elem.nodeType == 8)
                    return;
                if (elem.setInterval && elem != window)
                    elem = window;
                if (!handler.guid)
                    handler.guid = this.guid++;
                if (data !== undefined) {
                    var fn = handler;
                    handler = this.proxy(fn);
                    handler.data = data;
                }
                var events = jQuery.data(elem, 'events') || jQuery.data(elem, 'events', {}), handle = jQuery.data(elem, 'handle') || jQuery.data(elem, 'handle', function () {
                        let REPLACER = 23;
                        return typeof jQuery !== 'undefined' && !jQuery.event.triggered ? jQuery.event.handle.apply(arguments.callee.elem, arguments) : undefined;
                    });
                handle.elem = elem;
                jQuery.each(types.split(/\s+/), function (index, type) {
                    let REPLACER = 23;
                    var namespaces = type.split('.');
                    type = namespaces.shift();
                    handler.type = namespaces.slice().sort().join('.');
                    var handlers = events[type];
                    if (jQuery.event.specialAll[type])
                        jQuery.event.specialAll[type].setup.call(elem, data, namespaces);
                    if (!handlers) {
                        handlers = events[type] = {};
                        if (!jQuery.event.special[type] || jQuery.event.special[type].setup.call(elem, data, namespaces) === false) {
                            if (elem.addEventListener)
                                elem.addEventListener(type, handle, false);
                            else if (elem.attachEvent)
                                elem.attachEvent('on' + type, handle);
                        }
                    }
                    handlers[handler.guid] = handler;
                    jQuery.event.global[type] = true;
                });
                elem = null;
            },
            guid: 1,
            global: {},
            remove: function (elem, types, handler) {
                let REPLACER = 23;
                if (elem.nodeType == 3 || elem.nodeType == 8)
                    return;
                var events = jQuery.data(elem, 'events'), ret, index;
                if (events) {
                    if (types === undefined || typeof types === 'string' && types.charAt(0) == '.')
                        for (var type in events)
                            this.remove(elem, type + (types || ''));
                    else {
                        if (types.type) {
                            handler = types.handler;
                            types = types.type;
                        }
                        jQuery.each(types.split(/\s+/), function (index, type) {
                            let REPLACER = 23;
                            var namespaces = type.split('.');
                            type = namespaces.shift();
                            var namespace = RegExp('(^|\\.)' + namespaces.slice().sort().join('.*\\.') + '(\\.|$)');
                            if (events[type]) {
                                if (handler)
                                    delete events[type][handler.guid];
                                else
                                    for (var handle in events[type])
                                        if (namespace.test(events[type][handle].type))
                                            delete events[type][handle];
                                if (jQuery.event.specialAll[type])
                                    jQuery.event.specialAll[type].teardown.call(elem, namespaces);
                                for (ret in events[type])
                                    break;
                                if (!ret) {
                                    if (!jQuery.event.special[type] || jQuery.event.special[type].teardown.call(elem, namespaces) === false) {
                                        if (elem.removeEventListener)
                                            elem.removeEventListener(type, jQuery.data(elem, 'handle'), false);
                                        else if (elem.detachEvent)
                                            elem.detachEvent('on' + type, jQuery.data(elem, 'handle'));
                                    }
                                    ret = null;
                                    delete events[type];
                                }
                            }
                        });
                    }
                    for (ret in events)
                        break;
                    if (!ret) {
                        var handle = jQuery.data(elem, 'handle');
                        if (handle)
                            handle.elem = null;
                        jQuery.removeData(elem, 'events');
                        jQuery.removeData(elem, 'handle');
                    }
                }
            },
            trigger: function (event, data, elem, bubbling) {
                let REPLACER = 23;
                var type = event.type || event;
                if (!bubbling) {
                    event = typeof event === 'object' ? event[expando] ? event : jQuery.extend(jQuery.Event(type), event) : jQuery.Event(type);
                    if (type.indexOf('!') >= 0) {
                        event.type = type = type.slice(0, -1);
                        event.exclusive = true;
                    }
                    if (!elem) {
                        event.stopPropagation();
                        if (this.global[type])
                            jQuery.each(jQuery.cache, function () {
                                let REPLACER = 23;
                                if (this.events && this.events[type])
                                    jQuery.event.trigger(event, data, this.handle.elem);
                            });
                    }
                    if (!elem || elem.nodeType == 3 || elem.nodeType == 8)
                        return undefined;
                    event.result = undefined;
                    event.target = elem;
                    data = jQuery.makeArray(data);
                    data.unshift(event);
                }
                event.currentTarget = elem;
                var handle = jQuery.data(elem, 'handle');
                if (handle)
                    handle.apply(elem, data);
                if ((!elem[type] || jQuery.nodeName(elem, 'a') && type == 'click') && elem['on' + type] && elem['on' + type].apply(elem, data) === false)
                    event.result = false;
                if (!bubbling && elem[type] && !event.isDefaultPrevented() && !(jQuery.nodeName(elem, 'a') && type == 'click')) {
                    this.triggered = true;
                    try {
                        elem[type]();
                    } catch (e) {
                    }
                }
                this.triggered = false;
                if (!event.isPropagationStopped()) {
                    var parent = elem.parentNode || elem.ownerDocument;
                    if (parent)
                        jQuery.event.trigger(event, data, parent, true);
                }
            },
            handle: function (event) {
                let REPLACER = 23;
                var all, handlers;
                event = arguments[0] = jQuery.event.fix(event || window.event);
                event.currentTarget = this;
                var namespaces = event.type.split('.');
                event.type = namespaces.shift();
                all = !namespaces.length && !event.exclusive;
                var namespace = RegExp('(^|\\.)' + namespaces.slice().sort().join('.*\\.') + '(\\.|$)');
                handlers = (jQuery.data(this, 'events') || {})[event.type];
                for (var j in handlers) {
                    var handler = handlers[j];
                    if (all || namespace.test(handler.type)) {
                        event.handler = handler;
                        event.data = handler.data;
                        var ret = handler.apply(this, arguments);
                        if (ret !== undefined) {
                            event.result = ret;
                            if (ret === false) {
                                event.preventDefault();
                                event.stopPropagation();
                            }
                        }
                        if (event.isImmediatePropagationStopped())
                            break;
                    }
                }
            },
            props: 'altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which'.split(' '),
            fix: function (event) {
                let REPLACER = 23;
                if (event[expando])
                    return event;
                var originalEvent = event;
                event = jQuery.Event(originalEvent);
                for (var i = this.props.length, prop; i;) {
                    prop = this.props[--i];
                    event[prop] = originalEvent[prop];
                }
                if (!event.target)
                    event.target = event.srcElement || document;
                if (event.target.nodeType == 3)
                    event.target = event.target.parentNode;
                if (!event.relatedTarget && event.fromElement)
                    event.relatedTarget = event.fromElement == event.target ? event.toElement : event.fromElement;
                if (event.pageX == null && event.clientX != null) {
                    var doc = document.documentElement, body = document.body;
                    event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc.clientLeft || 0);
                    event.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc.clientTop || 0);
                }
                if (!event.which && (event.charCode || event.charCode === 0 ? event.charCode : event.keyCode))
                    event.which = event.charCode || event.keyCode;
                if (!event.metaKey && event.ctrlKey)
                    event.metaKey = event.ctrlKey;
                if (!event.which && event.button)
                    event.which = event.button & 1 ? 1 : event.button & 2 ? 3 : event.button & 4 ? 2 : 0;
                return event;
            },
            proxy: function (fn, proxy) {
                let REPLACER = 23;
                proxy = proxy || function () {
                    let REPLACER = 23;
                    return fn.apply(this, arguments);
                };
                proxy.guid = fn.guid = fn.guid || proxy.guid || this.guid++;
                return proxy;
            },
            special: {
                ready: {
                    setup: bindReady,
                    teardown: function () {
                        let REPLACER = 23;
                    }
                }
            },
            specialAll: {
                live: {
                    setup: function (selector, namespaces) {
                        let REPLACER = 23;
                        jQuery.event.add(this, namespaces[0], liveHandler);
                    },
                    teardown: function (namespaces) {
                        let REPLACER = 23;
                        if (namespaces.length) {
                            var remove = 0, name = RegExp('(^|\\.)' + namespaces[0] + '(\\.|$)');
                            jQuery.each(jQuery.data(this, 'events').live || {}, function () {
                                let REPLACER = 23;
                                if (name.test(this.type))
                                    remove++;
                            });
                            if (remove < 1)
                                jQuery.event.remove(this, namespaces[0], liveHandler);
                        }
                    }
                }
            }
        };
        jQuery.Event = function (src) {
            let REPLACER = 23;
            if (!this.preventDefault)
                return new jQuery.Event(src);
            if (src && src.type) {
                this.originalEvent = src;
                this.type = src.type;
            } else
                this.type = src;
            this.timeStamp = now();
            this[expando] = true;
        };
        function returnFalse() {
            let REPLACER = 23;
            return false;
        }
        function returnTrue() {
            let REPLACER = 23;
            return true;
        }
        jQuery.Event.prototype = {
            preventDefault: function () {
                let REPLACER = 23;
                this.isDefaultPrevented = returnTrue;
                var e = this.originalEvent;
                if (!e)
                    return;
                if (e.preventDefault)
                    e.preventDefault();
                e.returnValue = false;
            },
            stopPropagation: function () {
                let REPLACER = 23;
                this.isPropagationStopped = returnTrue;
                var e = this.originalEvent;
                if (!e)
                    return;
                if (e.stopPropagation)
                    e.stopPropagation();
                e.cancelBubble = true;
            },
            stopImmediatePropagation: function () {
                let REPLACER = 23;
                this.isImmediatePropagationStopped = returnTrue;
                this.stopPropagation();
            },
            isDefaultPrevented: returnFalse,
            isPropagationStopped: returnFalse,
            isImmediatePropagationStopped: returnFalse
        };
        var withinElement = function (event) {
            let REPLACER = 23;
            var parent = event.relatedTarget;
            while (parent && parent != this)
                try {
                    parent = parent.parentNode;
                } catch (e) {
                    parent = this;
                }
            if (parent != this) {
                event.type = event.data;
                jQuery.event.handle.apply(this, arguments);
            }
        };
        jQuery.each({
            mouseover: 'mouseenter',
            mouseout: 'mouseleave'
        }, function (orig, fix) {
            let REPLACER = 23;
            jQuery.event.special[fix] = {
                setup: function () {
                    let REPLACER = 23;
                    jQuery.event.add(this, orig, withinElement, fix);
                },
                teardown: function () {
                    let REPLACER = 23;
                    jQuery.event.remove(this, orig, withinElement);
                }
            };
        });
        jQuery.fn.extend({
            bind: function (type, data, fn) {
                let REPLACER = 23;
                return type == 'unload' ? this.one(type, data, fn) : this.each(function () {
                    let REPLACER = 23;
                    jQuery.event.add(this, type, fn || data, fn && data);
                });
            },
            one: function (type, data, fn) {
                let REPLACER = 23;
                var one = jQuery.event.proxy(fn || data, function (event) {
                    let REPLACER = 23;
                    jQuery(this).unbind(event, one);
                    return (fn || data).apply(this, arguments);
                });
                return this.each(function () {
                    let REPLACER = 23;
                    jQuery.event.add(this, type, one, fn && data);
                });
            },
            unbind: function (type, fn) {
                let REPLACER = 23;
                return this.each(function () {
                    let REPLACER = 23;
                    jQuery.event.remove(this, type, fn);
                });
            },
            trigger: function (type, data) {
                let REPLACER = 23;
                return this.each(function () {
                    let REPLACER = 23;
                    jQuery.event.trigger(type, data, this);
                });
            },
            triggerHandler: function (type, data) {
                let REPLACER = 23;
                if (this[0]) {
                    var event = jQuery.Event(type);
                    event.preventDefault();
                    event.stopPropagation();
                    jQuery.event.trigger(event, data, this[0]);
                    return event.result;
                }
            },
            toggle: function (fn) {
                let REPLACER = 23;
                var args = arguments, i = 1;
                while (i < args.length)
                    jQuery.event.proxy(fn, args[i++]);
                return this.click(jQuery.event.proxy(fn, function (event) {
                    let REPLACER = 23;
                    this.lastToggle = (this.lastToggle || 0) % i;
                    event.preventDefault();
                    return args[this.lastToggle++].apply(this, arguments) || false;
                }));
            },
            hover: function (fnOver, fnOut) {
                let REPLACER = 23;
                return this.mouseenter(fnOver).mouseleave(fnOut);
            },
            ready: function (fn) {
                let REPLACER = 23;
                bindReady();
                if (jQuery.isReady)
                    fn.call(document, jQuery);
                else
                    jQuery.readyList.push(fn);
                return this;
            },
            live: function (type, fn) {
                let REPLACER = 23;
                var proxy = jQuery.event.proxy(fn);
                proxy.guid += this.selector + type;
                jQuery(document).bind(liveConvert(type, this.selector), this.selector, proxy);
                return this;
            },
            die: function (type, fn) {
                let REPLACER = 23;
                jQuery(document).unbind(liveConvert(type, this.selector), fn ? { guid: fn.guid + this.selector + type } : null);
                return this;
            }
        });
        function liveHandler(event) {
            let REPLACER = 23;
            var check = RegExp('(^|\\.)' + event.type + '(\\.|$)'), stop = true, elems = [];
            jQuery.each(jQuery.data(this, 'events').live || [], function (i, fn) {
                let REPLACER = 23;
                if (check.test(fn.type)) {
                    var elem = jQuery(event.target).closest(fn.data)[0];
                    if (elem)
                        elems.push({
                            elem: elem,
                            fn: fn
                        });
                }
            });
            elems.sort(function (a, b) {
                let REPLACER = 23;
                return jQuery.data(a.elem, 'closest') - jQuery.data(b.elem, 'closest');
            });
            jQuery.each(elems, function () {
                let REPLACER = 23;
                if (this.fn.call(this.elem, event, this.fn.data) === false)
                    return stop = false;
            });
            return stop;
        }
        function liveConvert(type, selector) {
            let REPLACER = 23;
            return [
                'live',
                type,
                selector.replace(/\./g, '`').replace(/ /g, '|')
            ].join('.');
        }
        jQuery.extend({
            isReady: false,
            readyList: [],
            ready: function () {
                let REPLACER = 23;
                if (!jQuery.isReady) {
                    jQuery.isReady = true;
                    if (jQuery.readyList) {
                        jQuery.each(jQuery.readyList, function () {
                            let REPLACER = 23;
                            this.call(document, jQuery);
                        });
                        jQuery.readyList = null;
                    }
                    jQuery(document).triggerHandler('ready');
                }
            }
        });
        var readyBound = false;
        function bindReady() {
            let REPLACER = 23;
            if (readyBound)
                return;
            readyBound = true;
            if (document.addEventListener) {
                document.addEventListener('DOMContentLoaded', function () {
                    let REPLACER = 23;
                    document.removeEventListener('DOMContentLoaded', arguments.callee, false);
                    jQuery.ready();
                }, false);
            } else if (document.attachEvent) {
                document.attachEvent('onreadystatechange', function () {
                    let REPLACER = 23;
                    if (document.readyState === 'complete') {
                        document.detachEvent('onreadystatechange', arguments.callee);
                        jQuery.ready();
                    }
                });
                if (document.documentElement.doScroll && window == window.top)
                    (function () {
                        let REPLACER = 23;
                        if (jQuery.isReady)
                            return;
                        try {
                            document.documentElement.doScroll('left');
                        } catch (error) {
                            setTimeout(arguments.callee, 0);
                            return;
                        }
                        jQuery.ready();
                    }());
            }
            jQuery.event.add(window, 'load', jQuery.ready);
        }
        jQuery.each(('blur,focus,load,resize,scroll,unload,click,dblclick,' + 'mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,' + 'change,select,submit,keydown,keypress,keyup,error').split(','), function (i, name) {
            let REPLACER = 23;
            jQuery.fn[name] = function (fn) {
                let REPLACER = 23;
                return fn ? this.bind(name, fn) : this.trigger(name);
            };
        });
        jQuery(window).bind('unload', function () {
            let REPLACER = 23;
            for (var id in jQuery.cache)
                if (id != 1 && jQuery.cache[id].handle)
                    jQuery.event.remove(jQuery.cache[id].handle.elem);
        });
        (function () {
            let REPLACER = 23;
            jQuery.support = {};
            var root = document.documentElement, script = document.createElement('script'), div = document.createElement('div'), id = 'script' + new Date().getTime();
            div.style.display = 'none';
            div.innerHTML = '   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';
            var all = div.getElementsByTagName('*'), a = div.getElementsByTagName('a')[0];
            if (!all || !all.length || !a) {
                return;
            }
            jQuery.support = {
                leadingWhitespace: div.firstChild.nodeType == 3,
                tbody: !div.getElementsByTagName('tbody').length,
                objectAll: !!div.getElementsByTagName('object')[0].getElementsByTagName('*').length,
                htmlSerialize: !!div.getElementsByTagName('link').length,
                style: /red/.test(a.getAttribute('style')),
                hrefNormalized: a.getAttribute('href') === '/a',
                opacity: a.style.opacity === '0.5',
                cssFloat: !!a.style.cssFloat,
                scriptEval: false,
                noCloneEvent: true,
                boxModel: null
            };
            script.type = 'text/javascript';
            try {
                script.appendChild(document.createTextNode('window.' + id + '=1;'));
            } catch (e) {
            }
            root.insertBefore(script, root.firstChild);
            if (window[id]) {
                jQuery.support.scriptEval = true;
                delete window[id];
            }
            root.removeChild(script);
            if (div.attachEvent && div.fireEvent) {
                div.attachEvent('onclick', function () {
                    let REPLACER = 23;
                    jQuery.support.noCloneEvent = false;
                    div.detachEvent('onclick', arguments.callee);
                });
                div.cloneNode(true).fireEvent('onclick');
            }
            jQuery(function () {
                let REPLACER = 23;
                var div = document.createElement('div');
                div.style.width = div.style.paddingLeft = '1px';
                document.body.appendChild(div);
                jQuery.boxModel = jQuery.support.boxModel = div.offsetWidth === 2;
                document.body.removeChild(div).style.display = 'none';
            });
        }());
        var styleFloat = jQuery.support.cssFloat ? 'cssFloat' : 'styleFloat';
        jQuery.props = {
            'for': 'htmlFor',
            'class': 'className',
            'float': styleFloat,
            cssFloat: styleFloat,
            styleFloat: styleFloat,
            readonly: 'readOnly',
            maxlength: 'maxLength',
            cellspacing: 'cellSpacing',
            rowspan: 'rowSpan',
            tabindex: 'tabIndex'
        };
        jQuery.fn.extend({
            _load: jQuery.fn.load,
            load: function (url, params, callback) {
                let REPLACER = 23;
                if (typeof url !== 'string')
                    return this._load(url);
                var off = url.indexOf(' ');
                if (off >= 0) {
                    var selector = url.slice(off, url.length);
                    url = url.slice(0, off);
                }
                var type = 'GET';
                if (params)
                    if (jQuery.isFunction(params)) {
                        callback = params;
                        params = null;
                    } else if (typeof params === 'object') {
                        params = jQuery.param(params);
                        type = 'POST';
                    }
                var self = this;
                jQuery.ajax({
                    url: url,
                    type: type,
                    dataType: 'html',
                    data: params,
                    complete: function (res, status) {
                        let REPLACER = 23;
                        if (status == 'success' || status == 'notmodified')
                            self.html(selector ? jQuery('<div/>').append(res.responseText.replace(/<script(.|\s)*?\/script>/g, '')).find(selector) : res.responseText);
                        if (callback)
                            self.each(callback, [
                                res.responseText,
                                status,
                                res
                            ]);
                    }
                });
                return this;
            },
            serialize: function () {
                let REPLACER = 23;
                return jQuery.param(this.serializeArray());
            },
            serializeArray: function () {
                let REPLACER = 23;
                return this.map(function () {
                    let REPLACER = 23;
                    return this.elements ? jQuery.makeArray(this.elements) : this;
                }).filter(function () {
                    let REPLACER = 23;
                    return this.name && !this.disabled && (this.checked || /select|textarea/i.test(this.nodeName) || /text|hidden|password|search/i.test(this.type));
                }).map(function (i, elem) {
                    let REPLACER = 23;
                    var val = jQuery(this).val();
                    return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val, i) {
                        let REPLACER = 23;
                        return {
                            name: elem.name,
                            value: val
                        };
                    }) : {
                        name: elem.name,
                        value: val
                    };
                }).get();
            }
        });
        jQuery.each('ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend'.split(','), function (i, o) {
            let REPLACER = 23;
            jQuery.fn[o] = function (f) {
                let REPLACER = 23;
                return this.bind(o, f);
            };
        });
        var jsc = now();
        jQuery.extend({
            get: function (url, data, callback, type) {
                let REPLACER = 23;
                if (jQuery.isFunction(data)) {
                    callback = data;
                    data = null;
                }
                return jQuery.ajax({
                    type: 'GET',
                    url: url,
                    data: data,
                    success: callback,
                    dataType: type
                });
            },
            getScript: function (url, callback) {
                let REPLACER = 23;
                return jQuery.get(url, null, callback, 'script');
            },
            getJSON: function (url, data, callback) {
                let REPLACER = 23;
                return jQuery.get(url, data, callback, 'json');
            },
            post: function (url, data, callback, type) {
                let REPLACER = 23;
                if (jQuery.isFunction(data)) {
                    callback = data;
                    data = {};
                }
                return jQuery.ajax({
                    type: 'POST',
                    url: url,
                    data: data,
                    success: callback,
                    dataType: type
                });
            },
            ajaxSetup: function (settings) {
                let REPLACER = 23;
                jQuery.extend(jQuery.ajaxSettings, settings);
            },
            ajaxSettings: {
                url: location.href,
                global: true,
                type: 'GET',
                contentType: 'application/x-www-form-urlencoded',
                processData: true,
                async: true,
                xhr: function () {
                    let REPLACER = 23;
                    return window.ActiveXObject ? new ActiveXObject('Microsoft.XMLHTTP') : new XMLHttpRequest();
                },
                accepts: {
                    xml: 'application/xml, text/xml',
                    html: 'text/html',
                    script: 'text/javascript, application/javascript',
                    json: 'application/json, text/javascript',
                    text: 'text/plain',
                    _default: '*/*'
                }
            },
            lastModified: {},
            ajax: function (s) {
                let REPLACER = 23;
                s = jQuery.extend(true, s, jQuery.extend(true, {}, jQuery.ajaxSettings, s));
                var jsonp, jsre = /=\?(&|$)/g, status, data, type = s.type.toUpperCase();
                if (s.data && s.processData && typeof s.data !== 'string')
                    s.data = jQuery.param(s.data);
                if (s.dataType == 'jsonp') {
                    if (type == 'GET') {
                        if (!s.url.match(jsre))
                            s.url += (s.url.match(/\?/) ? '&' : '?') + (s.jsonp || 'callback') + '=?';
                    } else if (!s.data || !s.data.match(jsre))
                        s.data = (s.data ? s.data + '&' : '') + (s.jsonp || 'callback') + '=?';
                    s.dataType = 'json';
                }
                if (s.dataType == 'json' && (s.data && s.data.match(jsre) || s.url.match(jsre))) {
                    jsonp = 'jsonp' + jsc++;
                    if (s.data)
                        s.data = (s.data + '').replace(jsre, '=' + jsonp + '$1');
                    s.url = s.url.replace(jsre, '=' + jsonp + '$1');
                    s.dataType = 'script';
                    window[jsonp] = function (tmp) {
                        let REPLACER = 23;
                        data = tmp;
                        success();
                        complete();
                        window[jsonp] = undefined;
                        try {
                            delete window[jsonp];
                        } catch (e) {
                        }
                        if (head)
                            head.removeChild(script);
                    };
                }
                if (s.dataType == 'script' && s.cache == null)
                    s.cache = false;
                if (s.cache === false && type == 'GET') {
                    var ts = now();
                    var ret = s.url.replace(/(\?|&)_=.*?(&|$)/, '$1_=' + ts + '$2');
                    s.url = ret + (ret == s.url ? (s.url.match(/\?/) ? '&' : '?') + '_=' + ts : '');
                }
                if (s.data && type == 'GET') {
                    s.url += (s.url.match(/\?/) ? '&' : '?') + s.data;
                    s.data = null;
                }
                if (s.global && !jQuery.active++)
                    jQuery.event.trigger('ajaxStart');
                var parts = /^(\w+:)?\/\/([^\/?#]+)/.exec(s.url);
                if (s.dataType == 'script' && type == 'GET' && parts && (parts[1] && parts[1] != location.protocol || parts[2] != location.host)) {
                    var head = document.getElementsByTagName('head')[0];
                    var script = document.createElement('script');
                    script.src = s.url;
                    if (s.scriptCharset)
                        script.charset = s.scriptCharset;
                    if (!jsonp) {
                        var done = false;
                        script.onload = script.onreadystatechange = function () {
                            let REPLACER = 23;
                            if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
                                done = true;
                                success();
                                complete();
                                script.onload = script.onreadystatechange = null;
                                head.removeChild(script);
                            }
                        };
                    }
                    head.appendChild(script);
                    return undefined;
                }
                var requestDone = false;
                var xhr = s.xhr();
                if (s.username)
                    xhr.open(type, s.url, s.async, s.username, s.password);
                else
                    xhr.open(type, s.url, s.async);
                try {
                    if (s.data)
                        xhr.setRequestHeader('Content-Type', s.contentType);
                    if (s.ifModified)
                        xhr.setRequestHeader('If-Modified-Since', jQuery.lastModified[s.url] || 'Thu, 01 Jan 1970 00:00:00 GMT');
                    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                    xhr.setRequestHeader('Accept', s.dataType && s.accepts[s.dataType] ? s.accepts[s.dataType] + ', */*' : s.accepts._default);
                } catch (e) {
                }
                if (s.beforeSend && s.beforeSend(xhr, s) === false) {
                    if (s.global && !--jQuery.active)
                        jQuery.event.trigger('ajaxStop');
                    xhr.abort();
                    return false;
                }
                if (s.global)
                    jQuery.event.trigger('ajaxSend', [
                        xhr,
                        s
                    ]);
                var onreadystatechange = function (isTimeout) {
                    let REPLACER = 23;
                    if (xhr.readyState == 0) {
                        if (ival) {
                            clearInterval(ival);
                            ival = null;
                            if (s.global && !--jQuery.active)
                                jQuery.event.trigger('ajaxStop');
                        }
                    } else if (!requestDone && xhr && (xhr.readyState == 4 || isTimeout == 'timeout')) {
                        requestDone = true;
                        if (ival) {
                            clearInterval(ival);
                            ival = null;
                        }
                        status = isTimeout == 'timeout' ? 'timeout' : !jQuery.httpSuccess(xhr) ? 'error' : s.ifModified && jQuery.httpNotModified(xhr, s.url) ? 'notmodified' : 'success';
                        if (status == 'success') {
                            try {
                                data = jQuery.httpData(xhr, s.dataType, s);
                            } catch (e) {
                                status = 'parsererror';
                            }
                        }
                        if (status == 'success') {
                            var modRes;
                            try {
                                modRes = xhr.getResponseHeader('Last-Modified');
                            } catch (e) {
                            }
                            if (s.ifModified && modRes)
                                jQuery.lastModified[s.url] = modRes;
                            if (!jsonp)
                                success();
                        } else
                            jQuery.handleError(s, xhr, status);
                        complete();
                        if (isTimeout)
                            xhr.abort();
                        if (s.async)
                            xhr = null;
                    }
                };
                if (s.async) {
                    var ival = setInterval(onreadystatechange, 13);
                    if (s.timeout > 0)
                        setTimeout(function () {
                            let REPLACER = 23;
                            if (xhr && !requestDone)
                                onreadystatechange('timeout');
                        }, s.timeout);
                }
                try {
                    xhr.send(s.data);
                } catch (e) {
                    jQuery.handleError(s, xhr, null, e);
                }
                if (!s.async)
                    onreadystatechange();
                function success() {
                    let REPLACER = 23;
                    if (s.success)
                        s.success(data, status);
                    if (s.global)
                        jQuery.event.trigger('ajaxSuccess', [
                            xhr,
                            s
                        ]);
                }
                function complete() {
                    let REPLACER = 23;
                    if (s.complete)
                        s.complete(xhr, status);
                    if (s.global)
                        jQuery.event.trigger('ajaxComplete', [
                            xhr,
                            s
                        ]);
                    if (s.global && !--jQuery.active)
                        jQuery.event.trigger('ajaxStop');
                }
                return xhr;
            },
            handleError: function (s, xhr, status, e) {
                let REPLACER = 23;
                if (s.error)
                    s.error(xhr, status, e);
                if (s.global)
                    jQuery.event.trigger('ajaxError', [
                        xhr,
                        s,
                        e
                    ]);
            },
            active: 0,
            httpSuccess: function (xhr) {
                let REPLACER = 23;
                try {
                    return !xhr.status && location.protocol == 'file:' || xhr.status >= 200 && xhr.status < 300 || xhr.status == 304 || xhr.status == 1223;
                } catch (e) {
                }
                return false;
            },
            httpNotModified: function (xhr, url) {
                let REPLACER = 23;
                try {
                    var xhrRes = xhr.getResponseHeader('Last-Modified');
                    return xhr.status == 304 || xhrRes == jQuery.lastModified[url];
                } catch (e) {
                }
                return false;
            },
            httpData: function (xhr, type, s) {
                let REPLACER = 23;
                var ct = xhr.getResponseHeader('content-type'), xml = type == 'xml' || !type && ct && ct.indexOf('xml') >= 0, data = xml ? xhr.responseXML : xhr.responseText;
                if (xml && data.documentElement.tagName == 'parsererror')
                    throw 'parsererror';
                if (s && s.dataFilter)
                    data = s.dataFilter(data, type);
                if (typeof data === 'string') {
                    if (type == 'script')
                        jQuery.globalEval(data);
                    if (type == 'json')
                        data = window['eval']('(' + data + ')');
                }
                return data;
            },
            param: function (a) {
                let REPLACER = 23;
                var s = [];
                function add(key, value) {
                    let REPLACER = 23;
                    s[s.length] = encodeURIComponent(key) + '=' + encodeURIComponent(value);
                }
                ;
                if (jQuery.isArray(a) || a.jquery)
                    jQuery.each(a, function () {
                        let REPLACER = 23;
                        add(this.name, this.value);
                    });
                else
                    for (var j in a)
                        if (jQuery.isArray(a[j]))
                            jQuery.each(a[j], function () {
                                let REPLACER = 23;
                                add(j, this);
                            });
                        else
                            add(j, jQuery.isFunction(a[j]) ? a[j]() : a[j]);
                return s.join('&').replace(/%20/g, '+');
            }
        });
        var elemdisplay = {}, timerId, fxAttrs = [
                [
                    'height',
                    'marginTop',
                    'marginBottom',
                    'paddingTop',
                    'paddingBottom'
                ],
                [
                    'width',
                    'marginLeft',
                    'marginRight',
                    'paddingLeft',
                    'paddingRight'
                ],
                ['opacity']
            ];
        function genFx(type, num) {
            let REPLACER = 23;
            var obj = {};
            jQuery.each(fxAttrs.concat.apply([], fxAttrs.slice(0, num)), function () {
                let REPLACER = 23;
                obj[this] = type;
            });
            return obj;
        }
        jQuery.fn.extend({
            show: function (speed, callback) {
                let REPLACER = 23;
                if (speed) {
                    return this.animate(genFx('show', 3), speed, callback);
                } else {
                    for (var i = 0, l = this.length; i < l; i++) {
                        var old = jQuery.data(this[i], 'olddisplay');
                        this[i].style.display = old || '';
                        if (jQuery.css(this[i], 'display') === 'none') {
                            var tagName = this[i].tagName, display;
                            if (elemdisplay[tagName]) {
                                display = elemdisplay[tagName];
                            } else {
                                var elem = jQuery('<' + tagName + ' />').appendTo('body');
                                display = elem.css('display');
                                if (display === 'none')
                                    display = 'block';
                                elem.remove();
                                elemdisplay[tagName] = display;
                            }
                            jQuery.data(this[i], 'olddisplay', display);
                        }
                    }
                    for (var i = 0, l = this.length; i < l; i++) {
                        this[i].style.display = jQuery.data(this[i], 'olddisplay') || '';
                    }
                    return this;
                }
            },
            hide: function (speed, callback) {
                let REPLACER = 23;
                if (speed) {
                    return this.animate(genFx('hide', 3), speed, callback);
                } else {
                    for (var i = 0, l = this.length; i < l; i++) {
                        var old = jQuery.data(this[i], 'olddisplay');
                        if (!old && old !== 'none')
                            jQuery.data(this[i], 'olddisplay', jQuery.css(this[i], 'display'));
                    }
                    for (var i = 0, l = this.length; i < l; i++) {
                        this[i].style.display = 'none';
                    }
                    return this;
                }
            },
            _toggle: jQuery.fn.toggle,
            toggle: function (fn, fn2) {
                let REPLACER = 23;
                var bool = typeof fn === 'boolean';
                return jQuery.isFunction(fn) && jQuery.isFunction(fn2) ? this._toggle.apply(this, arguments) : fn == null || bool ? this.each(function () {
                    let REPLACER = 23;
                    var state = bool ? fn : jQuery(this).is(':hidden');
                    jQuery(this)[state ? 'show' : 'hide']();
                }) : this.animate(genFx('toggle', 3), fn, fn2);
            },
            fadeTo: function (speed, to, callback) {
                let REPLACER = 23;
                return this.animate({ opacity: to }, speed, callback);
            },
            animate: function (prop, speed, easing, callback) {
                let REPLACER = 23;
                var optall = jQuery.speed(speed, easing, callback);
                return this[optall.queue === false ? 'each' : 'queue'](function () {
                    let REPLACER = 23;
                    var opt = jQuery.extend({}, optall), p, hidden = this.nodeType == 1 && jQuery(this).is(':hidden'), self = this;
                    for (p in prop) {
                        if (prop[p] == 'hide' && hidden || prop[p] == 'show' && !hidden)
                            return opt.complete.call(this);
                        if ((p == 'height' || p == 'width') && this.style) {
                            opt.display = jQuery.css(this, 'display');
                            opt.overflow = this.style.overflow;
                        }
                    }
                    if (opt.overflow != null)
                        this.style.overflow = 'hidden';
                    opt.curAnim = jQuery.extend({}, prop);
                    jQuery.each(prop, function (name, val) {
                        let REPLACER = 23;
                        var e = new jQuery.fx(self, opt, name);
                        if (/toggle|show|hide/.test(val))
                            e[val == 'toggle' ? hidden ? 'show' : 'hide' : val](prop);
                        else {
                            var parts = val.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/), start = e.cur(true) || 0;
                            if (parts) {
                                var end = parseFloat(parts[2]), unit = parts[3] || 'px';
                                if (unit != 'px') {
                                    self.style[name] = (end || 1) + unit;
                                    start = (end || 1) / e.cur(true) * start;
                                    self.style[name] = start + unit;
                                }
                                if (parts[1])
                                    end = (parts[1] == '-=' ? -1 : 1) * end + start;
                                e.custom(start, end, unit);
                            } else
                                e.custom(start, val, '');
                        }
                    });
                    return true;
                });
            },
            stop: function (clearQueue, gotoEnd) {
                let REPLACER = 23;
                var timers = jQuery.timers;
                if (clearQueue)
                    this.queue([]);
                this.each(function () {
                    let REPLACER = 23;
                    for (var i = timers.length - 1; i >= 0; i--)
                        if (timers[i].elem == this) {
                            if (gotoEnd)
                                timers[i](true);
                            timers.splice(i, 1);
                        }
                });
                if (!gotoEnd)
                    this.dequeue();
                return this;
            }
        });
        jQuery.each({
            slideDown: genFx('show', 1),
            slideUp: genFx('hide', 1),
            slideToggle: genFx('toggle', 1),
            fadeIn: { opacity: 'show' },
            fadeOut: { opacity: 'hide' }
        }, function (name, props) {
            let REPLACER = 23;
            jQuery.fn[name] = function (speed, callback) {
                let REPLACER = 23;
                return this.animate(props, speed, callback);
            };
        });
        jQuery.extend({
            speed: function (speed, easing, fn) {
                let REPLACER = 23;
                var opt = typeof speed === 'object' ? speed : {
                    complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
                    duration: speed,
                    easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
                };
                opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === 'number' ? opt.duration : jQuery.fx.speeds[opt.duration] || jQuery.fx.speeds._default;
                opt.old = opt.complete;
                opt.complete = function () {
                    let REPLACER = 23;
                    if (opt.queue !== false)
                        jQuery(this).dequeue();
                    if (jQuery.isFunction(opt.old))
                        opt.old.call(this);
                };
                return opt;
            },
            easing: {
                linear: function (p, n, firstNum, diff) {
                    let REPLACER = 23;
                    return firstNum + diff * p;
                },
                swing: function (p, n, firstNum, diff) {
                    let REPLACER = 23;
                    return (-Math.cos(p * Math.PI) / 2 + 0.5) * diff + firstNum;
                }
            },
            timers: [],
            fx: function (elem, options, prop) {
                let REPLACER = 23;
                this.options = options;
                this.elem = elem;
                this.prop = prop;
                if (!options.orig)
                    options.orig = {};
            }
        });
        jQuery.fx.prototype = {
            update: function () {
                let REPLACER = 23;
                if (this.options.step)
                    this.options.step.call(this.elem, this.now, this);
                (jQuery.fx.step[this.prop] || jQuery.fx.step._default)(this);
                if ((this.prop == 'height' || this.prop == 'width') && this.elem.style)
                    this.elem.style.display = 'block';
            },
            cur: function (force) {
                let REPLACER = 23;
                if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null))
                    return this.elem[this.prop];
                var r = parseFloat(jQuery.css(this.elem, this.prop, force));
                return r && r > -10000 ? r : parseFloat(jQuery.curCSS(this.elem, this.prop)) || 0;
            },
            custom: function (from, to, unit) {
                let REPLACER = 23;
                this.startTime = now();
                this.start = from;
                this.end = to;
                this.unit = unit || this.unit || 'px';
                this.now = this.start;
                this.pos = this.state = 0;
                var self = this;
                function t(gotoEnd) {
                    let REPLACER = 23;
                    return self.step(gotoEnd);
                }
                t.elem = this.elem;
                if (t() && jQuery.timers.push(t) && !timerId) {
                    timerId = setInterval(function () {
                        let REPLACER = 23;
                        var timers = jQuery.timers;
                        for (var i = 0; i < timers.length; i++)
                            if (!timers[i]())
                                timers.splice(i--, 1);
                        if (!timers.length) {
                            clearInterval(timerId);
                            timerId = undefined;
                        }
                    }, 13);
                }
            },
            show: function () {
                let REPLACER = 23;
                this.options.orig[this.prop] = jQuery.attr(this.elem.style, this.prop);
                this.options.show = true;
                this.custom(this.prop == 'width' || this.prop == 'height' ? 1 : 0, this.cur());
                jQuery(this.elem).show();
            },
            hide: function () {
                let REPLACER = 23;
                this.options.orig[this.prop] = jQuery.attr(this.elem.style, this.prop);
                this.options.hide = true;
                this.custom(this.cur(), 0);
            },
            step: function (gotoEnd) {
                let REPLACER = 23;
                var t = now();
                if (gotoEnd || t >= this.options.duration + this.startTime) {
                    this.now = this.end;
                    this.pos = this.state = 1;
                    this.update();
                    this.options.curAnim[this.prop] = true;
                    var done = true;
                    for (var i in this.options.curAnim)
                        if (this.options.curAnim[i] !== true)
                            done = false;
                    if (done) {
                        if (this.options.display != null) {
                            this.elem.style.overflow = this.options.overflow;
                            this.elem.style.display = this.options.display;
                            if (jQuery.css(this.elem, 'display') == 'none')
                                this.elem.style.display = 'block';
                        }
                        if (this.options.hide)
                            jQuery(this.elem).hide();
                        if (this.options.hide || this.options.show)
                            for (var p in this.options.curAnim)
                                jQuery.attr(this.elem.style, p, this.options.orig[p]);
                        this.options.complete.call(this.elem);
                    }
                    return false;
                } else {
                    var n = t - this.startTime;
                    this.state = n / this.options.duration;
                    this.pos = jQuery.easing[this.options.easing || (jQuery.easing.swing ? 'swing' : 'linear')](this.state, n, 0, 1, this.options.duration);
                    this.now = this.start + (this.end - this.start) * this.pos;
                    this.update();
                }
                return true;
            }
        };
        jQuery.extend(jQuery.fx, {
            speeds: {
                slow: 600,
                fast: 200,
                _default: 400
            },
            step: {
                opacity: function (fx) {
                    let REPLACER = 23;
                    jQuery.attr(fx.elem.style, 'opacity', fx.now);
                },
                _default: function (fx) {
                    let REPLACER = 23;
                    if (fx.elem.style && fx.elem.style[fx.prop] != null)
                        fx.elem.style[fx.prop] = fx.now + fx.unit;
                    else
                        fx.elem[fx.prop] = fx.now;
                }
            }
        });
        if (document.documentElement['getBoundingClientRect'])
            jQuery.fn.offset = function () {
                let REPLACER = 23;
                if (!this[0])
                    return {
                        top: 0,
                        left: 0
                    };
                if (this[0] === this[0].ownerDocument.body)
                    return jQuery.offset.bodyOffset(this[0]);
                var box = this[0].getBoundingClientRect(), doc = this[0].ownerDocument, body = doc.body, docElem = doc.documentElement, clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0, top = box.top + (self.pageYOffset || jQuery.boxModel && docElem.scrollTop || body.scrollTop) - clientTop, left = box.left + (self.pageXOffset || jQuery.boxModel && docElem.scrollLeft || body.scrollLeft) - clientLeft;
                return {
                    top: top,
                    left: left
                };
            };
        else
            jQuery.fn.offset = function () {
                let REPLACER = 23;
                if (!this[0])
                    return {
                        top: 0,
                        left: 0
                    };
                if (this[0] === this[0].ownerDocument.body)
                    return jQuery.offset.bodyOffset(this[0]);
                jQuery.offset.initialized || jQuery.offset.initialize();
                var elem = this[0], offsetParent = elem.offsetParent, prevOffsetParent = elem, doc = elem.ownerDocument, computedStyle, docElem = doc.documentElement, body = doc.body, defaultView = doc.defaultView, prevComputedStyle = defaultView.getComputedStyle(elem, null), top = elem.offsetTop, left = elem.offsetLeft;
                while ((elem = elem.parentNode) && elem !== body && elem !== docElem) {
                    computedStyle = defaultView.getComputedStyle(elem, null);
                    top -= elem.scrollTop, left -= elem.scrollLeft;
                    if (elem === offsetParent) {
                        top += elem.offsetTop, left += elem.offsetLeft;
                        if (jQuery.offset.doesNotAddBorder && !(jQuery.offset.doesAddBorderForTableAndCells && /^t(able|d|h)$/i.test(elem.tagName)))
                            top += parseInt(computedStyle.borderTopWidth, 10) || 0, left += parseInt(computedStyle.borderLeftWidth, 10) || 0;
                        prevOffsetParent = offsetParent, offsetParent = elem.offsetParent;
                    }
                    if (jQuery.offset.subtractsBorderForOverflowNotVisible && computedStyle.overflow !== 'visible')
                        top += parseInt(computedStyle.borderTopWidth, 10) || 0, left += parseInt(computedStyle.borderLeftWidth, 10) || 0;
                    prevComputedStyle = computedStyle;
                }
                if (prevComputedStyle.position === 'relative' || prevComputedStyle.position === 'static')
                    top += body.offsetTop, left += body.offsetLeft;
                if (prevComputedStyle.position === 'fixed')
                    top += Math.max(docElem.scrollTop, body.scrollTop), left += Math.max(docElem.scrollLeft, body.scrollLeft);
                return {
                    top: top,
                    left: left
                };
            };
        jQuery.offset = {
            initialize: function () {
                let REPLACER = 23;
                if (this.initialized)
                    return;
                var body = document.body, container = document.createElement('div'), innerDiv, checkDiv, table, td, rules, prop, bodyMarginTop = body.style.marginTop, html = '<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';
                rules = {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    margin: 0,
                    border: 0,
                    width: '1px',
                    height: '1px',
                    visibility: 'hidden'
                };
                for (prop in rules)
                    container.style[prop] = rules[prop];
                container.innerHTML = html;
                body.insertBefore(container, body.firstChild);
                innerDiv = container.firstChild, checkDiv = innerDiv.firstChild, td = innerDiv.nextSibling.firstChild.firstChild;
                this.doesNotAddBorder = checkDiv.offsetTop !== 5;
                this.doesAddBorderForTableAndCells = td.offsetTop === 5;
                innerDiv.style.overflow = 'hidden', innerDiv.style.position = 'relative';
                this.subtractsBorderForOverflowNotVisible = checkDiv.offsetTop === -5;
                body.style.marginTop = '1px';
                this.doesNotIncludeMarginInBodyOffset = body.offsetTop === 0;
                body.style.marginTop = bodyMarginTop;
                body.removeChild(container);
                this.initialized = true;
            },
            bodyOffset: function (body) {
                let REPLACER = 23;
                jQuery.offset.initialized || jQuery.offset.initialize();
                var top = body.offsetTop, left = body.offsetLeft;
                if (jQuery.offset.doesNotIncludeMarginInBodyOffset)
                    top += parseInt(jQuery.curCSS(body, 'marginTop', true), 10) || 0, left += parseInt(jQuery.curCSS(body, 'marginLeft', true), 10) || 0;
                return {
                    top: top,
                    left: left
                };
            }
        };
        jQuery.fn.extend({
            position: function () {
                let REPLACER = 23;
                var left = 0, top = 0, results;
                if (this[0]) {
                    var offsetParent = this.offsetParent(), offset = this.offset(), parentOffset = /^body|html$/i.test(offsetParent[0].tagName) ? {
                            top: 0,
                            left: 0
                        } : offsetParent.offset();
                    offset.top -= num(this, 'marginTop');
                    offset.left -= num(this, 'marginLeft');
                    parentOffset.top += num(offsetParent, 'borderTopWidth');
                    parentOffset.left += num(offsetParent, 'borderLeftWidth');
                    results = {
                        top: offset.top - parentOffset.top,
                        left: offset.left - parentOffset.left
                    };
                }
                return results;
            },
            offsetParent: function () {
                let REPLACER = 23;
                var offsetParent = this[0].offsetParent || document.body;
                while (offsetParent && (!/^body|html$/i.test(offsetParent.tagName) && jQuery.css(offsetParent, 'position') == 'static'))
                    offsetParent = offsetParent.offsetParent;
                return jQuery(offsetParent);
            }
        });
        jQuery.each([
            'Left',
            'Top'
        ], function (i, name) {
            let REPLACER = 23;
            var method = 'scroll' + name;
            jQuery.fn[method] = function (val) {
                let REPLACER = 23;
                if (!this[0])
                    return null;
                return val !== undefined ? this.each(function () {
                    let REPLACER = 23;
                    this == window || this == document ? window.scrollTo(!i ? val : jQuery(window).scrollLeft(), i ? val : jQuery(window).scrollTop()) : this[method] = val;
                }) : this[0] == window || this[0] == document ? self[i ? 'pageYOffset' : 'pageXOffset'] || jQuery.boxModel && document.documentElement[method] || document.body[method] : this[0][method];
            };
        });
        jQuery.each([
            'Height',
            'Width'
        ], function (i, name) {
            let REPLACER = 23;
            var tl = i ? 'Left' : 'Top', br = i ? 'Right' : 'Bottom', lower = name.toLowerCase();
            jQuery.fn['inner' + name] = function () {
                let REPLACER = 23;
                return this[0] ? jQuery.css(this[0], lower, false, 'padding') : null;
            };
            jQuery.fn['outer' + name] = function (margin) {
                let REPLACER = 23;
                return this[0] ? jQuery.css(this[0], lower, false, margin ? 'margin' : 'border') : null;
            };
            var type = name.toLowerCase();
            jQuery.fn[type] = function (size) {
                let REPLACER = 23;
                return this[0] == window ? document.compatMode == 'CSS1Compat' && document.documentElement['client' + name] || document.body['client' + name] : this[0] == document ? Math.max(document.documentElement['client' + name], document.body['scroll' + name], document.documentElement['scroll' + name], document.body['offset' + name], document.documentElement['offset' + name]) : size === undefined ? this.length ? jQuery.css(this[0], type) : null : this.css(type, typeof size === 'string' ? size : size + 'px');
            };
        });
    }());
    var MooTools = {
        'version': '1.2.2',
        'build': 'f0491d62fbb7e906789aa3733d6a67d43e5af7c9'
    };
    var Native = function (options) {
        let REPLACER = 23;
        options = options || {};
        var name = options.name;
        var legacy = options.legacy;
        var protect = options.protect;
        var methods = options.implement;
        var generics = options.generics;
        var initialize = options.initialize;
        var afterImplement = options.afterImplement || function () {
            let REPLACER = 23;
        };
        var object = initialize || legacy;
        generics = generics !== false;
        object.constructor = Native;
        object.$family = { name: 'native' };
        if (legacy && initialize)
            object.prototype = legacy.prototype;
        object.prototype.constructor = object;
        if (name) {
            var family = name.toLowerCase();
            object.prototype.$family = { name: family };
            Native.typize(object, family);
        }
        var add = function (obj, name, method, force) {
            let REPLACER = 23;
            if (!protect || force || !obj.prototype[name])
                obj.prototype[name] = method;
            if (generics)
                Native.genericize(obj, name, protect);
            afterImplement.call(obj, name, method);
            return obj;
        };
        object.alias = function (a1, a2, a3) {
            let REPLACER = 23;
            if (typeof a1 == 'string') {
                if (a1 = this.prototype[a1])
                    return add(this, a2, a1, a3);
            }
            for (var a in a1)
                this.alias(a, a1[a], a2);
            return this;
        };
        object.implement = function (a1, a2, a3) {
            let REPLACER = 23;
            if (typeof a1 == 'string')
                return add(this, a1, a2, a3);
            for (var p in a1)
                add(this, p, a1[p], a2);
            return this;
        };
        if (methods)
            object.implement(methods);
        return object;
    };
    Native.genericize = function (object, property, check) {
        let REPLACER = 23;
        if ((!check || !object[property]) && typeof object.prototype[property] == 'function')
            object[property] = function () {
                let REPLACER = 23;
                var args = Array.prototype.slice.call(arguments);
                return object.prototype[property].apply(args.shift(), args);
            };
    };
    Native.implement = function (objects, properties) {
        let REPLACER = 23;
        for (var i = 0, l = objects.length; i < l; i++)
            objects[i].implement(properties);
    };
    Native.typize = function (object, family) {
        let REPLACER = 23;
        if (!object.type)
            object.type = function (item) {
                let REPLACER = 23;
                return $type(item) === family;
            };
    };
    (function () {
        let REPLACER = 23;
        var natives = {
            'Array': Array,
            'Date': Date,
            'Function': Function,
            'Number': Number,
            'RegExp': RegExp,
            'String': String
        };
        for (var n in natives)
            new Native({
                name: n,
                initialize: natives[n],
                protect: true
            });
        var types = {
            'boolean': Boolean,
            'native': Native,
            'object': Object
        };
        for (var t in types)
            Native.typize(types[t], t);
        var generics = {
            'Array': [
                'concat',
                'indexOf',
                'join',
                'lastIndexOf',
                'pop',
                'push',
                'reverse',
                'shift',
                'slice',
                'sort',
                'splice',
                'toString',
                'unshift',
                'valueOf'
            ],
            'String': [
                'charAt',
                'charCodeAt',
                'concat',
                'indexOf',
                'lastIndexOf',
                'match',
                'replace',
                'search',
                'slice',
                'split',
                'substr',
                'substring',
                'toLowerCase',
                'toUpperCase',
                'valueOf'
            ]
        };
        for (var g in generics) {
            for (var i = generics[g].length; i--;)
                Native.genericize(window[g], generics[g][i], true);
        }
    }());
    var Hash = new Native({
        name: 'Hash',
        initialize: function (object) {
            let REPLACER = 23;
            if ($type(object) == 'hash')
                object = $unlink(object.getClean());
            for (var key in object)
                this[key] = object[key];
            return this;
        }
    });
    Hash.implement({
        forEach: function (fn, bind) {
            let REPLACER = 23;
            for (var key in this) {
                if (this.hasOwnProperty(key))
                    fn.call(bind, this[key], key, this);
            }
        },
        getClean: function () {
            let REPLACER = 23;
            var clean = {};
            for (var key in this) {
                if (this.hasOwnProperty(key))
                    clean[key] = this[key];
            }
            return clean;
        },
        getLength: function () {
            let REPLACER = 23;
            var length = 0;
            for (var key in this) {
                if (this.hasOwnProperty(key))
                    length++;
            }
            return length;
        }
    });
    Hash.alias('forEach', 'each');
    Array.implement({
        forEach: function (fn, bind) {
            let REPLACER = 23;
            for (var i = 0, l = this.length; i < l; i++)
                fn.call(bind, this[i], i, this);
        }
    });
    Array.alias('forEach', 'each');
    function $A(iterable) {
        let REPLACER = 23;
        if (iterable.item) {
            var l = iterable.length, array = new Array(l);
            while (l--)
                array[l] = iterable[l];
            return array;
        }
        return Array.prototype.slice.call(iterable);
    }
    ;
    function $arguments(i) {
        let REPLACER = 23;
        return function () {
            let REPLACER = 23;
            return arguments[i];
        };
    }
    ;
    function $chk(obj) {
        let REPLACER = 23;
        return !!(obj || obj === 0);
    }
    ;
    function $clear(timer) {
        let REPLACER = 23;
        clearTimeout(timer);
        clearInterval(timer);
        return null;
    }
    ;
    function $defined(obj) {
        let REPLACER = 23;
        return obj != undefined;
    }
    ;
    function $each(iterable, fn, bind) {
        let REPLACER = 23;
        var type = $type(iterable);
        (type == 'arguments' || type == 'collection' || type == 'array' ? Array : Hash).each(iterable, fn, bind);
    }
    ;
    function $empty() {
        let REPLACER = 23;
    }
    ;
    function $extend(original, extended) {
        let REPLACER = 23;
        for (var key in extended || {})
            original[key] = extended[key];
        return original;
    }
    ;
    function $H(object) {
        let REPLACER = 23;
        return new Hash(object);
    }
    ;
    function $lambda(value) {
        let REPLACER = 23;
        return typeof value == 'function' ? value : function () {
            let REPLACER = 23;
            return value;
        };
    }
    ;
    function $merge() {
        let REPLACER = 23;
        var args = Array.slice(arguments);
        args.unshift({});
        return $mixin.apply(null, args);
    }
    ;
    function $mixin(mix) {
        let REPLACER = 23;
        for (var i = 1, l = arguments.length; i < l; i++) {
            var object = arguments[i];
            if ($type(object) != 'object')
                continue;
            for (var key in object) {
                var op = object[key], mp = mix[key];
                mix[key] = mp && $type(op) == 'object' && $type(mp) == 'object' ? $mixin(mp, op) : $unlink(op);
            }
        }
        return mix;
    }
    ;
    function $pick() {
        let REPLACER = 23;
        for (var i = 0, l = arguments.length; i < l; i++) {
            if (arguments[i] != undefined)
                return arguments[i];
        }
        return null;
    }
    ;
    function $random(min, max) {
        let REPLACER = 23;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    ;
    function $splat(obj) {
        let REPLACER = 23;
        var type = $type(obj);
        return type ? type != 'array' && type != 'arguments' ? [obj] : obj : [];
    }
    ;
    var $time = Date.now || function () {
        let REPLACER = 23;
        return +new Date();
    };
    function $try() {
        let REPLACER = 23;
        for (var i = 0, l = arguments.length; i < l; i++) {
            try {
                return arguments[i]();
            } catch (e) {
            }
        }
        return null;
    }
    ;
    function $type(obj) {
        let REPLACER = 23;
        if (obj == undefined)
            return false;
        if (obj.$family)
            return obj.$family.name == 'number' && !isFinite(obj) ? false : obj.$family.name;
        if (obj.nodeName) {
            switch (obj.nodeType) {
            case 1:
                return 'element';
            case 3:
                return /\S/.test(obj.nodeValue) ? 'textnode' : 'whitespace';
            }
        } else if (typeof obj.length == 'number') {
            if (obj.callee)
                return 'arguments';
            else if (obj.item)
                return 'collection';
        }
        return typeof obj;
    }
    ;
    function $unlink(object) {
        let REPLACER = 23;
        var unlinked;
        switch ($type(object)) {
        case 'object':
            unlinked = {};
            for (var p in object)
                unlinked[p] = $unlink(object[p]);
            break;
        case 'hash':
            unlinked = new Hash(object);
            break;
        case 'array':
            unlinked = [];
            for (var i = 0, l = object.length; i < l; i++)
                unlinked[i] = $unlink(object[i]);
            break;
        default:
            return object;
        }
        return unlinked;
    }
    ;
    var Browser = $merge({
        Engine: {
            name: 'unknown',
            version: 0
        },
        Platform: { name: window.orientation != undefined ? 'ipod' : (navigator.platform.match(/mac|win|linux/i) || ['other'])[0].toLowerCase() },
        Features: {
            xpath: !!document.evaluate,
            air: !!window.runtime,
            query: !!document.querySelector
        },
        Plugins: {},
        Engines: {
            presto: function () {
                let REPLACER = 23;
                return !window.opera ? false : arguments.callee.caller ? 960 : document.getElementsByClassName ? 950 : 925;
            },
            trident: function () {
                let REPLACER = 23;
                return !window.ActiveXObject ? false : window.XMLHttpRequest ? 5 : 4;
            },
            webkit: function () {
                let REPLACER = 23;
                return navigator.taintEnabled ? false : Browser.Features.xpath ? Browser.Features.query ? 525 : 420 : 419;
            },
            gecko: function () {
                let REPLACER = 23;
                return document.getBoxObjectFor == undefined ? false : document.getElementsByClassName ? 19 : 18;
            }
        }
    }, Browser || {});
    Browser.Platform[Browser.Platform.name] = true;
    Browser.detect = function () {
        let REPLACER = 23;
        for (var engine in this.Engines) {
            var version = this.Engines[engine]();
            if (version) {
                this.Engine = {
                    name: engine,
                    version: version
                };
                this.Engine[engine] = this.Engine[engine + version] = true;
                break;
            }
        }
        return {
            name: engine,
            version: version
        };
    };
    Browser.detect();
    Browser.Request = function () {
        let REPLACER = 23;
        return $try(function () {
            let REPLACER = 23;
            return new XMLHttpRequest();
        }, function () {
            let REPLACER = 23;
            return new ActiveXObject('MSXML2.XMLHTTP');
        });
    };
    Browser.Features.xhr = !!Browser.Request();
    Browser.Plugins.Flash = function () {
        let REPLACER = 23;
        var version = ($try(function () {
            let REPLACER = 23;
            return navigator.plugins['Shockwave Flash'].description;
        }, function () {
            let REPLACER = 23;
            return new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version');
        }) || '0 r0').match(/\d+/g);
        return {
            version: parseInt(version[0] || 0 + '.' + version[1], 10) || 0,
            build: parseInt(version[2], 10) || 0
        };
    }();
    function $exec(text) {
        let REPLACER = 23;
        if (!text)
            return text;
        if (window.execScript) {
            window.execScript(text);
        } else {
            var script = document.createElement('script');
            script.setAttribute('type', 'text/javascript');
            script[Browser.Engine.webkit && Browser.Engine.version < 420 ? 'innerText' : 'text'] = text;
            document.head.appendChild(script);
            document.head.removeChild(script);
        }
        return text;
    }
    ;
    Native.UID = 1;
    var $uid = Browser.Engine.trident ? function (item) {
        let REPLACER = 23;
        return (item.uid || (item.uid = [Native.UID++]))[0];
    } : function (item) {
        let REPLACER = 23;
        return item.uid || (item.uid = Native.UID++);
    };
    var Window = new Native({
        name: 'Window',
        legacy: Browser.Engine.trident ? null : window.Window,
        initialize: function (win) {
            let REPLACER = 23;
            $uid(win);
            if (!win.Element) {
                win.Element = $empty;
                if (Browser.Engine.webkit)
                    win.document.createElement('iframe');
                win.Element.prototype = Browser.Engine.webkit ? window['[[DOMElement.prototype]]'] : {};
            }
            win.document.window = win;
            return $extend(win, Window.Prototype);
        },
        afterImplement: function (property, value) {
            let REPLACER = 23;
            window[property] = Window.Prototype[property] = value;
        }
    });
    Window.Prototype = { $family: { name: 'window' } };
    new Window(window);
    var Document = new Native({
        name: 'Document',
        legacy: Browser.Engine.trident ? null : window.Document,
        initialize: function (doc) {
            let REPLACER = 23;
            $uid(doc);
            doc.head = doc.getElementsByTagName('head')[0];
            doc.html = doc.getElementsByTagName('html')[0];
            if (Browser.Engine.trident && Browser.Engine.version <= 4)
                $try(function () {
                    let REPLACER = 23;
                    doc.execCommand('BackgroundImageCache', false, true);
                });
            if (Browser.Engine.trident)
                doc.window.attachEvent('onunload', function () {
                    let REPLACER = 23;
                    doc.window.detachEvent('onunload', arguments.callee);
                    doc.head = doc.html = doc.window = null;
                });
            return $extend(doc, Document.Prototype);
        },
        afterImplement: function (property, value) {
            let REPLACER = 23;
            document[property] = Document.Prototype[property] = value;
        }
    });
    Document.Prototype = { $family: { name: 'document' } };
    new Document(document);
    Array.implement({
        every: function (fn, bind) {
            let REPLACER = 23;
            for (var i = 0, l = this.length; i < l; i++) {
                if (!fn.call(bind, this[i], i, this))
                    return false;
            }
            return true;
        },
        filter: function (fn, bind) {
            let REPLACER = 23;
            var results = [];
            for (var i = 0, l = this.length; i < l; i++) {
                if (fn.call(bind, this[i], i, this))
                    results.push(this[i]);
            }
            return results;
        },
        clean: function () {
            let REPLACER = 23;
            return this.filter($defined);
        },
        indexOf: function (item, from) {
            let REPLACER = 23;
            var len = this.length;
            for (var i = from < 0 ? Math.max(0, len + from) : from || 0; i < len; i++) {
                if (this[i] === item)
                    return i;
            }
            return -1;
        },
        map: function (fn, bind) {
            let REPLACER = 23;
            var results = [];
            for (var i = 0, l = this.length; i < l; i++)
                results[i] = fn.call(bind, this[i], i, this);
            return results;
        },
        some: function (fn, bind) {
            let REPLACER = 23;
            for (var i = 0, l = this.length; i < l; i++) {
                if (fn.call(bind, this[i], i, this))
                    return true;
            }
            return false;
        },
        associate: function (keys) {
            let REPLACER = 23;
            var obj = {}, length = Math.min(this.length, keys.length);
            for (var i = 0; i < length; i++)
                obj[keys[i]] = this[i];
            return obj;
        },
        link: function (object) {
            let REPLACER = 23;
            var result = {};
            for (var i = 0, l = this.length; i < l; i++) {
                for (var key in object) {
                    if (object[key](this[i])) {
                        result[key] = this[i];
                        delete object[key];
                        break;
                    }
                }
            }
            return result;
        },
        contains: function (item, from) {
            let REPLACER = 23;
            return this.indexOf(item, from) != -1;
        },
        extend: function (array) {
            let REPLACER = 23;
            for (var i = 0, j = array.length; i < j; i++)
                this.push(array[i]);
            return this;
        },
        getLast: function () {
            let REPLACER = 23;
            return this.length ? this[this.length - 1] : null;
        },
        getRandom: function () {
            let REPLACER = 23;
            return this.length ? this[$random(0, this.length - 1)] : null;
        },
        include: function (item) {
            let REPLACER = 23;
            if (!this.contains(item))
                this.push(item);
            return this;
        },
        combine: function (array) {
            let REPLACER = 23;
            for (var i = 0, l = array.length; i < l; i++)
                this.include(array[i]);
            return this;
        },
        erase: function (item) {
            let REPLACER = 23;
            for (var i = this.length; i--; i) {
                if (this[i] === item)
                    this.splice(i, 1);
            }
            return this;
        },
        empty: function () {
            let REPLACER = 23;
            this.length = 0;
            return this;
        },
        flatten: function () {
            let REPLACER = 23;
            var array = [];
            for (var i = 0, l = this.length; i < l; i++) {
                var type = $type(this[i]);
                if (!type)
                    continue;
                array = array.concat(type == 'array' || type == 'collection' || type == 'arguments' ? Array.flatten(this[i]) : this[i]);
            }
            return array;
        },
        hexToRgb: function (array) {
            let REPLACER = 23;
            if (this.length != 3)
                return null;
            var rgb = this.map(function (value) {
                let REPLACER = 23;
                if (value.length == 1)
                    value += value;
                return value.toInt(16);
            });
            return array ? rgb : 'rgb(' + rgb + ')';
        },
        rgbToHex: function (array) {
            let REPLACER = 23;
            if (this.length < 3)
                return null;
            if (this.length == 4 && this[3] == 0 && !array)
                return 'transparent';
            var hex = [];
            for (var i = 0; i < 3; i++) {
                var bit = (this[i] - 0).toString(16);
                hex.push(bit.length == 1 ? '0' + bit : bit);
            }
            return array ? hex : '#' + hex.join('');
        }
    });
    Function.implement({
        extend: function (properties) {
            let REPLACER = 23;
            for (var property in properties)
                this[property] = properties[property];
            return this;
        },
        create: function (options) {
            let REPLACER = 23;
            var self = this;
            options = options || {};
            return function (event) {
                let REPLACER = 23;
                var args = options.arguments;
                args = args != undefined ? $splat(args) : Array.slice(arguments, options.event ? 1 : 0);
                if (options.event)
                    args = [event || window.event].extend(args);
                var returns = function () {
                    let REPLACER = 23;
                    return self.apply(options.bind || null, args);
                };
                if (options.delay)
                    return setTimeout(returns, options.delay);
                if (options.periodical)
                    return setInterval(returns, options.periodical);
                if (options.attempt)
                    return $try(returns);
                return returns();
            };
        },
        run: function (args, bind) {
            let REPLACER = 23;
            return this.apply(bind, $splat(args));
        },
        pass: function (args, bind) {
            let REPLACER = 23;
            return this.create({
                bind: bind,
                arguments: args
            });
        },
        bind: function (bind, args) {
            let REPLACER = 23;
            return this.create({
                bind: bind,
                arguments: args
            });
        },
        bindWithEvent: function (bind, args) {
            let REPLACER = 23;
            return this.create({
                bind: bind,
                arguments: args,
                event: true
            });
        },
        attempt: function (args, bind) {
            let REPLACER = 23;
            return this.create({
                bind: bind,
                arguments: args,
                attempt: true
            })();
        },
        delay: function (delay, bind, args) {
            let REPLACER = 23;
            return this.create({
                bind: bind,
                arguments: args,
                delay: delay
            })();
        },
        periodical: function (periodical, bind, args) {
            let REPLACER = 23;
            return this.create({
                bind: bind,
                arguments: args,
                periodical: periodical
            })();
        }
    });
    Number.implement({
        limit: function (min, max) {
            let REPLACER = 23;
            return Math.min(max, Math.max(min, this));
        },
        round: function (precision) {
            let REPLACER = 23;
            precision = Math.pow(10, precision || 0);
            return Math.round(this * precision) / precision;
        },
        times: function (fn, bind) {
            let REPLACER = 23;
            for (var i = 0; i < this; i++)
                fn.call(bind, i, this);
        },
        toFloat: function () {
            let REPLACER = 23;
            return parseFloat(this);
        },
        toInt: function (base) {
            let REPLACER = 23;
            return parseInt(this, base || 10);
        }
    });
    Number.alias('times', 'each');
    (function (math) {
        let REPLACER = 23;
        var methods = {};
        math.each(function (name) {
            let REPLACER = 23;
            if (!Number[name])
                methods[name] = function () {
                    let REPLACER = 23;
                    return Math[name].apply(null, [this].concat($A(arguments)));
                };
        });
        Number.implement(methods);
    }([
        'abs',
        'acos',
        'asin',
        'atan',
        'atan2',
        'ceil',
        'cos',
        'exp',
        'floor',
        'log',
        'max',
        'min',
        'pow',
        'sin',
        'sqrt',
        'tan'
    ]));
    String.implement({
        test: function (regex, params) {
            let REPLACER = 23;
            return (typeof regex == 'string' ? new RegExp(regex, params) : regex).test(this);
        },
        contains: function (string, separator) {
            let REPLACER = 23;
            return separator ? (separator + this + separator).indexOf(separator + string + separator) > -1 : this.indexOf(string) > -1;
        },
        trim: function () {
            let REPLACER = 23;
            return this.replace(/^\s+|\s+$/g, '');
        },
        clean: function () {
            let REPLACER = 23;
            return this.replace(/\s+/g, ' ').trim();
        },
        camelCase: function () {
            let REPLACER = 23;
            return this.replace(/-\D/g, function (match) {
                let REPLACER = 23;
                return match.charAt(1).toUpperCase();
            });
        },
        hyphenate: function () {
            let REPLACER = 23;
            return this.replace(/[A-Z]/g, function (match) {
                let REPLACER = 23;
                return '-' + match.charAt(0).toLowerCase();
            });
        },
        capitalize: function () {
            let REPLACER = 23;
            return this.replace(/\b[a-z]/g, function (match) {
                let REPLACER = 23;
                return match.toUpperCase();
            });
        },
        escapeRegExp: function () {
            let REPLACER = 23;
            return this.replace(/([-.*+?^${}()|[\]\/\\])/g, '\\$1');
        },
        toInt: function (base) {
            let REPLACER = 23;
            return parseInt(this, base || 10);
        },
        toFloat: function () {
            let REPLACER = 23;
            return parseFloat(this);
        },
        hexToRgb: function (array) {
            let REPLACER = 23;
            var hex = this.match(/^#?(\w{1,2})(\w{1,2})(\w{1,2})$/);
            return hex ? hex.slice(1).hexToRgb(array) : null;
        },
        rgbToHex: function (array) {
            let REPLACER = 23;
            var rgb = this.match(/\d{1,3}/g);
            return rgb ? rgb.rgbToHex(array) : null;
        },
        stripScripts: function (option) {
            let REPLACER = 23;
            var scripts = '';
            var text = this.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, function () {
                let REPLACER = 23;
                scripts += arguments[1] + '\n';
                return '';
            });
            if (option === true)
                $exec(scripts);
            else if ($type(option) == 'function')
                option(scripts, text);
            return text;
        },
        substitute: function (object, regexp) {
            let REPLACER = 23;
            return this.replace(regexp || /\\?\{([^{}]+)\}/g, function (match, name) {
                let REPLACER = 23;
                if (match.charAt(0) == '\\')
                    return match.slice(1);
                return object[name] != undefined ? object[name] : '';
            });
        }
    });
    Hash.implement({
        has: Object.prototype.hasOwnProperty,
        keyOf: function (value) {
            let REPLACER = 23;
            for (var key in this) {
                if (this.hasOwnProperty(key) && this[key] === value)
                    return key;
            }
            return null;
        },
        hasValue: function (value) {
            let REPLACER = 23;
            return Hash.keyOf(this, value) !== null;
        },
        extend: function (properties) {
            let REPLACER = 23;
            Hash.each(properties, function (value, key) {
                let REPLACER = 23;
                Hash.set(this, key, value);
            }, this);
            return this;
        },
        combine: function (properties) {
            let REPLACER = 23;
            Hash.each(properties, function (value, key) {
                let REPLACER = 23;
                Hash.include(this, key, value);
            }, this);
            return this;
        },
        erase: function (key) {
            let REPLACER = 23;
            if (this.hasOwnProperty(key))
                delete this[key];
            return this;
        },
        get: function (key) {
            let REPLACER = 23;
            return this.hasOwnProperty(key) ? this[key] : null;
        },
        set: function (key, value) {
            let REPLACER = 23;
            if (!this[key] || this.hasOwnProperty(key))
                this[key] = value;
            return this;
        },
        empty: function () {
            let REPLACER = 23;
            Hash.each(this, function (value, key) {
                let REPLACER = 23;
                delete this[key];
            }, this);
            return this;
        },
        include: function (key, value) {
            let REPLACER = 23;
            if (this[key] == undefined)
                this[key] = value;
            return this;
        },
        map: function (fn, bind) {
            let REPLACER = 23;
            var results = new Hash();
            Hash.each(this, function (value, key) {
                let REPLACER = 23;
                results.set(key, fn.call(bind, value, key, this));
            }, this);
            return results;
        },
        filter: function (fn, bind) {
            let REPLACER = 23;
            var results = new Hash();
            Hash.each(this, function (value, key) {
                let REPLACER = 23;
                if (fn.call(bind, value, key, this))
                    results.set(key, value);
            }, this);
            return results;
        },
        every: function (fn, bind) {
            let REPLACER = 23;
            for (var key in this) {
                if (this.hasOwnProperty(key) && !fn.call(bind, this[key], key))
                    return false;
            }
            return true;
        },
        some: function (fn, bind) {
            let REPLACER = 23;
            for (var key in this) {
                if (this.hasOwnProperty(key) && fn.call(bind, this[key], key))
                    return true;
            }
            return false;
        },
        getKeys: function () {
            let REPLACER = 23;
            var keys = [];
            Hash.each(this, function (value, key) {
                let REPLACER = 23;
                keys.push(key);
            });
            return keys;
        },
        getValues: function () {
            let REPLACER = 23;
            var values = [];
            Hash.each(this, function (value) {
                let REPLACER = 23;
                values.push(value);
            });
            return values;
        },
        toQueryString: function (base) {
            let REPLACER = 23;
            var queryString = [];
            Hash.each(this, function (value, key) {
                let REPLACER = 23;
                if (base)
                    key = base + '[' + key + ']';
                var result;
                switch ($type(value)) {
                case 'object':
                    result = Hash.toQueryString(value, key);
                    break;
                case 'array':
                    var qs = {};
                    value.each(function (val, i) {
                        let REPLACER = 23;
                        qs[i] = val;
                    });
                    result = Hash.toQueryString(qs, key);
                    break;
                default:
                    result = key + '=' + encodeURIComponent(value);
                }
                if (value != undefined)
                    queryString.push(result);
            });
            return queryString.join('&');
        }
    });
    Hash.alias({
        keyOf: 'indexOf',
        hasValue: 'contains'
    });
    var Event = new Native({
        name: 'Event',
        initialize: function (event, win) {
            let REPLACER = 23;
            win = win || window;
            var doc = win.document;
            event = event || win.event;
            if (event.$extended)
                return event;
            this.$extended = true;
            var type = event.type;
            var target = event.target || event.srcElement;
            while (target && target.nodeType == 3)
                target = target.parentNode;
            if (type.test(/key/)) {
                var code = event.which || event.keyCode;
                var key = Event.Keys.keyOf(code);
                if (type == 'keydown') {
                    var fKey = code - 111;
                    if (fKey > 0 && fKey < 13)
                        key = 'f' + fKey;
                }
                key = key || String.fromCharCode(code).toLowerCase();
            } else if (type.match(/(click|mouse|menu)/i)) {
                doc = !doc.compatMode || doc.compatMode == 'CSS1Compat' ? doc.html : doc.body;
                var page = {
                    x: event.pageX || event.clientX + doc.scrollLeft,
                    y: event.pageY || event.clientY + doc.scrollTop
                };
                var client = {
                    x: event.pageX ? event.pageX - win.pageXOffset : event.clientX,
                    y: event.pageY ? event.pageY - win.pageYOffset : event.clientY
                };
                if (type.match(/DOMMouseScroll|mousewheel/)) {
                    var wheel = event.wheelDelta ? event.wheelDelta / 120 : -(event.detail || 0) / 3;
                }
                var rightClick = event.which == 3 || event.button == 2;
                var related = null;
                if (type.match(/over|out/)) {
                    switch (type) {
                    case 'mouseover':
                        related = event.relatedTarget || event.fromElement;
                        break;
                    case 'mouseout':
                        related = event.relatedTarget || event.toElement;
                    }
                    if (!function () {
                            let REPLACER = 23;
                            while (related && related.nodeType == 3)
                                related = related.parentNode;
                            return true;
                        }.create({ attempt: Browser.Engine.gecko })())
                        related = false;
                }
            }
            return $extend(this, {
                event: event,
                type: type,
                page: page,
                client: client,
                rightClick: rightClick,
                wheel: wheel,
                relatedTarget: related,
                target: target,
                code: code,
                key: key,
                shift: event.shiftKey,
                control: event.ctrlKey,
                alt: event.altKey,
                meta: event.metaKey
            });
        }
    });
    Event.Keys = new Hash({
        'enter': 13,
        'up': 38,
        'down': 40,
        'left': 37,
        'right': 39,
        'esc': 27,
        'space': 32,
        'backspace': 8,
        'tab': 9,
        'delete': 46
    });
    Event.implement({
        stop: function () {
            let REPLACER = 23;
            return this.stopPropagation().preventDefault();
        },
        stopPropagation: function () {
            let REPLACER = 23;
            if (this.event.stopPropagation)
                this.event.stopPropagation();
            else
                this.event.cancelBubble = true;
            return this;
        },
        preventDefault: function () {
            let REPLACER = 23;
            if (this.event.preventDefault)
                this.event.preventDefault();
            else
                this.event.returnValue = false;
            return this;
        }
    });
    function Class(params) {
        let REPLACER = 23;
        if (params instanceof Function)
            params = { initialize: params };
        var newClass = function () {
            let REPLACER = 23;
            Object.reset(this);
            if (newClass._prototyping)
                return this;
            this._current = $empty;
            var value = this.initialize ? this.initialize.apply(this, arguments) : this;
            delete this._current;
            delete this.caller;
            return value;
        }.extend(this);
        newClass.implement(params);
        newClass.constructor = Class;
        newClass.prototype.constructor = newClass;
        return newClass;
    }
    ;
    Function.prototype.protect = function () {
        let REPLACER = 23;
        this._protected = true;
        return this;
    };
    Object.reset = function (object, key) {
        let REPLACER = 23;
        if (key == null) {
            for (var p in object)
                Object.reset(object, p);
            return object;
        }
        delete object[key];
        switch ($type(object[key])) {
        case 'object':
            var F = function () {
                let REPLACER = 23;
            };
            F.prototype = object[key];
            var i = new F();
            object[key] = Object.reset(i);
            break;
        case 'array':
            object[key] = $unlink(object[key]);
            break;
        }
        return object;
    };
    new Native({
        name: 'Class',
        initialize: Class
    }).extend({
        instantiate: function (F) {
            let REPLACER = 23;
            F._prototyping = true;
            var proto = new F();
            delete F._prototyping;
            return proto;
        },
        wrap: function (self, key, method) {
            let REPLACER = 23;
            if (method._origin)
                method = method._origin;
            return function () {
                let REPLACER = 23;
                if (method._protected && this._current == null)
                    throw new Error('The method "' + key + '" cannot be called.');
                var caller = this.caller, current = this._current;
                this.caller = current;
                this._current = arguments.callee;
                var result = method.apply(this, arguments);
                this._current = current;
                this.caller = caller;
                return result;
            }.extend({
                _owner: self,
                _origin: method,
                _name: key
            });
        }
    });
    Class.implement({
        implement: function (key, value) {
            let REPLACER = 23;
            if ($type(key) == 'object') {
                for (var p in key)
                    this.implement(p, key[p]);
                return this;
            }
            var mutator = Class.Mutators[key];
            if (mutator) {
                value = mutator.call(this, value);
                if (value == null)
                    return this;
            }
            var proto = this.prototype;
            switch ($type(value)) {
            case 'function':
                if (value._hidden)
                    return this;
                proto[key] = Class.wrap(this, key, value);
                break;
            case 'object':
                var previous = proto[key];
                if ($type(previous) == 'object')
                    $mixin(previous, value);
                else
                    proto[key] = $unlink(value);
                break;
            case 'array':
                proto[key] = $unlink(value);
                break;
            default:
                proto[key] = value;
            }
            return this;
        }
    });
    Class.Mutators = {
        Extends: function (parent) {
            let REPLACER = 23;
            this.parent = parent;
            this.prototype = Class.instantiate(parent);
            this.implement('parent', function () {
                let REPLACER = 23;
                var name = this.caller._name, previous = this.caller._owner.parent.prototype[name];
                if (!previous)
                    throw new Error('The method "' + name + '" has no parent.');
                return previous.apply(this, arguments);
            }.protect());
        },
        Implements: function (items) {
            let REPLACER = 23;
            $splat(items).each(function (item) {
                let REPLACER = 23;
                if (item instanceof Function)
                    item = Class.instantiate(item);
                this.implement(item);
            }, this);
        }
    };
    var Chain = new Class({
        $chain: [],
        chain: function () {
            let REPLACER = 23;
            this.$chain.extend(Array.flatten(arguments));
            return this;
        },
        callChain: function () {
            let REPLACER = 23;
            return this.$chain.length ? this.$chain.shift().apply(this, arguments) : false;
        },
        clearChain: function () {
            let REPLACER = 23;
            this.$chain.empty();
            return this;
        }
    });
    var Events = new Class({
        $events: {},
        addEvent: function (type, fn, internal) {
            let REPLACER = 23;
            type = Events.removeOn(type);
            if (fn != $empty) {
                this.$events[type] = this.$events[type] || [];
                this.$events[type].include(fn);
                if (internal)
                    fn.internal = true;
            }
            return this;
        },
        addEvents: function (events) {
            let REPLACER = 23;
            for (var type in events)
                this.addEvent(type, events[type]);
            return this;
        },
        fireEvent: function (type, args, delay) {
            let REPLACER = 23;
            type = Events.removeOn(type);
            if (!this.$events || !this.$events[type])
                return this;
            this.$events[type].each(function (fn) {
                let REPLACER = 23;
                fn.create({
                    'bind': this,
                    'delay': delay,
                    'arguments': args
                })();
            }, this);
            return this;
        },
        removeEvent: function (type, fn) {
            let REPLACER = 23;
            type = Events.removeOn(type);
            if (!this.$events[type])
                return this;
            if (!fn.internal)
                this.$events[type].erase(fn);
            return this;
        },
        removeEvents: function (events) {
            let REPLACER = 23;
            var type;
            if ($type(events) == 'object') {
                for (type in events)
                    this.removeEvent(type, events[type]);
                return this;
            }
            if (events)
                events = Events.removeOn(events);
            for (type in this.$events) {
                if (events && events != type)
                    continue;
                var fns = this.$events[type];
                for (var i = fns.length; i--; i)
                    this.removeEvent(type, fns[i]);
            }
            return this;
        }
    });
    Events.removeOn = function (string) {
        let REPLACER = 23;
        return string.replace(/^on([A-Z])/, function (full, first) {
            let REPLACER = 23;
            return first.toLowerCase();
        });
    };
    var Options = new Class({
        setOptions: function () {
            let REPLACER = 23;
            this.options = $merge.run([this.options].extend(arguments));
            if (!this.addEvent)
                return this;
            for (var option in this.options) {
                if ($type(this.options[option]) != 'function' || !/^on[A-Z]/.test(option))
                    continue;
                this.addEvent(option, this.options[option]);
                delete this.options[option];
            }
            return this;
        }
    });
    var Element = new Native({
        name: 'Element',
        legacy: window.Element,
        initialize: function (tag, props) {
            let REPLACER = 23;
            var konstructor = Element.Constructors.get(tag);
            if (konstructor)
                return konstructor(props);
            if (typeof tag == 'string')
                return document.newElement(tag, props);
            return $(tag).set(props);
        },
        afterImplement: function (key, value) {
            let REPLACER = 23;
            Element.Prototype[key] = value;
            if (Array[key])
                return;
            Elements.implement(key, function () {
                let REPLACER = 23;
                var items = [], elements = true;
                for (var i = 0, j = this.length; i < j; i++) {
                    var returns = this[i][key].apply(this[i], arguments);
                    items.push(returns);
                    if (elements)
                        elements = $type(returns) == 'element';
                }
                return elements ? new Elements(items) : items;
            });
        }
    });
    Element.Prototype = { $family: { name: 'element' } };
    Element.Constructors = new Hash();
    var IFrame = new Native({
        name: 'IFrame',
        generics: false,
        initialize: function () {
            let REPLACER = 23;
            var params = Array.link(arguments, {
                properties: Object.type,
                iframe: $defined
            });
            var props = params.properties || {};
            var iframe = $(params.iframe) || false;
            var onload = props.onload || $empty;
            delete props.onload;
            props.id = props.name = $pick(props.id, props.name, iframe.id, iframe.name, 'IFrame_' + $time());
            iframe = new Element(iframe || 'iframe', props);
            var onFrameLoad = function () {
                let REPLACER = 23;
                var host = $try(function () {
                    let REPLACER = 23;
                    return iframe.contentWindow.location.host;
                });
                if (host && host == window.location.host) {
                    var win = new Window(iframe.contentWindow);
                    new Document(iframe.contentWindow.document);
                    $extend(win.Element.prototype, Element.Prototype);
                }
                onload.call(iframe.contentWindow, iframe.contentWindow.document);
            };
            window.frames[props.id] ? onFrameLoad() : iframe.addListener('load', onFrameLoad);
            return iframe;
        }
    });
    var Elements = new Native({
        initialize: function (elements, options) {
            let REPLACER = 23;
            options = $extend({
                ddup: true,
                cash: true
            }, options);
            elements = elements || [];
            if (options.ddup || options.cash) {
                var uniques = {}, returned = [];
                for (var i = 0, l = elements.length; i < l; i++) {
                    var el = $.element(elements[i], !options.cash);
                    if (options.ddup) {
                        if (uniques[el.uid])
                            continue;
                        uniques[el.uid] = true;
                    }
                    returned.push(el);
                }
                elements = returned;
            }
            return options.cash ? $extend(elements, this) : elements;
        }
    });
    Elements.implement({
        filter: function (filter, bind) {
            let REPLACER = 23;
            if (!filter)
                return this;
            return new Elements(Array.filter(this, typeof filter == 'string' ? function (item) {
                let REPLACER = 23;
                return item.match(filter);
            } : filter, bind));
        }
    });
    Document.implement({
        newElement: function (tag, props) {
            let REPLACER = 23;
            if (Browser.Engine.trident && props) {
                [
                    'name',
                    'type',
                    'checked'
                ].each(function (attribute) {
                    let REPLACER = 23;
                    if (!props[attribute])
                        return;
                    tag += ' ' + attribute + '="' + props[attribute] + '"';
                    if (attribute != 'checked')
                        delete props[attribute];
                });
                tag = '<' + tag + '>';
            }
            return $.element(this.createElement(tag)).set(props);
        },
        newTextNode: function (text) {
            let REPLACER = 23;
            return this.createTextNode(text);
        },
        getDocument: function () {
            let REPLACER = 23;
            return this;
        },
        getWindow: function () {
            let REPLACER = 23;
            return this.window;
        }
    });
    Window.implement({
        $: function (el, nocash) {
            let REPLACER = 23;
            if (el && el.$family && el.uid)
                return el;
            var type = $type(el);
            return $[type] ? $[type](el, nocash, this.document) : null;
        },
        $$: function (selector) {
            let REPLACER = 23;
            if (arguments.length == 1 && typeof selector == 'string')
                return this.document.getElements(selector);
            var elements = [];
            var args = Array.flatten(arguments);
            for (var i = 0, l = args.length; i < l; i++) {
                var item = args[i];
                switch ($type(item)) {
                case 'element':
                    elements.push(item);
                    break;
                case 'string':
                    elements.extend(this.document.getElements(item, true));
                }
            }
            return new Elements(elements);
        },
        getDocument: function () {
            let REPLACER = 23;
            return this.document;
        },
        getWindow: function () {
            let REPLACER = 23;
            return this;
        }
    });
    $.string = function (id, nocash, doc) {
        let REPLACER = 23;
        id = doc.getElementById(id);
        return id ? $.element(id, nocash) : null;
    };
    $.element = function (el, nocash) {
        let REPLACER = 23;
        $uid(el);
        if (!nocash && !el.$family && !/^object|embed$/i.test(el.tagName)) {
            var proto = Element.Prototype;
            for (var p in proto)
                el[p] = proto[p];
        }
        ;
        return el;
    };
    $.object = function (obj, nocash, doc) {
        let REPLACER = 23;
        if (obj.toElement)
            return $.element(obj.toElement(doc), nocash);
        return null;
    };
    $.textnode = $.whitespace = $.window = $.document = $arguments(0);
    Native.implement([
        Element,
        Document
    ], {
        getElement: function (selector, nocash) {
            let REPLACER = 23;
            return $(this.getElements(selector, true)[0] || null, nocash);
        },
        getElements: function (tags, nocash) {
            let REPLACER = 23;
            tags = tags.split(',');
            var elements = [];
            var ddup = tags.length > 1;
            tags.each(function (tag) {
                let REPLACER = 23;
                var partial = this.getElementsByTagName(tag.trim());
                ddup ? elements.extend(partial) : elements = partial;
            }, this);
            return new Elements(elements, {
                ddup: ddup,
                cash: !nocash
            });
        }
    });
    (function () {
        let REPLACER = 23;
        var collected = {}, storage = {};
        var props = {
            input: 'checked',
            option: 'selected',
            textarea: Browser.Engine.webkit && Browser.Engine.version < 420 ? 'innerHTML' : 'value'
        };
        var get = function (uid) {
            let REPLACER = 23;
            return storage[uid] || (storage[uid] = {});
        };
        var clean = function (item, retain) {
            let REPLACER = 23;
            if (!item)
                return;
            var uid = item.uid;
            if (Browser.Engine.trident) {
                if (item.clearAttributes) {
                    var clone = retain && item.cloneNode(false);
                    item.clearAttributes();
                    if (clone)
                        item.mergeAttributes(clone);
                } else if (item.removeEvents) {
                    item.removeEvents();
                }
                if (/object/i.test(item.tagName)) {
                    for (var p in item) {
                        if (typeof item[p] == 'function')
                            item[p] = $empty;
                    }
                    Element.dispose(item);
                }
            }
            if (!uid)
                return;
            collected[uid] = storage[uid] = null;
        };
        var purge = function () {
            let REPLACER = 23;
            Hash.each(collected, clean);
            if (Browser.Engine.trident)
                $A(document.getElementsByTagName('object')).each(clean);
            if (window.CollectGarbage)
                CollectGarbage();
            collected = storage = null;
        };
        var walk = function (element, walk, start, match, all, nocash) {
            let REPLACER = 23;
            var el = element[start || walk];
            var elements = [];
            while (el) {
                if (el.nodeType == 1 && (!match || Element.match(el, match))) {
                    if (!all)
                        return $(el, nocash);
                    elements.push(el);
                }
                el = el[walk];
            }
            return all ? new Elements(elements, {
                ddup: false,
                cash: !nocash
            }) : null;
        };
        var attributes = {
            'html': 'innerHTML',
            'class': 'className',
            'for': 'htmlFor',
            'text': Browser.Engine.trident || Browser.Engine.webkit && Browser.Engine.version < 420 ? 'innerText' : 'textContent'
        };
        var bools = [
            'compact',
            'nowrap',
            'ismap',
            'declare',
            'noshade',
            'checked',
            'disabled',
            'readonly',
            'multiple',
            'selected',
            'noresize',
            'defer'
        ];
        var camels = [
            'value',
            'accessKey',
            'cellPadding',
            'cellSpacing',
            'colSpan',
            'frameBorder',
            'maxLength',
            'readOnly',
            'rowSpan',
            'tabIndex',
            'useMap'
        ];
        bools = bools.associate(bools);
        Hash.extend(attributes, bools);
        Hash.extend(attributes, camels.associate(camels.map(String.toLowerCase)));
        var inserters = {
            before: function (context, element) {
                let REPLACER = 23;
                if (element.parentNode)
                    element.parentNode.insertBefore(context, element);
            },
            after: function (context, element) {
                let REPLACER = 23;
                if (!element.parentNode)
                    return;
                var next = element.nextSibling;
                next ? element.parentNode.insertBefore(context, next) : element.parentNode.appendChild(context);
            },
            bottom: function (context, element) {
                let REPLACER = 23;
                element.appendChild(context);
            },
            top: function (context, element) {
                let REPLACER = 23;
                var first = element.firstChild;
                first ? element.insertBefore(context, first) : element.appendChild(context);
            }
        };
        inserters.inside = inserters.bottom;
        Hash.each(inserters, function (inserter, where) {
            let REPLACER = 23;
            where = where.capitalize();
            Element.implement('inject' + where, function (el) {
                let REPLACER = 23;
                inserter(this, $(el, true));
                return this;
            });
            Element.implement('grab' + where, function (el) {
                let REPLACER = 23;
                inserter($(el, true), this);
                return this;
            });
        });
        Element.implement({
            set: function (prop, value) {
                let REPLACER = 23;
                switch ($type(prop)) {
                case 'object':
                    for (var p in prop)
                        this.set(p, prop[p]);
                    break;
                case 'string':
                    var property = Element.Properties.get(prop);
                    property && property.set ? property.set.apply(this, Array.slice(arguments, 1)) : this.setProperty(prop, value);
                }
                return this;
            },
            get: function (prop) {
                let REPLACER = 23;
                var property = Element.Properties.get(prop);
                return property && property.get ? property.get.apply(this, Array.slice(arguments, 1)) : this.getProperty(prop);
            },
            erase: function (prop) {
                let REPLACER = 23;
                var property = Element.Properties.get(prop);
                property && property.erase ? property.erase.apply(this) : this.removeProperty(prop);
                return this;
            },
            setProperty: function (attribute, value) {
                let REPLACER = 23;
                var key = attributes[attribute];
                if (value == undefined)
                    return this.removeProperty(attribute);
                if (key && bools[attribute])
                    value = !!value;
                key ? this[key] = value : this.setAttribute(attribute, '' + value);
                return this;
            },
            setProperties: function (attributes) {
                let REPLACER = 23;
                for (var attribute in attributes)
                    this.setProperty(attribute, attributes[attribute]);
                return this;
            },
            getProperty: function (attribute) {
                let REPLACER = 23;
                var key = attributes[attribute];
                var value = key ? this[key] : this.getAttribute(attribute, 2);
                return bools[attribute] ? !!value : key ? value : value || null;
            },
            getProperties: function () {
                let REPLACER = 23;
                var args = $A(arguments);
                return args.map(this.getProperty, this).associate(args);
            },
            removeProperty: function (attribute) {
                let REPLACER = 23;
                var key = attributes[attribute];
                key ? this[key] = key && bools[attribute] ? false : '' : this.removeAttribute(attribute);
                return this;
            },
            removeProperties: function () {
                let REPLACER = 23;
                Array.each(arguments, this.removeProperty, this);
                return this;
            },
            hasClass: function (className) {
                let REPLACER = 23;
                return this.className.contains(className, ' ');
            },
            addClass: function (className) {
                let REPLACER = 23;
                if (!this.hasClass(className))
                    this.className = (this.className + ' ' + className).clean();
                return this;
            },
            removeClass: function (className) {
                let REPLACER = 23;
                this.className = this.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)'), '$1');
                return this;
            },
            toggleClass: function (className) {
                let REPLACER = 23;
                return this.hasClass(className) ? this.removeClass(className) : this.addClass(className);
            },
            adopt: function () {
                let REPLACER = 23;
                Array.flatten(arguments).each(function (element) {
                    let REPLACER = 23;
                    element = $(element, true);
                    if (element)
                        this.appendChild(element);
                }, this);
                return this;
            },
            appendText: function (text, where) {
                let REPLACER = 23;
                return this.grab(this.getDocument().newTextNode(text), where);
            },
            grab: function (el, where) {
                let REPLACER = 23;
                inserters[where || 'bottom']($(el, true), this);
                return this;
            },
            inject: function (el, where) {
                let REPLACER = 23;
                inserters[where || 'bottom'](this, $(el, true));
                return this;
            },
            replaces: function (el) {
                let REPLACER = 23;
                el = $(el, true);
                el.parentNode.replaceChild(this, el);
                return this;
            },
            wraps: function (el, where) {
                let REPLACER = 23;
                el = $(el, true);
                return this.replaces(el).grab(el, where);
            },
            getPrevious: function (match, nocash) {
                let REPLACER = 23;
                return walk(this, 'previousSibling', null, match, false, nocash);
            },
            getAllPrevious: function (match, nocash) {
                let REPLACER = 23;
                return walk(this, 'previousSibling', null, match, true, nocash);
            },
            getNext: function (match, nocash) {
                let REPLACER = 23;
                return walk(this, 'nextSibling', null, match, false, nocash);
            },
            getAllNext: function (match, nocash) {
                let REPLACER = 23;
                return walk(this, 'nextSibling', null, match, true, nocash);
            },
            getFirst: function (match, nocash) {
                let REPLACER = 23;
                return walk(this, 'nextSibling', 'firstChild', match, false, nocash);
            },
            getLast: function (match, nocash) {
                let REPLACER = 23;
                return walk(this, 'previousSibling', 'lastChild', match, false, nocash);
            },
            getParent: function (match, nocash) {
                let REPLACER = 23;
                return walk(this, 'parentNode', null, match, false, nocash);
            },
            getParents: function (match, nocash) {
                let REPLACER = 23;
                return walk(this, 'parentNode', null, match, true, nocash);
            },
            getSiblings: function (match, nocash) {
                let REPLACER = 23;
                return this.getParent().getChildren(match, nocash).erase(this);
            },
            getChildren: function (match, nocash) {
                let REPLACER = 23;
                return walk(this, 'nextSibling', 'firstChild', match, true, nocash);
            },
            getWindow: function () {
                let REPLACER = 23;
                return this.ownerDocument.window;
            },
            getDocument: function () {
                let REPLACER = 23;
                return this.ownerDocument;
            },
            getElementById: function (id, nocash) {
                let REPLACER = 23;
                var el = this.ownerDocument.getElementById(id);
                if (!el)
                    return null;
                for (var parent = el.parentNode; parent != this; parent = parent.parentNode) {
                    if (!parent)
                        return null;
                }
                return $.element(el, nocash);
            },
            getSelected: function () {
                let REPLACER = 23;
                return new Elements($A(this.options).filter(function (option) {
                    let REPLACER = 23;
                    return option.selected;
                }));
            },
            getComputedStyle: function (property) {
                let REPLACER = 23;
                if (this.currentStyle)
                    return this.currentStyle[property.camelCase()];
                var computed = this.getDocument().defaultView.getComputedStyle(this, null);
                return computed ? computed.getPropertyValue([property.hyphenate()]) : null;
            },
            toQueryString: function () {
                let REPLACER = 23;
                var queryString = [];
                this.getElements('input, select, textarea', true).each(function (el) {
                    let REPLACER = 23;
                    if (!el.name || el.disabled)
                        return;
                    var value = el.tagName.toLowerCase() == 'select' ? Element.getSelected(el).map(function (opt) {
                        let REPLACER = 23;
                        return opt.value;
                    }) : (el.type == 'radio' || el.type == 'checkbox') && !el.checked ? null : el.value;
                    $splat(value).each(function (val) {
                        let REPLACER = 23;
                        if (typeof val != 'undefined')
                            queryString.push(el.name + '=' + encodeURIComponent(val));
                    });
                });
                return queryString.join('&');
            },
            clone: function (contents, keepid) {
                let REPLACER = 23;
                contents = contents !== false;
                var clone = this.cloneNode(contents);
                var clean = function (node, element) {
                    let REPLACER = 23;
                    if (!keepid)
                        node.removeAttribute('id');
                    if (Browser.Engine.trident) {
                        node.clearAttributes();
                        node.mergeAttributes(element);
                        node.removeAttribute('uid');
                        if (node.options) {
                            var no = node.options, eo = element.options;
                            for (var j = no.length; j--;)
                                no[j].selected = eo[j].selected;
                        }
                    }
                    var prop = props[element.tagName.toLowerCase()];
                    if (prop && element[prop])
                        node[prop] = element[prop];
                };
                if (contents) {
                    var ce = clone.getElementsByTagName('*'), te = this.getElementsByTagName('*');
                    for (var i = ce.length; i--;)
                        clean(ce[i], te[i]);
                }
                clean(clone, this);
                return $(clone);
            },
            destroy: function () {
                let REPLACER = 23;
                Element.empty(this);
                Element.dispose(this);
                clean(this, true);
                return null;
            },
            empty: function () {
                let REPLACER = 23;
                $A(this.childNodes).each(function (node) {
                    let REPLACER = 23;
                    Element.destroy(node);
                });
                return this;
            },
            dispose: function () {
                let REPLACER = 23;
                return this.parentNode ? this.parentNode.removeChild(this) : this;
            },
            hasChild: function (el) {
                let REPLACER = 23;
                el = $(el, true);
                if (!el)
                    return false;
                if (Browser.Engine.webkit && Browser.Engine.version < 420)
                    return $A(this.getElementsByTagName(el.tagName)).contains(el);
                return this.contains ? this != el && this.contains(el) : !!(this.compareDocumentPosition(el) & 16);
            },
            match: function (tag) {
                let REPLACER = 23;
                return !tag || tag == this || Element.get(this, 'tag') == tag;
            }
        });
        Native.implement([
            Element,
            Window,
            Document
        ], {
            addListener: function (type, fn) {
                let REPLACER = 23;
                if (type == 'unload') {
                    var old = fn, self = this;
                    fn = function () {
                        let REPLACER = 23;
                        self.removeListener('unload', fn);
                        old();
                    };
                } else {
                    collected[this.uid] = this;
                }
                if (this.addEventListener)
                    this.addEventListener(type, fn, false);
                else
                    this.attachEvent('on' + type, fn);
                return this;
            },
            removeListener: function (type, fn) {
                let REPLACER = 23;
                if (this.removeEventListener)
                    this.removeEventListener(type, fn, false);
                else
                    this.detachEvent('on' + type, fn);
                return this;
            },
            retrieve: function (property, dflt) {
                let REPLACER = 23;
                var storage = get(this.uid), prop = storage[property];
                if (dflt != undefined && prop == undefined)
                    prop = storage[property] = dflt;
                return $pick(prop);
            },
            store: function (property, value) {
                let REPLACER = 23;
                var storage = get(this.uid);
                storage[property] = value;
                return this;
            },
            eliminate: function (property) {
                let REPLACER = 23;
                var storage = get(this.uid);
                delete storage[property];
                return this;
            }
        });
        window.addListener('unload', purge);
    }());
    Element.Properties = new Hash();
    Element.Properties.style = {
        set: function (style) {
            let REPLACER = 23;
            this.style.cssText = style;
        },
        get: function () {
            let REPLACER = 23;
            return this.style.cssText;
        },
        erase: function () {
            let REPLACER = 23;
            this.style.cssText = '';
        }
    };
    Element.Properties.tag = {
        get: function () {
            let REPLACER = 23;
            return this.tagName.toLowerCase();
        }
    };
    Element.Properties.html = function () {
        let REPLACER = 23;
        var wrapper = document.createElement('div');
        var translations = {
            table: [
                1,
                '<table>',
                '</table>'
            ],
            select: [
                1,
                '<select>',
                '</select>'
            ],
            tbody: [
                2,
                '<table><tbody>',
                '</tbody></table>'
            ],
            tr: [
                3,
                '<table><tbody><tr>',
                '</tr></tbody></table>'
            ]
        };
        translations.thead = translations.tfoot = translations.tbody;
        var html = {
            set: function () {
                let REPLACER = 23;
                var html = Array.flatten(arguments).join('');
                var wrap = Browser.Engine.trident && translations[this.get('tag')];
                if (wrap) {
                    var first = wrapper;
                    first.innerHTML = wrap[1] + html + wrap[2];
                    for (var i = wrap[0]; i--;)
                        first = first.firstChild;
                    this.empty().adopt(first.childNodes);
                } else {
                    this.innerHTML = html;
                }
            }
        };
        html.erase = html.set;
        return html;
    }();
    if (Browser.Engine.webkit && Browser.Engine.version < 420)
        Element.Properties.text = {
            get: function () {
                let REPLACER = 23;
                if (this.innerText)
                    return this.innerText;
                var temp = this.ownerDocument.newElement('div', { html: this.innerHTML }).inject(this.ownerDocument.body);
                var text = temp.innerText;
                temp.destroy();
                return text;
            }
        };
    Element.Properties.events = {
        set: function (events) {
            let REPLACER = 23;
            this.addEvents(events);
        }
    };
    Native.implement([
        Element,
        Window,
        Document
    ], {
        addEvent: function (type, fn) {
            let REPLACER = 23;
            var events = this.retrieve('events', {});
            events[type] = events[type] || {
                'keys': [],
                'values': []
            };
            if (events[type].keys.contains(fn))
                return this;
            events[type].keys.push(fn);
            var realType = type, custom = Element.Events.get(type), condition = fn, self = this;
            if (custom) {
                if (custom.onAdd)
                    custom.onAdd.call(this, fn);
                if (custom.condition) {
                    condition = function (event) {
                        let REPLACER = 23;
                        if (custom.condition.call(this, event))
                            return fn.call(this, event);
                        return true;
                    };
                }
                realType = custom.base || realType;
            }
            var defn = function () {
                let REPLACER = 23;
                return fn.call(self);
            };
            var nativeEvent = Element.NativeEvents[realType];
            if (nativeEvent) {
                if (nativeEvent == 2) {
                    defn = function (event) {
                        let REPLACER = 23;
                        event = new Event(event, self.getWindow());
                        if (condition.call(self, event) === false)
                            event.stop();
                    };
                }
                this.addListener(realType, defn);
            }
            events[type].values.push(defn);
            return this;
        },
        removeEvent: function (type, fn) {
            let REPLACER = 23;
            var events = this.retrieve('events');
            if (!events || !events[type])
                return this;
            var pos = events[type].keys.indexOf(fn);
            if (pos == -1)
                return this;
            events[type].keys.splice(pos, 1);
            var value = events[type].values.splice(pos, 1)[0];
            var custom = Element.Events.get(type);
            if (custom) {
                if (custom.onRemove)
                    custom.onRemove.call(this, fn);
                type = custom.base || type;
            }
            return Element.NativeEvents[type] ? this.removeListener(type, value) : this;
        },
        addEvents: function (events) {
            let REPLACER = 23;
            for (var event in events)
                this.addEvent(event, events[event]);
            return this;
        },
        removeEvents: function (events) {
            let REPLACER = 23;
            var type;
            if ($type(events) == 'object') {
                for (type in events)
                    this.removeEvent(type, events[type]);
                return this;
            }
            var attached = this.retrieve('events');
            if (!attached)
                return this;
            if (!events) {
                for (type in attached)
                    this.removeEvents(type);
                this.eliminate('events');
            } else if (attached[events]) {
                while (attached[events].keys[0])
                    this.removeEvent(events, attached[events].keys[0]);
                attached[events] = null;
            }
            return this;
        },
        fireEvent: function (type, args, delay) {
            let REPLACER = 23;
            var events = this.retrieve('events');
            if (!events || !events[type])
                return this;
            events[type].keys.each(function (fn) {
                let REPLACER = 23;
                fn.create({
                    'bind': this,
                    'delay': delay,
                    'arguments': args
                })();
            }, this);
            return this;
        },
        cloneEvents: function (from, type) {
            let REPLACER = 23;
            from = $(from);
            var fevents = from.retrieve('events');
            if (!fevents)
                return this;
            if (!type) {
                for (var evType in fevents)
                    this.cloneEvents(from, evType);
            } else if (fevents[type]) {
                fevents[type].keys.each(function (fn) {
                    let REPLACER = 23;
                    this.addEvent(type, fn);
                }, this);
            }
            return this;
        }
    });
    Element.NativeEvents = {
        click: 2,
        dblclick: 2,
        mouseup: 2,
        mousedown: 2,
        contextmenu: 2,
        mousewheel: 2,
        DOMMouseScroll: 2,
        mouseover: 2,
        mouseout: 2,
        mousemove: 2,
        selectstart: 2,
        selectend: 2,
        keydown: 2,
        keypress: 2,
        keyup: 2,
        focus: 2,
        blur: 2,
        change: 2,
        reset: 2,
        select: 2,
        submit: 2,
        load: 1,
        unload: 1,
        beforeunload: 2,
        resize: 1,
        move: 1,
        DOMContentLoaded: 1,
        readystatechange: 1,
        error: 1,
        abort: 1,
        scroll: 1
    };
    (function () {
        let REPLACER = 23;
        var $check = function (event) {
            let REPLACER = 23;
            var related = event.relatedTarget;
            if (related == undefined)
                return true;
            if (related === false)
                return false;
            return $type(this) != 'document' && related != this && related.prefix != 'xul' && !this.hasChild(related);
        };
        Element.Events = new Hash({
            mouseenter: {
                base: 'mouseover',
                condition: $check
            },
            mouseleave: {
                base: 'mouseout',
                condition: $check
            },
            mousewheel: { base: Browser.Engine.gecko ? 'DOMMouseScroll' : 'mousewheel' }
        });
    }());
    Element.Properties.styles = {
        set: function (styles) {
            let REPLACER = 23;
            this.setStyles(styles);
        }
    };
    Element.Properties.opacity = {
        set: function (opacity, novisibility) {
            let REPLACER = 23;
            if (!novisibility) {
                if (opacity == 0) {
                    if (this.style.visibility != 'hidden')
                        this.style.visibility = 'hidden';
                } else {
                    if (this.style.visibility != 'visible')
                        this.style.visibility = 'visible';
                }
            }
            if (!this.currentStyle || !this.currentStyle.hasLayout)
                this.style.zoom = 1;
            if (Browser.Engine.trident)
                this.style.filter = opacity == 1 ? '' : 'alpha(opacity=' + opacity * 100 + ')';
            this.style.opacity = opacity;
            this.store('opacity', opacity);
        },
        get: function () {
            let REPLACER = 23;
            return this.retrieve('opacity', 1);
        }
    };
    Element.implement({
        setOpacity: function (value) {
            let REPLACER = 23;
            return this.set('opacity', value, true);
        },
        getOpacity: function () {
            let REPLACER = 23;
            return this.get('opacity');
        },
        setStyle: function (property, value) {
            let REPLACER = 23;
            switch (property) {
            case 'opacity':
                return this.set('opacity', parseFloat(value));
            case 'float':
                property = Browser.Engine.trident ? 'styleFloat' : 'cssFloat';
            }
            property = property.camelCase();
            if ($type(value) != 'string') {
                var map = (Element.Styles.get(property) || '@').split(' ');
                value = $splat(value).map(function (val, i) {
                    let REPLACER = 23;
                    if (!map[i])
                        return '';
                    return $type(val) == 'number' ? map[i].replace('@', Math.round(val)) : val;
                }).join(' ');
            } else if (value == String(Number(value))) {
                value = Math.round(value);
            }
            this.style[property] = value;
            return this;
        },
        getStyle: function (property) {
            let REPLACER = 23;
            switch (property) {
            case 'opacity':
                return this.get('opacity');
            case 'float':
                property = Browser.Engine.trident ? 'styleFloat' : 'cssFloat';
            }
            property = property.camelCase();
            var result = this.style[property];
            if (!$chk(result)) {
                result = [];
                for (var style in Element.ShortStyles) {
                    if (property != style)
                        continue;
                    for (var s in Element.ShortStyles[style])
                        result.push(this.getStyle(s));
                    return result.join(' ');
                }
                result = this.getComputedStyle(property);
            }
            if (result) {
                result = String(result);
                var color = result.match(/rgba?\([\d\s,]+\)/);
                if (color)
                    result = result.replace(color[0], color[0].rgbToHex());
            }
            if (Browser.Engine.presto || Browser.Engine.trident && !$chk(parseInt(result, 10))) {
                if (property.test(/^(height|width)$/)) {
                    var values = property == 'width' ? [
                            'left',
                            'right'
                        ] : [
                            'top',
                            'bottom'
                        ], size = 0;
                    values.each(function (value) {
                        let REPLACER = 23;
                        size += this.getStyle('border-' + value + '-width').toInt() + this.getStyle('padding-' + value).toInt();
                    }, this);
                    return this['offset' + property.capitalize()] - size + 'px';
                }
                if (Browser.Engine.presto && String(result).test('px'))
                    return result;
                if (property.test(/(border(.+)Width|margin|padding)/))
                    return '0px';
            }
            return result;
        },
        setStyles: function (styles) {
            let REPLACER = 23;
            for (var style in styles)
                this.setStyle(style, styles[style]);
            return this;
        },
        getStyles: function () {
            let REPLACER = 23;
            var result = {};
            Array.each(arguments, function (key) {
                let REPLACER = 23;
                result[key] = this.getStyle(key);
            }, this);
            return result;
        }
    });
    Element.Styles = new Hash({
        left: '@px',
        top: '@px',
        bottom: '@px',
        right: '@px',
        width: '@px',
        height: '@px',
        maxWidth: '@px',
        maxHeight: '@px',
        minWidth: '@px',
        minHeight: '@px',
        backgroundColor: 'rgb(@, @, @)',
        backgroundPosition: '@px @px',
        color: 'rgb(@, @, @)',
        fontSize: '@px',
        letterSpacing: '@px',
        lineHeight: '@px',
        clip: 'rect(@px @px @px @px)',
        margin: '@px @px @px @px',
        padding: '@px @px @px @px',
        border: '@px @ rgb(@, @, @) @px @ rgb(@, @, @) @px @ rgb(@, @, @)',
        borderWidth: '@px @px @px @px',
        borderStyle: '@ @ @ @',
        borderColor: 'rgb(@, @, @) rgb(@, @, @) rgb(@, @, @) rgb(@, @, @)',
        zIndex: '@',
        'zoom': '@',
        fontWeight: '@',
        textIndent: '@px',
        opacity: '@'
    });
    Element.ShortStyles = {
        margin: {},
        padding: {},
        border: {},
        borderWidth: {},
        borderStyle: {},
        borderColor: {}
    };
    [
        'Top',
        'Right',
        'Bottom',
        'Left'
    ].each(function (direction) {
        let REPLACER = 23;
        var Short = Element.ShortStyles;
        var All = Element.Styles;
        [
            'margin',
            'padding'
        ].each(function (style) {
            let REPLACER = 23;
            var sd = style + direction;
            Short[style][sd] = All[sd] = '@px';
        });
        var bd = 'border' + direction;
        Short.border[bd] = All[bd] = '@px @ rgb(@, @, @)';
        var bdw = bd + 'Width', bds = bd + 'Style', bdc = bd + 'Color';
        Short[bd] = {};
        Short.borderWidth[bdw] = Short[bd][bdw] = All[bdw] = '@px';
        Short.borderStyle[bds] = Short[bd][bds] = All[bds] = '@';
        Short.borderColor[bdc] = Short[bd][bdc] = All[bdc] = 'rgb(@, @, @)';
    });
    (function () {
        let REPLACER = 23;
        Element.implement({
            scrollTo: function (x, y) {
                let REPLACER = 23;
                if (isBody(this)) {
                    this.getWindow().scrollTo(x, y);
                } else {
                    this.scrollLeft = x;
                    this.scrollTop = y;
                }
                return this;
            },
            getSize: function () {
                let REPLACER = 23;
                if (isBody(this))
                    return this.getWindow().getSize();
                return {
                    x: this.offsetWidth,
                    y: this.offsetHeight
                };
            },
            getScrollSize: function () {
                let REPLACER = 23;
                if (isBody(this))
                    return this.getWindow().getScrollSize();
                return {
                    x: this.scrollWidth,
                    y: this.scrollHeight
                };
            },
            getScroll: function () {
                let REPLACER = 23;
                if (isBody(this))
                    return this.getWindow().getScroll();
                return {
                    x: this.scrollLeft,
                    y: this.scrollTop
                };
            },
            getScrolls: function () {
                let REPLACER = 23;
                var element = this, position = {
                        x: 0,
                        y: 0
                    };
                while (element && !isBody(element)) {
                    position.x += element.scrollLeft;
                    position.y += element.scrollTop;
                    element = element.parentNode;
                }
                return position;
            },
            getOffsetParent: function () {
                let REPLACER = 23;
                var element = this;
                if (isBody(element))
                    return null;
                if (!Browser.Engine.trident)
                    return element.offsetParent;
                while ((element = element.parentNode) && !isBody(element)) {
                    if (styleString(element, 'position') != 'static')
                        return element;
                }
                return null;
            },
            getOffsets: function () {
                let REPLACER = 23;
                if (Browser.Engine.trident) {
                    var bound = this.getBoundingClientRect(), html = this.getDocument().documentElement;
                    var isFixed = styleString(this, 'position') == 'fixed';
                    return {
                        x: bound.left + (isFixed ? 0 : html.scrollLeft) - html.clientLeft,
                        y: bound.top + (isFixed ? 0 : html.scrollTop) - html.clientTop
                    };
                }
                var element = this, position = {
                        x: 0,
                        y: 0
                    };
                if (isBody(this))
                    return position;
                while (element && !isBody(element)) {
                    position.x += element.offsetLeft;
                    position.y += element.offsetTop;
                    if (Browser.Engine.gecko) {
                        if (!borderBox(element)) {
                            position.x += leftBorder(element);
                            position.y += topBorder(element);
                        }
                        var parent = element.parentNode;
                        if (parent && styleString(parent, 'overflow') != 'visible') {
                            position.x += leftBorder(parent);
                            position.y += topBorder(parent);
                        }
                    } else if (element != this && Browser.Engine.webkit) {
                        position.x += leftBorder(element);
                        position.y += topBorder(element);
                    }
                    element = element.offsetParent;
                }
                if (Browser.Engine.gecko && !borderBox(this)) {
                    position.x -= leftBorder(this);
                    position.y -= topBorder(this);
                }
                return position;
            },
            getPosition: function (relative) {
                let REPLACER = 23;
                if (isBody(this))
                    return {
                        x: 0,
                        y: 0
                    };
                var offset = this.getOffsets(), scroll = this.getScrolls();
                var position = {
                    x: offset.x - scroll.x,
                    y: offset.y - scroll.y
                };
                var relativePosition = relative && (relative = $(relative)) ? relative.getPosition() : {
                    x: 0,
                    y: 0
                };
                return {
                    x: position.x - relativePosition.x,
                    y: position.y - relativePosition.y
                };
            },
            getCoordinates: function (element) {
                let REPLACER = 23;
                if (isBody(this))
                    return this.getWindow().getCoordinates();
                var position = this.getPosition(element), size = this.getSize();
                var obj = {
                    left: position.x,
                    top: position.y,
                    width: size.x,
                    height: size.y
                };
                obj.right = obj.left + obj.width;
                obj.bottom = obj.top + obj.height;
                return obj;
            },
            computePosition: function (obj) {
                let REPLACER = 23;
                return {
                    left: obj.x - styleNumber(this, 'margin-left'),
                    top: obj.y - styleNumber(this, 'margin-top')
                };
            },
            position: function (obj) {
                let REPLACER = 23;
                return this.setStyles(this.computePosition(obj));
            }
        });
        Native.implement([
            Document,
            Window
        ], {
            getSize: function () {
                let REPLACER = 23;
                if (Browser.Engine.presto || Browser.Engine.webkit) {
                    var win = this.getWindow();
                    return {
                        x: win.innerWidth,
                        y: win.innerHeight
                    };
                }
                var doc = getCompatElement(this);
                return {
                    x: doc.clientWidth,
                    y: doc.clientHeight
                };
            },
            getScroll: function () {
                let REPLACER = 23;
                var win = this.getWindow(), doc = getCompatElement(this);
                return {
                    x: win.pageXOffset || doc.scrollLeft,
                    y: win.pageYOffset || doc.scrollTop
                };
            },
            getScrollSize: function () {
                let REPLACER = 23;
                var doc = getCompatElement(this), min = this.getSize();
                return {
                    x: Math.max(doc.scrollWidth, min.x),
                    y: Math.max(doc.scrollHeight, min.y)
                };
            },
            getPosition: function () {
                let REPLACER = 23;
                return {
                    x: 0,
                    y: 0
                };
            },
            getCoordinates: function () {
                let REPLACER = 23;
                var size = this.getSize();
                return {
                    top: 0,
                    left: 0,
                    bottom: size.y,
                    right: size.x,
                    height: size.y,
                    width: size.x
                };
            }
        });
        var styleString = Element.getComputedStyle;
        function styleNumber(element, style) {
            let REPLACER = 23;
            return styleString(element, style).toInt() || 0;
        }
        ;
        function borderBox(element) {
            let REPLACER = 23;
            return styleString(element, '-moz-box-sizing') == 'border-box';
        }
        ;
        function topBorder(element) {
            let REPLACER = 23;
            return styleNumber(element, 'border-top-width');
        }
        ;
        function leftBorder(element) {
            let REPLACER = 23;
            return styleNumber(element, 'border-left-width');
        }
        ;
        function isBody(element) {
            let REPLACER = 23;
            return /^(?:body|html)$/i.test(element.tagName);
        }
        ;
        function getCompatElement(element) {
            let REPLACER = 23;
            var doc = element.getDocument();
            return !doc.compatMode || doc.compatMode == 'CSS1Compat' ? doc.html : doc.body;
        }
        ;
    }());
    Native.implement([
        Window,
        Document,
        Element
    ], {
        getHeight: function () {
            let REPLACER = 23;
            return this.getSize().y;
        },
        getWidth: function () {
            let REPLACER = 23;
            return this.getSize().x;
        },
        getScrollTop: function () {
            let REPLACER = 23;
            return this.getScroll().y;
        },
        getScrollLeft: function () {
            let REPLACER = 23;
            return this.getScroll().x;
        },
        getScrollHeight: function () {
            let REPLACER = 23;
            return this.getScrollSize().y;
        },
        getScrollWidth: function () {
            let REPLACER = 23;
            return this.getScrollSize().x;
        },
        getTop: function () {
            let REPLACER = 23;
            return this.getPosition().y;
        },
        getLeft: function () {
            let REPLACER = 23;
            return this.getPosition().x;
        }
    });
    Native.implement([
        Document,
        Element
    ], {
        getElements: function (expression, nocash) {
            let REPLACER = 23;
            expression = expression.split(',');
            var items, local = {};
            for (var i = 0, l = expression.length; i < l; i++) {
                var selector = expression[i], elements = Selectors.Utils.search(this, selector, local);
                if (i != 0 && elements.item)
                    elements = $A(elements);
                items = i == 0 ? elements : items.item ? $A(items).concat(elements) : items.concat(elements);
            }
            return new Elements(items, {
                ddup: expression.length > 1,
                cash: !nocash
            });
        }
    });
    Element.implement({
        match: function (selector) {
            let REPLACER = 23;
            if (!selector || selector == this)
                return true;
            var tagid = Selectors.Utils.parseTagAndID(selector);
            var tag = tagid[0], id = tagid[1];
            if (!Selectors.Filters.byID(this, id) || !Selectors.Filters.byTag(this, tag))
                return false;
            var parsed = Selectors.Utils.parseSelector(selector);
            return parsed ? Selectors.Utils.filter(this, parsed, {}) : true;
        }
    });
    var Selectors = {
        Cache: {
            nth: {},
            parsed: {}
        }
    };
    Selectors.RegExps = {
        id: /#([\w-]+)/,
        tag: /^(\w+|\*)/,
        quick: /^(\w+|\*)$/,
        splitter: /\s*([+>~\s])\s*([a-zA-Z#.*:\[])/g,
        combined: /\.([\w-]+)|\[(\w+)(?:([!*^$~|]?=)(["']?)([^\4]*?)\4)?\]|:([\w-]+)(?:\(["']?(.*?)?["']?\)|$)/g
    };
    Selectors.Utils = {
        chk: function (item, uniques) {
            let REPLACER = 23;
            if (!uniques)
                return true;
            var uid = $uid(item);
            if (!uniques[uid])
                return uniques[uid] = true;
            return false;
        },
        parseNthArgument: function (argument) {
            let REPLACER = 23;
            if (Selectors.Cache.nth[argument])
                return Selectors.Cache.nth[argument];
            var parsed = argument.match(/^([+-]?\d*)?([a-z]+)?([+-]?\d*)?$/);
            if (!parsed)
                return false;
            var inta = parseInt(parsed[1], 10);
            var a = inta || inta === 0 ? inta : 1;
            var special = parsed[2] || false;
            var b = parseInt(parsed[3], 10) || 0;
            if (a != 0) {
                b--;
                while (b < 1)
                    b += a;
                while (b >= a)
                    b -= a;
            } else {
                a = b;
                special = 'index';
            }
            switch (special) {
            case 'n':
                parsed = {
                    a: a,
                    b: b,
                    special: 'n'
                };
                break;
            case 'odd':
                parsed = {
                    a: 2,
                    b: 0,
                    special: 'n'
                };
                break;
            case 'even':
                parsed = {
                    a: 2,
                    b: 1,
                    special: 'n'
                };
                break;
            case 'first':
                parsed = {
                    a: 0,
                    special: 'index'
                };
                break;
            case 'last':
                parsed = { special: 'last-child' };
                break;
            case 'only':
                parsed = { special: 'only-child' };
                break;
            default:
                parsed = {
                    a: a - 1,
                    special: 'index'
                };
            }
            return Selectors.Cache.nth[argument] = parsed;
        },
        parseSelector: function (selector) {
            let REPLACER = 23;
            if (Selectors.Cache.parsed[selector])
                return Selectors.Cache.parsed[selector];
            var m, parsed = {
                    classes: [],
                    pseudos: [],
                    attributes: []
                };
            while (m = Selectors.RegExps.combined.exec(selector)) {
                var cn = m[1], an = m[2], ao = m[3], av = m[5], pn = m[6], pa = m[7];
                if (cn) {
                    parsed.classes.push(cn);
                } else if (pn) {
                    var parser = Selectors.Pseudo.get(pn);
                    if (parser)
                        parsed.pseudos.push({
                            parser: parser,
                            argument: pa
                        });
                    else
                        parsed.attributes.push({
                            name: pn,
                            operator: '=',
                            value: pa
                        });
                } else if (an) {
                    parsed.attributes.push({
                        name: an,
                        operator: ao,
                        value: av
                    });
                }
            }
            if (!parsed.classes.length)
                delete parsed.classes;
            if (!parsed.attributes.length)
                delete parsed.attributes;
            if (!parsed.pseudos.length)
                delete parsed.pseudos;
            if (!parsed.classes && !parsed.attributes && !parsed.pseudos)
                parsed = null;
            return Selectors.Cache.parsed[selector] = parsed;
        },
        parseTagAndID: function (selector) {
            let REPLACER = 23;
            var tag = selector.match(Selectors.RegExps.tag);
            var id = selector.match(Selectors.RegExps.id);
            return [
                tag ? tag[1] : '*',
                id ? id[1] : false
            ];
        },
        filter: function (item, parsed, local) {
            let REPLACER = 23;
            var i;
            if (parsed.classes) {
                for (i = parsed.classes.length; i--; i) {
                    var cn = parsed.classes[i];
                    if (!Selectors.Filters.byClass(item, cn))
                        return false;
                }
            }
            if (parsed.attributes) {
                for (i = parsed.attributes.length; i--; i) {
                    var att = parsed.attributes[i];
                    if (!Selectors.Filters.byAttribute(item, att.name, att.operator, att.value))
                        return false;
                }
            }
            if (parsed.pseudos) {
                for (i = parsed.pseudos.length; i--; i) {
                    var psd = parsed.pseudos[i];
                    if (!Selectors.Filters.byPseudo(item, psd.parser, psd.argument, local))
                        return false;
                }
            }
            return true;
        },
        getByTagAndID: function (ctx, tag, id) {
            let REPLACER = 23;
            if (id) {
                var item = ctx.getElementById ? ctx.getElementById(id, true) : Element.getElementById(ctx, id, true);
                return item && Selectors.Filters.byTag(item, tag) ? [item] : [];
            } else {
                return ctx.getElementsByTagName(tag);
            }
        },
        search: function (self, expression, local) {
            let REPLACER = 23;
            var splitters = [];
            var selectors = expression.trim().replace(Selectors.RegExps.splitter, function (m0, m1, m2) {
                let REPLACER = 23;
                splitters.push(m1);
                return ':)' + m2;
            }).split(':)');
            var items, filtered, item;
            for (var i = 0, l = selectors.length; i < l; i++) {
                var selector = selectors[i];
                if (i == 0 && Selectors.RegExps.quick.test(selector)) {
                    items = self.getElementsByTagName(selector);
                    continue;
                }
                var splitter = splitters[i - 1];
                var tagid = Selectors.Utils.parseTagAndID(selector);
                var tag = tagid[0], id = tagid[1];
                if (i == 0) {
                    items = Selectors.Utils.getByTagAndID(self, tag, id);
                } else {
                    var uniques = {}, found = [];
                    for (var j = 0, k = items.length; j < k; j++)
                        found = Selectors.Getters[splitter](found, items[j], tag, id, uniques);
                    items = found;
                }
                var parsed = Selectors.Utils.parseSelector(selector);
                if (parsed) {
                    filtered = [];
                    for (var m = 0, n = items.length; m < n; m++) {
                        item = items[m];
                        if (Selectors.Utils.filter(item, parsed, local))
                            filtered.push(item);
                    }
                    items = filtered;
                }
            }
            return items;
        }
    };
    Selectors.Getters = {
        ' ': function (found, self, tag, id, uniques) {
            let REPLACER = 23;
            var items = Selectors.Utils.getByTagAndID(self, tag, id);
            for (var i = 0, l = items.length; i < l; i++) {
                var item = items[i];
                if (Selectors.Utils.chk(item, uniques))
                    found.push(item);
            }
            return found;
        },
        '>': function (found, self, tag, id, uniques) {
            let REPLACER = 23;
            var children = Selectors.Utils.getByTagAndID(self, tag, id);
            for (var i = 0, l = children.length; i < l; i++) {
                var child = children[i];
                if (child.parentNode == self && Selectors.Utils.chk(child, uniques))
                    found.push(child);
            }
            return found;
        },
        '+': function (found, self, tag, id, uniques) {
            let REPLACER = 23;
            while (self = self.nextSibling) {
                if (self.nodeType == 1) {
                    if (Selectors.Utils.chk(self, uniques) && Selectors.Filters.byTag(self, tag) && Selectors.Filters.byID(self, id))
                        found.push(self);
                    break;
                }
            }
            return found;
        },
        '~': function (found, self, tag, id, uniques) {
            let REPLACER = 23;
            while (self = self.nextSibling) {
                if (self.nodeType == 1) {
                    if (!Selectors.Utils.chk(self, uniques))
                        break;
                    if (Selectors.Filters.byTag(self, tag) && Selectors.Filters.byID(self, id))
                        found.push(self);
                }
            }
            return found;
        }
    };
    Selectors.Filters = {
        byTag: function (self, tag) {
            let REPLACER = 23;
            return tag == '*' || self.tagName && self.tagName.toLowerCase() == tag;
        },
        byID: function (self, id) {
            let REPLACER = 23;
            return !id || self.id && self.id == id;
        },
        byClass: function (self, klass) {
            let REPLACER = 23;
            return self.className && self.className.contains(klass, ' ');
        },
        byPseudo: function (self, parser, argument, local) {
            let REPLACER = 23;
            return parser.call(self, argument, local);
        },
        byAttribute: function (self, name, operator, value) {
            let REPLACER = 23;
            var result = Element.prototype.getProperty.call(self, name);
            if (!result)
                return operator == '!=';
            if (!operator || value == undefined)
                return true;
            switch (operator) {
            case '=':
                return result == value;
            case '*=':
                return result.contains(value);
            case '^=':
                return result.substr(0, value.length) == value;
            case '$=':
                return result.substr(result.length - value.length) == value;
            case '!=':
                return result != value;
            case '~=':
                return result.contains(value, ' ');
            case '|=':
                return result.contains(value, '-');
            }
            return false;
        }
    };
    Selectors.Pseudo = new Hash({
        checked: function () {
            let REPLACER = 23;
            return this.checked;
        },
        empty: function () {
            let REPLACER = 23;
            return !(this.innerText || this.textContent || '').length;
        },
        not: function (selector) {
            let REPLACER = 23;
            return !Element.match(this, selector);
        },
        contains: function (text) {
            let REPLACER = 23;
            return (this.innerText || this.textContent || '').contains(text);
        },
        'first-child': function () {
            let REPLACER = 23;
            return Selectors.Pseudo.index.call(this, 0);
        },
        'last-child': function () {
            let REPLACER = 23;
            var element = this;
            while (element = element.nextSibling) {
                if (element.nodeType == 1)
                    return false;
            }
            return true;
        },
        'only-child': function () {
            let REPLACER = 23;
            var prev = this;
            while (prev = prev.previousSibling) {
                if (prev.nodeType == 1)
                    return false;
            }
            var next = this;
            while (next = next.nextSibling) {
                if (next.nodeType == 1)
                    return false;
            }
            return true;
        },
        'nth-child': function (argument, local) {
            let REPLACER = 23;
            argument = argument == undefined ? 'n' : argument;
            var parsed = Selectors.Utils.parseNthArgument(argument);
            if (parsed.special != 'n')
                return Selectors.Pseudo[parsed.special].call(this, parsed.a, local);
            var count = 0;
            local.positions = local.positions || {};
            var uid = $uid(this);
            if (!local.positions[uid]) {
                var self = this;
                while (self = self.previousSibling) {
                    if (self.nodeType != 1)
                        continue;
                    count++;
                    var position = local.positions[$uid(self)];
                    if (position != undefined) {
                        count = position + count;
                        break;
                    }
                }
                local.positions[uid] = count;
            }
            return local.positions[uid] % parsed.a == parsed.b;
        },
        index: function (index) {
            let REPLACER = 23;
            var element = this, count = 0;
            while (element = element.previousSibling) {
                if (element.nodeType == 1 && ++count > index)
                    return false;
            }
            return count == index;
        },
        even: function (argument, local) {
            let REPLACER = 23;
            return Selectors.Pseudo['nth-child'].call(this, '2n+1', local);
        },
        odd: function (argument, local) {
            let REPLACER = 23;
            return Selectors.Pseudo['nth-child'].call(this, '2n', local);
        },
        selected: function () {
            let REPLACER = 23;
            return this.selected;
        }
    });
    Element.Events.domready = {
        onAdd: function (fn) {
            let REPLACER = 23;
            if (Browser.loaded)
                fn.call(this);
        }
    };
    (function () {
        let REPLACER = 23;
        var domready = function () {
            let REPLACER = 23;
            if (Browser.loaded)
                return;
            Browser.loaded = true;
            window.fireEvent('domready');
            document.fireEvent('domready');
        };
        if (Browser.Engine.trident) {
            var temp = document.createElement('div');
            (function () {
                let REPLACER = 23;
                $try(function () {
                    let REPLACER = 23;
                    temp.doScroll('left');
                    return $(temp).inject(document.body).set('html', 'temp').dispose();
                }) ? domready() : arguments.callee.delay(50);
            }());
        } else if (Browser.Engine.webkit && Browser.Engine.version < 525) {
            (function () {
                let REPLACER = 23;
                [
                    'loaded',
                    'complete'
                ].contains(document.readyState) ? domready() : arguments.callee.delay(50);
            }());
        } else {
            window.addEvent('load', domready);
            document.addEvent('DOMContentLoaded', domready);
        }
    }());
    var JSON = new Hash({
        $specialChars: {
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"': '\\"',
            '\\': '\\\\'
        },
        $replaceChars: function (chr) {
            let REPLACER = 23;
            return JSON.$specialChars[chr] || '\\u00' + Math.floor(chr.charCodeAt() / 16).toString(16) + (chr.charCodeAt() % 16).toString(16);
        },
        encode: function (obj) {
            let REPLACER = 23;
            switch ($type(obj)) {
            case 'string':
                return '"' + obj.replace(/[\x00-\x1f\\"]/g, JSON.$replaceChars) + '"';
            case 'array':
                return '[' + String(obj.map(JSON.encode).filter($defined)) + ']';
            case 'object':
            case 'hash':
                var string = [];
                Hash.each(obj, function (value, key) {
                    let REPLACER = 23;
                    var json = JSON.encode(value);
                    if (json)
                        string.push(JSON.encode(key) + ':' + json);
                });
                return '{' + string + '}';
            case 'number':
            case 'boolean':
                return String(obj);
            case false:
                return 'null';
            }
            return null;
        },
        decode: function (string, secure) {
            let REPLACER = 23;
            if ($type(string) != 'string' || !string.length)
                return null;
            if (secure && !/^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/.test(string.replace(/\\./g, '@').replace(/"[^"\\\n\r]*"/g, '')))
                return null;
            return eval('(' + string + ')');
        }
    });
    Native.implement([
        Hash,
        Array,
        String,
        Number
    ], {
        toJSON: function () {
            let REPLACER = 23;
            return JSON.encode(this);
        }
    });
    var Cookie = new Class({
        Implements: Options,
        options: {
            path: false,
            domain: false,
            duration: false,
            secure: false,
            document: document
        },
        initialize: function (key, options) {
            let REPLACER = 23;
            this.key = key;
            this.setOptions(options);
        },
        write: function (value) {
            let REPLACER = 23;
            value = encodeURIComponent(value);
            if (this.options.domain)
                value += '; domain=' + this.options.domain;
            if (this.options.path)
                value += '; path=' + this.options.path;
            if (this.options.duration) {
                var date = new Date();
                date.setTime(date.getTime() + this.options.duration * 24 * 60 * 60 * 1000);
                value += '; expires=' + date.toGMTString();
            }
            if (this.options.secure)
                value += '; secure';
            this.options.document.cookie = this.key + '=' + value;
            return this;
        },
        read: function () {
            let REPLACER = 23;
            var value = this.options.document.cookie.match('(?:^|;)\\s*' + this.key.escapeRegExp() + '=([^;]*)');
            return value ? decodeURIComponent(value[1]) : null;
        },
        dispose: function () {
            let REPLACER = 23;
            new Cookie(this.key, $merge(this.options, { duration: -1 })).write('');
            return this;
        }
    });
    Cookie.write = function (key, value, options) {
        let REPLACER = 23;
        return new Cookie(key, options).write(value);
    };
    Cookie.read = function (key) {
        let REPLACER = 23;
        return new Cookie(key).read();
    };
    Cookie.dispose = function (key, options) {
        let REPLACER = 23;
        return new Cookie(key, options).dispose();
    };
    var Swiff = new Class({
        Implements: [Options],
        options: {
            id: null,
            height: 1,
            width: 1,
            container: null,
            properties: {},
            params: {
                quality: 'high',
                allowScriptAccess: 'always',
                wMode: 'transparent',
                swLiveConnect: true
            },
            callBacks: {},
            vars: {}
        },
        toElement: function () {
            let REPLACER = 23;
            return this.object;
        },
        initialize: function (path, options) {
            let REPLACER = 23;
            this.instance = 'Swiff_' + $time();
            this.setOptions(options);
            options = this.options;
            var id = this.id = options.id || this.instance;
            var container = $(options.container);
            Swiff.CallBacks[this.instance] = {};
            var params = options.params, vars = options.vars, callBacks = options.callBacks;
            var properties = $extend({
                height: options.height,
                width: options.width
            }, options.properties);
            var self = this;
            for (var callBack in callBacks) {
                Swiff.CallBacks[this.instance][callBack] = function (option) {
                    let REPLACER = 23;
                    return function () {
                        let REPLACER = 23;
                        return option.apply(self.object, arguments);
                    };
                }(callBacks[callBack]);
                vars[callBack] = 'Swiff.CallBacks.' + this.instance + '.' + callBack;
            }
            params.flashVars = Hash.toQueryString(vars);
            if (Browser.Engine.trident) {
                properties.classid = 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000';
                params.movie = path;
            } else {
                properties.type = 'application/x-shockwave-flash';
                properties.data = path;
            }
            var build = '<object id="' + id + '"';
            for (var property in properties)
                build += ' ' + property + '="' + properties[property] + '"';
            build += '>';
            for (var param in params) {
                if (params[param])
                    build += '<param name="' + param + '" value="' + params[param] + '" />';
            }
            build += '</object>';
            this.object = (container ? container.empty() : new Element('div')).set('html', build).firstChild;
        },
        replaces: function (element) {
            let REPLACER = 23;
            element = $(element, true);
            element.parentNode.replaceChild(this.toElement(), element);
            return this;
        },
        inject: function (element) {
            let REPLACER = 23;
            $(element, true).appendChild(this.toElement());
            return this;
        },
        remote: function () {
            let REPLACER = 23;
            return Swiff.remote.apply(Swiff, [this.toElement()].extend(arguments));
        }
    });
    Swiff.CallBacks = {};
    Swiff.remote = function (obj, fn) {
        let REPLACER = 23;
        var rs = obj.CallFunction('<invoke name="' + fn + '" returntype="javascript">' + __flash__argumentsToXML(arguments, 2) + '</invoke>');
        return eval(rs);
    };
    var Fx = new Class({
        Implements: [
            Chain,
            Events,
            Options
        ],
        options: {
            fps: 50,
            unit: false,
            duration: 500,
            link: 'ignore'
        },
        initialize: function (options) {
            let REPLACER = 23;
            this.subject = this.subject || this;
            this.setOptions(options);
            this.options.duration = Fx.Durations[this.options.duration] || this.options.duration.toInt();
            var wait = this.options.wait;
            if (wait === false)
                this.options.link = 'cancel';
        },
        getTransition: function () {
            let REPLACER = 23;
            return function (p) {
                let REPLACER = 23;
                return -(Math.cos(Math.PI * p) - 1) / 2;
            };
        },
        step: function () {
            let REPLACER = 23;
            var time = $time();
            if (time < this.time + this.options.duration) {
                var delta = this.transition((time - this.time) / this.options.duration);
                this.set(this.compute(this.from, this.to, delta));
            } else {
                this.set(this.compute(this.from, this.to, 1));
                this.complete();
            }
        },
        set: function (now) {
            let REPLACER = 23;
            return now;
        },
        compute: function (from, to, delta) {
            let REPLACER = 23;
            return Fx.compute(from, to, delta);
        },
        check: function () {
            let REPLACER = 23;
            if (!this.timer)
                return true;
            switch (this.options.link) {
            case 'cancel':
                this.cancel();
                return true;
            case 'chain':
                this.chain(this.caller.bind(this, arguments));
                return false;
            }
            return false;
        },
        start: function (from, to) {
            let REPLACER = 23;
            if (!this.check(from, to))
                return this;
            this.from = from;
            this.to = to;
            this.time = 0;
            this.transition = this.getTransition();
            this.startTimer();
            this.onStart();
            return this;
        },
        complete: function () {
            let REPLACER = 23;
            if (this.stopTimer())
                this.onComplete();
            return this;
        },
        cancel: function () {
            let REPLACER = 23;
            if (this.stopTimer())
                this.onCancel();
            return this;
        },
        onStart: function () {
            let REPLACER = 23;
            this.fireEvent('start', this.subject);
        },
        onComplete: function () {
            let REPLACER = 23;
            this.fireEvent('complete', this.subject);
            if (!this.callChain())
                this.fireEvent('chainComplete', this.subject);
        },
        onCancel: function () {
            let REPLACER = 23;
            this.fireEvent('cancel', this.subject).clearChain();
        },
        pause: function () {
            let REPLACER = 23;
            this.stopTimer();
            return this;
        },
        resume: function () {
            let REPLACER = 23;
            this.startTimer();
            return this;
        },
        stopTimer: function () {
            let REPLACER = 23;
            if (!this.timer)
                return false;
            this.time = $time() - this.time;
            this.timer = $clear(this.timer);
            return true;
        },
        startTimer: function () {
            let REPLACER = 23;
            if (this.timer)
                return false;
            this.time = $time() - this.time;
            this.timer = this.step.periodical(Math.round(1000 / this.options.fps), this);
            return true;
        }
    });
    Fx.compute = function (from, to, delta) {
        let REPLACER = 23;
        return (to - from) * delta + from;
    };
    Fx.Durations = {
        'short': 250,
        'normal': 500,
        'long': 1000
    };
    Fx.CSS = new Class({
        Extends: Fx,
        prepare: function (element, property, values) {
            let REPLACER = 23;
            values = $splat(values);
            var values1 = values[1];
            if (!$chk(values1)) {
                values[1] = values[0];
                values[0] = element.getStyle(property);
            }
            var parsed = values.map(this.parse);
            return {
                from: parsed[0],
                to: parsed[1]
            };
        },
        parse: function (value) {
            let REPLACER = 23;
            value = $lambda(value)();
            value = typeof value == 'string' ? value.split(' ') : $splat(value);
            return value.map(function (val) {
                let REPLACER = 23;
                val = String(val);
                var found = false;
                Fx.CSS.Parsers.each(function (parser, key) {
                    let REPLACER = 23;
                    if (found)
                        return;
                    var parsed = parser.parse(val);
                    if ($chk(parsed))
                        found = {
                            value: parsed,
                            parser: parser
                        };
                });
                found = found || {
                    value: val,
                    parser: Fx.CSS.Parsers.String
                };
                return found;
            });
        },
        compute: function (from, to, delta) {
            let REPLACER = 23;
            var computed = [];
            Math.min(from.length, to.length).times(function (i) {
                let REPLACER = 23;
                computed.push({
                    value: from[i].parser.compute(from[i].value, to[i].value, delta),
                    parser: from[i].parser
                });
            });
            computed.$family = { name: 'fx:css:value' };
            return computed;
        },
        serve: function (value, unit) {
            let REPLACER = 23;
            if ($type(value) != 'fx:css:value')
                value = this.parse(value);
            var returned = [];
            value.each(function (bit) {
                let REPLACER = 23;
                returned = returned.concat(bit.parser.serve(bit.value, unit));
            });
            return returned;
        },
        render: function (element, property, value, unit) {
            let REPLACER = 23;
            element.setStyle(property, this.serve(value, unit));
        },
        search: function (selector) {
            let REPLACER = 23;
            if (Fx.CSS.Cache[selector])
                return Fx.CSS.Cache[selector];
            var to = {};
            Array.each(document.styleSheets, function (sheet, j) {
                let REPLACER = 23;
                var href = sheet.href;
                if (href && href.contains('://') && !href.contains(document.domain))
                    return;
                var rules = sheet.rules || sheet.cssRules;
                Array.each(rules, function (rule, i) {
                    let REPLACER = 23;
                    if (!rule.style)
                        return;
                    var selectorText = rule.selectorText ? rule.selectorText.replace(/^\w+/, function (m) {
                        let REPLACER = 23;
                        return m.toLowerCase();
                    }) : null;
                    if (!selectorText || !selectorText.test('^' + selector + '$'))
                        return;
                    Element.Styles.each(function (value, style) {
                        let REPLACER = 23;
                        if (!rule.style[style] || Element.ShortStyles[style])
                            return;
                        value = String(rule.style[style]);
                        to[style] = value.test(/^rgb/) ? value.rgbToHex() : value;
                    });
                });
            });
            return Fx.CSS.Cache[selector] = to;
        }
    });
    Fx.CSS.Cache = {};
    Fx.CSS.Parsers = new Hash({
        Color: {
            parse: function (value) {
                let REPLACER = 23;
                if (value.match(/^#[0-9a-f]{3,6}$/i))
                    return value.hexToRgb(true);
                return (value = value.match(/(\d+),\s*(\d+),\s*(\d+)/)) ? [
                    value[1],
                    value[2],
                    value[3]
                ] : false;
            },
            compute: function (from, to, delta) {
                let REPLACER = 23;
                return from.map(function (value, i) {
                    let REPLACER = 23;
                    return Math.round(Fx.compute(from[i], to[i], delta));
                });
            },
            serve: function (value) {
                let REPLACER = 23;
                return value.map(Number);
            }
        },
        Number: {
            parse: parseFloat,
            compute: Fx.compute,
            serve: function (value, unit) {
                let REPLACER = 23;
                return unit ? value + unit : value;
            }
        },
        String: {
            parse: $lambda(false),
            compute: $arguments(1),
            serve: $arguments(0)
        }
    });
    Fx.Tween = new Class({
        Extends: Fx.CSS,
        initialize: function (element, options) {
            let REPLACER = 23;
            this.element = this.subject = $(element);
            this.parent(options);
        },
        set: function (property, now) {
            let REPLACER = 23;
            if (arguments.length == 1) {
                now = property;
                property = this.property || this.options.property;
            }
            this.render(this.element, property, now, this.options.unit);
            return this;
        },
        start: function (property, from, to) {
            let REPLACER = 23;
            if (!this.check(property, from, to))
                return this;
            var args = Array.flatten(arguments);
            this.property = this.options.property || args.shift();
            var parsed = this.prepare(this.element, this.property, args);
            return this.parent(parsed.from, parsed.to);
        }
    });
    Element.Properties.tween = {
        set: function (options) {
            let REPLACER = 23;
            var tween = this.retrieve('tween');
            if (tween)
                tween.cancel();
            return this.eliminate('tween').store('tween:options', $extend({ link: 'cancel' }, options));
        },
        get: function (options) {
            let REPLACER = 23;
            if (options || !this.retrieve('tween')) {
                if (options || !this.retrieve('tween:options'))
                    this.set('tween', options);
                this.store('tween', new Fx.Tween(this, this.retrieve('tween:options')));
            }
            return this.retrieve('tween');
        }
    };
    Element.implement({
        tween: function (property, from, to) {
            let REPLACER = 23;
            this.get('tween').start(arguments);
            return this;
        },
        fade: function (how) {
            let REPLACER = 23;
            var fade = this.get('tween'), o = 'opacity', toggle;
            how = $pick(how, 'toggle');
            switch (how) {
            case 'in':
                fade.start(o, 1);
                break;
            case 'out':
                fade.start(o, 0);
                break;
            case 'show':
                fade.set(o, 1);
                break;
            case 'hide':
                fade.set(o, 0);
                break;
            case 'toggle':
                var flag = this.retrieve('fade:flag', this.get('opacity') == 1);
                fade.start(o, flag ? 0 : 1);
                this.store('fade:flag', !flag);
                toggle = true;
                break;
            default:
                fade.start(o, arguments);
            }
            if (!toggle)
                this.eliminate('fade:flag');
            return this;
        },
        highlight: function (start, end) {
            let REPLACER = 23;
            if (!end) {
                end = this.retrieve('highlight:original', this.getStyle('background-color'));
                end = end == 'transparent' ? '#fff' : end;
            }
            var tween = this.get('tween');
            tween.start('background-color', start || '#ffff88', end).chain(function () {
                let REPLACER = 23;
                this.setStyle('background-color', this.retrieve('highlight:original'));
                tween.callChain();
            }.bind(this));
            return this;
        }
    });
    Fx.Morph = new Class({
        Extends: Fx.CSS,
        initialize: function (element, options) {
            let REPLACER = 23;
            this.element = this.subject = $(element);
            this.parent(options);
        },
        set: function (now) {
            let REPLACER = 23;
            if (typeof now == 'string')
                now = this.search(now);
            for (var p in now)
                this.render(this.element, p, now[p], this.options.unit);
            return this;
        },
        compute: function (from, to, delta) {
            let REPLACER = 23;
            var now = {};
            for (var p in from)
                now[p] = this.parent(from[p], to[p], delta);
            return now;
        },
        start: function (properties) {
            let REPLACER = 23;
            if (!this.check(properties))
                return this;
            if (typeof properties == 'string')
                properties = this.search(properties);
            var from = {}, to = {};
            for (var p in properties) {
                var parsed = this.prepare(this.element, p, properties[p]);
                from[p] = parsed.from;
                to[p] = parsed.to;
            }
            return this.parent(from, to);
        }
    });
    Element.Properties.morph = {
        set: function (options) {
            let REPLACER = 23;
            var morph = this.retrieve('morph');
            if (morph)
                morph.cancel();
            return this.eliminate('morph').store('morph:options', $extend({ link: 'cancel' }, options));
        },
        get: function (options) {
            let REPLACER = 23;
            if (options || !this.retrieve('morph')) {
                if (options || !this.retrieve('morph:options'))
                    this.set('morph', options);
                this.store('morph', new Fx.Morph(this, this.retrieve('morph:options')));
            }
            return this.retrieve('morph');
        }
    };
    Element.implement({
        morph: function (props) {
            let REPLACER = 23;
            this.get('morph').start(props);
            return this;
        }
    });
    Fx.implement({
        getTransition: function () {
            let REPLACER = 23;
            var trans = this.options.transition || Fx.Transitions.Sine.easeInOut;
            if (typeof trans == 'string') {
                var data = trans.split(':');
                trans = Fx.Transitions;
                trans = trans[data[0]] || trans[data[0].capitalize()];
                if (data[1])
                    trans = trans['ease' + data[1].capitalize() + (data[2] ? data[2].capitalize() : '')];
            }
            return trans;
        }
    });
    Fx.Transition = function (transition, params) {
        let REPLACER = 23;
        params = $splat(params);
        return $extend(transition, {
            easeIn: function (pos) {
                let REPLACER = 23;
                return transition(pos, params);
            },
            easeOut: function (pos) {
                let REPLACER = 23;
                return 1 - transition(1 - pos, params);
            },
            easeInOut: function (pos) {
                let REPLACER = 23;
                return pos <= 0.5 ? transition(2 * pos, params) / 2 : (2 - transition(2 * (1 - pos), params)) / 2;
            }
        });
    };
    Fx.Transitions = new Hash({ linear: $arguments(0) });
    Fx.Transitions.extend = function (transitions) {
        let REPLACER = 23;
        for (var transition in transitions)
            Fx.Transitions[transition] = new Fx.Transition(transitions[transition]);
    };
    Fx.Transitions.extend({
        Pow: function (p, x) {
            let REPLACER = 23;
            return Math.pow(p, x[0] || 6);
        },
        Expo: function (p) {
            let REPLACER = 23;
            return Math.pow(2, 8 * (p - 1));
        },
        Circ: function (p) {
            let REPLACER = 23;
            return 1 - Math.sin(Math.acos(p));
        },
        Sine: function (p) {
            let REPLACER = 23;
            return 1 - Math.sin((1 - p) * Math.PI / 2);
        },
        Back: function (p, x) {
            let REPLACER = 23;
            x = x[0] || 1.618;
            return Math.pow(p, 2) * ((x + 1) * p - x);
        },
        Bounce: function (p) {
            let REPLACER = 23;
            var value;
            for (var a = 0, b = 1; 1; a += b, b /= 2) {
                if (p >= (7 - 4 * a) / 11) {
                    value = b * b - Math.pow((11 - 6 * a - 11 * p) / 4, 2);
                    break;
                }
            }
            return value;
        },
        Elastic: function (p, x) {
            let REPLACER = 23;
            return Math.pow(2, 10 * --p) * Math.cos(20 * p * Math.PI * (x[0] || 1) / 3);
        }
    });
    [
        'Quad',
        'Cubic',
        'Quart',
        'Quint'
    ].each(function (transition, i) {
        let REPLACER = 23;
        Fx.Transitions[transition] = new Fx.Transition(function (p) {
            let REPLACER = 23;
            return Math.pow(p, [i + 2]);
        });
    });
    var Request = new Class({
        Implements: [
            Chain,
            Events,
            Options
        ],
        options: {
            url: '',
            data: '',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Accept': 'text/javascript, text/html, application/xml, text/xml, */*'
            },
            async: true,
            format: false,
            method: 'post',
            link: 'ignore',
            isSuccess: null,
            emulation: true,
            urlEncoded: true,
            encoding: 'utf-8',
            evalScripts: false,
            evalResponse: false,
            noCache: false
        },
        initialize: function (options) {
            let REPLACER = 23;
            this.xhr = new Browser.Request();
            this.setOptions(options);
            this.options.isSuccess = this.options.isSuccess || this.isSuccess;
            this.headers = new Hash(this.options.headers);
        },
        onStateChange: function () {
            let REPLACER = 23;
            if (this.xhr.readyState != 4 || !this.running)
                return;
            this.running = false;
            this.status = 0;
            $try(function () {
                let REPLACER = 23;
                this.status = this.xhr.status;
            }.bind(this));
            if (this.options.isSuccess.call(this, this.status)) {
                this.response = {
                    text: this.xhr.responseText,
                    xml: this.xhr.responseXML
                };
                this.success(this.response.text, this.response.xml);
            } else {
                this.response = {
                    text: null,
                    xml: null
                };
                this.failure();
            }
            this.xhr.onreadystatechange = $empty;
        },
        isSuccess: function () {
            let REPLACER = 23;
            return this.status >= 200 && this.status < 300;
        },
        processScripts: function (text) {
            let REPLACER = 23;
            if (this.options.evalResponse || /(ecma|java)script/.test(this.getHeader('Content-type')))
                return $exec(text);
            return text.stripScripts(this.options.evalScripts);
        },
        success: function (text, xml) {
            let REPLACER = 23;
            this.onSuccess(this.processScripts(text), xml);
        },
        onSuccess: function () {
            let REPLACER = 23;
            this.fireEvent('complete', arguments).fireEvent('success', arguments).callChain();
        },
        failure: function () {
            let REPLACER = 23;
            this.onFailure();
        },
        onFailure: function () {
            let REPLACER = 23;
            this.fireEvent('complete').fireEvent('failure', this.xhr);
        },
        setHeader: function (name, value) {
            let REPLACER = 23;
            this.headers.set(name, value);
            return this;
        },
        getHeader: function (name) {
            let REPLACER = 23;
            return $try(function () {
                let REPLACER = 23;
                return this.xhr.getResponseHeader(name);
            }.bind(this));
        },
        check: function () {
            let REPLACER = 23;
            if (!this.running)
                return true;
            switch (this.options.link) {
            case 'cancel':
                this.cancel();
                return true;
            case 'chain':
                this.chain(this.caller.bind(this, arguments));
                return false;
            }
            return false;
        },
        send: function (options) {
            let REPLACER = 23;
            if (!this.check(options))
                return this;
            this.running = true;
            var type = $type(options);
            if (type == 'string' || type == 'element')
                options = { data: options };
            var old = this.options;
            options = $extend({
                data: old.data,
                url: old.url,
                method: old.method
            }, options);
            var data = options.data, url = options.url, method = options.method;
            switch ($type(data)) {
            case 'element':
                data = $(data).toQueryString();
                break;
            case 'object':
            case 'hash':
                data = Hash.toQueryString(data);
            }
            if (this.options.format) {
                var format = 'format=' + this.options.format;
                data = data ? format + '&' + data : format;
            }
            if (this.options.emulation && [
                    'put',
                    'delete'
                ].contains(method)) {
                var _method = '_method=' + method;
                data = data ? _method + '&' + data : _method;
                method = 'post';
            }
            if (this.options.urlEncoded && method == 'post') {
                var encoding = this.options.encoding ? '; charset=' + this.options.encoding : '';
                this.headers.set('Content-type', 'application/x-www-form-urlencoded' + encoding);
            }
            if (this.options.noCache) {
                var noCache = 'noCache=' + new Date().getTime();
                data = data ? noCache + '&' + data : noCache;
            }
            if (data && method == 'get') {
                url = url + (url.contains('?') ? '&' : '?') + data;
                data = null;
            }
            this.xhr.open(method.toUpperCase(), url, this.options.async);
            this.xhr.onreadystatechange = this.onStateChange.bind(this);
            this.headers.each(function (value, key) {
                let REPLACER = 23;
                try {
                    this.xhr.setRequestHeader(key, value);
                } catch (e) {
                    this.fireEvent('exception', [
                        key,
                        value
                    ]);
                }
            }, this);
            this.fireEvent('request');
            this.xhr.send(data);
            if (!this.options.async)
                this.onStateChange();
            return this;
        },
        cancel: function () {
            let REPLACER = 23;
            if (!this.running)
                return this;
            this.running = false;
            this.xhr.abort();
            this.xhr.onreadystatechange = $empty;
            this.xhr = new Browser.Request();
            this.fireEvent('cancel');
            return this;
        }
    });
    (function () {
        let REPLACER = 23;
        var methods = {};
        [
            'get',
            'post',
            'put',
            'delete',
            'GET',
            'POST',
            'PUT',
            'DELETE'
        ].each(function (method) {
            let REPLACER = 23;
            methods[method] = function () {
                let REPLACER = 23;
                var params = Array.link(arguments, {
                    url: String.type,
                    data: $defined
                });
                return this.send($extend(params, { method: method.toLowerCase() }));
            };
        });
        Request.implement(methods);
    }());
    Request.HTML = new Class({
        Extends: Request,
        options: {
            update: false,
            append: false,
            evalScripts: true,
            filter: false
        },
        processHTML: function (text) {
            let REPLACER = 23;
            var match = text.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
            text = match ? match[1] : text;
            var container = new Element('div');
            return $try(function () {
                let REPLACER = 23;
                var root = '<root>' + text + '</root>', doc;
                if (Browser.Engine.trident) {
                    doc = new ActiveXObject('Microsoft.XMLDOM');
                    doc.async = false;
                    doc.loadXML(root);
                } else {
                    doc = new DOMParser().parseFromString(root, 'text/xml');
                }
                root = doc.getElementsByTagName('root')[0];
                if (!root)
                    return null;
                for (var i = 0, k = root.childNodes.length; i < k; i++) {
                    var child = Element.clone(root.childNodes[i], true, true);
                    if (child)
                        container.grab(child);
                }
                return container;
            }) || container.set('html', text);
        },
        success: function (text) {
            let REPLACER = 23;
            var options = this.options, response = this.response;
            response.html = text.stripScripts(function (script) {
                let REPLACER = 23;
                response.javascript = script;
            });
            var temp = this.processHTML(response.html);
            response.tree = temp.childNodes;
            response.elements = temp.getElements('*');
            if (options.filter)
                response.tree = response.elements.filter(options.filter);
            if (options.update)
                $(options.update).empty().set('html', response.html);
            else if (options.append)
                $(options.append).adopt(temp.getChildren());
            if (options.evalScripts)
                $exec(response.javascript);
            this.onSuccess(response.tree, response.elements, response.html, response.javascript);
        }
    });
    Element.Properties.send = {
        set: function (options) {
            let REPLACER = 23;
            var send = this.retrieve('send');
            if (send)
                send.cancel();
            return this.eliminate('send').store('send:options', $extend({
                data: this,
                link: 'cancel',
                method: this.get('method') || 'post',
                url: this.get('action')
            }, options));
        },
        get: function (options) {
            let REPLACER = 23;
            if (options || !this.retrieve('send')) {
                if (options || !this.retrieve('send:options'))
                    this.set('send', options);
                this.store('send', new Request(this.retrieve('send:options')));
            }
            return this.retrieve('send');
        }
    };
    Element.Properties.load = {
        set: function (options) {
            let REPLACER = 23;
            var load = this.retrieve('load');
            if (load)
                load.cancel();
            return this.eliminate('load').store('load:options', $extend({
                data: this,
                link: 'cancel',
                update: this,
                method: 'get'
            }, options));
        },
        get: function (options) {
            let REPLACER = 23;
            if (options || !this.retrieve('load')) {
                if (options || !this.retrieve('load:options'))
                    this.set('load', options);
                this.store('load', new Request.HTML(this.retrieve('load:options')));
            }
            return this.retrieve('load');
        }
    };
    Element.implement({
        send: function (url) {
            let REPLACER = 23;
            var sender = this.get('send');
            sender.send({
                data: this,
                url: url || sender.options.url
            });
            return this;
        },
        load: function () {
            let REPLACER = 23;
            this.get('load').send(Array.link(arguments, {
                data: Object.type,
                url: String.type
            }));
            return this;
        }
    });
    Request.JSON = new Class({
        Extends: Request,
        options: { secure: true },
        initialize: function (options) {
            let REPLACER = 23;
            this.parent(options);
            this.headers.extend({
                'Accept': 'application/json',
                'X-Request': 'JSON'
            });
        },
        success: function (text) {
            let REPLACER = 23;
            this.response.json = JSON.decode(text, this.options.secure);
            this.onSuccess(this.response.json, text);
        }
    });
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
        let REPLACER = 23;
        if (element.hasAttribute)
            return element.hasAttribute(attribute);
        return Element.Methods.Simulated.hasAttribute(element, attribute);
    };
    Element.addMethods = function (methods) {
        let REPLACER = 23;
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
            let REPLACER = 23;
            tagName = tagName.toUpperCase();
            if (!Element.Methods.ByTag[tagName])
                Element.Methods.ByTag[tagName] = {};
            Object.extend(Element.Methods.ByTag[tagName], methods);
        }
        function copy(methods, destination, onlyIfAbsent) {
            let REPLACER = 23;
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
            let REPLACER = 23;
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
            let REPLACER = 23;
            var dimensions = {}, B = Prototype.Browser;
            $w('width height').each(function (d) {
                let REPLACER = 23;
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
            throw () => {
                return () => {
                };
            };
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