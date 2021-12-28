export enum CanyonKey {
	PRESS,
	LEFT,
	RIGHT,
}

export interface KeyboardMap {
	[key: string]: CanyonKey;
}

export let MoveCanyon = {
	ArrowLeft: CanyonKey.LEFT,
	ArrowRight: CanyonKey.RIGHT,
	Space: CanyonKey.PRESS
};