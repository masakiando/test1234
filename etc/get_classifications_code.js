const prodcuts = [
  {
    id: 1,
    prodcut_name: "hello japan book"
  },
  {
    id: 2,
    prodcut_name: "長袖Tシャツ"
  },
  {
    id: 3,
    prodcut_name: "スウェット"
  }
];

const alldata = [
  {
    id: 1,
    prodcut_id: 2,
    code: "1/2/5/6"
  },
  {
    id: 2,
    prodcut_id: 2,
    code: "1/2/5/7"
  },
  {
    id: 3,
    prodcut_id: 2,
    code: "1/3/5/6"
  },
  {
    id: 4,
    prodcut_id: 2,
    code: "1/3/5/7"
  },
  {
    id: 5,
    prodcut_id: 2,
    code: "1/4/5/7"
  }
];

const classifications = [
  {id: 1, classifications_name: 'size'},
  {id: 2, classifications_name: 'S'},
  {id: 3, classifications_name: 'M'},
  {id: 4, classifications_name: 'L'},
  {id: 5, classifications_name: 'color'},
  {id: 6, classifications_name: 'red'},
  {id: 7, classifications_name: 'grey'}
];

let numAry = [];
let myKey1 = ''
let myValue1 = ''
let myKey2 = ''
let myValue2 = ''
var obj4 = '';
var obj5 = '';
var obj6 = []
var obj7 = []

const kakak = alldata.map( (data, d_i) => {//alldataから繰り返しオブジェクト取得する
  Object.keys(data).forEach((key)=> {//オブジェクト内のKEYを繰り返し取得し
    if ((/code/.test(key))) {// もしKEYがcodeと一致する時下記を実行する
     let codevalue = data[key];//codeの値を変数とする 例　code: "1/2/5/6"
     let codereplace
       codereplace = codevalue.replace(/[^0-9]/g, ",");// 数字のみ取り出し"1","2","5","6"
       strAry = codereplace.split(',');// 配列にする console.log(ary);//["1", "4", "5", "7"]
       numAry = strAry.map( str => {// 配列文字列を数値にする
         return parseInt(str, 10);// console.log(numAry);// [1, 3, 5, 7]
       });
       numAry.map ( (v, i) => {// [1, 3, 5, 7] [key1, value1, key2, value2]
         classifications.map( classification => {
           if(classification.id === v ) { //分類テーブルのIDと配列N番目の値が一致しているか
             if(i === 0) {//一致した時 numAryが0番目なら下記実行
               myKey1 = classification.classifications_name;
             }
             if(i === 1) {//一致した時 numAryが1番目なら下記実行
               myValue1 = classification.classifications_name;
             }
             if(i === 2) {//一致した時 numAryが2番目なら下記実行
               myKey2 = classification.classifications_name;
             }
             if(i === 3) {//一致した時 numAryが3番目なら下記実行
               myValue2 = classification.classifications_name;
             }
           }
         })
       })
       var obj1 = {[myKey1]: myValue1};
       var obj2 = {[myKey2]: myValue2};
       Object.assign(data, obj1, obj2);

       obj4 = myKey1;
       obj5 = myKey2;
       obj6.push(myValue1); obj7.push(myValue2);
     }
  })
  return data
});

console.log(kakak);
result1 = obj6.filter( function( value, index, array ) {
  return array.indexOf( value ) === index;
})
result2 = obj7.filter( function( value, index, array ) {
  return array.indexOf( value ) === index;
})
console.log(result1);
console.log(result2);
var obj9 = {[obj4]: result1};//分類１としてステートに保存する
var obj10 = {[obj5]: result2};//分類２としてステートに保存する
console.log(obj9);
console.log(obj10);

Object.keys(obj9).forEach((key)=> {
  console.log(key);
  let aaa = obj9[key];
  console.log(obj9[key]);
  aaa.map(a => {
    console.log(a);
  })

})
