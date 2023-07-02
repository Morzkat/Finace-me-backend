export function isNullOrUndefined(entry: any): boolean {
  if (entry === null) return true;
  else if (entry === undefined) return true;

  return false;
}

export function isObjectEmpty(entry: {}): boolean {
  if (isNullOrUndefined(entry)) return true;
  if (Object.keys(entry).length === 0) return true;
  return false;
}

export function arrayIsEmpty(entry: []): boolean {
  if (entry.length === 0) return true;
  else if (entry === undefined) return true;

  return false;
}
