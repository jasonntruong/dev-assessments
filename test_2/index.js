"use strict";

/**
 * The `test_data.json` contains an object array of "The Simpsons" characters and their catchphrase. This function
 * will add a new property `example` to each object that is a combining the `first_name`, `last_name`, and
 * `catchphrase` properties into a new sentence. The function should then only return the elements where
 * the last name is "Simpson".
 *
 * The new sentence should read like "Homer Simpson says Doh!".  See the `expected_output.json` file for the
 * expected results of this.
 *
 * @returns  {Object[]}
 */
module.exports = function test2() {
  const jsonUtils = require("../utils/jsonUtils");
  // Reads json data from file
  let jsonData = jsonUtils.parseFromFile("./test_2/test_data.json");

  // Filters initial data (faster than adding example field to all json objects then filtering)
  let filteredData = jsonData.filter((person) => {
    return person["last_name"] == "Simpson";
  });

  // Adds example field to filtered data
  return jsonUtils.addExampleField(filteredData);
};
