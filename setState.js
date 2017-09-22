var $q = require('q');
var setResponseAttribute = require('./setResponseAttribute');

module.exports = function(alexa){
    return function(state){
        return setResponseAttribute(alexa)(state);
    };
};