// Element used by this script
const addbutton = document.getElementById("add-button");
const input = document.getElementById("input-box");
const tasks_list = document.getElementById("tasks_list");
const deletebutton = document.getElementsByClassName("delete");

var i = 1;
// Function used to add a task to the list
function ajouter_tache(){
    var text = input.value;
    if (text === ""){
        return;
    } 
    else {
        const new_task = document.createElement("li");
        const deleteimage = document.createElement("span");
        deleteimage.className = "delete";
        new_task.innerHTML = text;
        new_task.id = i.toString();
        new_task.appendChild(deleteimage);
        tasks_list.appendChild(new_task);
        i+=1;
    }
    input.value = "";
    saveData();
}

// The task is added if you click on the button
addbutton.addEventListener("click", ajouter_tache);

// The task is added if you press enter key
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        ajouter_tache();
    }
});

tasks_list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
}, false);

tasks_list.addEventListener("click", function(e){
    if(e.target.tagName === "SPAN"){
        e.target.className = "deleted";
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", tasks_list.innerHTML);
}

function showData(){
    tasks_list.innerHTML = localStorage.getItem("data");
}

showData();