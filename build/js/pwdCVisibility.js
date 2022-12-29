(function (factory) {
    if (typeof module === "object" && module.exports) module.exports = factory();
    else window.pwdVisibility = factory();
  })(function (undefined) {
    "use strict";
    return function () {
        (() => {
        var e,
            s,
            t = document.getElementById("vpwd"),
            a = document.createElement("i");
        (a.className = pswIconClassName),
            (a.id = "togglePassword"),
            (s = a),
            (e = t).parentNode.insertBefore(s, e.nextSibling),
            document
            .getElementById("togglePassword")
            .addEventListener("click", function () {
                "password" === t.type
                ? ((t.type = "text"), (a.className = txtIconClassName))
                : ((t.type = "password"), (a.className = pswIconClassName));
            });
        })();
    };
});