import makeStore from './src/store';
import {startServer} from './src/server';

export const store = makeStore();

store.dispatch({ type: 'SET_ENTRIES', entries: ['Folks', 'Bambas']});
console.log(store.getState());
startServer();
