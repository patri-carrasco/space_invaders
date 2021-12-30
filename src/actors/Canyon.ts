import { Actor, IActor } from "./Actor";
import { Point } from "../types/Point";

import { checkLimits } from "../utils/checkLimits";
import { CanyonKey, KeyboardMap } from "../utils/KeyboardMap";
//const ferrariImg = require("../assets/ferrari.png");

type Size = { w: number; h: number };

export class Canyon extends Actor implements IActor {
	canyonSize: Size;
	canyonColor: string;
	//angle: number;
	// angleSpeed: number;
	canyonSpeed: number;
	// carAcceleration: number;
	//image: HTMLImageElement;
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
	
		this.canyonSpeed = 0;
		// this.canyonAcceleration = 0;

		// // Car image
		// this.image = new Image();
		// this.image.src = ferrariImg;
	}
	update(delta: number) {
		let newPos: Point = {
			x: this.position.x =10,
			y: this.position.y =0,
		};
		if (checkLimits(newPos)) {
			this.position = newPos;
			console.log("Nespos",newPos)
		}	
	}
	draw(delta: number, ctx: CanvasRenderingContext2D) {
		ctx.fillStyle = this.canyonColor;
		ctx.fillRect(this.position.x,this.position.y, this.canyonSize.w, this.canyonSize.h);

		//ctx.translate(this.position.x, this.position.y);
		//ctx.drawImage(this.image, -50, -25, 100, 50);
		ctx.fill();
		ctx.stroke();
	}
	keyboard_event_down(key: string) {
		let tecla = this.keyboardMap[key];
		
		console.log(tecla,CanyonKey.SPACE)
		if (tecla == CanyonKey.LEFT) {
			this.position.x-= 4;
			
		} else if (tecla == CanyonKey.RIGHT) {
			console.log(this.position.x)
			this.position.x += 4;
			this.position.y=0;
        } else if (tecla == CanyonKey.SPACE){
			console.log(tecla,CanyonKey.SPACE)
			//TODO: función disparo
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