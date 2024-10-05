const takevalue = document.getElementById("todo-input");
const addingtask = document.getElementById("addtask");

function addtodo() {
    if (takevalue.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        const dive = document.createElement("div");
        dive.setAttribute("class","hello");
        const tickel = document.createElement("input");
        tickel.setAttribute("type","checkbox");
        tickel.setAttribute("id","tick");
        const label = document.createElement("label");
        label.innerHTML =  takevalue.value;
        label.setAttribute("for","tick");
        dive.appendChild(tickel);
        dive.appendChild(label);
        li.appendChild(dive);
        addingtask.appendChild(li);

        // Create and append delete button
        let buttonel = document.createElement("button");
        buttonel.innerHTML = "Delete";
        buttonel.classList.add("delete-btn");
        li.appendChild(buttonel);

        // Add event listener to delete the task when the button is clicked
        buttonel.addEventListener("click", function() {
            li.remove();
            savedatas();
        });

        takevalue.value = "";
        savedatas();
    }
}

function savedatas() {
    localStorage.setItem("data", addingtask.innerHTML);
}

function showtask() {
    addingtask.innerHTML = localStorage.getItem("data");

    let deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach(button => {
        button.addEventListener("click", function() {
            button.parentElement.remove();
            savedatas();
        });
    });
}

showtask();
