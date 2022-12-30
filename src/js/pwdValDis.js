var validations = require("./validation");

var { feature } = require("./features");

const input = document.getElementById(idName);

input.addEventListener('input', updateValue);

var massDiv = document.createElement("div");
massDiv.id = "massBox";
insertAfter(input, massDiv);

const massBox = document.getElementById("massBox");

var lengthPNote = document.createElement("p");
var lettersPNote = document.createElement("p");
var scPNote = document.createElement("p");
var spacesPNote = document.createElement("p");
var acPNote = document.createElement("p");
var mmPNote = document.createElement("p");
var numPNote = document.createElement("p");

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function updateCantent(massBox, massPNote, funRV) {
  massBox.appendChild(massPNote);
  massPNote.className = 'styleforP';
  massPNote.innerHTML = funRV;
}

input.parentNode.insertBefore(massDiv, input.nextSibling);

var progressArr = [];

function updateValue(ivpwd) {
  var pwdInpVal = ivpwd.target.value;
  if (pwdInpVal) {
    if (feature.length.enable === true) {
      var funRV = validations.length(pwdInpVal, feature.length.lengthLimit);
      if (funRV.pwdProgress) {
        progressArr.push(funRV.pwdProgress);
        updateCantent(massBox, lengthPNote, "");
      } else {
        updateCantent(massBox, lengthPNote, funRV);
      }
    }
    if (feature.letters === true) {
      var funRV = validations.has("letters", pwdInpVal);
      if (funRV.pwdProgress) {
        progressArr.push(funRV.pwdProgress);
        updateCantent(massBox, lettersPNote, "");
      } else {
        updateCantent(massBox, lettersPNote, funRV);
      }
    }
    if (feature.specialCharacter === true) {
      var funRV = validations.has("specialCharacter", pwdInpVal);
      if (funRV.pwdProgress) {
        progressArr.push(funRV.pwdProgress);
        updateCantent(massBox, scPNote, "");
      } else {
        updateCantent(massBox, scPNote, funRV);
      }
    }
    if (feature.avoidSpaces === true) {
      var funRV = validations.has("spaces", pwdInpVal);
      if (funRV.pwdProgress) {
        progressArr.push(funRV.pwdProgress);
        updateCantent(massBox, spacesPNote, "");
      } else {
        updateCantent(massBox, spacesPNote, funRV);
      }
    }
    if (feature.avoidCommon === true) {
      var funRV = validations.indexOfs(pwdInpVal);
      if (funRV.pwdProgress) {
        progressArr.push(funRV.pwdProgress);
        updateCantent(massBox, acPNote, "");
      } else {
        updateCantent(massBox, acPNote, funRV);
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
          updateCantent(massBox, mmPNote, "");
        } else {
          updateCantent(massBox, mmPNote, funRV);
        }
      } else {
        var funRV = validations.has("numbers", pwdInpVal);
        if (funRV.pwdProgress) {
          progressArr.push(funRV.pwdProgress);
          updateCantent(massBox, numPNote, "");
        } else {
          updateCantent(massBox, numPNote, funRV);
        }
      }
    }
  } else {
    console.log(false);
  }
}
