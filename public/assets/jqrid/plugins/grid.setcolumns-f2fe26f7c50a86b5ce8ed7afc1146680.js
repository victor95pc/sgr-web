!function (t) {
    t.jgrid.extend({setColumns: function (o) {
        return o = t.extend({top: 0, left: 0, width: 200, height: "auto", dataheight: "auto", modal: !1, drag: !0, beforeShowForm: null, afterShowForm: null, afterSubmitForm: null, closeOnEscape: !0, ShrinkToFit: !1, jqModal: !1, saveicon: [!0, "left", "ui-icon-disk"], closeicon: [!0, "left", "ui-icon-close"], onClose: null, colnameview: !0, closeAfterSubmit: !0, updateAfterCheck: !1, recreateForm: !1}, t.jgrid.col, o || {}), this.each(function () {
            var e = this;
            if (e.grid) {
                var l = "function" == typeof o.beforeShowForm ? !0 : !1, a = "function" == typeof o.afterShowForm ? !0 : !1, d = "function" == typeof o.afterSubmitForm ? !0 : !1, r = e.p.id, c = "ColTbl_" + r, n = {themodal: "colmod" + r, modalhead: "colhd" + r, modalcontent: "colcnt" + r, scrollelm: c};
                if (o.recreateForm === !0 && null != t("#" + n.themodal).html() && t("#" + n.themodal).remove(), null != t("#" + n.themodal).html())l && o.beforeShowForm(t("#" + c)), t.jgrid.viewModal("#" + n.themodal, {gbox: "#gbox_" + r, jqm: o.jqModal, jqM: !1, modal: o.modal}), a && o.afterShowForm(t("#" + c)); else {
                    var s = isNaN(o.dataheight) ? o.dataheight : o.dataheight + "px", h = "<div id='" + c + "' class='formdata' style='width:100%;overflow:auto;position:relative;height:" + s + ";'>";
                    for (h += "<table class='ColTable' cellspacing='1' cellpading='2' border='0'><tbody>", i = 0; i < this.p.colNames.length; i++)e.p.colModel[i].hidedlg || (h += "<tr><td style='white-space: pre;'><input type='checkbox' style='margin-right:5px;' id='col_" + this.p.colModel[i].name + "' class='cbox' value='T' " + (this.p.colModel[i].hidden === !1 ? "checked" : "") + "/><label for='col_" + this.p.colModel[i].name + "'>" + this.p.colNames[i] + (o.colnameview ? " (" + this.p.colModel[i].name + ")" : "") + "</label></td></tr>");
                    h += "</tbody></table></div>";
                    var m = o.updateAfterCheck ? "" : "<a href='javascript:void(0)' id='dData' class='fm-button ui-state-default ui-corner-all'>" + o.bSubmit + "</a>", u = "<a href='javascript:void(0)' id='eData' class='fm-button ui-state-default ui-corner-all'>" + o.bCancel + "</a>";
                    h += "<table border='0' class='EditTable' id='" + c + "_2'><tbody><tr style='display:block;height:3px;'><td></td></tr><tr><td class='DataTD ui-widget-content'></td></tr><tr><td class='ColButton EditButton'>" + m + "&#160;" + u + "</td></tr></tbody></table>", o.gbox = "#gbox_" + r, t.jgrid.createModal(n, h, o, "#gview_" + e.p.id, t("#gview_" + e.p.id)[0]), 1 == o.saveicon[0] && t("#dData", "#" + c + "_2").addClass("right" == o.saveicon[1] ? "fm-button-icon-right" : "fm-button-icon-left").append("<span class='ui-icon " + o.saveicon[2] + "'></span>"), 1 == o.closeicon[0] && t("#eData", "#" + c + "_2").addClass("right" == o.closeicon[1] ? "fm-button-icon-right" : "fm-button-icon-left").append("<span class='ui-icon " + o.closeicon[2] + "'></span>"), o.updateAfterCheck ? t(":input", "#" + c).click(function () {
                        var i = this.id.substr(4);
                        return i && (this.checked ? t(e).jqGrid("showCol", i) : t(e).jqGrid("hideCol", i), o.ShrinkToFit === !0 && t(e).jqGrid("setGridWidth", e.grid.width - .001, !0)), this
                    }) : t("#dData", "#" + c + "_2").click(function () {
                        for (i = 0; i < e.p.colModel.length; i++)if (!e.p.colModel[i].hidedlg) {
                            var l = e.p.colModel[i].name.replace(/\./g, "\\.");
                            t("#col_" + l, "#" + c).attr("checked") ? (t(e).jqGrid("showCol", e.p.colModel[i].name), t("#col_" + l, "#" + c).attr("defaultChecked", !0)) : (t(e).jqGrid("hideCol", e.p.colModel[i].name), t("#col_" + l, "#" + c).attr("defaultChecked", ""))
                        }
                        return o.ShrinkToFit === !0 && t(e).jqGrid("setGridWidth", e.grid.width - .001, !0), o.closeAfterSubmit && t.jgrid.hideModal("#" + n.themodal, {gb: "#gbox_" + r, jqm: o.jqModal, onClose: o.onClose}), d && o.afterSubmitForm(t("#" + c)), !1
                    }), t("#eData", "#" + c + "_2").click(function () {
                        return t.jgrid.hideModal("#" + n.themodal, {gb: "#gbox_" + r, jqm: o.jqModal, onClose: o.onClose}), !1
                    }), t("#dData, #eData", "#" + c + "_2").hover(function () {
                        t(this).addClass("ui-state-hover")
                    }, function () {
                        t(this).removeClass("ui-state-hover")
                    }), l && o.beforeShowForm(t("#" + c)), t.jgrid.viewModal("#" + n.themodal, {gbox: "#gbox_" + r, jqm: o.jqModal, jqM: !0, modal: o.modal}), a && o.afterShowForm(t("#" + c))
                }
            }
        })
    }})
}(jQuery);