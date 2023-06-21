
const todos = [
  {
    name: "find will to live",
    complete: true
  },
  {
    name: "clean the porch",
    complete: false
  },
  {
    name: "delete tiktok",
    complete: false
  },
  {
    name: "write",
    complete: true
  }
]

// function todos (name, completed) {

// }

const form = `<div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="todo-item"
              placeholder="Todo Item"
              required
            />
            <label for="todo-item">Todo Item</label>
          </div>
          <button type="submit" class="btn btn-success">Add Todo</button>`;
          
          
document.querySelector("#app-form").innerHTML = form;

const filterBtns = `<button type="button" class="btn btn-danger btn-sm">
          Incomplete
        </button>
        <button type="button" class="btn btn-success btn-sm">
          Complete
        </button>`;

document.querySelector("#app-filter").innerHTML = filterBtns; 

function card(todoObj) {
    if (!todoObj.complete) {
      return `<div class="card m-1">
            <div class="card-body">
              ${todoObj.name}
              <button type="button" class="btn btn-danger">Done</button>
            </div >
          </div>`;
    }
  
    return `<div class="card m-1">
            <div class="card-body">
              ${todoObj.name}
            </div >
          </div>`;
  }

// document.querySelector("#app-todos").innerHTML = card(todos[0]); 

// for (let i = 0; i < todos.length; i++) {
//     document.querySelector("#app-todos").innerHTML += card[i]; 
// }

todos.forEach((item) => {
    document.querySelector("#app-todos").innerHTML += card(item)
})