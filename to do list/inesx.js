var btn = document.getElementById('btn');
var input = document.getElementById('inp');
var list = document.getElementById('list');

function CreateTask(){
    if (input.value === ''){
        alert ('Input a task');
    }
    else {
        let li = document.createElement('li');
        let p = document.createElement('p');
        list.appendChild(li);
        
        li.innerHTML = input.value.charAt(0).toUpperCase() + input.value.slice(1) ;
        // let checker = document.createElement('div');
        
        let span = document.createElement('span');
        span.innerText = '\u00d7';
        li.appendChild(span);
        // li.appendChild(checker);
            SaveTask();
    }

    input.value = '';
}

    list.addEventListener("click", function(e) {
        
        if ( e.target.tagName === "LI" ){
           
            e.target.classList.toggle("checked");
            SaveTask();
        }

        if (e.target.tagName === 'SPAN'){
            e.target.parentElement.remove();
            SaveTask();
        }
    }, false)
    

    function SaveTask(){
        localStorage.setItem("data", list.innerHTML);
    }

    function getData(){
        list.innerHTML = localStorage.getItem("data");
    }

    getData()

document.addEventListener('DOMContentLoaded', function(){
    
    document.getElementById('darkModeToggle').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        let theme = 'light-mode'
 
         if (document.body.classList.contains('dark-mode')){
 theme = 'dark-mode'
         }
     })
})
