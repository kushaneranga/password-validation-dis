var commonWordsArr = require('./commonWordsArr');
var error = require('./constants').error;

console.log(commonWordsArr);
console.log(error);

const indexOfs = (arr, obj) => {
    for (let i = 0, j = arr.length; i < j; i++) {
      if (arr[i] === obj) return true;
    }
    return false;
};

console.log(indexOfs(commonWordsArr, 'ssss'));