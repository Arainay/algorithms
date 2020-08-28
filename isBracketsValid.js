export default function isBracketsValid(str) {
  const OPEN_BRACKETS = {
    '[': 1,
    '{': 2,
    '(': 3
  };
  const CLOSE_BRACKETS = {
    ']': 1,
    '}': 2,
    ')': 3
  };

  const brackets = [];

  for (const i in str) {
    if (CLOSE_BRACKETS[str[i]] && CLOSE_BRACKETS[str[i]] === OPEN_BRACKETS[brackets[brackets.length - 1]]) {
      brackets.pop();
    } else if (CLOSE_BRACKETS[str[i]] || OPEN_BRACKETS[str[i]]) {
      brackets.push(str[i]);
    }
  }

  return brackets.length === 0;
}
