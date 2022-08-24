import { combineReducers } from 'redux';
import boards from './boards';
import tasks from './tasks';
import modal from './modal';
import darkmode from './darkmode';
import editForm from './editForm';

export default combineReducers({
  boards,
  tasks,
  modal,
  darkmode,
  editForm,
});
