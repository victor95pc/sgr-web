function jqGridInclude() {
    function i(i) {
        var e = document.getElementsByTagName("head")[0], c = document.createElement("script");
        c.setAttribute("type", "text/javascript"), c.setAttribute("language", "javascript"), c.setAttribute("src", i), e.appendChild(c)
    }

    for (var e, c = "js/", n = [
        {include: !0, incfile: "i18n/grid.locale-en.js"},
        {include: !0, incfile: "grid.base.js"},
        {include: !0, incfile: "grid.common.js"},
        {include: !0, incfile: "grid.formedit.js"},
        {include: !0, incfile: "grid.inlinedit.js"},
        {include: !0, incfile: "grid.celledit.js"},
        {include: !0, incfile: "grid.subgrid.js"},
        {include: !0, incfile: "grid.treegrid.js"},
        {include: !0, incfile: "grid.grouping.js"},
        {include: !0, incfile: "grid.custom.js"},
        {include: !0, incfile: "grid.tbltogrid.js"},
        {include: !0, incfile: "grid.import.js"},
        {include: !0, incfile: "jquery.fmatter.js"},
        {include: !0, incfile: "JsonXml.js"},
        {include: !0, incfile: "grid.jqueryui.js"},
        {include: !0, incfile: "grid.filter.js"}
    ], r = 0; r < n.length; r++)n[r].include === !0 && (e = c + n[r].incfile, jQuery.browser.safari ? jQuery.ajax({url: e, dataType: "script", async: !1, cache: !0}) : jQuery.browser.msie ? document.write('<script charset="utf-8" type="text/javascript" src="' + e + '"></script>') : i(e))
}
jqGridInclude();