var configValues = require('./config');

module.exports = {

    getDbConnectionString: function() {
        return "mongodb+srv://"+configValues.username+
        ":" + configValues.password +
        "@" + configValues.mongourl+"/"+ configValues.database +
        "?retryWrites=true&w=majority";
    }
};