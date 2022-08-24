import { SHOW_EDIT_TASK, SHOW_MODAL_BOARD, SHOW_MODAL_TASK } from '../actionTypes/ActionTypes';

export const showModalTaskAC = (payload) => ({
  type: SHOW_MODAL_TASK,
  payload,
});

export const showModalBoardAC = (payload) => ({
  type: SHOW_MODAL_BOARD,
  payload,
});

export const showEditTaskAC = (payload) => ({
  type: SHOW_EDIT_TASK,
  payload,
});
