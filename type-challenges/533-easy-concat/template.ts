type Concat<T extends Array<unknown>, U extends Array<unknown>> = [...T, ...U]

// type Concat<T extends Array<unknown>, U extends Array<unknown>> = [, ...U]