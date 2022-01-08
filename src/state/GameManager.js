import { Actor, IActor } from "../actors/Actor";
import { Barrier } from "../actors/Barrier";
import { Enemy} from "../actors/Enemy"
import {Bullet} from "../actors/Bullet"
import {Canyon} from "../actors/Canyon"

class GameManager{
  
    constructor(bullets){

        let num = 5;
        let size = 105;
        let sep = 200;
        let col= 5;
        let row = 5;
        let matrixEnemy = []
        let barriers = []
        //let canyon= actor
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
                    matrixEnemy[i][j]= new Enemy({x:i * 60 +1,y:j * 60 + 120});
            }
        }
        this.matrixEnemy=matrixEnemy;
        
        for(let i=0;i<=3;i++){
            
        }
            
    }
   
}

export let Game;

export const createGame = (bullets)=>{
    Game= new GameManager(bullets)
}
export const shootBullet = (position)=>{
  
    console.log("game",position)
    let bullet = new Bullet(position)
    
    console.log("game",bullet)
}



