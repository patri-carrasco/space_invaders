import { Actor, IActor } from "./Actor";
import { Point } from "../types/Point";
import { checkLimits } from "../utils/CheckLimits";
import { Game } from "../state/GameManager";

//import { CanyonKey, KeyboardMap } from "../utils/KeyboardMap";

//const ferrariImg = require("../assets/ferrari.png");

type Size = { w: number; h: number };
// Aquí podemos cambiar la velocidad del enemigo.
let speedEnemy = 2;


export class Enemy extends Actor implements IActor {
	enemySize: Size;
	enemyColor: string;
	enemySpeed: number;
	direction: number;
	gameOver: String;
	hit:Boolean;
	bullets: IActor []
	arrPosBullets:Point[]
	constructor(
		initialPos: Point,
		bullets:IActor [],
		arrPosBullets:Point[],
		size: Size = { w: 50, h: 50 },
	) {
		
		super(initialPos);
		this.enemySize = size;
		this.enemyColor = "red";
		this.direction= 1;
		this.enemySpeed = speedEnemy*this.direction; 
		this.gameOver = " "
		this.hit = false;
		this.bullets = bullets
		this.arrPosBullets = []
	
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
		
			//game over si el enemigo llega a la altura de las barreras
			
			if(this.position.y>=sizeCanvasHeight-300){
			
				this.position.x = 1
				this.position.y = 40
				this.gameOver = 'Enter'
				
			}
			
		}
		// colisones de las balas
		this.bullets.forEach(({position}) => {
			if (
				position.y > this.position.y && 
				position.y < this.position.y + 50 &&
				position.x > this.position.x &&
				position.x < this.position.x + 50
			) {
				this.enemySize = {w: 0, h: 0}
				position.y = 0
			}
		})
		

	}
	draw(ctx: CanvasRenderingContext2D,delta: number ) {

		ctx.fillStyle = this.enemyColor;
		ctx.fillRect(this.position.x,this.position.y, this.enemySize.w, this.enemySize.h);

		
		ctx.fill();
		ctx.stroke();
	}

}