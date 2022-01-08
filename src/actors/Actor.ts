import { Point } from "../types/Point";

export interface IActor {
	position?: Point;
	gameOver?: String
	update: (delta: number,sizeCanvas:number,sizeCanvasHeight:number) => void;
	keyboard_event_down?: (key: string, ctx: CanvasRenderingContext2D) => void;
	keyboard_event_up?: (key: string) => void;
	draw: (ctx: CanvasRenderingContext2D,delta:number) => void;
}

export class Actor implements IActor {
	position: Point;
	gameOver?: String;
	constructor(position: Point) {
		this.position = position;
	}
	update(delta: number,sizeCanvas:number,sizeCanvasHeight:number) { }
	draw(ctx: CanvasRenderingContext2D,delta: number,) { }
	keyboard_event(key: string,ctx: CanvasRenderingContext2D) { }
}