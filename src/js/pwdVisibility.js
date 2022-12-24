const pwdInput = document.getElementById("vpwd");

var pswIconClassName = "pwdvh-icon icon-eye slash";
var txtIconClassName = "pwdvh-icon icon-eye";

var icon = document.createElement("i");
icon.className = pswIconClassName;
icon.id = "togglePassword";

insertAfter(pwdInput, icon);

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", pwdVisibility);

function pwdVisibility() {
  if (pwdInput.type === "password") {
    pwdInput.type = "text";
    icon.className = txtIconClassName;
  } else {
    pwdInput.type = "password";
    icon.className = pswIconClassName;
  }
}

/** we can use this if any veriables are dosen't change. */

// const pwdInput = document.getElementById("vpwd");

// pwdInput.insertAdjacentHTML(
//   "afterend",
//   '<i class="pwdvh-icon icon-eye slash" id="togglePassword"></i>'
// );

// const togglePassword = document.getElementById("togglePassword");

// togglePassword.onclick = function () {
//   pwdInput.type = pwdInput.type === "password" ? "text" : "password";
//   togglePassword.classList.toggle("slash");
// };
