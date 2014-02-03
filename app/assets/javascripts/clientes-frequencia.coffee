$(document).on 'page:change', ->
url = "ajax_grafico_frequencia"
  $.get url, {}, (data) ->
    plot2 = $.jqplot("grafico", [data],
      title: "Frequência dos Clientes"
      height: 310
      width: 750
      gridPadding:
        right: 35

      seriesDefaults:
        pointLabels:
          show: true
          formatString: "%#.0f"
          tickInterval: "1"

      axesDefaults:
        tickOptions:
          formatString: "%#.0f"

      axes:
        xaxis:
          renderer: $.jqplot.DateAxisRenderer
          tickOptions:
            formatString: "%d/%m/%Y"


          tickInterval: "1 month"

        yaxis:
          pad: 1

      cursor:
        show: true
        zoom: true
        showTooltip: false

      series: [
        lineWidth: 3
        markerOptions:
          style: "circle"
      ]
    )

  $("#content").bind "resize", (event, ui) ->
    plot2.replot resetAxes: true

  $("#content_left").click ->
    data_inicio = $(".jqplot-xaxis-tick:first").html()
    data_fim = $(".jqplot-xaxis-tick:last").html()
    window.open "../relatorios/relatorio_frequencia.php?data_inicio=" + data_inicio + "&data_fim=" + data_fim, "_blank"

