$(document).on 'page:change', ->
  reload = (rowid, result) ->
    $("#lista").trigger "reloadGrid"
  jQuery("#lista").jqGrid
    height: content_height
    width: content_width
    url: "ajax_pagamentos_clientes_grid?oper=show"
    datatype: "json"
    colNames: ["Nome do Cliente", "Valor", "Status", "Ultima Operação", "Peso", "Numero Cartão"]
    colModel: [
      name: "cliente"
      index: "cliente"
      width: 20
      editable: false
    ,
      name: "valor"
      index: "valor"
      editable: false
      width: 10
      sorttype: "currency"
      formatter: 'currency'
    ,
      name: "status"
      index: "status"
      editable: true
      edittype: 'select', formatter: 'select', editoptions: {value: "1:Pagar;2:Pago;3:Cancelado"}
      width: 5
    ,
      name: "updated_at"
      index: "updated_at"
      formatter: 'date', formatoptions: {srcformat: 'ISO8601Long', newformat: 'd/m/Y H:i:s'}
      editable: false
      width: 10
    ,
      name: "peso"
      index: "peso"
      hidden: true
      viewable: true
      editable: true
      editrules: {edithidden: true}
      width: 10
    ,
      name: "numero_cartao"
      index: "numero_cartao"
      hidden: true
      viewable: true
      editable: true
      editrules: {edithidden: true}
      width: 10
    ]
    rowNum: 12
    hidegrid: false
    pager: "#lista_footer"
    sortname: "id"
    viewrecords: true
    sortorder: "asc"
    loadonce: false
    caption: "Pagamentos"
    editurl: "ajax_pagamentos_clientes_grid"

  jQuery("#lista").jqGrid "navGrid", "#lista_footer", {
      edit: true
      add: true
      del: true
      reloadAfterSubmit: true
    },
    {
      errorTextFormat: (data) ->
        'Erro ao editar a comanda' if data.status == 500

    },
    {
      errorTextFormat: (data) ->
        'Erro ao cadastrar uma nova comanda' if data.status == 500

    },
    {
      errorTextFormat: (data) ->
        'Erro ao deletar a comandas' if data.status == 500

    }
