export const isNatural = x => Number.isInteger(x) && x >= 1

export const getRandomNatural = (min, max) => (min + Math.random() * Math.abs(max - min)) | 0