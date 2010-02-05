// ==========================================================================
// Project:   Photos10.helpController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Photos10 */

/** @class

  HelpController responsible for handling the help page.

  @extends SC.Object
*/
Photos10.helpController = SC.Controller.create(
/** @scope Photos10.helpController.prototype */ {

  showHelp: function() {		
		var helpPane = Photos10.getPath('helpPage.mainPane');
		this._helpPane = helpPane;
		this._helpPane.append();
		
		SC.routes.set('location', 'help');
	},
	
	closeHelp: function() {
		if (this._helpPane) {
			this._helpPane.remove();
			this._helpPane = null;
		}
	}

}) ;
