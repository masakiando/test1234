//src/api/mockFlashSaleApi.js
import delay from './delay';

const arr = new Array(16)
  .fill(null)
  .map((v,i)=>i + 1);

const saleProducts = arr.map((element, index, array)=>{
  //開発時coverのデータ全て用意できていないこともあり得るので一つの写真を使い回して描画する
  const saleProduct = {
    id: element,
    product_name: 'Product' + '_' + element,
    // cover: `product_${element}.173.173.png`,
    cover: `product_0.173.173.png`,
    price: 500,
    discount_rate: 20,
    number_of_sales: 8,
    number_of_saleStocks: 20
  };

  return saleProduct;
});

class saleProductApi {
  static getAllaleProducts() {
    return new Promise((resolve, reject) => {
      // 指定された遅延の後に、コードの断片または関数を実行します。
      setTimeout(() => {
        resolve(Object.assign([], saleProducts));
      }, delay);
    });
  }
}

export default saleProductApi;
