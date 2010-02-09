// ==========================================================================
// Project:   Photos10 - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Photos10 */

// This page describes the main user interface for your application.  
Photos10.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'recentlyChangedAlbums bottomPane'.w(),

		recentlyChangedAlbums: SC.ScrollView.design({
			layout: { top: 100, left: 50, right: 50, bottom: 50 },
			contentView: SC.GridView.design({
				contentBinding: 'Photos10.welcomeAlbumsController.arrangedObjects',
				contentValueKey: 'name',
				rowHeight: 260,
				columnWidth: 260
			})
		}),

    bottomPane: SC.ToolbarView.design({
      layout: { left: 0, right: 0, bottom: 0, height: 40 },
      anchorLocation: SC.ANCHOR_BOTTOM,
      childViews: 'photoSizeSlider helpButton'.w(),

      photoSizeSlider: SC.SliderView.design({
        layout: { right: 0, width: 100, height: 30 },
        minimum: 130,
        maximum: 350,
        step: 1,
        valueBinding: 'Photos10.photosController.photoSize'
      }),

			helpButton: SC.ButtonView.design({
				layout: { left: 20, width: 120, height: 30, top: 5 },
				title: 'Help',
				target: 'Photos10.helpController',
				action: 'showHelp'
			})
    })

  })

});
