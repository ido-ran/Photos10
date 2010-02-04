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

  imageUrl: '',
  imageTitle: '',

  contentImageUrlKey: 'url',
  contentImageTitleKey: 'title',

  classNames: 'p10-grid-photo-item'.w(),
  displayProperties: 'imageUrl, imageTitle'.w(),
  tagName: 'div',
  layout: { top: 10, bottom: 10, centerX: 0 },

  contentPropertyDidChange: function(target, key) {
    var ret = sc_super();
		this.updatePropertyFromContent('imageUrl', key, 'contentImageUrlKey');
		this.updatePropertyFromContent('imageTitle', key, 'contentImageTitleKey');
    return ret;
  },

  _pgiv_ImageUrlChanged: function() {
	  this._pgivImage.set('value', this.get('imageUrl'));
  }.observes('imageUrl'),

  _pgiv_ImageTitleChanged: function() {
	  this._pgivLabel.set('value', this.get('imageTitle'));
  }.observes('imageTitle'),

  createChildViews: function() {
    var childViews = [];
    var view;

    // Add ImageView
    view = this.createChildView(
	  Photos10.CanvasImageView.design({
		  layout: { left: 10, top: 10, right: 10, bottom: 10 },
		  classNames: 'p10-grid-photo-img'.w()
 	  }),
    { rootElementPath: [0]}
	);
	childViews.push(view);
	this._pgivImage = view;
	
	// Add LabelView
	view = this.createChildView(
	  SC.LabelView.design({
	    layout: { bottom: 4, height: 20, left: 4, right: 4},
			textAlign: SC.ALIGN_CENTER
	  }),
	  { rootElementPath: [1]}
	);
	childViews.push(view);
	this._pgivLabel = view;
	
	this.set('childViews', childViews);
  }

/*
  render: function(context, firstTime) {
	var imageUrl = this.get('imageUrl');
	var imageTitle = this.get('imageTitle');
	
	context = context.begin('img').addClass('p10-grid-photo-img');
	context.attr('src', imageUrl);
	context.attr('alt', imageTitle);
	context.end();
  }
*/
});
