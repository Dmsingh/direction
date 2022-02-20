import React,{useState} from 'react';
// import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles.js';
import axios from 'axios';
const Navbar = () => {
  const classes = useStyles();
const [origin, setorigin] = useState("")
const [destination, setdestination] = useState("")
const [data, setdata] = useState("")
const submitHandler =async (e)=> {
    e.preventDefault()
    if(origin !=="" && destination!=="") {
     await axios.post(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=AIzaSyBk9Lm_M2FdJTHXZihGYmy9Fel32n_Ab9E`).then((response)=>{
      setdata(response.routes.legs)
      
     })
     .catch((error)=>{
         
         console.log(error)
     })
     
    }
}

  return (
      <div>

      
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Trip Advisor
        </Typography>
        <Box display="flex">
     
          
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Origin" classes={{ root: classes.inputRoot, input: classes.inputInput }}
              value={origin} onChange={(e)=>{setorigin(e.target.value)}}
              />
            </div>
          
          
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Destination" classes={{ root: classes.inputRoot, input: classes.inputInput }} value={destination} onChange={(e)=>{setdestination(e.target.value)}} />
            </div>

            <button onClick={submitHandler}>Submit</button>
             
        </Box>
      </Toolbar>
      
    </AppBar>

    {
        data && 
        data.map((value)=>(
          <div>
           <h4>Points</h4>
           <h4>Distance</h4>
        
        </div>
        ))
        
    }
    </div>
  );
};

export default Navbar;
