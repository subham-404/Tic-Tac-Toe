let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let mssgContainer = document.querySelector(".mssg-container");
let msssgContainer = document.querySelector(".msssg-container");
let msg = document.querySelector("#msg");
let mssg = document.querySelector("#mssg");
let count = 0;
msssgContainer.classList.remove("hide");

let turn0 = true;

const winpats = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

const resetGame = () => {
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    mssgContainer.classList.add("hide");    
    msssgContainer.classList.remove("hide");
    count = 0;
}

const showDraw = () => {
    mssg.innerText = `The Match is DRAW!`;
    mssgContainer.classList.remove("hide");    
    msssgContainer.classList.add("hide");
    disableBoxes();
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0) {//Player0
            box.innerText = "0";
            turn0 = false;
            count+=1;
        }
        else{//PlayerX
            box.innerText = "X";
            turn0 = true;
            count+=1;
        }
        box.disabled="true";
        let a = checkWinner();
        if(count == 9 && a == false)
        {
            showDraw();
        }
    });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled= false;
        box.innerText="";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}!!`;
    msgContainer.classList.remove("hide");   
    msssgContainer.classList.add("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(pattern of winpats){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val
                === pos3Val){
                    showWinner(pos1Val);
                }            
            }    
    }  
    return false;  
}


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

