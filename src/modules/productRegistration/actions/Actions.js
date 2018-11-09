import * as types from '../constans/actionTypes';
import axios from 'axios';

export function loadCategoriesSuccess(categories) {
  return { type: types.LOAD_CATEGORIES_SUCCESS, categories };
}

export function createProductImagesSuccess(imegesIdUrl) {
  return { type: types.CREATE_PRODUCT_IMAGES_SUCCESS, imegesIdUrl};
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

function handleResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    let error = new Error(res.statusText);
    error.res  = res;
    throw(error);
  }
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
      console.log(images);
      const imeges = images.data;
      var obj1 = {}; var obj2 = {};

      const imegesIdUrl = imeges.map( (data, i) => {
        Object.keys(data).forEach((key)=> {
          if ((/public_id/.test(key))) {
            obj1 = {["public_id"]: data[key]};
          }
          if ((/secure_url/.test(key))) {
            obj2 = {["secure_url"]: data[key]};
          }
        });
        return Object.assign(obj1, obj2);
      });
      console.log(imegesIdUrl);
      dispatch(createProductImagesSuccess(imegesIdUrl));
    }).catch(error => {
      // throw(error);
      console.log('res error action saveProductImeges');
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
    .then(handleResponse);
    // .then(() => { dispatch(serahGamesSuccess(games))})
  };
}
