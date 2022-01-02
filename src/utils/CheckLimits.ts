import { Point } from "../types/Point";
export const checkLimits = (position: Point,size :number,sizeCanvas:number) => {
	if (
		position.x < sizeCanvas-size && //1020
		position.x > 0 &&
		position.y < 1024 &&
		position.y > 0
	) {
		return true;
	}
	return false;
};