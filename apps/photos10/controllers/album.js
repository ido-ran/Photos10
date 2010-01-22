// ==========================================================================
// Project:   Photos10.albumController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Photos10 */

/** @class

  Controller for the selected album.

  @extends SC.Object
*/
Photos10.albumController = SC.ObjectController.create(
/** @scope Photos10.albumController.prototype */ {

  contentBinding: 'Photos10.albumsController.selection',
  ContentBindingDefault: SC.Binding.single(),

  photoSize: 160
}) ;
