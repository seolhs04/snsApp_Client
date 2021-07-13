/* eslint-disable */

import React, { useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

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
        <Card id='makePostContainer' className='container mt-2'>
          <Button id='makePostBtn' variant='outline-success' as={Link} to='/create'>글 작성</Button>
        </Card>
        {
          props.post && props.post.map(function(a,i){
            return <PostCard post={a} key={i}></PostCard>
          })
        }
      </div>
    );
  }
  
  
  export default Main;