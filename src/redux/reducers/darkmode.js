import { DARK_MODE_ON } from '../actionTypes/ActionTypes';

const dark = JSON.parse(localStorage.getItem('dark'));

const initialState = {
  dark,
};

// eslint-disable-next-line default-param-last
function darkmode(state = initialState, action) {
  switch (action.type) {
    case DARK_MODE_ON:
      return {
        ...state, dark: !state.dark,
      };
    default:
      return state;
  }
}

export default darkmode;
