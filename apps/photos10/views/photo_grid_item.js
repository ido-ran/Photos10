// ==========================================================================
// Project:   Photos10.PhotoGridItemView
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Photos10 */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Photos10.PhotoGridItemView = SC.ImageView.extend(
/** @scope Photos10.PhotoGridItemView.prototype */ {

  classNames: 'p10-grid-photo-item'.w(),
  layout: { top: 10, bottom: 10, left: 10, right: 10 },

  canLoadInBackground: YES,
  useImageCache: YES,

});
