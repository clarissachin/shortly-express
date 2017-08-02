const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  //create an object w/ a shortlyid property w/ a hash value
  console.log('createSession req is', req);
  //console.log('createSession res is', res);  
  next(); // need to invoke next() //review middleware slides and middleware docs 
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

