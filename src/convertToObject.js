'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString.split(';').forEach((element) => {
    if (!element.trim()) {
      return;
    }

    const [key, value] = element.split(':');

    result[key.trim()] = value.trim();
  });

  return result;
}

module.exports = convertToObject;
