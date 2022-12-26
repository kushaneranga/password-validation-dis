/**
 * Get input field id.
 * @returns getElementById()|null
 */
const pwdInput = document.getElementById("vpwd");

/** variable for input fild toggle icons */
var pswIconClassName = "pwdvh-icon icon-eye slash";
var txtIconClassName = "pwdvh-icon icon-eye";

var icon = document.createElement("i");
icon.className = pswIconClassName;
icon.id = "togglePassword";

insertAfter(pwdInput, icon);

/**
 * Insert the icon element <i> after the password.
 * @param referenceNode
 * @param newNode
 * @returns element
 */
function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

/**
 * <i></i> element id
 */
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", pwdVisibility);

/**
 * Password hidden and visible functionality
 */
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
