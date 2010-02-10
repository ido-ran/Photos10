// ==========================================================================
// Project:   Photos10.Album Fixtures
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Photos10 */

sc_require('models/album');

Photos10.Album.FIXTURES = [
  
  { guid: '1',
    name: 'Dogs',
		lastModified: '2005-01-05',
    photos: ['200', '201', '202', '203', '204', '205', '206', '207']
  },

  { guid: '2',
    name: 'Aurora',
		lastModified: '2003-02-10',
    photos: ['100', '101', '102', '103', '104', '105']
  },

  { guid: '3',
    name: 'Cats',
		lastModified: '2001-11-11'
  },

  { guid: '4',
    name: 'Bart Simpson',
		lastModified: '1999-12-10'
  },

  { guid: '5',
		name: 'חג ביכורים 2008',
		lastModified: '2004-11-12'},


  { guid: '6',
		name: 'חג ביכורים 2009',
		lastModified: '2009-05-20'},
			
  { guid: '7',
		name: 'סוכות 2009',
		lastModified: '2009-05-15'},

  { guid: '8',
		name: 'טיול משפחות לרמת הגולן',
		lastModified: '2010-04-30'},
				
  { guid: '9',
		name: 'אנחנו',
		lastModified: '2010-02-10'}
];
