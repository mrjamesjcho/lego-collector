import React from 'react';

import { makeStyles, Container, Box } from '@material-ui/core';

import Carousel from '../carousel/carousel';
import ProductListItem from '../product/product-list-item';
import '../styles/product-list.css';
import '../styles/add-cart-confirm.css';

export default function ProductList(props) {
  const classes = useStyles();

  const elements = props.products.map(product => {
    return (
      <ProductListItem
        key={product.id}
        product={product}
        onAddCartItem={props.onAddCartItem} />
    );
  });
  return (
    <React.Fragment>
      <Carousel featured={props.featured} />
      <Container className={classes.productListContainer}>
        <Box borderColor="grey.500" borderLeft={1} borderTop={1} className={classes.productListBorder}>
          {elements}
        </Box>
      </Container>
    </React.Fragment>
  );
}

const useStyles = makeStyles(({ spacing }) => ({
  productListBorder: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: spacing(3)
  },
  productListContainer: {
    padding: spacing(0, 3)
  }
}));
