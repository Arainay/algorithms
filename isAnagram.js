export default function isAnagram(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }

  let res = true;

  const strToObj = (str) => {
    const obj = {};

    for (const letter in str) {
      obj[str[letter].toLowerCase()] = obj[str[letter].toLowerCase()] ? obj[str[letter].toLowerCase()]++ : 1;
    }

    return obj;
  };

  const obj1 = strToObj(s1);
  const obj2 = strToObj(s2);

  for (const prop in obj1) {
    if (obj1[prop] !== obj2[prop]) {
      res = false;
    }
  }

  return res;
}
