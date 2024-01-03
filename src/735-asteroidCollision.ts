export function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = [];

  for (let i = 0; i < asteroids.length; i++) {
    const topOfStack = stack[stack.length - 1]; // || "";

    // const asteroids = [5, 10, -5];
    // const result = [5, 10];

    // asteroids = [10, 2, -5];
    // result = [10];

    if (topOfStack === Math.abs(asteroids[i])) {
      stack.pop();
    } else if (topOfStack > asteroids[i] && asteroids[i] < 0) {
      stack.push(topOfStack);
    } else if (topOfStack < asteroids[i] && asteroids[i] < 0) {
      stack.push(asteroids[i]);
    } else {
      stack.push(asteroids[i])
    }
  }

  return stack;
}
