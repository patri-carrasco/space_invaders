
import { Actor, IActor } from "./Actor";
import { Point } from "../types/Point";

import { checkLimits } from "../utils/CheckLimits";
import { CanyonKey, KeyboardMap } from "../utils/KeyboardMap";
import { convertToObject } from "typescript";
//const ferrariImg = require("../assets/ferrari.png");



export class Shoot extends Actor implements IActor {
	shootColor:string
	
	constructor(
		initialPos: Point,
		
	) {
		
		super(initialPos)
        
	
		this.shootColor = "red"

		// TODO: Barrier image
		// this.image = new Image();
		// this.image.src = ferrariImg;
	}
	update(delta: number,sizeCanvasWidth:number,sizeCanvasHeight:number) {
		
	}
    
	draw(delta: number, ctx: CanvasRenderingContext2D,position?:Point,isCanyon?:Boolean) {
        
            ctx.beginPath();  
            ctx.moveTo(position.x,position.y);    
            console.log(position.x)
            ctx.lineTo(position.x, 900);  
            ctx.strokeStyle = this.shootColor;
            ctx.stroke();
        
       
	}
}