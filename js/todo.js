import {starWars, showcard} from "./api.js";

let todo = document.querySelector('#todotext'),
    todoListbutton = document.getElementById('tdbutton'),
    starButton = document.getElementById('starButton'),
    cardButton = document.getElementById('cardButton'),
    tdprint = document.getElementById('tdprint');
   

function random(n) {
  return Math.floor(Math.random() * n);
}
  
  (function () {
    'use strict'
    
    var forms = document.querySelectorAll('#todoform')
    
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener('submit', function (e) {
        if (!form.checkValidity()) {
          e.preventDefault()
          e.stopPropagation()
        }       
        form.classList.add('was-validated')
      }, false)
    })
  })()
  
  
todoListbutton.addEventListener('click', function(e){
    
    if (todo.value === "") {
      return;
    }
    
    const button = document.createElement('button');
    button.classList.add('btn-close');
    button.classList.add('float-end');
    
    button.addEventListener("click", function(e){
      e.target.parentNode.remove();
      
    });
    
    
    const p = document.createElement('p');
    p.classList.add('ptag');
    p.id = random(1000);
    p.draggable = 'true';
    
    
p.addEventListener("click", function(e){
    e.target.classList.toggle('grayedout')
});


p.appendChild(document.createTextNode(todo.value));
    tdprint.appendChild(p).appendChild(button);


p.addEventListener("dragstart", (e) =>
    e.dataTransfer.setData("text", e.target.id)
);  

const dropDiv = document.getElementById("dropit");
dropDiv.addEventListener("dragover", (e) => {     
    e.preventDefault();
}, false);


dropDiv.addEventListener("drop", (e) => { 
  
    e.preventDefault();
    const id = e.dataTransfer.getData('text');
    const todoDiv = document.getElementById(id);
    const div = e.target;
    div.appendChild(todoDiv);
    e.dataTransfer.clearData();
  
});
    document.getElementById('todoform').reset();
})


starButton.addEventListener('click', starWars);
cardButton.addEventListener('click', showcard);
