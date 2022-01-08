
import { Actor, IActor } from "../actors/Actor";

import {Canyon} from "../actors/Canyon"
import {Enemy} from "../actors/Enemy"

import {Bullet} from "../actors/Bullet"
import { FPSViewer } from "../actors/FPSViewer";
import {Barrier} from "../actors/Barrier"
import { MoveCanyon } from "../utils/KeyboardMap";

import {Game,createGame } from "../state/GameManager"



export const resetGame=()=>{
    let fps = new FPSViewer({x: 5, y: 15 });
    let canyon = new Canyon({ x: 30, y: 965},MoveCanyon); 
    let bullets = []
    for (let i = 0; i<100; i++) {
        bullets.push( new Bullet ({x:30,y:0},{w:10,h:10}))
    }
    let currentShoot = 0

    createGame(bullets)
    let enemyArray = [] 
    Game.matrixEnemy.forEach(e => enemyArray = [ ...enemyArray, ...e])
    let actors = [fps,canyon,...enemyArray,...bullets];
}