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
        li.innerHTML = `<p>${inputText}</p>
        <button class="removeBtn btn">Remove</button>`
      
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