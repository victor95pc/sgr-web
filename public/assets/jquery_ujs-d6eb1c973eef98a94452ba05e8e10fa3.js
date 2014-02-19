!function (t, e) {
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var a, n = t(document);
    t.rails = a = {linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]", buttonClickSelector: "button[data-remote]", inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]", formSubmitSelector: "form", formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])", disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]", enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled", requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])", fileInputSelector: "input[type=file]", linkDisableSelector: "a[data-disable-with]", CSRFProtection: function (e) {
        var a = t('meta[name="csrf-token"]').attr("content");
        a && e.setRequestHeader("X-CSRF-Token", a)
    }, fire: function (e, a, n) {
        var r = t.Event(a);
        return e.trigger(r, n), r.result !== !1
    }, confirm: function (t) {
        return confirm(t)
    }, ajax: function (e) {
        return t.ajax(e)
    }, href: function (t) {
        return t.attr("href")
    }, handleRemote: function (n) {
        var r, i, o, l, u, d, s, c;
        if (a.fire(n, "ajax:before")) {
            if (l = n.data("cross-domain"), u = l === e ? null : l, d = n.data("with-credentials") || null, s = n.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, n.is("form")) {
                r = n.attr("method"), i = n.attr("action"), o = n.serializeArray();
                var m = n.data("ujs:submit-button");
                m && (o.push(m), n.data("ujs:submit-button", null))
            } else n.is(a.inputChangeSelector) ? (r = n.data("method"), i = n.data("url"), o = n.serialize(), n.data("params") && (o = o + "&" + n.data("params"))) : n.is(a.buttonClickSelector) ? (r = n.data("method") || "get", i = n.data("url"), o = n.serialize(), n.data("params") && (o = o + "&" + n.data("params"))) : (r = n.data("method"), i = a.href(n), o = n.data("params") || null);
            c = {type: r || "GET", data: o, dataType: s, beforeSend: function (t, r) {
                return r.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), a.fire(n, "ajax:beforeSend", [t, r])
            }, success: function (t, e, a) {
                n.trigger("ajax:success", [t, e, a])
            }, complete: function (t, e) {
                n.trigger("ajax:complete", [t, e])
            }, error: function (t, e, a) {
                n.trigger("ajax:error", [t, e, a])
            }, crossDomain: u}, d && (c.xhrFields = {withCredentials: d}), i && (c.url = i);
            var f = a.ajax(c);
            return n.trigger("ajax:send", f), f
        }
        return!1
    }, handleMethod: function (n) {
        var r = a.href(n), i = n.data("method"), o = n.attr("target"), l = t("meta[name=csrf-token]").attr("content"), u = t("meta[name=csrf-param]").attr("content"), d = t('<form method="post" action="' + r + '"></form>'), s = '<input name="_method" value="' + i + '" type="hidden" />';
        u !== e && l !== e && (s += '<input name="' + u + '" value="' + l + '" type="hidden" />'), o && d.attr("target", o), d.hide().append(s).appendTo("body"), d.submit()
    }, disableFormElements: function (e) {
        e.find(a.disableSelector).each(function () {
            var e = t(this), a = e.is("button") ? "html" : "val";
            e.data("ujs:enable-with", e[a]()), e[a](e.data("disable-with")), e.prop("disabled", !0)
        })
    }, enableFormElements: function (e) {
        e.find(a.enableSelector).each(function () {
            var e = t(this), a = e.is("button") ? "html" : "val";
            e.data("ujs:enable-with") && e[a](e.data("ujs:enable-with")), e.prop("disabled", !1)
        })
    }, allowAction: function (t) {
        var e, n = t.data("confirm"), r = !1;
        return n ? (a.fire(t, "confirm") && (r = a.confirm(n), e = a.fire(t, "confirm:complete", [r])), r && e) : !0
    }, blankInputs: function (e, a, n) {
        var r, i, o = t(), l = a || "input,textarea", u = e.find(l);
        return u.each(function () {
            if (r = t(this), i = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : r.val(), !i == !n) {
                if (r.is("input[type=radio]") && u.filter('input[type=radio]:checked[name="' + r.attr("name") + '"]').length)return!0;
                o = o.add(r)
            }
        }), o.length ? o : !1
    }, nonBlankInputs: function (t, e) {
        return a.blankInputs(t, e, !0)
    }, stopEverything: function (e) {
        return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
    }, disableElement: function (t) {
        t.data("ujs:enable-with", t.html()), t.html(t.data("disable-with")), t.bind("click.railsDisable", function (t) {
            return a.stopEverything(t)
        })
    }, enableElement: function (t) {
        t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable")
    }}, a.fire(n, "rails:attachBindings") && (t.ajaxPrefilter(function (t, e, n) {
        t.crossDomain || a.CSRFProtection(n)
    }), n.delegate(a.linkDisableSelector, "ajax:complete", function () {
        a.enableElement(t(this))
    }), n.delegate(a.linkClickSelector, "click.rails", function (n) {
        var r = t(this), i = r.data("method"), o = r.data("params");
        if (!a.allowAction(r))return a.stopEverything(n);
        if (r.is(a.linkDisableSelector) && a.disableElement(r), r.data("remote") !== e) {
            if (!(!n.metaKey && !n.ctrlKey || i && "GET" !== i || o))return!0;
            var l = a.handleRemote(r);
            return l === !1 ? a.enableElement(r) : l.error(function () {
                a.enableElement(r)
            }), !1
        }
        return r.data("method") ? (a.handleMethod(r), !1) : void 0
    }), n.delegate(a.buttonClickSelector, "click.rails", function (e) {
        var n = t(this);
        return a.allowAction(n) ? (a.handleRemote(n), !1) : a.stopEverything(e)
    }), n.delegate(a.inputChangeSelector, "change.rails", function (e) {
        var n = t(this);
        return a.allowAction(n) ? (a.handleRemote(n), !1) : a.stopEverything(e)
    }), n.delegate(a.formSubmitSelector, "submit.rails", function (n) {
        var r = t(this), i = r.data("remote") !== e, o = a.blankInputs(r, a.requiredInputSelector), l = a.nonBlankInputs(r, a.fileInputSelector);
        if (!a.allowAction(r))return a.stopEverything(n);
        if (o && r.attr("novalidate") == e && a.fire(r, "ajax:aborted:required", [o]))return a.stopEverything(n);
        if (i) {
            if (l) {
                setTimeout(function () {
                    a.disableFormElements(r)
                }, 13);
                var u = a.fire(r, "ajax:aborted:file", [l]);
                return u || setTimeout(function () {
                    a.enableFormElements(r)
                }, 13), u
            }
            return a.handleRemote(r), !1
        }
        setTimeout(function () {
            a.disableFormElements(r)
        }, 13)
    }), n.delegate(a.formInputClickSelector, "click.rails", function (e) {
        var n = t(this);
        if (!a.allowAction(n))return a.stopEverything(e);
        var r = n.attr("name"), i = r ? {name: r, value: n.val()} : null;
        n.closest("form").data("ujs:submit-button", i)
    }), n.delegate(a.formSubmitSelector, "ajax:beforeSend.rails", function (e) {
        this == e.target && a.disableFormElements(t(this))
    }), n.delegate(a.formSubmitSelector, "ajax:complete.rails", function (e) {
        this == e.target && a.enableFormElements(t(this))
    }), t(function () {
        var e = t("meta[name=csrf-token]").attr("content"), a = t("meta[name=csrf-param]").attr("content");
        t('form input[name="' + a + '"]').val(e)
    }))
}(jQuery);