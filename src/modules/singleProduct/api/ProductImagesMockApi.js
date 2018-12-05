
//このファイルは、以下のハードコードされたデータを使用してWeb APIをモックします。
// setTimeoutを使用して、AJAX呼び出しの遅延をシミュレートします。
//すべての呼び出しが約束を返します。
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const productsImg = [
  {
    id: "1",
    product_id: "1",
    cover0: "https://cf.shopee.ph/file/8dd9fccc26dc3229526a088fb5a18016",
    cover1: "https://cf.shopee.ph/file/36e27f818ca0c7da009b0e0a108e3621",
    cover2: "https://cf.shopee.ph/file/31bbc63ebdb17ae9bbde71f35aba5417",
    cover3: "https://cf.shopee.ph/file/82dd1c483ccc9d3a2c203a546976418d",
    cover4: "https://cf.shopee.ph/file/f6ce84b9b0134afb2ab9ae4d8bc0984a",
    cover5: "https://cf.shopee.ph/file/36e27f818ca0c7da009b0e0a108e3621",
    cover6: "https://cf.shopee.ph/file/fdc75ed48d63f93c202f79db5196c328",
    cover7: "https://cf.shopee.ph/file/73ec4650d337d440be5e8be6a286c9e8",
    cover8: "https://cf.shopee.ph/file/16eea9853360b0c49f1e4f7a935a120a",
    cover9: "https://cf.shopee.ph/file/60573ae9d21c02e1e2e6eccac242c631"
  },
  {
    id: "2",
    product_id: "2",
    cover0: "https://cf.shopee.ph/file/8dd9fccc26dc3229526a088fb5a18016",
    cover1: "categor_0.80.110.png",
    cover2: "categor_0.80.110.png",
    cover3: "categor_0.80.110.png",
    cover4: "categor_0.80.110.png",
    cover5: "categor_0.80.110.png",
    cover6: "categor_0.80.110.png",
    cover7: "categor_0.80.110.png",
    cover8: "categor_0.80.110.png",
    cover9: "categor_0.80.110.png"
  },
  {
    id: "3",
    product_id: "3",
    cover0: "categor_0.80.110.png",
    cover1: "categor_0.80.110.png",
    cover2: "categor_0.80.110.png",
    cover3: "categor_0.80.110.png",
    cover4: "categor_0.80.110.png",
    cover5: "categor_0.80.110.png",
    cover6: "categor_0.80.110.png",
    cover7: "categor_0.80.110.png",
    cover8: "categor_0.80.110.png",
    cover9: "categor_0.80.110.png"
  },
  {
    id: "4",
    product_id: "4",
    cover0: "categor_0.80.110.png",
    cover1: "categor_0.80.110.png",
    cover2: "categor_0.80.110.png",
    cover3: "categor_0.80.110.png",
    cover4: "categor_0.80.110.png",
    cover5: "categor_0.80.110.png",
    cover6: "categor_0.80.110.png",
    cover7: "categor_0.80.110.png",
    cover8: "categor_0.80.110.png",
    cover9: "categor_0.80.110.png"
  },
  {
    id: "5",
    product_id: "5",
    cover0: "categor_0.80.110.png",
    cover1: "categor_0.80.110.png",
    cover2: "categor_0.80.110.png",
    cover3: "categor_0.80.110.png",
    cover4: "categor_0.80.110.png",
    cover5: "categor_0.80.110.png",
    cover6: "categor_0.80.110.png",
    cover7: "categor_0.80.110.png",
    cover8: "categor_0.80.110.png",
    cover9: "categor_0.80.110.png"
  },
  {
    id: "6",
    product_id: "6",
    cover0: "categor_0.80.110.png",
    cover1: "categor_0.80.110.png",
    cover2: "categor_0.80.110.png",
    cover3: "categor_0.80.110.png",
    cover4: "categor_0.80.110.png",
    cover5: "categor_0.80.110.png",
    cover6: "categor_0.80.110.png",
    cover7: "categor_0.80.110.png",
    cover8: "categor_0.80.110.png",
    cover9: "categor_0.80.110.png"
  },
  {
    id: "7",
    product_id: "7",
    cover0: "categor_0.80.110.png",
    cover1: "categor_0.80.110.png",
    cover2: "categor_0.80.110.png",
    cover3: "categor_0.80.110.png",
    cover4: "categor_0.80.110.png",
    cover5: "categor_0.80.110.png",
    cover6: "categor_0.80.110.png",
    cover7: "categor_0.80.110.png",
    cover8: "categor_0.80.110.png",
    cover9: "categor_0.80.110.png"
  },
  {
    id: "8",
    product_id: "8",
    cover0: "categor_0.80.110.png",
    cover1: "categor_0.80.110.png",
    cover2: "categor_0.80.110.png",
    cover3: "categor_0.80.110.png",
    cover4: "categor_0.80.110.png",
    cover5: "categor_0.80.110.png",
    cover6: "categor_0.80.110.png",
    cover7: "categor_0.80.110.png",
    cover8: "categor_0.80.110.png",
    cover9: "categor_0.80.110.png"
  },
  {
    id: "9",
    product_id: "9",
    cover0: "categor_0.80.110.png",
    cover1: "categor_0.80.110.png",
    cover2: "categor_0.80.110.png",
    cover3: "categor_0.80.110.png",
    cover4: "categor_0.80.110.png",
    cover5: "categor_0.80.110.png",
    cover6: "categor_0.80.110.png",
    cover7: "categor_0.80.110.png",
    cover8: "categor_0.80.110.png",
    cover9: "categor_0.80.110.png"
  },
  {
    id: "10",
    product_id: "10",
    cover0: "categor_0.80.110.png",
    cover1: "categor_0.80.110.png",
    cover2: "categor_0.80.110.png",
    cover3: "categor_0.80.110.png",
    cover4: "categor_0.80.110.png",
    cover5: "categor_0.80.110.png",
    cover6: "categor_0.80.110.png",
    cover7: "categor_0.80.110.png",
    cover8: "categor_0.80.110.png",
    cover9: "categor_0.80.110.png"
  },
  {
    id: "11",
    product_id: "11",
    cover0: "categor_0.80.110.png",
    cover1: "categor_0.80.110.png",
    cover2: "categor_0.80.110.png",
    cover3: "categor_0.80.110.png",
    cover4: "categor_0.80.110.png",
    cover5: "categ2r_0.80.110.png",
    cover6: "categor_0.80.110.png",
    cover7: "categor_0.80.110.png",
    cover8: "categor_0.80.110.png",
    cover9: "categor_0.80.110.png"
  },
  {
    id: "12",
    product_id: "12",
    cover0: "categor_0.80.110.png",
    cover1: "categor_0.80.110.png",
    cover2: "categor_0.80.110.png",
    cover3: "categor_0.80.110.png",
    cover4: "categor_0.80.110.png",
    cover5: "categor_0.80.110.png",
    cover6: "categor_0.80.110.png",
    cover7: "categor_0.80.110.png",
    cover8: "categor_0.80.110.png",
    cover9: "categor_0.80.110.png"
  },
  {
    id: "10",
    product_id: "10",
    cover0: "categor_0.80.110.png",
    cover1: "categor_0.80.110.png",
    cover2: "categor_0.80.110.png",
    cover3: "categor_0.80.110.png",
    cover4: "categor_0.80.110.png",
    cover5: "categor_0.80.110.png",
    cover6: "categor_0.80.110.png",
    cover7: "categor_0.80.110.png",
    cover8: "categor_0.80.110.png",
    cover9: "categor_0.80.110.png"
  },
  {
    id: "10",
    product_id: "10",
    cover0: "categor_0.80.110.png",
    cover1: "categor_0.80.110.png",
    cover2: "categor_0.80.110.png",
    cover3: "categor_0.80.110.png",
    cover4: "categor_0.80.110.png",
    cover5: "categor_0.80.110.png",
    cover6: "categor_0.80.110.png",
    cover7: "categor_0.80.110.png",
    cover8: "categor_0.80.110.png",
    cover9: "categor_0.80.110.png"
  },
  {
    id: "10",
    product_id: "10",
    cover0: "categor_0.80.110.png",
    cover1: "categor_0.80.110.png",
    cover2: "categor_0.80.110.png",
    cover3: "categor_0.80.110.png",
    cover4: "categor_0.80.110.png",
    cover5: "categor_0.80.110.png",
    cover6: "categor_0.80.110.png",
    cover7: "categor_0.80.110.png",
    cover8: "categor_0.80.110.png",
    cover9: "categor_0.80.110.png"
  },
  {
    id: "10",
    product_id: "10",
    cover0: "categor_0.80.110.png",
    cover1: "categor_0.80.110.png",
    cover2: "categor_0.80.110.png",
    cover3: "categor_0.80.110.png",
    cover4: "categor_0.80.110.png",
    cover5: "categor_0.80.110.png",
    cover6: "categor_0.80.110.png",
    cover7: "categor_0.80.110.png",
    cover8: "categor_0.80.110.png",
    cover9: "categor_0.80.110.png"
  },
  {
    id: "10",
    product_id: "10",
    cover0: "categor_0.80.110.png",
    cover1: "categor_0.80.110.png",
    cover2: "categor_0.80.110.png",
    cover3: "categor_0.80.110.png",
    cover4: "categor_0.80.110.png",
    cover5: "categor_0.80.110.png",
    cover6: "categor_0.80.110.png",
    cover7: "categor_0.80.110.png",
    cover8: "categor_0.80.110.png",
    cover9: "categor_0.80.110.png"
  },
  {
    id: "10",
    product_id: "10",
    cover0: "categor_0.80.110.png",
    cover1: "categor_0.80.110.png",
    cover2: "categor_0.80.110.png",
    cover3: "categor_0.80.110.png",
    cover4: "categor_0.80.110.png",
    cover5: "categor_0.80.110.png",
    cover6: "categor_0.80.110.png",
    cover7: "categor_0.80.110.png",
    cover8: "categor_0.80.110.png",
    cover9: "categor_0.80.110.png"
  },
  {
    id: "10",
    product_id: "10",
    cover0: "categor_0.80.110.png",
    cover1: "categor_0.80.110.png",
    cover2: "categor_0.80.110.png",
    cover3: "categor_0.80.110.png",
    cover4: "categor_0.80.110.png",
    cover5: "categor_0.80.110.png",
    cover6: "categor_0.80.110.png",
    cover7: "categor_0.80.110.png",
    cover8: "categor_0.80.110.png",
    cover9: "categor_0.80.110.png"
  },
  {
    id: "10",
    product_id: "10",
    cover0: "categor_0.80.110.png",
    cover1: "categor_0.80.110.png",
    cover2: "categor_0.80.110.png",
    cover3: "categor_0.80.110.png",
    cover4: "categor_0.80.110.png",
    cover5: "categor_0.80.110.png",
    cover6: "categor_0.80.110.png",
    cover7: "categor_0.80.110.png",
    cover8: "categor_0.80.110.png",
    cover9: "categor_0.80.110.png"
  },
  {
    id: "10",
    product_id: "10",
    cover0: "categor_0.80.110.png",
    cover1: "categor_0.80.110.png",
    cover2: "categor_0.80.110.png",
    cover3: "categor_0.80.110.png",
    cover4: "categor_0.80.110.png",
    cover5: "categor_0.80.110.png",
    cover6: "categor_0.80.110.png",
    cover7: "categor_0.80.110.png",
    cover8: "categor_0.80.110.png",
    cover9: "categor_0.80.110.png"
  },
  {
    id: "10",
    product_id: "10",
    cover0: "categor_0.80.110.png",
    cover1: "categor_0.80.110.png",
    cover2: "categor_0.80.110.png",
    cover3: "categor_0.80.110.png",
    cover4: "categor_0.80.110.png",
    cover5: "categor_0.80.110.png",
    cover6: "categor_0.80.110.png",
    cover7: "categor_0.80.110.png",
    cover8: "categor_0.80.110.png",
    cover9: "categor_0.80.110.png"
  },
  {
    id: "10",
    product_id: "10",
    cover0: "categor_0.80.110.png",
    cover1: "categor_0.80.110.png",
    cover2: "categor_0.80.110.png",
    cover3: "categor_0.80.110.png",
    cover4: "categor_0.80.110.png",
    cover5: "categor_0.80.110.png",
    cover6: "categor_0.80.110.png",
    cover7: "categor_0.80.110.png",
    cover8: "categor_0.80.110.png",
    cover9: "categor_0.80.110.png"
  }
];

function getProductsById(productsImg, id) {
  const product = productsImg.filter(
    product => product.id == id
  );
  if (product) return product;
  return null;
}

class SingleProductImgApi {
  static getSingleProductImg(id) {
    // console.log(id);

    return new Promise((resolve, reject) => {
      // 指定された遅延の後に、コードの断片または関数を実行します。

      var product = getProductsById(
        productsImg, id
      );
      setTimeout(() => {
        resolve(Object.assign([], product));
      }, 0);
    });
  }
}

export default SingleProductImgApi;
