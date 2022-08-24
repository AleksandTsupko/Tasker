import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { useEffect } from 'react';
import Task from './Task.jsx';

function TasksList({ boardId }) {
  const tasks = useSelector((state) => state.tasks.tasks).filter(
    (item) => item.boardId === boardId,
  );

  const allTasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(allTasks));
  }, [allTasks]);

  return (
    <>
      {tasks.length > 0 ? (
        <Typography variant='h6'>Tasks:</Typography>
      ) : (
        <Typography variant='h6'>Create your first task
        </Typography>
      )}
      {tasks.map((item) => (
        <Task
          id={item.id}
          boardId={item.boardId}
          title={item.title}
          description={item.description}
          key={item.id}
        />
      ))}
    </>
  );
}

export default TasksList;
