/* eslint-disable */

import React, { useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';

import PostCard from './PostCard';

function Main(props){
    useEffect(function(){
      axios('/postData.json')
      .then(function(result){
        result.data.sort((a,b)=> b.id - a.id)
        props.postChange(result.data)
      })
      .catch(function(err){
        console.log(err)
      })
    },[])
    return(
      <div>
      <h2>메인페이지</h2>
          <button className='btn'><Link to='/create'>글 작성</Link></button>
          {
            props.post && props.post.map(function(a,i){
              return <PostCard post={a} key={i}></PostCard>
            })
          }
      </div>
    );
  }
  
  
  export default Main;