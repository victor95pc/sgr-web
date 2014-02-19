var xmlJsonClass = {xml2json: function (e, t) {
    9 === e.nodeType && (e = e.documentElement);
    var n = this.removeWhite(e), i = this.toObj(n), r = this.toJson(i, e.nodeName, "	");
    return"{\n" + t + (t ? r.replace(/\t/g, t) : r.replace(/\t|\n/g, "")) + "\n}"
}, json2xml: function (e, t) {
    var n, i = function (e, t, n) {
        var r, o, a = "";
        if (e instanceof Array)if (0 === e.length)a += n + "<" + t + ">__EMPTY_ARRAY_</" + t + ">\n"; else for (r = 0, o = e.length; o > r; r += 1) {
            var l = n + i(e[r], t, n + "	") + "\n";
            a += l
        } else if ("object" == typeof e) {
            var s = !1;
            a += n + "<" + t;
            var f;
            for (f in e)e.hasOwnProperty(f) && ("@" === f.charAt(0) ? a += " " + f.substr(1) + '="' + e[f].toString() + '"' : s = !0);
            if (a += s ? ">" : "/>", s) {
                for (f in e)e.hasOwnProperty(f) && ("#text" === f ? a += e[f] : "#cdata" === f ? a += "<![CDATA[" + e[f] + "]]>" : "@" !== f.charAt(0) && (a += i(e[f], f, n + "	")));
                a += ("\n" === a.charAt(a.length - 1) ? n : "") + "</" + t + ">"
            }
        } else"function" == typeof e ? a += n + "<" + t + "><![CDATA[" + e + "]]></" + t + ">" : (void 0 === e && (e = ""), a += '""' === e.toString() || 0 === e.toString().length ? n + "<" + t + ">__EMPTY_STRING_</" + t + ">" : n + "<" + t + ">" + e.toString() + "</" + t + ">");
        return a
    }, r = "";
    for (n in e)e.hasOwnProperty(n) && (r += i(e[n], n, ""));
    return t ? r.replace(/\t/g, t) : r.replace(/\t|\n/g, "")
}, toObj: function (e) {
    var t = {}, n = /function/i;
    if (1 === e.nodeType) {
        if (e.attributes.length) {
            var i;
            for (i = 0; i < e.attributes.length; i += 1)t["@" + e.attributes[i].nodeName] = (e.attributes[i].nodeValue || "").toString()
        }
        if (e.firstChild) {
            var r, o = 0, a = 0, l = !1;
            for (r = e.firstChild; r; r = r.nextSibling)1 === r.nodeType ? l = !0 : 3 === r.nodeType && r.nodeValue.match(/[^ \f\n\r\t\v]/) ? o += 1 : 4 === r.nodeType && (a += 1);
            if (l)if (2 > o && 2 > a)for (this.removeWhite(e), r = e.firstChild; r; r = r.nextSibling)3 === r.nodeType ? t["#text"] = this.escape(r.nodeValue) : 4 === r.nodeType ? n.test(r.nodeValue) ? t[r.nodeName] = [t[r.nodeName], r.nodeValue] : t["#cdata"] = this.escape(r.nodeValue) : t[r.nodeName] ? t[r.nodeName]instanceof Array ? t[r.nodeName][t[r.nodeName].length] = this.toObj(r) : t[r.nodeName] = [t[r.nodeName], this.toObj(r)] : t[r.nodeName] = this.toObj(r); else e.attributes.length ? t["#text"] = this.escape(this.innerXml(e)) : t = this.escape(this.innerXml(e)); else if (o)e.attributes.length ? t["#text"] = this.escape(this.innerXml(e)) : (t = this.escape(this.innerXml(e)), "__EMPTY_ARRAY_" === t ? t = "[]" : "__EMPTY_STRING_" === t && (t = "")); else if (a)if (a > 1)t = this.escape(this.innerXml(e)); else for (r = e.firstChild; r; r = r.nextSibling) {
                if (n.test(e.firstChild.nodeValue)) {
                    t = e.firstChild.nodeValue;
                    break
                }
                t["#cdata"] = this.escape(r.nodeValue)
            }
        }
        e.attributes.length || e.firstChild || (t = null)
    } else 9 === e.nodeType ? t = this.toObj(e.documentElement) : alert("unhandled node type: " + e.nodeType);
    return t
}, toJson: function (e, t, n, i) {
    void 0 === i && (i = !0);
    var r = t ? '"' + t + '"' : "", o = "	", a = "\n";
    if (i || (o = "", a = ""), "[]" === e)r += t ? ":[]" : "[]"; else if (e instanceof Array) {
        var l, s, f = [];
        for (s = 0, l = e.length; l > s; s += 1)f[s] = this.toJson(e[s], "", n + o, i);
        r += (t ? ":[" : "[") + (f.length > 1 ? a + n + o + f.join("," + a + n + o) + a + n : f.join("")) + "]"
    } else if (null === e)r += (t && ":") + "null"; else if ("object" == typeof e) {
        var h, d = [];
        for (h in e)e.hasOwnProperty(h) && (d[d.length] = this.toJson(e[h], h, n + o, i));
        r += (t ? ":{" : "{") + (d.length > 1 ? a + n + o + d.join("," + a + n + o) + a + n : d.join("")) + "}"
    } else r += "string" == typeof e ? (t && ":") + '"' + e.replace(/\\/g, "\\\\").replace(/\"/g, '\\"') + '"' : (t && ":") + e.toString();
    return r
}, innerXml: function (e) {
    var t = "";
    if ("innerHTML"in e)t = e.innerHTML; else for (var n = function (e) {
        var t, i = "";
        if (1 === e.nodeType) {
            for (i += "<" + e.nodeName, t = 0; t < e.attributes.length; t += 1)i += " " + e.attributes[t].nodeName + '="' + (e.attributes[t].nodeValue || "").toString() + '"';
            if (e.firstChild) {
                i += ">";
                for (var r = e.firstChild; r; r = r.nextSibling)i += n(r);
                i += "</" + e.nodeName + ">"
            } else i += "/>"
        } else 3 === e.nodeType ? i += e.nodeValue : 4 === e.nodeType && (i += "<![CDATA[" + e.nodeValue + "]]>");
        return i
    }, i = e.firstChild; i; i = i.nextSibling)t += n(i);
    return t
}, escape: function (e) {
    return e.replace(/[\\]/g, "\\\\").replace(/[\"]/g, '\\"').replace(/[\n]/g, "\\n").replace(/[\r]/g, "\\r")
}, removeWhite: function (e) {
    e.normalize();
    var t;
    for (t = e.firstChild; t;)if (3 === t.nodeType)if (t.nodeValue.match(/[^ \f\n\r\t\v]/))t = t.nextSibling; else {
        var n = t.nextSibling;
        e.removeChild(t), t = n
    } else 1 === t.nodeType ? (this.removeWhite(t), t = t.nextSibling) : t = t.nextSibling;
    return e
}};