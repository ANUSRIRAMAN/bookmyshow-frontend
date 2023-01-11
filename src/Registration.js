// import React from "react";
// import { useFormik } from "formik";
// import axios from "axios";
// import Button from '@mui/material/Button';
// import { useNavigate } from "react-router-dom";
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import TextField from '@mui/material/TextField';
// import SearchIcon from '@mui/icons-material/Search';
// import { style } from "@mui/system";
// import { config } from "./Config";
// import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";
// function Register() {
//   let navigate = useNavigate();
//   let formik = useFormik({
//     initialValues: {
//       username: "",
//       email: "",
//       password: "",
//       role:""
//     },
//     onSubmit: async (values) => {
//       try{
// const users = await axios.post(`${config().api}/server/users/register`,values);
// alert(users.data.message);     
// navigate("/")
// }
//       catch(err){
//         console.log(err);
//       }
     
//     },
//   });
//   const [open, setOpen] = React.useState(false);
//   const handleClose = () => {
//     setOpen(false);
//   };
//   const handleToggle = () => {
//     setOpen(!open);
//   };
//   return (
//     <div>
//     <div className="Register" style={
//       {

//         background:"#334"
//       }
//     }>
//        <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar style={{background:"#334"}}>
//           <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} >
//            BOOKMYSHOW  
//           </Typography>
//           <Button component ={Link} to="/"variant="contained">Signin</Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//    </div>
// <form onSubmit={formik.handleSubmit}>
//  <TextField helperText="Please enter your role user or admin use small letter" name="role" value={formik.values.role} onChange={formik.handleChange} id="filled-basic" label="admin/user" variant="filled"
//  style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}} /><br/>

// <TextField name="username" value={formik.values.username} onChange={formik.handleChange} id="filled-basic" label="UserName" variant="filled"
//  style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}} /><br/>

//  <TextField helperText="Please enter your valid email to receive ticket booked status mail" name="email" value={formik.values.email} onChange={formik.handleChange} id="filled-basic" label="Email" variant="filled" type="email"
//  style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}} /><br/>

//  <TextField name="password" value={formik.values.password} onChange={formik.handleChange} id="filled-basic" label="Password" variant="filled" type="password"
//  style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}} /><br/>
 
//  <Button type="submit" variant="contained"style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}}>Register</Button><br/>

//  </form>
// </div>


// );
// }

// export default Register;


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
import Avatar from '@mui/material/Avatar';

import CssBaseline from '@mui/material/CssBaseline';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Paper from '@mui/material/Paper';

import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

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
navigate("/")
}
      catch(err){
        alert("user already exist please create account with someother credential")
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
    <ThemeProvider theme={theme}>
<Grid container component="main" sx={{ height: '100vh' }}>
  <CssBaseline />
  <Grid
    item
    xs={false}
    sm={4}
    md={7}
    sx={{
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor: (t) =>
        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  />
  <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
       New user! Register
      </Typography>
      <Box component=""  sx={{ mt: 1 }}>
      <form onSubmit={formik.handleSubmit}>
      {/* <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="username"
          name="username"
          autoComplete="username"
          autoFocus
          value={formik.values.username} onChange={formik.handleChange}
        /> */}
           <TextField id="role" label="role" variant="outlined"  margin="normal"
          required
          fullWidth
         name="role"
         autoFocus
          value={formik.values.role} onChange={formik.handleChange}
          type="string"
          />
        <TextField id="username" label="username" variant="outlined"  margin="normal"
          required
          fullWidth
         name="username"
         autoFocus
          value={formik.values.username} onChange={formik.handleChange}
          type="string"
          />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={formik.values.email} onChange={formik.handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={formik.values.password} onChange={formik.handleChange}
        />
        {/* <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        /> */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        </form>
        <Grid container>
          <Grid item xs>
            <Link href="#" to="/"variant="body2">
              To Login Page
            </Link>
          </Grid>
          <Grid item>
            {/* <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link> */}
          </Grid>
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Box>
    </Box>
  </Grid>
</Grid>
</ThemeProvider>
//     <div>
//     <div className="Register" style={
//       {

//         background:"#334"
//       }
//     }>
//        <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar style={{background:"#334"}}>
//           <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} >
//            BOOKMYSHOW  
//           </Typography>
//           <Button component ={Link} to="/"variant="contained">Signin</Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//    </div>
// <form onSubmit={formik.handleSubmit}>
//  <TextField helperText="Please enter your role user or admin use small letter" name="role" value={formik.values.role} onChange={formik.handleChange} id="filled-basic" label="admin/user" variant="filled"
//  style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}} /><br/>

// <TextField name="username" value={formik.values.username} onChange={formik.handleChange} id="filled-basic" label="UserName" variant="filled"
//  style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}} /><br/>

//  <TextField helperText="Please enter your valid email to receive ticket booked status mail" name="email" value={formik.values.email} onChange={formik.handleChange} id="filled-basic" label="Email" variant="filled" type="email"
//  style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}} /><br/>

//  <TextField name="password" value={formik.values.password} onChange={formik.handleChange} id="filled-basic" label="Password" variant="filled" type="password"
//  style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}} /><br/>
 
//  <Button type="submit" variant="contained"style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}}>Register</Button><br/>

//  </form>
// </div>


);
}

export default Register;