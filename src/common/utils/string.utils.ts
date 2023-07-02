export function isNullOrEmpty(entry: any): boolean {
  if (entry === null) return true;
  else if (entry === '') return true;

  return false;
}

export const isString = (str: any): boolean => {
  return typeof str === 'string' || str instanceof String;
};

export const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);
