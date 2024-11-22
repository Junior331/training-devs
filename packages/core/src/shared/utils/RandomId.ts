export const generateHash = (): string =>
  Math.random().toString(36).substring(2, 15);

export const generateId = (): string =>
  `${generateHash()}-${generateHash()}-${generateHash()}`;

