import { Actor, IActor } from "./Actor";
import { Point } from "../types/Point";

import { checkLimits } from "../utils/checkLimits";
//import { CanyonKey, KeyboardMap } from "../utils/KeyboardMap";
import { convertToObject } from "typescript";
//const ferrariImg = require("../assets/ferrari.png");

type Size = { w: number; h: number };

export class Enemy extends Actor implements IActor {
	enemySize: Size;
	enemyColor: string;
	
	enemySpeed: number;
	
	constructor(
		initialPos: Point,
		
		size: Size = { w: 50, h: 50 },
	) {
		super(initialPos);
		
		this.enemySize = size;
		this.enemyColor = "red";
	
		this.enemySpeed = 1.5; // negativos
		

		// // Car image
		// this.image = new Image();
		// this.image.src = ferrariImg;
		console.log(initialPos,this.position.x+20)
	}
	update(delta: number) {
		let newPos: Point = {
			x: this.position.x + this.enemySpeed,
			y: this.position.y,
		};
		if (checkLimits(newPos)) {
			this.position = newPos;	
            
		}	
	}
	draw(delta: number, ctx: CanvasRenderingContext2D) {
	
		ctx.fillStyle = this.enemyColor;
		ctx.fillRect(this.position.x,this.position.y, this.enemySize.w, this.enemySize.h);

		
		ctx.fill();
		ctx.stroke();
	}

}