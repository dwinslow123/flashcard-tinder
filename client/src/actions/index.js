import axios from 'axios';
import { FETCH_FLASHCARDS, FETCH_USER } from './types';

export const fetchCards = () => async dispatch => {
  const res = await axios.get('/api/cards');
  console.log('CARDS RES INSIDE ACTIONS.JS', res);

  dispatch({ type: FETCH_FLASHCARDS, payload: res.data });
};

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  console.log('USER RES INSIDE ACTIONS.JS', res);

  dispatch({ type: FETCH_USER, payload: res.data });
};

