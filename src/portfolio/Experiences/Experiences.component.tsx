import { Stack } from '@mui/material';
import React from 'react';
import { StyledExperiences } from './LocalComponent';
import { Experience } from './Experience.component';
import { EXPERIENCE } from '../data';

export const Experiences = () => {
  return (
    <StyledExperiences elevation={1} sx={{background: 'transparent', color: 'white'}}>
      <Stack gap={4}>
        {EXPERIENCE.map(exp => (
          <Experience {...exp} />
        ))}
      </Stack>
    </StyledExperiences>
  )
}