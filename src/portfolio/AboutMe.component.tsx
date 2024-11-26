import React from 'react';
import { ABOUT_ME } from './data';
import { Stack, Typography } from '@mui/material';

export const AboutMe = () => {
  return (
    <Stack gap={2} direction='column'>
      {ABOUT_ME.map(para => (
        <Typography>{para}</Typography>
      ))}
    </Stack>
  )
}