
import { isConstructorDeclaration } from "typescript";
import { Barrier } from "../actors/Barrier";
import { Enemy} from "../actors/Enemy"
import { Point} from "../types/Point"
import {Bullet} from "../actors/Bullet"


class GameManager{
  
    constructor(bullets){

        let num = 5;
        let size = 105;
        let sep = 200;
        let col= 5;
        let row = 5;
        let matrixEnemy = []
        let arrbullets = bullets
        let barriers = []
        
        
        for(let i=0; i<=num;i++ ){
           
            barriers.push(
                new Barrier({x:1*i*size+sep*i, y:1024-250})
            )
            
        }
        this.barriers = barriers;
      
        for(let i=0;i<=col;i++){
            matrixEnemy[i] = [];
            for(let j=0;j<=row;j++)
            {
                    matrixEnemy[i][j]= new Enemy({x:i * 60 +1,y:j * 60 + 120},bullets);
            }
        }
        this.matrixEnemy=matrixEnemy;
        
    
    }
   
   
}

export let Game;

export const createGame = (bullets)=>{
    Game= new GameManager(bullets)
}

 

