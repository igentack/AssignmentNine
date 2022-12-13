export default (function () {
    'use strict'

    var forms = document.querySelectorAll('#bbform')
    
    Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (e) {
        if (!form.checkValidity()) {
          e.preventDefault()
          e.stopPropagation()
        }       
        form.classList.add('was-validated')
        }, false)
      })
})()