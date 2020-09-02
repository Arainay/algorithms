export default function getNthFibonacci(n) {
  if (n <= 1) {
    return 0;
  }

  if (n === 2 || n === 3) {
    return 1;
  }

  return getNthFibonacci(n - 2) + getNthFibonacci(n - 1);
}
