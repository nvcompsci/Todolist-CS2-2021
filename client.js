console.log("hello world!")

//let number = 3
//create variable for button element
let $button = document.getElementById('addTodo')
let $textBox = document.getElementById('userInput')
let $list = document.getElementById('list')

//set function as click handler
$button.onclick = addTodo

function addTodo() {
    console.log("button clicked")
    $button.style.backgroundColor = 'red'
    
    //get text from textbox
    let newTodoText = $textBox.value
    //create new list item
    let $newTodo = document.createElement('li')
    $newTodo.innerHTML = newTodoText
    //put list item in list
    $list.append($newTodo)
}

//variable for h1

//set changeColor function as click handler

//define changeColor function
function changeColor() {
    //set color (Text) of h1 to yellow

}