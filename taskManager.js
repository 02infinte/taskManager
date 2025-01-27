const taskTitle = document.getElementById('taskTitle');
const taskDescription=document.getElementById('taskDescription');
const taskContainer = document.getElementById('taskContainer');
const taskPriority = document.getElementById('taskPriority');

 addTask=()=>{
   if(taskTitle.value == ''){
    alert("Please write something here");
   }
   else{
    let li = document.createElement("li");
      li.innerHTML=taskTitle.value;
      taskContainer.appendChild(li);
      let img=document.createElement("img");
      img.src="images/edit.png";
      li.appendChild(img);
      img.style.width="18px";
      img.style.height="18px";
      let span = document.createElement('span');
      span.innerHTML = '\u00d7';
      li.appendChild(span);
    
    
   }
   taskTitle.value=" ";
   taskDescription.value="";
   taskPriority.value="low";
   saveData();
}

taskContainer.addEventListener("click",function(e){
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle('complete');
    saveData();
  }
  else if(e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
    saveData();
  }
  else if(e.target.tagName === 'img'){
    taskTitle.value=e.target.innerHTML;
  }
},false);

saveData=()=>{
  localStorage.setItem("data",taskContainer.innerHTML);
}

showData=()=>{
  taskContainer.innerHTML= localStorage.getItem("data");
}
showData();