// ==========================================================================
// Project:   Photos10.Photo
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Photos10 */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Photos10.Photo = SC.Record.extend(
/** @scope Photos10.Photo.prototype */ {

  title: SC.Record.attr(String),

  album: SC.Record.toOne('Photos10.Album',
          { inverse: 'photos', isMaster: NO })

}) ;
