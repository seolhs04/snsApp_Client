/* eslint-disable */

import React, { useEffect, useState } from 'react';
import '../App.css';
import { Form, Card  } from 'react-bootstrap';
import axios from 'axios';
import { Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';

function UpdateForm(){
    let [titleOfPost, tOP_change] = useState('')
    let [descriptionOfPost, dOP_change] = useState('')
    var { path } = useParams();

    useEffect(function(){
        axios('/postData.json')
        .then(function(result){
          result.data.find(function(a){
              if(a.id == path){
                tOP_change(a.title);
                dOP_change(a.description);
              }
          })
        })
        .catch(function(err){
          console.log(err)
        })
      },[])

    return(
        <Card className='container mt-3'>
            <Form className='container'>
                <Form.Group className="mb-3">
                    <Form.Label className="mt-3">제목</Form.Label>
                    <Form.Control id='title' name='title' type="text" placeholder={`${titleOfPost}`} onChange={
                        (e)=>{
                            tOP_change(e.target.value);
                        }
                    }/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>내용</Form.Label>
                    <Form.Control id='description' name='description' as="textarea" placeholder={`${descriptionOfPost}`} rows={4} onChange={
                        (e)=>{
                            dOP_change(e.target.value);
                        }
                    }/>
                </Form.Group>
                <Link to='/'>
                    <button className='btn btn-primary mb-3' onClick={
                        ()=>{
                            axios.post('/update_process', {'id':path ,'title':titleOfPost , 'description':descriptionOfPost})
                            .then(()=>{
                                
                            })
                            .catch((err)=>{
                                console.log(err)
                            })
                        }
                    }>제출</button>
                 </Link>
            </Form>
        </Card>
    )
}

export default UpdateForm;