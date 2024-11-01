import { Container, Typography, Box } from '@mui/material';
import React, {useRef, useEffect} from 'react';
import styles from './Portfolio.module.scss'

export const Portfolio = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const onMounseMove = (e: MouseEvent) => {
    const {clientX, clientY} = e;
    if(rootRef.current) {
      rootRef.current.style.setProperty('--x', `${clientX}px`);
      rootRef.current.style.setProperty('--y', `${clientY}px`);
    }
    console.log(clientX, clientY)
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
        height: '100vh',
      }}
    >
      <Container
        className={styles.container}
      >
          <Typography>Portfolio</Typography>
      </Container>
    </Box>
  )
}

