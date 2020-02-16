import React from 'react';
import { useHistory } from 'react-router-dom';
import { Badge, makeStyles, Typography } from '@material-ui/core';

export default function Header(props) {
  const history = useHistory();

  const classes = useStyles();

  return (
    <div className={classes.headerContainer}>
      <div
        onClick={() => history.push('/products')}
        className={classes.headerLogoContainer} >
        <div className={classes.headerLogo}>
          <img
            src="/images/lego-brick.png"
            alt="lego-logo"
            className={classes.headerLogoImg} />
        </div>
        <Typography className='headerTitle m-0' variant="h4">Lego Collector</Typography>
      </div>
      <div onClick={() => history.push('/cart')} >
        <Badge badgeContent={props.numberOfItemsInCart} color="error">
          <img className={classes.shoppingCartImg} src='/images/icon-my-bag.svg' />
        </Badge>
      </div>
    </div>
  );
}

const useStyles = makeStyles(({ spacing }) => ({
  headerContainer: {
    alignItems: 'center',
    backgroundColor: '#ffc107',
    display: 'flex',
    justifyContent: 'space-between',
    padding: spacing(2, 7),
    width: '100%',
    marginBottom: spacing(3)
  },
  headerLogoContainer: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center'
  },
  headerLogo: {
    display: 'flex',
    alignItems: 'center',
    marginRight: spacing()
  },
  headerLogoImg: {
    maxHeight: 40,
    maxWidth: 40
  },
  shoppingCartImg: {
    height: 35
  }
}));
