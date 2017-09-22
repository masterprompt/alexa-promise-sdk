module.exports = function(message){
    return function(data){
        console.log(message, data);
        return data;
    };
};