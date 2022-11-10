import { Box, Container, Grid } from "@mui/material";
import React from "react";
import ProductItem from "./ProductItem";

function ProductList() {
  return (
    <Container>
      <Box
        sx={{
          padding: "108px 0 77px",
        }}
      >
        <Grid container columnSpacing={10}>
          {[...Array(4)].map((d, i) => (
            <Grid item md={3}>
              <ProductItem key={i} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default ProductList;
