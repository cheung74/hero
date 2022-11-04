const divide_candy = (num) => {
  const arr = [];
  const dividers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (const divider of dividers) {
    if (Number.isInteger(num / divider)) {
      if (!arr.includes(num / divider - 1) && !arr.includes(divider - 1)) {
        arr.push(num / divider - 1);
        if (num / divider !== divider) arr.push(divider - 1);
      }
    }
  }
  return arr.sort((a, b) => (a > b ? +1 : -1));
};
