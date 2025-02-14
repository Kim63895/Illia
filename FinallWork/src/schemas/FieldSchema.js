import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  quantity: Yup.number().required("Required").positive().integer(),
  price: Yup.number().required("Required").positive(),
  imgSrc: Yup.string().required("Required").url("Must valid url"),
});
