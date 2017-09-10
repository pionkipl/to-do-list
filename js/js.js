  
  let list = document.querySelector('#listItems');
  let form = document.querySelector('#form');
  let item = document.querySelector('#input');
  
  form.addEventListener('submit',function(e){
    e.preventDefault();
    list.innerHTML += '<li>' + item.value + '</li>';
    store();
    item.value = "";
  },false)
  
  list.addEventListener('click',function(e){
    let target = e.target;
    if(target.classList.contains('checked')){
      target.parentNode.removeChild(target);
    } else {
      target.classList.add('checked');
    }
    store();
  },false)
  
  function store() {
    window.localStorage.myitems = list.innerHTML;
  }
  
  function getValues() {
    let storedValues = window.localStorage.myitems;
    if(!storedValues) {
      list.innerHTML = '<li>Make your to do list</li>';                       
    }
    else {
      list.innerHTML = storedValues;
    }
  }
  getValues();
