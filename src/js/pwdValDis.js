var validations = require("./validation");

var { feature } = require("./features");

const input = document.getElementById(idName);

input.addEventListener('input', updateValue);

var progressArr = [];

function updateValue(ivpwd) {
  var pwdInpVal = ivpwd.target.value;
  if (pwdInpVal) {
    if (feature.length.enable === true) {
      var funRV = validations.length(pwdInpVal, feature.length.lengthLimit);
      if (funRV.pwdProgress) {
        progressArr.push(funRV.pwdProgress);
      } else {
        console.log(funRV);
      }
    }
    if (feature.letters === true) {
      var funRV = validations.has("letters", pwdInpVal);
      if (funRV.pwdProgress) {
        progressArr.push(funRV.pwdProgress);
      } else {
        console.log(funRV);
      }
    }
    if (feature.specialCharacter === true) {
      var funRV = validations.has("specialCharacter", pwdInpVal);
      if (funRV.pwdProgress) {
        progressArr.push(funRV.pwdProgress);
      } else {
        console.log(funRV);
      }
    }
    if (feature.avoidSpaces === true) {
      var funRV = validations.has("spaces", pwdInpVal);
      if (funRV.pwdProgress) {
        progressArr.push(funRV.pwdProgress);
      } else {
        console.log(funRV);
      }
    }
    if (feature.avoidCommon === true) {
      var funRV = validations.indexOfs(pwdInpVal);
      if (funRV.pwdProgress) {
        progressArr.push(funRV.pwdProgress);
      } else {
        console.log(funRV);
      }
    }
    if (feature.numbers.enable === true) {
      if (
        feature.numbers.length.min.minLgthEnable === true ||
        feature.numbers.length.max.maxLgthEnable === true
      ) {
        var minLgth =
          feature.numbers.length.min.minLgthEnable === true
            ? feature.numbers.length.min.lgth
            : null;
        var minLgth =
          feature.numbers.length.max.maxLgthEnable === true
            ? feature.numbers.length.min.lgth
            : null;
        var funRV =
          validations.hasNum(pwdInpVal, minLgth, feature.numbers.length.max.lgth);
        if (funRV.pwdProgress) {
          progressArr.push(funRV.pwdProgress);
        } else {
          console.log(funRV);
        }
      } else {
        var funRV = validations.has("numbers", pwdInpVal);
        if (funRV.pwdProgress) {
          progressArr.push(funRV.pwdProgress);
        } else {
          console.log(funRV);
        }
      }
    }
  } else {
    console.log(false);
  }
}
