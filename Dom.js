var form=document.getElementById('addForm');
var addList=document.getElementById('items');

form.addEventListener('submit',addItems);
addList.addEventListener('click',removeItems);



function addItems(e){
   e.preventDefault();

    // receive input value;
    var inputValue=document.getElementById('item').value;

    // create element
    var li=document.createElement('li');
    

    //create class
    li.className="list-group-item";

    // add text node with input value
    li.appendChild(document.createTextNode(inputValue));

    //create delete button
    var delbtn=document.createElement('button');

    //create class
    delbtn.className='btn btn-danger btn-sm float-right delete';

    //add text node
    delbtn.appendChild(document.createTextNode('X'));


    //append button to li
   
    

    

        //create edit button 
        var editbtn=document.createElement('button');

        //add class
        editbtn.className='btn btn-danger btn-sm float-right delete';
   
        //add text node
        editbtn.appendChild(document.createTextNode('Edit'));
   
        //merge with parent i.e li
        li.appendChild(editbtn);
        li.appendChild(delbtn);
   
     //append li to list
     addList.appendChild(li);
    
 
}
    

function removeItems(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        if(confirm('Are yor sure?')){
            var li=e.target.parentElement;
            addList.removeChild(li);
        }

    }
}



    




