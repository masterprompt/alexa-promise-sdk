var $q = require('q');
var getResponseAttribute = require('./getResponseAttribute');

module.exports = function(alexa){
    return getResponseAttribute('accessToken')(alexa);
};