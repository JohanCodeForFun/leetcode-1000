function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
  // loop through heights, while bricks || ladders
  // if current heights > next, continue
  // if current heights < next, 
  //    use bricks or ladder
  //    when is it good to choose either?
  // keep track of traversed heights
  // return heights

  let traversedHeights = 0;

  for (let i = 0; i < heights.length - 1; i++) {
    let diff = heights[traversedHeights + 1] - heights[traversedHeights];
    console.log("loop count:", i)


    if (heights[traversedHeights] < heights[traversedHeights + 1]) {
      // if (h[i+1] - h[i] > 0) bricks is positive, use bricks
      // otherwise, use ladder


      if (diff > 0 && ladders > 0) {
        traversedHeights++;
        ladders--;
        console.log("climb with ladder", ladders, "diff:", diff)
      } else if (diff > 0 && bricks > diff) {
        console.log("bricks:", bricks, heights[traversedHeights + 1], heights[traversedHeights])
        bricks -= heights[traversedHeights + 1] - heights[traversedHeights]
        traversedHeights++;
        console.log("climb with bricks", bricks, "diff:", diff)
      }

      if (!bricks && !ladders) {
        break;
      }

    } else {
      if (heights[traversedHeights] > heights[traversedHeights + 1]) {
        traversedHeights++
        console.log("jump down", traversedHeights)
      }

    }

  }


  return traversedHeights
};