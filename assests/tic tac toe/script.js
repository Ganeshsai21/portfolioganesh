let boxes = document.querySelectorAll(".box");
let rsetbtn = document.querySelector(".reset");
let winner=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msg-container");
let newbtn=document.querySelector("#new-btn");
let turn0 = true;
let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];
const resetGame=()=>{
    let turn0 = true;
    
    enabled();
    msgcontainer.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box clicked");
        if (turn0) {
            box.innerText = "O";
            box.style.color="green";
            turn0 = false;
        } else {
            box.innerText = "X";
            box.style.color="red";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });

});
let disabled=()=>{
    for(let box of boxes)
        box.disabled=true;
};

let enabled=()=>{
    for(let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
};


let showWinner=(winner)=>{
   msg.innerText=`Congratualtions Winner is ${winner}`;
   msgcontainer.classList.remove("hide");
   disabled();
};

const checkWinner = () => {
    for (let pattern of winningPattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showWinner(pos1val);
            }
        }

    }
};

newbtn.addEventListener("click",resetGame);
rsetbtn.addEventListener("click",resetGame);


// rsetbtn.addEventListener("click",()=>{
//     console.log("clicked");
//     document.getElementsByClassName(".box").clear();
// });