
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

//creating variables assigned to strings of HTML that will be render through the renderToDom() function. 
const startButton = `<div class="form-floating mb-3">
<button type="submit" class="btn btn-success" id="start-btn">START APP</button>`

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

const filterBtns = `<button type="button" class="btn btn-danger btn-sm">
          Incomplete
        </button>
        <button type="button" class="btn btn-success btn-sm">
          Complete
        </button>`;


//Function that is responsible for adding items to the todo list both under the hood and graphically. 
function addTodos(input) {
          todos.push(
            {
              name: `${input}`, 
              complete: false 
            }
          )
          return document.querySelector("#app-todos").innerHTML += `<div class="card m-1">
          <div class="card-body">
            ${input}
          <button type="button" class="btn btn-danger">Done</button>
          </div >
        </div>`;
        } 
 
//Function responsible for rendering to-do items onto the DOM. Will render them differently depending on their 'Complete' property.        
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

//Function responsible for adding to-do cards in #app-todos onto the DOM. There's a little complexity behind this. 
const cardsOnDom = () => {
          let domString = "";
          //loops through the todos array and adds + reassigns the domString  
          for (let i = 0; i < todos.length; i++) {
            domString += card(todos[i]); 
          }
          renderToDom("#app-todos", domString); 
        }
        
//creating a function to keep things DRY to render elements to the DOM
const renderToDom  = (divId, html) => {
  document.querySelector(divId).innerHTML = html; 
  }
//Renders the start button onto the DOM. When pushed, this start button will invoke renderToDom function on needed elements. 
renderToDom('#app-form', startButton); 
document
  .querySelector("#start-btn")
  .addEventListener('click', () => {
    renderToDom("#app-form", form)
    renderToDom("#app-filter", filterBtns)
    cardsOnDom()
  })

//Event listener that listens for the #app-form form to be submitted. Pushes the newly added value to the array using a cbf. 
document
  .querySelector("#app-form")
  .addEventListener('submit', (event) => {
    event.preventDefault(); //always present when submitting forms to prevent page refresh. 
    addTodos(document.querySelector("#todo-item").value) //function that adds onto todos array.
  })


  ///////////////////////////
// LEGACY ANNOTATIONS AND ATTRIBUTES BELOW //
  ///////////////////////////

//LEGACY ATTRIBUTES
//onclick="addTodos(document.querySelector("#todo-item").value)"
//onsubmit="addTodos(document.querySelector(`#todo-item`).value);return false"

// renderToDom("#app-form", form);
// renderToDom("#app-filter", filterBtns); 


// calling upon the Document obejct and invoking the 
// querySelector method. We're accessing the id app-form's HTML and setting 
// it equal to the constant we set earlier holding the HTML. 
// document.querySelector("#app-form").innerHTML = form;
// document.querySelector("#app-filter").innerHTML = filterBtns; 

//Creating a function which acts when the Add Todo button is selected
//build a function that, when the 'add task' button is pushed, it adds the
//input to the todos object

//you need an "onclick" attribute in the proper place in the HTML

//you need to create a function that takes the input (which we dont know yet)
//and adds it to the array
//creating a function 'card' which accepts a param of an object - the todoObj



// document.querySelector("#app-todos").innerHTML = card(todos[0]); 

// for (let i === 0; i < todos.length; i++) {
//     document.querySelector("#app-todos").innerHTML += card[i]; 
// }
//loops through the array of objects 
// todos.forEach((item) => {
//   //to the HTML element block with id=app-todos, it reassigns and adds the 
//   //evaluated result of card, passing in the current element of the array. 
//     document.querySelector("#app-todos").innerHTML += addTodos()
// })