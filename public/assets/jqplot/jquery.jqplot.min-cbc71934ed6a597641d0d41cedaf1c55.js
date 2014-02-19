!function (t) {
    function e(e) {
        t.jqplot.ElemContainer.call(this), this.name = e, this._series = [], this.show = !1, this.tickRenderer = t.jqplot.AxisTickRenderer, this.tickOptions = {}, this.labelRenderer = t.jqplot.AxisLabelRenderer, this.labelOptions = {}, this.label = null, this.showLabel = !0, this.min = null, this.max = null, this.autoscale = !1, this.pad = 1.2, this.padMax = null, this.padMin = null, this.ticks = [], this.numberTicks, this.tickInterval, this.renderer = t.jqplot.LinearAxisRenderer, this.rendererOptions = {}, this.showTicks = !0, this.showTickMarks = !0, this.showMinorTicks = !0, this.drawMajorGridlines = !0, this.drawMinorGridlines = !1, this.drawMajorTickMarks = !0, this.drawMinorTickMarks = !0, this.useSeriesColor = !1, this.borderWidth = null, this.borderColor = null, this.scaleToHiddenSeries = !1, this._dataBounds = {min: null, max: null}, this._intervalStats = [], this._offsets = {min: null, max: null}, this._ticks = [], this._label = null, this.syncTicks = null, this.tickSpacing = 75, this._min = null, this._max = null, this._tickInterval = null, this._numberTicks = null, this.__ticks = null, this._options = {}
    }

    function i(e) {
        t.jqplot.ElemContainer.call(this), this.show = !1, this.location = "ne", this.labels = [], this.showLabels = !0, this.showSwatches = !0, this.placement = "insideGrid", this.xoffset = 0, this.yoffset = 0, this.border, this.background, this.textColor, this.fontFamily, this.fontSize, this.rowSpacing = "0.5em", this.renderer = t.jqplot.TableLegendRenderer, this.rendererOptions = {}, this.preDraw = !1, this.marginTop = null, this.marginRight = null, this.marginBottom = null, this.marginLeft = null, this.escapeHtml = !1, this._series = [], t.extend(!0, this, e)
    }

    function s(e) {
        t.jqplot.ElemContainer.call(this), this.text = e, this.show = !0, this.fontFamily, this.fontSize, this.textAlign, this.textColor, this.renderer = t.jqplot.DivTitleRenderer, this.rendererOptions = {}, this.escapeHtml = !1
    }

    function r(e) {
        e = e || {}, t.jqplot.ElemContainer.call(this), this.show = !0, this.xaxis = "xaxis", this._xaxis, this.yaxis = "yaxis", this._yaxis, this.gridBorderWidth = 2, this.renderer = t.jqplot.LineRenderer, this.rendererOptions = {}, this.data = [], this.gridData = [], this.label = "", this.showLabel = !0, this.color, this.negativeColor, this.lineWidth = 2.5, this.lineJoin = "round", this.lineCap = "round", this.linePattern = "solid", this.shadow = !0, this.shadowAngle = 45, this.shadowOffset = 1.25, this.shadowDepth = 3, this.shadowAlpha = "0.1", this.breakOnNull = !1, this.markerRenderer = t.jqplot.MarkerRenderer, this.markerOptions = {}, this.showLine = !0, this.showMarker = !0, this.index, this.fill = !1, this.fillColor, this.fillAlpha, this.fillAndStroke = !1, this.disableStack = !1, this._stack = !1, this.neighborThreshold = 4, this.fillToZero = !1, this.fillToValue = 0, this.fillAxis = "y", this.useNegativeColors = !0, this._stackData = [], this._plotData = [], this._plotValues = {x: [], y: []}, this._intervals = {x: {}, y: {}}, this._prevPlotData = [], this._prevGridData = [], this._stackAxis = "y", this._primaryAxis = "_xaxis", this.canvas = new t.jqplot.GenericCanvas, this.shadowCanvas = new t.jqplot.GenericCanvas, this.plugins = {}, this._sumy = 0, this._sumx = 0, this._type = ""
    }

    function a() {
        t.jqplot.ElemContainer.call(this), this.drawGridlines = !0, this.gridLineColor = "#cccccc", this.gridLineWidth = 1, this.background = "#fffdf6", this.borderColor = "#999999", this.borderWidth = 2, this.drawBorder = !0, this.shadow = !0, this.shadowAngle = 45, this.shadowOffset = 1.5, this.shadowWidth = 3, this.shadowDepth = 3, this.shadowColor = null, this.shadowAlpha = "0.07", this._left, this._top, this._right, this._bottom, this._width, this._height, this._axes = [], this.renderer = t.jqplot.CanvasGridRenderer, this.rendererOptions = {}, this._offsets = {top: null, bottom: null, left: null, right: null}
    }

    function n() {
        function o(t) {
            for (var e, i = 0; i < t.length; i++)for (var s, r = [t[i].data, t[i]._stackData, t[i]._plotData, t[i]._prevPlotData], a = 0; 4 > a; a++)if (s = !0, e = r[a], "x" == t[i]._stackAxis) {
                for (var n = 0; n < e.length; n++)if ("number" != typeof e[n][1]) {
                    s = !1;
                    break
                }
                s && e.sort(function (t, e) {
                    return t[1] - e[1]
                })
            } else {
                for (var n = 0; n < e.length; n++)if ("number" != typeof e[n][0]) {
                    s = !1;
                    break
                }
                s && e.sort(function (t, e) {
                    return t[0] - e[0]
                })
            }
        }

        function h(t) {
            var e, i, s = t.data.plot, r = s.eventCanvas._elem.offset(), a = {x: t.pageX - r.left, y: t.pageY - r.top}, n = {xaxis: null, yaxis: null, x2axis: null, y2axis: null, y3axis: null, y4axis: null, y5axis: null, y6axis: null, y7axis: null, y8axis: null, y9axis: null, yMidAxis: null}, o = ["xaxis", "yaxis", "x2axis", "y2axis", "y3axis", "y4axis", "y5axis", "y6axis", "y7axis", "y8axis", "y9axis", "yMidAxis"], h = s.axes;
            for (e = 11; e > 0; e--)i = o[e - 1], h[i].show && (n[i] = h[i].series_p2u(a[i.charAt(0)]));
            return{offsets: r, gridPos: a, dataPos: n}
        }

        function l(e, i) {
            function s(t, e, i) {
                var s = (e[1] - i[1]) / (e[0] - i[0]), r = e[1] - s * e[0], a = t + e[1];
                return[(a - r) / s, a]
            }

            var r, a, n, o, h, l, d, p, c, u, g, f, m, _, v, x, b, w, k, y = i.series;
            for (n = i.seriesStack.length - 1; n >= 0; n--)switch (r = i.seriesStack[n], o = y[r], b = o._highlightThreshold, o.renderer.constructor) {
                case t.jqplot.BarRenderer:
                    for (l = e.x, d = e.y, a = 0; a < o._barPoints.length; a++)if (x = o._barPoints[a], v = o.gridData[a], l > x[0][0] && l < x[2][0] && d > x[2][1] && d < x[0][1])return{seriesIndex: o.index, pointIndex: a, gridData: v, data: o.data[a], points: o._barPoints[a]};
                    break;
                case t.jqplot.PyramidRenderer:
                    for (l = e.x, d = e.y, a = 0; a < o._barPoints.length; a++)if (x = o._barPoints[a], v = o.gridData[a], l > x[0][0] + b[0][0] && l < x[2][0] + b[2][0] && d > x[2][1] && d < x[0][1])return{seriesIndex: o.index, pointIndex: a, gridData: v, data: o.data[a], points: o._barPoints[a]};
                    break;
                case t.jqplot.DonutRenderer:
                    if (u = o.startAngle / 180 * Math.PI, l = e.x - o._center[0], d = e.y - o._center[1], h = Math.sqrt(Math.pow(l, 2) + Math.pow(d, 2)), l > 0 && -d >= 0 ? p = 2 * Math.PI - Math.atan(-d / l) : l > 0 && 0 > -d ? p = -Math.atan(-d / l) : 0 > l ? p = Math.PI - Math.atan(-d / l) : 0 == l && -d > 0 ? p = 3 * Math.PI / 2 : 0 == l && 0 > -d ? p = Math.PI / 2 : 0 == l && 0 == d && (p = 0), u && (p -= u, 0 > p ? p += 2 * Math.PI : p > 2 * Math.PI && (p -= 2 * Math.PI)), c = o.sliceMargin / 180 * Math.PI, h < o._radius && h > o._innerRadius)for (a = 0; a < o.gridData.length; a++)if (g = a > 0 ? o.gridData[a - 1][1] + c : c, f = o.gridData[a][1], p > g && f > p)return{seriesIndex: o.index, pointIndex: a, gridData: [e.x, e.y], data: o.data[a]};
                    break;
                case t.jqplot.PieRenderer:
                    if (u = o.startAngle / 180 * Math.PI, l = e.x - o._center[0], d = e.y - o._center[1], h = Math.sqrt(Math.pow(l, 2) + Math.pow(d, 2)), l > 0 && -d >= 0 ? p = 2 * Math.PI - Math.atan(-d / l) : l > 0 && 0 > -d ? p = -Math.atan(-d / l) : 0 > l ? p = Math.PI - Math.atan(-d / l) : 0 == l && -d > 0 ? p = 3 * Math.PI / 2 : 0 == l && 0 > -d ? p = Math.PI / 2 : 0 == l && 0 == d && (p = 0), u && (p -= u, 0 > p ? p += 2 * Math.PI : p > 2 * Math.PI && (p -= 2 * Math.PI)), c = o.sliceMargin / 180 * Math.PI, h < o._radius)for (a = 0; a < o.gridData.length; a++)if (g = a > 0 ? o.gridData[a - 1][1] + c : c, f = o.gridData[a][1], p > g && f > p)return{seriesIndex: o.index, pointIndex: a, gridData: [e.x, e.y], data: o.data[a]};
                    break;
                case t.jqplot.BubbleRenderer:
                    l = e.x, d = e.y;
                    var j = null;
                    if (o.show) {
                        for (var a = 0; a < o.gridData.length; a++)v = o.gridData[a], _ = Math.sqrt((l - v[0]) * (l - v[0]) + (d - v[1]) * (d - v[1])), _ <= v[2] && (m >= _ || null == m) && (m = _, j = {seriesIndex: r, pointIndex: a, gridData: v, data: o.data[a]});
                        if (null != j)return j
                    }
                    break;
                case t.jqplot.FunnelRenderer:
                    l = e.x, d = e.y;
                    var D, M, S, q = o._vertices, C = q[0], R = q[q.length - 1];
                    for (D = s(d, C[0], R[3]), M = s(d, C[1], R[2]), a = 0; a < q.length; a++)if (S = q[a], d >= S[0][1] && d <= S[3][1] && l >= D[0] && l <= M[0])return{seriesIndex: o.index, pointIndex: a, gridData: null, data: o.data[a]};
                    break;
                case t.jqplot.LineRenderer:
                    if (l = e.x, d = e.y, h = o.renderer, o.show) {
                        if (!(!(o.fill || o.renderer.bands.show && o.renderer.bands.fill) || i.plugins.highlighter && i.plugins.highlighter.show)) {
                            var T = !1;
                            if (l > o._boundingBox[0][0] && l < o._boundingBox[1][0] && d > o._boundingBox[1][1] && d < o._boundingBox[0][1])for (var P, I = o._areaPoints.length, a = I - 1, P = 0; I > P; P++) {
                                var H = [o._areaPoints[P][0], o._areaPoints[P][1]], O = [o._areaPoints[a][0], o._areaPoints[a][1]];
                                (H[1] < d && O[1] >= d || O[1] < d && H[1] >= d) && H[0] + (d - H[1]) / (O[1] - H[1]) * (O[0] - H[0]) < l && (T = !T), a = P
                            }
                            if (T)return{seriesIndex: r, pointIndex: null, gridData: o.gridData, data: o.data, points: o._areaPoints};
                            break
                        }
                        k = o.markerRenderer.size / 2 + o.neighborThreshold, w = k > 0 ? k : 0;
                        for (var a = 0; a < o.gridData.length; a++)if (v = o.gridData[a], h.constructor == t.jqplot.OHLCRenderer)if (h.candleStick) {
                            var A = o._yaxis.series_u2p;
                            if (l >= v[0] - h._bodyWidth / 2 && l <= v[0] + h._bodyWidth / 2 && d >= A(o.data[a][2]) && d <= A(o.data[a][3]))return{seriesIndex: r, pointIndex: a, gridData: v, data: o.data[a]}
                        } else if (h.hlc) {
                            var A = o._yaxis.series_u2p;
                            if (l >= v[0] - h._tickLength && l <= v[0] + h._tickLength && d >= A(o.data[a][1]) && d <= A(o.data[a][2]))return{seriesIndex: r, pointIndex: a, gridData: v, data: o.data[a]}
                        } else {
                            var A = o._yaxis.series_u2p;
                            if (l >= v[0] - h._tickLength && l <= v[0] + h._tickLength && d >= A(o.data[a][2]) && d <= A(o.data[a][3]))return{seriesIndex: r, pointIndex: a, gridData: v, data: o.data[a]}
                        } else if (null != v[0] && null != v[1] && (_ = Math.sqrt((l - v[0]) * (l - v[0]) + (d - v[1]) * (d - v[1])), w >= _ && (m >= _ || null == m)))return m = _, {seriesIndex: r, pointIndex: a, gridData: v, data: o.data[a]}
                    }
                    break;
                default:
                    if (l = e.x, d = e.y, h = o.renderer, o.show) {
                        k = o.markerRenderer.size / 2 + o.neighborThreshold, w = k > 0 ? k : 0;
                        for (var a = 0; a < o.gridData.length; a++)if (v = o.gridData[a], h.constructor == t.jqplot.OHLCRenderer)if (h.candleStick) {
                            var A = o._yaxis.series_u2p;
                            if (l >= v[0] - h._bodyWidth / 2 && l <= v[0] + h._bodyWidth / 2 && d >= A(o.data[a][2]) && d <= A(o.data[a][3]))return{seriesIndex: r, pointIndex: a, gridData: v, data: o.data[a]}
                        } else if (h.hlc) {
                            var A = o._yaxis.series_u2p;
                            if (l >= v[0] - h._tickLength && l <= v[0] + h._tickLength && d >= A(o.data[a][1]) && d <= A(o.data[a][2]))return{seriesIndex: r, pointIndex: a, gridData: v, data: o.data[a]}
                        } else {
                            var A = o._yaxis.series_u2p;
                            if (l >= v[0] - h._tickLength && l <= v[0] + h._tickLength && d >= A(o.data[a][2]) && d <= A(o.data[a][3]))return{seriesIndex: r, pointIndex: a, gridData: v, data: o.data[a]}
                        } else if (_ = Math.sqrt((l - v[0]) * (l - v[0]) + (d - v[1]) * (d - v[1])), w >= _ && (m >= _ || null == m))return m = _, {seriesIndex: r, pointIndex: a, gridData: v, data: o.data[a]}
                    }
            }
            return null
        }

        this.animate = !1, this.animateReplot = !1, this.axes = {xaxis: new e("xaxis"), yaxis: new e("yaxis"), x2axis: new e("x2axis"), y2axis: new e("y2axis"), y3axis: new e("y3axis"), y4axis: new e("y4axis"), y5axis: new e("y5axis"), y6axis: new e("y6axis"), y7axis: new e("y7axis"), y8axis: new e("y8axis"), y9axis: new e("y9axis"), yMidAxis: new e("yMidAxis")}, this.baseCanvas = new t.jqplot.GenericCanvas, this.captureRightClick = !1, this.data = [], this.dataRenderer, this.dataRendererOptions, this.defaults = {axesDefaults: {}, axes: {xaxis: {}, yaxis: {}, x2axis: {}, y2axis: {}, y3axis: {}, y4axis: {}, y5axis: {}, y6axis: {}, y7axis: {}, y8axis: {}, y9axis: {}, yMidAxis: {}}, seriesDefaults: {}, series: []}, this.defaultAxisStart = 1, this.drawIfHidden = !1, this.eventCanvas = new t.jqplot.GenericCanvas, this.fillBetween = {series1: null, series2: null, color: null, baseSeries: 0, fill: !0}, this.fontFamily, this.fontSize, this.grid = new a, this.legend = new i, this.noDataIndicator = {show: !1, indicator: "Loading Data...", axes: {xaxis: {min: 0, max: 10, tickInterval: 2, show: !0}, yaxis: {min: 0, max: 12, tickInterval: 3, show: !0}}}, this.negativeSeriesColors = t.jqplot.config.defaultNegativeColors, this.options = {}, this.previousSeriesStack = [], this.plugins = {}, this.series = [], this.seriesStack = [], this.seriesColors = t.jqplot.config.defaultColors, this.sortData = !0, this.stackSeries = !1, this.syncXTicks = !0, this.syncYTicks = !0, this.target = null, this.targetId = null, this.textColor, this.title = new s, this._drawCount = 0, this._sumy = 0, this._sumx = 0, this._stackData = [], this._plotData = [], this._width = null, this._height = null, this._plotDimensions = {height: null, width: null}, this._gridPadding = {top: null, right: null, bottom: null, left: null}, this._defaultGridPadding = {top: 10, right: 10, bottom: 23, left: 10}, this._addDomReference = t.jqplot.config.addDomReference, this.preInitHooks = new t.jqplot.HooksManager, this.postInitHooks = new t.jqplot.HooksManager, this.preParseOptionsHooks = new t.jqplot.HooksManager, this.postParseOptionsHooks = new t.jqplot.HooksManager, this.preDrawHooks = new t.jqplot.HooksManager, this.postDrawHooks = new t.jqplot.HooksManager, this.preDrawSeriesHooks = new t.jqplot.HooksManager, this.postDrawSeriesHooks = new t.jqplot.HooksManager, this.preDrawLegendHooks = new t.jqplot.HooksManager, this.addLegendRowHooks = new t.jqplot.HooksManager, this.preSeriesInitHooks = new t.jqplot.HooksManager, this.postSeriesInitHooks = new t.jqplot.HooksManager, this.preParseSeriesOptionsHooks = new t.jqplot.HooksManager, this.postParseSeriesOptionsHooks = new t.jqplot.HooksManager, this.eventListenerHooks = new t.jqplot.EventListenerManager, this.preDrawSeriesShadowHooks = new t.jqplot.HooksManager, this.postDrawSeriesShadowHooks = new t.jqplot.HooksManager, this.colorGenerator = new t.jqplot.ColorGenerator, this.negativeColorGenerator = new t.jqplot.ColorGenerator, this.canvasManager = new t.jqplot.CanvasManager, this.themeEngine = new t.jqplot.ThemeEngine;
        this.init = function (i, s, r) {
            r = r || {};
            for (var a = 0; a < t.jqplot.preInitHooks.length; a++)t.jqplot.preInitHooks[a].call(this, i, s, r);
            for (var a = 0; a < this.preInitHooks.hooks.length; a++)this.preInitHooks.hooks[a].call(this, i, s, r);
            if (this.targetId = "#" + i, this.target = t("#" + i), this._addDomReference && this.target.data("jqplot", this), this.target.removeClass("jqplot-error"), !this.target.get(0))throw new Error("No plot target specified");
            if ("static" == this.target.css("position") && this.target.css("position", "relative"), this.target.hasClass("jqplot-target") || this.target.addClass("jqplot-target"), this.target.height())this._height = n = this.target.height(); else {
                var n;
                n = r && r.height ? parseInt(r.height, 10) : this.target.attr("data-height") ? parseInt(this.target.attr("data-height"), 10) : parseInt(t.jqplot.config.defaultHeight, 10), this._height = n, this.target.css("height", n + "px")
            }
            if (this.target.width())this._width = h = this.target.width(); else {
                var h;
                h = r && r.width ? parseInt(r.width, 10) : this.target.attr("data-width") ? parseInt(this.target.attr("data-width"), 10) : parseInt(t.jqplot.config.defaultWidth, 10), this._width = h, this.target.css("width", h + "px")
            }
            for (var a = 0, l = P.length; l > a; a++)this.axes[P[a]] = new e(P[a]);
            if (this._plotDimensions.height = this._height, this._plotDimensions.width = this._width, this.grid._plotDimensions = this._plotDimensions, this.title._plotDimensions = this._plotDimensions, this.baseCanvas._plotDimensions = this._plotDimensions, this.eventCanvas._plotDimensions = this._plotDimensions, this.legend._plotDimensions = this._plotDimensions, this._height <= 0 || this._width <= 0 || !this._height || !this._width)throw new Error("Canvas dimension not set");
            if (r.dataRenderer && t.isFunction(r.dataRenderer) && (r.dataRendererOptions && (this.dataRendererOptions = r.dataRendererOptions), this.dataRenderer = r.dataRenderer, s = this.dataRenderer(s, this, this.dataRendererOptions)), r.noDataIndicator && t.isPlainObject(r.noDataIndicator) && t.extend(!0, this.noDataIndicator, r.noDataIndicator), null == s || 0 == t.isArray(s) || 0 == s.length || 0 == t.isArray(s[0]) || 0 == s[0].length) {
                if (0 == this.noDataIndicator.show)throw new Error("No data specified");
                for (var d in this.noDataIndicator.axes)for (var p in this.noDataIndicator.axes[d])this.axes[d][p] = this.noDataIndicator.axes[d][p];
                this.postDrawHooks.add(function () {
                    var e = this.eventCanvas.getHeight(), i = this.eventCanvas.getWidth(), s = t('<div class="jqplot-noData-container" style="position:absolute;"></div>');
                    this.target.append(s), s.height(e), s.width(i), s.css("top", this.eventCanvas._offsets.top), s.css("left", this.eventCanvas._offsets.left);
                    var r = t('<div class="jqplot-noData-contents" style="text-align:center; position:relative; margin-left:auto; margin-right:auto;"></div>');
                    s.append(r), r.html(this.noDataIndicator.indicator);
                    var a = r.height(), n = r.width();
                    r.height(a), r.width(n), r.css("top", (e - a) / 2 + "px")
                })
            }
            this.data = t.extend(!0, [], s), this.parseOptions(r), this.textColor && this.target.css("color", this.textColor), this.fontFamily && this.target.css("font-family", this.fontFamily), this.fontSize && this.target.css("font-size", this.fontSize), this.title.init(), this.legend.init(), this._sumy = 0, this._sumx = 0, this.computePlotData();
            for (var a = 0; a < this.series.length; a++) {
                this.seriesStack.push(a), this.previousSeriesStack.push(a), this.series[a].shadowCanvas._plotDimensions = this._plotDimensions, this.series[a].canvas._plotDimensions = this._plotDimensions;
                for (var c = 0; c < t.jqplot.preSeriesInitHooks.length; c++)t.jqplot.preSeriesInitHooks[c].call(this.series[a], i, this.data, this.options.seriesDefaults, this.options.series[a], this);
                for (var c = 0; c < this.preSeriesInitHooks.hooks.length; c++)this.preSeriesInitHooks.hooks[c].call(this.series[a], i, this.data, this.options.seriesDefaults, this.options.series[a], this);
                this.series[a]._plotDimensions = this._plotDimensions, this.series[a].init(a, this.grid.borderWidth, this);
                for (var c = 0; c < t.jqplot.postSeriesInitHooks.length; c++)t.jqplot.postSeriesInitHooks[c].call(this.series[a], i, this.data, this.options.seriesDefaults, this.options.series[a], this);
                for (var c = 0; c < this.postSeriesInitHooks.hooks.length; c++)this.postSeriesInitHooks.hooks[c].call(this.series[a], i, this.data, this.options.seriesDefaults, this.options.series[a], this);
                this._sumy += this.series[a]._sumy, this._sumx += this.series[a]._sumx
            }
            for (var u, g, a = 0, l = P.length; l > a; a++)u = P[a], g = this.axes[u], g._plotDimensions = this._plotDimensions, g.init(), null == this.axes[u].borderColor && (g.borderColor = "x" !== u.charAt(0) && g.useSeriesColor === !0 && g.show ? g._series[0].color : this.grid.borderColor);
            this.sortData && o(this.series), this.grid.init(), this.grid._axes = this.axes, this.legend._series = this.series;
            for (var a = 0; a < t.jqplot.postInitHooks.length; a++)t.jqplot.postInitHooks[a].call(this, i, this.data, r);
            for (var a = 0; a < this.postInitHooks.hooks.length; a++)this.postInitHooks.hooks[a].call(this, i, this.data, r)
        }, this.resetAxesScale = function (e, i) {
            var s = i || {}, r = e || this.axes;
            if (r === !0 && (r = this.axes), t.isArray(r))for (var a = 0; a < r.length; a++)this.axes[r[a]].resetScale(s[r[a]]); else if ("object" == typeof r)for (var n in r)this.axes[n].resetScale(s[n])
        }, this.reInitialize = function (i, s) {
            for (var r = t.extend(!0, {}, this.options, s), a = this.targetId.substr(1), n = null == i ? this.data : i, h = 0; h < t.jqplot.preInitHooks.length; h++)t.jqplot.preInitHooks[h].call(this, a, n, r);
            for (var h = 0; h < this.preInitHooks.hooks.length; h++)this.preInitHooks.hooks[h].call(this, a, n, r);
            if (this._height = this.target.height(), this._width = this.target.width(), this._height <= 0 || this._width <= 0 || !this._height || !this._width)throw new Error("Target dimension not set");
            this._plotDimensions.height = this._height, this._plotDimensions.width = this._width, this.grid._plotDimensions = this._plotDimensions, this.title._plotDimensions = this._plotDimensions, this.baseCanvas._plotDimensions = this._plotDimensions, this.eventCanvas._plotDimensions = this._plotDimensions, this.legend._plotDimensions = this._plotDimensions;
            for (var l, d, p, c, h = 0, u = P.length; u > h; h++) {
                l = P[h], c = this.axes[l], d = c._ticks;
                for (var p = 0, g = d.length; g > p; p++) {
                    var f = d[p]._elem;
                    f && (t.jqplot.use_excanvas && window.G_vmlCanvasManager.uninitElement !== T && window.G_vmlCanvasManager.uninitElement(f.get(0)), f.emptyForce(), f = null, d._elem = null)
                }
                d = null, delete c.ticks, delete c._ticks, this.axes[l] = new e(l), this.axes[l]._plotWidth = this._width, this.axes[l]._plotHeight = this._height
            }
            i && (r.dataRenderer && t.isFunction(r.dataRenderer) && (r.dataRendererOptions && (this.dataRendererOptions = r.dataRendererOptions), this.dataRenderer = r.dataRenderer, i = this.dataRenderer(i, this, this.dataRendererOptions)), this.data = t.extend(!0, [], i)), s && this.parseOptions(r), this.title._plotWidth = this._width, this.textColor && this.target.css("color", this.textColor), this.fontFamily && this.target.css("font-family", this.fontFamily), this.fontSize && this.target.css("font-size", this.fontSize), this.title.init(), this.legend.init(), this._sumy = 0, this._sumx = 0, this.seriesStack = [], this.previousSeriesStack = [], this.computePlotData();
            for (var h = 0, u = this.series.length; u > h; h++) {
                this.seriesStack.push(h), this.previousSeriesStack.push(h), this.series[h].shadowCanvas._plotDimensions = this._plotDimensions, this.series[h].canvas._plotDimensions = this._plotDimensions;
                for (var p = 0; p < t.jqplot.preSeriesInitHooks.length; p++)t.jqplot.preSeriesInitHooks[p].call(this.series[h], a, this.data, this.options.seriesDefaults, this.options.series[h], this);
                for (var p = 0; p < this.preSeriesInitHooks.hooks.length; p++)this.preSeriesInitHooks.hooks[p].call(this.series[h], a, this.data, this.options.seriesDefaults, this.options.series[h], this);
                this.series[h]._plotDimensions = this._plotDimensions, this.series[h].init(h, this.grid.borderWidth, this);
                for (var p = 0; p < t.jqplot.postSeriesInitHooks.length; p++)t.jqplot.postSeriesInitHooks[p].call(this.series[h], a, this.data, this.options.seriesDefaults, this.options.series[h], this);
                for (var p = 0; p < this.postSeriesInitHooks.hooks.length; p++)this.postSeriesInitHooks.hooks[p].call(this.series[h], a, this.data, this.options.seriesDefaults, this.options.series[h], this);
                this._sumy += this.series[h]._sumy, this._sumx += this.series[h]._sumx
            }
            for (var h = 0, u = P.length; u > h; h++)l = P[h], c = this.axes[l], c._plotDimensions = this._plotDimensions, c.init(), null == c.borderColor && (c.borderColor = "x" !== l.charAt(0) && c.useSeriesColor === !0 && c.show ? c._series[0].color : this.grid.borderColor);
            this.sortData && o(this.series), this.grid.init(), this.grid._axes = this.axes, this.legend._series = this.series;
            for (var h = 0, u = t.jqplot.postInitHooks.length; u > h; h++)t.jqplot.postInitHooks[h].call(this, a, this.data, r);
            for (var h = 0, u = this.postInitHooks.hooks.length; u > h; h++)this.postInitHooks.hooks[h].call(this, a, this.data, r)
        }, this.quickInit = function () {
            if (this._height = this.target.height(), this._width = this.target.width(), this._height <= 0 || this._width <= 0 || !this._height || !this._width)throw new Error("Target dimension not set");
            this._plotDimensions.height = this._height, this._plotDimensions.width = this._width, this.grid._plotDimensions = this._plotDimensions, this.title._plotDimensions = this._plotDimensions, this.baseCanvas._plotDimensions = this._plotDimensions, this.eventCanvas._plotDimensions = this._plotDimensions, this.legend._plotDimensions = this._plotDimensions;
            for (var e in this.axes)this.axes[e]._plotWidth = this._width, this.axes[e]._plotHeight = this._height;
            this.title._plotWidth = this._width, this.textColor && this.target.css("color", this.textColor), this.fontFamily && this.target.css("font-family", this.fontFamily), this.fontSize && this.target.css("font-size", this.fontSize), this._sumy = 0, this._sumx = 0, this.computePlotData();
            for (var i = 0; i < this.series.length; i++)"line" === this.series[i]._type && this.series[i].renderer.bands.show && this.series[i].renderer.initBands.call(this.series[i], this.series[i].renderer.options, this), this.series[i]._plotDimensions = this._plotDimensions, this.series[i].canvas._plotDimensions = this._plotDimensions, this._sumy += this.series[i]._sumy, this._sumx += this.series[i]._sumx;
            for (var s, r = 0; 12 > r; r++) {
                s = P[r];
                for (var a = this.axes[s]._ticks, i = 0; i < a.length; i++) {
                    var n = a[i]._elem;
                    n && (t.jqplot.use_excanvas && window.G_vmlCanvasManager.uninitElement !== T && window.G_vmlCanvasManager.uninitElement(n.get(0)), n.emptyForce(), n = null, a._elem = null)
                }
                a = null, this.axes[s]._plotDimensions = this._plotDimensions, this.axes[s]._ticks = []
            }
            this.sortData && o(this.series), this.grid._axes = this.axes, this.legend._series = this.series
        }, this.computePlotData = function () {
            this._plotData = [], this._stackData = [];
            var e, i, s;
            for (i = 0, s = this.series.length; s > i; i++) {
                e = this.series[i], this._plotData.push([]), this._stackData.push([]);
                var r = e.data;
                this._plotData[i] = t.extend(!0, [], r), this._stackData[i] = t.extend(!0, [], r), e._plotData = this._plotData[i], e._stackData = this._stackData[i];
                var a = {x: [], y: []};
                if (this.stackSeries && !e.disableStack) {
                    e._stack = !0;
                    for (var n = "x" === e._stackAxis ? 0 : 1, o = 0, h = r.length; h > o; o++) {
                        var l = r[o][n];
                        if (null == l && (l = 0), this._plotData[i][o][n] = l, this._stackData[i][o][n] = l, i > 0)for (var d = i; d--;) {
                            var p = this._plotData[d][o][n];
                            if (l * p >= 0) {
                                this._plotData[i][o][n] += p, this._stackData[i][o][n] += p;
                                break
                            }
                        }
                    }
                } else {
                    for (var c = 0; c < e.data.length; c++)a.x.push(e.data[c][0]), a.y.push(e.data[c][1]);
                    this._stackData.push(e.data), this.series[i]._stackData = e.data, this._plotData.push(e.data), e._plotData = e.data, e._plotValues = a
                }
                for (i > 0 && (e._prevPlotData = this.series[i - 1]._plotData), e._sumy = 0, e._sumx = 0, c = e.data.length - 1; c > -1; c--)e._sumy += e.data[c][1], e._sumx += e.data[c][0]
            }
        }, this.populatePlotData = function (e, i) {
            this._plotData = [], this._stackData = [], e._stackData = [], e._plotData = [];
            var s = {x: [], y: []};
            if (this.stackSeries && !e.disableStack) {
                e._stack = !0;
                for (var r, a, n, o, h = "x" === e._stackAxis ? 0 : 1, l = t.extend(!0, [], e.data), d = t.extend(!0, [], e.data), p = 0; i > p; p++)for (var c = this.series[p].data, u = 0; u < c.length; u++)n = c[u], r = null != n[0] ? n[0] : 0, a = null != n[1] ? n[1] : 0, l[u][0] += r, l[u][1] += a, o = h ? a : r, e.data[u][h] * o >= 0 && (d[u][h] += o);
                for (var g = 0; g < d.length; g++)s.x.push(d[g][0]), s.y.push(d[g][1]);
                this._plotData.push(d), this._stackData.push(l), e._stackData = l, e._plotData = d, e._plotValues = s
            } else {
                for (var g = 0; g < e.data.length; g++)s.x.push(e.data[g][0]), s.y.push(e.data[g][1]);
                this._stackData.push(e.data), this.series[i]._stackData = e.data, this._plotData.push(e.data), e._plotData = e.data, e._plotValues = s
            }
            for (i > 0 && (e._prevPlotData = this.series[i - 1]._plotData), e._sumy = 0, e._sumx = 0, g = e.data.length - 1; g > -1; g--)e._sumy += e.data[g][1], e._sumx += e.data[g][0]
        }, this.getNextSeriesColor = function (t) {
            var e = 0, i = t.seriesColors;
            return function () {
                return e < i.length ? i[e++] : (e = 0, i[e++])
            }
        }(this), this.parseOptions = function (e) {
            for (var i = 0; i < this.preParseOptionsHooks.hooks.length; i++)this.preParseOptionsHooks.hooks[i].call(this, e);
            for (var i = 0; i < t.jqplot.preParseOptionsHooks.length; i++)t.jqplot.preParseOptionsHooks[i].call(this, e);
            this.options = t.extend(!0, {}, this.defaults, e);
            var s = this.options;
            if (this.animate = s.animate, this.animateReplot = s.animateReplot, this.stackSeries = s.stackSeries, t.isPlainObject(s.fillBetween))for (var a, n = ["series1", "series2", "color", "baseSeries", "fill"], i = 0, o = n.length; o > i; i++)a = n[i], null != s.fillBetween[a] && (this.fillBetween[a] = s.fillBetween[a]);
            s.seriesColors && (this.seriesColors = s.seriesColors), s.negativeSeriesColors && (this.negativeSeriesColors = s.negativeSeriesColors), s.captureRightClick && (this.captureRightClick = s.captureRightClick), this.defaultAxisStart = e && null != e.defaultAxisStart ? e.defaultAxisStart : this.defaultAxisStart, this.colorGenerator.setColors(this.seriesColors), this.negativeColorGenerator.setColors(this.negativeSeriesColors), t.extend(!0, this._gridPadding, s.gridPadding), this.sortData = null != s.sortData ? s.sortData : this.sortData;
            for (var i = 0; 12 > i; i++) {
                var h = P[i], l = this.axes[h];
                l._options = t.extend(!0, {}, s.axesDefaults, s.axes[h]), t.extend(!0, l, s.axesDefaults, s.axes[h]), l._plotWidth = this._width, l._plotHeight = this._height
            }
            var d = function (e, i, s) {
                var r, a, n = [];
                if (i = i || "vertical", t.isArray(e[0]))t.extend(!0, n, e); else for (r = 0, a = e.length; a > r; r++)"vertical" == i ? n.push([s + r, e[r]]) : n.push([e[r], s + r]);
                return n
            };
            this.series = [];
            for (var i = 0; i < this.data.length; i++) {
                for (var p = t.extend(!0, {index: i}, {seriesColors: this.seriesColors, negativeSeriesColors: this.negativeSeriesColors}, this.options.seriesDefaults, this.options.series[i], {rendererOptions: {animation: {show: this.animate}}}), n = new r(p), c = 0; c < t.jqplot.preParseSeriesOptionsHooks.length; c++)t.jqplot.preParseSeriesOptionsHooks[c].call(n, this.options.seriesDefaults, this.options.series[i]);
                for (var c = 0; c < this.preParseSeriesOptionsHooks.hooks.length; c++)this.preParseSeriesOptionsHooks.hooks[c].call(n, this.options.seriesDefaults, this.options.series[i]);
                t.extend(!0, n, p);
                var u = "vertical";
                switch (n.renderer === t.jqplot.BarRenderer && n.rendererOptions && "horizontal" == n.rendererOptions.barDirection && (u = "horizontal", n._stackAxis = "x", n._primaryAxis = "_yaxis"), n.data = d(this.data[i], u, this.defaultAxisStart), n.xaxis) {
                    case"xaxis":
                        n._xaxis = this.axes.xaxis;
                        break;
                    case"x2axis":
                        n._xaxis = this.axes.x2axis
                }
                n._yaxis = this.axes[n.yaxis], n._xaxis._series.push(n), n._yaxis._series.push(n), n.show ? (n._xaxis.show = !0, n._yaxis.show = !0) : (n._xaxis.scaleToHiddenSeries && (n._xaxis.show = !0), n._yaxis.scaleToHiddenSeries && (n._yaxis.show = !0)), n.label || (n.label = "Series " + (i + 1).toString()), this.series.push(n);
                for (var c = 0; c < t.jqplot.postParseSeriesOptionsHooks.length; c++)t.jqplot.postParseSeriesOptionsHooks[c].call(this.series[i], this.options.seriesDefaults, this.options.series[i]);
                for (var c = 0; c < this.postParseSeriesOptionsHooks.hooks.length; c++)this.postParseSeriesOptionsHooks.hooks[c].call(this.series[i], this.options.seriesDefaults, this.options.series[i])
            }
            t.extend(!0, this.grid, this.options.grid);
            for (var i = 0, o = P.length; o > i; i++) {
                var h = P[i], l = this.axes[h];
                null == l.borderWidth && (l.borderWidth = this.grid.borderWidth)
            }
            "string" == typeof this.options.title ? this.title.text = this.options.title : "object" == typeof this.options.title && t.extend(!0, this.title, this.options.title), this.title._plotWidth = this._width, this.legend.setOptions(this.options.legend);
            for (var i = 0; i < t.jqplot.postParseOptionsHooks.length; i++)t.jqplot.postParseOptionsHooks[i].call(this, e);
            for (var i = 0; i < this.postParseOptionsHooks.hooks.length; i++)this.postParseOptionsHooks.hooks[i].call(this, e)
        }, this.destroy = function () {
            this.canvasManager.freeAllCanvases(), this.eventCanvas && this.eventCanvas._elem && this.eventCanvas._elem.unbind(), this.target.empty(), this.target[0].innerHTML = ""
        }, this.replot = function (e) {
            var i = e || {}, s = i.data || null, r = i.clear === !1 ? !1 : !0, a = i.resetAxes || !1;
            delete i.data, delete i.clear, delete i.resetAxes, this.target.trigger("jqplotPreReplot"), r && this.destroy(), s || !t.isEmptyObject(i) ? this.reInitialize(s, i) : this.quickInit(), a && this.resetAxesScale(a, i.axes), this.draw(), this.target.trigger("jqplotPostReplot")
        }, this.redraw = function (t) {
            t = null != t ? t : !0, this.target.trigger("jqplotPreRedraw"), t && (this.canvasManager.freeAllCanvases(), this.eventCanvas._elem.unbind(), this.target.empty());
            for (var e in this.axes)this.axes[e]._ticks = [];
            this.computePlotData(), this._sumy = 0, this._sumx = 0;
            for (var i = 0, s = this.series.length; s > i; i++)this._sumy += this.series[i]._sumy, this._sumx += this.series[i]._sumx;
            this.draw(), this.target.trigger("jqplotPostRedraw")
        }, this.draw = function () {
            if (this.drawIfHidden || this.target.is(":visible")) {
                this.target.trigger("jqplotPreDraw");
                var e, i, s;
                for (e = 0, s = t.jqplot.preDrawHooks.length; s > e; e++)t.jqplot.preDrawHooks[e].call(this);
                for (e = 0, s = this.preDrawHooks.hooks.length; s > e; e++)this.preDrawHooks.hooks[e].apply(this, this.preDrawSeriesHooks.args[e]);
                this.target.append(this.baseCanvas.createElement({left: 0, right: 0, top: 0, bottom: 0}, "jqplot-base-canvas", null, this)), this.baseCanvas.setContext(), this.target.append(this.title.draw()), this.title.pack({top: 0, left: 0});
                var r = this.legend.draw({}, this), a = {top: 0, left: 0, bottom: 0, right: 0};
                if ("outsideGrid" == this.legend.placement) {
                    switch (this.target.append(r), this.legend.location) {
                        case"n":
                            a.top += this.legend.getHeight();
                            break;
                        case"s":
                            a.bottom += this.legend.getHeight();
                            break;
                        case"ne":
                        case"e":
                        case"se":
                            a.right += this.legend.getWidth();
                            break;
                        case"nw":
                        case"w":
                        case"sw":
                            a.left += this.legend.getWidth();
                            break;
                        default:
                            a.right += this.legend.getWidth()
                    }
                    r = r.detach()
                }
                var n, o = this.axes;
                for (e = 0; 12 > e; e++)n = P[e], this.target.append(o[n].draw(this.baseCanvas._ctx, this)), o[n].set();
                o.yaxis.show && (a.left += o.yaxis.getWidth());
                var h, l = ["y2axis", "y3axis", "y4axis", "y5axis", "y6axis", "y7axis", "y8axis", "y9axis"], d = [0, 0, 0, 0, 0, 0, 0, 0], p = 0;
                for (h = 0; 8 > h; h++)o[l[h]].show && (p += o[l[h]].getWidth(), d[h] = p);
                if (a.right += p, o.x2axis.show && (a.top += o.x2axis.getHeight()), this.title.show && (a.top += this.title.getHeight()), o.xaxis.show && (a.bottom += o.xaxis.getHeight()), this.options.gridDimensions && t.isPlainObject(this.options.gridDimensions)) {
                    var c = parseInt(this.options.gridDimensions.width, 10) || 0, u = parseInt(this.options.gridDimensions.height, 10) || 0, g = (this._width - a.left - a.right - c) / 2, f = (this._height - a.top - a.bottom - u) / 2;
                    f >= 0 && g >= 0 && (a.top += f, a.bottom += f, a.left += g, a.right += g)
                }
                var m = ["top", "bottom", "left", "right"];
                for (var h in m)null == this._gridPadding[m[h]] && a[m[h]] > 0 ? this._gridPadding[m[h]] = a[m[h]] : null == this._gridPadding[m[h]] && (this._gridPadding[m[h]] = this._defaultGridPadding[m[h]]);
                var _ = this._gridPadding;
                for ("outsideGrid" === this.legend.placement && (_ = {top: this.title.getHeight(), left: 0, right: 0, bottom: 0}, "s" === this.legend.location && (_.left = this._gridPadding.left, _.right = this._gridPadding.right)), o.xaxis.pack({position: "absolute", bottom: this._gridPadding.bottom - o.xaxis.getHeight(), left: 0, width: this._width}, {min: this._gridPadding.left, max: this._width - this._gridPadding.right}), o.yaxis.pack({position: "absolute", top: 0, left: this._gridPadding.left - o.yaxis.getWidth(), height: this._height}, {min: this._height - this._gridPadding.bottom, max: this._gridPadding.top}), o.x2axis.pack({position: "absolute", top: this._gridPadding.top - o.x2axis.getHeight(), left: 0, width: this._width}, {min: this._gridPadding.left, max: this._width - this._gridPadding.right}), e = 8; e > 0; e--)o[l[e - 1]].pack({position: "absolute", top: 0, right: this._gridPadding.right - d[e - 1]}, {min: this._height - this._gridPadding.bottom, max: this._gridPadding.top});
                var v = (this._width - this._gridPadding.left - this._gridPadding.right) / 2 + this._gridPadding.left - o.yMidAxis.getWidth() / 2;
                o.yMidAxis.pack({position: "absolute", top: 0, left: v, zIndex: 9, textAlign: "center"}, {min: this._height - this._gridPadding.bottom, max: this._gridPadding.top}), this.target.append(this.grid.createElement(this._gridPadding, this)), this.grid.draw();
                var x = this.series, b = x.length;
                for (e = 0, s = b; s > e; e++)i = this.seriesStack[e], this.target.append(x[i].shadowCanvas.createElement(this._gridPadding, "jqplot-series-shadowCanvas", null, this)), x[i].shadowCanvas.setContext(), x[i].shadowCanvas._elem.data("seriesIndex", i);
                for (e = 0, s = b; s > e; e++)i = this.seriesStack[e], this.target.append(x[i].canvas.createElement(this._gridPadding, "jqplot-series-canvas", null, this)), x[i].canvas.setContext(), x[i].canvas._elem.data("seriesIndex", i);
                this.target.append(this.eventCanvas.createElement(this._gridPadding, "jqplot-event-canvas", null, this)), this.eventCanvas.setContext(), this.eventCanvas._ctx.fillStyle = "rgba(0,0,0,0)", this.eventCanvas._ctx.fillRect(0, 0, this.eventCanvas._ctx.canvas.width, this.eventCanvas._ctx.canvas.height), this.bindCustomEvents(), this.legend.preDraw ? (this.eventCanvas._elem.before(r), this.legend.pack(_), this.legend._elem ? this.drawSeries({legendInfo: {location: this.legend.location, placement: this.legend.placement, width: this.legend.getWidth(), height: this.legend.getHeight(), xoffset: this.legend.xoffset, yoffset: this.legend.yoffset}}) : this.drawSeries()) : (this.drawSeries(), b && t(x[b - 1].canvas._elem).after(r), this.legend.pack(_));
                for (var e = 0, s = t.jqplot.eventListenerHooks.length; s > e; e++)this.eventCanvas._elem.bind(t.jqplot.eventListenerHooks[e][0], {plot: this}, t.jqplot.eventListenerHooks[e][1]);
                for (var e = 0, s = this.eventListenerHooks.hooks.length; s > e; e++)this.eventCanvas._elem.bind(this.eventListenerHooks.hooks[e][0], {plot: this}, this.eventListenerHooks.hooks[e][1]);
                var w = this.fillBetween;
                w.fill && w.series1 !== w.series2 && w.series1 < b && w.series2 < b && "line" === x[w.series1]._type && "line" === x[w.series2]._type && this.doFillBetweenLines();
                for (var e = 0, s = t.jqplot.postDrawHooks.length; s > e; e++)t.jqplot.postDrawHooks[e].call(this);
                for (var e = 0, s = this.postDrawHooks.hooks.length; s > e; e++)this.postDrawHooks.hooks[e].apply(this, this.postDrawHooks.args[e]);
                this.target.is(":visible") && (this._drawCount += 1);
                var k, y, j, D;
                for (e = 0, s = b; s > e; e++)k = x[e], y = k.renderer, j = ".jqplot-point-label.jqplot-series-" + e, y.animation && y.animation._supported && y.animation.show && (this._drawCount < 2 || this.animateReplot) && (D = this.target.find(j), D.stop(!0, !0).hide(), k.canvas._elem.stop(!0, !0).hide(), k.shadowCanvas._elem.stop(!0, !0).hide(), k.canvas._elem.jqplotEffect("blind", {mode: "show", direction: y.animation.direction}, y.animation.speed), k.shadowCanvas._elem.jqplotEffect("blind", {mode: "show", direction: y.animation.direction}, y.animation.speed), D.fadeIn(.8 * y.animation.speed));
                D = null, this.target.trigger("jqplotPostDraw", [this])
            }
        }, n.prototype.doFillBetweenLines = function () {
            var t = this.fillBetween, e = t.series1, i = t.series2, s = i > e ? e : i, r = i > e ? i : e, a = this.series[s], n = this.series[r];
            if (n.renderer.smooth)var o = n.renderer._smoothedData.slice(0).reverse(); else var o = n.gridData.slice(0).reverse();
            if (a.renderer.smooth)var h = a.renderer._smoothedData.concat(o); else var h = a.gridData.concat(o);
            var l = null !== t.color ? t.color : this.series[e].fillColor, d = null !== t.baseSeries ? t.baseSeries : s, p = this.series[d].renderer.shapeRenderer, c = {fillStyle: l, fill: !0, closePath: !0};
            p.draw(a.shadowCanvas._ctx, h, c)
        }, this.bindCustomEvents = function () {
            this.eventCanvas._elem.bind("click", {plot: this}, this.onClick), this.eventCanvas._elem.bind("dblclick", {plot: this}, this.onDblClick), this.eventCanvas._elem.bind("mousedown", {plot: this}, this.onMouseDown), this.eventCanvas._elem.bind("mousemove", {plot: this}, this.onMouseMove), this.eventCanvas._elem.bind("mouseenter", {plot: this}, this.onMouseEnter), this.eventCanvas._elem.bind("mouseleave", {plot: this}, this.onMouseLeave), this.captureRightClick ? (this.eventCanvas._elem.bind("mouseup", {plot: this}, this.onRightClick), this.eventCanvas._elem.get(0).oncontextmenu = function () {
                return!1
            }) : this.eventCanvas._elem.bind("mouseup", {plot: this}, this.onMouseUp)
        }, this.onClick = function (e) {
            var i = h(e), s = e.data.plot, r = l(i.gridPos, s), a = t.Event("jqplotClick");
            a.pageX = e.pageX, a.pageY = e.pageY, t(this).trigger(a, [i.gridPos, i.dataPos, r, s])
        }, this.onDblClick = function (e) {
            var i = h(e), s = e.data.plot, r = l(i.gridPos, s), a = t.Event("jqplotDblClick");
            a.pageX = e.pageX, a.pageY = e.pageY, t(this).trigger(a, [i.gridPos, i.dataPos, r, s])
        }, this.onMouseDown = function (e) {
            var i = h(e), s = e.data.plot, r = l(i.gridPos, s), a = t.Event("jqplotMouseDown");
            a.pageX = e.pageX, a.pageY = e.pageY, t(this).trigger(a, [i.gridPos, i.dataPos, r, s])
        }, this.onMouseUp = function (e) {
            var i = h(e), s = t.Event("jqplotMouseUp");
            s.pageX = e.pageX, s.pageY = e.pageY, t(this).trigger(s, [i.gridPos, i.dataPos, null, e.data.plot])
        }, this.onRightClick = function (e) {
            var i = h(e), s = e.data.plot, r = l(i.gridPos, s);
            if (s.captureRightClick)if (3 == e.which) {
                var a = t.Event("jqplotRightClick");
                a.pageX = e.pageX, a.pageY = e.pageY, t(this).trigger(a, [i.gridPos, i.dataPos, r, s])
            } else {
                var a = t.Event("jqplotMouseUp");
                a.pageX = e.pageX, a.pageY = e.pageY, t(this).trigger(a, [i.gridPos, i.dataPos, r, s])
            }
        }, this.onMouseMove = function (e) {
            var i = h(e), s = e.data.plot, r = l(i.gridPos, s), a = t.Event("jqplotMouseMove");
            a.pageX = e.pageX, a.pageY = e.pageY, t(this).trigger(a, [i.gridPos, i.dataPos, r, s])
        }, this.onMouseEnter = function (e) {
            var i = h(e), s = e.data.plot, r = t.Event("jqplotMouseEnter");
            r.pageX = e.pageX, r.pageY = e.pageY, r.relatedTarget = e.relatedTarget, t(this).trigger(r, [i.gridPos, i.dataPos, null, s])
        }, this.onMouseLeave = function (e) {
            var i = h(e), s = e.data.plot, r = t.Event("jqplotMouseLeave");
            r.pageX = e.pageX, r.pageY = e.pageY, r.relatedTarget = e.relatedTarget, t(this).trigger(r, [i.gridPos, i.dataPos, null, s])
        }, this.drawSeries = function (e, i) {
            var s, r, a;
            if (i = "number" == typeof e && null == i ? e : i, e = "object" == typeof e ? e : {}, i != T)r = this.series[i], a = r.shadowCanvas._ctx, a.clearRect(0, 0, a.canvas.width, a.canvas.height), r.drawShadow(a, e, this), a = r.canvas._ctx, a.clearRect(0, 0, a.canvas.width, a.canvas.height), r.draw(a, e, this), r.renderer.constructor == t.jqplot.BezierCurveRenderer && i < this.series.length - 1 && this.drawSeries(i + 1); else for (s = 0; s < this.series.length; s++)r = this.series[s], a = r.shadowCanvas._ctx, a.clearRect(0, 0, a.canvas.width, a.canvas.height), r.drawShadow(a, e, this), a = r.canvas._ctx, a.clearRect(0, 0, a.canvas.width, a.canvas.height), r.draw(a, e, this);
            e = i = s = r = a = null
        }, this.moveSeriesToFront = function (e) {
            e = parseInt(e, 10);
            var i = t.inArray(e, this.seriesStack);
            if (-1 != i) {
                if (i == this.seriesStack.length - 1)return this.previousSeriesStack = this.seriesStack.slice(0), void 0;
                var s = this.seriesStack[this.seriesStack.length - 1], r = this.series[e].canvas._elem.detach(), a = this.series[e].shadowCanvas._elem.detach();
                this.series[s].shadowCanvas._elem.after(a), this.series[s].canvas._elem.after(r), this.previousSeriesStack = this.seriesStack.slice(0), this.seriesStack.splice(i, 1), this.seriesStack.push(e)
            }
        }, this.moveSeriesToBack = function (e) {
            e = parseInt(e, 10);
            var i = t.inArray(e, this.seriesStack);
            if (0 != i && -1 != i) {
                var s = this.seriesStack[0], r = this.series[e].canvas._elem.detach(), a = this.series[e].shadowCanvas._elem.detach();
                this.series[s].shadowCanvas._elem.before(a), this.series[s].canvas._elem.before(r), this.previousSeriesStack = this.seriesStack.slice(0), this.seriesStack.splice(i, 1), this.seriesStack.unshift(e)
            }
        }, this.restorePreviousSeriesOrder = function () {
            var t, e, i, s, r, a;
            if (this.seriesStack != this.previousSeriesStack) {
                for (t = 1; t < this.previousSeriesStack.length; t++)r = this.previousSeriesStack[t], a = this.previousSeriesStack[t - 1], e = this.series[r].canvas._elem.detach(), i = this.series[r].shadowCanvas._elem.detach(), this.series[a].shadowCanvas._elem.after(i), this.series[a].canvas._elem.after(e);
                s = this.seriesStack.slice(0), this.seriesStack = this.previousSeriesStack.slice(0), this.previousSeriesStack = s
            }
        }, this.restoreOriginalSeriesOrder = function () {
            var t, e, i, s = [];
            for (t = 0; t < this.series.length; t++)s.push(t);
            if (this.seriesStack != s)for (this.previousSeriesStack = this.seriesStack.slice(0), this.seriesStack = s, t = 1; t < this.seriesStack.length; t++)e = this.series[t].canvas._elem.detach(), i = this.series[t].shadowCanvas._elem.detach(), this.series[t - 1].shadowCanvas._elem.after(i), this.series[t - 1].canvas._elem.after(e)
        }, this.activateTheme = function (t) {
            this.themeEngine.activate(this, t)
        }
    }

    function o(t, e) {
        return(3.4182054 + e) * Math.pow(t, -.3534992)
    }

    function h(t) {
        var e = (Math.exp(2 * t) - 1) / (Math.exp(2 * t) + 1);
        return e
    }

    function l(t) {
        function e(t, e) {
            return t - e == 0 ? Math.pow(10, 10) : t - e
        }

        var i = this.renderer.smooth, s = this.canvas.getWidth(), r = this._xaxis.series_p2u, a = this._yaxis.series_p2u, n = null, h = t.length / s, l = [], d = [];
        n = isNaN(parseFloat(i)) ? o(h, .5) : parseFloat(i);
        for (var p = [], c = [], u = 0, g = t.length; g > u; u++)p.push(t[u][1]), c.push(t[u][0]);
        for (var f, m, _, v, x = t.length - 1, b = 1, w = t.length; w > b; b++) {
            for (var k = [], y = [], j = 0; 2 > j; j++) {
                var u = b - 1 + j;
                k[j] = 0 == u || u == x ? Math.pow(10, 10) : p[u + 1] - p[u] == 0 || p[u] - p[u - 1] == 0 ? 0 : (c[u + 1] - c[u]) / (p[u + 1] - p[u]) + (c[u] - c[u - 1]) / (p[u] - p[u - 1]) == 0 ? 0 : (p[u + 1] - p[u]) * (p[u] - p[u - 1]) < 0 ? 0 : 2 / (e(c[u + 1], c[u]) / (p[u + 1] - p[u]) + e(c[u], c[u - 1]) / (p[u] - p[u - 1]))
            }
            1 == b ? k[0] = 1.5 * (p[1] - p[0]) / e(c[1], c[0]) - k[1] / 2 : b == x && (k[1] = 1.5 * (p[x] - p[x - 1]) / e(c[x], c[x - 1]) - k[0] / 2), y[0] = -2 * (k[1] + 2 * k[0]) / e(c[b], c[b - 1]) + 6 * (p[b] - p[b - 1]) / Math.pow(e(c[b], c[b - 1]), 2), y[1] = 2 * (2 * k[1] + k[0]) / e(c[b], c[b - 1]) - 6 * (p[b] - p[b - 1]) / Math.pow(e(c[b], c[b - 1]), 2), v = 1 / 6 * (y[1] - y[0]) / e(c[b], c[b - 1]), _ = .5 * (c[b] * y[0] - c[b - 1] * y[1]) / e(c[b], c[b - 1]), m = (p[b] - p[b - 1] - _ * (Math.pow(c[b], 2) - Math.pow(c[b - 1], 2)) - v * (Math.pow(c[b], 3) - Math.pow(c[b - 1], 3))) / e(c[b], c[b - 1]), f = p[b - 1] - m * c[b - 1] - _ * Math.pow(c[b - 1], 2) - v * Math.pow(c[b - 1], 3);
            for (var D, M, S = (c[b] - c[b - 1]) / n, j = 0, g = n; g > j; j++)D = [], M = c[b - 1] + j * S, D.push(M), D.push(f + m * M + _ * Math.pow(M, 2) + v * Math.pow(M, 3)), l.push(D), d.push([r(D[0]), a(D[1])])
        }
        return l.push(t[u]), d.push([r(t[u][0]), a(t[u][1])]), [l, d]
    }

    function d(t) {
        var e, i, s, r, a, n, l, d, p, c, u, g, f, m, _, v, x, b, w = this.renderer.smooth, k = this.renderer.tension, y = this.canvas.getWidth(), j = this._xaxis.series_p2u, D = this._yaxis.series_p2u, M = null, S = null, q = null, C = null, R = null, T = null, P = null, I = t.length / y, H = [], O = [];
        M = isNaN(parseFloat(w)) ? o(I, .5) : parseFloat(w), isNaN(parseFloat(k)) || (k = parseFloat(k));
        for (var A = 0, L = t.length - 1; L > A; A++)for (null === k ? (R = Math.abs((t[A + 1][1] - t[A][1]) / (t[A + 1][0] - t[A][0])), m = .3, _ = .6, v = (_ - m) / 2, x = 2.5, b = -1.4, P = R / x + b, q = v * h(P) - v * h(b) + m, A > 0 && (T = Math.abs((t[A][1] - t[A - 1][1]) / (t[A][0] - t[A - 1][0]))), P = T / x + b, C = v * h(P) - v * h(b) + m, S = (q + C) / 2) : S = k, e = 0; M > e; e++)i = e / M, s = (1 + 2 * i) * Math.pow(1 - i, 2), r = i * Math.pow(1 - i, 2), a = Math.pow(i, 2) * (3 - 2 * i), n = Math.pow(i, 2) * (i - 1), t[A - 1] ? (l = S * (t[A + 1][0] - t[A - 1][0]), d = S * (t[A + 1][1] - t[A - 1][1])) : (l = S * (t[A + 1][0] - t[A][0]), d = S * (t[A + 1][1] - t[A][1])), t[A + 2] ? (p = S * (t[A + 2][0] - t[A][0]), c = S * (t[A + 2][1] - t[A][1])) : (p = S * (t[A + 1][0] - t[A][0]), c = S * (t[A + 1][1] - t[A][1])), u = s * t[A][0] + a * t[A + 1][0] + r * l + n * p, g = s * t[A][1] + a * t[A + 1][1] + r * d + n * c, f = [u, g], H.push(f), O.push([j(u), D(g)]);
        return H.push(t[L]), O.push([j(t[L][0]), D(t[L][1])]), [H, O]
    }

    function p() {
        for (var e = 0; e < this.series.length; e++)this.series[e].renderer.constructor == t.jqplot.LineRenderer && this.series[e].highlightMouseOver && (this.series[e].highlightMouseDown = !1)
    }

    function c() {
        this.plugins.lineRenderer && this.plugins.lineRenderer.highlightCanvas && (this.plugins.lineRenderer.highlightCanvas.resetCanvas(), this.plugins.lineRenderer.highlightCanvas = null), this.plugins.lineRenderer.highlightedSeriesIndex = null, this.plugins.lineRenderer.highlightCanvas = new t.jqplot.GenericCanvas, this.eventCanvas._elem.before(this.plugins.lineRenderer.highlightCanvas.createElement(this._gridPadding, "jqplot-lineRenderer-highlight-canvas", this._plotDimensions, this)), this.plugins.lineRenderer.highlightCanvas.setContext(), this.eventCanvas._elem.bind("mouseleave", {plot: this}, function (t) {
            g(t.data.plot)
        })
    }

    function u(t, e, i, s) {
        var r = t.series[e], a = t.plugins.lineRenderer.highlightCanvas;
        a._ctx.clearRect(0, 0, a._ctx.canvas.width, a._ctx.canvas.height), r._highlightedPoint = i, t.plugins.lineRenderer.highlightedSeriesIndex = e;
        var n = {fillStyle: r.highlightColor};
        "line" === r.type && r.renderer.bands.show && (n.fill = !0, n.closePath = !0), r.renderer.shapeRenderer.draw(a._ctx, s, n), a = null
    }

    function g(t) {
        var e = t.plugins.lineRenderer.highlightCanvas;
        e._ctx.clearRect(0, 0, e._ctx.canvas.width, e._ctx.canvas.height);
        for (var i = 0; i < t.series.length; i++)t.series[i]._highlightedPoint = null;
        t.plugins.lineRenderer.highlightedSeriesIndex = null, t.target.trigger("jqplotDataUnhighlight"), e = null
    }

    function f(t, e, i, s, r) {
        if (s) {
            var a = [s.seriesIndex, s.pointIndex, s.data], n = jQuery.Event("jqplotDataMouseOver");
            if (n.pageX = t.pageX, n.pageY = t.pageY, r.target.trigger(n, a), r.series[a[0]].highlightMouseOver && a[0] != r.plugins.lineRenderer.highlightedSeriesIndex) {
                var o = jQuery.Event("jqplotDataHighlight");
                o.which = t.which, o.pageX = t.pageX, o.pageY = t.pageY, r.target.trigger(o, a), u(r, s.seriesIndex, s.pointIndex, s.points)
            }
        } else null == s && g(r)
    }

    function m(t, e, i, s, r) {
        if (s) {
            var a = [s.seriesIndex, s.pointIndex, s.data];
            if (r.series[a[0]].highlightMouseDown && a[0] != r.plugins.lineRenderer.highlightedSeriesIndex) {
                var n = jQuery.Event("jqplotDataHighlight");
                n.which = t.which, n.pageX = t.pageX, n.pageY = t.pageY, r.target.trigger(n, a), u(r, s.seriesIndex, s.pointIndex, s.points)
            }
        } else null == s && g(r)
    }

    function _(t, e, i, s, r) {
        var a = r.plugins.lineRenderer.highlightedSeriesIndex;
        null != a && r.series[a].highlightMouseDown && g(r)
    }

    function v(t, e, i, s, r) {
        if (s) {
            var a = [s.seriesIndex, s.pointIndex, s.data], n = jQuery.Event("jqplotDataClick");
            n.which = t.which, n.pageX = t.pageX, n.pageY = t.pageY, r.target.trigger(n, a)
        }
    }

    function x(t, e, i, s, r) {
        if (s) {
            var a = [s.seriesIndex, s.pointIndex, s.data], n = r.plugins.lineRenderer.highlightedSeriesIndex;
            null != n && r.series[n].highlightMouseDown && g(r);
            var o = jQuery.Event("jqplotDataRightClick");
            o.which = t.which, o.pageX = t.pageX, o.pageY = t.pageY, r.target.trigger(o, a)
        }
    }

    function b(t) {
        var e;
        if (t = Math.abs(t), t >= 10)e = "%d"; else if (t > 1)e = t === parseInt(t, 10) ? "%d" : "%.1f"; else {
            var i = -Math.floor(Math.log(t) / Math.LN10);
            e = "%." + i + "f"
        }
        return e
    }

    function w(e, i, s) {
        for (var r, a, n, o, h, l, d, p = Math.floor(s / 2), c = Math.ceil(1.5 * s), u = Number.MAX_VALUE, g = i - e, f = t.jqplot.getSignificantFigures, m = 0, _ = c - p + 1; _ > m; m++)l = p + m, r = g / (l - 1), a = f(r), r = Math.abs(s - l) + a.digitsRight, u > r ? (u = r, n = l, d = a.digitsRight) : r === u && a.digitsRight < d && (n = l, d = a.digitsRight);
        return o = Math.max(d, Math.max(f(e).digitsRight, f(i).digitsRight)), h = 0 === o ? "%d" : "%." + o + "f", r = g / (n - 1), [e, i, n, h, r]
    }

    function k(t, e) {
        e = e || 7;
        var i, s = t / (e - 1), r = Math.pow(10, Math.floor(Math.log(s) / Math.LN10)), a = s / r;
        return i = 1 > r ? a > 5 ? 10 * r : a > 2 ? 5 * r : a > 1 ? 2 * r : r : a > 5 ? 10 * r : a > 4 ? 5 * r : a > 3 ? 4 * r : a > 2 ? 3 * r : a > 1 ? 2 * r : r
    }

    function y(t, e) {
        e = e || 1;
        var i, s = Math.floor(Math.log(t) / Math.LN10), r = Math.pow(10, s), a = t / r;
        return a /= e, i = .38 >= a ? .1 : 1.6 >= a ? .2 : 4 >= a ? .5 : 8 >= a ? 1 : 16 >= a ? 2 : 5, i * r
    }

    function j(t, e) {
        var i, s, r = Math.floor(Math.log(t) / Math.LN10), a = Math.pow(10, r), n = t / a;
        return n /= e, s = .38 >= n ? .1 : 1.6 >= n ? .2 : 4 >= n ? .5 : 8 >= n ? 1 : 16 >= n ? 2 : 5, i = s * a, [i, s, a]
    }

    function D(t, e) {
        return t - e
    }

    function M(t) {
        if (null == t || "object" != typeof t)return t;
        var e = new t.constructor;
        for (var i in t)e[i] = M(t[i]);
        return e
    }

    function S(t, e) {
        if (null != e && "object" == typeof e)for (var i in e)"highlightColors" == i && (t[i] = M(e[i])), null != e[i] && "object" == typeof e[i] ? (t.hasOwnProperty(i) || (t[i] = {}), S(t[i], e[i])) : t[i] = e[i]
    }

    function q(t, e) {
        if (e.indexOf)return e.indexOf(t);
        for (var i = 0, s = e.length; s > i; i++)if (e[i] === t)return i;
        return-1
    }

    function C(t) {
        return null === t ? "[object Null]" : Object.prototype.toString.call(t)
    }

    function R(e, i, s, r) {
        return t.isPlainObject(e) ? e : (e = {effect: e}, i === T && (i = {}), t.isFunction(i) && (r = i, s = null, i = {}), ("number" === t.type(i) || t.fx.speeds[i]) && (r = s, s = i, i = {}), t.isFunction(s) && (r = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = r || i.complete, e)
    }

    var T;
    t.fn.emptyForce = function () {
        for (var e, i = 0; null != (e = t(this)[i]); i++) {
            if (1 === e.nodeType && t.cleanData(e.getElementsByTagName("*")), t.jqplot.use_excanvas)e.outerHTML = ""; else for (; e.firstChild;)e.removeChild(e.firstChild);
            e = null
        }
        return t(this)
    }, t.fn.removeChildForce = function (t) {
        for (; t.firstChild;)this.removeChildForce(t.firstChild), t.removeChild(t.firstChild)
    }, t.fn.jqplot = function () {
        for (var e = [], i = [], s = 0, r = arguments.length; r > s; s++)t.isArray(arguments[s]) ? e.push(arguments[s]) : t.isPlainObject(arguments[s]) && i.push(arguments[s]);
        return this.each(function (s) {
            var r, a, n, o, h = t(this), l = e.length, d = i.length;
            n = l > s ? e[s] : l ? e[l - 1] : null, o = d > s ? i[s] : d ? i[d - 1] : null, r = h.attr("id"), r === T && (r = "jqplot_target_" + t.jqplot.targetCounter++, h.attr("id", r)), a = t.jqplot(r, n, o), h.data("jqplot", a)
        })
    }, t.jqplot = function (e, i, s) {
        var r = null, a = null;
        3 === arguments.length ? (r = i, a = s) : 2 === arguments.length && (t.isArray(i) ? r = i : t.isPlainObject(i) && (a = i)), null === r && null !== a && a.data && (r = a.data);
        var o = new n;
        if (t("#" + e).removeClass("jqplot-error"), !t.jqplot.config.catchErrors)return o.init(e, r, a), o.draw(), o.themeEngine.init.call(o), o;
        try {
            return o.init(e, r, a), o.draw(), o.themeEngine.init.call(o), o
        } catch (h) {
            var l = t.jqplot.config.errorMessage || h.message;
            t("#" + e).append('<div class="jqplot-error-message">' + l + "</div>"), t("#" + e).addClass("jqplot-error"), document.getElementById(e).style.background = t.jqplot.config.errorBackground, document.getElementById(e).style.border = t.jqplot.config.errorBorder, document.getElementById(e).style.fontFamily = t.jqplot.config.errorFontFamily, document.getElementById(e).style.fontSize = t.jqplot.config.errorFontSize, document.getElementById(e).style.fontStyle = t.jqplot.config.errorFontStyle, document.getElementById(e).style.fontWeight = t.jqplot.config.errorFontWeight
        }
    }, t.jqplot.version = "1.0.8", t.jqplot.revision = "1250", t.jqplot.targetCounter = 1, t.jqplot.CanvasManager = function () {
        "undefined" == typeof t.jqplot.CanvasManager.canvases && (t.jqplot.CanvasManager.canvases = [], t.jqplot.CanvasManager.free = []);
        var e = [];
        this.getCanvas = function () {
            var i, s = !0;
            if (!t.jqplot.use_excanvas)for (var r = 0, a = t.jqplot.CanvasManager.canvases.length; a > r; r++)if (t.jqplot.CanvasManager.free[r] === !0) {
                s = !1, i = t.jqplot.CanvasManager.canvases[r], t.jqplot.CanvasManager.free[r] = !1, e.push(r);
                break
            }
            return s && (i = document.createElement("canvas"), e.push(t.jqplot.CanvasManager.canvases.length), t.jqplot.CanvasManager.canvases.push(i), t.jqplot.CanvasManager.free.push(!1)), i
        }, this.initCanvas = function (e) {
            return t.jqplot.use_excanvas ? window.G_vmlCanvasManager.initElement(e) : e
        }, this.freeAllCanvases = function () {
            for (var t = 0, i = e.length; i > t; t++)this.freeCanvas(e[t]);
            e = []
        }, this.freeCanvas = function (e) {
            if (t.jqplot.use_excanvas && window.G_vmlCanvasManager.uninitElement !== T)window.G_vmlCanvasManager.uninitElement(t.jqplot.CanvasManager.canvases[e]), t.jqplot.CanvasManager.canvases[e] = null; else {
                var i = t.jqplot.CanvasManager.canvases[e];
                i.getContext("2d").clearRect(0, 0, i.width, i.height), t(i).unbind().removeAttr("class").removeAttr("style"), t(i).css({left: "", top: "", position: ""}), i.width = 0, i.height = 0, t.jqplot.CanvasManager.free[e] = !0
            }
        }
    }, t.jqplot.log = function () {
        window.console && window.console.log.apply(window.console, arguments)
    }, t.jqplot.config = {addDomReference: !1, enablePlugins: !1, defaultHeight: 300, defaultWidth: 400, UTCAdjust: !1, timezoneOffset: new Date(6e4 * (new Date).getTimezoneOffset()), errorMessage: "", errorBackground: "", errorBorder: "", errorFontFamily: "", errorFontSize: "", errorFontStyle: "", errorFontWeight: "", catchErrors: !1, defaultTickFormatString: "%.1f", defaultColors: ["#4bb2c5", "#EAA228", "#c5b47f", "#579575", "#839557", "#958c12", "#953579", "#4b5de4", "#d8b83f", "#ff5800", "#0085cc", "#c747a3", "#cddf54", "#FBD178", "#26B4E3", "#bd70c7"], defaultNegativeColors: ["#498991", "#C08840", "#9F9274", "#546D61", "#646C4A", "#6F6621", "#6E3F5F", "#4F64B0", "#A89050", "#C45923", "#187399", "#945381", "#959E5C", "#C7AF7B", "#478396", "#907294"], dashLength: 4, gapLength: 4, dotGapLength: 2.5, srcLocation: "jqplot/src/", pluginLocation: "jqplot/src/plugins/"}, t.jqplot.arrayMax = function (t) {
        return Math.max.apply(Math, t)
    }, t.jqplot.arrayMin = function (t) {
        return Math.min.apply(Math, t)
    }, t.jqplot.enablePlugins = t.jqplot.config.enablePlugins, t.jqplot.support_canvas = function () {
        return"undefined" == typeof t.jqplot.support_canvas.result && (t.jqplot.support_canvas.result = !!document.createElement("canvas").getContext), t.jqplot.support_canvas.result
    }, t.jqplot.support_canvas_text = function () {
        return"undefined" == typeof t.jqplot.support_canvas_text.result && (t.jqplot.support_canvas_text.result = window.G_vmlCanvasManager !== T && window.G_vmlCanvasManager._version > 887 ? !0 : !(!document.createElement("canvas").getContext || "function" != typeof document.createElement("canvas").getContext("2d").fillText)), t.jqplot.support_canvas_text.result
    }, t.jqplot.use_excanvas = t.support.boxModel && t.support.objectAll && $support.leadingWhitespace || t.jqplot.support_canvas() ? !1 : !0, t.jqplot.preInitHooks = [], t.jqplot.postInitHooks = [], t.jqplot.preParseOptionsHooks = [], t.jqplot.postParseOptionsHooks = [], t.jqplot.preDrawHooks = [], t.jqplot.postDrawHooks = [], t.jqplot.preDrawSeriesHooks = [], t.jqplot.postDrawSeriesHooks = [], t.jqplot.preDrawLegendHooks = [], t.jqplot.addLegendRowHooks = [], t.jqplot.preSeriesInitHooks = [], t.jqplot.postSeriesInitHooks = [], t.jqplot.preParseSeriesOptionsHooks = [], t.jqplot.postParseSeriesOptionsHooks = [], t.jqplot.eventListenerHooks = [], t.jqplot.preDrawSeriesShadowHooks = [], t.jqplot.postDrawSeriesShadowHooks = [], t.jqplot.ElemContainer = function () {
        this._elem, this._plotWidth, this._plotHeight, this._plotDimensions = {height: null, width: null}
    }, t.jqplot.ElemContainer.prototype.createElement = function (e, i, s, r, a) {
        this._offsets = i;
        var n = s || "jqplot", o = document.createElement(e);
        return this._elem = t(o), this._elem.addClass(n), this._elem.css(r), this._elem.attr(a), o = null, this._elem
    }, t.jqplot.ElemContainer.prototype.getWidth = function () {
        return this._elem ? this._elem.outerWidth(!0) : null
    }, t.jqplot.ElemContainer.prototype.getHeight = function () {
        return this._elem ? this._elem.outerHeight(!0) : null
    }, t.jqplot.ElemContainer.prototype.getPosition = function () {
        return this._elem ? this._elem.position() : {top: null, left: null, bottom: null, right: null}
    }, t.jqplot.ElemContainer.prototype.getTop = function () {
        return this.getPosition().top
    }, t.jqplot.ElemContainer.prototype.getLeft = function () {
        return this.getPosition().left
    }, t.jqplot.ElemContainer.prototype.getBottom = function () {
        return this._elem.css("bottom")
    }, t.jqplot.ElemContainer.prototype.getRight = function () {
        return this._elem.css("right")
    }, e.prototype = new t.jqplot.ElemContainer, e.prototype.constructor = e, e.prototype.init = function () {
        t.isFunction(this.renderer) && (this.renderer = new this.renderer), this.tickOptions.axis = this.name, null == this.tickOptions.showMark && (this.tickOptions.showMark = this.showTicks), null == this.tickOptions.showMark && (this.tickOptions.showMark = this.showTickMarks), null == this.tickOptions.showLabel && (this.tickOptions.showLabel = this.showTicks), null == this.label || "" == this.label ? this.showLabel = !1 : this.labelOptions.label = this.label, 0 == this.showLabel && (this.labelOptions.show = !1), 0 == this.pad && (this.pad = 1), 0 == this.padMax && (this.padMax = 1), 0 == this.padMin && (this.padMin = 1), null == this.padMax && (this.padMax = (this.pad - 1) / 2 + 1), null == this.padMin && (this.padMin = (this.pad - 1) / 2 + 1), this.pad = this.padMax + this.padMin - 1, (null != this.min || null != this.max) && (this.autoscale = !1), null == this.syncTicks && this.name.indexOf("y") > -1 ? this.syncTicks = !0 : null == this.syncTicks && (this.syncTicks = !1), this.renderer.init.call(this, this.rendererOptions)
    }, e.prototype.draw = function (t, e) {
        return this.__ticks && (this.__ticks = null), this.renderer.draw.call(this, t, e)
    }, e.prototype.set = function () {
        this.renderer.set.call(this)
    }, e.prototype.pack = function (t, e) {
        this.show && this.renderer.pack.call(this, t, e), null == this._min && (this._min = this.min, this._max = this.max, this._tickInterval = this.tickInterval, this._numberTicks = this.numberTicks, this.__ticks = this._ticks)
    }, e.prototype.reset = function () {
        this.renderer.reset.call(this)
    }, e.prototype.resetScale = function (e) {
        t.extend(!0, this, {min: null, max: null, numberTicks: null, tickInterval: null, _ticks: [], ticks: []}, e), this.resetDataBounds()
    }, e.prototype.resetDataBounds = function () {
        var e = this._dataBounds;
        e.min = null, e.max = null;
        for (var i, s, r, a = this.show ? !0 : !1, n = 0; n < this._series.length; n++)if (s = this._series[n], s.show || this.scaleToHiddenSeries) {
            r = s._plotData, "line" === s._type && s.renderer.bands.show && "x" !== this.name.charAt(0) && (r = [
                [0, s.renderer.bands._min],
                [1, s.renderer.bands._max]
            ]);
            var o = 1, h = 1;
            null != s._type && "ohlc" == s._type && (o = 3, h = 2);
            for (var l = 0, i = r.length; i > l; l++)"xaxis" == this.name || "x2axis" == this.name ? ((null != r[l][0] && r[l][0] < e.min || null == e.min) && (e.min = r[l][0]), (null != r[l][0] && r[l][0] > e.max || null == e.max) && (e.max = r[l][0])) : ((null != r[l][o] && r[l][o] < e.min || null == e.min) && (e.min = r[l][o]), (null != r[l][h] && r[l][h] > e.max || null == e.max) && (e.max = r[l][h]));
            a && s.renderer.constructor !== t.jqplot.BarRenderer ? a = !1 : a && this._options.hasOwnProperty("forceTickAt0") && 0 == this._options.forceTickAt0 ? a = !1 : a && s.renderer.constructor === t.jqplot.BarRenderer && ("vertical" == s.barDirection && "xaxis" != this.name && "x2axis" != this.name ? (null != this._options.pad || null != this._options.padMin) && (a = !1) : "horizontal" != s.barDirection || "xaxis" != this.name && "x2axis" != this.name || (null != this._options.pad || null != this._options.padMin) && (a = !1))
        }
        a && this.renderer.constructor === t.jqplot.LinearAxisRenderer && e.min >= 0 && (this.padMin = 1, this.forceTickAt0 = !0)
    }, i.prototype = new t.jqplot.ElemContainer, i.prototype.constructor = i, i.prototype.setOptions = function (e) {
        if (t.extend(!0, this, e), "inside" == this.placement && (this.placement = "insideGrid"), this.xoffset > 0) {
            if ("insideGrid" == this.placement)switch (this.location) {
                case"nw":
                case"w":
                case"sw":
                    null == this.marginLeft && (this.marginLeft = this.xoffset + "px"), this.marginRight = "0px";
                    break;
                case"ne":
                case"e":
                case"se":
                default:
                    null == this.marginRight && (this.marginRight = this.xoffset + "px"), this.marginLeft = "0px"
            } else if ("outside" == this.placement)switch (this.location) {
                case"nw":
                case"w":
                case"sw":
                    null == this.marginRight && (this.marginRight = this.xoffset + "px"), this.marginLeft = "0px";
                    break;
                case"ne":
                case"e":
                case"se":
                default:
                    null == this.marginLeft && (this.marginLeft = this.xoffset + "px"), this.marginRight = "0px"
            }
            this.xoffset = 0
        }
        if (this.yoffset > 0) {
            if ("outside" == this.placement)switch (this.location) {
                case"sw":
                case"s":
                case"se":
                    null == this.marginTop && (this.marginTop = this.yoffset + "px"), this.marginBottom = "0px";
                    break;
                case"ne":
                case"n":
                case"nw":
                default:
                    null == this.marginBottom && (this.marginBottom = this.yoffset + "px"), this.marginTop = "0px"
            } else if ("insideGrid" == this.placement)switch (this.location) {
                case"sw":
                case"s":
                case"se":
                    null == this.marginBottom && (this.marginBottom = this.yoffset + "px"), this.marginTop = "0px";
                    break;
                case"ne":
                case"n":
                case"nw":
                default:
                    null == this.marginTop && (this.marginTop = this.yoffset + "px"), this.marginBottom = "0px"
            }
            this.yoffset = 0
        }
    }, i.prototype.init = function () {
        t.isFunction(this.renderer) && (this.renderer = new this.renderer), this.renderer.init.call(this, this.rendererOptions)
    }, i.prototype.draw = function (e, i) {
        for (var s = 0; s < t.jqplot.preDrawLegendHooks.length; s++)t.jqplot.preDrawLegendHooks[s].call(this, e);
        return this.renderer.draw.call(this, e, i)
    }, i.prototype.pack = function (t) {
        this.renderer.pack.call(this, t)
    }, s.prototype = new t.jqplot.ElemContainer, s.prototype.constructor = s, s.prototype.init = function () {
        t.isFunction(this.renderer) && (this.renderer = new this.renderer), this.renderer.init.call(this, this.rendererOptions)
    }, s.prototype.draw = function (t) {
        return this.renderer.draw.call(this, t)
    }, s.prototype.pack = function () {
        this.renderer.pack.call(this)
    }, r.prototype = new t.jqplot.ElemContainer, r.prototype.constructor = r, r.prototype.init = function (e, i, s) {
        this.index = e, this.gridBorderWidth = i;
        var r, a, n = this.data, o = [];
        for (r = 0, a = n.length; a > r; r++)if (this.breakOnNull)o.push(n[r]); else {
            if (null == n[r] || null == n[r][0] || null == n[r][1])continue;
            o.push(n[r])
        }
        if (this.data = o, this.color || (this.color = s.colorGenerator.get(this.index)), this.negativeColor || (this.negativeColor = s.negativeColorGenerator.get(this.index)), this.fillColor || (this.fillColor = this.color), this.fillAlpha) {
            var h = t.jqplot.normalize2rgb(this.fillColor), h = t.jqplot.getColorComponents(h);
            this.fillColor = "rgba(" + h[0] + "," + h[1] + "," + h[2] + "," + this.fillAlpha + ")"
        }
        t.isFunction(this.renderer) && (this.renderer = new this.renderer), this.renderer.init.call(this, this.rendererOptions, s), this.markerRenderer = new this.markerRenderer, this.markerOptions.color || (this.markerOptions.color = this.color), null == this.markerOptions.show && (this.markerOptions.show = this.showMarker), this.showMarker = this.markerOptions.show, this.markerRenderer.init(this.markerOptions)
    }, r.prototype.draw = function (e, i, s) {
        var r = i == T ? {} : i;
        e = e == T ? this.canvas._ctx : e;
        var a, n, o;
        for (a = 0; a < t.jqplot.preDrawSeriesHooks.length; a++)t.jqplot.preDrawSeriesHooks[a].call(this, e, r);
        for (this.show && (this.renderer.setGridData.call(this, s), r.preventJqPlotSeriesDrawTrigger || t(e.canvas).trigger("jqplotSeriesDraw", [this.data, this.gridData]), n = [], n = r.data ? r.data : this._stack ? this._plotData : this.data, o = r.gridData || this.renderer.makeGridData.call(this, n, s), "line" === this._type && this.renderer.smooth && this.renderer._smoothedData.length && (o = this.renderer._smoothedData), this.renderer.draw.call(this, e, o, r, s)), a = 0; a < t.jqplot.postDrawSeriesHooks.length; a++)t.jqplot.postDrawSeriesHooks[a].call(this, e, r, s);
        e = i = s = a = n = o = null
    }, r.prototype.drawShadow = function (e, i, s) {
        var r = i == T ? {} : i;
        e = e == T ? this.shadowCanvas._ctx : e;
        var a, n, o;
        for (a = 0; a < t.jqplot.preDrawSeriesShadowHooks.length; a++)t.jqplot.preDrawSeriesShadowHooks[a].call(this, e, r);
        for (this.shadow && (this.renderer.setGridData.call(this, s), n = [], n = r.data ? r.data : this._stack ? this._plotData : this.data, o = r.gridData || this.renderer.makeGridData.call(this, n, s), this.renderer.drawShadow.call(this, e, o, r, s)), a = 0; a < t.jqplot.postDrawSeriesShadowHooks.length; a++)t.jqplot.postDrawSeriesShadowHooks[a].call(this, e, r);
        e = i = s = a = n = o = null
    }, r.prototype.toggleDisplay = function (t, e) {
        var i, s;
        i = t.data.series ? t.data.series : this, t.data.speed && (s = t.data.speed), s ? i.canvas._elem.is(":hidden") || !i.show ? (i.show = !0, i.canvas._elem.removeClass("jqplot-series-hidden"), i.shadowCanvas._elem && i.shadowCanvas._elem.fadeIn(s), i.canvas._elem.fadeIn(s, e), i.canvas._elem.nextAll(".jqplot-point-label.jqplot-series-" + i.index).fadeIn(s)) : (i.show = !1, i.canvas._elem.addClass("jqplot-series-hidden"), i.shadowCanvas._elem && i.shadowCanvas._elem.fadeOut(s), i.canvas._elem.fadeOut(s, e), i.canvas._elem.nextAll(".jqplot-point-label.jqplot-series-" + i.index).fadeOut(s)) : i.canvas._elem.is(":hidden") || !i.show ? (i.show = !0, i.canvas._elem.removeClass("jqplot-series-hidden"), i.shadowCanvas._elem && i.shadowCanvas._elem.show(), i.canvas._elem.show(0, e), i.canvas._elem.nextAll(".jqplot-point-label.jqplot-series-" + i.index).show()) : (i.show = !1, i.canvas._elem.addClass("jqplot-series-hidden"), i.shadowCanvas._elem && i.shadowCanvas._elem.hide(), i.canvas._elem.hide(0, e), i.canvas._elem.nextAll(".jqplot-point-label.jqplot-series-" + i.index).hide())
    }, a.prototype = new t.jqplot.ElemContainer, a.prototype.constructor = a, a.prototype.init = function () {
        t.isFunction(this.renderer) && (this.renderer = new this.renderer), this.renderer.init.call(this, this.rendererOptions)
    }, a.prototype.createElement = function (t, e) {
        return this._offsets = t, this.renderer.createElement.call(this, e)
    }, a.prototype.draw = function () {
        this.renderer.draw.call(this)
    }, t.jqplot.GenericCanvas = function () {
        t.jqplot.ElemContainer.call(this), this._ctx
    }, t.jqplot.GenericCanvas.prototype = new t.jqplot.ElemContainer, t.jqplot.GenericCanvas.prototype.constructor = t.jqplot.GenericCanvas, t.jqplot.GenericCanvas.prototype.createElement = function (e, i, s, r) {
        this._offsets = e;
        var a = "jqplot";
        i != T && (a = i);
        var n;
        return n = r.canvasManager.getCanvas(), null != s && (this._plotDimensions = s), n.width = this._plotDimensions.width - this._offsets.left - this._offsets.right, n.height = this._plotDimensions.height - this._offsets.top - this._offsets.bottom, this._elem = t(n), this._elem.css({position: "absolute", left: this._offsets.left, top: this._offsets.top}), this._elem.addClass(a), n = r.canvasManager.initCanvas(n), n = null, this._elem
    }, t.jqplot.GenericCanvas.prototype.setContext = function () {
        return this._ctx = this._elem.get(0).getContext("2d"), this._ctx
    }, t.jqplot.GenericCanvas.prototype.resetCanvas = function () {
        this._elem && (t.jqplot.use_excanvas && window.G_vmlCanvasManager.uninitElement !== T && window.G_vmlCanvasManager.uninitElement(this._elem.get(0)), this._elem.emptyForce()), this._ctx = null
    }, t.jqplot.HooksManager = function () {
        this.hooks = [], this.args = []
    }, t.jqplot.HooksManager.prototype.addOnce = function (t, e) {
        e = e || [];
        for (var i = !1, s = 0, r = this.hooks.length; r > s; s++)this.hooks[s] == t && (i = !0);
        i || (this.hooks.push(t), this.args.push(e))
    }, t.jqplot.HooksManager.prototype.add = function (t, e) {
        e = e || [], this.hooks.push(t), this.args.push(e)
    }, t.jqplot.EventListenerManager = function () {
        this.hooks = []
    }, t.jqplot.EventListenerManager.prototype.addOnce = function (t, e) {
        for (var i, s, r = !1, s = 0, a = this.hooks.length; a > s; s++)i = this.hooks[s], i[0] == t && i[1] == e && (r = !0);
        r || this.hooks.push([t, e])
    }, t.jqplot.EventListenerManager.prototype.add = function (t, e) {
        this.hooks.push([t, e])
    };
    var P = ["yMidAxis", "xaxis", "yaxis", "x2axis", "y2axis", "y3axis", "y4axis", "y5axis", "y6axis", "y7axis", "y8axis", "y9axis"];
    t.jqplot.computeHighlightColors = function (e) {
        var i;
        if (t.isArray(e)) {
            i = [];
            for (var s = 0; s < e.length; s++) {
                for (var r = t.jqplot.getColorComponents(e[s]), a = [r[0], r[1], r[2]], n = a[0] + a[1] + a[2], o = 0; 3 > o; o++)a[o] = n > 660 ? .85 * a[o] : .73 * a[o] + 90, a[o] = parseInt(a[o], 10), a[o] > 255 ? 255 : a[o];
                a[3] = .3 + .35 * r[3], i.push("rgba(" + a[0] + "," + a[1] + "," + a[2] + "," + a[3] + ")")
            }
        } else {
            for (var r = t.jqplot.getColorComponents(e), a = [r[0], r[1], r[2]], n = a[0] + a[1] + a[2], o = 0; 3 > o; o++)a[o] = n > 660 ? .85 * a[o] : .73 * a[o] + 90, a[o] = parseInt(a[o], 10), a[o] > 255 ? 255 : a[o];
            a[3] = .3 + .35 * r[3], i = "rgba(" + a[0] + "," + a[1] + "," + a[2] + "," + a[3] + ")"
        }
        return i
    }, t.jqplot.ColorGenerator = function (e) {
        e = e || t.jqplot.config.defaultColors;
        var i = 0;
        this.next = function () {
            return i < e.length ? e[i++] : (i = 0, e[i++])
        }, this.previous = function () {
            return i > 0 ? e[i--] : (i = e.length - 1, e[i])
        }, this.get = function (t) {
            var i = t - e.length * Math.floor(t / e.length);
            return e[i]
        }, this.setColors = function (t) {
            e = t
        }, this.reset = function () {
            i = 0
        }, this.getIndex = function () {
            return i
        }, this.setIndex = function (t) {
            i = t
        }
    }, t.jqplot.hex2rgb = function (t, e) {
        t = t.replace("#", ""), 3 == t.length && (t = t.charAt(0) + t.charAt(0) + t.charAt(1) + t.charAt(1) + t.charAt(2) + t.charAt(2));
        var i;
        return i = "rgba(" + parseInt(t.slice(0, 2), 16) + ", " + parseInt(t.slice(2, 4), 16) + ", " + parseInt(t.slice(4, 6), 16), e && (i += ", " + e), i += ")"
    }, t.jqplot.rgb2hex = function (t) {
        for (var e = /rgba?\( *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *(?:, *[0-9.]*)?\)/, i = t.match(e), s = "#", r = 1; 4 > r; r++) {
            var a;
            -1 != i[r].search(/%/) ? (a = parseInt(255 * i[r] / 100, 10).toString(16), 1 == a.length && (a = "0" + a)) : (a = parseInt(i[r], 10).toString(16), 1 == a.length && (a = "0" + a)), s += a
        }
        return s
    }, t.jqplot.normalize2rgb = function (e, i) {
        if (-1 != e.search(/^ *rgba?\(/))return e;
        if (-1 != e.search(/^ *#?[0-9a-fA-F]?[0-9a-fA-F]/))return t.jqplot.hex2rgb(e, i);
        throw new Error("Invalid color spec")
    }, t.jqplot.getColorComponents = function (e) {
        e = t.jqplot.colorKeywordMap[e] || e;
        for (var i = t.jqplot.normalize2rgb(e), s = /rgba?\( *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *,? *([0-9.]* *)?\)/, r = i.match(s), a = [], n = 1; 4 > n; n++)a[n - 1] = -1 != r[n].search(/%/) ? parseInt(255 * r[n] / 100, 10) : parseInt(r[n], 10);
        return a[3] = parseFloat(r[4]) ? parseFloat(r[4]) : 1, a
    }, t.jqplot.colorKeywordMap = {aliceblue: "rgb(240, 248, 255)", antiquewhite: "rgb(250, 235, 215)", aqua: "rgb( 0, 255, 255)", aquamarine: "rgb(127, 255, 212)", azure: "rgb(240, 255, 255)", beige: "rgb(245, 245, 220)", bisque: "rgb(255, 228, 196)", black: "rgb( 0, 0, 0)", blanchedalmond: "rgb(255, 235, 205)", blue: "rgb( 0, 0, 255)", blueviolet: "rgb(138, 43, 226)", brown: "rgb(165, 42, 42)", burlywood: "rgb(222, 184, 135)", cadetblue: "rgb( 95, 158, 160)", chartreuse: "rgb(127, 255, 0)", chocolate: "rgb(210, 105, 30)", coral: "rgb(255, 127, 80)", cornflowerblue: "rgb(100, 149, 237)", cornsilk: "rgb(255, 248, 220)", crimson: "rgb(220, 20, 60)", cyan: "rgb( 0, 255, 255)", darkblue: "rgb( 0, 0, 139)", darkcyan: "rgb( 0, 139, 139)", darkgoldenrod: "rgb(184, 134, 11)", darkgray: "rgb(169, 169, 169)", darkgreen: "rgb( 0, 100, 0)", darkgrey: "rgb(169, 169, 169)", darkkhaki: "rgb(189, 183, 107)", darkmagenta: "rgb(139, 0, 139)", darkolivegreen: "rgb( 85, 107, 47)", darkorange: "rgb(255, 140, 0)", darkorchid: "rgb(153, 50, 204)", darkred: "rgb(139, 0, 0)", darksalmon: "rgb(233, 150, 122)", darkseagreen: "rgb(143, 188, 143)", darkslateblue: "rgb( 72, 61, 139)", darkslategray: "rgb( 47, 79, 79)", darkslategrey: "rgb( 47, 79, 79)", darkturquoise: "rgb( 0, 206, 209)", darkviolet: "rgb(148, 0, 211)", deeppink: "rgb(255, 20, 147)", deepskyblue: "rgb( 0, 191, 255)", dimgray: "rgb(105, 105, 105)", dimgrey: "rgb(105, 105, 105)", dodgerblue: "rgb( 30, 144, 255)", firebrick: "rgb(178, 34, 34)", floralwhite: "rgb(255, 250, 240)", forestgreen: "rgb( 34, 139, 34)", fuchsia: "rgb(255, 0, 255)", gainsboro: "rgb(220, 220, 220)", ghostwhite: "rgb(248, 248, 255)", gold: "rgb(255, 215, 0)", goldenrod: "rgb(218, 165, 32)", gray: "rgb(128, 128, 128)", grey: "rgb(128, 128, 128)", green: "rgb( 0, 128, 0)", greenyellow: "rgb(173, 255, 47)", honeydew: "rgb(240, 255, 240)", hotpink: "rgb(255, 105, 180)", indianred: "rgb(205, 92, 92)", indigo: "rgb( 75, 0, 130)", ivory: "rgb(255, 255, 240)", khaki: "rgb(240, 230, 140)", lavender: "rgb(230, 230, 250)", lavenderblush: "rgb(255, 240, 245)", lawngreen: "rgb(124, 252, 0)", lemonchiffon: "rgb(255, 250, 205)", lightblue: "rgb(173, 216, 230)", lightcoral: "rgb(240, 128, 128)", lightcyan: "rgb(224, 255, 255)", lightgoldenrodyellow: "rgb(250, 250, 210)", lightgray: "rgb(211, 211, 211)", lightgreen: "rgb(144, 238, 144)", lightgrey: "rgb(211, 211, 211)", lightpink: "rgb(255, 182, 193)", lightsalmon: "rgb(255, 160, 122)", lightseagreen: "rgb( 32, 178, 170)", lightskyblue: "rgb(135, 206, 250)", lightslategray: "rgb(119, 136, 153)", lightslategrey: "rgb(119, 136, 153)", lightsteelblue: "rgb(176, 196, 222)", lightyellow: "rgb(255, 255, 224)", lime: "rgb( 0, 255, 0)", limegreen: "rgb( 50, 205, 50)", linen: "rgb(250, 240, 230)", magenta: "rgb(255, 0, 255)", maroon: "rgb(128, 0, 0)", mediumaquamarine: "rgb(102, 205, 170)", mediumblue: "rgb( 0, 0, 205)", mediumorchid: "rgb(186, 85, 211)", mediumpurple: "rgb(147, 112, 219)", mediumseagreen: "rgb( 60, 179, 113)", mediumslateblue: "rgb(123, 104, 238)", mediumspringgreen: "rgb( 0, 250, 154)", mediumturquoise: "rgb( 72, 209, 204)", mediumvioletred: "rgb(199, 21, 133)", midnightblue: "rgb( 25, 25, 112)", mintcream: "rgb(245, 255, 250)", mistyrose: "rgb(255, 228, 225)", moccasin: "rgb(255, 228, 181)", navajowhite: "rgb(255, 222, 173)", navy: "rgb( 0, 0, 128)", oldlace: "rgb(253, 245, 230)", olive: "rgb(128, 128, 0)", olivedrab: "rgb(107, 142, 35)", orange: "rgb(255, 165, 0)", orangered: "rgb(255, 69, 0)", orchid: "rgb(218, 112, 214)", palegoldenrod: "rgb(238, 232, 170)", palegreen: "rgb(152, 251, 152)", paleturquoise: "rgb(175, 238, 238)", palevioletred: "rgb(219, 112, 147)", papayawhip: "rgb(255, 239, 213)", peachpuff: "rgb(255, 218, 185)", peru: "rgb(205, 133, 63)", pink: "rgb(255, 192, 203)", plum: "rgb(221, 160, 221)", powderblue: "rgb(176, 224, 230)", purple: "rgb(128, 0, 128)", red: "rgb(255, 0, 0)", rosybrown: "rgb(188, 143, 143)", royalblue: "rgb( 65, 105, 225)", saddlebrown: "rgb(139, 69, 19)", salmon: "rgb(250, 128, 114)", sandybrown: "rgb(244, 164, 96)", seagreen: "rgb( 46, 139, 87)", seashell: "rgb(255, 245, 238)", sienna: "rgb(160, 82, 45)", silver: "rgb(192, 192, 192)", skyblue: "rgb(135, 206, 235)", slateblue: "rgb(106, 90, 205)", slategray: "rgb(112, 128, 144)", slategrey: "rgb(112, 128, 144)", snow: "rgb(255, 250, 250)", springgreen: "rgb( 0, 255, 127)", steelblue: "rgb( 70, 130, 180)", tan: "rgb(210, 180, 140)", teal: "rgb( 0, 128, 128)", thistle: "rgb(216, 191, 216)", tomato: "rgb(255, 99, 71)", turquoise: "rgb( 64, 224, 208)", violet: "rgb(238, 130, 238)", wheat: "rgb(245, 222, 179)", white: "rgb(255, 255, 255)", whitesmoke: "rgb(245, 245, 245)", yellow: "rgb(255, 255, 0)", yellowgreen: "rgb(154, 205, 50)"}, t.jqplot.AxisLabelRenderer = function (e) {
        t.jqplot.ElemContainer.call(this), this.axis, this.show = !0, this.label = "", this.fontFamily = null, this.fontSize = null, this.textColor = null, this._elem, this.escapeHTML = !1, t.extend(!0, this, e)
    }, t.jqplot.AxisLabelRenderer.prototype = new t.jqplot.ElemContainer, t.jqplot.AxisLabelRenderer.prototype.constructor = t.jqplot.AxisLabelRenderer, t.jqplot.AxisLabelRenderer.prototype.init = function (e) {
        t.extend(!0, this, e)
    }, t.jqplot.AxisLabelRenderer.prototype.draw = function () {
        return this._elem && (this._elem.emptyForce(), this._elem = null), this._elem = t('<div style="position:absolute;" class="jqplot-' + this.axis + '-label"></div>'), Number(this.label) && this._elem.css("white-space", "nowrap"), this.escapeHTML ? this._elem.text(this.label) : this._elem.html(this.label), this.fontFamily && this._elem.css("font-family", this.fontFamily), this.fontSize && this._elem.css("font-size", this.fontSize), this.textColor && this._elem.css("color", this.textColor), this._elem
    }, t.jqplot.AxisLabelRenderer.prototype.pack = function () {
    }, t.jqplot.AxisTickRenderer = function (e) {
        t.jqplot.ElemContainer.call(this), this.mark = "outside", this.axis, this.showMark = !0, this.showGridline = !0, this.isMinorTick = !1, this.size = 4, this.markSize = 6, this.show = !0, this.showLabel = !0, this.label = null, this.value = null, this._styles = {}, this.formatter = t.jqplot.DefaultTickFormatter, this.prefix = "", this.suffix = "", this.formatString = "", this.fontFamily, this.fontSize, this.textColor, this.escapeHTML = !1, this._elem, this._breakTick = !1, t.extend(!0, this, e)
    }, t.jqplot.AxisTickRenderer.prototype.init = function (e) {
        t.extend(!0, this, e)
    }, t.jqplot.AxisTickRenderer.prototype = new t.jqplot.ElemContainer, t.jqplot.AxisTickRenderer.prototype.constructor = t.jqplot.AxisTickRenderer, t.jqplot.AxisTickRenderer.prototype.setTick = function (t, e, i) {
        return this.value = t, this.axis = e, i && (this.isMinorTick = !0), this
    }, t.jqplot.AxisTickRenderer.prototype.draw = function () {
        null === this.label && (this.label = this.prefix + this.formatter(this.formatString, this.value) + this.suffix);
        var e = {position: "absolute"};
        Number(this.label) && (e.whitSpace = "nowrap"), this._elem && (this._elem.emptyForce(), this._elem = null), this._elem = t(document.createElement("div")), this._elem.addClass("jqplot-" + this.axis + "-tick"), this.escapeHTML ? this._elem.text(this.label) : this._elem.html(this.label), this._elem.css(e);
        for (var i in this._styles)this._elem.css(i, this._styles[i]);
        return this.fontFamily && this._elem.css("font-family", this.fontFamily), this.fontSize && this._elem.css("font-size", this.fontSize), this.textColor && this._elem.css("color", this.textColor), this._breakTick && this._elem.addClass("jqplot-breakTick"), this._elem
    }, t.jqplot.DefaultTickFormatter = function (e, i) {
        return"number" == typeof i ? (e || (e = t.jqplot.config.defaultTickFormatString), t.jqplot.sprintf(e, i)) : String(i)
    }, t.jqplot.PercentTickFormatter = function (e, i) {
        return"number" == typeof i ? (i = 100 * i, e || (e = t.jqplot.config.defaultTickFormatString), t.jqplot.sprintf(e, i)) : String(i)
    }, t.jqplot.AxisTickRenderer.prototype.pack = function () {
    }, t.jqplot.CanvasGridRenderer = function () {
        this.shadowRenderer = new t.jqplot.ShadowRenderer
    }, t.jqplot.CanvasGridRenderer.prototype.init = function (e) {
        this._ctx, t.extend(!0, this, e);
        var i = {lineJoin: "miter", lineCap: "round", fill: !1, isarc: !1, angle: this.shadowAngle, offset: this.shadowOffset, alpha: this.shadowAlpha, depth: this.shadowDepth, lineWidth: this.shadowWidth, closePath: !1, strokeStyle: this.shadowColor};
        this.renderer.shadowRenderer.init(i)
    }, t.jqplot.CanvasGridRenderer.prototype.createElement = function (e) {
        var i;
        this._elem && (t.jqplot.use_excanvas && window.G_vmlCanvasManager.uninitElement !== T && (i = this._elem.get(0), window.G_vmlCanvasManager.uninitElement(i), i = null), this._elem.emptyForce(), this._elem = null), i = e.canvasManager.getCanvas();
        var s = this._plotDimensions.width, r = this._plotDimensions.height;
        return i.width = s, i.height = r, this._elem = t(i), this._elem.addClass("jqplot-grid-canvas"), this._elem.css({position: "absolute", left: 0, top: 0}), i = e.canvasManager.initCanvas(i), this._top = this._offsets.top, this._bottom = r - this._offsets.bottom, this._left = this._offsets.left, this._right = s - this._offsets.right, this._width = this._right - this._left, this._height = this._bottom - this._top, i = null, this._elem
    }, t.jqplot.CanvasGridRenderer.prototype.draw = function () {
        function e(e, s, r, a, n) {
            i.save(), n = n || {}, (null == n.lineWidth || 0 != n.lineWidth) && (t.extend(!0, i, n), i.beginPath(), i.moveTo(e, s), i.lineTo(r, a), i.stroke(), i.restore())
        }

        this._ctx = this._elem.get(0).getContext("2d");
        var i = this._ctx, s = this._axes;
        i.save(), i.clearRect(0, 0, this._plotDimensions.width, this._plotDimensions.height), i.fillStyle = this.backgroundColor || this.background, i.fillRect(this._left, this._top, this._width, this._height), i.save(), i.lineJoin = "miter", i.lineCap = "butt", i.lineWidth = this.gridLineWidth, i.strokeStyle = this.gridLineColor;
        for (var r, a, n, o, h = ["xaxis", "yaxis", "x2axis", "y2axis"], l = 4; l > 0; l--) {
            var d = h[l - 1], p = s[d], c = p._ticks, u = c.length;
            if (p.show) {
                if (p.drawBaseline) {
                    var g = {};
                    switch (null !== p.baselineWidth && (g.lineWidth = p.baselineWidth), null !== p.baselineColor && (g.strokeStyle = p.baselineColor), d) {
                        case"xaxis":
                            e(this._left, this._bottom, this._right, this._bottom, g);
                            break;
                        case"yaxis":
                            e(this._left, this._bottom, this._left, this._top, g);
                            break;
                        case"x2axis":
                            e(this._left, this._bottom, this._right, this._bottom, g);
                            break;
                        case"y2axis":
                            e(this._right, this._bottom, this._right, this._top, g)
                    }
                }
                for (var f = u; f > 0; f--) {
                    var m = c[f - 1];
                    if (m.show) {
                        var _ = Math.round(p.u2p(m.value)) + .5;
                        switch (d) {
                            case"xaxis":
                                if (m.showGridline && this.drawGridlines && (!m.isMinorTick && p.drawMajorGridlines || m.isMinorTick && p.drawMinorGridlines) && e(_, this._top, _, this._bottom), m.showMark && m.mark && (!m.isMinorTick && p.drawMajorTickMarks || m.isMinorTick && p.drawMinorTickMarks)) {
                                    n = m.markSize, o = m.mark;
                                    var _ = Math.round(p.u2p(m.value)) + .5;
                                    switch (o) {
                                        case"outside":
                                            r = this._bottom, a = this._bottom + n;
                                            break;
                                        case"inside":
                                            r = this._bottom - n, a = this._bottom;
                                            break;
                                        case"cross":
                                            r = this._bottom - n, a = this._bottom + n;
                                            break;
                                        default:
                                            r = this._bottom, a = this._bottom + n
                                    }
                                    this.shadow && this.renderer.shadowRenderer.draw(i, [
                                        [_, r],
                                        [_, a]
                                    ], {lineCap: "butt", lineWidth: this.gridLineWidth, offset: .75 * this.gridLineWidth, depth: 2, fill: !1, closePath: !1}), e(_, r, _, a)
                                }
                                break;
                            case"yaxis":
                                if (m.showGridline && this.drawGridlines && (!m.isMinorTick && p.drawMajorGridlines || m.isMinorTick && p.drawMinorGridlines) && e(this._right, _, this._left, _), m.showMark && m.mark && (!m.isMinorTick && p.drawMajorTickMarks || m.isMinorTick && p.drawMinorTickMarks)) {
                                    n = m.markSize, o = m.mark;
                                    var _ = Math.round(p.u2p(m.value)) + .5;
                                    switch (o) {
                                        case"outside":
                                            r = this._left - n, a = this._left;
                                            break;
                                        case"inside":
                                            r = this._left, a = this._left + n;
                                            break;
                                        case"cross":
                                            r = this._left - n, a = this._left + n;
                                            break;
                                        default:
                                            r = this._left - n, a = this._left
                                    }
                                    this.shadow && this.renderer.shadowRenderer.draw(i, [
                                        [r, _],
                                        [a, _]
                                    ], {lineCap: "butt", lineWidth: 1.5 * this.gridLineWidth, offset: .75 * this.gridLineWidth, fill: !1, closePath: !1}), e(r, _, a, _, {strokeStyle: p.borderColor})
                                }
                                break;
                            case"x2axis":
                                if (m.showGridline && this.drawGridlines && (!m.isMinorTick && p.drawMajorGridlines || m.isMinorTick && p.drawMinorGridlines) && e(_, this._bottom, _, this._top), m.showMark && m.mark && (!m.isMinorTick && p.drawMajorTickMarks || m.isMinorTick && p.drawMinorTickMarks)) {
                                    n = m.markSize, o = m.mark;
                                    var _ = Math.round(p.u2p(m.value)) + .5;
                                    switch (o) {
                                        case"outside":
                                            r = this._top - n, a = this._top;
                                            break;
                                        case"inside":
                                            r = this._top, a = this._top + n;
                                            break;
                                        case"cross":
                                            r = this._top - n, a = this._top + n;
                                            break;
                                        default:
                                            r = this._top - n, a = this._top
                                    }
                                    this.shadow && this.renderer.shadowRenderer.draw(i, [
                                        [_, r],
                                        [_, a]
                                    ], {lineCap: "butt", lineWidth: this.gridLineWidth, offset: .75 * this.gridLineWidth, depth: 2, fill: !1, closePath: !1}), e(_, r, _, a)
                                }
                                break;
                            case"y2axis":
                                if (m.showGridline && this.drawGridlines && (!m.isMinorTick && p.drawMajorGridlines || m.isMinorTick && p.drawMinorGridlines) && e(this._left, _, this._right, _), m.showMark && m.mark && (!m.isMinorTick && p.drawMajorTickMarks || m.isMinorTick && p.drawMinorTickMarks)) {
                                    n = m.markSize, o = m.mark;
                                    var _ = Math.round(p.u2p(m.value)) + .5;
                                    switch (o) {
                                        case"outside":
                                            r = this._right, a = this._right + n;
                                            break;
                                        case"inside":
                                            r = this._right - n, a = this._right;
                                            break;
                                        case"cross":
                                            r = this._right - n, a = this._right + n;
                                            break;
                                        default:
                                            r = this._right, a = this._right + n
                                    }
                                    this.shadow && this.renderer.shadowRenderer.draw(i, [
                                        [r, _],
                                        [a, _]
                                    ], {lineCap: "butt", lineWidth: 1.5 * this.gridLineWidth, offset: .75 * this.gridLineWidth, fill: !1, closePath: !1}), e(r, _, a, _, {strokeStyle: p.borderColor})
                                }
                        }
                    }
                }
                m = null
            }
            p = null, c = null
        }
        h = ["y3axis", "y4axis", "y5axis", "y6axis", "y7axis", "y8axis", "y9axis", "yMidAxis"];
        for (var l = 7; l > 0; l--) {
            var p = s[h[l - 1]], c = p._ticks;
            if (p.show) {
                var v = c[p.numberTicks - 1], x = c[0], b = p.getLeft(), w = [
                    [b, v.getTop() + v.getHeight() / 2],
                    [b, x.getTop() + x.getHeight() / 2 + 1]
                ];
                this.shadow && this.renderer.shadowRenderer.draw(i, w, {lineCap: "butt", fill: !1, closePath: !1}), e(w[0][0], w[0][1], w[1][0], w[1][1], {lineCap: "butt", strokeStyle: p.borderColor, lineWidth: p.borderWidth});
                for (var f = c.length; f > 0; f--) {
                    var m = c[f - 1];
                    n = m.markSize, o = m.mark;
                    var _ = Math.round(p.u2p(m.value)) + .5;
                    if (m.showMark && m.mark) {
                        switch (o) {
                            case"outside":
                                r = b, a = b + n;
                                break;
                            case"inside":
                                r = b - n, a = b;
                                break;
                            case"cross":
                                r = b - n, a = b + n;
                                break;
                            default:
                                r = b, a = b + n
                        }
                        w = [
                            [r, _],
                            [a, _]
                        ], this.shadow && this.renderer.shadowRenderer.draw(i, w, {lineCap: "butt", lineWidth: 1.5 * this.gridLineWidth, offset: .75 * this.gridLineWidth, fill: !1, closePath: !1}), e(r, _, a, _, {strokeStyle: p.borderColor})
                    }
                    m = null
                }
                x = null
            }
            p = null, c = null
        }
        if (i.restore(), this.shadow) {
            var w = [
                [this._left, this._bottom],
                [this._right, this._bottom],
                [this._right, this._top]
            ];
            this.renderer.shadowRenderer.draw(i, w)
        }
        0 != this.borderWidth && this.drawBorder && (e(this._left, this._top, this._right, this._top, {lineCap: "round", strokeStyle: s.x2axis.borderColor, lineWidth: s.x2axis.borderWidth}), e(this._right, this._top, this._right, this._bottom, {lineCap: "round", strokeStyle: s.y2axis.borderColor, lineWidth: s.y2axis.borderWidth}), e(this._right, this._bottom, this._left, this._bottom, {lineCap: "round", strokeStyle: s.xaxis.borderColor, lineWidth: s.xaxis.borderWidth}), e(this._left, this._bottom, this._left, this._top, {lineCap: "round", strokeStyle: s.yaxis.borderColor, lineWidth: s.yaxis.borderWidth})), i.restore(), i = null, s = null
    }, t.jqplot.DivTitleRenderer = function () {
    }, t.jqplot.DivTitleRenderer.prototype.init = function (e) {
        t.extend(!0, this, e)
    }, t.jqplot.DivTitleRenderer.prototype.draw = function () {
        this._elem && (this._elem.emptyForce(), this._elem = null);
        var e = (this.renderer, document.createElement("div"));
        if (this._elem = t(e), this._elem.addClass("jqplot-title"), this.text) {
            if (this.text) {
                var i;
                this.color ? i = this.color : this.textColor && (i = this.textColor);
                var s = {position: "absolute", top: "0px", left: "0px"};
                this._plotWidth && (s.width = this._plotWidth + "px"), this.fontSize && (s.fontSize = this.fontSize), s.textAlign = "string" == typeof this.textAlign ? this.textAlign : "center", i && (s.color = i), this.paddingBottom && (s.paddingBottom = this.paddingBottom), this.fontFamily && (s.fontFamily = this.fontFamily), this._elem.css(s), this.escapeHtml ? this._elem.text(this.text) : this._elem.html(this.text)
            }
        } else this.show = !1, this._elem.height(0), this._elem.width(0);
        return e = null, this._elem
    }, t.jqplot.DivTitleRenderer.prototype.pack = function () {
    };
    var I = .1;
    t.jqplot.LinePattern = function (e, i) {
        var s = {dotted: [I, t.jqplot.config.dotGapLength], dashed: [t.jqplot.config.dashLength, t.jqplot.config.gapLength], solid: null};
        if ("string" == typeof i)if ("." === i[0] || "-" === i[0]) {
            var r = i;
            i = [];
            for (var a = 0, n = r.length; n > a; a++) {
                if ("." === r[a])i.push(I); else {
                    if ("-" !== r[a])continue;
                    i.push(t.jqplot.config.dashLength)
                }
                i.push(t.jqplot.config.gapLength)
            }
        } else i = s[i];
        if (!i || !i.length)return e;
        var o = 0, h = i[0], l = 0, d = 0, p = 0, c = 0, u = function (t, i) {
            e.moveTo(t, i), l = t, d = i, p = t, c = i
        }, g = function (t, s) {
            var r = e.lineWidth, a = t - l, n = s - d, p = Math.sqrt(a * a + n * n);
            if (p > 0 && r > 0)for (a /= p, n /= p; ;) {
                var c = r * h;
                if (!(p > c)) {
                    l = t, d = s, 0 == (1 & o) ? e.lineTo(l, d) : e.moveTo(l, d), h -= p / r;
                    break
                }
                l += c * a, d += c * n, 0 == (1 & o) ? e.lineTo(l, d) : e.moveTo(l, d), p -= c, o++, o >= i.length && (o = 0), h = i[o]
            }
        }, f = function () {
            e.beginPath()
        }, m = function () {
            g(p, c)
        };
        return{moveTo: u, lineTo: g, beginPath: f, closePath: m}
    }, t.jqplot.LineRenderer = function () {
        this.shapeRenderer = new t.jqplot.ShapeRenderer, this.shadowRenderer = new t.jqplot.ShadowRenderer
    }, t.jqplot.LineRenderer.prototype.init = function (e, i) {
        e = e || {}, this._type = "line", this.renderer.animation = {show: !1, direction: "left", speed: 2500, _supported: !0}, this.renderer.smooth = !1, this.renderer.tension = null, this.renderer.constrainSmoothing = !0, this.renderer._smoothedData = [], this.renderer._smoothedPlotData = [], this.renderer._hiBandGridData = [], this.renderer._lowBandGridData = [], this.renderer._hiBandSmoothedData = [], this.renderer._lowBandSmoothedData = [], this.renderer.bandData = [], this.renderer.bands = {show: !1, hiData: [], lowData: [], color: this.color, showLines: !1, fill: !0, fillColor: null, _min: null, _max: null, interval: "3%"};
        var s = {highlightMouseOver: e.highlightMouseOver, highlightMouseDown: e.highlightMouseDown, highlightColor: e.highlightColor};
        delete e.highlightMouseOver, delete e.highlightMouseDown, delete e.highlightColor, t.extend(!0, this.renderer, e), this.renderer.options = e, this.renderer.bandData.length > 1 && (!e.bands || null == e.bands.show) ? this.renderer.bands.show = !0 : e.bands && null == e.bands.show && null != e.bands.interval && (this.renderer.bands.show = !0), this.fill && (this.renderer.bands.show = !1), this.renderer.bands.show && this.renderer.initBands.call(this, this.renderer.options, i), this._stack && (this.renderer.smooth = !1);
        var r = {lineJoin: this.lineJoin, lineCap: this.lineCap, fill: this.fill, isarc: !1, strokeStyle: this.color, fillStyle: this.fillColor, lineWidth: this.lineWidth, linePattern: this.linePattern, closePath: this.fill};
        this.renderer.shapeRenderer.init(r);
        var a = e.shadowOffset;
        null == a && (a = this.lineWidth > 2.5 ? 1.25 * (1 + .6 * (Math.atan(this.lineWidth / 2.5) / .785398163 - 1)) : 1.25 * Math.atan(this.lineWidth / 2.5) / .785398163);
        var n = {lineJoin: this.lineJoin, lineCap: this.lineCap, fill: this.fill, isarc: !1, angle: this.shadowAngle, offset: a, alpha: this.shadowAlpha, depth: this.shadowDepth, lineWidth: this.lineWidth, linePattern: this.linePattern, closePath: this.fill};
        if (this.renderer.shadowRenderer.init(n), this._areaPoints = [], this._boundingBox = [
            [],
            []
        ], !this.isTrendline && this.fill || this.renderer.bands.show) {
            if (this.highlightMouseOver = !0, this.highlightMouseDown = !1, this.highlightColor = null, s.highlightMouseDown && null == s.highlightMouseOver && (s.highlightMouseOver = !1), t.extend(!0, this, {highlightMouseOver: s.highlightMouseOver, highlightMouseDown: s.highlightMouseDown, highlightColor: s.highlightColor}), !this.highlightColor) {
                var o = this.renderer.bands.show ? this.renderer.bands.fillColor : this.fillColor;
                this.highlightColor = t.jqplot.computeHighlightColors(o)
            }
            this.highlighter && (this.highlighter.show = !1)
        }
        !this.isTrendline && i && (i.plugins.lineRenderer = {}, i.postInitHooks.addOnce(p), i.postDrawHooks.addOnce(c), i.eventListenerHooks.addOnce("jqplotMouseMove", f), i.eventListenerHooks.addOnce("jqplotMouseDown", m), i.eventListenerHooks.addOnce("jqplotMouseUp", _), i.eventListenerHooks.addOnce("jqplotClick", v), i.eventListenerHooks.addOnce("jqplotRightClick", x))
    }, t.jqplot.LineRenderer.prototype.initBands = function (e) {
        var i = e.bandData || [], s = this.renderer.bands;
        s.hiData = [], s.lowData = [];
        var r = this.data;
        if (s._max = null, s._min = null, 2 == i.length)if (t.isArray(i[0][0])) {
            for (var a, n = 0, o = 0, h = 0, l = i[0].length; l > h; h++)a = i[0][h], (null != a[1] && a[1] > s._max || null == s._max) && (s._max = a[1]), (null != a[1] && a[1] < s._min || null == s._min) && (s._min = a[1]);
            for (var h = 0, l = i[1].length; l > h; h++)a = i[1][h], (null != a[1] && a[1] > s._max || null == s._max) && (s._max = a[1], o = 1), (null != a[1] && a[1] < s._min || null == s._min) && (s._min = a[1], n = 1);
            o === n && (s.show = !1), s.hiData = i[o], s.lowData = i[n]
        } else if (i[0].length === r.length && i[1].length === r.length)for (var d = i[0][0] > i[1][0] ? 0 : 1, p = d ? 0 : 1, h = 0, l = r.length; l > h; h++)s.hiData.push([r[h][0], i[d][h]]), s.lowData.push([r[h][0], i[p][h]]); else s.show = !1; else if (i.length > 2 && !t.isArray(i[0][0]))for (var d = i[0][0] > i[0][1] ? 0 : 1, p = d ? 0 : 1, h = 0, l = i.length; l > h; h++)s.hiData.push([r[h][0], i[h][d]]), s.lowData.push([r[h][0], i[h][p]]); else {
            var c = s.interval, u = null, g = null, f = null, m = null;
            if (t.isArray(c) ? (u = c[0], g = c[1]) : u = c, isNaN(u) ? "%" === u.charAt(u.length - 1) && (f = "multiply", u = parseFloat(u) / 100 + 1) : (u = parseFloat(u), f = "add"), null !== g && isNaN(g) ? "%" === g.charAt(g.length - 1) && (m = "multiply", g = parseFloat(g) / 100 + 1) : null !== g && (g = parseFloat(g), m = "add"), null !== u) {
                if (null === g && (g = -u, m = f, "multiply" === m && (g += 2)), g > u) {
                    var _ = u;
                    u = g, g = _, _ = f, f = m, m = _
                }
                for (var h = 0, l = r.length; l > h; h++) {
                    switch (f) {
                        case"add":
                            s.hiData.push([r[h][0], r[h][1] + u]);
                            break;
                        case"multiply":
                            s.hiData.push([r[h][0], r[h][1] * u])
                    }
                    switch (m) {
                        case"add":
                            s.lowData.push([r[h][0], r[h][1] + g]);
                            break;
                        case"multiply":
                            s.lowData.push([r[h][0], r[h][1] * g])
                    }
                }
            } else s.show = !1
        }
        for (var v = s.hiData, x = s.lowData, h = 0, l = v.length; l > h; h++)(null != v[h][1] && v[h][1] > s._max || null == s._max) && (s._max = v[h][1]);
        for (var h = 0, l = x.length; l > h; h++)(null != x[h][1] && x[h][1] < s._min || null == s._min) && (s._min = x[h][1]);
        if (null === s.fillColor) {
            var b = t.jqplot.getColorComponents(s.color);
            b[3] = .5 * b[3], s.fillColor = "rgba(" + b[0] + ", " + b[1] + ", " + b[2] + ", " + b[3] + ")"
        }
    }, t.jqplot.LineRenderer.prototype.setGridData = function () {
        var t = this._xaxis.series_u2p, e = this._yaxis.series_u2p, i = this._plotData, s = this._prevPlotData;
        this.gridData = [], this._prevGridData = [], this.renderer._smoothedData = [], this.renderer._smoothedPlotData = [], this.renderer._hiBandGridData = [], this.renderer._lowBandGridData = [], this.renderer._hiBandSmoothedData = [], this.renderer._lowBandSmoothedData = [];
        for (var r = this.renderer.bands, a = !1, n = 0, o = i.length; o > n; n++)null != i[n][0] && null != i[n][1] ? this.gridData.push([t.call(this._xaxis, i[n][0]), e.call(this._yaxis, i[n][1])]) : null == i[n][0] ? (a = !0, this.gridData.push([null, e.call(this._yaxis, i[n][1])])) : null == i[n][1] && (a = !0, this.gridData.push([t.call(this._xaxis, i[n][0]), null])), null != s[n] && null != s[n][0] && null != s[n][1] ? this._prevGridData.push([t.call(this._xaxis, s[n][0]), e.call(this._yaxis, s[n][1])]) : null != s[n] && null == s[n][0] ? this._prevGridData.push([null, e.call(this._yaxis, s[n][1])]) : null != s[n] && null != s[n][0] && null == s[n][1] && this._prevGridData.push([t.call(this._xaxis, s[n][0]), null]);
        if (a && (this.renderer.smooth = !1, "line" === this._type && (r.show = !1)), "line" === this._type && r.show) {
            for (var n = 0, o = r.hiData.length; o > n; n++)this.renderer._hiBandGridData.push([t.call(this._xaxis, r.hiData[n][0]), e.call(this._yaxis, r.hiData[n][1])]);
            for (var n = 0, o = r.lowData.length; o > n; n++)this.renderer._lowBandGridData.push([t.call(this._xaxis, r.lowData[n][0]), e.call(this._yaxis, r.lowData[n][1])])
        }
        if ("line" === this._type && this.renderer.smooth && this.gridData.length > 2) {
            var h;
            this.renderer.constrainSmoothing ? (h = l.call(this, this.gridData), this.renderer._smoothedData = h[0], this.renderer._smoothedPlotData = h[1], r.show && (h = l.call(this, this.renderer._hiBandGridData), this.renderer._hiBandSmoothedData = h[0], h = l.call(this, this.renderer._lowBandGridData), this.renderer._lowBandSmoothedData = h[0]), h = null) : (h = d.call(this, this.gridData), this.renderer._smoothedData = h[0], this.renderer._smoothedPlotData = h[1], r.show && (h = d.call(this, this.renderer._hiBandGridData), this.renderer._hiBandSmoothedData = h[0], h = d.call(this, this.renderer._lowBandGridData), this.renderer._lowBandSmoothedData = h[0]), h = null)
        }
    }, t.jqplot.LineRenderer.prototype.makeGridData = function (t) {
        var e = this._xaxis.series_u2p, i = this._yaxis.series_u2p, s = [];
        this.renderer._smoothedData = [], this.renderer._smoothedPlotData = [], this.renderer._hiBandGridData = [], this.renderer._lowBandGridData = [], this.renderer._hiBandSmoothedData = [], this.renderer._lowBandSmoothedData = [];
        for (var r = this.renderer.bands, a = !1, n = 0; n < t.length; n++)null != t[n][0] && null != t[n][1] ? s.push([e.call(this._xaxis, t[n][0]), i.call(this._yaxis, t[n][1])]) : null == t[n][0] ? (a = !0, s.push([null, i.call(this._yaxis, t[n][1])])) : null == t[n][1] && (a = !0, s.push([e.call(this._xaxis, t[n][0]), null]));
        if (a && (this.renderer.smooth = !1, "line" === this._type && (r.show = !1)), "line" === this._type && r.show) {
            for (var n = 0, o = r.hiData.length; o > n; n++)this.renderer._hiBandGridData.push([e.call(this._xaxis, r.hiData[n][0]), i.call(this._yaxis, r.hiData[n][1])]);
            for (var n = 0, o = r.lowData.length; o > n; n++)this.renderer._lowBandGridData.push([e.call(this._xaxis, r.lowData[n][0]), i.call(this._yaxis, r.lowData[n][1])])
        }
        if ("line" === this._type && this.renderer.smooth && s.length > 2) {
            var h;
            this.renderer.constrainSmoothing ? (h = l.call(this, s), this.renderer._smoothedData = h[0], this.renderer._smoothedPlotData = h[1], r.show && (h = l.call(this, this.renderer._hiBandGridData), this.renderer._hiBandSmoothedData = h[0], h = l.call(this, this.renderer._lowBandGridData), this.renderer._lowBandSmoothedData = h[0]), h = null) : (h = d.call(this, s), this.renderer._smoothedData = h[0], this.renderer._smoothedPlotData = h[1], r.show && (h = d.call(this, this.renderer._hiBandGridData), this.renderer._hiBandSmoothedData = h[0], h = d.call(this, this.renderer._lowBandGridData), this.renderer._lowBandSmoothedData = h[0]), h = null)
        }
        return s
    }, t.jqplot.LineRenderer.prototype.draw = function (e, i, s) {
        var r, a, n, o, h, l = t.extend(!0, {}, s), d = l.shadow != T ? l.shadow : this.shadow, p = l.showLine != T ? l.showLine : this.showLine, c = l.fill != T ? l.fill : this.fill, u = l.fillAndStroke != T ? l.fillAndStroke : this.fillAndStroke;
        if (e.save(), i.length) {
            if (p)if (c) {
                if (this.fillToZero) {
                    var g = this.negativeColor;
                    this.useNegativeColors || (g = l.fillStyle);
                    var f = !1, m = l.fillStyle;
                    if (u)var _ = i.slice(0);
                    if (0 != this.index && this._stack) {
                        for (var v = this._prevGridData, r = v.length; r > 0; r--)i.push(v[r - 1]);
                        d && this.renderer.shadowRenderer.draw(e, i, l), this._areaPoints = i, this.renderer.shapeRenderer.draw(e, i, l)
                    } else {
                        var x = [], b = this.renderer.smooth ? this.renderer._smoothedPlotData : this._plotData;
                        this._areaPoints = [];
                        {
                            var w = this._yaxis.series_u2p(this.fillToValue);
                            this._xaxis.series_u2p(this.fillToValue)
                        }
                        if (l.closePath = !0, "y" == this.fillAxis) {
                            x.push([i[0][0], w]), this._areaPoints.push([i[0][0], w]);
                            for (var r = 0; r < i.length - 1; r++)if (x.push(i[r]), this._areaPoints.push(i[r]), b[r][1] * b[r + 1][1] <= 0) {
                                b[r][1] < 0 ? (f = !0, l.fillStyle = g) : (f = !1, l.fillStyle = m);
                                var k = i[r][0] + (i[r + 1][0] - i[r][0]) * (w - i[r][1]) / (i[r + 1][1] - i[r][1]);
                                x.push([k, w]), this._areaPoints.push([k, w]), d && this.renderer.shadowRenderer.draw(e, x, l), this.renderer.shapeRenderer.draw(e, x, l), x = [
                                    [k, w]
                                ]
                            }
                            b[i.length - 1][1] < 0 ? (f = !0, l.fillStyle = g) : (f = !1, l.fillStyle = m), x.push(i[i.length - 1]), this._areaPoints.push(i[i.length - 1]), x.push([i[i.length - 1][0], w]), this._areaPoints.push([i[i.length - 1][0], w])
                        }
                        d && this.renderer.shadowRenderer.draw(e, x, l), this.renderer.shapeRenderer.draw(e, x, l)
                    }
                } else {
                    if (u)var _ = i.slice(0);
                    if (0 != this.index && this._stack)for (var v = this._prevGridData, r = v.length; r > 0; r--)i.push(v[r - 1]); else {
                        var y = e.canvas.height;
                        i.unshift([i[0][0], y]);
                        var j = i.length;
                        i.push([i[j - 1][0], y])
                    }
                    this._areaPoints = i, d && this.renderer.shadowRenderer.draw(e, i, l), this.renderer.shapeRenderer.draw(e, i, l)
                }
                if (u) {
                    var D = t.extend(!0, {}, l, {fill: !1, closePath: !1});
                    if (this.renderer.shapeRenderer.draw(e, _, D), this.markerRenderer.show)for (this.renderer.smooth && (_ = this.gridData), r = 0; r < _.length; r++)this.markerRenderer.draw(_[r][0], _[r][1], e, l.markerOptions)
                }
            } else {
                if (this.renderer.bands.show) {
                    var M, S = t.extend(!0, {}, l);
                    this.renderer.bands.showLines && (M = this.renderer.smooth ? this.renderer._hiBandSmoothedData : this.renderer._hiBandGridData, this.renderer.shapeRenderer.draw(e, M, l), M = this.renderer.smooth ? this.renderer._lowBandSmoothedData : this.renderer._lowBandGridData, this.renderer.shapeRenderer.draw(e, M, S)), this.renderer.bands.fill && (M = this.renderer.smooth ? this.renderer._hiBandSmoothedData.concat(this.renderer._lowBandSmoothedData.reverse()) : this.renderer._hiBandGridData.concat(this.renderer._lowBandGridData.reverse()), this._areaPoints = M, S.closePath = !0, S.fill = !0, S.fillStyle = this.renderer.bands.fillColor, this.renderer.shapeRenderer.draw(e, M, S))
                }
                d && this.renderer.shadowRenderer.draw(e, i, l), this.renderer.shapeRenderer.draw(e, i, l)
            }
            var a = o = n = h = null;
            for (r = 0; r < this._areaPoints.length; r++) {
                var q = this._areaPoints[r];
                (a > q[0] || null == a) && (a = q[0]), (h < q[1] || null == h) && (h = q[1]), (o < q[0] || null == o) && (o = q[0]), (n > q[1] || null == n) && (n = q[1])
            }
            if ("line" === this.type && this.renderer.bands.show && (h = this._yaxis.series_u2p(this.renderer.bands._min), n = this._yaxis.series_u2p(this.renderer.bands._max)), this._boundingBox = [
                [a, h],
                [o, n]
            ], this.markerRenderer.show && !c)for (this.renderer.smooth && (i = this.gridData), r = 0; r < i.length; r++)null != i[r][0] && null != i[r][1] && this.markerRenderer.draw(i[r][0], i[r][1], e, l.markerOptions)
        }
        e.restore()
    }, t.jqplot.LineRenderer.prototype.drawShadow = function () {
    }, t.jqplot.LinearAxisRenderer = function () {
    }, t.jqplot.LinearAxisRenderer.prototype.init = function (e) {
        this.breakPoints = null, this.breakTickLabel = "&asymp;", this.drawBaseline = !0, this.baselineWidth = null, this.baselineColor = null, this.forceTickAt0 = !1, this.forceTickAt100 = !1, this.tickInset = 0, this.minorTicks = 0, this.alignTicks = !1, this._autoFormatString = "", this._overrideFormatString = !1, this._scalefact = 1, t.extend(!0, this, e), this.breakPoints && (t.isArray(this.breakPoints) ? (this.breakPoints.length < 2 || this.breakPoints[1] <= this.breakPoints[0]) && (this.breakPoints = null) : this.breakPoints = null), null != this.numberTicks && this.numberTicks < 2 && (this.numberTicks = 2), this.resetDataBounds()
    }, t.jqplot.LinearAxisRenderer.prototype.draw = function (e, i) {
        if (this.show) {
            this.renderer.createTicks.call(this, i);
            if (this._elem && (this._elem.emptyForce(), this._elem = null), this._elem = t(document.createElement("div")), this._elem.addClass("jqplot-axis jqplot-" + this.name), this._elem.css("position", "absolute"), "xaxis" == this.name || "x2axis" == this.name ? this._elem.width(this._plotDimensions.width) : this._elem.height(this._plotDimensions.height), this.labelOptions.axis = this.name, this._label = new this.labelRenderer(this.labelOptions), this._label.show) {
                var s = this._label.draw(e, i);
                s.appendTo(this._elem), s = null
            }
            for (var r, a = this._ticks, n = 0; n < a.length; n++)r = a[n], r.show && r.showLabel && (!r.isMinorTick || this.showMinorTicks) && this._elem.append(r.draw(e, i));
            r = null, a = null
        }
        return this._elem
    }, t.jqplot.LinearAxisRenderer.prototype.reset = function () {
        this.min = this._options.min, this.max = this._options.max, this.tickInterval = this._options.tickInterval, this.numberTicks = this._options.numberTicks, this._autoFormatString = "", this._overrideFormatString && this.tickOptions && this.tickOptions.formatString && (this.tickOptions.formatString = "")
    }, t.jqplot.LinearAxisRenderer.prototype.set = function () {
        var e, i = 0, s = 0, r = 0, a = null == this._label ? !1 : this._label.show;
        if (this.show) {
            for (var n, o = this._ticks, h = 0; h < o.length; h++)n = o[h], n._breakTick || !n.show || !n.showLabel || n.isMinorTick && !this.showMinorTicks || (e = "xaxis" == this.name || "x2axis" == this.name ? n._elem.outerHeight(!0) : n._elem.outerWidth(!0), e > i && (i = e));
            n = null, o = null, a && (s = this._label._elem.outerWidth(!0), r = this._label._elem.outerHeight(!0)), "xaxis" == this.name ? (i += r, this._elem.css({height: i + "px", left: "0px", bottom: "0px"})) : "x2axis" == this.name ? (i += r, this._elem.css({height: i + "px", left: "0px", top: "0px"})) : "yaxis" == this.name ? (i += s, this._elem.css({width: i + "px", left: "0px", top: "0px"}), a && this._label.constructor == t.jqplot.AxisLabelRenderer && this._label._elem.css("width", s + "px")) : (i += s, this._elem.css({width: i + "px", right: "0px", top: "0px"}), a && this._label.constructor == t.jqplot.AxisLabelRenderer && this._label._elem.css("width", s + "px"))
        }
    }, t.jqplot.LinearAxisRenderer.prototype.createTicks = function (e) {
        var i, s, r, a, n = this._ticks, o = this.ticks, h = this.name, l = this._dataBounds, d = "x" === this.name.charAt(0) ? this._plotDimensions.width : this._plotDimensions.height, p = this.min, c = this.max, u = this.numberTicks, g = this.tickInterval, f = 30;
        if (this._scalefact = (Math.max(d, f + 1) - f) / 300, o.length) {
            for (a = 0; a < o.length; a++) {
                var m = o[a], _ = new this.tickRenderer(this.tickOptions);
                t.isArray(m) ? (_.value = m[0], this.breakPoints ? m[0] == this.breakPoints[0] ? (_.label = this.breakTickLabel, _._breakTick = !0, _.showGridline = !1, _.showMark = !1) : m[0] > this.breakPoints[0] && m[0] <= this.breakPoints[1] ? (_.show = !1, _.showGridline = !1, _.label = m[1]) : _.label = m[1] : _.label = m[1], _.setTick(m[0], this.name), this._ticks.push(_)) : t.isPlainObject(m) ? (t.extend(!0, _, m), _.axis = this.name, this._ticks.push(_)) : (_.value = m, this.breakPoints && (m == this.breakPoints[0] ? (_.label = this.breakTickLabel, _._breakTick = !0, _.showGridline = !1, _.showMark = !1) : m > this.breakPoints[0] && m <= this.breakPoints[1] && (_.show = !1, _.showGridline = !1)), _.setTick(m, this.name), this._ticks.push(_))
            }
            this.numberTicks = o.length, this.min = this._ticks[0].value, this.max = this._ticks[this.numberTicks - 1].value, this.tickInterval = (this.max - this.min) / (this.numberTicks - 1)
        } else {
            d = "xaxis" == h || "x2axis" == h ? this._plotDimensions.width : this._plotDimensions.height;
            var v = this.numberTicks;
            this.alignTicks && ("x2axis" === this.name && e.axes.xaxis.show ? v = e.axes.xaxis.numberTicks : "y" === this.name.charAt(0) && "yaxis" !== this.name && "yMidAxis" !== this.name && e.axes.yaxis.show && (v = e.axes.yaxis.numberTicks)), i = null != this.min ? this.min : l.min, s = null != this.max ? this.max : l.max;
            var x, b, w, k = s - i;
            if (null != this.tickOptions && this.tickOptions.formatString || (this._overrideFormatString = !0), null == this.min || null == this.max && null == this.tickInterval && !this.autoscale) {
                this.forceTickAt0 && (i > 0 && (i = 0), 0 > s && (s = 0)), this.forceTickAt100 && (i > 100 && (i = 100), 100 > s && (s = 100));
                var y = !1, j = !1;
                null != this.min ? y = !0 : null != this.max && (j = !0);
                var D = t.jqplot.LinearTickGenerator(i, s, this._scalefact, v, y, j), M = null != this.min ? i : i + k * (this.padMin - 1), S = null != this.max ? s : s - k * (this.padMax - 1);
                (M > i || s > S) && (M = null != this.min ? i : i - k * (this.padMin - 1), S = null != this.max ? s : s + k * (this.padMax - 1), D = t.jqplot.LinearTickGenerator(M, S, this._scalefact, v, y, j)), this.min = D[0], this.max = D[1], this.numberTicks = D[2], this._autoFormatString = D[3], this.tickInterval = D[4]
            } else {
                if (i == s) {
                    var q = .05;
                    i > 0 && (q = Math.max(Math.log(i) / Math.LN10, .05)), i -= q, s += q
                }
                if (this.autoscale && null == this.min && null == this.max) {
                    for (var C, R, T, P = !1, I = !1, a = 0; a < this._series.length; a++) {
                        var H = this._series[a], O = "x" == H.fillAxis ? H._xaxis.name : H._yaxis.name;
                        if (this.name == O) {
                            for (var A = H._plotValues[H.fillAxis], L = A[0], F = A[0], E = 1; E < A.length; E++)A[E] < L ? L = A[E] : A[E] > F && (F = A[E]);
                            var W = (F - L) / F;
                            H.renderer.constructor == t.jqplot.BarRenderer ? L >= 0 && (H.fillToZero || W > .1) ? P = !0 : (P = !1, I = H.fill && H.fillToZero && 0 > L && F > 0 ? !0 : !1) : H.fill ? L >= 0 && (H.fillToZero || W > .1) ? P = !0 : 0 > L && F > 0 && H.fillToZero ? (P = !1, I = !0) : (P = !1, I = !1) : 0 > L && (P = !1)
                        }
                    }
                    if (P)this.numberTicks = 2 + Math.ceil((d - (this.tickSpacing - 1)) / this.tickSpacing), this.min = 0, p = 0, R = s / (this.numberTicks - 1), w = Math.pow(10, Math.abs(Math.floor(Math.log(R) / Math.LN10))), R / w == parseInt(R / w, 10) && (R += w), this.tickInterval = Math.ceil(R / w) * w, this.max = this.tickInterval * (this.numberTicks - 1); else if (I) {
                        this.numberTicks = 2 + Math.ceil((d - (this.tickSpacing - 1)) / this.tickSpacing);
                        var N = Math.ceil(Math.abs(i) / k * (this.numberTicks - 1)), G = this.numberTicks - 1 - N;
                        R = Math.max(Math.abs(i / N), Math.abs(s / G)), w = Math.pow(10, Math.abs(Math.floor(Math.log(R) / Math.LN10))), this.tickInterval = Math.ceil(R / w) * w, this.max = this.tickInterval * G, this.min = -this.tickInterval * N
                    } else null == this.numberTicks && (this.numberTicks = this.tickInterval ? 3 + Math.ceil(k / this.tickInterval) : 2 + Math.ceil((d - (this.tickSpacing - 1)) / this.tickSpacing)), null == this.tickInterval ? (R = k / (this.numberTicks - 1), w = 1 > R ? Math.pow(10, Math.abs(Math.floor(Math.log(R) / Math.LN10))) : 1, this.tickInterval = Math.ceil(R * w * this.pad) / w) : w = 1 / this.tickInterval, C = this.tickInterval * (this.numberTicks - 1), T = (C - k) / 2, null == this.min && (this.min = Math.floor(w * (i - T)) / w), null == this.max && (this.max = this.min + C);
                    var B, z = t.jqplot.getSignificantFigures(this.tickInterval);
                    if (z.digitsLeft >= z.significantDigits)B = "%d"; else {
                        var w = Math.max(0, 5 - z.digitsLeft);
                        w = Math.min(w, z.digitsRight), B = "%." + w + "f"
                    }
                    this._autoFormatString = B
                } else {
                    x = null != this.min ? this.min : i - k * (this.padMin - 1), b = null != this.max ? this.max : s + k * (this.padMax - 1), k = b - x, null == this.numberTicks && (this.numberTicks = null != this.tickInterval ? Math.ceil((b - x) / this.tickInterval) + 1 : d > 100 ? parseInt(3 + (d - 100) / 75, 10) : 2), null == this.tickInterval && (this.tickInterval = k / (this.numberTicks - 1)), null == this.max && (b = x + this.tickInterval * (this.numberTicks - 1)), null == this.min && (x = b - this.tickInterval * (this.numberTicks - 1));
                    var B, z = t.jqplot.getSignificantFigures(this.tickInterval);
                    if (z.digitsLeft >= z.significantDigits)B = "%d"; else {
                        var w = Math.max(0, 5 - z.digitsLeft);
                        w = Math.min(w, z.digitsRight), B = "%." + w + "f"
                    }
                    this._autoFormatString = B, this.min = x, this.max = b
                }
                if (this.renderer.constructor == t.jqplot.LinearAxisRenderer && "" == this._autoFormatString) {
                    k = this.max - this.min;
                    var Y = new this.tickRenderer(this.tickOptions), J = Y.formatString || t.jqplot.config.defaultTickFormatString, J = J.match(t.jqplot.sprintf.regex)[0], X = 0;
                    if (J) {
                        if (J.search(/[fFeEgGpP]/) > -1) {
                            var $ = J.match(/\%\.(\d{0,})?[eEfFgGpP]/);
                            X = $ ? parseInt($[1], 10) : 6
                        } else J.search(/[di]/) > -1 && (X = 0);
                        var U = Math.pow(10, -X);
                        if (this.tickInterval < U && null == u && null == g)if (this.tickInterval = U, null == c && null == p) {
                            this.min = Math.floor(this._dataBounds.min / U) * U, this.min == this._dataBounds.min && (this.min = this._dataBounds.min - this.tickInterval), this.max = Math.ceil(this._dataBounds.max / U) * U, this.max == this._dataBounds.max && (this.max = this._dataBounds.max + this.tickInterval);
                            var V = (this.max - this.min) / this.tickInterval;
                            V = V.toFixed(11), V = Math.ceil(V), this.numberTicks = V + 1
                        } else if (null == c) {
                            var V = (this._dataBounds.max - this.min) / this.tickInterval;
                            V = V.toFixed(11), this.numberTicks = Math.ceil(V) + 2, this.max = this.min + this.tickInterval * (this.numberTicks - 1)
                        } else if (null == p) {
                            var V = (this.max - this._dataBounds.min) / this.tickInterval;
                            V = V.toFixed(11), this.numberTicks = Math.ceil(V) + 2, this.min = this.max - this.tickInterval * (this.numberTicks - 1)
                        } else this.numberTicks = Math.ceil((c - p) / this.tickInterval) + 1, this.min = Math.floor(p * Math.pow(10, X)) / Math.pow(10, X), this.max = Math.ceil(c * Math.pow(10, X)) / Math.pow(10, X), this.numberTicks = Math.ceil((this.max - this.min) / this.tickInterval) + 1
                    }
                }
            }
            this._overrideFormatString && "" != this._autoFormatString && (this.tickOptions = this.tickOptions || {}, this.tickOptions.formatString = this._autoFormatString);
            for (var _, Q, a = 0; a < this.numberTicks; a++) {
                if (r = this.min + a * this.tickInterval, _ = new this.tickRenderer(this.tickOptions), _.setTick(r, this.name), this._ticks.push(_), a < this.numberTicks - 1)for (var E = 0; E < this.minorTicks; E++)r += this.tickInterval / (this.minorTicks + 1), Q = t.extend(!0, {}, this.tickOptions, {name: this.name, value: r, label: "", isMinorTick: !0}), _ = new this.tickRenderer(Q), this._ticks.push(_);
                _ = null
            }
        }
        this.tickInset && (this.min = this.min - this.tickInset * this.tickInterval, this.max = this.max + this.tickInset * this.tickInterval), n = null
    }, t.jqplot.LinearAxisRenderer.prototype.resetTickValues = function (e) {
        if (t.isArray(e) && e.length == this._ticks.length) {
            for (var i, s = 0; s < e.length; s++)i = this._ticks[s], i.value = e[s], i.label = i.formatter(i.formatString, e[s]), i.label = i.prefix + i.label, i._elem.html(i.label);
            i = null, this.min = t.jqplot.arrayMin(e), this.max = t.jqplot.arrayMax(e), this.pack()
        }
    }, t.jqplot.LinearAxisRenderer.prototype.pack = function (e, i) {
        e = e || {}, i = i || this._offsets;
        var s = this._ticks, r = this.max, a = this.min, n = i.max, o = i.min, h = null == this._label ? !1 : this._label.show;
        for (var l in e)this._elem.css(l, e[l]);
        this._offsets = i;
        var d = n - o, p = r - a;
        if (this.breakPoints ? (p = p - this.breakPoints[1] + this.breakPoints[0], this.p2u = function (t) {
            return(t - o) * p / d + a
        }, this.u2p = function (t) {
            return t > this.breakPoints[0] && t < this.breakPoints[1] && (t = this.breakPoints[0]), t <= this.breakPoints[0] ? (t - a) * d / p + o : (t - this.breakPoints[1] + this.breakPoints[0] - a) * d / p + o
        }, "x" == this.name.charAt(0) ? (this.series_u2p = function (t) {
            return t > this.breakPoints[0] && t < this.breakPoints[1] && (t = this.breakPoints[0]), t <= this.breakPoints[0] ? (t - a) * d / p : (t - this.breakPoints[1] + this.breakPoints[0] - a) * d / p
        }, this.series_p2u = function (t) {
            return t * p / d + a
        }) : (this.series_u2p = function (t) {
            return t > this.breakPoints[0] && t < this.breakPoints[1] && (t = this.breakPoints[0]), t >= this.breakPoints[1] ? (t - r) * d / p : (t + this.breakPoints[1] - this.breakPoints[0] - r) * d / p
        }, this.series_p2u = function (t) {
            return t * p / d + r
        })) : (this.p2u = function (t) {
            return(t - o) * p / d + a
        }, this.u2p = function (t) {
            return(t - a) * d / p + o
        }, "xaxis" == this.name || "x2axis" == this.name ? (this.series_u2p = function (t) {
            return(t - a) * d / p
        }, this.series_p2u = function (t) {
            return t * p / d + a
        }) : (this.series_u2p = function (t) {
            return(t - r) * d / p
        }, this.series_p2u = function (t) {
            return t * p / d + r
        })), this.show)if ("xaxis" == this.name || "x2axis" == this.name) {
            for (var c = 0; c < s.length; c++) {
                var u = s[c];
                if (u.show && u.showLabel) {
                    var g;
                    if (u.constructor == t.jqplot.CanvasAxisTickRenderer && u.angle) {
                        var f = "xaxis" == this.name ? 1 : -1;
                        switch (u.labelPosition) {
                            case"auto":
                                g = f * u.angle < 0 ? -u.getWidth() + u._textRenderer.height * Math.sin(-u._textRenderer.angle) / 2 : -u._textRenderer.height * Math.sin(u._textRenderer.angle) / 2;
                                break;
                            case"end":
                                g = -u.getWidth() + u._textRenderer.height * Math.sin(-u._textRenderer.angle) / 2;
                                break;
                            case"start":
                                g = -u._textRenderer.height * Math.sin(u._textRenderer.angle) / 2;
                                break;
                            case"middle":
                                g = -u.getWidth() / 2 + u._textRenderer.height * Math.sin(-u._textRenderer.angle) / 2;
                                break;
                            default:
                                g = -u.getWidth() / 2 + u._textRenderer.height * Math.sin(-u._textRenderer.angle) / 2
                        }
                    } else g = -u.getWidth() / 2;
                    var m = this.u2p(u.value) + g + "px";
                    u._elem.css("left", m), u.pack()
                }
            }
            if (h) {
                var _ = this._label._elem.outerWidth(!0);
                this._label._elem.css("left", o + d / 2 - _ / 2 + "px"), "xaxis" == this.name ? this._label._elem.css("bottom", "0px") : this._label._elem.css("top", "0px"), this._label.pack()
            }
        } else {
            for (var c = 0; c < s.length; c++) {
                var u = s[c];
                if (u.show && u.showLabel) {
                    var g;
                    if (u.constructor == t.jqplot.CanvasAxisTickRenderer && u.angle) {
                        var f = "yaxis" == this.name ? 1 : -1;
                        switch (u.labelPosition) {
                            case"auto":
                            case"end":
                                g = f * u.angle < 0 ? -u._textRenderer.height * Math.cos(-u._textRenderer.angle) / 2 : -u.getHeight() + u._textRenderer.height * Math.cos(u._textRenderer.angle) / 2;
                                break;
                            case"start":
                                g = u.angle > 0 ? -u._textRenderer.height * Math.cos(-u._textRenderer.angle) / 2 : -u.getHeight() + u._textRenderer.height * Math.cos(u._textRenderer.angle) / 2;
                                break;
                            case"middle":
                                g = -u.getHeight() / 2;
                                break;
                            default:
                                g = -u.getHeight() / 2
                        }
                    } else g = -u.getHeight() / 2;
                    var m = this.u2p(u.value) + g + "px";
                    u._elem.css("top", m), u.pack()
                }
            }
            if (h) {
                var v = this._label._elem.outerHeight(!0);
                this._label._elem.css("top", n - d / 2 - v / 2 + "px"), "yaxis" == this.name ? this._label._elem.css("left", "0px") : this._label._elem.css("right", "0px"), this._label.pack()
            }
        }
        s = null
    };
    t.jqplot.LinearTickGenerator = function (e, i, s, r, a, n) {
        if (a = null === a ? !1 : a, n = null === n || a ? !1 : n, e === i && (i = i ? 0 : 1), s = s || 1, e > i) {
            var o = i;
            i = e, e = o
        }
        var h = [], l = y(i - e, s), d = t.jqplot.getSignificantFigures;
        if (null == r)if (a || n) {
            if (a) {
                h[0] = e, h[2] = Math.ceil((i - e) / l + 1), h[1] = e + (h[2] - 1) * l;
                var p = d(e).digitsRight, c = d(l).digitsRight;
                h[3] = c > p ? b(l) : "%." + p + "f", h[4] = l
            } else if (n) {
                h[1] = i, h[2] = Math.ceil((i - e) / l + 1), h[0] = i - (h[2] - 1) * l;
                var u = d(i).digitsRight, c = d(l).digitsRight;
                h[3] = c > u ? b(l) : "%." + u + "f", h[4] = l
            }
        } else h[0] = Math.floor(e / l) * l, h[1] = Math.ceil(i / l) * l, h[2] = Math.round((h[1] - h[0]) / l + 1), h[3] = b(l), h[4] = l; else {
            var g = [];
            if (g[0] = Math.floor(e / l) * l, g[1] = Math.ceil(i / l) * l, g[2] = Math.round((g[1] - g[0]) / l + 1), g[3] = b(l), g[4] = l, g[2] === r)h = g; else {
                var f = k(g[1] - g[0], r);
                h[0] = g[0], h[2] = r, h[4] = f, h[3] = b(f), h[1] = h[0] + (h[2] - 1) * h[4]
            }
        }
        return h
    }, t.jqplot.LinearTickGenerator.bestLinearInterval = y, t.jqplot.LinearTickGenerator.bestInterval = k, t.jqplot.LinearTickGenerator.bestLinearComponents = j, t.jqplot.LinearTickGenerator.bestConstrainedInterval = w, t.jqplot.MarkerRenderer = function (e) {
        this.show = !0, this.style = "filledCircle", this.lineWidth = 2, this.size = 9, this.color = "#666666", this.shadow = !0, this.shadowAngle = 45, this.shadowOffset = 1, this.shadowDepth = 3, this.shadowAlpha = "0.07", this.shadowRenderer = new t.jqplot.ShadowRenderer, this.shapeRenderer = new t.jqplot.ShapeRenderer, t.extend(!0, this, e)
    }, t.jqplot.MarkerRenderer.prototype.init = function (e) {
        t.extend(!0, this, e);
        var i = {angle: this.shadowAngle, offset: this.shadowOffset, alpha: this.shadowAlpha, lineWidth: this.lineWidth, depth: this.shadowDepth, closePath: !0};
        -1 != this.style.indexOf("filled") && (i.fill = !0), -1 != this.style.indexOf("ircle") && (i.isarc = !0, i.closePath = !1), this.shadowRenderer.init(i);
        var s = {fill: !1, isarc: !1, strokeStyle: this.color, fillStyle: this.color, lineWidth: this.lineWidth, closePath: !0};
        -1 != this.style.indexOf("filled") && (s.fill = !0), -1 != this.style.indexOf("ircle") && (s.isarc = !0, s.closePath = !1), this.shapeRenderer.init(s)
    }, t.jqplot.MarkerRenderer.prototype.drawDiamond = function (t, e, i, s, r) {
        var a = 1.2, n = this.size / 2 / a, o = this.size / 2 * a, h = [
            [t - n, e],
            [t, e + o],
            [t + n, e],
            [t, e - o]
        ];
        this.shadow && this.shadowRenderer.draw(i, h), this.shapeRenderer.draw(i, h, r)
    }, t.jqplot.MarkerRenderer.prototype.drawPlus = function (e, i, s) {
        var r = 1, a = this.size / 2 * r, n = this.size / 2 * r, o = [
            [e, i - n],
            [e, i + n]
        ], h = [
            [e + a, i],
            [e - a, i]
        ], l = t.extend(!0, {}, this.options, {closePath: !1});
        this.shadow && (this.shadowRenderer.draw(s, o, {closePath: !1}), this.shadowRenderer.draw(s, h, {closePath: !1})), this.shapeRenderer.draw(s, o, l), this.shapeRenderer.draw(s, h, l)
    }, t.jqplot.MarkerRenderer.prototype.drawX = function (e, i, s) {
        var r = 1, a = this.size / 2 * r, n = this.size / 2 * r, o = t.extend(!0, {}, this.options, {closePath: !1}), h = [
            [e - a, i - n],
            [e + a, i + n]
        ], l = [
            [e - a, i + n],
            [e + a, i - n]
        ];
        this.shadow && (this.shadowRenderer.draw(s, h, {closePath: !1}), this.shadowRenderer.draw(s, l, {closePath: !1})), this.shapeRenderer.draw(s, h, o), this.shapeRenderer.draw(s, l, o)
    }, t.jqplot.MarkerRenderer.prototype.drawDash = function (t, e, i, s, r) {
        var a = 1, n = this.size / 2 * a, o = (this.size / 2 * a, [
            [t - n, e],
            [t + n, e]
        ]);
        this.shadow && this.shadowRenderer.draw(i, o), this.shapeRenderer.draw(i, o, r)
    }, t.jqplot.MarkerRenderer.prototype.drawLine = function (t, e, i, s, r) {
        var a = [t, e];
        this.shadow && this.shadowRenderer.draw(i, a), this.shapeRenderer.draw(i, a, r)
    }, t.jqplot.MarkerRenderer.prototype.drawSquare = function (t, e, i, s, r) {
        var a = 1, n = this.size / 2 / a, o = this.size / 2 * a, h = [
            [t - n, e - o],
            [t - n, e + o],
            [t + n, e + o],
            [t + n, e - o]
        ];
        this.shadow && this.shadowRenderer.draw(i, h), this.shapeRenderer.draw(i, h, r)
    }, t.jqplot.MarkerRenderer.prototype.drawCircle = function (t, e, i, s, r) {
        var a = this.size / 2, n = 2 * Math.PI, o = [t, e, a, 0, n, !0];
        this.shadow && this.shadowRenderer.draw(i, o), this.shapeRenderer.draw(i, o, r)
    }, t.jqplot.MarkerRenderer.prototype.draw = function (t, e, i, s) {
        if (s = s || {}, null == s.show || 0 != s.show)switch (s.color && !s.fillStyle && (s.fillStyle = s.color), s.color && !s.strokeStyle && (s.strokeStyle = s.color), this.style) {
            case"diamond":
                this.drawDiamond(t, e, i, !1, s);
                break;
            case"filledDiamond":
                this.drawDiamond(t, e, i, !0, s);
                break;
            case"circle":
                this.drawCircle(t, e, i, !1, s);
                break;
            case"filledCircle":
                this.drawCircle(t, e, i, !0, s);
                break;
            case"square":
                this.drawSquare(t, e, i, !1, s);
                break;
            case"filledSquare":
                this.drawSquare(t, e, i, !0, s);
                break;
            case"x":
                this.drawX(t, e, i, !0, s);
                break;
            case"plus":
                this.drawPlus(t, e, i, !0, s);
                break;
            case"dash":
                this.drawDash(t, e, i, !0, s);
                break;
            case"line":
                this.drawLine(t, e, i, !1, s);
                break;
            default:
                this.drawDiamond(t, e, i, !1, s)
        }
    }, t.jqplot.ShadowRenderer = function (e) {
        this.angle = 45, this.offset = 1, this.alpha = .07, this.lineWidth = 1.5, this.lineJoin = "miter", this.lineCap = "round", this.closePath = !1, this.fill = !1, this.depth = 3, this.strokeStyle = "rgba(0,0,0,0.1)", this.isarc = !1, t.extend(!0, this, e)
    }, t.jqplot.ShadowRenderer.prototype.init = function (e) {
        t.extend(!0, this, e)
    }, t.jqplot.ShadowRenderer.prototype.draw = function (e, i, s) {
        e.save();
        var r = null != s ? s : {}, a = null != r.fill ? r.fill : this.fill, n = null != r.fillRect ? r.fillRect : this.fillRect, o = null != r.closePath ? r.closePath : this.closePath, h = null != r.offset ? r.offset : this.offset, l = null != r.alpha ? r.alpha : this.alpha, d = null != r.depth ? r.depth : this.depth, p = null != r.isarc ? r.isarc : this.isarc, c = null != r.linePattern ? r.linePattern : this.linePattern;
        e.lineWidth = null != r.lineWidth ? r.lineWidth : this.lineWidth, e.lineJoin = null != r.lineJoin ? r.lineJoin : this.lineJoin, e.lineCap = null != r.lineCap ? r.lineCap : this.lineCap, e.strokeStyle = r.strokeStyle || this.strokeStyle || "rgba(0,0,0," + l + ")", e.fillStyle = r.fillStyle || this.fillStyle || "rgba(0,0,0," + l + ")";
        for (var u = 0; d > u; u++) {
            var g = t.jqplot.LinePattern(e, c);
            if (e.translate(Math.cos(this.angle * Math.PI / 180) * h, Math.sin(this.angle * Math.PI / 180) * h), g.beginPath(), p)e.arc(i[0], i[1], i[2], i[3], i[4], !0); else if (n)n && e.fillRect(i[0], i[1], i[2], i[3]); else if (i && i.length)for (var f = !0, m = 0; m < i.length; m++)null != i[m][0] && null != i[m][1] ? f ? (g.moveTo(i[m][0], i[m][1]), f = !1) : g.lineTo(i[m][0], i[m][1]) : f = !0;
            o && g.closePath(), a ? e.fill() : e.stroke()
        }
        e.restore()
    }, t.jqplot.ShapeRenderer = function (e) {
        this.lineWidth = 1.5, this.linePattern = "solid", this.lineJoin = "miter", this.lineCap = "round", this.closePath = !1, this.fill = !1, this.isarc = !1, this.fillRect = !1, this.strokeRect = !1, this.clearRect = !1, this.strokeStyle = "#999999", this.fillStyle = "#999999", t.extend(!0, this, e)
    }, t.jqplot.ShapeRenderer.prototype.init = function (e) {
        t.extend(!0, this, e)
    }, t.jqplot.ShapeRenderer.prototype.draw = function (e, i, s) {
        e.save();
        var r = null != s ? s : {}, a = null != r.fill ? r.fill : this.fill, n = null != r.closePath ? r.closePath : this.closePath, o = null != r.fillRect ? r.fillRect : this.fillRect, h = null != r.strokeRect ? r.strokeRect : this.strokeRect, l = null != r.clearRect ? r.clearRect : this.clearRect, d = null != r.isarc ? r.isarc : this.isarc, p = null != r.linePattern ? r.linePattern : this.linePattern, c = t.jqplot.LinePattern(e, p);
        if (e.lineWidth = r.lineWidth || this.lineWidth, e.lineJoin = r.lineJoin || this.lineJoin, e.lineCap = r.lineCap || this.lineCap, e.strokeStyle = r.strokeStyle || r.color || this.strokeStyle, e.fillStyle = r.fillStyle || this.fillStyle, e.beginPath(), d)return e.arc(i[0], i[1], i[2], i[3], i[4], !0), n && e.closePath(), a ? e.fill() : e.stroke(), e.restore(), void 0;
        if (l)return e.clearRect(i[0], i[1], i[2], i[3]), e.restore(), void 0;
        if (o || h) {
            if (o && e.fillRect(i[0], i[1], i[2], i[3]), h)return e.strokeRect(i[0], i[1], i[2], i[3]), e.restore(), void 0
        } else if (i && i.length) {
            for (var u = !0, g = 0; g < i.length; g++)null != i[g][0] && null != i[g][1] ? u ? (c.moveTo(i[g][0], i[g][1]), u = !1) : c.lineTo(i[g][0], i[g][1]) : u = !0;
            n && c.closePath(), a ? e.fill() : e.stroke()
        }
        e.restore()
    }, t.jqplot.TableLegendRenderer = function () {
    }, t.jqplot.TableLegendRenderer.prototype.init = function (e) {
        t.extend(!0, this, e)
    }, t.jqplot.TableLegendRenderer.prototype.addrow = function (e, i, s, r) {
        var a, n, o, h, l, d = s ? this.rowSpacing + "px" : "0px";
        o = document.createElement("tr"), a = t(o), a.addClass("jqplot-table-legend"), o = null, r ? a.prependTo(this._elem) : a.appendTo(this._elem), this.showSwatches && (n = t(document.createElement("td")), n.addClass("jqplot-table-legend jqplot-table-legend-swatch"), n.css({textAlign: "center", paddingTop: d}), h = t(document.createElement("div")), h.addClass("jqplot-table-legend-swatch-outline"), l = t(document.createElement("div")), l.addClass("jqplot-table-legend-swatch"), l.css({backgroundColor: i, borderColor: i}), a.append(n.append(h.append(l)))), this.showLabels && (n = t(document.createElement("td")), n.addClass("jqplot-table-legend jqplot-table-legend-label"), n.css("paddingTop", d), a.append(n), this.escapeHtml ? n.text(e) : n.html(e)), n = null, h = null, l = null, a = null, o = null
    }, t.jqplot.TableLegendRenderer.prototype.draw = function () {
        if (this._elem && (this._elem.emptyForce(), this._elem = null), this.show) {
            var e = this._series, i = document.createElement("table");
            this._elem = t(i), this._elem.addClass("jqplot-table-legend");
            var s = {position: "absolute"};
            this.background && (s.background = this.background), this.border && (s.border = this.border), this.fontSize && (s.fontSize = this.fontSize), this.fontFamily && (s.fontFamily = this.fontFamily), this.textColor && (s.textColor = this.textColor), null != this.marginTop && (s.marginTop = this.marginTop), null != this.marginBottom && (s.marginBottom = this.marginBottom), null != this.marginLeft && (s.marginLeft = this.marginLeft), null != this.marginRight && (s.marginRight = this.marginRight);
            for (var r, a = !1, n = !1, o = 0; o < e.length; o++)if (r = e[o], (r._stack || r.renderer.constructor == t.jqplot.BezierCurveRenderer) && (n = !0), r.show && r.showLabel) {
                var h = this.labels[o] || r.label.toString();
                if (h) {
                    var l = r.color;
                    n && o < e.length - 1 ? a = !0 : n && o == e.length - 1 && (a = !1), this.renderer.addrow.call(this, h, l, a, n), a = !0
                }
                for (var d = 0; d < t.jqplot.addLegendRowHooks.length; d++) {
                    var p = t.jqplot.addLegendRowHooks[d].call(this, r);
                    p && (this.renderer.addrow.call(this, p.label, p.color, a), a = !0)
                }
                h = null
            }
        }
        return this._elem
    }, t.jqplot.TableLegendRenderer.prototype.pack = function (t) {
        if (this.show)if ("insideGrid" == this.placement)switch (this.location) {
            case"nw":
                var e = t.left, i = t.top;
                this._elem.css("left", e), this._elem.css("top", i);
                break;
            case"n":
                var e = (t.left + (this._plotDimensions.width - t.right)) / 2 - this.getWidth() / 2, i = t.top;
                this._elem.css("left", e), this._elem.css("top", i);
                break;
            case"ne":
                var e = t.right, i = t.top;
                this._elem.css({right: e, top: i});
                break;
            case"e":
                var e = t.right, i = (t.top + (this._plotDimensions.height - t.bottom)) / 2 - this.getHeight() / 2;
                this._elem.css({right: e, top: i});
                break;
            case"se":
                var e = t.right, i = t.bottom;
                this._elem.css({right: e, bottom: i});
                break;
            case"s":
                var e = (t.left + (this._plotDimensions.width - t.right)) / 2 - this.getWidth() / 2, i = t.bottom;
                this._elem.css({left: e, bottom: i});
                break;
            case"sw":
                var e = t.left, i = t.bottom;
                this._elem.css({left: e, bottom: i});
                break;
            case"w":
                var e = t.left, i = (t.top + (this._plotDimensions.height - t.bottom)) / 2 - this.getHeight() / 2;
                this._elem.css({left: e, top: i});
                break;
            default:
                var e = t.right, i = t.bottom;
                this._elem.css({right: e, bottom: i})
        } else if ("outside" == this.placement)switch (this.location) {
            case"nw":
                var e = this._plotDimensions.width - t.left, i = t.top;
                this._elem.css("right", e), this._elem.css("top", i);
                break;
            case"n":
                var e = (t.left + (this._plotDimensions.width - t.right)) / 2 - this.getWidth() / 2, i = this._plotDimensions.height - t.top;
                this._elem.css("left", e), this._elem.css("bottom", i);
                break;
            case"ne":
                var e = this._plotDimensions.width - t.right, i = t.top;
                this._elem.css({left: e, top: i});
                break;
            case"e":
                var e = this._plotDimensions.width - t.right, i = (t.top + (this._plotDimensions.height - t.bottom)) / 2 - this.getHeight() / 2;
                this._elem.css({left: e, top: i});
                break;
            case"se":
                var e = this._plotDimensions.width - t.right, i = t.bottom;
                this._elem.css({left: e, bottom: i});
                break;
            case"s":
                var e = (t.left + (this._plotDimensions.width - t.right)) / 2 - this.getWidth() / 2, i = this._plotDimensions.height - t.bottom;
                this._elem.css({left: e, top: i});
                break;
            case"sw":
                var e = this._plotDimensions.width - t.left, i = t.bottom;
                this._elem.css({right: e, bottom: i});
                break;
            case"w":
                var e = this._plotDimensions.width - t.left, i = (t.top + (this._plotDimensions.height - t.bottom)) / 2 - this.getHeight() / 2;
                this._elem.css({right: e, top: i});
                break;
            default:
                var e = t.right, i = t.bottom;
                this._elem.css({right: e, bottom: i})
        } else switch (this.location) {
            case"nw":
                this._elem.css({left: 0, top: t.top});
                break;
            case"n":
                var e = (t.left + (this._plotDimensions.width - t.right)) / 2 - this.getWidth() / 2;
                this._elem.css({left: e, top: t.top});
                break;
            case"ne":
                this._elem.css({right: 0, top: t.top});
                break;
            case"e":
                var i = (t.top + (this._plotDimensions.height - t.bottom)) / 2 - this.getHeight() / 2;
                this._elem.css({right: t.right, top: i});
                break;
            case"se":
                this._elem.css({right: t.right, bottom: t.bottom});
                break;
            case"s":
                var e = (t.left + (this._plotDimensions.width - t.right)) / 2 - this.getWidth() / 2;
                this._elem.css({left: e, bottom: t.bottom});
                break;
            case"sw":
                this._elem.css({left: t.left, bottom: t.bottom});
                break;
            case"w":
                var i = (t.top + (this._plotDimensions.height - t.bottom)) / 2 - this.getHeight() / 2;
                this._elem.css({left: t.left, top: i});
                break;
            default:
                this._elem.css({right: t.right, bottom: t.bottom})
        }
    }, t.jqplot.ThemeEngine = function () {
        this.themes = {}, this.activeTheme = null
    }, t.jqplot.ThemeEngine.prototype.init = function () {
        var e, i, s, r = new t.jqplot.Theme({_name: "Default"});
        for (e in r.target)r.target[e] = "textColor" == e ? this.target.css("color") : this.target.css(e);
        if (this.title.show && this.title._elem)for (e in r.title)r.title[e] = "textColor" == e ? this.title._elem.css("color") : this.title._elem.css(e);
        for (e in r.grid)r.grid[e] = this.grid[e];
        if (null == r.grid.backgroundColor && null != this.grid.background && (r.grid.backgroundColor = this.grid.background), this.legend.show && this.legend._elem)for (e in r.legend)r.legend[e] = "textColor" == e ? this.legend._elem.css("color") : this.legend._elem.css(e);
        var a;
        for (i = 0; i < this.series.length; i++) {
            a = this.series[i], a.renderer.constructor == t.jqplot.LineRenderer ? r.series.push(new L) : a.renderer.constructor == t.jqplot.BarRenderer ? r.series.push(new E) : a.renderer.constructor == t.jqplot.PieRenderer ? r.series.push(new W) : a.renderer.constructor == t.jqplot.DonutRenderer ? r.series.push(new N) : a.renderer.constructor == t.jqplot.FunnelRenderer ? r.series.push(new G) : a.renderer.constructor == t.jqplot.MeterGaugeRenderer ? r.series.push(new B) : r.series.push({});
            for (e in r.series[i])r.series[i][e] = a[e]
        }
        var n, o;
        for (e in this.axes) {
            if (o = this.axes[e], n = r.axes[e] = new H, n.borderColor = o.borderColor, n.borderWidth = o.borderWidth, o._ticks && o._ticks[0])for (s in n.ticks)o._ticks[0].hasOwnProperty(s) ? n.ticks[s] = o._ticks[0][s] : o._ticks[0]._elem && (n.ticks[s] = o._ticks[0]._elem.css(s));
            if (o._label && o._label.show)for (s in n.label)o._label[s] ? n.label[s] = o._label[s] : o._label._elem && (n.label[s] = "textColor" == s ? o._label._elem.css("color") : o._label._elem.css(s))
        }
        this.themeEngine._add(r), this.themeEngine.activeTheme = this.themeEngine.themes[r._name]
    }, t.jqplot.ThemeEngine.prototype.get = function (t) {
        return t ? this.themes[t] : this.activeTheme
    }, t.jqplot.ThemeEngine.prototype.getThemeNames = function () {
        var t = [];
        for (var e in this.themes)t.push(e);
        return t.sort(D)
    }, t.jqplot.ThemeEngine.prototype.getThemes = function () {
        var t = [], e = [];
        for (var i in this.themes)t.push(i);
        t.sort(D);
        for (var s = 0; s < t.length; s++)e.push(this.themes[t[s]]);
        return e
    }, t.jqplot.ThemeEngine.prototype.activate = function (e, i) {
        var s = !1;
        if (!i && this.activeTheme && this.activeTheme._name && (i = this.activeTheme._name), !this.themes.hasOwnProperty(i))throw new Error("No theme of that name");
        var r = this.themes[i];
        this.activeTheme = r;
        var a, n = ["xaxis", "x2axis", "yaxis", "y2axis"];
        for (f = 0; f < n.length; f++) {
            var o = n[f];
            null != r.axesStyles.borderColor && (e.axes[o].borderColor = r.axesStyles.borderColor), null != r.axesStyles.borderWidth && (e.axes[o].borderWidth = r.axesStyles.borderWidth)
        }
        for (var h in e.axes) {
            var l = e.axes[h];
            if (l.show) {
                var d = r.axes[h] || {}, p = r.axesStyles, c = t.jqplot.extend(!0, {}, d, p);
                if (a = null != r.axesStyles.borderColor ? r.axesStyles.borderColor : c.borderColor, null != c.borderColor && (l.borderColor = c.borderColor, s = !0), a = null != r.axesStyles.borderWidth ? r.axesStyles.borderWidth : c.borderWidth, null != c.borderWidth && (l.borderWidth = c.borderWidth, s = !0), l._ticks && l._ticks[0])for (var u in c.ticks)a = c.ticks[u], null != a && (l.tickOptions[u] = a, l._ticks = [], s = !0);
                if (l._label && l._label.show)for (var u in c.label)a = c.label[u], null != a && (l.labelOptions[u] = a, s = !0)
            }
        }
        for (var g in r.grid)null != r.grid[g] && (e.grid[g] = r.grid[g]);
        if (s || e.grid.draw(), e.legend.show)for (g in r.legend)null != r.legend[g] && (e.legend[g] = r.legend[g]);
        if (e.title.show)for (g in r.title)null != r.title[g] && (e.title[g] = r.title[g]);
        var f;
        for (f = 0; f < r.series.length; f++) {
            var m = {};
            for (g in r.series[f])a = null != r.seriesStyles[g] ? r.seriesStyles[g] : r.series[f][g], null != a && (m[g] = a, "color" == g ? (e.series[f].renderer.shapeRenderer.fillStyle = a, e.series[f].renderer.shapeRenderer.strokeStyle = a, e.series[f][g] = a) : "lineWidth" == g || "linePattern" == g ? (e.series[f].renderer.shapeRenderer[g] = a, e.series[f][g] = a) : "markerOptions" == g ? (S(e.series[f].markerOptions, a), S(e.series[f].markerRenderer, a)) : e.series[f][g] = a, s = !0)
        }
        s && (e.target.empty(), e.draw());
        for (g in r.target)null != r.target[g] && e.target.css(g, r.target[g])
    }, t.jqplot.ThemeEngine.prototype._add = function (t, e) {
        if (e && (t._name = e), t._name || (t._name = Date.parse(new Date)), this.themes.hasOwnProperty(t._name))throw new Error("jqplot.ThemeEngine Error: Theme already in use");
        this.themes[t._name] = t
    }, t.jqplot.ThemeEngine.prototype.remove = function (t) {
        return"Default" == t ? !1 : delete this.themes[t]
    }, t.jqplot.ThemeEngine.prototype.newTheme = function (e, i) {
        "object" == typeof e && (i = i || e, e = null), e = i && i._name ? i._name : e || Date.parse(new Date);
        var s = this.copy(this.themes.Default._name, e);
        return t.jqplot.extend(s, i), s
    }, t.jqplot.clone = M, t.jqplot.merge = S, t.jqplot.extend = function () {
        var e, i = arguments[0] || {}, s = 1, r = arguments.length, a = !1;
        for ("boolean" == typeof i && (a = i, i = arguments[1] || {}, s = 2), "object" != typeof i && "[object Function]" === !toString.call(i) && (i = {}); r > s; s++)if (null != (e = arguments[s]))for (var n in e) {
            var o = i[n], h = e[n];
            i !== h && (a && h && "object" == typeof h && !h.nodeType ? i[n] = t.jqplot.extend(a, o || (null != h.length ? [] : {}), h) : h !== T && (i[n] = h))
        }
        return i
    }, t.jqplot.ThemeEngine.prototype.rename = function (t, e) {
        if ("Default" == t || "Default" == e)throw new Error("jqplot.ThemeEngine Error: Cannot rename from/to Default");
        if (this.themes.hasOwnProperty(e))throw new Error("jqplot.ThemeEngine Error: New name already in use.");
        if (this.themes.hasOwnProperty(t)) {
            var i = this.copy(t, e);
            return this.remove(t), i
        }
        throw new Error("jqplot.ThemeEngine Error: Old name or new name invalid")
    }, t.jqplot.ThemeEngine.prototype.copy = function (e, i, s) {
        if ("Default" == i)throw new Error("jqplot.ThemeEngine Error: Cannot copy over Default theme");
        if (!this.themes.hasOwnProperty(e)) {
            var r = "jqplot.ThemeEngine Error: Source name invalid";
            throw new Error(r)
        }
        if (this.themes.hasOwnProperty(i)) {
            var r = "jqplot.ThemeEngine Error: Target name invalid";
            throw new Error(r)
        }
        var a = M(this.themes[e]);
        return a._name = i, t.jqplot.extend(!0, a, s), this._add(a), a
    }, t.jqplot.Theme = function (e, i) {
        "object" == typeof e && (i = i || e, e = null), e = e || Date.parse(new Date), this._name = e, this.target = {backgroundColor: null}, this.legend = {textColor: null, fontFamily: null, fontSize: null, border: null, background: null}, this.title = {textColor: null, fontFamily: null, fontSize: null, textAlign: null}, this.seriesStyles = {}, this.series = [], this.grid = {drawGridlines: null, gridLineColor: null, gridLineWidth: null, backgroundColor: null, borderColor: null, borderWidth: null, shadow: null}, this.axesStyles = {label: {}, ticks: {}}, this.axes = {}, "string" == typeof i ? this._name = i : "object" == typeof i && t.jqplot.extend(!0, this, i)
    };
    var H = function () {
        this.borderColor = null, this.borderWidth = null, this.ticks = new O, this.label = new A
    }, O = function () {
        this.show = null, this.showGridline = null, this.showLabel = null, this.showMark = null, this.size = null, this.textColor = null, this.whiteSpace = null, this.fontSize = null, this.fontFamily = null
    }, A = function () {
        this.textColor = null, this.whiteSpace = null, this.fontSize = null, this.fontFamily = null, this.fontWeight = null
    }, L = function () {
        this.color = null, this.lineWidth = null, this.linePattern = null, this.shadow = null, this.fillColor = null, this.showMarker = null, this.markerOptions = new F
    }, F = function () {
        this.show = null, this.style = null, this.lineWidth = null, this.size = null, this.color = null, this.shadow = null
    }, E = function () {
        this.color = null, this.seriesColors = null, this.lineWidth = null, this.shadow = null, this.barPadding = null, this.barMargin = null, this.barWidth = null, this.highlightColors = null
    }, W = function () {
        this.seriesColors = null, this.padding = null, this.sliceMargin = null, this.fill = null, this.shadow = null, this.startAngle = null, this.lineWidth = null, this.highlightColors = null
    }, N = function () {
        this.seriesColors = null, this.padding = null, this.sliceMargin = null, this.fill = null, this.shadow = null, this.startAngle = null, this.lineWidth = null, this.innerDiameter = null, this.thickness = null, this.ringMargin = null, this.highlightColors = null
    }, G = function () {
        this.color = null, this.lineWidth = null, this.shadow = null, this.padding = null, this.sectionMargin = null, this.seriesColors = null, this.highlightColors = null
    }, B = function () {
        this.padding = null, this.backgroundColor = null, this.ringColor = null, this.tickColor = null, this.ringWidth = null, this.intervalColors = null, this.intervalInnerRadius = null, this.intervalOuterRadius = null, this.hubRadius = null, this.needleThickness = null, this.needlePad = null
    };
    t.fn.jqplotChildText = function () {
        return t(this).contents().filter(function () {
            return 3 == this.nodeType
        }).text()
    }, t.fn.jqplotGetComputedFontStyle = function () {
        for (var t = window.getComputedStyle ? window.getComputedStyle(this[0], "") : this[0].currentStyle, e = t["font-style"] ? ["font-style", "font-weight", "font-size", "font-family"] : ["fontStyle", "fontWeight", "fontSize", "fontFamily"], i = [], s = 0; s < e.length; ++s) {
            var r = String(t[e[s]]);
            r && "normal" != r && i.push(r)
        }
        return i.join(" ")
    }, t.fn.jqplotToImageCanvas = function (e) {
        function i(e) {
            var i = parseInt(t(e).css("line-height"), 10);
            return isNaN(i) && (i = 1.2 * parseInt(t(e).css("font-size"), 10)), i
        }

        function s(e, s, r, a, n, o) {
            for (var h = i(e), l = t(e).innerWidth(), d = (t(e).innerHeight(), r.split(/\s+/)), p = d.length, c = "", u = [], g = n, f = a, m = 0; p > m; m++)c += d[m], s.measureText(c).width > l && (u.push(m), c = "", m--);
            if (0 === u.length)"center" === t(e).css("textAlign") && (f = a + (o - s.measureText(c).width) / 2 - v), s.fillText(r, f, n); else {
                c = d.slice(0, u[0]).join(" "), "center" === t(e).css("textAlign") && (f = a + (o - s.measureText(c).width) / 2 - v), s.fillText(c, f, g), g += h;
                for (var m = 1, _ = u.length; _ > m; m++)c = d.slice(u[m - 1], u[m]).join(" "), "center" === t(e).css("textAlign") && (f = a + (o - s.measureText(c).width) / 2 - v), s.fillText(c, f, g), g += h;
                c = d.slice(u[m - 1], d.length).join(" "), "center" === t(e).css("textAlign") && (f = a + (o - s.measureText(c).width) / 2 - v), s.fillText(c, f, g)
            }
        }

        function r(e, i, a) {
            var n = e.tagName.toLowerCase(), o = t(e).position(), h = window.getComputedStyle ? window.getComputedStyle(e, "") : e.currentStyle, l = i + o.left + parseInt(h.marginLeft, 10) + parseInt(h.borderLeftWidth, 10) + parseInt(h.paddingLeft, 10), d = a + o.top + parseInt(h.marginTop, 10) + parseInt(h.borderTopWidth, 10) + parseInt(h.paddingTop, 10), p = c.width;
            if ("div" != n && "span" != n || t(e).hasClass("jqplot-highlighter-tooltip"))if ("table" === n && t(e).hasClass("jqplot-table-legend")) {
                k.strokeStyle = t(e).css("border-top-color"), k.fillStyle = t(e).css("background-color"), k.fillRect(l, d, t(e).innerWidth(), t(e).innerHeight()), parseInt(t(e).css("border-top-width"), 10) > 0 && k.strokeRect(l, d, t(e).innerWidth(), t(e).innerHeight()), t(e).find("div.jqplot-table-legend-swatch-outline").each(function () {
                    var e = t(this);
                    k.strokeStyle = e.css("border-top-color");
                    var i = l + e.position().left, s = d + e.position().top;
                    k.strokeRect(i, s, e.innerWidth(), e.innerHeight()), i += parseInt(e.css("padding-left"), 10), s += parseInt(e.css("padding-top"), 10);
                    var r = e.innerHeight() - 2 * parseInt(e.css("padding-top"), 10), a = e.innerWidth() - 2 * parseInt(e.css("padding-left"), 10), n = e.children("div.jqplot-table-legend-swatch");
                    k.fillStyle = n.css("background-color"), k.fillRect(i, s, a, r)
                }), t(e).find("td.jqplot-table-legend-label").each(function () {
                    var e = t(this), i = l + e.position().left, r = d + e.position().top + parseInt(e.css("padding-top"), 10);
                    k.font = e.jqplotGetComputedFontStyle(), k.fillStyle = e.css("color"), s(e, k, e.text(), i, r, p)
                })
            } else"canvas" == n && k.drawImage(e, l, d); else {
                t(e).children().each(function () {
                    r(this, l, d)
                });
                var u = t(e).jqplotChildText();
                u && (k.font = t(e).jqplotGetComputedFontStyle(), k.fillStyle = t(e).css("color"), s(e, k, u, l, d, p))
            }
        }

        e = e || {};
        var a = null == e.x_offset ? 0 : e.x_offset, n = null == e.y_offset ? 0 : e.y_offset, o = null == e.backgroundColor ? "rgb(255,255,255)" : e.backgroundColor;
        if (0 == t(this).width() || 0 == t(this).height())return null;
        if (t.jqplot.use_excanvas)return null;
        for (var h, l, d, p, c = document.createElement("canvas"), u = t(this).outerHeight(!0), g = t(this).outerWidth(!0), f = t(this).offset(), m = f.left, _ = f.top, v = 0, x = 0, b = ["jqplot-table-legend", "jqplot-xaxis-tick", "jqplot-x2axis-tick", "jqplot-yaxis-tick", "jqplot-y2axis-tick", "jqplot-y3axis-tick", "jqplot-y4axis-tick", "jqplot-y5axis-tick", "jqplot-y6axis-tick", "jqplot-y7axis-tick", "jqplot-y8axis-tick", "jqplot-y9axis-tick", "jqplot-xaxis-label", "jqplot-x2axis-label", "jqplot-yaxis-label", "jqplot-y2axis-label", "jqplot-y3axis-label", "jqplot-y4axis-label", "jqplot-y5axis-label", "jqplot-y6axis-label", "jqplot-y7axis-label", "jqplot-y8axis-label", "jqplot-y9axis-label"], w = 0; w < b.length; w++)t(this).find("." + b[w]).each(function () {
            h = t(this).offset().top - _, l = t(this).offset().left - m, p = l + t(this).outerWidth(!0) + v, d = h + t(this).outerHeight(!0) + x, -v > l && (g = g - v - l, v = -l), -x > h && (u = u - x - h, x = -h), p > g && (g = p), d > u && (u = d)
        });
        c.width = g + Number(a), c.height = u + Number(n);
        var k = c.getContext("2d");
        return k.save(), k.fillStyle = o, k.fillRect(0, 0, c.width, c.height), k.restore(), k.translate(v, x), k.textAlign = "left", k.textBaseline = "top", t(this).children().each(function () {
            r(this, a, n)
        }), c
    }, t.fn.jqplotToImageStr = function (e) {
        var i = t(this).jqplotToImageCanvas(e);
        return i ? i.toDataURL("image/png") : null
    }, t.fn.jqplotToImageElem = function (e) {
        var i = document.createElement("img"), s = t(this).jqplotToImageStr(e);
        return i.src = s, i
    }, t.fn.jqplotToImageElemStr = function (e) {
        var i = "<img src=" + t(this).jqplotToImageStr(e) + " />";
        return i
    }, t.fn.jqplotSaveImage = function () {
        var e = t(this).jqplotToImageStr({});
        e && (window.location.href = e.replace("image/png", "image/octet-stream"))
    }, t.fn.jqplotViewImage = function () {
        {
            var e = t(this).jqplotToImageElemStr({});
            t(this).jqplotToImageStr({})
        }
        if (e) {
            var i = window.open("");
            i.document.open("image/png"), i.document.write(e), i.document.close(), i = null
        }
    };
    var z = function () {
        switch (this.syntax = z.config.syntax, this._type = "jsDate", this.proxy = new Date, this.options = {}, this.locale = z.regional.getLocale(), this.formatString = "", this.defaultCentury = z.config.defaultCentury, arguments.length) {
            case 0:
                break;
            case 1:
                if ("[object Object]" == C(arguments[0]) && "jsDate" != arguments[0]._type) {
                    var t = this.options = arguments[0];
                    this.syntax = t.syntax || this.syntax, this.defaultCentury = t.defaultCentury || this.defaultCentury, this.proxy = z.createDate(t.date)
                } else this.proxy = z.createDate(arguments[0]);
                break;
            default:
                for (var e = [], i = 0; i < arguments.length; i++)e.push(arguments[i]);
                this.proxy = new Date, this.proxy.setFullYear.apply(this.proxy, e.slice(0, 3)), e.slice(3).length && this.proxy.setHours.apply(this.proxy, e.slice(3))
        }
    };
    z.config = {defaultLocale: "en", syntax: "perl", defaultCentury: 1900}, z.prototype.add = function (t, e) {
        var i = X[e] || X.day;
        return"number" == typeof i ? this.proxy.setTime(this.proxy.getTime() + i * t) : i.add(this, t), this
    }, z.prototype.clone = function () {
        return new z(this.proxy.getTime())
    }, z.prototype.getUtcOffset = function () {
        return 6e4 * this.proxy.getTimezoneOffset()
    }, z.prototype.diff = function (t, e, i) {
        if (t = new z(t), null === t)return null;
        var s = X[e] || X.day;
        if ("number" == typeof s)var r = (this.proxy.getTime() - t.proxy.getTime()) / s; else var r = s.diff(this.proxy, t.proxy);
        return i ? r : Math[r > 0 ? "floor" : "ceil"](r)
    }, z.prototype.getAbbrDayName = function () {
        return z.regional[this.locale].dayNamesShort[this.proxy.getDay()]
    }, z.prototype.getAbbrMonthName = function () {
        return z.regional[this.locale].monthNamesShort[this.proxy.getMonth()]
    }, z.prototype.getAMPM = function () {
        return this.proxy.getHours() >= 12 ? "PM" : "AM"
    }, z.prototype.getAmPm = function () {
        return this.proxy.getHours() >= 12 ? "pm" : "am"
    }, z.prototype.getCentury = function () {
        return parseInt(this.proxy.getFullYear() / 100, 10)
    }, z.prototype.getDate = function () {
        return this.proxy.getDate()
    }, z.prototype.getDay = function () {
        return this.proxy.getDay()
    }, z.prototype.getDayOfWeek = function () {
        var t = this.proxy.getDay();
        return 0 === t ? 7 : t
    }, z.prototype.getDayOfYear = function () {
        var t = this.proxy, e = t - new Date("" + t.getFullYear() + "/1/1 GMT");
        return e += 6e4 * t.getTimezoneOffset(), t = null, parseInt(e / 6e4 / 60 / 24, 10) + 1
    }, z.prototype.getDayName = function () {
        return z.regional[this.locale].dayNames[this.proxy.getDay()]
    }, z.prototype.getFullWeekOfYear = function () {
        var t = this.proxy, e = this.getDayOfYear(), i = 6 - t.getDay(), s = parseInt((e + i) / 7, 10);
        return s
    }, z.prototype.getFullYear = function () {
        return this.proxy.getFullYear()
    }, z.prototype.getGmtOffset = function () {
        var t = this.proxy.getTimezoneOffset() / 60, e = 0 > t ? "+" : "-";
        return t = Math.abs(t), e + J(Math.floor(t), 2) + ":" + J(t % 1 * 60, 2)
    }, z.prototype.getHours = function () {
        return this.proxy.getHours()
    }, z.prototype.getHours12 = function () {
        var t = this.proxy.getHours();
        return t > 12 ? t - 12 : 0 == t ? 12 : t
    }, z.prototype.getIsoWeek = function () {
        var t = this.proxy, e = this.getWeekOfYear(), i = new Date("" + t.getFullYear() + "/1/1").getDay(), s = e + (i > 4 || 1 >= i ? 0 : 1);
        return 53 == s && new Date("" + t.getFullYear() + "/12/31").getDay() < 4 ? s = 1 : 0 === s && (t = new z(new Date("" + (t.getFullYear() - 1) + "/12/31")), s = t.getIsoWeek()), t = null, s
    }, z.prototype.getMilliseconds = function () {
        return this.proxy.getMilliseconds()
    }, z.prototype.getMinutes = function () {
        return this.proxy.getMinutes()
    }, z.prototype.getMonth = function () {
        return this.proxy.getMonth()
    }, z.prototype.getMonthName = function () {
        return z.regional[this.locale].monthNames[this.proxy.getMonth()]
    }, z.prototype.getMonthNumber = function () {
        return this.proxy.getMonth() + 1
    }, z.prototype.getSeconds = function () {
        return this.proxy.getSeconds()
    }, z.prototype.getShortYear = function () {
        return this.proxy.getYear() % 100
    }, z.prototype.getTime = function () {
        return this.proxy.getTime()
    }, z.prototype.getTimezoneAbbr = function () {
        return this.proxy.toString().replace(/^.*\(([^)]+)\)$/, "$1")
    }, z.prototype.getTimezoneName = function () {
        var t = /(?:\((.+)\)$| ([A-Z]{3}) )/.exec(this.toString());
        return t[1] || t[2] || "GMT" + this.getGmtOffset()
    }, z.prototype.getTimezoneOffset = function () {
        return this.proxy.getTimezoneOffset()
    }, z.prototype.getWeekOfYear = function () {
        var t = this.getDayOfYear(), e = 7 - this.getDayOfWeek(), i = parseInt((t + e) / 7, 10);
        return i
    }, z.prototype.getUnix = function () {
        return Math.round(this.proxy.getTime() / 1e3, 0)
    }, z.prototype.getYear = function () {
        return this.proxy.getYear()
    }, z.prototype.next = function (t) {
        return t = t || "day", this.clone().add(1, t)
    }, z.prototype.set = function () {
        switch (arguments.length) {
            case 0:
                this.proxy = new Date;
                break;
            case 1:
                if ("[object Object]" == C(arguments[0]) && "jsDate" != arguments[0]._type) {
                    var t = this.options = arguments[0];
                    this.syntax = t.syntax || this.syntax, this.defaultCentury = t.defaultCentury || this.defaultCentury, this.proxy = z.createDate(t.date)
                } else this.proxy = z.createDate(arguments[0]);
                break;
            default:
                for (var e = [], i = 0; i < arguments.length; i++)e.push(arguments[i]);
                this.proxy = new Date, this.proxy.setFullYear.apply(this.proxy, e.slice(0, 3)), e.slice(3).length && this.proxy.setHours.apply(this.proxy, e.slice(3))
        }
        return this
    }, z.prototype.setDate = function (t) {
        return this.proxy.setDate(t), this
    }, z.prototype.setFullYear = function () {
        return this.proxy.setFullYear.apply(this.proxy, arguments), this
    }, z.prototype.setHours = function () {
        return this.proxy.setHours.apply(this.proxy, arguments), this
    }, z.prototype.setMilliseconds = function (t) {
        return this.proxy.setMilliseconds(t), this
    }, z.prototype.setMinutes = function () {
        return this.proxy.setMinutes.apply(this.proxy, arguments), this
    }, z.prototype.setMonth = function () {
        return this.proxy.setMonth.apply(this.proxy, arguments), this
    }, z.prototype.setSeconds = function () {
        return this.proxy.setSeconds.apply(this.proxy, arguments), this
    }, z.prototype.setTime = function (t) {
        return this.proxy.setTime(t), this
    }, z.prototype.setYear = function () {
        return this.proxy.setYear.apply(this.proxy, arguments), this
    }, z.prototype.strftime = function (t) {
        return t = t || this.formatString || z.regional[this.locale].formatString, z.strftime(this, t, this.syntax)
    }, z.prototype.toString = function () {
        return this.proxy.toString()
    }, z.prototype.toYmdInt = function () {
        return 1e4 * this.proxy.getFullYear() + 100 * this.getMonthNumber() + this.proxy.getDate()
    }, z.regional = {en: {monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], formatString: "%Y-%m-%d %H:%M:%S"}, fr: {monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"], monthNamesShort: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"], dayNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"], dayNamesShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"], formatString: "%Y-%m-%d %H:%M:%S"}, de: {monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"], monthNamesShort: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"], dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], dayNamesShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"], formatString: "%Y-%m-%d %H:%M:%S"}, es: {monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"], dayNames: ["Domingo", "Lunes", "Martes", "Mi&eacute;rcoles", "Jueves", "Viernes", "S&aacute;bado"], dayNamesShort: ["Dom", "Lun", "Mar", "Mi&eacute;", "Juv", "Vie", "S&aacute;b"], formatString: "%Y-%m-%d %H:%M:%S"}, ru: {monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"], dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"], dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"], formatString: "%Y-%m-%d %H:%M:%S"}, ar: {monthNames: ["كانون الثاني", "شباط", "آذار", "نيسان", "آذار", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"], monthNamesShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], dayNames: ["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"], dayNamesShort: ["سبت", "أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة"], formatString: "%Y-%m-%d %H:%M:%S"}, pt: {monthNames: ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"], dayNames: ["Domingo", "Segunda-feira", "Ter&ccedil;a-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "S&aacute;bado"], dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S&aacute;b"], formatString: "%Y-%m-%d %H:%M:%S"}, "pt-BR": {monthNames: ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"], dayNames: ["Domingo", "Segunda-feira", "Ter&ccedil;a-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "S&aacute;bado"], dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S&aacute;b"], formatString: "%Y-%m-%d %H:%M:%S"}, pl: {monthNames: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"], monthNamesShort: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"], dayNames: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"], dayNamesShort: ["Ni", "Pn", "Wt", "Śr", "Cz", "Pt", "Sb"], formatString: "%Y-%m-%d %H:%M:%S"}, nl: {monthNames: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "July", "Augustus", "September", "Oktober", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"], dayNames: ",".Zaterdag, dayNamesShort: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"], formatString: "%Y-%m-%d %H:%M:%S"}, sv: {monthNames: ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"], monthNamesShort: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"], dayNames: ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"], dayNamesShort: ["sön", "mån", "tis", "ons", "tor", "fre", "lör"], formatString: "%Y-%m-%d %H:%M:%S"}}, z.regional["en-US"] = z.regional["en-GB"] = z.regional.en, z.regional.getLocale = function () {
        var t = z.config.defaultLocale;
        return document && document.getElementsByTagName("html") && document.getElementsByTagName("html")[0].lang && (t = document.getElementsByTagName("html")[0].lang, z.regional.hasOwnProperty(t) || (t = z.config.defaultLocale)), t
    };
    var Y = 864e5, J = function (t, e) {
        t = String(t);
        var i = e - t.length, s = String(Math.pow(10, i)).slice(1);
        return s.concat(t)
    }, X = {millisecond: 1, second: 1e3, minute: 6e4, hour: 36e5, day: Y, week: 7 * Y, month: {add: function (t, e) {
        X.year.add(t, Math[e > 0 ? "floor" : "ceil"](e / 12));
        var i = t.getMonth() + e % 12;
        12 == i ? (i = 0, t.setYear(t.getFullYear() + 1)) : -1 == i && (i = 11, t.setYear(t.getFullYear() - 1)), t.setMonth(i)
    }, diff: function (t, e) {
        var i = t.getFullYear() - e.getFullYear(), s = t.getMonth() - e.getMonth() + 12 * i, r = t.getDate() - e.getDate();
        return s + r / 30
    }}, year: {add: function (t, e) {
        t.setYear(t.getFullYear() + Math[e > 0 ? "floor" : "ceil"](e))
    }, diff: function (t, e) {
        return X.month.diff(t, e) / 12
    }}};
    for (var $ in X)"s" != $.substring($.length - 1) && (X[$ + "s"] = X[$]);
    var U = function (t, e, i) {
        if (z.formats[i].shortcuts[e])return z.strftime(t, z.formats[i].shortcuts[e], i);
        var s = (z.formats[i].codes[e] || "").split("."), r = t["get" + s[0]] ? t["get" + s[0]]() : "";
        return s[1] && (r = J(r, s[1])), r
    };
    z.strftime = function (t, e, i, s) {
        var r = "perl", a = z.regional.getLocale();
        i && z.formats.hasOwnProperty(i) ? r = i : i && z.regional.hasOwnProperty(i) && (a = i), s && z.formats.hasOwnProperty(s) ? r = s : s && z.regional.hasOwnProperty(s) && (a = s), ("[object Object]" != C(t) || "jsDate" != t._type) && (t = new z(t), t.locale = a), e || (e = t.formatString || z.regional[a].formatString);
        for (var n, o = e || "%Y-%m-%d", h = ""; o.length > 0;)(n = o.match(z.formats[r].codes.matcher)) ? (h += o.slice(0, n.index), h += (n[1] || "") + U(t, n[2], r), o = o.slice(n.index + n[0].length)) : (h += o, o = "");
        return h
    }, z.formats = {ISO: "%Y-%m-%dT%H:%M:%S.%N%G", SQL: "%Y-%m-%d %H:%M:%S"}, z.formats.perl = {codes: {matcher: /()%(#?(%|[a-z]))/i, Y: "FullYear", y: "ShortYear.2", m: "MonthNumber.2", "#m": "MonthNumber", B: "MonthName", b: "AbbrMonthName", d: "Date.2", "#d": "Date", e: "Date", A: "DayName", a: "AbbrDayName", w: "Day", H: "Hours.2", "#H": "Hours", I: "Hours12.2", "#I": "Hours12", p: "AMPM", M: "Minutes.2", "#M": "Minutes", S: "Seconds.2", "#S": "Seconds", s: "Unix", N: "Milliseconds.3", "#N": "Milliseconds", O: "TimezoneOffset", Z: "TimezoneName", G: "GmtOffset"}, shortcuts: {F: "%Y-%m-%d", T: "%H:%M:%S", X: "%H:%M:%S", x: "%m/%d/%y", D: "%m/%d/%y", "#c": "%a %b %e %H:%M:%S %Y", v: "%e-%b-%Y", R: "%H:%M", r: "%I:%M:%S %p", t: "	", n: "\n", "%": "%"}}, z.formats.php = {codes: {matcher: /()%((%|[a-z]))/i, a: "AbbrDayName", A: "DayName", d: "Date.2", e: "Date", j: "DayOfYear.3", u: "DayOfWeek", w: "Day", U: "FullWeekOfYear.2", V: "IsoWeek.2", W: "WeekOfYear.2", b: "AbbrMonthName", B: "MonthName", m: "MonthNumber.2", h: "AbbrMonthName", C: "Century.2", y: "ShortYear.2", Y: "FullYear", H: "Hours.2", I: "Hours12.2", l: "Hours12", p: "AMPM", P: "AmPm", M: "Minutes.2", S: "Seconds.2", s: "Unix", O: "TimezoneOffset", z: "GmtOffset", Z: "TimezoneAbbr"}, shortcuts: {D: "%m/%d/%y", F: "%Y-%m-%d", T: "%H:%M:%S", X: "%H:%M:%S", x: "%m/%d/%y", R: "%H:%M", r: "%I:%M:%S %p", t: "	", n: "\n", "%": "%"}}, z.createDate = function (t) {
        function e(t, e) {
            var i, s, r, a, n = parseFloat(e[1]), o = parseFloat(e[2]), h = parseFloat(e[3]), l = z.config.defaultCentury;
            return n > 31 ? (s = h, r = o, i = l + n) : (s = o, r = n, i = l + h), a = r + "/" + s + "/" + i, t.replace(/^([0-9]{1,2})[-\/]([0-9]{1,2})[-\/]([0-9]{1,2})/, a)
        }

        if (null == t)return new Date;
        if (t instanceof Date)return t;
        if ("number" == typeof t)return new Date(t);
        var i = String(t).replace(/^\s*(.+)\s*$/g, "$1");
        i = i.replace(/^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,4})/, "$1/$2/$3"), i = i.replace(/^(3[01]|[0-2]?\d)[-\/]([a-z]{3,})[-\/](\d{4})/i, "$1 $2 $3");
        var s = i.match(/^(3[01]|[0-2]?\d)[-\/]([a-z]{3,})[-\/](\d{2})\D*/i);
        if (s && s.length > 3) {
            var r = parseFloat(s[3]), a = z.config.defaultCentury + r;
            a = String(a), i = i.replace(/^(3[01]|[0-2]?\d)[-\/]([a-z]{3,})[-\/](\d{2})\D*/i, s[1] + " " + s[2] + " " + a)
        }
        s = i.match(/^([0-9]{1,2})[-\/]([0-9]{1,2})[-\/]([0-9]{1,2})[^0-9]/), s && s.length > 3 && (i = e(i, s));
        var s = i.match(/^([0-9]{1,2})[-\/]([0-9]{1,2})[-\/]([0-9]{1,2})$/);
        s && s.length > 3 && (i = e(i, s));
        for (var n, o, h, l = 0, d = z.matchers.length, p = i; d > l;) {
            if (o = Date.parse(p), !isNaN(o))return new Date(o);
            if (n = z.matchers[l], "function" == typeof n) {
                if (h = n.call(z, p), h instanceof Date)return h
            } else p = i.replace(n[0], n[1]);
            l++
        }
        return 0 / 0
    }, z.daysInMonth = function (t, e) {
        return 2 == e ? 29 == new Date(t, 1, 29).getDate() ? 29 : 28 : [T, 31, T, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
    }, z.matchers = [
        [/(3[01]|[0-2]\d)\s*\.\s*(1[0-2]|0\d)\s*\.\s*([1-9]\d{3})/, "$2/$1/$3"],
        [/([1-9]\d{3})\s*-\s*(1[0-2]|0\d)\s*-\s*(3[01]|[0-2]\d)/, "$2/$3/$1"],
        function (t) {
            var e = t.match(/^(?:(.+)\s+)?([012]?\d)(?:\s*\:\s*(\d\d))?(?:\s*\:\s*(\d\d(\.\d*)?))?\s*(am|pm)?\s*$/i);
            if (e) {
                if (e[1]) {
                    var i = this.createDate(e[1]);
                    if (isNaN(i))return
                } else {
                    var i = new Date;
                    i.setMilliseconds(0)
                }
                var s = parseFloat(e[2]);
                return e[6] && (s = "am" == e[6].toLowerCase() ? 12 == s ? 0 : s : 12 == s ? 12 : s + 12), i.setHours(s, parseInt(e[3] || 0, 10), parseInt(e[4] || 0, 10), 1e3 * (parseFloat(e[5] || 0) || 0)), i
            }
            return t
        },
        function (t) {
            var e = t.match(/^(?:(.+))[T|\s+]([012]\d)(?:\:(\d\d))(?:\:(\d\d))(?:\.\d+)([\+\-]\d\d\:\d\d)$/i);
            if (e) {
                if (e[1]) {
                    var i = this.createDate(e[1]);
                    if (isNaN(i))return
                } else {
                    var i = new Date;
                    i.setMilliseconds(0)
                }
                var s = parseFloat(e[2]);
                return i.setHours(s, parseInt(e[3], 10), parseInt(e[4], 10), 1e3 * parseFloat(e[5])), i
            }
            return t
        },
        function (t) {
            var e = t.match(/^([0-3]?\d)\s*[-\/.\s]{1}\s*([a-zA-Z]{3,9})\s*[-\/.\s]{1}\s*([0-3]?\d)$/);
            if (e) {
                var i, s, r, a = new Date, n = z.config.defaultCentury, o = parseFloat(e[1]), h = parseFloat(e[3]);
                o > 31 ? (s = h, i = n + o) : (s = o, i = n + h);
                var r = q(e[2], z.regional[z.regional.getLocale()].monthNamesShort);
                return-1 == r && (r = q(e[2], z.regional[z.regional.getLocale()].monthNames)), a.setFullYear(i, r, s), a.setHours(0, 0, 0, 0), a
            }
            return t
        }
    ], t.jsDate = z, t.jqplot.sprintf = function () {
        function e(t, e, i, s) {
            var r = t.length >= e ? "" : Array(1 + e - t.length >>> 0).join(i);
            return s ? t + r : r + t
        }

        function i(e) {
            for (var i = new String(e), s = 10; s > 0 && i != (i = i.replace(/^(\d+)(\d{3})/, "$1" + t.jqplot.sprintf.thousandsSeparator + "$2")); s--);
            return i
        }

        function s(t, i, s, r, a, n) {
            var o = r - t.length;
            if (o > 0) {
                var h = " ";
                n && (h = "&nbsp;"), t = s || !a ? e(t, r, h, s) : t.slice(0, i.length) + e("", o, "0", !0) + t.slice(i.length)
            }
            return t
        }

        function r(t, i, r, a, n, o, h, l) {
            var d = t >>> 0;
            return r = r && d && {2: "0b", 8: "0", 16: "0x"}[i] || "", t = r + e(d.toString(i), o || 0, "0", !1), s(t, r, a, n, h, l)
        }

        function a(t, e, i, r, a, n) {
            return null != r && (t = t.slice(0, r)), s(t, "", e, i, a, n)
        }

        var n = arguments, o = 0, h = n[o++];
        return h.replace(t.jqplot.sprintf.regex, function (h, l, d, p, c, u, g) {
            if ("%%" == h)return"%";
            for (var f = !1, m = "", _ = !1, v = !1, x = !1, b = !1, w = 0; d && w < d.length; w++)switch (d.charAt(w)) {
                case" ":
                    m = " ";
                    break;
                case"+":
                    m = "+";
                    break;
                case"-":
                    f = !0;
                    break;
                case"0":
                    _ = !0;
                    break;
                case"#":
                    v = !0;
                    break;
                case"&":
                    x = !0;
                    break;
                case"'":
                    b = !0
            }
            if (p = p ? "*" == p ? +n[o++] : "*" == p.charAt(0) ? +n[p.slice(1, -1)] : +p : 0, 0 > p && (p = -p, f = !0), !isFinite(p))throw new Error("$.jqplot.sprintf: (minimum-)width must be finite");
            u = u ? "*" == u ? +n[o++] : "*" == u.charAt(0) ? +n[u.slice(1, -1)] : +u : "fFeE".indexOf(g) > -1 ? 6 : "d" == g ? 0 : void 0;
            var k = l ? n[l.slice(0, -1)] : n[o++];
            switch (g) {
                case"s":
                    return null == k ? "" : a(String(k), f, p, u, _, x);
                case"c":
                    return a(String.fromCharCode(+k), f, p, u, _, x);
                case"b":
                    return r(k, 2, v, f, p, u, _, x);
                case"o":
                    return r(k, 8, v, f, p, u, _, x);
                case"x":
                    return r(k, 16, v, f, p, u, _, x);
                case"X":
                    return r(k, 16, v, f, p, u, _, x).toUpperCase();
                case"u":
                    return r(k, 10, v, f, p, u, _, x);
                case"i":
                    var y = parseInt(+k, 10);
                    if (isNaN(y))return"";
                    var j = 0 > y ? "-" : m, D = b ? i(String(Math.abs(y))) : String(Math.abs(y));
                    return k = j + e(D, u, "0", !1), s(k, j, f, p, _, x);
                case"d":
                    var y = Math.round(+k);
                    if (isNaN(y))return"";
                    var j = 0 > y ? "-" : m, D = b ? i(String(Math.abs(y))) : String(Math.abs(y));
                    return k = j + e(D, u, "0", !1), s(k, j, f, p, _, x);
                case"e":
                case"E":
                case"f":
                case"F":
                case"g":
                case"G":
                    var y = +k;
                    if (isNaN(y))return"";
                    var j = 0 > y ? "-" : m, M = ["toExponential", "toFixed", "toPrecision"]["efg".indexOf(g.toLowerCase())], S = ["toString", "toUpperCase"]["eEfFgG".indexOf(g) % 2], D = Math.abs(y)[M](u), q = D.toString().split(".");
                    q[0] = b ? i(q[0]) : q[0], D = q.join(t.jqplot.sprintf.decimalMark), k = j + D;
                    var C = s(k, j, f, p, _, x)[S]();
                    return C;
                case"p":
                case"P":
                    var y = +k;
                    if (isNaN(y))return"";
                    var j = 0 > y ? "-" : m, q = String(Number(Math.abs(y)).toExponential()).split(/e|E/), R = -1 != q[0].indexOf(".") ? q[0].length - 1 : String(y).length, T = q[1] < 0 ? -q[1] - 1 : 0;
                    if (Math.abs(y) < 1)k = u >= R + T ? j + Math.abs(y).toPrecision(R) : u - 1 >= R ? j + Math.abs(y).toExponential(R - 1) : j + Math.abs(y).toExponential(u - 1); else {
                        var P = u >= R ? R : u;
                        k = j + Math.abs(y).toPrecision(P)
                    }
                    var S = ["toString", "toUpperCase"]["pP".indexOf(g) % 2];
                    return s(k, j, f, p, _, x)[S]();
                case"n":
                    return"";
                default:
                    return h
            }
        })
    }, t.jqplot.sprintf.thousandsSeparator = ",", t.jqplot.sprintf.decimalMark = ".", t.jqplot.sprintf.regex = /%%|%(\d+\$)?([-+#0&\' ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([nAscboxXuidfegpEGP])/g, t.jqplot.getSignificantFigures = function (t) {
        var e = String(Number(Math.abs(t)).toExponential()).split(/e|E/), i = -1 != e[0].indexOf(".") ? e[0].length - 1 : e[0].length, s = e[1] < 0 ? -e[1] - 1 : 0, r = parseInt(e[1], 10), a = r + 1 > 0 ? r + 1 : 0, n = a >= i ? 0 : i - r - 1;
        return{significantDigits: i, digitsLeft: a, digitsRight: n, zeros: s, exponent: r}
    }, t.jqplot.getPrecision = function (e) {
        return t.jqplot.getSignificantFigures(e).digitsRight
    };
    var V = t.uiBackCompat !== !1;
    t.jqplot.effects = {effect: {}};
    var Q = "jqplot.storage.";
    t.extend(t.jqplot.effects, {version: "1.9pre", save: function (t, e) {
        for (var i = 0; i < e.length; i++)null !== e[i] && t.data(Q + e[i], t[0].style[e[i]])
    }, restore: function (t, e) {
        for (var i = 0; i < e.length; i++)null !== e[i] && t.css(e[i], t.data(Q + e[i]))
    }, setMode: function (t, e) {
        return"toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
    }, createWrapper: function (e) {
        if (e.parent().is(".ui-effects-wrapper"))return e.parent();
        var i = {width: e.outerWidth(!0), height: e.outerHeight(!0), "float": e.css("float")}, s = t("<div></div>").addClass("ui-effects-wrapper").css({fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0}), r = {width: e.width(), height: e.height()}, a = document.activeElement;
        return e.wrap(s), (e[0] === a || t.contains(e[0], a)) && t(a).focus(), s = e.parent(), "static" === e.css("position") ? (s.css({position: "relative"}), e.css({position: "relative"})) : (t.extend(i, {position: e.css("position"), zIndex: e.css("z-index")}), t.each(["top", "left", "bottom", "right"], function (t, s) {
            i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
        }), e.css({position: "relative", top: 0, left: 0, right: "auto", bottom: "auto"})), e.css(r), s.css(i).show()
    }, removeWrapper: function (e) {
        var i = document.activeElement;
        return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), e
    }}), t.fn.extend({jqplotEffect: function () {
        function e(e) {
            function s() {
                t.isFunction(n) && n.call(r[0]), t.isFunction(e) && e()
            }

            var r = t(this), n = i.complete, o = i.mode;
            (r.is(":hidden") ? "hide" === o : "show" === o) ? s() : a.call(r[0], i, s)
        }

        var i = R.apply(this, arguments), s = i.mode, r = i.queue, a = t.jqplot.effects.effect[i.effect], n = !a && V && t.jqplot.effects[i.effect];
        return t.fx.off || !a && !n ? s ? this[s](i.duration, i.complete) : this.each(function () {
            i.complete && i.complete.call(this)
        }) : a ? r === !1 ? this.each(e) : this.queue(r || "fx", e) : n.call(this, {options: i, duration: i.duration, callback: i.complete, mode: i.mode})
    }});
    var Z = /up|down|vertical/, K = /up|left|vertical|horizontal/;
    t.jqplot.effects.effect.blind = function (e, i) {
        var s, r, a, n = t(this), o = ["position", "top", "bottom", "left", "right", "height", "width"], h = t.jqplot.effects.setMode(n, e.mode || "hide"), l = e.direction || "up", d = Z.test(l), p = d ? "height" : "width", c = d ? "top" : "left", u = K.test(l), g = {}, f = "show" === h;
        n.parent().is(".ui-effects-wrapper") ? t.jqplot.effects.save(n.parent(), o) : t.jqplot.effects.save(n, o), n.show(), a = parseInt(n.css("top"), 10), s = t.jqplot.effects.createWrapper(n).css({overflow: "hidden"}), r = d ? s[p]() + a : s[p](), g[p] = f ? String(r) : "0", u || (n.css(d ? "bottom" : "right", 0).css(d ? "top" : "left", "").css({position: "absolute"}), g[c] = f ? "0" : String(r)), f && (s.css(p, 0), u || s.css(c, r)), s.animate(g, {duration: e.duration, easing: e.easing, queue: !1, complete: function () {
            "hide" === h && n.hide(), t.jqplot.effects.restore(n, o), t.jqplot.effects.removeWrapper(n), i()
        }})
    }
}(jQuery);