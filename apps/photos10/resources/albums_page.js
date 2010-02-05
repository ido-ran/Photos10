// ==========================================================================
// Project:   Photos10 - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Photos10 */

// This page describes the albums view.  
Photos10.viewPage = SC.Page.design({

  mainPane: SC.MainPane.design({
    childViews: 'mainMessage closeButton'.w(),

		mainMessage: SC.LabelView.design({
			layout: { left: 10, top: 10, right: 10, bottom: 10},
			value: "This will show the help here<br/>Not much here yet."
		}),
		
		closeButton: SC.ButtonView.design({
			layout: { left: 0, top: 0, width: 30, height: 14 },
			value: "Close",
			target: 'Photos10.helpController',
			action: 'closeHelp'
		})
  })
});