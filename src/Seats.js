import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { config } from './Config';
import { useNavigate } from 'react-router-dom';
function Seats() {
const [seat,setseat]=useState([]);
const [count,setcount]=useState(0);
const [booked,setbooked]=useState([]);
fetch = async()=>{
    try{
    const seat = await axios.get(`${config().api}/server/seats`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      } );
     setseat(seat.data);
    
    }
    catch(err){
        console.log(err);
    }
}

useEffect(()=>{
    fetch();
  
},[])

const bookings = async(seatid)=>{
    const index = seat.findIndex((x)=>x._id===seatid);
    seat[index].booking=true;

    const temp = booked.some((x)=>x.row==seat[index].row && x.column==seat[index].column);
    setcount(booked.length*180);


    
if(!temp){
    
    setbooked([{row:seat[index].row,column:seat[index].column},...booked]);
    
    console.log(booked);
}

  
   
}
const navigate = useNavigate();
const handlesubmit = async()=>{
    if(booked.length>0){
    var str="";
    for(let i=0;i<booked.length;i++){
str+=booked[i].column+booked[i].row+" "
    }
    try{
    await axios.put(`${config().api}/server/seats/booking`,{booked}, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      });
    }
    catch(err){
        console.log(err);
    }
    try{
       
        await axios.post(`${config().api}/server/movies/email`,{movie:localStorage.getItem("movie"),seat:str,theatre:localStorage.getItem("theatre"),time:localStorage.getItem("time"),userid:localStorage.getItem("userid"),total:booked.length*180}, {
            headers: {
              Authorization: `${localStorage.getItem("token")}`,
            },
          })
    navigate("/ticket");
        
    }
    catch(err){
        console.log(err);
    }
}

}


  return (
  <> 
 <h1 className='text-center'>{localStorage.getItem("movie")}</h1>
    <div className='container d-flex flex-wrap justify-content-around'   >
        
    {seat.map((x)=>{
        return(<button disabled={x.booking} onClick={()=>{bookings(x._id)}} className={x.booking ? `notseat` : `seat` }>{`${x.column}${x.row}`}</button>)
    })}
   
 </div> 
 <div className='container d-flex align-items-center justify-content-center'>
 {
 booked.map((x)=>{
    return( <p className='ms-2'>{x.column}{x.row}</p>)
 })
    }
    
    </div>
    <h1 className='h1'>{`Total : ${booked.length*180}`}</h1>
    <Button variant='contained' onClick={()=>handlesubmit()}>Book</Button>
 </>
 
 
 
 
 )
}

export default Seats