export function maxVowels(s: string, k: number): number {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let windowVowels = 0;
  let maxVowels = 0;

  // initialize the first window
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) {
      windowVowels++;
    }
  }

  maxVowels = windowVowels;

  // Slide the window
  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i])) {
      windowVowels++;
    }

    if (vowels.has(s[i - k])) {
      windowVowels--;
    }

    maxVowels = Math.max(maxVowels, windowVowels);
  }

  return maxVowels;
}
