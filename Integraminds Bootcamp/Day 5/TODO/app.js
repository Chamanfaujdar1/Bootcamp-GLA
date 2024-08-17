const addTask=()=>{
    const input=document.querySelector("#new-task")
    const taskList=document.querySelector("ul")
    console.log(input.innerText.trim());
    if(input.value.trim()!=""){
        const ele = document.createElement("li")
        ele.innerText=input.value
        const deleteButton=document.createElement("button")
        deleteButton.innerText="Delete"
        taskList.appendChild(ele)
        ele.appendChild(deleteButton)
        input.value=""
        deleteButton.onclick=()=>{
            deleteTask(ele)
        }
    }
}
const deleteTask=(ele)=>{
    ele.remove()
}