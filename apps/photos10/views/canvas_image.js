// ==========================================================================
// Project:   Photos10.CanvasImageView
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Photos10 */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Photos10.CanvasImageView = SC.View.extend(
/** @scope Photos10.CanvasImageView.prototype */ {


	render: function(context, firstTime) {
		if (firstTime) {
			context.begin('canvas').end();
		}
	},

	didCreateLayer: function() {
		this._drawImage();
	},
	
	didUpdateLayer: function() {
		this._drawImage();
	},
	
	_drawImage: function() {
		var ctrl = this;
		
		if (this._img) {
			ctrl.internalDraw();
		} else {		
   		var img = new Image();  
    	img.onload = function(){
      	ctrl._img = this;
				ctrl._internalDraw();
      } 
    img.src = this.get('value');
		} 
	},
	
	_internalDraw: function() {

		var canvas = this.$('canvas')[0];
		var ctx = canvas.getContext('2d');

		var clipFrame = this.get('frame');
		canvas.width = clipFrame.width;
		canvas.height = clipFrame.height;

		ctx.fillStyle = 'rgb(255,0,0)';
		ctx.fillRect(0,0,canvas.width, canvas.height);
		
		var ow,oh,dw,dh,or,dr;
		var rw,rh;
		ow = this._img.width;
		oh = this._img.height;
		dw = ctx.canvas.width;
		dh = ctx.canvas.height;
		
		if (oh > ow) {
			or = oh / ow;
			dr = dh / dw;
			
			if (or > dr) {
				rh = dh;
				rw = dh / or;
			} else {
				rw = dw;
				rh = dw / (ow / oh);
			}
		} else {
			or = ow / oh;
			dr = dw / dh;
			
			if (or > dr) {
				rw = dw;
				rh = dw / or;
			} else {
				rh = dh;
				rw = dh / (oh / ow);
			}
		}
		
		ctx.drawImage(this._img,0,0, rw,rh);
	}

});
