import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Typography,
  Grid,
} from "@mui/material";

import selectors from "../../redux/slices/selectors";
import { useNavigate } from "react-router-dom";
import PreviewItem from "../../components/PreviewItem/PreviewItem";
import { useEffect } from "react";
import { fetchStart } from "../../redux/slices/productsSlice";




const Preview = () => {
  const navigate = useNavigate();
  const products = useSelector(selectors.products);
  const dispatch = useDispatch()
  const handleBack = () => {
    navigate("/products");
  };
  useEffect(() => {
    dispatch(fetchStart());
  }, [dispatch]);
  return (
      <>
        <Grid
          container
          spacing={2}
          sx={{ padding: 2, bgcolor: "primary.main" }}
        >
          {products.length > 0 ? (
            products.map((product) => (
              <Grid item xs={12} sm={4} key={product.id}>
                <PreviewItem
                  name={product.name}
                  price={product.price}
                  quantity={product.quantity}
                  imgSrc={product.imgSrc}
                />
              </Grid>
            ))
          ) : (
            <Typography
              variant="h6"
              align="center"
              sx={{ width: "100%", color: "white" }}
            >
              No products available
            </Typography>
          )}
        </Grid>
        <Button variant="outlined" onClick={handleBack} sx={{ mt: 2, bgcolor: 'white', color: 'green'}}>
          Back
        </Button>
      </>

  );
};

export default Preview;
