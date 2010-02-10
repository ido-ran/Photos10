// ==========================================================================
// Project:   Photos10.Album
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Photos10 */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Photos10.Album = SC.Record.extend(
/** @scope Photos10.Album.prototype */ {

  name: SC.Record.attr(String),
	lastModified: SC.Record.attr(SC.DateTime, { format: '%Y-%m-%d' }),
  icon: 'sc-icon-folder-16',

  photos: SC.Record.toMany('Photos10.Photo',
           { inverse: 'album', isMaster: YES }),

  photosCount: function() {
    return this.get('photos').get('length');
  }.property('photos').cacheable(),

  showme: function() {
		return this.get('name') + ' - ' + this.get('lastModified');
	}.property()
}) ;
