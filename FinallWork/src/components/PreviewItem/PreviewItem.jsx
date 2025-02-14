import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { number, string } from "prop-types";

const PreviewItem = ({ imgSrc, name, quantity, price }) => {
  return (
    <Card sx={{ mw: 345 }}>
      <CardMedia component="img" height="320" image={imgSrc} />
      <CardContent>
        <Typography
          component="div"
          variant="h4"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#000000",
          }}
        >
          {name}
        </Typography>
        <Box
          component="div"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            component="span"
            sx={{ color: "#FC5B00", fontWeight: "700" }}
          >
            Price: {price}₴
          </Typography>
          <Typography
            component="span"
            sx={{ fontWeight: "500", color: "#000000" }}
          >
            Quantity: {quantity}
          </Typography>
        </Box>
        <Typography component="br"></Typography>

        <Typography
          component="span"
          color= 'success'
          sx={{ display: "flex", justifyContent: "center",  }}
        >
          <ShoppingCartIcon variant="conteined" />
          Ready to send
        </Typography>
      </CardContent>
    </Card>
  );
};
PreviewItem.propTypes = {
  name: string,
  quantity: number,
  price: number,
  imgSrc: string,
};

export default PreviewItem;
