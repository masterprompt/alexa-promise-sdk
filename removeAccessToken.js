var $q = require('q');

var setAccessToken = require('./setAccessToken');

module.exports = function(alexa){
    alexa.isAuthorized = false;
    return setAccessToken(alexa)(null);
};