/*eslint-disable-next-line*/

import React, { useEffect, useState, useParams } from 'react';
import axios from 'axios';
import './App.css';
import { Link, Route } from 'react-router-dom';

import Header from './Components/Header';
import CreateForm from './Components/CreateForm';
import PostCard from './Components/PostCard';

function App() {

  let [post,postChange] = useState()

  useEffect(function(){
    axios('/postData.json')
    .then(function(result){
      result.data.sort((a,b)=> b.id - a.id)
      postChange(result.data)
    })
    .catch(function(err){
      console.log(err)
    })
  },[post])

  return (
    <div className="App">

      <Header></Header>
      <Route exact path='/'>
        <h2>메인페이지</h2>
        <button className='btn'><Link to='/create'>글 작성</Link></button>
        {
          post && post.map(function(a,i){
            return <PostCard post={a} key={i}></PostCard>
          })
        }
        
      </Route>
      
      <Route exact path='/create'>
        <h2>글작성</h2>
       <CreateForm></CreateForm>
      </Route>

    </div>
  );
}


export default App;
