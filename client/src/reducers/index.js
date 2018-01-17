import { combineReducers } from 'redux';
import CardsReducer from './reducerFlashcards';
import AuthReducer from './authReducer';

const rootReducer = combineReducers({
  cards: CardsReducer,
  auth: AuthReducer
});

export default rootReducer;