let inputs = document.getElementById("task_inp");
let text = document.querySelector(".text");

function Add_task(){
    if(inputs.value == ""){
        alert("Please Enter a task");
    }

    else{
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${inputs.value} <i class="fa-sharp fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value = "";
        newEle.querySelector("i").addEventListener("click", remove);

        function remove(){
            newEle.remove();
        }
    }
}