!function(t){"use strict";t.fn.jqFilter=function(e){if("string"==typeof e){var r=t.fn.jqFilter[e];if(!r)throw"jqFilter - No such method: "+e;var s=t.makeArray(arguments).slice(1);return r.apply(this,s)}var n=t.extend(!0,{filter:null,columns:[],onChange:null,afterRedraw:null,checkValues:null,error:!1,errmsg:"",errorcheck:!0,showQuery:!0,sopt:null,ops:[],operands:null,numopts:["eq","ne","lt","le","gt","ge","nu","nn","in","ni"],stropts:["eq","ne","bw","bn","ew","en","cn","nc","nu","nn","in","ni"],strarr:["text","string","blob"],groupOps:[{op:"AND",text:"AND"},{op:"OR",text:"OR"}],groupButton:!0,ruleButtons:!0,direction:"ltr"},t.jgrid.filter,e||{});return this.each(function(){if(!this.filter){this.p=n,(null===this.p.filter||void 0===this.p.filter)&&(this.p.filter={groupOp:this.p.groupOps[0].op,rules:[],groups:[]});var e,r,s=this.p.columns.length,i=/msie/i.test(navigator.userAgent)&&!window.opera;if(this.p.initFilter=t.extend(!0,{},this.p.filter),s){for(e=0;s>e;e++)r=this.p.columns[e],r.stype?r.inputtype=r.stype:r.inputtype||(r.inputtype="text"),r.sorttype?r.searchtype=r.sorttype:r.searchtype||(r.searchtype="string"),void 0===r.hidden&&(r.hidden=!1),r.label||(r.label=r.name),r.index&&(r.name=r.index),r.hasOwnProperty("searchoptions")||(r.searchoptions={}),r.hasOwnProperty("searchrules")||(r.searchrules={});this.p.showQuery&&t(this).append("<table class='queryresult ui-widget ui-widget-content' style='display:block;max-width:440px;border:0px none;' dir='"+this.p.direction+"'><tbody><tr><td class='query'></td></tr></tbody></table>");var o=function(){return t("#"+t.jgrid.jqID(n.id))[0]||null},p=function(e,r){var s=[!0,""],i=o();if(t.isFunction(r.searchrules))s=r.searchrules.call(i,e,r);else if(t.jgrid&&t.jgrid.checkValues)try{s=t.jgrid.checkValues.call(i,e,-1,r.searchrules,r.label)}catch(p){}s&&s.length&&s[0]===!1&&(n.error=!s[0],n.errmsg=s[1])};this.onchange=function(){return this.p.error=!1,this.p.errmsg="",t.isFunction(this.p.onChange)?this.p.onChange.call(this,this.p):!1},this.reDraw=function(){t("table.group:first",this).remove();var e=this.createTableForGroup(n.filter,null);t(this).append(e),t.isFunction(this.p.afterRedraw)&&this.p.afterRedraw.call(this,this.p)},this.createTableForGroup=function(e,r){var s,i=this,o=t("<table class='group ui-widget ui-widget-content' style='border:0px none;'><tbody></tbody></table>"),p="left";"rtl"===this.p.direction&&(p="right",o.attr("dir","rtl")),null===r&&o.append("<tr class='error' style='display:none;'><th colspan='5' class='ui-state-error' align='"+p+"'></th></tr>");var a=t("<tr></tr>");o.append(a);var l=t("<th colspan='5' align='"+p+"'></th>");if(a.append(l),this.p.ruleButtons===!0){var u=t("<select class='opsel'></select>");l.append(u);var c,h="";for(s=0;s<n.groupOps.length;s++)c=e.groupOp===i.p.groupOps[s].op?" selected='selected'":"",h+="<option value='"+i.p.groupOps[s].op+"'"+c+">"+i.p.groupOps[s].text+"</option>";u.append(h).bind("change",function(){e.groupOp=t(u).val(),i.onchange()})}var d="<span></span>";if(this.p.groupButton&&(d=t("<input type='button' value='+ {}' title='Add subgroup' class='add-group'/>"),d.bind("click",function(){return void 0===e.groups&&(e.groups=[]),e.groups.push({groupOp:n.groupOps[0].op,rules:[],groups:[]}),i.reDraw(),i.onchange(),!1})),l.append(d),this.p.ruleButtons===!0){var g,f=t("<input type='button' value='+' title='Add rule' class='add-rule ui-add'/>");f.bind("click",function(){for(void 0===e.rules&&(e.rules=[]),s=0;s<i.p.columns.length;s++){var r=void 0===i.p.columns[s].search?!0:i.p.columns[s].search,n=i.p.columns[s].hidden===!0,o=i.p.columns[s].searchoptions.searchhidden===!0;if(o&&r||r&&!n){g=i.p.columns[s];break}}var p;return p=g.searchoptions.sopt?g.searchoptions.sopt:i.p.sopt?i.p.sopt:-1!==t.inArray(g.searchtype,i.p.strarr)?i.p.stropts:i.p.numopts,e.rules.push({field:g.name,op:p[0],data:""}),i.reDraw(),!1}),l.append(f)}if(null!==r){var v=t("<input type='button' value='-' title='Delete group' class='delete-group'/>");l.append(v),v.bind("click",function(){for(s=0;s<r.groups.length;s++)if(r.groups[s]===e){r.groups.splice(s,1);break}return i.reDraw(),i.onchange(),!1})}if(void 0!==e.groups)for(s=0;s<e.groups.length;s++){var m=t("<tr></tr>");o.append(m);var y=t("<td class='first'></td>");m.append(y);var b=t("<td colspan='4'></td>");b.append(this.createTableForGroup(e.groups[s],e)),m.append(b)}if(void 0===e.groupOp&&(e.groupOp=i.p.groupOps[0].op),void 0!==e.rules)for(s=0;s<e.rules.length;s++)o.append(this.createTableRowForRule(e.rules[s],e));return o},this.createTableRowForRule=function(e,r){var s,p,a,l,u,c=this,h=o(),d=t("<tr></tr>"),g="";d.append("<td class='first'></td>");var f=t("<td class='columns'></td>");d.append(f);var v,m=t("<select></select>"),y=[];f.append(m),m.bind("change",function(){for(e.field=t(m).val(),a=t(this).parents("tr:first"),s=0;s<c.p.columns.length;s++)if(c.p.columns[s].name===e.field){l=c.p.columns[s];break}if(l){l.searchoptions.id=t.jgrid.randId(),i&&"text"===l.inputtype&&(l.searchoptions.size||(l.searchoptions.size=10));var r=t.jgrid.createEl.call(h,l.inputtype,l.searchoptions,"",!0,c.p.ajaxSelectOptions,!0);t(r).addClass("input-elm"),p=l.searchoptions.sopt?l.searchoptions.sopt:c.p.sopt?c.p.sopt:-1!==t.inArray(l.searchtype,c.p.strarr)?c.p.stropts:c.p.numopts;var n="",o=0;for(y=[],t.each(c.p.ops,function(){y.push(this.oper)}),s=0;s<p.length;s++)v=t.inArray(p[s],y),-1!==v&&(0===o&&(e.op=c.p.ops[v].oper),n+="<option value='"+c.p.ops[v].oper+"'>"+c.p.ops[v].text+"</option>",o++);if(t(".selectopts",a).empty().append(n),t(".selectopts",a)[0].selectedIndex=0,t.jgrid.msie&&t.jgrid.msiever()<9){var u=parseInt(t("select.selectopts",a)[0].offsetWidth,10)+1;t(".selectopts",a).width(u),t(".selectopts",a).css("width","auto")}t(".data",a).empty().append(r),t.jgrid.bindEv.call(h,r,l.searchoptions),t(".input-elm",a).bind("change",function(r){var s=t(this).hasClass("ui-autocomplete-input")?200:0;setTimeout(function(){var s=r.target;e.data="SPAN"===s.nodeName.toUpperCase()&&l.searchoptions&&t.isFunction(l.searchoptions.custom_value)?l.searchoptions.custom_value.call(h,t(s).children(".customelement:first"),"get"):s.value,c.onchange()},s)}),setTimeout(function(){e.data=t(r).val(),c.onchange()},0)}});var b=0;for(s=0;s<c.p.columns.length;s++){var w=void 0===c.p.columns[s].search?!0:c.p.columns[s].search,O=c.p.columns[s].hidden===!0,F=c.p.columns[s].searchoptions.searchhidden===!0;(F&&w||w&&!O)&&(u="",e.field===c.p.columns[s].name&&(u=" selected='selected'",b=s),g+="<option value='"+c.p.columns[s].name+"'"+u+">"+c.p.columns[s].label+"</option>")}m.append(g);var j=t("<td class='operators'></td>");d.append(j),l=n.columns[b],l.searchoptions.id=t.jgrid.randId(),i&&"text"===l.inputtype&&(l.searchoptions.size||(l.searchoptions.size=10));var x=t.jgrid.createEl.call(h,l.inputtype,l.searchoptions,e.data,!0,c.p.ajaxSelectOptions,!0);("nu"===e.op||"nn"===e.op)&&(t(x).attr("readonly","true"),t(x).attr("disabled","true"));var k=t("<select class='selectopts'></select>");for(j.append(k),k.bind("change",function(){e.op=t(k).val(),a=t(this).parents("tr:first");var r=t(".input-elm",a)[0];"nu"===e.op||"nn"===e.op?(e.data="",r.value="",r.setAttribute("readonly","true"),r.setAttribute("disabled","true")):(r.removeAttribute("readonly"),r.removeAttribute("disabled")),c.onchange()}),p=l.searchoptions.sopt?l.searchoptions.sopt:c.p.sopt?c.p.sopt:-1!==t.inArray(l.searchtype,c.p.strarr)?c.p.stropts:c.p.numopts,g="",t.each(c.p.ops,function(){y.push(this.oper)}),s=0;s<p.length;s++)v=t.inArray(p[s],y),-1!==v&&(u=e.op===c.p.ops[v].oper?" selected='selected'":"",g+="<option value='"+c.p.ops[v].oper+"'"+u+">"+c.p.ops[v].text+"</option>");k.append(g);var A=t("<td class='data'></td>");d.append(A),A.append(x),t.jgrid.bindEv.call(h,x,l.searchoptions),t(x).addClass("input-elm").bind("change",function(){e.data="custom"===l.inputtype?l.searchoptions.custom_value.call(h,t(this).children(".customelement:first"),"get"):t(this).val(),c.onchange()});var D=t("<td></td>");if(d.append(D),this.p.ruleButtons===!0){var R=t("<input type='button' value='-' title='Delete rule' class='delete-rule ui-del'/>");D.append(R),R.bind("click",function(){for(s=0;s<r.rules.length;s++)if(r.rules[s]===e){r.rules.splice(s,1);break}return c.reDraw(),c.onchange(),!1})}return d},this.getStringForGroup=function(t){var e,r="(";if(void 0!==t.groups)for(e=0;e<t.groups.length;e++){r.length>1&&(r+=" "+t.groupOp+" ");try{r+=this.getStringForGroup(t.groups[e])}catch(s){alert(s)}}if(void 0!==t.rules)try{for(e=0;e<t.rules.length;e++)r.length>1&&(r+=" "+t.groupOp+" "),r+=this.getStringForRule(t.rules[e])}catch(n){alert(n)}return r+=")","()"===r?"":r},this.getStringForRule=function(e){var r,s,i,o,a="",l="",u=["int","integer","float","number","currency"];for(r=0;r<this.p.ops.length;r++)if(this.p.ops[r].oper===e.op){a=this.p.operands.hasOwnProperty(e.op)?this.p.operands[e.op]:"",l=this.p.ops[r].oper;break}for(r=0;r<this.p.columns.length;r++)if(this.p.columns[r].name===e.field){s=this.p.columns[r];break}return void 0===s?"":(o=e.data,("bw"===l||"bn"===l)&&(o+="%"),("ew"===l||"en"===l)&&(o="%"+o),("cn"===l||"nc"===l)&&(o="%"+o+"%"),("in"===l||"ni"===l)&&(o=" ("+o+")"),n.errorcheck&&p(e.data,s),i=-1!==t.inArray(s.searchtype,u)||"nn"===l||"nu"===l?e.field+" "+a+" "+o:e.field+" "+a+' "'+o+'"')},this.resetFilter=function(){this.p.filter=t.extend(!0,{},this.p.initFilter),this.reDraw(),this.onchange()},this.hideError=function(){t("th.ui-state-error",this).html(""),t("tr.error",this).hide()},this.showError=function(){t("th.ui-state-error",this).html(this.p.errmsg),t("tr.error",this).show()},this.toUserFriendlyString=function(){return this.getStringForGroup(n.filter)},this.toString=function(){function t(t){if(r.p.errorcheck){var e,s;for(e=0;e<r.p.columns.length;e++)if(r.p.columns[e].name===t.field){s=r.p.columns[e];break}s&&p(t.data,s)}return t.op+"(item."+t.field+",'"+t.data+"')"}function e(r){var s,n="(";if(void 0!==r.groups)for(s=0;s<r.groups.length;s++)n.length>1&&(n+="OR"===r.groupOp?" || ":" && "),n+=e(r.groups[s]);if(void 0!==r.rules)for(s=0;s<r.rules.length;s++)n.length>1&&(n+="OR"===r.groupOp?" || ":" && "),n+=t(r.rules[s]);return n+=")","()"===n?"":n}var r=this;return e(this.p.filter)},this.reDraw(),this.p.showQuery&&this.onchange(),this.filter=!0}}})},t.extend(t.fn.jqFilter,{toSQLString:function(){var t="";return this.each(function(){t=this.toUserFriendlyString()}),t},filterData:function(){var t;return this.each(function(){t=this.p.filter}),t},getParameter:function(t){return void 0!==t&&this.p.hasOwnProperty(t)?this.p[t]:this.p},resetFilter:function(){return this.each(function(){this.resetFilter()})},addFilter:function(e){"string"==typeof e&&(e=t.jgrid.parse(e)),this.each(function(){this.p.filter=e,this.reDraw(),this.onchange()})}})}(jQuery);