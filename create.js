var _ = require('lodash');

/**
 * Creates an alexa object with an overriding alexa template
 * @param overridingTemplate
 * @returns {Function}
 */
module.exports = function(overridingTemplate){
    return function(req){
        var template = {
            req:req,
            res:{
                version: '1.0',
                sessionAttributes: {},
                response:{
                    shouldEndSession: false
                }

            }
        };
        return _.assign(template, overridingTemplate || {});
    };
};