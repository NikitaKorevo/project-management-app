import { Box, Typography } from '@mui/material';
import { FC } from 'react';

interface IBoardTaskProps {
  title: string;
  description: string;
}

const BoardTask: FC<IBoardTaskProps> = ({ title, description }) => {
  return (
    <Box
      sx={{
        m: 1,
        p: 1,
        border: '1px solid rgba(25, 118, 210, 0.5)',
        borderRadius: 1,
      }}
    >
      <Typography variant="body1" component="h3">
        {title}
      </Typography>
      <Typography variant="body2">{description}</Typography>
    </Box>
  );
};

export default BoardTask;
