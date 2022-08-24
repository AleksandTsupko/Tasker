import {
  CREATE_BOARD, DELETE_BOARD, INIT_BOARDS, RENAME_BOARD,
} from '../actionTypes/ActionTypes';

const boardList = JSON.parse(localStorage.getItem('boards')) ?? [];

const initialState = {
  boards: boardList,
};

// eslint-disable-next-line default-param-last
function boards(state = initialState, action) {
  switch (action.type) {
    case INIT_BOARDS:
      return {
        ...state, boards: action.payload,
      };
    case CREATE_BOARD:
      return {
        ...state, boards: [...state.boards, { title: 'New board', id: action.payload }],
      };
    case DELETE_BOARD: {
      const newBoards = state.boards.filter((item) => item.id !== action.payload);
      return {
        ...state, boards: newBoards,
      };
    }
    case RENAME_BOARD: {
      const copyBoards = state.boards.map((item) => {
        if (item.id === action.payload.id) {
          // eslint-disable-next-line no-param-reassign
          item.title = action.payload.title;
        }
        return item;
      });
      return {
        ...state,
        boards: copyBoards,
      };
    }
    default:
      return state;
  }
}

export default boards;
