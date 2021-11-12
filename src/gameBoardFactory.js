import { makeShip } from "./shipFactory"


export const gameBoard=(ships)=>{
    let board=[];
    for(let i=0;i<10;i++){
        board[i]=[];
        for(let j=0;j<10;j++){
            board[i][j]='';
        }
    }
    let missed=[];
    let allSunk=false;
    let alreadyHit=[];
    
    function placeHorizontal(ship){
        let clean;
        do{
            clean=true;
            let rnd=Math.floor(Math.random()*10);
            let rnd2;
            do{
                rnd2=Math.floor(Math.random()*10);
            }while(rnd2+ship.getLength()>9)
            for(let i=rnd2;i<rnd2+ship.getLength();i++){
                if(board[rnd][i]!=''){
                    clean=false;
                    break;
                }
            }
            if(clean){
                let shipArr=ship.getHitPoints();
                let j=0;
                for(let i=rnd2;i<rnd2+ship.getLength();i++){
                    board[rnd][i]=shipArr[j];
                    ship.setCord(rnd,i,j);
                    j++;
                }
            }
        }while(!clean)
    };
    function placeVertical(ship){
        let clean;
        do{
            clean=true;
            let rnd=Math.floor(Math.random()*10);
            let rnd2;
            do{
                rnd2=Math.floor(Math.random()*10);
            }while(rnd2+ship.getLength()>9)
            for(let i=rnd2;i<rnd2+ship.getLength();i++){
                if(board[i][rnd]!=''){
                    clean=false;
                    break;
                }
            }
            if(clean){
                let shipArr=ship.getHitPoints();
                let j=0;
                for(let i=rnd2;i<rnd2+ship.getLength();i++){
                    board[i][rnd]=shipArr[j];
                    ship.setCord(i,rnd,j);
                    j++;
                }
            }
        }while(!clean)
    }
    for(let i=0;i<ships.length;i++){
        let rnd=Math.floor(Math.random()*2);
        
        if(rnd===1){
            placeHorizontal(ships[i]);
        }else{
            placeVertical(ships[i]);
        }

    }

    const receieveAttack=(x,y)=>{
        
        allSunk=true;
        for(let i=0;i<ships.length;i++){
            let ship=ships[i];
            let hitPoints=ship.getHitPoints();
            let coord=ship.getCord();
            coord.map(arr=>{
                if((arr[0]===x && arr[1]===y) && (hitPoints[arr[2]]==='0' ) ){
                    board[x][y]='x';                                      
                    alreadyHit.push([x,y]);
                    ships[i].hit(arr[2]); 
                }else{
                    if(missed.length===0){
                        missed.push([x,y]);
                    }else{
                        let missEqual=true;
                        missed.map(arr=>{
                                if((arr[0]===x) && (arr[1]===y)){
                                    missEqual=false;
                                }
                        });
                        if(missEqual){
                            missed.push([x,y]);
                        }
                    }
                                   
                }
            });
            
            if(!ships[i].isSunk()){
                allSunk=false;
            }

        };
      


    }
    const getAlreadyHit=()=>alreadyHit;
    const getAllSunk=()=>allSunk;
    const getMissed=()=>missed;
    const getBoard=()=>board;
    const getShips=()=>ships;

    return{getBoard,getMissed,receieveAttack,getAllSunk,getAlreadyHit,getShips};
}