import { Actor, IActor } from "./actors/Actor";

import {Canyon} from "./actors/Canyon"
import {Enemy} from "./actors/Enemy"

import {Bullet} from "./actors/Bullet"
import { FPSViewer } from "./actors/FPSViewer";
import {Barrier} from "./actors/Barrier"
import { MoveCanyon } from "./utils/KeyboardMap";
import{resetGame} from "./utils/ResetGame"

import {Game,createGame } from "./state/GameManager"



window.onload = () => {
	var canvas = document.getElementById("canvas") as HTMLCanvasElement;
	var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
	
	ctx.fillStyle = "gray";
	ctx.fillRect(0, 0, canvas.width, canvas.height);


	let fps = new FPSViewer({x: 5, y: 15 });
	let canyon = new Canyon({ x: 30, y: 965},MoveCanyon); 
	//let enemy = new Enemy({x:1,y:40})
	//let bullet = new Bullet ({x:30,y:910},{w:10,h:10})
	
	// bullet :Bullet 
	let bullets = []
	for (let i = 0; i<100; i++) {
		bullets.push( new Bullet ({x:30,y:-1},{w:10,h:10}))
	}
	let currentShoot = 0
	

	createGame(bullets)

	let enemyArray = [] 

	Game.matrixEnemy.forEach(e => enemyArray = [ ...enemyArray, ...e])

	  
	let actors: Array<IActor> = [fps,canyon,...enemyArray,...Game.barriers,...bullets];
	
	let lastFrame = 0;

	const render = (time: number) => {
		
		let delta = (time - lastFrame) / 1000;

		lastFrame = time;
		
		actors.forEach((e) => {
			
			e.update(delta,canvas.width,canvas.height)
			if(e.gameOver=='Enter'){
				fps = new FPSViewer({x: 5, y: 15 });
				canyon = new Canyon({ x: 30, y: 965},MoveCanyon); 
				bullets = []
				for (let i = 0; i<100; i++) {
					bullets.push( new Bullet ({x:30,y:0},{w:10,h:10}))
				}
				let currentShoot = 0
			
				createGame(bullets)
				enemyArray = [] 
				Game.matrixEnemy.forEach(e => enemyArray = [ ...enemyArray, ...e])
				actors = [fps,canyon,...enemyArray,...Game.barriers,...bullets];
				//resetGame();
			}
			
		});
	
		
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = "gray";
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		actors.forEach((e) => {
			//ctx.save();
			
			e.draw(ctx,delta,);
	
			//ctx.restore();
		});


		
		window.requestAnimationFrame(render);
	};

	window.requestAnimationFrame(render);

	document.body.addEventListener("keydown", (e) => {
		
		actors.forEach((actor) => {
			if (actor.keyboard_event_down) {
				actor.keyboard_event_down(e.key,ctx);
			
				if (e.key == " "){
					bullets[currentShoot].position=canyon.position
					currentShoot = currentShoot < 100 ? currentShoot + 1 : 0
					
				
				}
			}
			
		});

	});
	
	document.body.addEventListener("keydown", (e) => {
					
			if(e.key=='Enter'){
				fps = new FPSViewer({x: 5, y: 15 });
				canyon = new Canyon({ x: 30, y: 965},MoveCanyon); 
				bullets = []
				for (let i = 0; i<100; i++) {
					bullets.push( new Bullet ({x:30,y:0},{w:10,h:10}))
				}
				let currentShoot = 0
			
				createGame(bullets)
				enemyArray = [] 
				Game.matrixEnemy.forEach(e => enemyArray = [ ...enemyArray, ...e])
				actors = [fps,canyon,...enemyArray,...Game.barriers,...bullets];
				//resetGame()
			}
			
	});
};