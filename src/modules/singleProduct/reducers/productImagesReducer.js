import initialState from '../../../reducers/initialState';
/* initialState */ const img = [];
/* actionTypes  */ const LOAD_SINGLE_PRODUCT_IMEGESUCCESS = 'LOAD_SINGLE_PRODUCT_IMEGESUCCESS';

export default function df(state = initialState.img, action) {
  switch (action.type) {
    case LOAD_SINGLE_PRODUCT_IMEGESUCCESS:
      return action.img;

      default:
        return state;
  }
}
