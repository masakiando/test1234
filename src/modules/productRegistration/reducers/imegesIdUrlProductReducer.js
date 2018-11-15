import * as types from '../constans/actionTypes';
import initialState from '../../../reducers/initialState';

export default  function imegesIdUrlProductReducer(
  state = initialState.productImages, action) {
  switch (action.type) {
    case types.CREATE_PRODUCT_IMAGES_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.imegesIdUrl)
      ];

    case types.DELETE_PRODUCT_IMAGES_SUCCESS:
      return [
        ...state.filter(a => a.public_id !== action.identifier)
      ];

      default:
        return state;
  }
}
