import { isNatural, getInvert } from './generics'

function* newZnZRing(n){
  if(!isNatural(n))
    throw new RangeError('Parameter "n" is not a positive (> 0) integer')
  
  let i = 0
  let inverts = {}

  while(true){
    const x = i % n

    let hasInvert
    if(inverts[x] === undefined){
      hasInvert = getInvert(x)
      inverts[x] = hasInvert

      if(hasInvert && inverts[hasInvert] === undefined)
        inverts[hasInvert] = x
    }
    else{
      hasInvert = inverts[x]
    }

    yield { x, hasInvert }
    i++
  }
}