// globals.d.ts
declare global {
  interface Window {
    animationTimeout?: number; // Use `number` because the return type of `setTimeout` is a number
  }
}
export {};