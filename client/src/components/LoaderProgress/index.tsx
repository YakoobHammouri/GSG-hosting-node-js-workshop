import React from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function LoaderProgress({ isLoading }: { isLoading: boolean }) {
  const classes = useStyle();
  return (
    <Backdrop className={classes.backdrop} open={isLoading}>
      <CircularProgress color="primary" size={60} thickness={4} />
    </Backdrop>
  );
}
