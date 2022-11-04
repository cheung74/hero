const tran_sorting = (n, trains) => {
  const newTrain = [];
  const queue = trains;
  while (queue.length > 0) {
    const item = queue.shift();
    if (newTrain.length === 0) {
      newTrain.push(item);
    }
    if (item > newTrain[0]) {
      newTrain.unshift(item);
    } else if (item < newTrain[newTrain.length - 1]) {
      newTrain.push(item);
    }
  }

  return newTrain.length;
};
