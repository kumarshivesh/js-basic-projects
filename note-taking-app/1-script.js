/*
document.addEventListener('DOMContentLoaded', function () {
    const noteInput = document.getElementById('noteInput');
    const addNoteButton = document.getElementById('addNoteButton');
    const noteList = document.getElementById('noteList');

    addNoteButton.addEventListener('click', function () {
        const noteText = noteInput.value.trim();
        if (noteText !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                ${noteText}
                <button class="delete-button">Delete</button>
            `;

            listItem.querySelector('.delete-button').addEventListener('click', function () {
                listItem.remove();
            });

            noteList.appendChild(listItem);
            noteInput.value = '';
        }
    });
});
*/
const inputBox = document.querySelector("#input-box");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");

// Function to add to do
const addTodo = () => {
  let inputText = inputBox.value.trim();
  if (inputText === "") {
    console.log("Please add a to do")
    return false;
  } else {
      let li = document.createElement("li");
      //creating p
      let p = document.createElement("p");
      p.innerHTML = inputText;
      li.appendChild(p);
      // console.log(li)
      /*
      // creating `Edit` button
      let editBtn = document.createElement('button')
      editBtn.classList.add('editBtn', 'btn')
      editBtn.innerHTML = 'Edit'
      li.appendChild(editBtn)
      // console.log(li)
      */
      // creating `Remove` button
      let removeBtn = document.createElement("button");
      removeBtn.classList.add("removeBtn", "btn");
      removeBtn.innerHTML = "Remove";
      li.appendChild(removeBtn);
      // console.log(li)

      todoList.appendChild(li);
      inputBox.value = "";
      // console.log(todoList)
    }
};

// Function to update (`edit` and `delete`) to do
const updateTodo = (e) => {
  // console.log(e.target.innerHTML)
  if (e.target.innerHTML === "Remove") {
    e.target.parentElement.remove();
  }
};

addBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", updateTodo);
