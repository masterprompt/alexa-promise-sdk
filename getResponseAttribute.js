var $q = require('q');


module.exports = function(attributeName){
    return function(alexa){
        return (attributeName ? alexa.res.sessionAttributes[attributeName] : alexa.res.sessionAttributes || {});
    };
};