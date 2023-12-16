let boxes=document.querySelectorAll(".box");
let resetEle=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg")
//player X/player O

let turnO=true;

let btnCount=0;
//syntax of arrays1D and arrays2D

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{ //here box is iterator obj. type
    box.addEventListener("click",()=>{
        // console.log("Box Was Clicked!")
        if(turnO==true){
            box.innerText="O";
            turnO=false;
            box.style.color="black";
        }else{
            box.innerText="X";
            turnO=true;
            box.style.color="#b0413e";
        }
        box.disabled=true;
        checkWinner();
        btnCount++;
        if(btnCount==9){
            drawMsg();
        }
    })
})

const resetgame=function(){
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
        turnO=true;
        btnCount=0;
    })
}

resetEle.addEventListener("click",resetgame);


// const checkWinner= function(){
// }
newGameBtn.addEventListener("click",function(){
    resetgame();
    msgContainer.classList.add("hide");
    resetEle.style.display="initial";
});

const checkWinner=()=>{
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
            if(pos1Val===pos2Val&&pos2Val===pos3Val){
                console.log(`Winner is ${pos1Val}`);
                showWinner(pos1Val);
                disableboxes();
                hide_reset_btn();
            }
        }
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}

const drawMsg=()=>{
    msg.innerText="The Game is Draw , Start a New Game";
    msgContainer.classList.remove("hide")
}
const disableboxes=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}

const hide_reset_btn=()=>{
    resetEle.style.display="none";
}
//these both are same 
// function checkWinner(){

// }

// boxes.forEach(function(box){
//     box.addEventListener("click",function(){
        
//     })
// })