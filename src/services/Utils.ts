export function createInterval(handler: () => void, timout?: number): number {
  return setInterval(handler, timout);
}

export function stopInterval(interval: number) {
  clearInterval(interval);
}
