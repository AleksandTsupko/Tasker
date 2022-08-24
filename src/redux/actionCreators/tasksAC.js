import { CREATE_TASK, DELETE_TASK, EDIT_TASK } from '../actionTypes/ActionTypes';

export const createTaskAC = (payload) => ({
  type: CREATE_TASK,
  payload,
});

export const editTaskAC = (payload) => ({
  type: EDIT_TASK,
  payload,
});

export const deleteTaskAC = (payload) => ({
  type: DELETE_TASK,
  payload,
});
