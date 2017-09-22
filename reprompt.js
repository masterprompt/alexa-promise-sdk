var getAlexaResponse = require('./helpers/getAlexaResponseReprompt');
var addToOutputSpeech = require('./helpers/addToOutputSpeech');
var setAlexaResponse = require('./helpers/setAlexaResponseReprompt');
var $q = require('q');

module.exports = function(message){
    return function(alexa){
        return $q.when(alexa)
            .then(getAlexaResponse)
            .then(addToOutputSpeech(message))
            .then(setAlexaResponse(alexa))
            ;
    };
};