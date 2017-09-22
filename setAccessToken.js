var $q = require('q');
var setResponseAttribute = require('./setResponseAttribute');

module.exports = function(alexa){
    return function(accessToken){
        return setResponseAttribute(alexa, 'accessToken')(accessToken);
    };
};