export function d10(): number {
	return Math.floor(Math.random() * 10) + 1;
}

export function d100(): number {
	return Math.floor(Math.random() * 100) + 1;
}

export function d1000(): number {
	return Math.floor(Math.random() * 1000) + 1;
}

export function initDieTable<T>(...elements: [number, T][]): T[] {
	const table: T[] = [];
	for (const elem of elements) {
		if (elem[0] <= table.length) {
			throw (
				"Die table initialization: Initialization element up to " +
				elem[0] +
				" with value " +
				elem[1] +
				" extends less far than the previous element"
			);
		}
		while (elem[0] > table.length) {
			table.push(elem[1]);
		}
	}
	return table;
}
