export function setItem(key: string, value: string) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  catch(e) {
    console.error(e);
  }
}

export function getItem(key: string) {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  }
  catch(e) {
    console.error(e);
  }
}

export function removeItem(key: string) {
  try {
    window.localStorage.removeItem(key);
  }
  catch(e) {
    console.error(e);
  }
}
