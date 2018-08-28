import delay from './delay';
//このファイルは、以下のハードコードされたデータを使用してWeb APIをモックします。
// setTimeoutを使用して、AJAX呼び出しの遅延をシミュレートします。
//すべての呼び出しが約束を返します。
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const hotwords = [
  {
    id: "1",
    label: "label_1",
    cover: "hotword_1.80.110.png"
  },
  {
    id: "2",
    label: "label_2",
    cover: "hotword_2.80.110.png"
  },
  {
    id: "3",
    label: "label_3",
    cover: "hotword_3.80.110.png"
  },
  {
    id: "4",
    label: "label_4",
    cover: "hotword_4.80.110.png"
  },
  {
    id: "5",
    label: "label_5",
    cover: "hotword_5.80.110.png"
  },
  {
    id: "6",
    label: "label_6",
    cover: "hotword_6.80.110.png"
  },
  {
    id: "7",
    label: "label_7",
    cover: "hotword_7.80.110.png"
  },
  {
    id: "8",
    label: "label_8",
    cover: "hotword_8.80.110.png"
  },
  {
    id: "9",
    label: "label_9",
    cover: "hotword_9.80.110.png"
  },
  {
    id: "10",
    label: "label_10",
    cover: "hotword_10.80.110.png"
  }
];

class hotwordApi {
  static getAllHotwords() {
    return new Promise((resolve, reject) => {
      // 指定された遅延の後に、コードの断片または関数を実行します。
      setTimeout(() => {
        resolve(Object.assign([], hotwords));
      }, delay);
    });
  }
}

export default hotwordApi;
