import { Actor, IActor } from "./Actor";
import { Point } from "../types/Point";
//import { drawShoot } from "./Shoot";
import {Bullet} from "./Bullet"

import { CanyonKey, KeyboardMap } from "../utils/KeyboardMap";

//const ferrariImg = require("../assets/ferrari.png");

type Size = { w: number; h: number };

let canyonSpeed = 15;

export class Canyon extends Actor implements IActor {
	canyonSize: Size;
	canyonColor: string;
	
	canyonSpeed: number;
	
	keyboardMap: KeyboardMap;
	isCanyon:Boolean;
	bulletCanyonArr: Bullet[]
	
	constructor(
		initialPos: Point,
		keyboardMap: KeyboardMap,
		size: Size = { w: 50, h: 50 },
	) {
		super(initialPos);
		this.keyboardMap = keyboardMap;
		this.canyonSize = size;
		this.canyonColor = "white";
	
		this.canyonSpeed = canyonSpeed;
		this.isCanyon= true;
		this.bulletCanyonArr =[]
		

		// TODO: Canyon image
		// this.image = new Image();
		// this.image.src = ferrariImg;
	}
	update(delta: number,sizeCanvasWidth:number,sizeCanvasHeight:number) {
	
		if(this.position.x > sizeCanvasWidth-this.canyonSize.w){
				this.position.x = sizeCanvasWidth-this.canyonSize.w;	
		}	
		if(this.position.x <= 0){
			this.position.x = 5;	
	}	
	}
	draw(delta: number, ctx: CanvasRenderingContext2D) {
	
		ctx.fillStyle = this.canyonColor;
		ctx.fillRect(this.position.x,this.position.y, this.canyonSize.w, this.canyonSize.h);
		ctx.fill();
		ctx.stroke();
	}
	keyboard_event_down(key: string, ctx: CanvasRenderingContext2D) {
		let tecla = this.keyboardMap[key];
		console.log(tecla)
		if (tecla == CanyonKey.LEFT) {
			this.position.x -= this.canyonSpeed
		} else if (tecla == CanyonKey.RIGHT) {
			this.position.x += this.canyonSpeed
        } else if (tecla == CanyonKey.SPACE){
			//TODO: función disparo
			//drawShoot(ctx,{x:this.position.x,y:this.position.y},this.isCanyon)
			console.log(tecla,"canyon",this.position.x,this.position.y)
			this.bulletCanyonArr.push(new Bullet({x:this.position.x,y:this.position.y},{w:10,h:10}))
			//console.log("space",this.bulletCanyonArr[0].position.y)

		
			

		}
	}
	
}