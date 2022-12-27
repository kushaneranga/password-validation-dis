/**
 * common Words Array
 * @type {Array<string>}
 */
const commonWordsArr = require("./commonWordsArr");

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
 * Massage return function
 * @type {function}
 */
const massages = require("./massages");

/**
 * function for matching regex
 * @private
 * @param {string} regex
 * @returns {boolean} - If input value matches with regex
 *                        return true, false otherwise
 */
function _process(regexType, inpVal) {
  if (regexType) {
    var regexVal = regex[regexType];
    if (new RegExp(regexVal).test(inpVal)) {
      return regexType == "spaces" ? massages(regexType) : true;
    } else {
      return regexType == "spaces" ? true : massages(regexType);
    }
  }
}

module.exports = {
  /**
   * Function for input value length checking
   * @param {string} inpVal - input value
   * @param {number} minLength - length count
   * @returns {string} - error massage
   * @returns {boolean} - If input value length invalid
   *                        return true
   */
  length: function length(inpVal, minLength) {
    if (inpVal.length >= minLength) {
      return true;
    } else {
      return massages("length", minLength, true);
    }
  },

  /**
   * Method to invert the next validations
   * @param {RegExp} [symbol] - custom Regex which should not be present
   */
  has: function has(regexType, inpChar) {
    return _process.call(regex, regexType, inpChar);
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
      return massages("numbers");
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
      return massages("minMaxLNumbers", [minLgth, maxLgth, num], true);
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
      return massages("minLNumbers", [lgth, num], true);
    }
  },

  /**
   * Method to specify a maximum length
   * @param {number} num - input number
   * @param {number} lgth - maximum length
   */
  max: function max(num, lgth = null) {
    if (num.length <= lgth) {
      return true;
    } else {
      return massages("maxLNumbers", [lgth, num], true);
    }
  },

  /**
   * Method to check index of a given
   * @param {...number} obj - A positive or negative number.
   * @param {string} obj - A string values.
   * @returns {boolean} - If obj in the array
   *                        return true, false otherwise
   */
  indexOfs: function indexOfs(inpVal) {
    for (let i = 0, j = commonWordsArr.length; i < j; i++) {
      if (commonWordsArr[i] === inpVal) return massages("common");
    }
    return true;
  },
};
