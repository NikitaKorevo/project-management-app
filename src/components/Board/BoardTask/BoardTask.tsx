import { Box } from '@mui/material';
import { FC } from 'react';

interface IBoardTaskProps {
  title: string;
}

const BoardTask: FC<IBoardTaskProps> = ({ title }) => {
  return <Box>{title}</Box>;
};

export default BoardTask;
