
module.exports = function(message){
    return function(outputSpeech){
        outputSpeech = outputSpeech || {};
        switch(outputSpeech.type){

            case 'PlainText':
                outputSpeech.text = (outputSpeech.text || '') + message;
                break;

            case 'SSML':
            default:
                outputSpeech.type = 'SSML';
                outputSpeech.ssml = outputSpeech.ssml || '<speak></speak>';
                var position = outputSpeech.ssml.length - 8;
                outputSpeech.ssml = [outputSpeech.ssml.slice(0, position), message, outputSpeech.ssml.slice(position)].join('');
                break;

        }
        return outputSpeech;
    };
};