import { FETCH_FLASHCARDS } from '../actions/types';

const init = { cards: [{front: 'front', back: 'back'}]};

export default function(state = init, action) {
  // console.log('Action received', action);
  switch (action.type) {
    case FETCH_FLASHCARDS:
      // action.payload.then((r) => console.log('GOATS: ', r));
      // console.log('FLASH REDUCER action.payload', action.payload);
      return Object.assign({}, state.cards, action.payload.data);
      // state.concat([action.payload.data]);

  default:
    return state;
  }
}

