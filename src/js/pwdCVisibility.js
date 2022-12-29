(function (factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else window.pwdVisibility = factory();
})(function (undefined) {
  "use strict";
  return function () {
    /**
     * Get input field id.
     * @returns getElementById()|null
     */
    const pwdInput = document.getElementById("vpwd");

    /** variable for input fild toggle icons */
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
  };
});
