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
			context.push('<canvas></canvas>');
		}
	},

	didCreateLayer: function() {
		this._drawImage();
	},
	
	_drawImage: function() {
		var canvas = this.$('canvas')[0];
		var ctx = canvas.getContext('2d');
		
    var img = new Image();  
		var clipFrame = this.get('clippingFrame');

    img.onload = function(){
			var h, w;
			var origRatio = this.width / this.height;
			if (this.width > this.height) {
				w = clipFrame.width;
				h = clipFrame.width * origRatio;
			} else {
				w = clipFrame.height * origRatio;
				h = clipFrame.height;
			}
      ctx.drawImage(img,0,0,w,h);
    }  
    img.src = this.get('value'); 
	}

});
