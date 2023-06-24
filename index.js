
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

//creating a form and and assigning it to the html that creates the form 
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
          

// calling upon the Document obejct and invoking the 
// querySelector method. We're accessing the id app-form's HTML and setting 
// it equal to the constant we set earlier holding the HTML. 
document.querySelector("#app-form").innerHTML = form;

const filterBtns = `<button type="button" class="btn btn-danger btn-sm">
          Incomplete
        </button>
        <button type="button" class="btn btn-success btn-sm">
          Complete
        </button>`;

document.querySelector("#app-filter").innerHTML = filterBtns; 

//creating a function 'card' which accepts a param of an object - the todoObj

function card(todoObj) {
  //if it's true that the complete property of the todoObj is false
    if (!todoObj.complete) {
    //it spits out the HTML for a card that has a red 'Done' button
      return `<div class="card m-1">
            <div class="card-body">
              ${todoObj.name}
              <button type="button" class="btn btn-danger">Done</button>
            </div >
          </div>`;
    }
  //if the 'if' statement isn't executed,
  //it's short-circuited and the function, by 
  //default, spits out a card with the task inside.
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
//loops through the array of objects 
todos.forEach((item) => {
  //to the HTML element block with id=app-todos, it reassigns and adds the 
  //evaluated result of card, passing in the current element of the array. 
    document.querySelector("#app-todos").innerHTML += card(item)
})