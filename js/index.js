function scrollTop() {
   if (document.documentElement.scrollTop > 200) {
      document.getElementById("navbar").classList.add("noTransparent");
   } else {
      document.getElementById("navbar").classList.remove("noTransparent");
   }
}

window.onscroll = function () {
   scrollTop();
};

window.onload = function () {
   var website = new CountUp("website-count", 0, 250, 0, 2.5);
   website.start();

   var app = new CountUp("app-count", 0, 100, 0, 2.5);
   app.start();

   var users = new CountUp("users-count", 0, 10000, 0, 2.5);
   users.start();

   var video = new CountUp("video-count", 0, 30, 0, 3);
   video.start();
};

(function () {
   "use strict";

   var forms = document.querySelectorAll(".needs-validation");

   Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
         "submit",
         function (event) {
            if (!form.checkValidity()) {
               event.preventDefault();
               event.stopPropagation();
            }

            form.classList.add("was-validated");
         },
         false
      );
   });
})();

document.getElementById("fullYear").innerHTML = new Date().getFullYear();
