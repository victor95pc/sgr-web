(function(){$(document).on("page:change",function(){var t;return t="ajax_grafico_frequencia",$.get(t,{},function(t){var i;return i=$.jqplot("grafico",[t],{title:"Frequência dos Clientes",height:content_height,width:content_width/1.1,gridPadding:{right:35},seriesDefaults:{pointLabels:{show:!0,formatString:"%#.0f",tickInterval:"1"}},axesDefaults:{tickOptions:{formatString:"%#.0f"}},axes:{xaxis:{renderer:$.jqplot.DateAxisRenderer,tickOptions:{formatString:"%d/%m/%Y"},tickInterval:"1 month"},yaxis:{pad:1}},cursor:{show:!0,zoom:!0,showTooltip:!1},series:[{lineWidth:3,markerOptions:{style:"circle"}}]})}),$("#content").bind("resize",function(){return plot2.replot({resetAxes:!0})}),$("#content_left").click(function(){var t,i;return i=$(".jqplot-xaxis-tick:first").html(),t=$(".jqplot-xaxis-tick:last").html(),window.open("../relatorios/relatorio_frequencia.php?data_inicio="+i+"&data_fim="+t,"_blank")})})}).call(this);