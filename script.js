function addTask(){
const taskInput=document.getElementById("taskInput");
const task= taskInput.value ;
if(task.trim()=== ""){
    alert("Please enter task");
    return;
}
const newTask= document.createElement("li");
newTask.innerText= task;
newTask.addEventListener("click",function(){
newTask.remove();
})
document.getElementById("taskList").appendChild(newTask);
taskInput.value="";
}