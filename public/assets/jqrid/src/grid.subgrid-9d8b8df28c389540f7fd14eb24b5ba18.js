!function (i) {
    "use strict";
    i.jgrid.extend({setSubGrid: function () {
        return this.each(function () {
            var d, e, t = this, r = {plusicon: "ui-icon-plus", minusicon: "ui-icon-minus", openicon: "ui-icon-carat-1-sw", expandOnLoad: !1, delayOnLoad: 50, selectOnExpand: !1, reloadOnExpand: !0};
            if (t.p.subGridOptions = i.extend(r, t.p.subGridOptions || {}), t.p.colNames.unshift(""), t.p.colModel.unshift({name: "subgrid", width: i.jgrid.cell_width ? t.p.subGridWidth + t.p.cellLayout : t.p.subGridWidth, sortable: !1, resizable: !1, hidedlg: !0, search: !1, fixed: !0}), d = t.p.subGridModel, d[0])for (d[0].align = i.extend([], d[0].align || []), e = 0; e < d[0].name.length; e++)d[0].align[e] = d[0].align[e] || "left"
        })
    }, addSubGridCell: function (i, d) {
        var e, t, r = "";
        return this.each(function () {
            r = this.formatCol(i, d), t = this.p.id, e = this.p.subGridOptions.plusicon
        }), '<td role="gridcell" aria-describedby="' + t + '_subgrid" class="ui-sgcollapsed sgcollapsed" ' + r + "><a href='javascript:void(0);'><span class='ui-icon " + e + "'></span></a></td>"
    }, addSubGrid: function (d, e) {
        return this.each(function () {
            var t = this;
            if (t.grid) {
                var r, s, a, n, l, o = function (d, e, r) {
                    var s = i("<td align='" + t.p.subGridModel[0].align[r] + "'></td>").html(e);
                    i(d).append(s)
                }, p = function (d, e) {
                    var r, s, a, n = i("<table cellspacing='0' cellpadding='0' border='0'><tbody></tbody></table>"), l = i("<tr></tr>");
                    for (s = 0; s < t.p.subGridModel[0].name.length; s++)r = i("<th class='ui-state-default ui-th-subgrid ui-th-column ui-th-" + t.p.direction + "'></th>"), i(r).html(t.p.subGridModel[0].name[s]), i(r).width(t.p.subGridModel[0].width[s]), i(l).append(r);
                    i(n).append(l), d && (a = t.p.xmlReader.subgrid, i(a.root + " " + a.row, d).each(function () {
                        if (l = i("<tr class='ui-widget-content ui-subtblcell'></tr>"), a.repeatitems === !0)i(a.cell, this).each(function (d) {
                            o(l, i(this).text() || "&#160;", d)
                        }); else {
                            var d = t.p.subGridModel[0].mapping || t.p.subGridModel[0].name;
                            if (d)for (s = 0; s < d.length; s++)o(l, i(d[s], this).text() || "&#160;", s)
                        }
                        i(n).append(l)
                    }));
                    var p = i("table:first", t.grid.bDiv).attr("id") + "_";
                    return i("#" + i.jgrid.jqID(p + e)).append(n), t.grid.hDiv.loading = !1, i("#load_" + i.jgrid.jqID(t.p.id)).hide(), !1
                }, u = function (d, e) {
                    var r, s, a, n, l, p, u = i("<table cellspacing='0' cellpadding='0' border='0'><tbody></tbody></table>"), c = i("<tr></tr>");
                    for (a = 0; a < t.p.subGridModel[0].name.length; a++)r = i("<th class='ui-state-default ui-th-subgrid ui-th-column ui-th-" + t.p.direction + "'></th>"), i(r).html(t.p.subGridModel[0].name[a]), i(r).width(t.p.subGridModel[0].width[a]), i(c).append(r);
                    if (i(u).append(c), d && (l = t.p.jsonReader.subgrid, s = i.jgrid.getAccessor(d, l.root), void 0 !== s))for (a = 0; a < s.length; a++) {
                        if (n = s[a], c = i("<tr class='ui-widget-content ui-subtblcell'></tr>"), l.repeatitems === !0)for (l.cell && (n = n[l.cell]), p = 0; p < n.length; p++)o(c, n[p] || "&#160;", p); else {
                            var g = t.p.subGridModel[0].mapping || t.p.subGridModel[0].name;
                            if (g.length)for (p = 0; p < g.length; p++)o(c, n[g[p]] || "&#160;", p)
                        }
                        i(u).append(c)
                    }
                    var b = i("table:first", t.grid.bDiv).attr("id") + "_";
                    return i("#" + i.jgrid.jqID(b + e)).append(u), t.grid.hDiv.loading = !1, i("#load_" + i.jgrid.jqID(t.p.id)).hide(), !1
                }, c = function (d) {
                    var e, r, s, a;
                    if (e = i(d).attr("id"), r = {nd_: (new Date).getTime()}, r[t.p.prmNames.subgridid] = e, !t.p.subGridModel[0])return!1;
                    if (t.p.subGridModel[0].params)for (a = 0; a < t.p.subGridModel[0].params.length; a++)for (s = 0; s < t.p.colModel.length; s++)t.p.colModel[s].name === t.p.subGridModel[0].params[a] && (r[t.p.colModel[s].name] = i("td:eq(" + s + ")", d).text().replace(/\&#160\;/gi, ""));
                    if (!t.grid.hDiv.loading)switch (t.grid.hDiv.loading = !0, i("#load_" + i.jgrid.jqID(t.p.id)).show(), t.p.subgridtype || (t.p.subgridtype = t.p.datatype), i.isFunction(t.p.subgridtype) ? t.p.subgridtype.call(t, r) : t.p.subgridtype = t.p.subgridtype.toLowerCase(), t.p.subgridtype) {
                        case"xml":
                        case"json":
                            i.ajax(i.extend({type: t.p.mtype, url: t.p.subGridUrl, dataType: t.p.subgridtype, data: i.isFunction(t.p.serializeSubGridData) ? t.p.serializeSubGridData.call(t, r) : r, complete: function (d) {
                                "xml" === t.p.subgridtype ? p(d.responseXML, e) : u(i.jgrid.parse(d.responseText), e), d = null
                            }}, i.jgrid.ajaxOptions, t.p.ajaxSubgridOptions || {}))
                    }
                    return!1
                }, g = 0;
                i.each(t.p.colModel, function () {
                    (this.hidden === !0 || "rn" === this.name || "cb" === this.name) && g++
                });
                var b = t.rows.length, h = 1;
                for (void 0 !== e && e > 0 && (h = e, b = e + 1); b > h;)i(t.rows[h]).hasClass("jqgrow") && i(t.rows[h].cells[d]).bind("click", function () {
                    var e = i(this).parent("tr")[0];
                    if (l = e.nextSibling, i(this).hasClass("sgcollapsed")) {
                        if (s = t.p.id, r = e.id, t.p.subGridOptions.reloadOnExpand === !0 || t.p.subGridOptions.reloadOnExpand === !1 && !i(l).hasClass("ui-subgrid")) {
                            if (a = d >= 1 ? "<td colspan='" + d + "'>&#160;</td>" : "", n = i(t).triggerHandler("jqGridSubGridBeforeExpand", [s + "_" + r, r]), n = n === !1 || "stop" === n ? !1 : !0, n && i.isFunction(t.p.subGridBeforeExpand) && (n = t.p.subGridBeforeExpand.call(t, s + "_" + r, r)), n === !1)return!1;
                            i(e).after("<tr role='row' class='ui-subgrid'>" + a + "<td class='ui-widget-content subgrid-cell'><span class='ui-icon " + t.p.subGridOptions.openicon + "'></span></td><td colspan='" + parseInt(t.p.colNames.length - 1 - g, 10) + "' class='ui-widget-content subgrid-data'><div id=" + s + "_" + r + " class='tablediv'></div></td></tr>"), i(t).triggerHandler("jqGridSubGridRowExpanded", [s + "_" + r, r]), i.isFunction(t.p.subGridRowExpanded) ? t.p.subGridRowExpanded.call(t, s + "_" + r, r) : c(e)
                        } else i(l).show();
                        i(this).html("<a href='javascript:void(0);'><span class='ui-icon " + t.p.subGridOptions.minusicon + "'></span></a>").removeClass("sgcollapsed").addClass("sgexpanded"), t.p.subGridOptions.selectOnExpand && i(t).jqGrid("setSelection", r)
                    } else if (i(this).hasClass("sgexpanded")) {
                        if (n = i(t).triggerHandler("jqGridSubGridRowColapsed", [s + "_" + r, r]), n = n === !1 || "stop" === n ? !1 : !0, n && i.isFunction(t.p.subGridRowColapsed) && (r = e.id, n = t.p.subGridRowColapsed.call(t, s + "_" + r, r)), n === !1)return!1;
                        t.p.subGridOptions.reloadOnExpand === !0 ? i(l).remove(".ui-subgrid") : i(l).hasClass("ui-subgrid") && i(l).hide(), i(this).html("<a href='javascript:void(0);'><span class='ui-icon " + t.p.subGridOptions.plusicon + "'></span></a>").removeClass("sgexpanded").addClass("sgcollapsed")
                    }
                    return!1
                }), h++;
                t.p.subGridOptions.expandOnLoad === !0 && i(t.rows).filter(".jqgrow").each(function (d, e) {
                    i(e.cells[0]).click()
                }), t.subGridXml = function (i, d) {
                    p(i, d)
                }, t.subGridJson = function (i, d) {
                    u(i, d)
                }
            }
        })
    }, expandSubGridRow: function (d) {
        return this.each(function () {
            var e = this;
            if ((e.grid || d) && e.p.subGrid === !0) {
                var t = i(this).jqGrid("getInd", d, !0);
                if (t) {
                    var r = i("td.sgcollapsed", t)[0];
                    r && i(r).trigger("click")
                }
            }
        })
    }, collapseSubGridRow: function (d) {
        return this.each(function () {
            var e = this;
            if ((e.grid || d) && e.p.subGrid === !0) {
                var t = i(this).jqGrid("getInd", d, !0);
                if (t) {
                    var r = i("td.sgexpanded", t)[0];
                    r && i(r).trigger("click")
                }
            }
        })
    }, toggleSubGridRow: function (d) {
        return this.each(function () {
            var e = this;
            if ((e.grid || d) && e.p.subGrid === !0) {
                var t = i(this).jqGrid("getInd", d, !0);
                if (t) {
                    var r = i("td.sgcollapsed", t)[0];
                    r ? i(r).trigger("click") : (r = i("td.sgexpanded", t)[0], r && i(r).trigger("click"))
                }
            }
        })
    }})
}(jQuery);