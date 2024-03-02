const task = document.getElementById("task");
const tasklist = document.getElementById("tasklist");
const toggle = document.getElementById("toggle");

toggle.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        toggle.src = "images/toggle-on-solid.png";
    }
    else{
        toggle.src = "images/toggle-off-solid.png";
    }
} 

function addTask(){
    if(task.value === ''){
        alert("You Must Write Something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = task.value;
        tasklist.appendChild(li);

        let img = document.createElement("img");
        img.src = "images/circle-xmark-regular.png";
        li.appendChild(img);
    }
    task.value = "";
    saveTask();
}
task.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        addTask();
    }
    saveTask();
});
tasklist.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
    }
    saveTask();
},false);

function saveTask(){
    localStorage.setItem("data", tasklist.innerHTML);
}
function showTask(){
    tasklist.innerHTML = localStorage.getItem("data");
}
showTask();

