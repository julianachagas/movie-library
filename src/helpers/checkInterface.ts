export function checkInterface<Interface>(
  obj: unknown,
  ...keys: Array<keyof Interface>
): obj is Interface {
  if (obj && typeof obj === 'object' && keys.every(key => key in obj)) {
    return true;
  } else {
    return false;
  }
}
