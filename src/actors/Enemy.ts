import { Actor, IActor } from "./Actor";
import { Point } from "../types/Point";

import { checkLimits } from "../utils/CheckLimits";
//import { CanyonKey, KeyboardMap } from "../utils/KeyboardMap";
import { convertToObject } from "typescript";

//const ferrariImg = require("../assets/ferrari.png");

type Size = { w: number; h: number };
// Aquí podemos cambiar la velocidad del enemigo.
let speedEnemy = 6;

export class Enemy extends Actor implements IActor {
	enemySize: Size;
	enemyColor: string;
	
	enemySpeed: number;
	direction: number;
	constructor(
		initialPos: Point,
		
		size: Size = { w: 50, h: 50 },
	) {
		
		super(initialPos);
		this.enemySize = size;
		this.enemyColor = "red";
		this.direction= 1;
		this.enemySpeed = speedEnemy*this.direction; 
		// // Car image
		// this.image = new Image();
		// this.image.src = ferrariImg;
	}
	update(delta: number,sizeCanvas:number) {
		
		let newPos: Point = {
			x: this.position.x + this.enemySpeed,
			y: this.position.y,
		};
		
		if (checkLimits(newPos,this.enemySize.w,sizeCanvas)) {
			this.position = newPos;	 
			        
		}
		if(this.position.x >=sizeCanvas-this.enemySize.w- this.enemySpeed || this.position.x <=1){
		
			this.direction = this.position.x >=sizeCanvas-this.enemySize.w-this.enemySpeed  ? -1 : 1
			this.enemySpeed = speedEnemy*this.direction;
			this.position.y+=50;
		}
	}
	draw(delta: number, ctx: CanvasRenderingContext2D) {
	
		ctx.fillStyle = this.enemyColor;
		ctx.fillRect(this.position.x,this.position.y, this.enemySize.w, this.enemySize.h);

		
		ctx.fill();
		ctx.stroke();
	}

}