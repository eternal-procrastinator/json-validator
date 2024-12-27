/* eslint-disable @typescript-eslint/no-explicit-any */

export function debounce(cb: any, delay: number) {
  let timer: NodeJS.Timeout | null = null;

  return (...args: any) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  }
}
