export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  
  for (let i = 0; i < flowerbed.length; i++) {
    // console.log(flowerbed[i])
    if (flowerbed[i] === 1 &&
      flowerbed[i + n + 2] !== 1 &&
      flowerbed[i - 1] !== 1
      ) {
      return true
    } else {
      return false
    }
  }
  return false
};

