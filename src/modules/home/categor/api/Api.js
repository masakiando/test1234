import delay from './delay';
//このファイルは、以下のハードコードされたデータを使用してWeb APIをモックします。
// setTimeoutを使用して、AJAX呼び出しの遅延をシミュレートします。
//すべての呼び出しが約束を返します。
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const Categories = [
  {
    id: "1",
    label: "Men's Apparel",
    cover: 'url("https://cf.shopee.ph/file/80f345b777a30e0f4f2edab47abe2d79_tn")'
  },
  {
    id: "2",
    label: "Mobiles & Accessories",
    cover: 'url("https://cf.shopee.ph/file/7348a7fc49f89fc82922d7ec495ec120_tn")'
  },
  {
    id: "3",
    label: "Home Entertainment",
    cover: 'url("https://cf.shopee.ph/file/ce1cd711b132c1c36a85c8e900ed0ef3_tn"'
  },
  {
    id: "4",
    label: "Home Appliances",
    cover: 'url("https://cf.shopee.ph/file/f4e8d1086d819df776a2d87bac9b998f_tn"'
  },
  {
    id: "5",
    label: "Laptops & Computers",
    cover: 'url("https://cf.shopee.ph/file/e86b97e0c0d6b32656566cd5271318a1_tn"'
  },
  {
    id: "6",
    label: "Cameras",
    cover: 'url("https://cf.shopee.ph/file/9235b60dd2dcae13eec268d1146135aa_tn"'
  },
  {
    id: "7",
    label: "Sports & Travel",
    cover: 'url("https://cf.shopee.ph/file/0e86f9b4cebe28b2caac24b92580568b_tn"'
  },
  {
    id: "8",
    label: "Men's Bags & Accessories",
    cover: 'url("https://cf.shopee.ph/file/6b405e85d06dc5093c29ef9930b44f82_tn"'
  },
  {
    id: "9",
    label: "Men's Shoes",
    cover: 'url("https://cf.shopee.ph/file/c2ad78d221916a018502099127c7df35_tn"'
  },
  {
    id: "10",
    label: "Motors",
    cover: 'url("https://cf.shopee.ph/file/a8ebfed7b1e3ff145e61d59e9cfeb024_tn"'
  },
  {
    id: "11",
    label: "Women's Apparel",
    cover: 'url("https://cf.shopee.ph/file/25c4c368166c247ad206d5bf6c13f77f_tn"'
  },
  {
    id: "12",
    label: "Health & Personal Care",
    cover: 'url("https://cf.shopee.ph/file/3788376901aecebb15dd6f6472f1c432_tn"'
  },
  {
    id: "13",
    label: "Makeup & Fragrances",
    cover: 'url("https://cf.shopee.ph/file/2f800fe673bda57e8e318bd1897c7f31_tn"'
  },
  {
    id: "14",
    label: "Babies & Kids",
    cover: 'url("https://cf.shopee.ph/file/267b8236c4ec8f543a5a4c969dcc5acf_tn"'
  },
  {
    id: "15",
    label: "Home & Living",
    cover: 'url("https://cf.shopee.ph/file/ad012e6d7434a84cdc47bf451258188b_tn"'
  },
  {
    id: "16",
    label: "Groceries & Pet Care",
    cover: 'url("https://cf.shopee.ph/file/61c7f23b72bd9ffd7cf992c6f42d54f6_tn"'
  },
  {
    id: "17",
    label: "Toys, Games & Collectibles",
    cover: 'url("https://cf.shopee.ph/file/2ae5c8824c18f0c100a6ac8fdb5faac2_tn"'
  },
  {
    id: "18",
    label: "Women's Bags",
    cover: 'url("https://cf.shopee.ph/file/50210092c410b34b03065089cec0875a_tn"'
  },
  {
    id: "19",
    label: "Women's Accessories",
    cover: 'url("https://cf.shopee.ph/file/ce19450f23ea11d7820bfdb9dc907e57_tn"'
  },
  {
    id: "20",
    label: "Women's Shoes",
    cover: 'url("https://cf.shopee.ph/file/c9c0ce5fd1c553f18e6b0076940b8ba9_tn"'
  }
];

class CategoriesCover {
  static getCategoriesCover() {
    return new Promise((resolve, reject) => {
      // 指定された遅延の後に、コードの断片または関数を実行します。
      setTimeout(() => {
        resolve(Object.assign([], Categories));
      }, delay);
    });
  }
}

export default CategoriesCover;
