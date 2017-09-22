
//  Enumerations
var cardTypes = require('./cardTypes');
var requestTypes = require('./requestTypes');
var intents = require('./intents');
module.exports.cardTypes = cardTypes;
module.exports.requestTypes = requestTypes;
module.exports.intents = intents;

//  Setup
var create = require('./create');
module.exports.create = create;

//  Speech
var tell = require('./tell');
var reprompt = require('./reprompt');
module.exports.tell = tell;
module.exports.reprompt = reprompt;

//  Cards
var setCardType = require('./setCardType');
var setCardText = require('./setCardText');
module.exports.setCardType = setCardType;
module.exports.setCardText = setCardText;

//  Session
var keepSessionOpen = require('./keepSessionOpen');
var endSession = require('./endSession');
module.exports.keepSessionOpen = keepSessionOpen;
module.exports.endSession = endSession;

//  Attributes / persistence
var getRequestAttribute = require('./getRequestAttribute');
var getResponseAttribute = require('./getResponseAttribute');
var setResponseAttribute = require('./setResponseAttribute');
module.exports.getRequestAttribute = getRequestAttribute;
module.exports.getResponseAttribute = getResponseAttribute;
module.exports.setResponseAttribute = setResponseAttribute;


//  Flow
var getRequestType = require('./getRequestType');
var getRequestIntent = require('./getRequestIntent');
module.exports.getRequestType = getRequestType;
module.exports.getRequestIntent = getRequestIntent;

//  Access
var validateAccessToken = require('./validateAccessToken');
var removeAccessToken = require('./removeAccessToken');
var getAccessToken = require('./getAccessToken');
var setAccessToken = require('./setAccessToken');
module.exports.validateAccessToken = validateAccessToken;
module.exports.removeAccessToken = removeAccessToken;
module.exports.getAccessToken = getAccessToken;
module.exports.setAccessToken = setAccessToken;

//  State
var validateState = require('./validateState');
var getState = require('./getState');
var setState = require('./setState');
module.exports.validateState = validateState;
module.exports.getState = getState;
module.exports.setState = setState;
