const body = document.querySelector('body')
let isLoading = true;
let allLists = []
const allItemsList = document.querySelector('.allItems');
const loaderDiv = document.querySelector('.loader');
const submitButton = document.querySelector('#submitbutton');
const textfield = document.querySelector('#input-text');
const allItemsListBody = document.createElement('ul');
allItemsListBody.classList.add("list-group")

function render(){

    // body.innerHTML ="";
    if(isLoading){

        showLoader();
    }
    else{
        showData();
    }
}

render()

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => {
      isLoading = false;
      allLists=[...json]
      removeLoader()
      render()
});

function createLoader(){
    //create a loader
    // const loaderDiv = document.createElement('div');
    const textNode = document.createElement('p');
    textNode.textContent = "Loading";
    loaderDiv.appendChild(textNode);
    return loaderDiv
}

function showLoader(){
    const loaderElement = createLoader();
    body.appendChild(loaderElement)
    
}

function removeLoader(){
    loaderDiv.innerHTML = "";
}


function showData(){

    

    allLists.forEach((todoItem)=>{
        const newListitem = createNewListItem(todoItem.title,todoItem.completed,todoItem.id);
        allItemsListBody.appendChild(newListitem);
    })

    allItemsList.appendChild(allItemsListBody)

}

function deleteClick(){

    let deleteId = this.getAttribute('delete-button-id');

    console.log(`Delete Click with ID:${deleteId}`);
}

function editClick(){

    let editId = this.getAttribute('edit-button-id');

    console.log(`Edit Click with ID:${editId}`)
}

function createNewListItem(title,completed,id){
    const newTodoItem = document.createElement('li');
    newTodoItem.classList.add('list-group-item');
    newTodoItem.classList.add('list-item-css');
    // newTodoItem.style = 'color:black;font-size:30px;';
    newTodoItem.style.backgroundColor = (completed)?newTodoItem.classList.add("list-group-item-success"):newTodoItem.classList.add("list-group-item-danger");
    newTodoItem.innerHTML = `<p>${title}</p>`;

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('delete-button-id',id);
    deleteButton.classList.add("btn");
    deleteButton.classList.add("btn-outline-info");
    deleteButton.innerHTML = '<i class="bi bi-trash"></i>';
    deleteButton.addEventListener('click',deleteClick)


    const editButton = document.createElement('button');
    editButton.setAttribute('edit-button-id',id);
    editButton.classList.add("btn");
    editButton.classList.add("btn-outline-info");
    editButton.innerHTML = '<i class="bi bi-pen"></i>';
    editButton.addEventListener('click',editClick)

    newTodoItem.appendChild(editButton);
    newTodoItem.appendChild(deleteButton);

    

    return newTodoItem
}

function handleitem(){
    
    const newitem= {
        userId: '1243',
        id:'1234',
        title:textfield.value,
        completed:false
    }


    allItemsListBody.appendChild(createNewListItem(newitem.title,newitem.completed))
    // allItemsList.appendChild(newitem)
}

submitButton.addEventListener('click',handleitem)




