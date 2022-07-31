var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit', addItem);

//delete event
itemList.addEventListener('click', removeItem);

//filter event
filter.addEventListener('keyup', filterItems);

//Add item
function addItem(e){
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;
    

    //Crete new li element
    var li = document.createElement('li');

    //Add class
    li.className='list-group-item';
    
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create edit button element
    var editBtn = document.createElement('button');
    editBtn.className = 'btn';
    editBtn.append();

    //Create del buttom element
    var deleteBtn = document.createElement('button');

    //add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //append button to li
    li.appendChild(deleteBtn);
    
    //append li to list
    itemList.appendChild(li);
}

//Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//Filter items
function filterItems(e){
    // Convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get li's 
    var items=itemList.getElementsByTagName('li');
    // Convert to an Array
    Array.from(items).forEach(function(item){
        var itemName= item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
        }
    });
}