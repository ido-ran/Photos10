// ==========================================================================
// Project:   Photos10.welcomeAlbumsController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Photos10 */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Photos10.welcomeAlbumsController = SC.ArrayController.create(
/** @scope Photos10.welcomeAlbumsController.prototype */ {

	allowsMultipleSelection: NO,
	
	_scac_observableContent: function() {
		var ret = sc_super();
		
		// This controller return only the 6 top albums.
		if (ret && ret.isSCArray) {
			ret = ret.slice(0, 6);
		}
		
		return ret;
	}

}) ;
