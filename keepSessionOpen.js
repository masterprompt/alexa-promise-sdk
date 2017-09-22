
module.exports = function(){
    return function(alexa){
        alexa.res.response.shouldEndSession = false;
        return alexa;
    };
};