import { IActor } from "../actors/Actor";
import { Barrier } from "../actors/Barrier";



class GameManager{
  
    barriers: Barrier[];
    size: number;
    sep: number;
    constructor(actor:IActor){
        let barriers: Barrier[]= []
        let num = 3;
       let size = 105;
        let sep = 200;
        for(let i=0; i<=num;i++ ){
            barriers.push(
                new Barrier({x:1*i*size+sep*i, y:1024-250})
            )
            
        }
        
        this.barriers = barriers;
     
    }
   
}

export let Game:GameManager;

export const createGame = (actor:IActor)=>{
    Game= new GameManager(actor)
}



