import { Point } from "../types/Point";

export interface IActor {
	position?: Point;
	update: (delta: number,sizeCanvas:number,sizeCanvasHeight:number) => void;
	keyboard_event_down?: (key: string, ctx: CanvasRenderingContext2D) => void;
	keyboard_event_up?: (key: string) => void;
	draw: (delta: number, ctx: CanvasRenderingContext2D) => void;
}

export class Actor implements IActor {
	position: Point;
	constructor(position: Point) {
		this.position = position;
	}
	update(delta: number,sizeCanvas:number,sizeCanvasHeight:number) { }
	draw(delta: number, ctx: CanvasRenderingContext2D) { }
	keyboard_event(key: string,ctx: CanvasRenderingContext2D) { }
}