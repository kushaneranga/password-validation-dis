var validations = require("./validation");

var { feature } = require("./features");

const input = document.getElementById('vpwd');

input.addEventListener('input', updateValue);

function updateValue(ivpwd) {
  var pwdInpVal = ivpwd.target.value;
  if (pwdInpVal) {
    if (feature.length.enable === true) {
      console.log(validations.length(pwdInpVal, feature.length.lengthLimit));
    }
    if (feature.letters === true) {
      console.log(validations.has("letters", pwdInpVal));
    }
    if (feature.specialCharacter === true) {
      console.log(validations.has("specialCharacter", pwdInpVal));
    }
    if (feature.avoidSpaces === true) {
      console.log(validations.has("spaces", pwdInpVal));
    }
    if (feature.avoidCommon === true) {
      console.log(validations.indexOfs(pwdInpVal));
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
        console.log(
          validations.hasNum(pwdInpVal, minLgth, feature.numbers.length.max.lgth)
        );
      } else {
        console.log(validations.has("numbers", pwdInpVal));
      }
    }
  } else {
    console.log(false);
  }
}
