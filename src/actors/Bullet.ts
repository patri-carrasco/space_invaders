import { Actor, IActor } from "./Actor";
import { Point } from "../types/Point";

import { checkLimits } from "../utils/CheckLimits";

//const ferrariImg = require("../assets/ferrari.png");

type Size = { w: number; h: number };


export class Bullet extends Actor implements IActor {
	bulletSize: Size;
	bulletColor: string;
	bulletSpeed: number;
	position:Point
	
	constructor(
		initialPos: Point,
		
		size: Size = { w: 10, h: 10 },
	) {
		
		super(initialPos);
		console.log(initialPos)
		this.bulletSize = size;
		this.bulletColor = "white"
        this.bulletSpeed = 10;

		// TODO: Barrier image
		// this.image = new Image();
		// this.image.src = ferrariImg;
	}
	update(delta: number,sizeCanvasWidth:number,sizeCanvasHeight:number) {
       console.log(this.position.x)
        let newPos: Point = {
			x: this.position.x ,
			y: this.position.y - this.bulletSpeed,
		};
        this.position = newPos;	 
	
	}
	draw(delta: number, ctx: CanvasRenderingContext2D,position?:Point,isCanyon?:Boolean) {
        console.log(this.position.y)
		ctx.fillStyle = this.bulletColor;
		ctx.fillRect(this.position.x,this.position.y, this.bulletSize.w, this.bulletSize.h);
		ctx.fill();
		ctx.stroke();
	}

}