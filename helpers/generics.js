const bF = x => (x | 0)

export const isNatural = x => Number.isInteger(x) && x >= 1

export const getRandomNatural = (min, max) => (min + Math.random() * Math.abs(max - min)) | 0

export const euclideanAlgorithm = (a, b) => {
  if (a < b){
    const { x, y } = euclideanAlgorithm(b, a)
    return { x: y, y: x }
  }

  if(b === 0)
    return { x: 1, y: 0 }

  const remainder = a % b
  const { x, y } = euclideanAlgorithm(b, remainder)

  return { 
    x: y,
    y: x - bF(a / b) * y
  }
}

export const getInvert = (x, n) => {
  if(x > n)
    throw new RangeError('x is not in range [0, n]')
  
  if(x === n || x === 1)
    return 1
  
  if(n - x === 1)
    return x
  
  const { y } = euclideanAlgorithm(n, x)
  
  if(y > 0)
    return undefined
  
  return n + y
}