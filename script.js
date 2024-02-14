
const inputValue = document.querySelector(".topInput");
const searchBtn = document.querySelector(".addBtn");

const listContainer = document.querySelector(".listContainer");

function addTask(){
   if(inputValue.value === ''){
    alert("Add a Task")
   }
   else{
    let li = document.createElement("li");
    li.innerHTML = inputValue.value;
    listContainer.appendChild(li);


    let span = document.createElement("span");
    span.innerHTML = '\u00d7'
    li.appendChild(span)
   }
   SaveDate()
}

searchBtn.addEventListener("click",(e)=>{
    addTask();
    inputValue.value = ''
})

listContainer.addEventListener('click',(e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        SaveDate()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        SaveDate()
    }
})

function SaveDate(){
    localStorage.setItem("todoData",listContainer.innerHTML)
}

function getData(){
  listContainer.innerHTML =   localStorage.getItem("todoData");
}
getData();


