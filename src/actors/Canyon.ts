import { Actor, IActor } from "./Actor";
import { Point } from "../types/Point";

import { checkLimits } from "../utils/CheckLimits";
import { CanyonKey, KeyboardMap } from "../utils/KeyboardMap";
import { convertToObject } from "typescript";
//const ferrariImg = require("../assets/ferrari.png");

type Size = { w: number; h: number };

let canyonSpeed = 15;

export class Canyon extends Actor implements IActor {
	canyonSize: Size;
	canyonColor: string;
	
	canyonSpeed: number;
	
	keyboardMap: KeyboardMap;
	constructor(
		initialPos: Point,
		keyboardMap: KeyboardMap,
		size: Size = { w: 50, h: 50 },
	) {
		super(initialPos);
		this.keyboardMap = keyboardMap;
		this.canyonSize = size;
		this.canyonColor = "green";
	
		this.canyonSpeed = canyonSpeed;
		

		// // Car image
		// this.image = new Image();
		// this.image.src = ferrariImg;
	}
	update(delta: number) {
		// let newPos: Point = {
		// 	x: this.position.x + this.canyonSpeed,
		// 	y: this.position.y,
		// };
		// if (checkLimits(newPos)) {
		// 	this.position = newPos;	
		// }	
	}
	draw(delta: number, ctx: CanvasRenderingContext2D) {
	
		ctx.fillStyle = this.canyonColor;
		ctx.fillRect(this.position.x,this.position.y, this.canyonSize.w, this.canyonSize.h);

	
		ctx.fill();
		ctx.stroke();
	}
	keyboard_event_down(key: string, ctx: CanvasRenderingContext2D) {
		let tecla = this.keyboardMap[key];
		if (tecla == CanyonKey.LEFT) {
			this.position.x -= this.canyonSpeed
			
		} else if (tecla == CanyonKey.RIGHT) {
			
			//this.canyonSpeed += 4;
			this.position.x += this.canyonSpeed
			
        } else if (tecla == CanyonKey.SPACE){
			console.log(tecla,CanyonKey.SPACE)
			this.canyonSpeed = 0;
			//TODO: función disparo

			ctx.beginPath();  
			ctx.moveTo(this.position.x, this.position.y);    
			ctx.lineTo(this.position.x, 900);  
			ctx.strokeStyle = '#ff0000';
      		ctx.stroke();
		
			

		}
	}
	// keyboard_event_up(key: string) {
	// 	let tecla = this.keyboardMap[key];
	// 	if (tecla == Carkey.UP) {
	// 		this.carAcceleration = 0;
	// 	} else if (tecla == Carkey.DOWN) {
	// 		this.carAcceleration = 0;
	// 	}
	// }
}