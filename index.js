// * this is going to be code to move the focus of the screen to the various sections based on the header
window.addEventListener("DOMContentLoaded", (e) => {

   let form = document.getElementById("form")
   console.log(form)
   
   form.addEventListener("submit", (e) => {
      e.preventDefault();
      let input = document.getElementById('email')
      window.location.replace("https://www.freecodecamp.com/email-submit")
   })

})

// $("nav").find("a").click(function(e) {
//    e.preventDefault();
//    var section = $(this).attr("href");
//    $("html, body").animate({
//        scrollTop: $(section).offset().top
//    });
// });