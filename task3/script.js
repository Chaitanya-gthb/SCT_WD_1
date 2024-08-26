let boxes = document.querySelectorAll(".box");
let game = document.querySelector(".game");
let msg = document.querySelector(".msg");
let msgbox = document.querySelector(".msgbox");
let newbtn = document.querySelector("#btnnew");
let resetbtn = document.querySelector("#btn");
let turnO =true;

let winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

let boxen = ()=> {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText="";
    }
}
let resetgame = () => {
    turnO =true;
    boxen();
    msg.innerText = "";
};



boxes.forEach( (box)=> {
    box.addEventListener("click", ()=> {
        if (turnO == true) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        showWinner();
    });
});


let diss = () => {
    for (let box of boxes) {
        box.disabled=true;
    }
}


let afterWin = (win)=> {
    msg.innerText = `CONGRATS!! , WINNER IS ${win}`;
    diss();
}

let showWinner = ()=> {
    for (let pos of winPattern) {
        let pos1 = boxes[pos[0]].innerText;
        let pos2 = boxes[pos[1]].innerText;
        let pos3 = boxes[pos[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                console.log("WINNER");
                afterWin(pos1);
            }
        }
    }

}

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
