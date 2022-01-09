import { Actor, IActor } from "./Actor";
import { Point } from "../types/Point";

import {Bullet} from "./Bullet"


import { CanyonKey, KeyboardMap } from "../utils/KeyboardMap";

//const canyonImg = require('../public/img/canyon.png');

type Size = { w: number; h: number };

let canyonSpeed = 15;

export class Canyon extends Actor implements IActor {
	canyonSize: Size;
	canyonColor: string;
	
	canyonSpeed: number;
	
	keyboardMap: KeyboardMap;
	isCanyon:Boolean;
	bullet:Bullet
	bulletCanyonArr: Bullet[]
	positionArray:Point[]
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
		this.positionArray=[]
		
		// Canyon image
		// this.image = new Image();
		// this.image.src = canyonImg;
	}
	update(delta: number,sizeCanvasWidth:number,sizeCanvasHeight:number) {
	
		if(this.position.x > sizeCanvasWidth-this.canyonSize.w){
				this.position.x = sizeCanvasWidth-this.canyonSize.w;	
		}	
		if(this.position.x <= 0){
			this.position.x = 5;	
	}	
	}
	draw( ctx: CanvasRenderingContext2D) {
	
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
			this.position.x += this.canyonSpeed
        } else if (tecla == CanyonKey.SPACE){
			//TODO: función disparo
			//drawShoot(ctx,{x:this.position.x,y:this.position.y},this.isCanyon)
			
			//this.bulletCanyonArr.push(new Bullet({x:this.position.x,y:this.position.y},{w:10,h:10}))
			// this.positionArray.push({x:this.position.x,y:this.position.y})
			// console.log(this.positionArray)
			
			//shootBullet(this.position);
			

		}
	}
	
}