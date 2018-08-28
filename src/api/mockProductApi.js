import delay from './delay';
// setTimeoutを使用して、AJAX呼び出しの遅延をシミュレートします。
//すべての呼び出しが約束を返します。
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const arr = new Array(300)
  .fill(null)
  .map((v, i) => i + 1);

const products = arr.map(function(element, index, array) {
  let booleanDataList = [true,false,false,false,false];
  let discountRateDataList = [10,20,30,40,50];
  function chooseRandom(data) {
      let i = Math.floor(Math.random() * data.length);
      return data[i];
  }
  let getBoolean = chooseRandom(booleanDataList);
  let getRate = chooseRandom(discountRateDataList);

    const product = {
      id: element,
      product_name: 'Product' + '_' + element,
      product_discrption: 'product_discrptionproduct_discrptionproduct_discrption',
      cover: element + "_product.173.173.png",
      indexcover: `product_0.190.190.png`,
      price: 500,
      sale_status: getBoolean,
      number_of_stocks: 10,
      heart: 9987,
      star: 3457,
      starScore: 4,
      shipping_free: true
    };
    for(let key in product){
      if (key == 'sale_status') {
        if (product[key] == true) {
          product['discount_rate'] = getRate;
          product['discount_price'] = product['price']-(product['price']/100*product['discount_rate']);
        } else {
          product['discount_rate'] =  0;
          product['discount_price'] = 0;
        }
      }
    }
    return product;
});

class ProductApi {
  static getAllProducts() {
    return new Promise((resolve, reject) => {
      // 指定された遅延の後に、コードの断片または関数を実行します。
      setTimeout(() => {
        resolve(Object.assign([], products));
      }, delay);
    });
  }
}

export default ProductApi;
