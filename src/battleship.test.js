import { makeShip } from "./shipFactory";
import {gameBoard} from './gameBoardFactory';


test('Sunk battlehsip',()=>{
    const ship1=makeShip(3);
    ship1.hit(0);
    ship1.hit(1);   
    ship1.hit(2); 
      
    
    expect(ship1.isSunk()).toBe(true);
});

test('Bad hitpoints',()=>{
    const ship2=makeShip(2);
    ship2.hit(1); 
    console.log(ship2.getHitPoints())        
    expect(()=>ship2.hit(1)).toThrow('Can\'t hit this position')
});

test('gameboard',()=>{
    const ship1=makeShip(3);
    const ship2=makeShip(4);
    const ship3=makeShip(5);
    const ship4=makeShip(2);
    const ship5=makeShip(1);
    let board=gameBoard(ship1,ship2,ship3,ship4,ship5);    
    console.log(board.getBoard(),'\n',ship1.getCord(),'\n',ship2.getCord(),'\n',ship3.getCord(),'\n',ship4.getCord(),'\n',ship5.getCord())
    board.receieveAttack(2,3);
    board.receieveAttack(4,5);
    
})

