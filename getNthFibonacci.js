export default function getNthFibonacci(n) {
  const memo = new Map();
  memo.set(1, 0);
  memo.set(2, 1);

  const computeNthFibonacci = (n) => {
    if (memo.get(n) === undefined) {
      memo.set(n, computeNthFibonacci(n - 1) + computeNthFibonacci(n - 2));
    }

    return memo.get(n);
  };

  return computeNthFibonacci(n);
}
