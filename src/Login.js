// import React from "react";
// import { useFormik } from "formik";
// import { Link } from "react-router-dom";

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
// import { Padding } from "@mui/icons-material";

// function Signin() {
//   let navigate = useNavigate()
//   let formik = useFormik({
//     initialValues: {
//       username: "",

//       password: "",
//       role:""
//     },
//     onSubmit: async (values) => {
//    try{
//     const login = await axios.post(`${config().api}/server/users/signin`,values);
//     localStorage.setItem("token",login.data.token);
//     localStorage.setItem("userid",login.data.userid);
//     alert(login.data.message)
//     if(login.data.role=="user"){
//     navigate("/mainpage");
//     }
//     else{
//       navigate("/adminlogin")
//     }

//    }
//    catch(err){
//     console.log(err);
//    }

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
//           <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
//            BOOKMYSHOW
//           </Typography>
//           <Button component ={Link} to="/register" variant="contained"> Signup</Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//    </div>
//    <div className="signin"  >
// <form onSubmit={formik.handleSubmit}>
//  <TextField  helperText="Please enter your role user or admin use small letter" id="filled-basic" name="role" value={formik.values.role} onChange={formik.handleChange} label="admin/user" variant="filled"
//  style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}} /><br/>

// <TextField id="filled-basic" name="username" value={formik.values.username} onChange={formik.handleChange} label="UserName" variant="filled"
//  style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}} /><br/>

//  <TextField id="filled-basic" name="password" value={formik.values.password} onChange={formik.handleChange} label="Password" variant="filled" type="password"

//  style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}} /><br/>

//  {/* <Button variant="text"style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}}>FORGET PASSWORD  </Button><br/> */}

//  <Button type="submit"  variant="contained"style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}}>LOGIN</Button><br/>
//  </form>
//  <Typography variant="h6"style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}} >
// Don't have an account? Click
//  <Button component ={Link} to="/register"variant="text">Signup</Button> to sign up.</Typography><br/>
//  </div>

// <div className="userinfo" style={{marginLeft:"300px"}}>
// <h3>Credentials for testing user</h3>
// <b>user/admin :</b>user<br/>
// <b>username :</b>user123<br/>
// <b>password :</b>user123<br/>

// </div>
// <div className="admininfo" style={{marginLeft:"900px" ,marginTop:"-110px"}}>
// <h3>Credentials for testing admin</h3>
// <b>user/admin :</b>admin<br/>
// <b>username :</b>admin1234<br/>
// <b>password :</b>admin1234<br/>

// </div>
// </div>

// );
// }

// export default Signin;


import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

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
import { Padding } from "@mui/icons-material";
import Avatar from '@mui/material/Avatar';

import CssBaseline from '@mui/material/CssBaseline';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Grid from '@mui/material/Grid';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();
function Signin() {
  let navigate = useNavigate()
  let formik = useFormik({
    initialValues: {
      username: "",

      password: "",
      role:""
    },
    onSubmit: async (values) => {
   try{
    const login = await axios.post(`${config().api}/server/users/signin`,values);
    localStorage.setItem("token",login.data.token);
    localStorage.setItem("userid",login.data.userid);
    alert(login.data.message)
    if(login.data.role=="user"){
    navigate("/mainpage");
    }
    else{
      navigate("/adminlogin")
    }

   }
   catch(err){
    alert("invalid credentials or please register")
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
    <div className="log" style={{backgroundImage:"https://source.unsplash.com/random"}}>
    <div className="Register" style={
      {

        background:"#334"
      }
    }>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{background:"#334"}}>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
           BOOKMYSHOW
          </Typography>
          <Button component ={Link} to="/register" variant="contained"> Signup</Button>
        </Toolbar>
      </AppBar>
    </Box>
   </div>
   <div className="signin"  >
<form onSubmit={formik.handleSubmit}>
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
        <Grid item xs={12} sm={8} md={5} component={""} elevation={6} square>
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
              Sign in
            </Typography>
            <Box  noValidate  sx={{ mt: 1 }}>
            <TextField
           helperText="Please enter your role user or admin use small letter"
              margin="normal"
              required
              fullWidth
              name="role"
              label="admin/user"
              type="role"
              id="role"
              autoComplete="role"
              value={formik.values.role} onChange={formik.handleChange}
            />
           <TextField id="filled-basic" 
name="username" value={formik.values.username} onChange={formik.handleChange} 
label="Username" variant="outlined" margin="normal"
required
fullWidth
/><br/>
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
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <br/>
              <Link href="#" to="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
              <Grid container>
                <Grid item xs>
                  
                  <div className="userinfo"  >
<h3>Credentials for testing user</h3>
<b>user/admin :</b>user<br/>
<b>username :</b>user123<br/>
<b>password :</b>user123<br/>

</div>
             
              
<div className="admininfo" >
<h3>Credentials for testing admin</h3>
<b>user/admin :</b>admin<br/>
<b>username :</b>admin1234<br/>
<b>password :</b>admin1234<br/> 

</div>
                  
                </Grid>
                <Grid item>
                 
                  
                </Grid>
              </Grid>
            
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>

    
   
        
         

              
              {/* <div className="userinfo"  >
<h3>Credentials for testing user</h3>
<b>user/admin :</b>user<br/>
<b>username :</b>user123<br/>
<b>password :</b>user123<br/>

</div>
             
              
               <div className="userinfo" >
<h3>Credentials for testing user</h3>
<b>user/admin :</b>user<br/>
<b>username :</b>user123<br/>
<b>password :</b>user123<br/>

</div> */}
      
    </form>
 {/* <TextField  helperText="Please enter your role user or admin use small letter" id="filled-basic" name="role" value={formik.values.role} onChange={formik.handleChange} label="admin/user" variant="filled"
 style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}} /><br/>

<TextField id="filled-basic" name="username" value={formik.values.username} onChange={formik.handleChange} label="UserName" variant="filled"
 style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}} /><br/>

 <TextField id="filled-basic" name="password" value={formik.values.password} onChange={formik.handleChange} label="Password" variant="filled" type="password"

 style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}} /><br/> */}

 {/* <Button variant="text"style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}}>FORGET PASSWORD  </Button><br/> */}

 {/* <Button type="submit"  variant="contained"style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}}>LOGIN</Button><br/>
 </form>
 <Typography variant="h6"style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}} >
Don't have an account? Click
 <Button component ={Link} to="/register"variant="text">Signup</Button> to sign up.</Typography><br/>
 </div>

<div className="userinfo" style={{marginLeft:"300px"}}>
<h3>Credentials for testing user</h3>
<b>user/admin :</b>user<br/>
<b>username :</b>user123<br/>
<b>password :</b>user123<br/>

</div>
<div className="admininfo" style={{marginLeft:"900px" ,marginTop:"-110px"}}>
<h3>Credentials for testing admin</h3>
<b>user/admin :</b>admin<br/>
<b>username :</b>admin1234<br/>
<b>password :</b>admin1234<br/> */}

</div>
</div>

);
}

export default Signin;