/**
 * common Words Array
 * @type {Array<string>}
 */
const commonWordsArr = require('./commonWordsArr');

/**
 * Generic method to test regex
 * @private
 * @param {string} regex
 */
const { regex } = require("./constants");

function _process(regexp, repeat) {
  if (repeat && repeat > 1) {
    const parsedRepeat = parseInt(repeat, 10);
    return (
      new RegExp(regexp + "{" + parsedRepeat + ",}").test(this.password) ===
      this.positive
    );
  }
  return new RegExp(regexp).test(this.password) === this.positive;
}

module.exports = {
  /**
   * Method to invert the next validations
   * @param {RegExp} [symbol] - custom Regex which should not be present
   */
  not: function not(symbol) {
    this.positive = false;
    if (symbol) {
      return _process.call(this, symbol);
    }
    return true;
  },
};
