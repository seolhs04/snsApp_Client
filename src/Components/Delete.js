/* eslint-disable */

import React, { useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link, Route, useParams, useHistory } from 'react-router-dom';

function Delete(){
    var { path } = useParams();
    var history = useHistory();

    useEffect(function(){
        axios.post('/delete_process', {'id':path})
        .then(()=>{
            
        })
        .catch((err)=>{
            console.log(err)
        })
        return history.push('/')
      },[])

    return(
        <div></div>
    );
}
  
  
  export default Delete;