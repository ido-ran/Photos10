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
    childViews: 'albumsList photosGridScrollView bottomPane'.w(),
    
    albumsList: SC.ListView.design({
      layout: { top: 0, left: 0, bottom: 40, width: 150 },
      contentBinding: 'Photos10.albumsController.arrangedObjects',
      selectionBinding: 'Photos10.albumsController.selection',
      contentValueKey: 'name',
      exampleView: Photos10.AlbumListItemView,
      rowHeight: 30
    }),

	photosGridScrollView: SC.ScrollView.design({
		layout: { left: 150, top: 0, bottom: 40 },
		horizontalLineScroll: 100,
		contentView: 
			SC.GridView.design({
      			contentBinding: 'Photos10.photosController',
      			exampleView: Photos10.PhotoGridItemView,
      			rowHeightBinding: 'Photos10.photosController.photoSize',
      			columnWidthBinding: 'Photos10.photosController.photoSize'
    		}),
	}),

    bottomPane: SC.ToolbarView.design({
      layout: { left: 0, right: 0, bottom: 0, height: 40 },
      anchorLocation: SC.ANCHOR_BOTTOM,
      childViews: 'photoSizeSlider'.w(),

      photoSizeSlider: SC.SliderView.design({
        layout: { right: 0, width: 100, height: 30 },
        minimum: 20,
        maximum: 360,
        step: 1,
        valueBinding: 'Photos10.photosController.photoSize'
      })
    })

  })

});
