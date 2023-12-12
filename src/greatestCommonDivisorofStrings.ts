export const gcdOfStrings = (str1: string, str2: string): string => {
  
  if (str1 + str2 !== str2 + str1) return "";
  
  let biggestStrDivided = Math.min(str1.length, str2.length);

  while (biggestStrDivided > 0) {
    if (str1.length % biggestStrDivided === 0 &&
      str2.length % biggestStrDivided === 0) {
        return (str1.substring(0, biggestStrDivided));
      }
      biggestStrDivided -= 1;
  }
  
  return "";
};
