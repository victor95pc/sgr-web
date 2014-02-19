!function(r){"use strict";r.extend(r.jgrid,{template:function(i){var t,s=r.makeArray(arguments).slice(1),o=s.length;return null==i&&(i=""),i.replace(/\{([\w\-]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?\}/g,function(i,e){if(!isNaN(parseInt(e,10)))return s[parseInt(e,10)];for(t=0;o>t;t++)if(r.isArray(s[t]))for(var n=s[t],u=n.length;u--;)if(e===n[u].nm)return n[u].v})}}),r.jgrid.extend({groupingSetup:function(){return this.each(function(){var i,t,s,o=this,e=o.p.colModel,n=o.p.groupingView;if(null===n||"object"!=typeof n&&!r.isFunction(n))o.p.grouping=!1;else if(n.groupField.length){for(void 0===n.visibiltyOnNextGrouping&&(n.visibiltyOnNextGrouping=[]),n.lastvalues=[],n.groups=[],n.counters=[],i=0;i<n.groupField.length;i++)n.groupOrder[i]||(n.groupOrder[i]="asc"),n.groupText[i]||(n.groupText[i]="{0}"),"boolean"!=typeof n.groupColumnShow[i]&&(n.groupColumnShow[i]=!0),"boolean"!=typeof n.groupSummary[i]&&(n.groupSummary[i]=!1),n.groupColumnShow[i]===!0?(n.visibiltyOnNextGrouping[i]=!0,r(o).jqGrid("showCol",n.groupField[i])):(n.visibiltyOnNextGrouping[i]=r("#"+r.jgrid.jqID(o.p.id+"_"+n.groupField[i])).is(":visible"),r(o).jqGrid("hideCol",n.groupField[i]));for(n.summary=[],t=0,s=e.length;s>t;t++)e[t].summaryType&&n.summary.push({nm:e[t].name,st:e[t].summaryType,v:"",sr:e[t].summaryRound,srt:e[t].summaryRoundType||"round"})}else o.p.grouping=!1})},groupingPrepare:function(i,t,s,o){return this.each(function(){var e,n,u,a,l,p=this.p.groupingView,g=this,d=p.groupField.length,h=0;for(e=0;d>e;e++)n=p.groupField[e],a=p.displayField[e],u=s[n],l=null==a?null:s[a],null==l&&(l=u),void 0!==u&&(0===o?(p.groups.push({idx:e,dataIndex:n,value:u,displayValue:l,startRow:o,cnt:1,summary:[]}),p.lastvalues[e]=u,p.counters[e]={cnt:1,pos:p.groups.length-1,summary:r.extend(!0,[],p.summary)},r.each(p.counters[e].summary,function(){this.v=r.isFunction(this.st)?this.st.call(g,this.v,this.nm,s):r(g).jqGrid("groupingCalculations.handler",this.st,this.v,this.nm,this.sr,this.srt,s)}),p.groups[p.counters[e].pos].summary=p.counters[e].summary):"object"==typeof u||(r.isArray(p.isInTheSameGroup)&&r.isFunction(p.isInTheSameGroup[e])?p.isInTheSameGroup[e].call(g,p.lastvalues[e],u,e,p):p.lastvalues[e]===u)?1===h?(p.groups.push({idx:e,dataIndex:n,value:u,displayValue:l,startRow:o,cnt:1,summary:[]}),p.lastvalues[e]=u,p.counters[e]={cnt:1,pos:p.groups.length-1,summary:r.extend(!0,[],p.summary)},r.each(p.counters[e].summary,function(){this.v=r.isFunction(this.st)?this.st.call(g,this.v,this.nm,s):r(g).jqGrid("groupingCalculations.handler",this.st,this.v,this.nm,this.sr,this.srt,s)}),p.groups[p.counters[e].pos].summary=p.counters[e].summary):(p.counters[e].cnt+=1,p.groups[p.counters[e].pos].cnt=p.counters[e].cnt,r.each(p.counters[e].summary,function(){this.v=r.isFunction(this.st)?this.st.call(g,this.v,this.nm,s):r(g).jqGrid("groupingCalculations.handler",this.st,this.v,this.nm,this.sr,this.srt,s)}),p.groups[p.counters[e].pos].summary=p.counters[e].summary):(p.groups.push({idx:e,dataIndex:n,value:u,displayValue:l,startRow:o,cnt:1,summary:[]}),p.lastvalues[e]=u,h=1,p.counters[e]={cnt:1,pos:p.groups.length-1,summary:r.extend(!0,[],p.summary)},r.each(p.counters[e].summary,function(){this.v=r.isFunction(this.st)?this.st.call(g,this.v,this.nm,s):r(g).jqGrid("groupingCalculations.handler",this.st,this.v,this.nm,this.sr,this.srt,s)}),p.groups[p.counters[e].pos].summary=p.counters[e].summary));t.push(i)}),t},groupingToggle:function(i){return this.each(function(){var t,s=this,o=s.p.groupingView,e=i.split("_"),n=parseInt(e[e.length-2],10);e.splice(e.length-2,2);var u,a=e.join("_"),l=o.minusicon,p=o.plusicon,g=r("#"+r.jgrid.jqID(i)),d=g.length?g[0].nextSibling:null,h=r("#"+r.jgrid.jqID(i)+" span.tree-wrap-"+s.p.direction),c=!1;if(h.hasClass(l)){if(o.showSummaryOnHide){if(d)for(;d;){if(r(d).hasClass("jqfoot")){var m=parseInt(r(d).attr("jqfootlevel"),10);if(n>=m)break}r(d).hide(),d=d.nextSibling}}else if(d)for(;d&&(t=d.className.indexOf(a),!(-1!==t&&parseInt(d.className.substring(t+a.length+1),10)<=n));)r(d).hide(),d=d.nextSibling;h.removeClass(l).addClass(p),c=!0}else{if(d)for(;d&&(t=d.className.indexOf(a),!(-1!==t&&parseInt(d.className.substring(t+a.length+1),10)<=n));)r(d).show(),u=r(d).find("span.tree-wrap-"+s.p.direction),u&&r(u).hasClass(p)&&r(u).removeClass(p).addClass(l),d=d.nextSibling;h.removeClass(p).addClass(l)}r(s).triggerHandler("jqGridGroupingClickGroup",[i,c]),r.isFunction(s.p.onClickGroup)&&s.p.onClickGroup.call(s,i,c)}),!1},groupingRender:function(i,t){return this.each(function(){function s(r,i,t){var s,o=!1;if(0===i)o=t[r];else{var e=t[r].idx;if(0===e)o=t[r];else for(s=r;s>=0;s--)if(t[s].idx===e-i){o=t[s];break}}return o}var o,e,n,u=this,a=u.p.groupingView,l="",p="",g=a.groupCollapse?a.plusicon:a.minusicon,d=[],h=a.groupField.length;g+=" tree-wrap-"+u.p.direction,r.each(u.p.colModel,function(r,i){var t;for(t=0;h>t;t++)if(a.groupField[t]===i.name){d[t]=r;break}});var c=0,m=r.makeArray(a.groupSummary);m.reverse(),r.each(a.groups,function(f,v){c++,e=u.p.id+"ghead_"+v.idx,o=e+"_"+f,p="<span style='cursor:pointer;' class='ui-icon "+g+"' onclick=\"jQuery('#"+r.jgrid.jqID(u.p.id)+"').jqGrid('groupingToggle','"+o+"');return false;\"></span>";try{r.isArray(a.formatDisplayField)&&r.isFunction(a.formatDisplayField[v.idx])&&(v.displayValue=a.formatDisplayField[v.idx].call(u,v.displayValue,v.value,u.p.colModel[d[v.idx]],v.idx,a)),n=u.formatter(o,v.displayValue,d[v.idx],v.value)}catch(y){n=v.displayValue}l+='<tr id="'+o+'" role="row" class= "ui-widget-content jqgroup ui-row-'+u.p.direction+" "+e+'"><td style="padding-left:'+12*v.idx+'px;" colspan="'+t+'">'+p+r.jgrid.template(a.groupText[v.idx],n,v.cnt,v.summary)+"</td></tr>";var x=h-1===v.idx;if(x){var j,w,F,C=a.groups[f+1],G=void 0!==C?a.groups[f+1].startRow:i.length;for(w=v.startRow;G>w;w++)l+=i[w].join("");var q;if(void 0!==C){for(q=0;q<a.groupField.length&&C.dataIndex!==a.groupField[q];q++);c=a.groupField.length-q}for(F=0;c>F;F++)if(m[F]){var b="";a.groupCollapse&&!a.showSummaryOnHide&&(b=' style="display:none;"'),l+="<tr"+b+' jqfootlevel="'+(v.idx-F)+'" role="row" class="ui-widget-content jqfoot ui-row-'+u.p.direction+'">';var I,S=s(f,F,a.groups),N=u.p.colModel,O=S.cnt;for(j=0;t>j;j++){var V="<td "+u.formatCol(j,1,"")+">&#160;</td>",T="{0}";r.each(S.summary,function(){if(this.nm===N[j].name){N[j].summaryTpl&&(T=N[j].summaryTpl),"string"==typeof this.st&&"avg"===this.st.toLowerCase()&&this.v&&O>0&&(this.v=this.v/O);try{I=u.formatter("",this.v,j,this)}catch(i){I=this.v}return V="<td "+u.formatCol(j,1,"")+">"+r.jgrid.format(T,I)+"</td>",!1}}),l+=V}l+="</tr>"}c=q}}),r("#"+r.jgrid.jqID(u.p.id)+" tbody:first").append(l),l=null})},groupingGroupBy:function(i,t){return this.each(function(){var s=this;"string"==typeof i&&(i=[i]);var o=s.p.groupingView;s.p.grouping=!0,void 0===o.visibiltyOnNextGrouping&&(o.visibiltyOnNextGrouping=[]);var e;for(e=0;e<o.groupField.length;e++)!o.groupColumnShow[e]&&o.visibiltyOnNextGrouping[e]&&r(s).jqGrid("showCol",o.groupField[e]);for(e=0;e<i.length;e++)o.visibiltyOnNextGrouping[e]=r("#"+r.jgrid.jqID(s.p.id)+"_"+r.jgrid.jqID(i[e])).is(":visible");s.p.groupingView=r.extend(s.p.groupingView,t||{}),o.groupField=i,r(s).trigger("reloadGrid")})},groupingRemove:function(i){return this.each(function(){var t=this;if(void 0===i&&(i=!0),t.p.grouping=!1,i===!0){var s,o=t.p.groupingView;for(s=0;s<o.groupField.length;s++)!o.groupColumnShow[s]&&o.visibiltyOnNextGrouping[s]&&r(t).jqGrid("showCol",o.groupField);r("tr.jqgroup, tr.jqfoot","#"+r.jgrid.jqID(t.p.id)+" tbody:first").remove(),r("tr.jqgrow:hidden","#"+r.jgrid.jqID(t.p.id)+" tbody:first").show()}else r(t).trigger("reloadGrid")})},groupingCalculations:{handler:function(r,i,t,s,o,e){var n={sum:function(){return parseFloat(i||0)+parseFloat(e[t]||0)},min:function(){return""===i?parseFloat(e[t]||0):Math.min(parseFloat(i),parseFloat(e[t]||0))},max:function(){return""===i?parseFloat(e[t]||0):Math.max(parseFloat(i),parseFloat(e[t]||0))},count:function(){return""===i&&(i=0),e.hasOwnProperty(t)?i+1:0},avg:function(){return n.sum()}};if(!n[r])throw"jqGrid Grouping No such method: "+r;var u=n[r]();if(null!=s)if("fixed"===o)u=u.toFixed(s);else{var a=Math.pow(10,s);u=Math.round(u*a)/a}return u}}})}(jQuery);