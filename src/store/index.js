import { createStore } from 'redux';
import notesApp from '../reducers/index';

const store = createStore(notesApp);

export default store;
