// import delay from './delay';
// //このファイルは、以下のハードコードされたデータを使用してWeb APIをモックします。
// // setTimeoutを使用して、AJAX呼び出しの遅延をシミュレートします。
// //すべての呼び出しが約束を返します。
// // This file mocks a web API by working with the hard-coded data below.
// // It uses setTimeout to simulate the delay of an AJAX call.
// // All calls return promises.
// const Categories = [
//   {
//     id: "1",
//     label: "label_1",
//     cover: "categor_0.80.110.png"
//   },
//   {
//     id: "2",
//     label: "label_2",
//     cover: "categor_0.80.110.png"
//   },
//   {
//     id: "3",
//     label: "label_3",
//     cover: "categor_0.80.110.png"
//   },
//   {
//     id: "4",
//     label: "label_4",
//     cover: "categor_0.80.110.png"
//   },
//   {
//     id: "5",
//     label: "label_5",
//     cover: "categor_0.80.110.png"
//   },
//   {
//     id: "6",
//     label: "label_6",
//     cover: "categor_0.80.110.png"
//   },
//   {
//     id: "7",
//     label: "label_7",
//     cover: "categor_0.80.110.png"
//   },
//   {
//     id: "8",
//     label: "label_8",
//     cover: "categor_0.80.110.png"
//   },
//   {
//     id: "9",
//     label: "label_9",
//     cover: "categor_0.80.110.png"
//   },
//   {
//     id: "10",
//     label: "label_10",
//     cover: "categor_0.80.110.png"
//   },
//   {
//     id: "11",
//     label: "label_11",
//     cover: "categor_0.80.110.png"
//   },
//   {
//     id: "12",
//     label: "label_12",
//     cover: "categor_0.80.110.png"
//   },
//   {
//     id: "13",
//     label: "label_13",
//     cover: "categor_0.80.110.png"
//   },
//   {
//     id: "14",
//     label: "label_14",
//     cover: "categor_0.80.110.png"
//   },
//   {
//     id: "15",
//     label: "label_15",
//     cover: "categor_0.80.110.png"
//   },
//   {
//     id: "16",
//     label: "label_16",
//     cover: "categor_0.80.110.png"
//   },
//   {
//     id: "17",
//     label: "label_17",
//     cover: "categor_0.80.110.png"
//   },
//   {
//     id: "18",
//     label: "label_18",
//     cover: "categor_0.80.110.png"
//   },
//   {
//     id: "19",
//     label: "label_19",
//     cover: "categor_0.80.110.png"
//   },
//   {
//     id: "20",
//     label: "label_20",
//     cover: "categor_0.80.110.png"
//   }
// ];
//
// class CategorApi {
//   static getAllCategories() {
//     return new Promise((resolve, reject) => {
//       // 指定された遅延の後に、コードの断片または関数を実行します。
//       setTimeout(() => {
//         resolve(Object.assign([], Categories));
//       }, delay);
//     });
//   }
// }
//
// export default CategorApi;
