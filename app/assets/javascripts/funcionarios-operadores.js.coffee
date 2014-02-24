$(document).on 'page:change', ->
  reload = (rowid, result) ->
    $("#lista").trigger "reloadGrid"
  jQuery("#lista").jqGrid
    height: content_height
    width: content_width
    url: "ajax_operadores_grid?oper=show"
    datatype: "json"
    colNames: ["Nome do Operador", "Usuario", "Data do Registro"]
    colModel: [
      name: "nome"
      index: "nome"
      width: 15
      editable: true
    ,
      name: "usuario"
      index: "usuario"
      editable: true
      width: 10
    ,
      name: "created_at"
      index: "created_at"
      formatter: 'date'
      editable: false
      width: 5
    ]
    rowNum: 12
    hidegrid: false
    pager: "#lista_footer"
    sortname: "id"
    viewrecords: true
    sortorder: "asc"
    loadonce: false
    caption: "Operadores"
    editurl: "ajax_operadores_grid"

  jQuery("#lista").jqGrid "navGrid", "#lista_footer", {
      edit: true
      add: true
      del: true
      reloadAfterSubmit: true
    },
    {
      errorTextFormat: (data) ->
        'Erro ao editar o operador' if data.status == 500

    },
    {
      errorTextFormat: (data) ->
        'Erro ao cadastrar um novo operador' if data.status == 500

    },
    {
      errorTextFormat: (data) ->
        'Erro ao deletar o operador' if data.status == 500

    }
