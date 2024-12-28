/* eslint-disable @typescript-eslint/no-unused-vars */

export function validate(str: string): object | null {
  try {
    if (!['{', '['].includes(str.trim()[0])) {
      return null;
    }
    return JSON.parse(str);
  } catch (e) {
    return null;
  }
}
