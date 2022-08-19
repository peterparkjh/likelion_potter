window.onload = function(){

let today = new Date();   

let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜

let ddate =[year + '/' + month + '/' + date];

let addToDo = document.getElementById('add-button');
let inputBox = document.getElementById('schedule'); 
let toDoList = document.getElementsByClassName('table__table');
//함수는 엔터키, 추가버튼클릭

function table(){  
    let a = document.createElement('tr');

    let aa = document.createElement('th');
    let bb = document.createElement('th');
    let cc = document.createElement('div');

    let date = document.createTextNode(ddate);
    let content = document.createTextNode(inputBox.value);
    let removeButton = document.createElement('input');
    removeButton.type="checkbox";

    aa.appendChild( date );   
    bb.appendChild( content );
    cc.appendChild( removeButton );


    a.appendChild(aa);
    a.appendChild(bb);
    a.appendChild(cc);

    toDoList[0].appendChild(a);

    removeButton.addEventListener('click', (event) => {
        
        let okay;
        okay = confirm("제거하시겠습니까?");

        if(okay){
            a.remove(event.currentTarget.parentNode)
        }

        else{
            removeButton.checked = false;
        }
    })
}

inputBox.addEventListener('keypress', (event) => {
        const ENTER = 13
        if (event.keyCode === ENTER)
            table();
    })


addToDo.addEventListener('click' , table )
}
