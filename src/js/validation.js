/**
 * common Words Array
 * @type {Array<string>}
 */
const commonWordsArr = require("./commonWordsArr");

/**
 * Error massage object
 * @type {object}
 */
const massages = require("./massages");
console.log(massages);

/**
 * Regex object
 * @type {object}
 */
const { regex } = require("./constants");

/**
 * spConst object
 * @type {object}
 */
const { spConst } = require("./constants");

/**
 * function for matching regex
 * @private
 * @param {string} regex
 * @returns {boolean} - If input value matches with regex
 *                        return true, false otherwise
 */
function _process(regexArr) {
  return regexArr, this.impChar;
}

module.exports = {
  /**
   * Method to invert the next validations
   * @param {RegExp} [symbol] - custom Regex which should not be present
   */
  has: function has(impChar) {
    return _process.call(impChar, regex);
  },

  /**
   * Function for input value numbers checking
   * @param {number} inpVal - input number
   * @param {number} minLgth - minimum length
   * @param {number} maxLgth - maximum length
   */
  hasNum: function hasNum(inpVal, minLgth = null, maxLgth = null) {
    function check(x) {
      return spConst.num.includes(x) ? true : false;
    }
    var matches = [...inpVal].reduce((x, y) => (check(y) ? x + y : x), "");
    if (matches) {
      if (minLgth && maxLgth) {
        return module.exports.minMax(matches, minLgth, maxLgth);
      } else if (minLgth) {
        return module.exports.min(matches, minLgth);
      } else if (maxLgth) {
        return module.exports.max(matches, maxLgth);
      }
    } else {
      return error.numbers;
    }
  },

  /**
   * Method to specify a minimum length & maximum length
   * @param {number} num - input number
   * @param {number} minLgth - minimum length
   * @param {number} maxLgth - maximum length
   */
  minMax: function minMax(num, minLgth = null, maxLgth = null) {
    if (num.length >= minLgth && num.length <= maxLgth) {
      return true;
    } else {
      console.log(error.minMaxLNumbers, minLgth);
    }
  },

  /**
   * Method to specify a minimum length
   * @param {number} num - input number
   * @param {number} lgth - minimum length
   */
  min: function min(num, lgth = null) {
    if (num.length >= lgth) {
      return true;
    } else {
      return error.minLNumbers;
    }
  },

  /**
   * Method to specify a maximum length
   * @param {number} num - input number
   * @param {number} lgth - maximum length
   */
  max: function max(num, lgth = null) {
    if (num.length  <= lgth) {
      return true;
    } else {
      return error.maxLNumbers;
    }
  },

  /**
   * Method to check index of a given
   * @param {...number} obj - A positive or negative number.
   * @param {string} obj - A string values.
   * @returns {boolean} - If obj in the array
   *                        return true, false otherwise
   */
  indexOfs: function indexOfs(obj) {
    for (let i = 0, j = commonWordsArr.length; i < j; i++) {
      if (commonWordsArr[i] === obj) return true;
    }
    return false;
  },
};
