import { HANDLE_DESCRIPTION, HANDLE_TITLE } from '../actionTypes/ActionTypes';

export const handleTitleAC = (payload) => ({
  type: HANDLE_TITLE,
  payload,
});

export const handleDescriptionAC = (payload) => ({
  type: HANDLE_DESCRIPTION,
  payload,
});
