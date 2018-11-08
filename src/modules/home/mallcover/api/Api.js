import delay from './delay';

const arr = new Array(32)
  .fill(null)
  .map((v, i) => i + 1);

const malls = arr.map(function(element, index, array) {
    const product = {
      id: element,
      mall_name: 'Mall' + '_' + element,
      cover: element + "_mallcover.200.112.png",
      mallcover: "mallcover.200.112.png"
    };
    return product;
});

class Api {
  static getAllMalls() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], malls));
      }, delay);
    });
  }
}

export default Api;
