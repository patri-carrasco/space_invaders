import { Actor, IActor } from "./actors/Actor";

import {Canyon} from "./actors/Canyon"
import {Enemy} from "./actors/Enemy"
import { FPSViewer } from "./actors/FPSViewer";
import {Barrier} from "./actors/Barrier"
import { MoveCanyon } from "./utils/KeyboardMap";

import {Game,createGame } from "./state/GameManager"

window.onload = () => {
	var canvas = document.getElementById("canvas") as HTMLCanvasElement;
	var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
	
	ctx.fillStyle = "gray";
	ctx.fillRect(0, 0, canvas.width, canvas.height);


	

	let fps = new FPSViewer({x: 5, y: 15 });
	let canyon = new Canyon({ x: 30, y: 965},MoveCanyon); 
	let enemy = new Enemy({x:1,y:40})

	//TODO: Hacer las barreras decentemente 3 por lo menos
	let barrier = new Barrier({x:30, y:canvas.height-250})
	
	createGame(canyon)

	let actors: Array<IActor> = [fps,canyon,enemy,...Game.barriers];

	let lastFrame = 0;
	const render = (time: number) => {
		let delta = (time - lastFrame) / 1000;

		lastFrame = time;
		actors.forEach((e) => e.update(delta,canvas.width,canvas.height));
		
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
				
			}
		});
	});
	// document.body.addEventListener("keyup", (e) => {
	// 	// console.log(e.key);
	// 	actors.forEach((actor) => {
	// 		if (actor.keyboard_event_up) {
	// 			actor.keyboard_event_up(e.key);
	// 		}
	// 	});
	// });
};