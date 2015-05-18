(function() {
  $(document).on('page:change', function() {
    var reload;
    reload = function(rowid, result) {
      return $("#lista").trigger("reloadGrid");
    };
    jQuery("#lista").jqGrid({
      height: content_height,
      width: content_width,
      url: "ajax_cadastros_grid?oper=show",
      datatype: "json",
      colNames: ["Nome do Cliente", "Telefone", "Cep", "Começo da Fidelidade", "Numero Cartão"],
      colModel: [
        {
          name: "nome",
          index: "nome",
          width: 15,
          editable: true
        }, {
          name: "telefone",
          index: "telefone",
          editable: true,
          width: 10,
          sorttype: "int"
        }, {
          name: "cep",
          index: "cep",
          editable: true,
          width: 10,
          sorttype: "int"
        }, {
          name: "created_at",
          index: "created_at",
          formatter: 'date',
          editable: false,
          width: 5
        }, {
          name: "numero_cartao",
          index: "numero_cartao",
          hidden: true,
          viewable: true,
          editable: true,
          editrules: {
            edithidden: true
          },
          width: 10
        }
      ],
      rowNum: 12,
      hidegrid: false,
      pager: "#lista_footer",
      sortname: "id",
      viewrecords: true,
      sortorder: "asc",
      loadonce: false,
      caption: "Clientes",
      editurl: "ajax_cadastros_grid"
    });
    return jQuery("#lista").jqGrid("navGrid", "#lista_footer", {
      edit: true,
      add: true,
      del: true,
      reloadAfterSubmit: true
    }, {
      errorTextFormat: function(data) {
        if (data.status === 500) {
          return 'Erro ao editar o cliente';
        }
      }
    }, {
      errorTextFormat: function(data) {
        if (data.status === 500) {
          return 'Erro ao cadastrar novo cliente';
        }
      }
    }, {
      errorTextFormat: function(data) {
        if (data.status === 500) {
          return 'Erro ao deletar o cliente';
        }
      }
    });
  });

}).call(this);
