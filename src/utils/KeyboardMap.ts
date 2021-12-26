export enum CanyonKey {
	UP,
	DOWN,
	LEFT,
	RIGHT,
}

export interface KeyboardMap {
	[key: string]: CanyonKey;
}

export let MoveCanyon = {
	ArrowLeft: CanyonKey.LEFT,
	ArrowRight: CanyonKey.RIGHT,
};