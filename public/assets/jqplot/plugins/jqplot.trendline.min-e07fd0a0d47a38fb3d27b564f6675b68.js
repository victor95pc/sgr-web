!function (e) {
    function n(e) {
        var n = null;
        if (e.trendline && e.trendline.show) {
            var t = e.trendline.label.toString();
            t && (n = {label: t, color: e.trendline.color})
        }
        return n
    }

    function t(n, t, i, r) {
        !this._type || "line" !== this._type && "bar" != this._type || (this.trendline = new e.jqplot.Trendline, r = r || {}, e.extend(!0, this.trendline, {color: this.color}, i.trendline, r.trendline), this.trendline.renderer.init.call(this.trendline, null))
    }

    function i(n, t) {
        if (t = e.extend(!0, {}, this.trendline, t), this.trendline && t.show) {
            var i, r = t.data || this.data;
            i = h(r, this.trendline.type);
            var l = t.gridData || this.renderer.makeGridData.call(this, i.data);
            this.trendline.renderer.draw.call(this.trendline, n, l, {showLine: !0, shadow: this.trendline.shadow})
        }
    }

    function r(e, n, t) {
        var i, r, l = null == t ? "linear" : t, s = e.length, h = 0, o = 0, a = 0, d = 0, p = 0, u = [], f = [];
        if ("linear" == l)f = e, u = n; else if ("exp" == l || "exponential" == l)for (var c = 0; c < n.length; c++)n[c] <= 0 ? s-- : (f.push(e[c]), u.push(Math.log(n[c])));
        for (var c = 0; s > c; c++)h += f[c], o += u[c], d += f[c] * u[c], a += f[c] * f[c], p += u[c] * u[c];
        return i = (s * d - h * o) / (s * a - h * h), r = (o - i * h) / s, [i, r]
    }

    function l(e, n) {
        var t;
        return t = r(e, n, "linear"), [t[0], t[1]]
    }

    function s(e, n) {
        var t, i = e, l = n;
        t = r(i, l, "exp");
        var s = Math.exp(t[0]), h = Math.exp(t[1]);
        return[s, h]
    }

    function h(e, n) {
        var t, i, r = null == n ? "linear" : n, h = [], o = [], a = [];
        for (d = 0; d < e.length; d++)null != e[d] && null != e[d][0] && null != e[d][1] && (h.push(e[d][0]), o.push(e[d][1]));
        if ("linear" == r) {
            t = l(h, o);
            for (var d = 0; d < h.length; d++)i = t[0] * h[d] + t[1], a.push([h[d], i])
        } else if ("exp" == r || "exponential" == r) {
            t = s(h, o);
            for (var d = 0; d < h.length; d++)i = t[1] * Math.pow(t[0], h[d]), a.push([h[d], i])
        }
        return{data: a, slope: t[0], intercept: t[1]}
    }

    e.jqplot.Trendline = function () {
        this.show = e.jqplot.config.enablePlugins, this.color = "#666666", this.renderer = new e.jqplot.LineRenderer, this.rendererOptions = {marker: {show: !1}}, this.label = "", this.type = "linear", this.shadow = !0, this.markerRenderer = {show: !1}, this.lineWidth = 1.5, this.shadowAngle = 45, this.shadowOffset = 1, this.shadowAlpha = .07, this.shadowDepth = 3, this.isTrendline = !0
    }, e.jqplot.postSeriesInitHooks.push(t), e.jqplot.postDrawSeriesHooks.push(i), e.jqplot.addLegendRowHooks.push(n)
}(jQuery);