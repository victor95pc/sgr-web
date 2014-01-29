$ ->
  reload = (rowid, result) ->
    $("#lista").trigger "reloadGrid"
  jQuery("#lista").jqGrid
    height: 279
    width: 830
    url: "ajax_cadastros_grid"
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
      name: "data_admicao"
      index: "data_admicao"
      editable: false
      width: 30
    ]
    hidegrid: false
    rowNum: 12
    pager: "#lista_footer"
    sortname: "id_funcionario"
    viewrecords: true
    sortorder: "asc"
    loadonce: false
    caption: "Funcionarios"
    onSelectRow: (id) ->
      $("#lista").keydown (event) ->
        if event.keyCode is 13
          if id and id isnt lastsel2
            jQuery("#lista").restoreRow lastsel2
            jQuery("#lista").jqGrid "editRow", id, true, "", "", "", "", reload
            lastsel2 = id


    editurl: "../modelos/editarFuncionario.php"

  jQuery("#lista").jqGrid "navGrid", "#lista_footer",
    edit: false
    add: false
    del: true
    reloadAfterSubmit: true

  jQuery("#lista").jqGrid "inlineNav", "#lista_footer",
    editParams:
      keys: true
      aftersavefunc: reload

    addParams:
      addRowParams:
        keys: true
        aftersavefunc: reload

