var $q = require('q');

module.exports = function(alexa){
    alexa.res.sessionAttributes = alexa.req.session.attributes || {};
    return alexa;
};