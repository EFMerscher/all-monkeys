const replaceNullWithUnknown = (value: string | null) => {
  return value === null ? 'unknown' : value; }