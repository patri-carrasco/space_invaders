import { Actor, IActor } from "./Actor";
import { Point } from "../types/Point";

import { checkLimits } from "../utils/CheckLimits";
import { CanyonKey, KeyboardMap } from "../utils/KeyboardMap";
import { convertToObject } from "typescript";
//const ferrariImg = require("../assets/ferrari.png");

type Size = { w: number; h: number };



export class Barriers extends Actor implements IActor {
	barrierSize: Size;
	barrierColor: string;
	
	barrierSpeed: number;
	
	
	constructor(
		initialPos: Point,
		
		size: Size = { w: 150, h: 50 },
	) {
		super(initialPos);
		
		this.barrierSize = size;
		this.barrierColor = "green"

		// TODO: Barrier image
		// this.image = new Image();
		// this.image.src = ferrariImg;
	}
	update(delta: number,sizeCanvasWidth:number,sizeCanvasHeight:number) {
		
	}
	draw(delta: number, ctx: CanvasRenderingContext2D) {
	
		ctx.fillStyle = this.barrierColor;
		ctx.fillRect(this.position.x,this.position.y, this.barrierSize.w, this.barrierSize.h);
		ctx.fill();
		ctx.stroke();
	}

}