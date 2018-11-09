import delay from './delay';

const arr = new Array(300)
  .fill(null)
  .map((v, i) => i + 1);

const products = arr.map(function(element, index, array) {
  let booleanDataList = [true,false,false,false,false];
  let discountRateDataList = [10,20,30,40,50];
  let shopId = [1,2,3,4,5];
  function chooseRandom(data) {
      let i = Math.floor(Math.random() * data.length);
      return data[i];
  }
  let getBoolean = chooseRandom(booleanDataList);
  let getRate = chooseRandom(discountRateDataList);
  let getshopId = chooseRandom(shopId);

    const product = {
      id: element,
      product_name: 'Product' + '_' + element,
      product_discrption: 'product_discrptionproduct_discrptionproduct_discrption',
      products_cover: element + "_product.173.173.png",
      price: 500,
      sale_status: getBoolean,
      produc_quantity: 10,
      heart: 9987,
      star: 3457,
      starScore: 4,
      shipping_free: true,//shop
      shop_id: getshopId
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
      setTimeout(() => {
        resolve(Object.assign([], products));
      }, delay);
    });
  }
}

export default ProductApi;
