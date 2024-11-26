import { Stack } from '@mui/material';
import React from 'react';
import { AboutMe } from '../AboutMe.component';
import { Experiences } from './Experiences.component';
import { Footer } from './Foter.component';

export const RightPanel = () => {
  return (
    <div style={{overflowY: 'auto'}}>
      <Stack color={'white'} marginTop={'100px'} marginBottom={'100px'} gap={'150px'}>
        <AboutMe />
        <Experiences />
        <Footer />
      </Stack>
    </div>
  )
}