import * as types from '../constans/actionTypes';
import initialState from '../../../reducers/initialState';

export default  function imegesIdUrlProductReducer(
  state = initialState.productImages, action) {
  switch (action.type) {
    case types.CREATE_PRODUCT_IMAGES_SUCCESS:
      return action.imegesIdUrl;

      default:
        return state;
  }
}
