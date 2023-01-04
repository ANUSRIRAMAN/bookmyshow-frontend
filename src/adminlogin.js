import TextareaAutosize from '@mui/material/TextareaAutosize';
import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Formik, useFormik } from "formik";
import { config } from './Config';
import { useNavigate } from 'react-router-dom';
import Logout from './Logout';
import { AppBar, Toolbar,Typography } from '@mui/material';
import "./adminLogin.css"
import { Link } from 'react-router-dom';

function App() {
  
const formik = useFormik({
  initialValues : {
    movie : "",
    theatre:"",
    time:"",
    description:"",
    link:""
  },
  onSubmit : async(values)=>{
    try{
await axios.post(`${config().api}/server/movies`,values, {
  headers: {
    Authorization: `${localStorage.getItem("token")}`,
  },
});
alert("Movie added successfully");
fetchdata();
    }
    catch(err){
      console.log(err);
    }

  }
})
const [movies,setmovies]=useState([])
const fetchdata = async()=>{
  const movie = await axios.get(`${config().api}/server/movies`, {
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
  });
setmovies(movie.data);
}
useEffect(()=>{
fetchdata();
},[])

const handledelete=async(movieid)=>{
  try{
  const deletemovie = await axios.delete(`${config().api}/server/movies/${movieid}`, {
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
  });
alert(deletemovie.data);
fetchdata();
  }
  catch(err){
    console.log(err);
  }

}
const navigate = useNavigate();
const logout = ()=>{
  localStorage.removeItem("userid");
  localStorage.removeItem("token");
  navigate("/");

}
 

  return (
    <div >
     <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static"  style={{ background: "#334" }}>
        <Toolbar >
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BOOKMYSHOW
          </Typography>
         <Logout/>
        </Toolbar>
      </AppBar>
    </Box>

<img src="https://media.giphy.com/media/NnFZysBOEprAA/giphy.gif" alt="Nature" style={{width:"600px", height:"500px" ,marginTop:"30px", marginLeft:"30px",paddingTop:"30px"}}/>
      <Formik
        // initialValues={formData}
        // validate={validateForm}
        // onSubmit={handleSubmit}
        // enableReinitialize={true}
      >
        
        
          
          <Box className='formik' style={{paddingBottom:"-1000px", paddingLeft:"700px",marginTop:"-500px"}}
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
           onSubmit={formik.handleSubmit}
          >
            <TextField
             style={{width:"700px"}}
              id="name"
              name="movie"
              label="Moviename"
              variant="outlined"
             value={formik.values.movie}
              onChange={formik.handleChange}
            
            />
            <br />
            {/* <span style={{ color: "red" }}>{touched.Moviename && errors.Moviename}</span> */}
            <br />

            <TextField
             style={{width:"700px"}}
              id="genre"
              name="genre"
              label="genre"
              variant="outlined"
             value={formik.values.genre}
              onChange={formik.handleChange}
            
            />
            <br />
            {/* <span style={{ color: "red" }}>{touched.genre && errors.genre}</span> */}
            <br />

            <TextField fullWidth 
             style={{width:"700px"}}
            label="link" 
            id="link"
            name="link"
            variant="outlined"
             value={formik.values.link}
            onChange={formik.handleChange}
            // onBlur={handleBlur}
            
            /> <br />
            {/* <span style={{ color: "red" }}>{touched.link && errors.link}</span> */}
            <br />


            <TextField
             style={{width:"700px"}}
              id="time"
              name="time"
              label="time"
              variant="outlined"
             value={formik.values.time}
              onChange={formik.handleChange}
            //   onBlur={handleBlur}
            />
            <br />
            {/* <span style={{ color: "red" }}>{touched.time && errors.time}</span> */}
            <br />


      
            <TextField
            style={{width:"700px"}}
              id="Theatername"
              name="theatre"
              label="Theatername"
              variant="outlined"
               value={formik.values.theatre}
              onChange={formik.handleChange}
              // onBlur={handleBlur}
            />
            <br />
            {/* <span style={{ color: "red" }}> */}
              {/* {touched.Theatername && errors.Theatername} */}
            {/* </span> */}
            <br />


            <TextareaAutosize
      aria-label="description"
      name='description'
      value={formik.values.description}
      
      placeholder="MovieDescription"
      style={{width:"700px"}}
      id="description"
      label="description"
      variant="outlined"
      // value={formik.values.Description}
      onChange={formik.handleChange}
      // onBlur={handleBlur}
    />


            {/* <TextField
            style={{width:"700px"}}
              id="Description"
              label="Description"
              variant="outlined"
               value={values.Description}
              onChange={handleChange}
              onBlur={handleBlur}
            /> */}
            <br />
            {/* <span style={{ color: "red" }}> */}
              {/* {touched.Description && errors.Description} */}
            {/* </span> */}
            <br />
    
    

            
           
            <Button variant="contained" type="submit" >
              Save
            </Button>
           
          </Box>
          
        
        
      </Formik>
     

      <h3 className='head' style={{marginLeft:"35px"}}>Admin Data</h3><br/>
      <TableContainer className ="table" component={Paper} >
        <Table sx={{ minWidth: 850 }} aria-label="simple table" style={{marginLeft:"30px",width:"500px" ,backgroundColor:"#4F4E4D", color:"white"}}>
          <TableHead style={{color:"white"}}>
            <TableRow style={{backgroundColor:"#334"}}>
           
              <TableCell align="Left"><font color="white">Moviename</font></TableCell>
              <TableCell align="Left"><font color="white">Link</font></TableCell>
              <TableCell align="Left"><font color="white">Genres</font></TableCell>
              <TableCell align="Left"><font color="white">Theatername</font></TableCell>
              <TableCell align="Left"><font color="white">Description</font></TableCell>
              <TableCell align="Left"><font color="white">Time</font></TableCell>
              <TableCell ><font color="white">Actions</font></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
             
              {movies.map((x)=>{
                return(<TableRow >
                 
                   
                 
                  <TableCell align="Left"><font color="white">{x.movie}</font></TableCell>
                  <TableCell align="Left"><font color="white">{<Button href={x.link} >link</Button>}</font></TableCell>
                  <TableCell align="Left"><font color="white">{x.genre}</font></TableCell>
                  <TableCell align="Left"><font color="white">{x.theatre}</font></TableCell>
                  <TableCell align="Left"><font color="white">{x.description}</font></TableCell>
                  <TableCell align="Left"><font color="white">{x.time}</font></TableCell>
                  
                  
                  <TableCell>
                    
                    <Button onClick={()=>{handledelete(x._id)}} variant="text">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>)
              })}
            
          </TableBody>
        </Table>
      </TableContainer>
      <div className='pic' style={{paddingLeft:"900px",width:"50px",height:"80px",marginTop:"-1500px" }}>
      <img src="https://media.giphy.com/media/RJsxVoYoEYxN57jeXv/giphy.gif"
       alt="Nature" 
      /><br/> <img src="https://media.giphy.com/media/RJsxVoYoEYxN57jeXv/giphy.gif"
      alt="Nature" 
     /><br/> <img src="https://media.giphy.com/media/RJsxVoYoEYxN57jeXv/giphy.gif"
     alt="Nature" 
    />
   </div> </div>
  );
}

export default App;