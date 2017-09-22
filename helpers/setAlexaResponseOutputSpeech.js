

module.exports = function(alexa){
    return function(outputSpeech){
        alexa.res.response.outputSpeech = outputSpeech;
        return alexa;
    };
};