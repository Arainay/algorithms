export default function isPalindrome(str) {
  const s = str.replace(/\s+/g, '').toLowerCase();
  let res = true;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      res = false;
    }
  }

  return res;
}
