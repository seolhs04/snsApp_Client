/* eslint-disable */

import React, { useEffect, useState } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';

import Header from './Components/Header';
import CreateForm from './Components/CreateForm';
import Main from './Components/Main';
import UpdateForm from './Components/UpdateForm';
import Delete from './Components/Delete';

function App() {
  let [post,postChange] = useState()
  return (
    <div className="App">

      <Header></Header>
      <Route exact path='/'>
        <Main post={post} postChange={postChange}></Main>
      </Route>
      
      <Route exact path='/create'>
        <h2>글작성</h2>
       <CreateForm></CreateForm>
      </Route>

      <Route path={`/update/:path`}>
        <h2>글수정</h2>
        <UpdateForm></UpdateForm>
      </Route>

      <Route path={`/delete/:path`}>
        <h2>글삭제</h2>
        <Delete></Delete>
      </Route>

    </div>
  );
}


export default App;
