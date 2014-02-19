!function (i) {
    function t() {
        if ("horizontal" == this.rendererOptions.barDirection && (this._stackAxis = "x", this._primaryAxis = "_yaxis"), 1 == this.rendererOptions.waterfall) {
            this._data = i.extend(!0, [], this.data);
            for (var t = 0, s = this.rendererOptions.barDirection && "vertical" !== this.rendererOptions.barDirection && this.transposedData !== !1 ? 0 : 1, e = 0; e < this.data.length; e++)t += this.data[e][s], e > 0 && (this.data[e][s] += this.data[e - 1][s]);
            this.data[this.data.length] = 1 == s ? [this.data.length + 1, t] : [t, this.data.length + 1], this._data[this._data.length] = 1 == s ? [this._data.length + 1, t] : [t, this._data.length + 1]
        }
        if (this.rendererOptions.groups > 1) {
            this.breakOnNull = !0;
            for (var h = this.data.length, r = parseInt(h / this.rendererOptions.groups, 10), a = 0, e = r; h > e; e += r)this.data.splice(e + a, 0, [null, null]), this._plotData.splice(e + a, 0, [null, null]), this._stackData.splice(e + a, 0, [null, null]), a++;
            for (e = 0; e < this.data.length; e++)"_xaxis" == this._primaryAxis ? (this.data[e][0] = e + 1, this._plotData[e][0] = e + 1, this._stackData[e][0] = e + 1) : (this.data[e][1] = e + 1, this._plotData[e][1] = e + 1, this._stackData[e][1] = e + 1)
        }
    }

    function s(i, t, e, h, r) {
        var a, n, l = i, o = i - 1, d = "x" === r ? 0 : 1;
        return l > 0 ? (n = h.series[o]._plotData[t][d], a = 0 > e * n ? s(o, t, e, h, r) : h.series[o].gridData[t][d]) : a = 0 === d ? h.series[l]._xaxis.series_u2p(0) : h.series[l]._yaxis.series_u2p(0), a
    }

    function e() {
        for (var t = 0; t < this.series.length; t++)this.series[t].renderer.constructor == i.jqplot.BarRenderer && this.series[t].highlightMouseOver && (this.series[t].highlightMouseDown = !1)
    }

    function h() {
        this.plugins.barRenderer && this.plugins.barRenderer.highlightCanvas && (this.plugins.barRenderer.highlightCanvas.resetCanvas(), this.plugins.barRenderer.highlightCanvas = null), this.plugins.barRenderer = {highlightedSeriesIndex: null}, this.plugins.barRenderer.highlightCanvas = new i.jqplot.GenericCanvas, this.eventCanvas._elem.before(this.plugins.barRenderer.highlightCanvas.createElement(this._gridPadding, "jqplot-barRenderer-highlight-canvas", this._plotDimensions, this)), this.plugins.barRenderer.highlightCanvas.setContext(), this.eventCanvas._elem.bind("mouseleave", {plot: this}, function (i) {
            a(i.data.plot)
        })
    }

    function r(i, t, s, e) {
        var h = i.series[t], r = i.plugins.barRenderer.highlightCanvas;
        r._ctx.clearRect(0, 0, r._ctx.canvas.width, r._ctx.canvas.height), h._highlightedPoint = s, i.plugins.barRenderer.highlightedSeriesIndex = t;
        var a = {fillStyle: h.highlightColors[s]};
        h.renderer.shapeRenderer.draw(r._ctx, e, a), r = null
    }

    function a(i) {
        var t = i.plugins.barRenderer.highlightCanvas;
        t._ctx.clearRect(0, 0, t._ctx.canvas.width, t._ctx.canvas.height);
        for (var s = 0; s < i.series.length; s++)i.series[s]._highlightedPoint = null;
        i.plugins.barRenderer.highlightedSeriesIndex = null, i.target.trigger("jqplotDataUnhighlight"), t = null
    }

    function n(i, t, s, e, h) {
        if (e) {
            var n = [e.seriesIndex, e.pointIndex, e.data], l = jQuery.Event("jqplotDataMouseOver");
            if (l.pageX = i.pageX, l.pageY = i.pageY, h.target.trigger(l, n), h.series[n[0]].show && h.series[n[0]].highlightMouseOver && (n[0] != h.plugins.barRenderer.highlightedSeriesIndex || n[1] != h.series[n[0]]._highlightedPoint)) {
                var o = jQuery.Event("jqplotDataHighlight");
                o.which = i.which, o.pageX = i.pageX, o.pageY = i.pageY, h.target.trigger(o, n), r(h, e.seriesIndex, e.pointIndex, e.points)
            }
        } else null == e && a(h)
    }

    function l(i, t, s, e, h) {
        if (e) {
            var n = [e.seriesIndex, e.pointIndex, e.data];
            if (h.series[n[0]].highlightMouseDown && (n[0] != h.plugins.barRenderer.highlightedSeriesIndex || n[1] != h.series[n[0]]._highlightedPoint)) {
                var l = jQuery.Event("jqplotDataHighlight");
                l.which = i.which, l.pageX = i.pageX, l.pageY = i.pageY, h.target.trigger(l, n), r(h, e.seriesIndex, e.pointIndex, e.points)
            }
        } else null == e && a(h)
    }

    function o(i, t, s, e, h) {
        var r = h.plugins.barRenderer.highlightedSeriesIndex;
        null != r && h.series[r].highlightMouseDown && a(h)
    }

    function d(i, t, s, e, h) {
        if (e) {
            var r = [e.seriesIndex, e.pointIndex, e.data], a = jQuery.Event("jqplotDataClick");
            a.which = i.which, a.pageX = i.pageX, a.pageY = i.pageY, h.target.trigger(a, r)
        }
    }

    function g(i, t, s, e, h) {
        if (e) {
            var r = [e.seriesIndex, e.pointIndex, e.data], n = h.plugins.barRenderer.highlightedSeriesIndex;
            null != n && h.series[n].highlightMouseDown && a(h);
            var l = jQuery.Event("jqplotDataRightClick");
            l.which = i.which, l.pageX = i.pageX, l.pageY = i.pageY, h.target.trigger(l, r)
        }
    }

    i.jqplot.BarRenderer = function () {
        i.jqplot.LineRenderer.call(this)
    }, i.jqplot.BarRenderer.prototype = new i.jqplot.LineRenderer, i.jqplot.BarRenderer.prototype.constructor = i.jqplot.BarRenderer, i.jqplot.BarRenderer.prototype.init = function (t, s) {
        this.barPadding = 8, this.barMargin = 10, this.barDirection = "vertical", this.barWidth = null, this.shadowOffset = 2, this.shadowDepth = 5, this.shadowAlpha = .08, this.waterfall = !1, this.groups = 1, this.varyBarColor = !1, this.highlightMouseOver = !0, this.highlightMouseDown = !1, this.highlightColors = [], this.transposedData = !0, this.renderer.animation = {show: !1, direction: "down", speed: 3e3, _supported: !0}, this._type = "bar", t.highlightMouseDown && null == t.highlightMouseOver && (t.highlightMouseOver = !1), i.extend(!0, this, t), i.extend(!0, this.renderer, t), this.fill = !0, "horizontal" === this.barDirection && this.rendererOptions.animation && null == this.rendererOptions.animation.direction && (this.renderer.animation.direction = "left"), this.waterfall && (this.fillToZero = !1, this.disableStack = !0), "vertical" == this.barDirection ? (this._primaryAxis = "_xaxis", this._stackAxis = "y", this.fillAxis = "y") : (this._primaryAxis = "_yaxis", this._stackAxis = "x", this.fillAxis = "x"), this._highlightedPoint = null, this._plotSeriesInfo = null, this._dataColors = [], this._barPoints = [];
        var r = {lineJoin: "miter", lineCap: "round", fill: !0, isarc: !1, strokeStyle: this.color, fillStyle: this.color, closePath: this.fill};
        this.renderer.shapeRenderer.init(r);
        var a = {lineJoin: "miter", lineCap: "round", fill: !0, isarc: !1, angle: this.shadowAngle, offset: this.shadowOffset, alpha: this.shadowAlpha, depth: this.shadowDepth, closePath: this.fill};
        this.renderer.shadowRenderer.init(a), s.postInitHooks.addOnce(e), s.postDrawHooks.addOnce(h), s.eventListenerHooks.addOnce("jqplotMouseMove", n), s.eventListenerHooks.addOnce("jqplotMouseDown", l), s.eventListenerHooks.addOnce("jqplotMouseUp", o), s.eventListenerHooks.addOnce("jqplotClick", d), s.eventListenerHooks.addOnce("jqplotRightClick", g)
    }, i.jqplot.preSeriesInitHooks.push(t), i.jqplot.BarRenderer.prototype.calcSeriesNumbers = function () {
        for (var t, s, e = 0, h = 0, r = this[this._primaryAxis], a = 0; a < r._series.length; a++)t = r._series[a], t === this && (s = a), t.renderer.constructor == i.jqplot.BarRenderer && (e += t.data.length, h += 1);
        return[e, h, s]
    }, i.jqplot.BarRenderer.prototype.setBarWidth = function () {
        var i = 0, t = 0, s = this[this._primaryAxis], e = this._plotSeriesInfo = this.renderer.calcSeriesNumbers.call(this);
        i = e[0], t = e[1];
        var h = s.numberTicks, r = (h - 1) / 2;
        return this.barWidth = "xaxis" == s.name || "x2axis" == s.name ? this._stack ? (s._offsets.max - s._offsets.min) / i * t - this.barMargin : ((s._offsets.max - s._offsets.min) / r - this.barPadding * (t - 1) - 2 * this.barMargin) / t : this._stack ? (s._offsets.min - s._offsets.max) / i * t - this.barMargin : ((s._offsets.min - s._offsets.max) / r - this.barPadding * (t - 1) - 2 * this.barMargin) / t, [i, t]
    }, i.jqplot.BarRenderer.prototype.draw = function (t, e, h, r) {
        {
            var a, n = i.extend({}, h), l = void 0 != n.shadow ? n.shadow : this.shadow, o = void 0 != n.showLine ? n.showLine : this.showLine;
            void 0 != n.fill ? n.fill : this.fill, this.xaxis, this.yaxis, this._xaxis.series_u2p, this._yaxis.series_u2p
        }
        this._dataColors = [], this._barPoints = [], null == this.barWidth && this.renderer.setBarWidth.call(this);
        var d = this._plotSeriesInfo = this.renderer.calcSeriesNumbers.call(this), g = (d[0], d[1]), p = d[2], u = [];
        if (this._barNudge = this._stack ? 0 : (-Math.abs(g / 2 - .5) + p) * (this.barWidth + this.barPadding), o) {
            var _ = new i.jqplot.ColorGenerator(this.negativeSeriesColors), c = new i.jqplot.ColorGenerator(this.seriesColors), f = _.get(this.index);
            this.useNegativeColors || (f = n.fillStyle);
            var x, v, b, w = n.fillStyle;
            if ("vertical" == this.barDirection) {
                for (var a = 0; a < e.length; a++)if (this._stack || null != this.data[a][1]) {
                    if (u = [], x = e[a][0] + this._barNudge, b = this._stack && this._prevGridData.length ? s(this.index, a, this._plotData[a][1], r, "y") : this.fillToZero ? this._yaxis.series_u2p(0) : this.waterfall && a > 0 && a < this.gridData.length - 1 ? this.gridData[a - 1][1] : this.waterfall && 0 == a && a < this.gridData.length - 1 ? this._yaxis.min <= 0 && this._yaxis.max >= 0 ? this._yaxis.series_u2p(0) : this._yaxis.min > 0 ? t.canvas.height : 0 : this.waterfall && a == this.gridData.length - 1 ? this._yaxis.min <= 0 && this._yaxis.max >= 0 ? this._yaxis.series_u2p(0) : this._yaxis.min > 0 ? t.canvas.height : 0 : t.canvas.height, n.fillStyle = this.fillToZero && this._plotData[a][1] < 0 || this.waterfall && this._data[a][1] < 0 ? this.varyBarColor && !this._stack ? this.useNegativeColors ? _.next() : c.next() : f : this.varyBarColor && !this._stack ? c.next() : w, !this.fillToZero || this._plotData[a][1] >= 0 ? (u.push([x - this.barWidth / 2, b]), u.push([x - this.barWidth / 2, e[a][1]]), u.push([x + this.barWidth / 2, e[a][1]]), u.push([x + this.barWidth / 2, b])) : (u.push([x - this.barWidth / 2, e[a][1]]), u.push([x - this.barWidth / 2, b]), u.push([x + this.barWidth / 2, b]), u.push([x + this.barWidth / 2, e[a][1]])), this._barPoints.push(u), l && !this._stack) {
                        var y = i.extend(!0, {}, n);
                        delete y.fillStyle, this.renderer.shadowRenderer.draw(t, u, y)
                    }
                    var D = n.fillStyle || this.color;
                    this._dataColors.push(D), this.renderer.shapeRenderer.draw(t, u, n)
                }
            } else if ("horizontal" == this.barDirection)for (var a = 0; a < e.length; a++)if (this._stack || null != this.data[a][0]) {
                if (u = [], x = e[a][1] - this._barNudge, v = this._stack && this._prevGridData.length ? s(this.index, a, this._plotData[a][0], r, "x") : this.fillToZero ? this._xaxis.series_u2p(0) : this.waterfall && a > 0 && a < this.gridData.length - 1 ? this.gridData[a - 1][0] : this.waterfall && 0 == a && a < this.gridData.length - 1 ? this._xaxis.min <= 0 && this._xaxis.max >= 0 ? this._xaxis.series_u2p(0) : this._xaxis.min > 0 ? 0 : 0 : this.waterfall && a == this.gridData.length - 1 ? this._xaxis.min <= 0 && this._xaxis.max >= 0 ? this._xaxis.series_u2p(0) : this._xaxis.min > 0 ? 0 : t.canvas.width : 0, n.fillStyle = this.fillToZero && this._plotData[a][0] < 0 || this.waterfall && this._data[a][0] < 0 ? this.varyBarColor && !this._stack ? this.useNegativeColors ? _.next() : c.next() : f : this.varyBarColor && !this._stack ? c.next() : w, !this.fillToZero || this._plotData[a][0] >= 0 ? (u.push([v, x + this.barWidth / 2]), u.push([v, x - this.barWidth / 2]), u.push([e[a][0], x - this.barWidth / 2]), u.push([e[a][0], x + this.barWidth / 2])) : (u.push([e[a][0], x + this.barWidth / 2]), u.push([e[a][0], x - this.barWidth / 2]), u.push([v, x - this.barWidth / 2]), u.push([v, x + this.barWidth / 2])), this._barPoints.push(u), l && !this._stack) {
                    var y = i.extend(!0, {}, n);
                    delete y.fillStyle, this.renderer.shadowRenderer.draw(t, u, y)
                }
                var D = n.fillStyle || this.color;
                this._dataColors.push(D), this.renderer.shapeRenderer.draw(t, u, n)
            }
        }
        if (0 == this.highlightColors.length)this.highlightColors = i.jqplot.computeHighlightColors(this._dataColors); else if ("string" == typeof this.highlightColors) {
            var d = this.highlightColors;
            this.highlightColors = [];
            for (var a = 0; a < this._dataColors.length; a++)this.highlightColors.push(d)
        }
    }, i.jqplot.BarRenderer.prototype.drawShadow = function (i, t, e, h) {
        {
            var r, a, n, l, o, d = void 0 != e ? e : {}, g = (void 0 != d.shadow ? d.shadow : this.shadow, void 0 != d.showLine ? d.showLine : this.showLine);
            void 0 != d.fill ? d.fill : this.fill, this.xaxis, this.yaxis, this._xaxis.series_u2p, this._yaxis.series_u2p
        }
        if (this._stack && this.shadow) {
            null == this.barWidth && this.renderer.setBarWidth.call(this);
            var p = this._plotSeriesInfo = this.renderer.calcSeriesNumbers.call(this);
            if (n = p[0], l = p[1], o = p[2], this._barNudge = this._stack ? 0 : (-Math.abs(l / 2 - .5) + o) * (this.barWidth + this.barPadding), g)if ("vertical" == this.barDirection) {
                for (var r = 0; r < t.length; r++)if (null != this.data[r][1]) {
                    a = [];
                    var u, _ = t[r][0] + this._barNudge;
                    u = this._stack && this._prevGridData.length ? s(this.index, r, this._plotData[r][1], h, "y") : this.fillToZero ? this._yaxis.series_u2p(0) : i.canvas.height, a.push([_ - this.barWidth / 2, u]), a.push([_ - this.barWidth / 2, t[r][1]]), a.push([_ + this.barWidth / 2, t[r][1]]), a.push([_ + this.barWidth / 2, u]), this.renderer.shadowRenderer.draw(i, a, d)
                }
            } else if ("horizontal" == this.barDirection)for (var r = 0; r < t.length; r++)if (null != this.data[r][0]) {
                a = [];
                var c, _ = t[r][1] - this._barNudge;
                c = this._stack && this._prevGridData.length ? s(this.index, r, this._plotData[r][0], h, "x") : this.fillToZero ? this._xaxis.series_u2p(0) : 0, a.push([c, _ + this.barWidth / 2]), a.push([t[r][0], _ + this.barWidth / 2]), a.push([t[r][0], _ - this.barWidth / 2]), a.push([c, _ - this.barWidth / 2]), this.renderer.shadowRenderer.draw(i, a, d)
            }
        }
    }
}(jQuery);