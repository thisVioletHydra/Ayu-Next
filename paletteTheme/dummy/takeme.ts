export type MySort = number[];

export const mySort = (list: MySort) => list.sort((a, b) => b - a);