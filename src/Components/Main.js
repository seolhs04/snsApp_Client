/* eslint-disable */

import React, { useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

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
        <div className='mainContents'>
          <div className='posts container'>
          <Card id='makePostContainer' className='container mt-2'>
            <Button id='makePostBtn' variant='outline-success' as={Link} to='/create'>글 작성</Button>
          </Card>
            {
              props.post && props.post.map(function(a,i){
                return <PostCard post={a} key={i}></PostCard>
              })
            }
          </div>
          <Card className='recomendCard container mt-2'>
            <Card.Header>회원님을 위한 추천</Card.Header>
            <Card.Body className='p-0 recomendList'>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
  
  
  export default Main;