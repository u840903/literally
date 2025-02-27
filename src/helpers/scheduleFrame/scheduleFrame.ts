export function scheduleFrame(callback: () => void): void {
   requestAnimationFrame(callback);
}