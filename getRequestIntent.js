var $q = require('q');


module.exports = function(alexa){
    return alexa.req.request.intent;
};