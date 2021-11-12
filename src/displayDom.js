import { makeShip } from "./shipFactory";
import { gameBoard } from "./gameBoardFactory";
import image from './github.png';

export const displayDom=function(playerDeck,compDeck,clickEvent){
    const playerBoard=document.querySelector(".player-board");
    const compBoard=document.querySelector(".comp-board");
    const board=document.querySelector(".board");
    const img=document.querySelector(".pics");
    img.src=image;
    
    playerBoard.innerHTML='';
    compBoard.innerHTML='';
    playerBoard.style.setProperty('--gridRow',10);
    compBoard.style.setProperty('--gridRow',10);
    compBoard.style.setProperty('--gridCol',10);
    playerBoard.style.setProperty('--gridCol',10);
    
    //comp board
    for(let i=0;i<10;i++){
        for(let j=0;j<10;j++){
            let newDiv=document.createElement("div"); 
            newDiv.addEventListener('click',clickEvent);
            newDiv.classList.add("compcell");
            newDiv.setAttribute("data-X",i);
            newDiv.setAttribute("data-Y",j);            
            compBoard.appendChild(newDiv);                                                
            if(compDeck.getBoard()[i][j]==='x'){
                newDiv.classList.add('clicked')
            }
            
        }
        
             
    }; 
    //player board
    for(let i=0;i<10;i++){
        for(let j=0;j<10;j++){
            let newDiv=document.createElement("div");             
            newDiv.setAttribute("data-X",i);
            newDiv.setAttribute("data-Y",j);
            playerBoard.appendChild(newDiv);
            if(playerDeck.getBoard()[i][j]==='0'){
                newDiv.classList.add("cleanShip");
            }
        };
             
    }; 


};