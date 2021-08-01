/* eslint-disable */

import React, { useEffect, useState } from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';

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

      <Switch>
      <Route exact path='/' component={Main}/>
      
      <Route exact path='/create' component={CreateForm}/>

      <Route path={`/update/:path`}>
          <UpdateForm post={post}></UpdateForm>
      </Route>

      <Route path={`/delete/:path`} component={Delete}/>

      <Route path={`/test`} component={Test}/>
      </Switch>
      

    </div>
  );
}


export default App;
