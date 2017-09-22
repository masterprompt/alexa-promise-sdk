var getAlexaResponseCard = require('./helpers/getAlexaResponseCard');
var setAlexaResponseCard = require('./helpers/setAlexaResponseCard');
var $q = require('q');

function setCardType(type){
    return function(card){
        card = card || {};
        card.type = type;
        return card;
    };
}

module.exports = function(type){
    return function(alexa){
        return $q.when(alexa)
            .then(getAlexaResponseCard)
            .then(setCardType(type))
            .then(setAlexaResponseCard(alexa))
            ;
    };
};