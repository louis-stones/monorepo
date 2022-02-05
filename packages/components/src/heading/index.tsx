import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface Props {
    text: string;
}

export function Heading({ text }: Props) {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h2" component="div" gutterBottom>
        {text}
      </Typography>
    </Box>
  );
}
