var $q = require('q');
//var setResponseAttribute = require('./setResponseAttribute');
var getAccessToken = require('./getAccessToken');
var setAccessToken = require('./setAccessToken');
module.exports = function(alexa){
    //  Get previous token from state
    if(getAccessToken(alexa)){
        alexa.isAuthorized = true;
    }

    //  get new token if available
    if(alexa.req.session && alexa.req.session.user && alexa.req.session.user.accessToken){
        setAccessToken(alexa)(alexa.req.session.user.accessToken);
        //alexa.res.response.sessionAttributes.accessToken = alexa.req.session.user.accessToken;
        alexa.isAuthorized = true;
    }

    return alexa;
};