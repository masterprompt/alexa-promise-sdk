

module.exports = function(alexa){
    return function(card){
        alexa.res.response.card = card;
        return alexa;
    };
};