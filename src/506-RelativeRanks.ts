function findRelativeRanks(score: number[]): string[] {
    const sortedScore = [...score];
    sortedScore.sort((a, b) => b - a)
    let podium = ["Gold Medal","Silver Medal","Bronze Medal"]
    let ans = [];

    console.log(score, sortedScore)


    for (let i = 0; i < score.length; i++) {
        if (podium.length > i) {
            ans.push(podium[i])
        } else {
            ans.push((i + 1).toString())
        }
    }

    return ans;
};
