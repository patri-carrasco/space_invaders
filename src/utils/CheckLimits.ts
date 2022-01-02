import { Point } from "../types/Point";
export const checkLimits = (position: Point,size :number,sizeCanvasWidth:number,sizeCanvasHeight:number) => {
	if (
		position.x < sizeCanvasWidth-size && //1020
		position.x > 0 &&
		position.y < sizeCanvasHeight &&
		position.y > 0
	) {
		return true;
	}
	return false;
};