import { useEffect } from 'react';
import {
  Container,
  Typography,
  Modal,
  Box,
  Button,
  OutlinedInput,
  TextField,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header.jsx';
import AddBoard from './AddBoard.jsx';
import BoardsList from './BoardsList.jsx';
import style from '../helpers/styles';
import { deleteBoardAC } from '../redux/actionCreators/boardsAC';
import { handleDescriptionAC, handleTitleAC } from '../redux/actionCreators/editFormAC';
import { editTaskAC, deleteTaskAC } from '../redux/actionCreators/tasksAC';
import { showModalTaskAC, showModalBoardAC, showEditTaskAC } from '../redux/actionCreators/modalAC';

function App() {
  const dispatch = useDispatch();

  const showModalTask = useSelector((state) => state.modal.show);
  const showModalBoard = useSelector((state) => state.modal.showBoard);
  const showModalEdit = useSelector((state) => state.modal.showEditTask);
  const darkmode = useSelector((state) => state.darkmode.dark);
  const { boards } = useSelector((state) => state.boards);
  const { id, boardId, taskId } = useSelector((state) => state.modal);
  const { title, description } = useSelector((state) => state.editForm);

  useEffect(() => {
    if (darkmode) {
      document.body.style.backgroundColor = '#1a1a1a';
      document.body.style.transition = '1s';
    } else {
      document.body.style.backgroundColor = 'white';
    }
  }, [darkmode]);

  const deleteTask = () => {
    dispatch(deleteTaskAC(id));
    dispatch(showModalTaskAC());
  };

  const deleteBoard = () => {
    dispatch(deleteBoardAC(boardId));
    dispatch(showModalBoardAC());
  };

  const showModalTaskFunc = () => {
    dispatch(showModalTaskAC());
  };

  const showModalBoardFunc = () => {
    dispatch(showModalBoardAC());
  };

  const showModalEditFunc = () => {
    dispatch(showEditTaskAC());
  };

  const editInput = (e) => {
    dispatch(handleTitleAC(e.target.value));
  };

  const editDesc = (e) => {
    dispatch(handleDescriptionAC(e.target.value));
  };

  const saveChanges = () => {
    dispatch(editTaskAC({ id: taskId, title, description }));
    dispatch(showEditTaskAC());
  };

  return (
    <Container
      maxWidth = 'xl'
      sx={
        darkmode
          ? {
            backgroundColor: '#1a1a1a', height: '100vh', padding: 5, color: 'white', transition: '1s',
          }
          : {
            backgroundColor: 'white', height: '100vh', padding: 5, transition: '1s',
          }
      }>
      <Header />
      <AddBoard />
      {boards.length > 0 ? (
        <BoardsList />
      ) : (
        <Typography variant='h4' sx={{ textAlign: 'center' }}>
          There no boards yet
        </Typography>
      )}

      <Modal
        open={showModalTask}
        onClose={showModalTaskFunc}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Do you want to delete task?
          </Typography>
          <Button
            variant='contained'
            color='error'
            type='submit'
            sx={{ margin: 1 }}
            onClick={deleteTask}>
            Yes
          </Button>
          <Button
            variant='outlined'
            sx={{ margin: 1 }}
            onClick={showModalTaskFunc}>
            No
          </Button>
        </Box>
      </Modal>

      <Modal
        open={showModalBoard}
        onClose={showModalBoardFunc}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Do you want to delete board?
          </Typography>
          <Button
            variant='contained'
            color='error'
            type='submit'
            sx={{ margin: 1 }}
            onClick={deleteBoard}>
            Yes
          </Button>
          <Button
            variant='outlined'
            sx={{ margin: 1 }}
            onClick={showModalBoardFunc}>
            No
          </Button>
        </Box>
      </Modal>

      <Modal
        open={showModalEdit}
        onClose={showModalEditFunc}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Edit your task
          </Typography>
          <Typography variant='h7'>
            <OutlinedInput
              sx={{ width: '100%', marginBottom: 1 }}
              value={title}
              onChange={editInput}
            />
            <TextField
              multiline
              rows={5}
              sx={{ width: '100%' }}
              value={description}
              onChange={editDesc}
            />
          </Typography>
          <Button
            variant='contained'
            type='submit'
            sx={{ marginTop: 1, width: '100%' }}
            onClick={saveChanges}>
            Save
          </Button>
        </Box>
      </Modal>
    </Container>
  );
}

export default App;
