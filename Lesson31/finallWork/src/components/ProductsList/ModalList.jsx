import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Box, Button, Typography, TextField } from "@mui/material";
import { closeModal } from "../../redux/slices/modalSlice.js";
import {
  saveProductAsync,
  addProductAsync,
  fetchStart,
} from "../../redux/slices/productsSlice.js";
import { Formik, Form, Field } from "formik";
import { validationSchema } from "../schemas/FieldSchema.js";

const ModalList = () => {
  const dispatch = useDispatch();
  const { isModalOpen, currentProduct } = useSelector((state) => state.modal);

  
  useEffect(() => {
    dispatch(fetchStart());
  }, [dispatch]);

  const handleSubmit = (values, { resetForm }) => {
    
    if (currentProduct) {
      dispatch(saveProductAsync({ ...values, id: currentProduct.id, }));
    } else {
      dispatch(addProductAsync(values));
    }
    resetForm();
    dispatch(closeModal());
  };

  return (
    <Modal open={isModalOpen} onClose={() => dispatch(closeModal())}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Formik
          initialValues={{
            displayId: currentProduct?.displayId || 0,
            name: currentProduct?.name || "",
            category: currentProduct?.category || "",
            quantity: currentProduct?.quantity || 0,
            price: currentProduct?.price || 0,
            imgSrc: currentProduct?.imgSrc || "",
          }}
          enableReinitialize={true}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ errors, touched, resetForm }) => (
            <Form>
              <Typography variant="h6" mb={2}>
                {currentProduct ? "Edit Product" : "Add Product"}
              </Typography>
              <Field
                as={TextField}
                label="Name"
                name="name"
                fullWidth
                error={touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ mb: 2 }}
              />
              <Field
                as={TextField}
                label="Category"
                name="category"
                fullWidth
                error={touched.category && !!errors.category}
                helperText={touched.category && errors.category}
                sx={{ mb: 2 }}
              />
              <Field
                as={TextField}
                label="Quantity"
                name="quantity"
                type="number"
                fullWidth
                error={touched.quantity && !!errors.quantity}
                helperText={touched.quantity && errors.quantity}
                sx={{ mb: 2 }}
              />
              <Field
                as={TextField}
                label="Price"
                name="price"
                type="number"
                fullWidth
                error={touched.price && !!errors.price}
                helperText={touched.price && errors.price}
                sx={{ mb: 2 }}
              />
              <Field
                as={TextField}
                label="Enter src-img"
                name="imgSrc"
                type="text"
                fullWidth
                error={touched.imgSrc && !!errors.imgSrc}
                helperText={touched.imgSrc && errors.imgSrc}
                sx={{ mb: 2 }}
              />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button type="submit" variant="contained" color="primary">
                  Save
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => { 
                    resetForm(); 
                    dispatch(closeModal())}}
                >
                  Cancel
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default ModalList;
