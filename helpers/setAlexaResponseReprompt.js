

module.exports = function(alexa){
    return function(reprompt){
        alexa.res.response.reprompt = reprompt;
        return alexa;
    };
};