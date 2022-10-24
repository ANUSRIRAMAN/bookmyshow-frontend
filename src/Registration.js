import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { style } from "@mui/system";
import { config } from "./Config";
function Register() {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      role:""
    },
    onSubmit: async (values) => {
      try{
const users = await axios.post(`${config().api}/server/users/register`,values);
alert(users.data.message);     
navigate("/signin")
}
      catch(err){
        console.log(err);
      }
     
    },
  });
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div>
    <div className="Register" style={
      {

        background:"#334"
      }
    }>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{background:"#334"}}>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} >
           BOOKMYSHOW
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
   </div>
<form onSubmit={formik.handleSubmit}>
 <TextField name="role" value={formik.values.role} onChange={formik.handleChange} id="filled-basic" label="Admin/User" variant="filled"
 style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}} /><br/>

<TextField name="username" value={formik.values.username} onChange={formik.handleChange} id="filled-basic" label="UserName" variant="filled"
 style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}} /><br/>

 <TextField name="email" value={formik.values.email} onChange={formik.handleChange} id="filled-basic" label="Email" variant="filled" type="email"
 style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}} /><br/>

 <TextField name="password" value={formik.values.password} onChange={formik.handleChange} id="filled-basic" label="Password" variant="filled" type="password"
 style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}} /><br/>
 
 <Button type="submit" variant="contained"style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}}>Register</Button><br/>

 </form>
</div>


);
}

export default Register;