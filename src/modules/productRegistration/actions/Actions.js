import * as types from '../constans/actionTypes';
import * as Selector from '../../../selectors/imegesSelectors';
import axios from 'axios';

export function loadCategoriesSuccess(categories) {
  return { type: types.LOAD_CATEGORIES_SUCCESS, categories };
}

export function createProductImagesSuccess(imegesIdUrl) {
  return { type: types.CREATE_PRODUCT_IMAGES_SUCCESS, imegesIdUrl};
}

export function deleteProductImagesSuccess(identifier) {
  return {type: types.DELETE_PRODUCT_IMAGES_SUCCESS, identifier};
}

export function loadCategories() {
  return function(dispatch) {
    return axios.get('/categories')
    .then(res => {
      const categories = res.data;
      dispatch(loadCategoriesSuccess(categories));
    }).catch(error => {
      throw(error);
    });
  };
}


export function saveProductImeges(formData) {
  return function(dispatch) {
    console.log('hello action saveProductImeges');
    return  axios(`/api/imageUpload`, {
          method: 'POST',
          header: {
            'Context-Types': 'application/x-www-form-urlencoded'
          },
          data: formData
    })
    .then(images => {
      const imeges = images.data;
      const imegesIdUrl = Selector.imegeXXXX(imeges);
      for (let imegeIdUrl of imegesIdUrl) {
        console.log('Selector imegesIdUrl');
        console.log(imegeIdUrl);
        dispatch(createProductImagesSuccess(imegeIdUrl));
      }
    }).catch(error => {
      throw(error);
      // console.log('res error action saveProductImeges');
    });
  };
}

export function deletePostImage(identifier) {
  return function (dispatch, getState) {
    return fetch(`/api/imageUpload/${identifier}`, {
      method: 'DELETE',
      body: JSON.stringify({}),
      headers: {'Content-Type': 'application/json'}
    })
    .then((res) => {
      console.log(res);
      console.log(identifier);
      dispatch(deleteProductImagesSuccess(identifier));
    })
    .catch(error => {
      throw(error);
    });
  };
}


// const imegesIdUrl = imeges.map( (data, i) => {
//   Object.keys(data).forEach((key)=> {
//     if ((/public_id/.test(key))) {
//       obj1 = {["public_id"]: data[key]};
//     }
//     if ((/secure_url/.test(key))) {
//       obj2 = {["secure_url"]: data[key]};
//     }
//   });
//   return Object.assign(obj1, obj2);
// });
