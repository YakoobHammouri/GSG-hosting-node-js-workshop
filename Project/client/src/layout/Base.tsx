import { makeStyles, Theme } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import { ILayoutProps } from '../models/interfaces/ILayoutProps';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: 1100,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(3, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(6, 2),
    },
  },
}));

export default function Layout(props: ILayoutProps) {
  const classes = useStyles();
  const { children, title, des, kw, window } = props;

  const metTitle = title ? `| ${title}` : '';

  return (
    <React.Fragment>
      <Head>
        <title>Hosting Node js {metTitle}</title>
        <meta name="description" content={des} />
        <meta name="keywords" content={kw} />
      </Head>
      <section className={classes.root}>{children}</section>
    </React.Fragment>
  );
}
