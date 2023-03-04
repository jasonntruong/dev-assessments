//json utilities

module.exports = {
  /**
   * Parses JSON data from file path
   * @param path - File path of JSON data
   * @returns jsonData - Parsed JSON data from the file
   */
  parseFromFile: function (path) {
    var fs = require("fs");
    var text = fs.readFileSync(path);
    var jsonData = JSON.parse(text);
    return jsonData;
  },
  /**
   * Adds example field to JSON array
   * @param jsonData - json array
   * @returns jsonData - json data/array after adding example
   */
  addExampleField: function (jsonData) {
    for (var person of jsonData) {
      const firstName = person["first_name"];
      const lastName = person["last_name"];
      const catchphrase = person["catchphrase"];
      // Ensures all fields are not undefined
      if (firstName && lastName && catchphrase) {
        person["example"] =
          person["first_name"] +
          " " +
          person["last_name"] +
          " says " +
          person["catchphrase"];
      }
    }
    return jsonData;
  },
};
