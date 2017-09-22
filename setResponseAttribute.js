var $q = require('q');


module.exports = function(alexa, attributeName){
    return function(obj){
        if(attributeName){
            alexa.res.sessionAttributes[attributeName] = obj;
        }else{
            alexa.res.sessionAttributes = obj;
        }
        return alexa;
    };
};