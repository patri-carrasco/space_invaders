import { Actor, IActor } from "./Actor";
import { Point } from "../types/Point";

//import { checkLimits } from "../utils/checkLimits";
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
		size: Size = { w: 50, h: 100 },
	) {
		super(initialPos);
		this.keyboardMap = keyboardMap;
		this.canyonSize = size;
		this.canyonColor = "green";
		// this.angle = 0;
		// this.angleSpeed = 0;
		// this.carSpeed = 0;
		// this.carAcceleration = 0;

		// // Car image
		// this.image = new Image();
		// this.image.src = ferrariImg;
	}
	update(delta: number) {
		
	}
	draw(delta: number, ctx: CanvasRenderingContext2D) {
		ctx.fillStyle = this.canyonColor;
		//ctx.translate(this.position.x, this.position.y);
		
		
		//ctx.drawImage(this.image, -50, -25, 100, 50);
		ctx.fill();
		ctx.stroke();
	}
	keyboard_event_down(key: string) {
		let tecla = this.keyboardMap[key];
		if (tecla == CanyonKey.LEFT) {
			this.canyonSpeed -= 4;
		} else if (tecla == CanyonKey.RIGHT) {
			this.canyonSpeed += 4;
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