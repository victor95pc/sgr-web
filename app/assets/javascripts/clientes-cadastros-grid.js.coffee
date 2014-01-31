nome = ""
lastsel2 = 0
$ ->
  reload = (rowid, result) ->
    $("#lista").trigger "reloadGrid"
  jQuery("#lista").jqGrid
    height: 279
    width: 830
    url: "ajax_cadastros_grid?oper=show"
    datatype: "json"
    colNames: ["Nome do Cliente", "Telefone", "Cep", "Começo da Fidelidade", "Numero Cartão"]
    colModel: [
      name: "nome"
      index: "nome"
      width: 10
      editable: true
    ,
      name: "telefone"
      index: "telefone"
      editable: true
      width: 10
      sorttype: "int"
    ,
      name: "cep"
      index: "cep"
      editable: true
      width: 10
      sorttype: "int"
    ,
      name: "created_at"
      index: "created_at"
      formatter: 'date'
      editable: false
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
    caption: "Clientes"
    editurl: "ajax_cadastros_grid"

  jQuery("#lista").jqGrid "navGrid", "#lista_footer", {
      edit: true
      add: true
      del: true
      reloadAfterSubmit: true
    },
    {
      errorTextFormat: (data) ->
        'Erro ao cadastrar novo cliente' if data.status == 500

    },
    {
      errorTextFormat: (data) ->
        'Erro ao editar o cliente' if data.status == 500

    }
