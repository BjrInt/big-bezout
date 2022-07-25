import { isNatural } from './generics'

function* newZnZRing(n){
  if(!isNatural(n))
    throw new RangeError('Parameter "n" is not a positive (> 0) integer')
  
  let i = 0

  while(true){
    yield i % n
    i++
  }
}