var validations = require("./validation");

var { feature } = require("./features");

var pwdInpVal = "52sre8gaer64";

// console.log(validations.has('sssOK'))

// console.log(validations.indexOfs('12345678'));

// console.log(feature);
if (pwdInpVal) {
  if (feature.length.enable === true) {
    console.log(validations.length(pwdInpVal, feature.length.lengthLimit));
  }
  if (feature.specialCharacter) {
  }
}
