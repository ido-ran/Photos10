// ==========================================================================
// Project:   Photos10.PhotoGridItemView
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Photos10 */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Photos10.PhotoGridItemView = SC.View.extend(SC.Control,
/** @scope Photos10.PhotoGridItemView.prototype */ {

  value: '',
  imageTitle: '',

  classNames: 'p10-grid-photo-item'.w(),
  displayProperties: 'imageUrl, imageTitle'.w(),
  tagName: 'div',
  layout: { top: 10, bottom: 10, left: 10, right: 10 },

  render: function(context, firstTime) {
	var value = this.get('value');
	var imageTitle = this.get('imageTitle');
	
	context = context.begin('img').addClass('p10-grid-photo-img');
	context.attr('src', value);
	context.end();
  }

});
