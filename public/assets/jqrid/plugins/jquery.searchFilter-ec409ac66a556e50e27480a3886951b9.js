jQuery.fn.searchFilter=function(e,t){function i(e,t,i){function n(){return jQuery(this).toggleClass("ui-state-hover"),!1}function s(e){return jQuery(this).toggleClass("ui-state-active","mousedown"==e.type),!1}function a(e,t){return"<option value='"+e+"'>"+t+"</option>"}function l(e,t,i){return"<select class='"+e+"'"+(i?" style='display:none;'":"")+">"+t+"</select>"}function d(t,i){var n=e.find("tr.sf td.data "+t);null!=n[0]&&i(n)}function r(t,i){var n=e.find("tr.sf td.data "+t);null!=n[0]&&jQuery.each(i,function(){null!=this.data?n.bind(this.type,this.data,this.fn):n.bind(this.type,this.fn)})}if(this.$=e,this.add=function(t){return null==t?e.find(".ui-add-last").click():e.find(".sf:eq("+t+") .ui-add").click(),this},this.del=function(t){return null==t?e.find(".sf:last .ui-del").click():e.find(".sf:eq("+t+") .ui-del").click(),this},this.search=function(){return e.find(".ui-search").click(),this},this.reset=function(t){return void 0===t&&(t=!1),e.find(".ui-reset").trigger("click",[t]),this},this.close=function(){return e.find(".ui-closer").click(),this},null!=t){var c=jQuery.extend({},jQuery.fn.searchFilter.defaults,i),o=-1,u="";jQuery.each(c.groupOps,function(){u+=a(this.op,this.text)}),u="<select name='groupOp'>"+u+"</select>",e.html("").addClass("ui-searchFilter").append("<div class='ui-widget-overlay' style='z-index: -1'>&#160;</div><table class='ui-widget-content ui-corner-all'><thead><tr><td colspan='5' class='ui-widget-header ui-corner-all' style='line-height: 18px;'><div class='ui-closer ui-state-default ui-corner-all ui-helper-clearfix' style='float: right;'><span class='ui-icon ui-icon-close'></span></div>"+c.windowTitle+"</td></tr></thead><tbody><tr class='sf'><td class='fields'></td><td class='ops'></td><td class='data'></td><td><div class='ui-del ui-state-default ui-corner-all'><span class='ui-icon ui-icon-minus'></span></div></td><td><div class='ui-add ui-state-default ui-corner-all'><span class='ui-icon ui-icon-plus'></span></div></td></tr><tr><td colspan='5' class='divider'><hr class='ui-widget-content' style='margin:1px'/></td></tr></tbody><tfoot><tr><td colspan='3'><span class='ui-reset ui-state-default ui-corner-all' style='display: inline-block; float: left;'><span class='ui-icon ui-icon-arrowreturnthick-1-w' style='float: left;'></span><span style='line-height: 18px; padding: 0 7px 0 3px;'>"+c.resetText+"</span></span><span class='ui-search ui-state-default ui-corner-all' style='display: inline-block; float: right;'><span class='ui-icon ui-icon-search' style='float: left;'></span><span style='line-height: 18px; padding: 0 7px 0 3px;'>"+c.searchText+"</span></span><span class='matchText'>"+c.matchText+"</span> "+u+" <span class='rulesText'>"+c.rulesText+"</span></td><td>&#160;</td><td><div class='ui-add-last ui-state-default ui-corner-all'><span class='ui-icon ui-icon-plusthick'></span></div></td></tr></tfoot></table>");var f=e.find("tr.sf"),p=f.find("td.fields"),h=f.find("td.ops"),v=f.find("td.data"),x="";jQuery.each(c.operators,function(){x+=a(this.op,this.text)}),x=l("default",x,!0),h.append(x);var g="<input type='text' class='default' style='display:none;' />";v.append(g);var y="",j=!1,m=!1;jQuery.each(t,function(t){var i=t;if(y+=a(this.itemval,this.text),null!=this.ops){j=!0;var n="";jQuery.each(this.ops,function(){n+=a(this.op,this.text)}),n=l("field"+i,n,!0),h.append(n)}if(null!=this.dataUrl){t>o&&(o=t),m=!0;var s=this.dataEvents,u=this.dataInit,f=this.buildSelect;jQuery.ajax(jQuery.extend({url:this.dataUrl,complete:function(n){var a;a=null!=f?jQuery("<div />").append(f(n)):jQuery("<div />").append(n.responseText),a.find("select").addClass("field"+i).hide(),v.append(a.html()),u&&d(".field"+t,u),s&&r(".field"+t,s),t==o&&e.find("tr.sf td.fields select[name='field']").change()}},c.ajaxSelectOptions))}else if(null!=this.dataValues){m=!0;var p="";jQuery.each(this.dataValues,function(){p+=a(this.value,this.text)}),p=l("field"+i,p,!0),v.append(p)}else if(null!=this.dataEvents||null!=this.dataInit){m=!0;var p="<input type='text' class='field"+i+"' />";v.append(p)}null!=this.dataInit&&t!=o&&d(".field"+t,this.dataInit),null!=this.dataEvents&&t!=o&&r(".field"+t,this.dataEvents)}),y="<select name='field'>"+y+"</select>",p.append(y);var k=p.find("select[name='field']");j?k.change(function(e){var t=e.target.selectedIndex,i=jQuery(e.target).parents("tr.sf").find("td.ops");i.find("select").removeAttr("name").hide();var n=i.find(".field"+t);return null==n[0]&&(n=i.find(".default")),n.attr("name","op").show(),!1}):h.find(".default").attr("name","op").show(),m?k.change(function(e){var t=e.target.selectedIndex,i=jQuery(e.target).parents("tr.sf").find("td.data");i.find("select,input").removeClass("vdata").hide();var n=i.find(".field"+t);return null==n[0]&&(n=i.find(".default")),n.show().addClass("vdata"),!1}):v.find(".default").show().addClass("vdata"),(j||m)&&k.change(),e.find(".ui-state-default").hover(n,n).mousedown(s).mouseup(s),e.find(".ui-closer").click(function(){return c.onClose(jQuery(e.selector)),!1}),e.find(".ui-del").click(function(e){var t=jQuery(e.target).parents(".sf");return t.siblings(".sf").length>0?(c.datepickerFix===!0&&void 0!==jQuery.fn.datepicker&&t.find(".hasDatepicker").datepicker("destroy"),t.remove()):(t.find("select[name='field']")[0].selectedIndex=0,t.find("select[name='op']")[0].selectedIndex=0,t.find(".data input").val(""),t.find(".data select").each(function(){this.selectedIndex=0}),t.find("select[name='field']").change(function(e){e.stopPropagation()})),!1}),e.find(".ui-add").click(function(e){var t=jQuery(e.target).parents(".sf"),i=t.clone(!0).insertAfter(t);if(i.find(".ui-state-default").removeClass("ui-state-hover ui-state-active"),c.clone){i.find("select[name='field']")[0].selectedIndex=t.find("select[name='field']")[0].selectedIndex;var n=null==i.find("select[name='op']")[0];n||(i.find("select[name='op']").focus()[0].selectedIndex=t.find("select[name='op']")[0].selectedIndex);var s=i.find("select.vdata");null!=s[0]&&(s[0].selectedIndex=t.find("select.vdata")[0].selectedIndex)}else i.find(".data input").val(""),i.find("select[name='field']").focus();return c.datepickerFix===!0&&void 0!==jQuery.fn.datepicker&&t.find(".hasDatepicker").each(function(){var e=jQuery.data(this,"datepicker").settings;i.find("#"+this.id).unbind().removeAttr("id").removeClass("hasDatepicker").datepicker(e)}),i.find("select[name='field']").change(function(e){e.stopPropagation()}),!1}),e.find(".ui-search").click(function(){var t,i=jQuery(e.selector),n=i.find("select[name='groupOp'] :selected").val();return t=c.stringResult?'{"groupOp":"'+n+'","rules":[':{groupOp:n,rules:[]},i.find(".sf").each(function(e){var i=jQuery(this).find("select[name='field'] :selected").val(),n=jQuery(this).find("select[name='op'] :selected").val(),s=jQuery(this).find("input.vdata,select.vdata :selected").val();s+="",c.stringResult?(s=s.replace(/\\/g,"\\\\").replace(/\"/g,'\\"'),e>0&&(t+=","),t+='{"field":"'+i+'",',t+='"op":"'+n+'",',t+='"data":"'+s+'"}'):t.rules.push({field:i,op:n,data:s})}),c.stringResult&&(t+="]}"),c.onSearch(t),!1}),e.find(".ui-reset").click(function(t,i){var n=jQuery(e.selector);return n.find(".ui-del").click(),n.find("select[name='groupOp']")[0].selectedIndex=0,c.onReset(i),!1}),e.find(".ui-add-last").click(function(){var t=jQuery(e.selector+" .sf:last"),i=t.clone(!0).insertAfter(t);return i.find(".ui-state-default").removeClass("ui-state-hover ui-state-active"),i.find(".data input").val(""),i.find("select[name='field']").focus(),c.datepickerFix===!0&&void 0!==jQuery.fn.datepicker&&t.find(".hasDatepicker").each(function(){var e=jQuery.data(this,"datepicker").settings;i.find("#"+this.id).unbind().removeAttr("id").removeClass("hasDatepicker").datepicker(e)}),i.find("select[name='field']").change(function(e){e.stopPropagation()}),!1}),this.setGroupOp=function(t){selDOMobj=e.find("select[name='groupOp']")[0];var i,n={},s=selDOMobj.options.length;for(i=0;s>i;i++)n[selDOMobj.options[i].value]=i;selDOMobj.selectedIndex=n[t],jQuery(selDOMobj).change(function(e){e.stopPropagation()})},this.setFilter=function(e){var t,n,s,a,l,d=e.sfref,r=e.filter,c=[],o={};for(selDOMobj=d.find("select[name='field']")[0],t=0,s=selDOMobj.options.length;s>t;t++)o[selDOMobj.options[t].value]={index:t,ops:{}},c.push(selDOMobj.options[t].value);for(t=0,l=c.length;l>t;t++){if(selDOMobj=d.find(".ops > select[class='field"+t+"']")[0])for(n=0,a=selDOMobj.options.length;a>n;n++)o[c[t]].ops[selDOMobj.options[n].value]=n;if(selDOMobj=d.find(".data > select[class='field"+t+"']")[0])for(o[c[t]].data={},n=0,a=selDOMobj.options.length;a>n;n++)o[c[t]].data[selDOMobj.options[n].value]=n}var u,f,p,h,v;if(u=r.field,o[u]&&(f=o[u].index),null!=f){if(p=o[u].ops[r.op],void 0===p)for(t=0,l=i.operators.length;l>t;t++)if(i.operators[t].op==r.op){p=t;break}h=r.data,v=null==o[u].data?-1:o[u].data[h]}return null!=f&&null!=p&&null!=v?(d.find("select[name='field']")[0].selectedIndex=f,d.find("select[name='field']").change(),d.find("select[name='op']")[0].selectedIndex=p,d.find("input.vdata").val(h),d=d.find("select.vdata")[0],d&&(d.selectedIndex=v),!0):!1}}}return new i(this,e,t)},jQuery.fn.searchFilter.version="1.2.9",jQuery.fn.searchFilter.defaults={clone:!0,datepickerFix:!0,onReset:function(e){alert("Reset Clicked. Data Returned: "+e)},onSearch:function(e){alert("Search Clicked. Data Returned: "+e)},onClose:function(e){e.hide()},groupOps:[{op:"AND",text:"all"},{op:"OR",text:"any"}],operators:[{op:"eq",text:"is equal to"},{op:"ne",text:"is not equal to"},{op:"lt",text:"is less than"},{op:"le",text:"is less or equal to"},{op:"gt",text:"is greater than"},{op:"ge",text:"is greater or equal to"},{op:"in",text:"is in"},{op:"ni",text:"is not in"},{op:"bw",text:"begins with"},{op:"bn",text:"does not begin with"},{op:"ew",text:"ends with"},{op:"en",text:"does not end with"},{op:"cn",text:"contains"},{op:"nc",text:"does not contain"}],matchText:"match",rulesText:"rules",resetText:"Reset",searchText:"Search",stringResult:!0,windowTitle:"Search Rules",ajaxSelectOptions:{}};