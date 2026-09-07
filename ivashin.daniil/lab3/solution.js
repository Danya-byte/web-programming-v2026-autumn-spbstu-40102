export function findLongestIncreasingSubsequence(arr) {
  if (arr.length === 0) {
    return 0;
  }

  const lengths = Array(arr.length).fill(1);

  for (let i = 1; i < arr.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (arr[j] < arr[i]) {
        lengths[i] = Math.max(lengths[i], lengths[j] + 1);
      }
    }
  }

  return Math.max(...lengths);
}
