
let bish = document.querySelector('#bish'),
  bosh = document.querySelector('#bosh'),
  bbCount = document.querySelector('#bbcount'),
  bboutput = document.getElementById('bboutput'),
  bbprint = document.getElementById('bbprint'),
  bishBoshArray = [];

(function () {
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

bboutput.addEventListener('click', function(){
    
    bbprint.innerHTML = "";
    bishBoshArray = [];

   for (let index = 0; index < bbCount.value; index++) {
        if (index % bish.value == 0 && index % bosh.value == 0) {
            bishBoshArray.push("Bish-Bosh");
        } else if (index % 3 == 0) {
            bishBoshArray.push("Bish");
        } else if (index % 4 == 0) {
            bishBoshArray.push("Bosh");        
        } else {
            bishBoshArray.push(index);
        }  
    }
   
    bishBoshArray.forEach(element => {
      bbprint.innerHTML += `<p> ${element} </p>`;
    });
    document.getElementById('bbform').reset();
  })
