import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Header";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Snackbar from "../components/Snackbar";
import { useState } from "react";
import ProdcutSnackbar from "../components/Snackbar";

const AddProduct = () => {
  let abcd = (values) => {}
  const [snack,setSnack] = useState(false);

  const handleFormSubmit =  async() => {
    setSnack(true);
    const response = await fetch('http://localhost:4500/api/product/addProduct',{
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        title,brand,image,description,price,discount,inventory,category,keywords,
        vendorId: localStorage.getItem('vendorId')
      })
    });
    const data = await response.json();
    setCategory('');
    setTitle('');
    setPrice('');
    setImage('');
    setDiscount('');
    setBrand('');
    setInventory('');
    setKeywords('');
    setDescription('');
  };


  const handleSubmit = async (values, { resetForm }) => {
    setSnack(true);
    const response = await fetch('http://localhost:4500/api/product/addProduct',{
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        title,brand,image,description,price,discount,inventory,category,keywords,
        vendorId: localStorage.getItem('vendorId')
      })
    });
    const data = await response.json();

    // Reset form values after successful submission
    resetForm();

    // Reset individual state values if needed
    setCategory('');
    setTitle('');
    setPrice('');
    setImage('');
    setDiscount('');
    setBrand('');
    setInventory('');
    setKeywords('');
    setDescription('');
  };


  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [category,setCategory] = useState('');
  const [title,setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [discount, setDiscount] = useState('');
  const [brand, setBrand] = useState('');
  const [inventory, setInventory] = useState('');
  const [keywords, setKeywords] = useState('');
  const [description, setDescription] = useState('');
  
 

  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleImageChange = (e) => setImage(e.target.value);
  const handleDiscountChange = (e) => setDiscount(e.target.value);
  const handleBrandChange = (e) => setBrand(e.target.value);
  const handleInventoryChange = (e) => setInventory(e.target.value);
  const handleKeywordsChange = (e) => setKeywords(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    console.log(name,value);
  };

  return (
    
    <Box m="20px">
      <Header title="ADD NEW PRODUCT" subtitle="Add your product" />
      {snack ? <ProdcutSnackbar snack={snack} setSnack={setSnack}/> : <></>}
      <Formik
        initialValues={initialValues}
        validationSchema={checkoutSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="standard"
                color="secondary"
                type="text"
                label="Title"
                onBlur={handleBlur}
                onChange={handleTitleChange}
                value={title}
                name="title"
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="standard"
                color="secondary"
                type="text"
                label="Price (Rs.)"
                onBlur={handleBlur}
                onChange={handlePriceChange}
                value={price}
                name="price"
                error={!!touched.price && !!errors.price}
                helperText={touched.price && errors.price}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="standard"
                color="secondary"
                type="text"
                label="Image Link"
                onBlur={handleBlur}
                onChange={handleImageChange}
                value={image}
                name="email"
                error={!!touched.image && !!errors.image}
                helperText={touched.image && errors.image}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="standard"
                color="secondary"
                type="text"
                label="Discount (%)"
                onBlur={handleBlur}
                onChange={handleDiscountChange}
                value={discount}
                name="address1"
                error={!!touched.discount && !!errors.discount}
                helperText={touched.discount && errors.discount}
                sx={{ gridColumn: "span 1" }}
              />
             <FormControl color="secondary" variant="standard" sx={{  minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={category}
          onChange={handleCategoryChange}
          label="Category"
        >
          <MenuItem value={'book'}>Book</MenuItem>
          <MenuItem value={'apparel'}>Apparel</MenuItem>
          <MenuItem value={'grocery'}>Grocery</MenuItem>
          <MenuItem value={'electronics'}>Electronics</MenuItem>
        </Select>
      </FormControl>
              <TextField
                fullWidth
                variant="standard"
                color="secondary"
                type="text"
                label="Brand"
                onBlur={handleBlur}
                onChange={handleBrandChange}
                value={brand}
                name="brand"
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="standard"
                color="secondary"
                type="text"
                label="Inventory"
                onBlur={handleBlur}
                onChange={handleInventoryChange}
                value={values.inventory}
                name="brand"
                error={!!touched.inventory && !!errors.inventory}
                helperText={touched.inventory && errors.inventory}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="standard"
                color="secondary"
                type="text"
                label="Keywords   ( , seperated)"
                onBlur={handleBlur}
                onChange={handleKeywordsChange}
                value={keywords}
                name="keywords"
                error={!!touched.keywords && !!errors.keywords}
                helperText={touched.keywords && errors.keywords}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="standard"
                color="secondary"
                type="text"
                label="Description"
                multiline
                maxRows={6}
                onBlur={handleBlur}
                onChange={handleDescriptionChange}
                value={description}
                name="lastName"
                error={!!touched.description && !!errors.description} 
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Add Product
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0  {2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// const checkoutSchema = yup.object().shape({
//   firstName: yup.string().required("required"),
//   lastName: yup.string().required("required"),
//   email: yup.string().email("invalid email").required("required"),
//   contact: yup
//     .string()
//     .matches(phoneRegExp, "Phone number is not valid")
//     .required("required"),
//   address1: yup.string().required("required"),
//   address2: yup.string().required("required"),
// });
const checkoutSchema = yup.object().shape({
 
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};
const initialValues2 = {
  title: "",
  description: "",
  image: "",
  price: 0,
  discount: 0,
  brand:"",
  inventory: 0,
  keywords: "",
}

export default AddProduct;