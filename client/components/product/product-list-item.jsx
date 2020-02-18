import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Box } from '@material-ui/core';

export default function ProductListItem(props) {
  const classes = useStyles();

  return (
    <Box borderBottom={1} borderColor="grey.500" borderRight={1} className={classes.productContainer} >
      <Link to={`/product/${props.product.id}`} className="productImgContainer d-flex overflow-hidden p-2">
        <img src={`/images/${props.product.images[0]}`} className="productImg m-auto" />
      </Link>
      <div className="productNamePriceContainer d-flex flex-column flex-fill p-2">
        <Link to={`/product/${props.product.id}`} className="productNameContainer">
          <h6 className="productName mb-2">{props.product.name}</h6>
        </Link>
        <div className="productPriceContainer d-flex">
          <div className="priceDollars mb-0">{`$${Math.floor(props.product.price / 100)}.`}</div>
          <div className="priceCents mb-0">{props.product.price.toString().slice(-2)}</div>
        </div>
      </div>
      <button className="addToCartBtn btn btn-warning mt-auto mx-2 mb-2" onClick={() => props.onAddCartItem(props.product)}>Add to Cart</button>
    </Box>
  );
}

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  productContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: 400,
    padding: spacing(),
    [breakpoints.between('xs', 'md')]: {
      width: '50%'
    },
    [breakpoints.between('md', 'lg')]: {
      width: '33.33%'
    },
    [breakpoints.between('lg', 'xl')]: {
      width: '25%'
    }
  }
}));
