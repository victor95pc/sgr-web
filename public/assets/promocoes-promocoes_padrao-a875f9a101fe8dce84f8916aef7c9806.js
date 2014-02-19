(function () {
    $(document).on("page:change", function () {
        var r;
        return r = function () {
            return $("#lista").trigger("reloadGrid")
        }, jQuery("#lista").jqGrid({height: content_height, width: content_width, url: "ajax_promocoes_padrao_grid?oper=show", datatype: "json", colNames: ["Nome da Promoção", "Descrição", "Valor"], colModel: [
            {name: "nome", index: "nome", width: 15, editable: !0},
            {name: "descricao", index: "descricao", width: 20, editable: !0},
            {name: "valor", index: "valor", editable: !1, width: 5, sorttype: "currency", formatter: "currency"}
        ], rowNum: 12, hidegrid: !1, pager: "#lista_footer", sortname: "id", viewrecords: !0, sortorder: "asc", loadonce: !1, caption: "Promoções", editurl: "ajax_promocoes_padrao_grid"}), jQuery("#lista").jqGrid("navGrid", "#lista_footer", {edit: !0, add: !0, del: !0, reloadAfterSubmit: !0}, {errorTextFormat: function (r) {
            return 500 === r.status ? "Erro ao editar a promoção" : void 0
        }}, {errorTextFormat: function (r) {
            return 500 === r.status ? "Erro ao cadastrar uma nova promoção" : void 0
        }}, {errorTextFormat: function (r) {
            return 500 === r.status ? "Erro ao deletar a promoção" : void 0
        }})
    })
}).call(this);