let buttons=document.querySelectorAll(".btn");
let msg=document.querySelector("#msg");
let newBtn=document.querySelector("#new-btn");
let msgConvey=document.querySelector(".msg-convey")
let resetBtn=document.querySelector(".reset");
let heading=document.querySelector("h1");
 let player1="o";
 const winPattern=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
 ]
 const disableButtons=()=>{
    for(let box of buttons){
        box.disabled=true;
    }
 };
 const enableButtons=()=>{
    for(let box of buttons){
        box.disabled=false;
        box.innerText="";
    }
 }
 buttons.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(player1==="o"){
        box.innerText="O";
        player1="x";
        }
        else{
            box.innerText="X";
            player1="o";
        }
        box.disabled=true;
        checkWinner();
    })

    })
 
const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1=buttons[pattern[0]].innerText;
        let pos2=buttons[pattern[1]].innerText;
        let pos3=buttons[pattern[2]].innerText;

        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("you qon");
                callWinner(pos1);
            }
        }
    }
}
   
const callWinner=(winner)=>{
        msg.innerText="Congratulations! winner is "+winner
        msgConvey.classList.remove("hide");
        heading.style.marginTop="20px"
        
};
    
const newBtnFunc=()=>{
    player1="o";
    heading.style.marginTop="5px"
    enableButtons();
    msgConvey.classList.add("hide");
}

const resetBtnFunc=()=>{
    player1="o";
    heading.style.marginTop="5px"
    enableButtons();
    msgConvey.classList.add("hide");
}
newBtn.addEventListener("click",newBtnFunc)
resetBtn.addEventListener("click",resetBtnFunc);

