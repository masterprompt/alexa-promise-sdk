var getAlexaResponseCard = require('./helpers/getAlexaResponseCard');
var setAlexaResponseCard = require('./helpers/setAlexaResponseCard');
var $q = require('q');

function setCardText(text){
    return function(card){
        card = card || {};
        card.text = text;
        return card;
    };
}

module.exports = function(text){
    return function(alexa){
        return $q.when(alexa)
            .then(getAlexaResponseCard)
            .then(setCardText(text))
            .then(setAlexaResponseCard(alexa))
            ;
    };
};