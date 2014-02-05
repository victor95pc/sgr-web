$(document).on 'page:change', ->
  reload = (rowid, result) ->
    $("#lista").trigger "reloadGrid"
  jQuery("#lista").jqGrid
    height: content_height
    width: content_width
    url: "ajax_promocoes_especiais_grid?oper=show"
    datatype: "json"
    colNames: ["Nome do Cliente", "Nome da Promoção", "Descrição", "Valor"]
    colModel: [
      name: "cliente"
      index: "cliente"
      width: 15
      editable: false
    ,
      name: "nome"
      index: "nome"
      width: 15
      editable: true
    ,
      name: "descricao"
      index: "descricao"
      width: 20
      editable: true
    ,
      name: "valor"
      index: "valor"
      editable: false
      width: 5
      sorttype: "currency"
      formatter: 'currency'
    ]
    rowNum: 12
    hidegrid: false
    pager: "#lista_footer"
    sortname: "id"
    viewrecords: true
    sortorder: "asc"
    loadonce: false
    caption: "Promoções"
    editurl: "ajax_promocoes_especiais_grid"

  jQuery("#lista").jqGrid "navGrid", "#lista_footer", {
      edit: true
      add: true
      del: true
      reloadAfterSubmit: true
    },
    {
      errorTextFormat: (data) ->
        'Erro ao editar a promoção' if data.status == 500

    },
    {
      errorTextFormat: (data) ->
        'Erro ao cadastrar uma nova promoção' if data.status == 500

    },
    {
      errorTextFormat: (data) ->
        'Erro ao deletar a promoção' if data.status == 500

    }
