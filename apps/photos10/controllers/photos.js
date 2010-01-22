// ==========================================================================
// Project:   Photos10.photosController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Photos10 */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
Photos10.photosController = SC.ArrayController.create(
/** @scope Photos10.photosController.prototype */ {

  contentBinding: 'Photos10.albumController.photos',

  photoSize: 160,

  photoSizeBinding: 'Photos10.albumController.photoSize',

  photoSizeObserver: function() {
    if (this._photoSizeDidChangeTime && this._photoSizeDidChangeTime.get('isValid')) return;
    this._photoSizeDidChangeTimer = this.invokeLater('photoSizeDidChange');
  }, //.observes('photoSize'),

  photoSizeDidChange: function() {
    this_photoSizeDidChangeTimer = null;

    var photoSize = this.get('photoSize');
    var columnWidth = photoSize;
    var rowHeight = Math.floor((photoSize * 120) / 160); // ratio

    var view = Photos10.mainPage.getPath('mainPane.photosGrid');
    if (view && ((view.get('columnWidth') != columnWidth) ||
        (view.get('rowHeight') != rowHeight))) {
      view.beginPropertyChanges();
      view.set('rowHeight', rowHeight);
      view.set('columnWidth', columnWidth);
      view.endPropertyChanges();
    }
  }

}) ;
