import { IActor } from "../actors/Actor";
import { Barrier } from "../actors/Barrier";
import { Enemy} from "../actors/Enemy"


class GameManager{
  
    // barriers: Barrier[];
    // enemies:Enemy[];
    // matrixEnemy: Enemy[]
    // size: number;
    // sep: number;
    constructor(actor){
        // let barriers: Barrier[]= []
        // let enemies : Enemy[]= []
        // let matrixEnemy:Enemy[]= []
        let num = 5;
        let size = 105;
        let sep = 200;
        let col= 5;
        let row = 5;
        let matrixEnemy = []
        let barriers = []
        for(let i=0; i<=num;i++ ){
           
            barriers.push(
                new Barrier({x:1*i*size+sep*i, y:1024-250})
            )
            
        }
        this.barriers = barriers;
        // for(let i=0;i<=col;i++){
        //     matrixEnemy[i] = []
        //     for(let j=0;j<=row;j++)
        //     {
        //         if (i % 2 === 0) {
        //             matrixEnemy[i][j]= j % 2 === 0 ? 1 : 0;
        //         } else {
        //             matrixEnemy[i][j]= j % 2 !== 0 ? 1 : 0;
        //         }
        //     }
        // }
        for(let i=0;i<=col;i++){
            matrixEnemy[i] = [];
            for(let j=0;j<=row;j++)
            {
            //    if (j % 2 === 0) {
            //         matrixEnemy[i][j]=new Enemy({x:i * 60 +1,y:j * 60 + 120});
                    
            //     } else {
                    matrixEnemy[i][j]= new Enemy({x:i * 60 +1,y:j * 60 + 120});
                // }
            }
        }
        this.matrixEnemy=matrixEnemy;
        
     
    }
   
}

export let Game;

export const createGame = ()=>{
    Game= new GameManager()
}



