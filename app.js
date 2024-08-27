let Boxes          = document.querySelectorAll(".box");
let Reset          = document.querySelectorAll("#reset");
let NewG           = document.querySelector("#newG");
let msgContainer   = document.querySelector(".msg-container");
let msg            = document.querySelector("#winner");
let reset          = document.querySelector('#reset');

let TurnO  = true;

const WinPat = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

Boxes.forEach((Box)=>{
    Box.addEventListener("click",()=>{
        //console.log("box was clicked");
        if(TurnO === true){
            Box.innerText = "O";
            TurnO = false;
        }else{
            Box.innerText = "X";
            TurnO = true;
        }
        Box.disabled = true;
        checkWinner();
    })
})

checkWinner     = function(){
    for(let Pattern of WinPat){
        let value1 = Boxes[Pattern[0]].innerText;
        let value2 = Boxes[Pattern[1]].innerText;
        let value3 = Boxes[Pattern[2]].innerText;

        if(value1 != '' && value2 != '' && value3 != ''){
            if(value1 === value2 && value2 === value3){
                //console.log("Winner");
                showWinner(value1);
            }
        }
    }
}

showWinner      = function(value){
    msg.innerText     = `conratulations, Winner is ${value}`;
    msgContainer.classList.remove('hide');
    disabledBox();
}
 
disabledBox    = function(){
    for(let Box of Boxes){
        Box.disabled  = true;
    }
}

newGame    = function(){
    for(let Box of Boxes){
        Box.disabled  = false;
        Box.innerText = "";
    }
}


resetGame       = function(){
    TurnO  = true;
    newGame();
    msgContainer.classList.add('hide');
}

NewG.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);