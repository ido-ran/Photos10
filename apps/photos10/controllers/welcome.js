// ==========================================================================
// Project:   Photos10.weclomeController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Photos10 */

/** @class

  (Document Your Controller Here)

  @extends SC.Controller
*/
Photos10.welcomeController = SC.Controller.create(
/** @scope Photos10.welcomeController.prototype */ {

  initialize: function() {
	  var q = SC.Query.create({
			recordType: Photos10.Album,
			orderBy: 'lastModified DESC'
		});
		var recentlyChangedAlbums = Photos10.store.find(q);
		Photos10.welcomeAlbumsController.set('content', recentlyChangedAlbums);
	}

}) ;
