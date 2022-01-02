import { Actor, IActor } from "./Actor";
import { Point } from "../types/Point";
import { checkLimits } from "../utils/CheckLimits";
//import { CanyonKey, KeyboardMap } from "../utils/KeyboardMap";

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

		// TODO: imagen enemy
		// this.image = new Image();
		// this.image.src = ferrariImg;
	}
	update(delta: number,sizeCanvasWidth:number,sizeCanvasHeight:number) {
		
		
		let newPos: Point = {
			x: this.position.x + this.enemySpeed,
			y: this.position.y,
		};
		
		if (checkLimits(newPos,this.enemySize.w,sizeCanvasWidth,sizeCanvasHeight)) {
			this.position = newPos;	 
			        
		}
		if(this.position.x >=sizeCanvasWidth-this.enemySize.w- this.enemySpeed || this.position.x <=1){
		
			this.direction = this.position.x >=sizeCanvasWidth-this.enemySize.w-this.enemySpeed  ? -1 : 1
			this.enemySpeed = speedEnemy*this.direction;
			this.position.y+=50;
		
			//TODO: Aquí iría una game over si el enemigo llega a la altura de las barreras
			//TODO: Podría poner GAMER OVER, pulse ENTER para empezar
			if(this.position.y>=sizeCanvasHeight-300){
				console.log("Perdiste")
				this.position.x = 1
				this.position.y = 40

			}
		}
	}
	draw(delta: number, ctx: CanvasRenderingContext2D) {
	
		ctx.fillStyle = this.enemyColor;
		ctx.fillRect(this.position.x,this.position.y, this.enemySize.w, this.enemySize.h);

		
		ctx.fill();
		ctx.stroke();
	}

}