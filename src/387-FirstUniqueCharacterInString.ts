function firstUniqChar(s: string): number {
  for (var i = 0; i < s.length; i++) {
      if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
  }
  return -1;
};

// if the index of the letter is equal to the last index, that means it is the unique letter. Simply return index, otherwise return -1;