export function getCharDimensions(char: HTMLElement): { width: number; height: number } {
    const bounds = char.getBoundingClientRect();
    return { width: bounds.width || 7, height: bounds.height || 14 };
}