function checkStraightLine(coordinates: number[][]): boolean {
  let temp = [];
  let result = false

  for (let i = 1; i < coordinates.length; i++) {
    let x1 = coordinates[i - 1][0];
    let x2 = coordinates[i][0];
    let y1 = coordinates[i - 1][1];
    let y2 = coordinates[i][1];

    let x = x2 - x1;
    let y = y2 - y1;

    let k = y / x;

    temp.push(k)
  }

  const set = new Set(temp)

  console.log(temp, set)

  return set.size === 1 ? true : false

};