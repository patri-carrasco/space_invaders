import { Actor, IActor } from "./actors/Actor";

import {Canyon} from "./actors/Canyon"
import {Enemy} from "./actors/Enemy"

import {Bullet} from "./actors/Bullet"
import { FPSViewer } from "./actors/FPSViewer";
import {Barrier} from "./actors/Barrier"
import { MoveCanyon } from "./utils/KeyboardMap";

import {Game,createGame } from "./state/GameManager"
import { any } from "core-js/fn/promise";
import { convertToObject } from "typescript";

window.onload = () => {
	var canvas = document.getElementById("canvas") as HTMLCanvasElement;
	var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
	
	ctx.fillStyle = "gray";
	ctx.fillRect(0, 0, canvas.width, canvas.height);


	

	let fps = new FPSViewer({x: 5, y: 15 });
	let canyon = new Canyon({ x: 30, y: 965},MoveCanyon); 
	//let enemy = new Enemy({x:1,y:40})

	//let bullet = new Bullet ({x:100,y:100},{w:100,h:100})
	
	createGame()

	let enemyArray = [] 
	Game.matrixEnemy.forEach(e => enemyArray = [ ...enemyArray, ...e])
	let bulletArray = [] 
	
	//let actors: Array<IActor> = [fps,canyon,...enemyArray,...Game.barriers,...canyon.bulletCanyonArr];
	let actors: Array<IActor> = [fps,canyon,...canyon.bulletCanyonArr];
	let lastFrame = 0;

	const render = (time: number) => {
		let delta = (time - lastFrame) / 1000;

		lastFrame = time;
		actors.forEach((e) => {
			e.update(delta,canvas.width,canvas.height)
			//console.log("scripy",e)
		});
	
		// canyon.bulletCanyonArr.forEach(e =>{
		// 	console.log(e,e.position)
		// } )
		
	
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = "gray";
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		actors.forEach((e) => {
			//ctx.save();
			
			e.draw(delta, ctx);
	
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
					console.log("Space",e.key)
				}
				
			}
		});
	});

};