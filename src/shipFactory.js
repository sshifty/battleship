export const makeShip=(length)=>{

    let hitPoints=[];
    let coordinates=[];
    for(let i=0;i<length;i++){
        hitPoints[i]="0";
    }
    const hit=(pos)=>{
        if((pos<0 || pos>length-1) || (hitPoints[pos]==='x')){
            throw new TypeError('Can\'t hit this position');
        }else{
            hitPoints[pos]="x";
        }        
        
    }
    const setCord=(x,y,j)=>{
        coordinates.push([x,y,j]);
    };
    const getCord=()=>coordinates;
    const getLength=()=>length;
    const getHitPoints=()=>hitPoints;
    const isSunk=()=>{
        let sunk=true;
        for(let i=0;i<length;i++){
            if(hitPoints[i]!="x"){
                sunk=false;
                break;
            }
        }
        return sunk;
    }
    return {hit,isSunk,getHitPoints,getLength,setCord,getCord}
}