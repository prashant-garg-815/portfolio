import { Stack, Typography } from '@mui/material';
// import React, { useRef, useState } from 'react';
import { IconBar } from './IconBar.component';
import { NAME, ROLE, TAGLINE } from '../data';

export const Info = () => {
  // const boxRef = useRef(null);
  // const [isMediumScreen, setMediumScreen] = useState(true);
  // const handleResize = () => {
  //   if(window.innerWidth >= 900) {
  //     setMediumScreen(true);
  //   }
  // }
  // window.addEventListener('resize', handleResize);

  return (
    <Stack color={'white'} paddingTop={'100px'} paddingBottom={'100px'} position={'fixed'} height={'100vh'} boxSizing={'border-box'}>
      <Typography variant='h2' fontWeight={700}>{NAME}</Typography>
      <Typography variant='h6' fontWeight={500}>{ROLE}</Typography>
      <Typography width={'375px'} marginTop={3}>{TAGLINE}</Typography>
      <IconBar/>
    </Stack>
  )
}