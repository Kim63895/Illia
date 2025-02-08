import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { openModal } from "../../redux/slices/modalSlice";
import { deleteProduct } from "../../redux/slices/productsSlice";
import ModalList from "../../components/ProductsList/ModalList";
import selectors from "../../redux/slices/selectors";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectors.products);
  const isLoading = useSelector(selectors.isLoading);
  const navigate = useNavigate();

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleAddProduct = () => {
    dispatch(openModal());
  };

  const handleEditProduct = (product) => {
    dispatch(openModal(product));
  };
  const handleSubmit = () => navigate("/preview");
  return (
    <Box sx={{height: '100vh'}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          bgcolor: "primary.main",
          color: "white",
        }}
      >
        <Button
          variant="conteined"
          onClick={handleSubmit}
          sx={{ bgcolor: "white", color: "green" }}
        >
          Preview
        </Button>
        <Typography variant="h4">Products</Typography>
        <Button
          variant="contained"
          onClick={handleAddProduct}
          disabled={isLoading}
          sx={{ bgcolor: "white", color: "green" }}
        >
          Add Product
        </Button>
      </Box>
      {isLoading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            top: 40,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <CircularProgress sx={{ color: "#4caf50" }} thickness={5} />
        </Box>
      )}
      <Table>
        <TableHead sx={{ bgcolor: "white" }}>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ bgcolor: "white" }}>
          {products && products.length > 0 ? (
            products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.displayId}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  <IconButton
                    variant="contained"
                    color="success"
                    onClick={() => handleEditProduct(product)}
                    disabled={isLoading}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    variant="contained"
                    color="error"
                    onClick={() => handleDeleteProduct(product.id)}
                    disabled={isLoading}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} align="center">
                No products available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <ModalList />
    </Box>
  );
};

export default Products;
