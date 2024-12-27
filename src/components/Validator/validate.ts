/* eslint-disable @typescript-eslint/no-unused-vars */

export function validate(str: string): object | null {
  try {
    return JSON.parse(str);
  } catch (e) {
    return null;
  }
}
