import { Container, Grid, Typography } from "@mui/material";
import BaseLayout from "~/components/Layouts/BaseLayout";
import ProductItem from "~/components/Product/ProductItem";
import Filter from "~/components/Shop/Filter";

export default function Index() {
  return (
    <BaseLayout>
      <Container sx={{ mb: 5 }}>
        <Typography
          textAlign={"center"}
          sx={{
            margin: "100px auto 80px",
            fontSize: "20px",
          }}
        >
          SẢN PHẨM GIẢM GIÁ
        </Typography>
        <Grid container>
          <Grid item md={2.5}>
            <Filter />
          </Grid>
          <Grid item md={9.5}>
            <Grid container columnSpacing={4} rowSpacing={5}>
              {[...Array(12)].map((d, i) => (
                <Grid key={i} item md={3}>
                  <ProductItem />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </BaseLayout>
  );
}
