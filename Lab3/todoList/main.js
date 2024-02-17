window.addEventListener("load", () => {

    const form = document.querySelector(".input_container");
    const textField = document.querySelector(".input");
    const tasksContainer = document.querySelector(".tasks_container");

    const createHTML = (task) => {
        let taskItem = document.createElement("div");
        console.log(task.id)
        taskItem.id = task.id.toString();
        taskItem.className = "task_item";

        taskItem.addEventListener("change", (e) => {
            if(e.target.type == "checkbox"){
                tasks[taskItem.id].checked = !tasks[taskItem.id].checked
                toggleCrossed(e.target.nextSibling);
                localStorage.setItem("tasks", JSON.stringify(tasks));
            }
        });


        const toggleCrossed = (h) => {
            h.classList.toggle("crossed");
        }   

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        taskItem.appendChild(checkbox)

        let heading = document.createElement("h4");
        heading.className = "task_label";
        heading.textContent = task.title;
        if(task.checked == true){
            heading.classList.add("crossed")
        }
        taskItem.appendChild(heading)

        let deleteButton = document.createElement("button");
        deleteButton.className = "delete_task"; 
        deleteButton.type = "reset"
        
        taskItem.addEventListener("click", (e) => {
            if (e.target.className === "delete_task") {
                let taskID = parseInt(task.id); 
                let taskIndex = tasks.findIndex(task => task.id === taskID);

                if (taskIndex !== -1) {
                    tasks.splice(taskIndex, 1);
                    taskItem.remove();
                    localStorage.setItem("tasks", JSON.stringify(tasks));
                    // Re-index the tasks after removal
                    tasks.forEach((task, index) => {
                        task.id = index;
                    });
                }
            }
        });

        let trashImg = document.createElement("img");
        trashImg.src = "trash.png"
        deleteButton.appendChild(trashImg)
        taskItem.appendChild(deleteButton)

        return taskItem
    }
    
    const loadTasks = (tasks) => {
        tasks.forEach(task => {
            let taskItem = createHTML(task);
            tasksContainer.appendChild(taskItem);
            tasksContainer.appendChild(document.createElement("hr"));
        });
    }

    var storedTasks = localStorage.getItem('tasks');

    // Initialize tasks array based on localStorage data or an empty array
    let tasks = storedTasks ? JSON.parse(storedTasks) : [];

    loadTasks(tasks);
    // Log the tasks array to the console
    console.log('Tasks:', tasks);


    form.addEventListener("submit", (e) => {
        e.preventDefault()
        let taskText = textField.value;
        print
        let newTask = {
            id: tasks.length,
            title: taskText,
            checked: false
        }
        pushTask(newTask);

        let taskItem = createHTML(newTask);
        tasksContainer.appendChild(taskItem);
        tasksContainer.appendChild(document.createElement("hr"));
        localStorage.setItem("tasks", JSON.stringify(tasks));
    })


    const pushTask = (task) => {
        tasks.push(task);
    }

});

