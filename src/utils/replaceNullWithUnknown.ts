export function replaceNullWithUnknown(value: any) {
  return value === null ? 'Unknown' : value;
}