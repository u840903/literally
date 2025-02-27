import {getCharDimensions} from "../getCharDimensions/getCharDimensions.ts";

export interface Dimensions {
    cols: number;
    rows: number;
}

export function recalculateDimensions(container: HTMLElement, char: HTMLElement): Dimensions {
    const { width: charWidth, height: charHeight } = getCharDimensions(char);
    const containerBounds = container.getBoundingClientRect();
    const containerWidth = containerBounds.width || window.innerWidth;
    const containerHeight = containerBounds.height || window.innerHeight;
    return {
        cols: Math.floor(containerWidth / charWidth),
        rows: Math.floor(containerHeight / charHeight),
    };
}