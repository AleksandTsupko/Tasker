import { Button, Box } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { createBoardAC } from '../redux/actionCreators/boardsAC';

function AddBoard() {
  const dispatch = useDispatch();
  const { boards } = useSelector((state) => state.boards);

  useEffect(() => {
    localStorage.setItem('boards', JSON.stringify(boards));
  }, [boards]);

  const createBoard = () => {
    dispatch(createBoardAC(uniqid()));
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', margin: 5 }}>
      <Button variant='contained' onClick={createBoard}>Add Board</Button>
    </Box>
  );
}

export default AddBoard;
