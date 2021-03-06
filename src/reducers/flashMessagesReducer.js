import * as types from '../actions/actionTypes';
import initialState from './initialState';
import shortid from 'shortid';
import findIndex from 'lodash/findIndex';

export default function flashMessagesReducer(
  state = initialState.flashMessages, action) {
  const index = findIndex(state, { id: action.id });
  let newMessageId = shortid.generate();

  switch (action.type) {
    case types.ADD_FLASH_MESSAGE:
      return [
        ...state,
        {
           id: shortid.generate(),
           type: action.message.type,
           text: action.message.text
        }
        // ...state.filter(message => message.id == newMessageId),
          // Object.assign({},{
          //     id: newMessageId,
          //     type: action.message.type,
          //     text: action.message.text
          // })
      ];

      //Array.prototype.slice()
      case types.DELETE_FLASH_MESSAGE:

      if (index >= 0) {
        return [
          ...state.slice(0, index),
          ...state.slice(index + 1)
        ];
      }
      return state;

    default: return state;
  }
}
