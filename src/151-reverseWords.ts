export const reverseWords = (input: string): string => {
  
  return input.split(' ').reverse().filter(string => string !== "").join(' ');
}