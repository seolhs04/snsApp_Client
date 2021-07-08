/*eslint-disable-next-line*/

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';

import Header from './Components/Header';
import CreateForm from './Components/CreateForm';
import PostCard from './Components/PostCard';

function App() {

  let [post,postChange] = useState()

  useEffect(function(){
    axios('/postData.json')
    .then(function(result){
      result.data.sort(function(a,b){
        return b.id - a.id;
      })
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
        <PostCard></PostCard>
      </Route>
      
      <Route exact path='/create'>
        <h2>글작성</h2>
       <CreateForm></CreateForm>
      </Route>

      {/* <button onClick={function(){
        axios('/data.json')
        .then(function(result){
          console.log(result.data)
        })
        .catch(function(err){
          console.log(err)
        })
      }}>get data</button> */}
    </div>
  );
}


export default App;
