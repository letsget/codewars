function consecutive(arr) {
  let count = 0;
  const check = arr.sort((a, b) => a - b);

  for (let i = 0; i < check.length; i++) {
    let current = arr[i];
    let next = arr[i + 1];

    if (current + 1 !== next && next) {
      count += next - current - 1;
    }
  }

  return count;
}
