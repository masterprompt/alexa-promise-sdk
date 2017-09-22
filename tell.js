var getAlexaResponseOutputSpeech = require('./helpers/getAlexaResponseOutputSpeech');
var addToOutputSpeech = require('./helpers/addToOutputSpeech');
var setAlexaResponseOutputSpeech = require('./helpers/setAlexaResponseOutputSpeech');
var $q = require('q');

module.exports = function(message){
    return function(alexa){
        return $q.when(alexa)
            .then(getAlexaResponseOutputSpeech)
            .then(addToOutputSpeech(message))
            .then(setAlexaResponseOutputSpeech(alexa))
            ;
    };
};