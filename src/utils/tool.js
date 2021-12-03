export function getList(msg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let res = [];
      for (let index = 0; index < msg.length; index++) {
        res[index] = index;
      }
      resolve(res);
    }, 100);
  });
}
