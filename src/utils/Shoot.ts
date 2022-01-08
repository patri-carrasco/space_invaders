
import { Point } from "../types/Point";

let positionArray:Point []
export const shootArray = (position: Point) => {
	
	positionArray.push({x:position.x,y:position.y})
	return positionArray
};