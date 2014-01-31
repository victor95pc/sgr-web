$ ->
  reload = (rowid, result) ->
    $("#lista").trigger "reloadGrid"
  jQuery("#lista").jqGrid
    height: 279
    width: 830
    url: "ajax_cadastros_grid?oper=show"
    datatype: "json"
    colNames: ["Nome do Funcionário", "Cargo", "Salario", "Data de Admição"]
    colModel: [
      name: "nome"
      index: "nome"
      width: 90
      editable: true
    ,
      name: "cargo"
      index: "cargo"
      editable: true
      width: 40
    ,
      name: "salario"
      index: "salario"
      editable: true
      width: 20
    ,
      name: "created_at"
      index: "created_at"
      editable: false
      width: 30
    ]
    hidegrid: false
    rowNum: 12
    pager: "#lista_footer"
    sortname: "id"
    viewrecords: true
    sortorder: "asc"
    loadonce: false
    caption: "Funcionarios"
    editurl: "ajax_cadastros_grid"

  jQuery("#lista").jqGrid "navGrid", "#lista_footer", {
      edit: false
      add: false
      del: true
      reloadAfterSubmit: true
    },
    {
      errorTextFormat: (data) ->
        'Erro ao cadastrar um novo funcionário' if data.status == 500

    }
  ,
    {
      errorTextFormat: (data) ->
        'Erro ao editar um funcionário' if data.status == 500

    }

