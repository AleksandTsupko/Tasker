import {
  CREATE_BOARD, DELETE_BOARD, INIT_BOARDS, RENAME_BOARD,
} from '../actionTypes/ActionTypes';

export const initBoardsAC = (payload) => ({
  type: INIT_BOARDS,
  payload,
});

export const createBoardAC = (payload) => ({
  type: CREATE_BOARD,
  payload,
});

export const deleteBoardAC = (payload) => ({
  type: DELETE_BOARD,
  payload,
});

export const renameBoardAC = (payload) => ({
  type: RENAME_BOARD,
  payload,
});
