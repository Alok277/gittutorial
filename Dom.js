var form=document.getElementById('addForm');
var addList=document.getElementById('items');
var filter=document.getElementById('filter');

form.addEventListener('submit',addItems);
addList.addEventListener('click',removeItems);
filter.addEventListener('keyup',filterItems);



function addItems(e){
   e.preventDefault();

    // receive input value;
    var inputValue=document.getElementById('item').value;
   
    // create element
    var li=document.createElement('li');
    

    //create class
    li.className="list-group-item";

   

     // receive input value;
     var inputValue2=document.getElementById('item2').value;
   
     // create element
     var li=document.createElement('li');
     
 
     //create class
     li.className="list-group-item";
 
     // add text node with input value
     li.appendChild(document.createTextNode(inputValue + inputValue2));

  


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

// filter function
function filterItems(e){
    // receive text
    var text=e.target.value.toLowerCase();
    
    //get lis
    var items=addList.getElementsByTagName('li');
    
    
    //convert into array
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        var itemName2=item.childNodes[1].textContent;
        
        if(itemName.toLowerCase().indexOf(text)!=-1 || itemName2.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    });

}
