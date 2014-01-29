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
    onSelectRow: (id) ->
      $("#lista").keydown (event) ->
        if event.keyCode is 13
          if id and id isnt lastsel2
            jQuery("#lista").restoreRow lastsel2
            jQuery("#lista").jqGrid "editRow", id, true, "", "", "", "", reload
            lastsel2 = id


    editurl: "ajax_cadastros_grid"

  jQuery("#lista").jqGrid("navGrid", "#lista_footer",
    edit: true
    add: true
    del: true
    reloadAfterSubmit: true
  ).navButtonAdd "#pager",
    caption: "Gerar Relatório"
    buttonicon: "ui-icon-clipboard"
    onClickButton: ->
      alert "Adding Row"

    position: "last"

  jQuery("#lista").jqGrid "inlineNav", "#lista_footer",
    edit: false
    add: false
    del: false
    editParams:
      keys: true
      aftersavefunc: reload

    addParams:
      addRowParams:
        keys: true
        aftersavefunc: reload
