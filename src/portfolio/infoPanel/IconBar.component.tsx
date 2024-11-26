import { Stack } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react';
// import { GoodReadsIcon } from './GoodReacts.icon';

// interface IconBarProps {
//   isMediumScreen: boolean;
// }

export const IconBar: React.FC = () => {
  return (
    <Stack direction='row' gap={2} sx={{marginTop: 'auto'}}>
      <GitHubIcon/>
      <LinkedInIcon/>
      <InstagramIcon/>
      {/* <GoodReadsIcon /> */}
    </Stack>
  )
}