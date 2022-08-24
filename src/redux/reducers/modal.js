import { SHOW_EDIT_TASK, SHOW_MODAL_BOARD, SHOW_MODAL_TASK } from '../actionTypes/ActionTypes';

const initialState = {
  show: false,
  showBoard: false,
  id: null,
  boardId: null,
  showEditTask: false,
  taskId: null,
};

// eslint-disable-next-line default-param-last
function modal(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL_TASK:
      return {
        ...state, show: !state.show, id: action.payload,
      };
    case SHOW_MODAL_BOARD:
      return {
        ...state, showBoard: !state.showBoard, boardId: action.payload,
      };
    case SHOW_EDIT_TASK:
      return {
        ...state, showEditTask: !state.showEditTask, taskId: action.payload,
      };
    default:
      return state;
  }
}

export default modal;
