// * this is going to be code to move the focus of the screen to the various sections based on the header
window.addEventListener("DOMContentLoaded", (e) => {

   let form = document.getElementById("form")
   console.log(form)
   
   form.addEventListener("submit", (e) => {
      e.preventDefault();
      let input = document.getElementById('email')
      window.location.replace("https://www.freecodecamp.com/email-submit")
   })

   let header = document.getElementById('header')
   let sticky = header.offsetTop

   window.onscroll = () => {
      if(window.pageYOffset > sticky) {
         header.classList.add('sticky')
      } else {
         header.classList.remove('sticky')
      }
   }
   
})

