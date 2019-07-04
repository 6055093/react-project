import { createStore } from 'redux';
import { initialDecks } from './data';

const initialState = {
  searchTerm: '',
  decks: initialDecks,
  selectedDeckId: '',
  currentDeck: {},
  currentAddedQuestion: 0,
};

const reducer = (state, action) => {
  if (action.type === 'searchQuery') {
    return { ...state, searchTerm: action.searchTerm };
  }
  if (action.type === 'NEW_DECK') {
    const newDeckId = state.decks.length;
    const newDeck = {
      id: newDeckId,
      ...action.newDeck,
    };
    return { ...state, decks: [...state.decks, newDeck] };
  }

  //   if (action.type === 'SELECT_DECK') {
  //     return { ...state, currentDeck: action.currentDeck };
  //   }
  return state;
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
