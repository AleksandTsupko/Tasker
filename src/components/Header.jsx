import { Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import darkAC from '../redux/actionCreators/darkAC';

function Header() {
  const dispatch = useDispatch();
  const { dark } = useSelector((state) => state.darkmode);

  const darkOn = () => {
    dispatch(darkAC());
    localStorage.setItem('dark', !dark);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', margin: 0 }}>
      <Typography variant='h2'>Tasker</Typography>
      <Button
        sx={{ position: 'absolute', right: '10%', top: 50 }}
        onClick={darkOn}>
        Dark mode
      </Button>
    </Box>
  );
}

export default Header;
