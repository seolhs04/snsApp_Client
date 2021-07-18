/* eslint-disable */

import React, { useEffect, useState } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';

import Header from './Components/Header';
import CreateForm from './Components/CreateForm';
import Main from './Components/Main';
import UpdateForm from './Components/UpdateForm';
import Delete from './Components/Delete';
import Test from './Components/Test';

function App() {
  let [post,postChange] = useState()
  return (
    <div className="App">

      <Header></Header>
      <Route exact path='/'>
        <div className='pageBody'>
         <Main post={post} postChange={postChange}></Main>
        </div>
      </Route>
      
      <Route exact path='/create'>
        <div className='pageBody'>
          <CreateForm></CreateForm>
        </div>
      </Route>

      <Route path={`/update/:path`}>
        <div className='pageBody'>
          <UpdateForm></UpdateForm>
        </div>
      </Route>

      <Route path={`/delete/:path`}>
        <Delete></Delete>
      </Route>

      <Route path={`/test`}>
        <Test></Test>
      </Route>

    </div>
  );
}


export default App;
