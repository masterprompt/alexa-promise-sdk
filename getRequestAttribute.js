var $q = require('q');


module.exports = function(attributeName){
    return function(alexa){
        return (attributeName ? alexa.req.session.attributes[attributeName] : alexa.req.session.attributes);
    };
};