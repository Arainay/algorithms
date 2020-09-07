export default function getMissedNumber(list) {
  const [min, max, listSum] = list.reduce(
    ([min, max, sum], item) => [item < min ? item : min, item > max ? item : max, sum + item],
    [Infinity, Number.NEGATIVE_INFINITY, 0]
  );

  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum - listSum;
}
