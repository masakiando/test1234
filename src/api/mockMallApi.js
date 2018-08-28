import delay from './delay';
// setTimeoutを使用して、AJAX呼び出しの遅延をシミュレートします。
//すべての呼び出しが約束を返します。
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
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

class MallApi {
  static getAllMalls() {
    return new Promise((resolve, reject) => {
      // 指定された遅延の後に、コードの断片または関数を実行します。
      setTimeout(() => {
        resolve(Object.assign([], malls));
      }, delay);
    });
  }
}

export default MallApi;
