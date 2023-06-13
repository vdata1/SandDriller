try {
    var TextSE = '[^<]+';
    var UntilHyphen = '[^-]*-';
    var Until2Hyphens = UntilHyphen + '([^-]' + UntilHyphen + ')*-';
    var CommentCE = Until2Hyphens + '>?';
    var UntilRSBs = '[^\\]]*\\]([^\\]]+\\])*\\]+';
    var CDATA_CE = UntilRSBs + '([^\\]>]' + UntilRSBs + ')*>';
    var S = '[ \\n\\t\\r]+';
    var NameStrt = '[A-Za-z_:]|[^\\x00-\\x7F]';
    var NameChar = '[A-Za-z0-9_:.-]|[^\\x00-\\x7F]';
    var Name = '(' + NameStrt + ')(' + NameChar + ')*';
    var QuoteSE = '"[^"]' + '*' + '"' + '|\'[^\']*\'';
    var DT_IdentSE = S + Name + '(' + S + '(' + Name + '|' + QuoteSE + '))*';
    var MarkupDeclCE = '([^\\]"\'><]+|' + QuoteSE + ')*>';
    var S1 = '[\\n\\r\\t ]';
    var UntilQMs = '[^?]*\\?+';
    var PI_Tail = '\\?>|' + S1 + UntilQMs + '([^>?]' + UntilQMs + ')*>';
    var DT_ItemSE = '<(!(--' + Until2Hyphens + '>|[^-]' + MarkupDeclCE + ')|\\?' + Name + '(' + PI_Tail + '))|%' + Name + ';|' + S;
    var DocTypeCE = DT_IdentSE + '(' + S + ')?(\\[(' + DT_ItemSE + ')*\\](' + S + ')?)?>?';
    var DeclCE = '--(' + CommentCE + ')?|\\[CDATA\\[(' + CDATA_CE + ')?|DOCTYPE(' + DocTypeCE + ')?';
    var PI_CE = Name + '(' + PI_Tail + ')?';
    var EndTagCE = Name + '(' + S + ')?>?';
    var AttValSE = '"[^<"]' + '*' + '"' + '|\'[^<\']*\'';
    var ElemTagCE = Name + '(' + S + Name + '(' + S + ')?=(' + S + ')?(' + AttValSE + '))*(' + S + ')?/?>?';
    var MarkupSPE = '<(!(' + DeclCE + ')?|\\?(' + PI_CE + ')?|/(' + EndTagCE + ')?|(' + ElemTagCE + ')?)';
    var XML_SPE = TextSE + '|' + MarkupSPE;
    var __patterns = [
        TextSE,
        UntilHyphen,
        Until2Hyphens,
        CommentCE,
        UntilRSBs,
        CDATA_CE,
        S,
        NameStrt,
        NameChar,
        Name,
        QuoteSE,
        DT_IdentSE,
        MarkupDeclCE,
        S1,
        UntilQMs,
        PI_Tail,
        DT_ItemSE,
        DocTypeCE,
        DeclCE,
        PI_CE,
        EndTagCE,
        AttValSE,
        ElemTagCE,
        MarkupSPE,
        XML_SPE
    ];
    var __html = '' + '<html xmlns="http://www.w3.org/1999/xhtml"\n' + '      xmlns:xlink="http://www.w3.org/XML/XLink/0.9">\n' + '  <head><title>Three Namespaces</title></head>\n' + '  <body>\n' + '    <h1 align="center">An Ellipse and a Rectangle</h1>\n' + '    <svg xmlns="http://www.w3.org/Graphics/SVG/SVG-19991203.dtd"\n' + '         width="12cm" height="10cm">\n' + '      <ellipse rx="110" ry="130" />\n' + '      <rect x="4cm" y="1cm" width="3cm" height="6cm" />\n' + '    </svg>\n' + '    <p xlink:type="simple" xlink:href="ellipses.html">\n' + '      More about ellipses\n' + '    </p>\n' + '    <p xlink:type="simple" xlink:href="rectangles.html">\n' + '      More about rectangles\n' + '    </p>\n' + '    <hr/>\n' + '    <p>Last Modified February 13, 2000</p>\n' + '  </body>\n' + '</html>';
    try {
        for (var index = 0; index < __patterns.length; index++) {
            var __re = new RegExp(__patterns[index]);
            __re.test(__html);
        }
    } catch (e) {
        $ERROR('#' + index + ': XML Shallow Parsing with Regular Expression: ' + __patterns[index]);
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