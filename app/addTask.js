const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("add-button");

addButton.addEventListener("click", function(){
    if(inputBox.value === '') {
        alert("You must enter a task");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; 
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData(); 
})

listContainer.addEventListener('click', function (e)
{
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();  
    }
}, false); 

function saveData () {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData () {
    listContainer.innerHTML = localStorage.getItem("data"); 
}
showData(); 