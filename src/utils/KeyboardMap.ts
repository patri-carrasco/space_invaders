export enum CanyonKey {
	SPACE,
	LEFT,
	RIGHT,
}

export interface KeyboardMap {
	[key: string]: CanyonKey;
}

export let MoveCanyon = {
	" ": CanyonKey.SPACE,
	ArrowLeft: CanyonKey.LEFT,
	ArrowRight: CanyonKey.RIGHT,

};