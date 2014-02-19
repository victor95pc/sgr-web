!function(t){t.jqplot.CanvasAxisTickRenderer=function(e){this.mark="outside",this.showMark=!0,this.showGridline=!0,this.isMinorTick=!1,this.angle=0,this.markSize=4,this.show=!0,this.showLabel=!0,this.labelPosition="auto",this.label="",this.value=null,this._styles={},this.formatter=t.jqplot.DefaultTickFormatter,this.formatString="",this.prefix="",this.fontFamily='"Trebuchet MS", Arial, Helvetica, sans-serif',this.fontSize="10pt",this.fontWeight="normal",this.fontStretch=1,this.textColor="#666666",this.enableFontSupport=!0,this.pt2px=null,this._elem,this._ctx,this._plotWidth,this._plotHeight,this._plotDimensions={height:null,width:null},t.extend(!0,this,e);var i={fontSize:this.fontSize,fontWeight:this.fontWeight,fontStretch:this.fontStretch,fillStyle:this.textColor,angle:this.getAngleRad(),fontFamily:this.fontFamily};this.pt2px&&(i.pt2px=this.pt2px),this._textRenderer=this.enableFontSupport?t.jqplot.support_canvas_text()?new t.jqplot.CanvasFontRenderer(i):new t.jqplot.CanvasTextRenderer(i):new t.jqplot.CanvasTextRenderer(i)},t.jqplot.CanvasAxisTickRenderer.prototype.init=function(e){t.extend(!0,this,e),this._textRenderer.init({fontSize:this.fontSize,fontWeight:this.fontWeight,fontStretch:this.fontStretch,fillStyle:this.textColor,angle:this.getAngleRad(),fontFamily:this.fontFamily})},t.jqplot.CanvasAxisTickRenderer.prototype.getWidth=function(t){if(this._elem)return this._elem.outerWidth(!0);var e=this._textRenderer,i=e.getWidth(t),s=e.getHeight(t),n=Math.abs(Math.sin(e.angle)*s)+Math.abs(Math.cos(e.angle)*i);return n},t.jqplot.CanvasAxisTickRenderer.prototype.getHeight=function(t){if(this._elem)return this._elem.outerHeight(!0);var e=this._textRenderer,i=e.getWidth(t),s=e.getHeight(t),n=Math.abs(Math.cos(e.angle)*s)+Math.abs(Math.sin(e.angle)*i);return n},t.jqplot.CanvasAxisTickRenderer.prototype.getTop=function(){return this._elem?this._elem.position().top:null},t.jqplot.CanvasAxisTickRenderer.prototype.getAngleRad=function(){var t=this.angle*Math.PI/180;return t},t.jqplot.CanvasAxisTickRenderer.prototype.setTick=function(t,e,i){return this.value=t,i&&(this.isMinorTick=!0),this},t.jqplot.CanvasAxisTickRenderer.prototype.draw=function(e,i){this.label||(this.label=this.prefix+this.formatter(this.formatString,this.value)),this._elem&&(t.jqplot.use_excanvas&&void 0!==window.G_vmlCanvasManager.uninitElement&&window.G_vmlCanvasManager.uninitElement(this._elem.get(0)),this._elem.emptyForce(),this._elem=null);var s=i.canvasManager.getCanvas();this._textRenderer.setText(this.label,e);var n=this.getWidth(e),h=this.getHeight(e);return s.width=n,s.height=h,s.style.width=n,s.style.height=h,s.style.textAlign="left",s.style.position="absolute",s=i.canvasManager.initCanvas(s),this._elem=t(s),this._elem.css(this._styles),this._elem.addClass("jqplot-"+this.axis+"-tick"),s=null,this._elem},t.jqplot.CanvasAxisTickRenderer.prototype.pack=function(){this._textRenderer.draw(this._elem.get(0).getContext("2d"),this.label)}}(jQuery);