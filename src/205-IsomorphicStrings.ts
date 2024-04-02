function isIsomorphic(s: string, t: string): boolean {
    let map1 = new Map<string, number>();
    let map2 = new Map<string, number>();

    for (let char of s) {
        map1.set(char, (map1.get(char) || 0) + 1);
    }

    for (let char of t) {
        map2.set(char, (map2.get(char) || 0) + 1);
    }
    console.log(map1, map2)

    let result1 = []
    let result2 = []

    for (let [, v] of map1) {
        console.log("map1", v)
        result1.push(v)
    }
    for (let [, v] of map1) {
        console.log("map2", v)
        result2.push(v)
    }

    console.log(result1.toString(), result2.toString())

    const ans = result1.toString() === result2.toString();

    return ans
};