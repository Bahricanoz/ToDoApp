
const form = document.querySelector("form");
const input = document.querySelector("#tskTaskName");
const btnDeleteAll = document.getElementById("btnAllDelete");
const taskList = document.getElementById("task-list");
const buton = document.getElementById("btnAddNewTask");

let items= ["Görev1","Görev 2","Görev 3"];

loadItems();
evenetListeners();

function evenetListeners(){
    form.addEventListener('submit',addNewItem);

    taskList.addEventListener('click',deleteItem);

    btnDeleteAll.addEventListener('click',deleteAllItem);
}

function loadItems(){
    items.forEach(function(item){
        createItem(item);
})
}

function createItem(text){
    var li = document.createElement('li');
    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(text));

    var a = document.createElement('a');
    a.classList = "btn btn-danger btn-sm float-right";
    a.textContent = "Sil";
    li.appendChild(a);
    
    taskList.appendChild(li);
}

function addNewItem(e){

    if(input.value ===''){
        alert("add new item");
    }
    else{
        var li = document.createElement('li');
        li.className = "list-group-item list-group-item-secondary";
        li.appendChild(document.createTextNode(input.value));

        var a = document.createElement('a');
        a.classList = "btn btn-danger btn-sm float-right";
        a.textContent = "Sil";
        li.appendChild(a);
        

        taskList.appendChild(li);
        input.value= '';
    }
    
    e.preventDefault();
}

function deleteItem(e){
    if(e.target.className === "btn btn-danger btn-sm float-right"){
        if(confirm('Are you sure?')){
            e.target.parentElement.remove();
        }
        
    }

    e.preventDefault();

}

function deleteAllItem(e){
    
    if(confirm('Are you sure?')){
        taskList.innerHTML = "";
    }
    e.preventDefault();
}