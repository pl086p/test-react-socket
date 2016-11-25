exports.isJSON = function (data) {

        try {
            JSON.parse(data);
            return true;
        } catch(e) {
            return false;
        }
};

exports.getMessage = function (data) {
        var dJSON = data;

        dJSON = '{ "GEP23": ' + dJSON + '}';
    return dJSON;
};

