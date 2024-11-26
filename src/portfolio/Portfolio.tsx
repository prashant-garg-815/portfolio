import { Container, Box } from '@mui/material';
import React, {useRef, useEffect} from 'react';
import styles from './Portfolio.module.scss';
import { Info } from './infoPanel/TitleName.component';
import Grid from '@mui/material/Grid2';
import { RightPanel } from './Experiences/LargeScreenPanel.component';


export const Portfolio = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const onMounseMove = (e: MouseEvent) => {
    const {clientX, clientY} = e;
    if(rootRef.current) {
      rootRef.current.style.setProperty('--x', `${clientX}px`);
      rootRef.current.style.setProperty('--y', `${clientY}px`);
    }
  }
  useEffect(() => {
    if(!rootRef) {
      return;
    }
    window.addEventListener('mousemove', onMounseMove)
    return () => window.removeEventListener('mousemove', onMounseMove);
  })
  return (
    <Box
      ref={rootRef}
      className={styles.portfolioRoot}
      sx={{
        minHeight: '100vh',
      }}
    >
      <Container
        className={styles.container}
      >
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Info/>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <RightPanel />
            </Grid>
          </Grid>
          
      </Container>
    </Box>
  )
}

