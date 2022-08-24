import { DARK_MODE_ON } from '../actionTypes/ActionTypes';

const darkAC = (payload) => ({
  type: DARK_MODE_ON,
  payload,
});

export default darkAC;
