import delay from './delay';

const arr = new Array(16)
  .fill(null)
  .map((v,i)=>i + 1);

const saleProducts = arr.map((element, index, array)=>{
  const saleProduct = {
    id: element,
    product_name: 'Product' + '_' + element,
    cover: `product_0.173.173.png`,
    price: 500,
    discount_rate: 20,
    number_of_sales: 8,
    number_of_saleStocks: 20
  };

  return saleProduct;
});

class Api {
  static getAllaleProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], saleProducts));
      }, delay);
    });
  }
}

export default Api;
