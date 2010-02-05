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
		console.log(helpPane);
		console.log('after write pane');
		this._helpPane = helpPane;
		this._helpPane.append();
	},
	
	closeHelp: function() {
		if (this._helpPane) {
			this._helpPane.remove();
			this._helpPane = null;
		}
	}

}) ;
