const transformValue = (obj, key, currentVal) => {
  let result = {};
  if (key && currentVal) {
    result[key] = currentVal;
  }
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "string" || typeof obj[key] === "number") {
      result[key] = changeVal(obj[key]);
    } else if (typeof obj[key] === "object") {
      if (obj[key].length > 0) {
        result[key] = obj[key].map((item) => changeVal(item));
      } else {
        Object.keys(obj[key]).forEach((inner) => {
          if (typeof obj[key][inner] === "number") {
            result[key] = {};
            result[key][inner] = changeVal(obj[key][inner]);
          } else if (obj[key][inner].length > 0) {
            result[key][inner] = obj[key][inner].map((item) => changeVal(item));
          }
        });
      }
    }
  });
  return result;
};

const changeVal = (val) => {
  if (typeof val === "string") {
    return val + " AI";
  } else {
    return val + 1;
  }
  return val;
};

const data = {
  a: 123,
  b: "hero",
  c: [1, 2, 3],
  d: {
    e: 3,
    f: ["abc", "def"],
  },
};

// const result = transformValue(data);

// console.log(result);
