import delay from './delay';

const arr = new Array(32)
  .fill(null)
  .map((v, i) => i + 1);
const cover = [
  'url("https://cf.shopee.vn/file/9124424251c697f796abe1e194112c93")',
  'url("https://cf.shopee.vn/file/90e9fa34a4c552a02068f964d04f6c27")',
  'url("https://cf.shopee.vn/file/d4dc4ee4420634a14b392986d21fcef3")',
  'url("https://cf.shopee.ph/file/a722cca1b2e79dea8143cf33316e0158")',
  'url("https://cf.shopee.ph/file/3d32bf4a43b82f4af3c898326c4fed95")',
  'url("https://cf.shopee.ph/file/908d555f5737a9e560ed3a3f652e95f4")',
  'url("https://cf.shopee.ph/file/8851e38101c59906b64fd27c1fc149b0")',
  'url("https://cf.shopee.ph/file/8851e38101c59906b64fd27c1fc149b0")',
  'url("https://cf.shopee.ph/file/8851e38101c59906b64fd27c1fc149b0")',
  'url("https://cf.shopee.ph/file/8851e38101c59906b64fd27c1fc149b0")',
  'url("https://cf.shopee.ph/file/8851e38101c59906b64fd27c1fc149b0")'
];
const malls = arr.map(function(element, index, array) {
    const product = {
      id: element,
      mall_name: 'Mall' + '_' + element,
      cover: cover[index],
      mallcover: "mallcover.200.112.png"
    };
    return product;
});

class Api {
  static getAllMalls() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], malls));
      }, delay);
    });
  }
}

export default Api;
