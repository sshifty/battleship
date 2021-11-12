
export  const player=()=>{
    
    let turn=true;
    let rndX,rndY;
    let lastHit=[];
    let check=false;
    
    
    const guessShip=(board)=>{        
        let alreadyHit=board.getAlreadyHit();
        let missed=board.getMissed();
        let ok;
        
        if(lastHit.length!=0 && board.getBoard()[lastHit[0]][lastHit[1]]==='x'){
            check=true;            
            let rnd=Math.floor(Math.random()*4);
            if(!rnd){
                rndX=++lastHit[0];
                rndY=lastHit[1];
            }else if(rnd===1){
                rndX=--lastHit[0];
                rndY=lastHit[1];
            }else if(rnd===2){
                rndX=lastHit[0];
                rndY=++lastHit[1];
            }else{
                rndX=lastHit[0];
                rndY=--lastHit[1];
            }
        }
        if(check){
            if(rndX>9 || rndX<0 || rndY>9 || rndY<0){
                check=false;
            }
        }
            do {
                ok = true;
                if(!check){
                    rndX = Math.floor(Math.random() * 9);
                    rndY = Math.floor(Math.random() * 9);
                }
                
                
                alreadyHit.map((arr) => {
                  if (arr[0] === rndX && arr[1] === rndY) {                    
                    ok= false;
                    check=false;
                  }
                });
      
                missed.map((arr) => {
                  if (arr[0] === rndX && arr[1] === rndY) {                    
                   ok= false;
                   check=false;
                  }
                });
               
              } while (ok === false);
       check=false;
       lastHit=[rndX,rndY];       
       
       return [rndX,rndY];

    }   

    const playerClick=(board,x,y)=>{
        let alreadyHit=board.getAlreadyHit();
        let missed=board.getMissed();
        let ok = true;       
        alreadyHit.map((arr) => {
          if ((arr[0] === x) && (arr[1] === y)) {
           ok=false;
          }
        });
        missed.map((arr) => {
          if ((arr[0] === x) && (arr[1] === y)) {
            ok= false;
          }
        });   
        
        return ok;
         
    }

    const setTurn=value=>{
        turn=value;
    }
    const getTurn=()=>turn;

    return {setTurn,getTurn,guessShip,playerClick};
}