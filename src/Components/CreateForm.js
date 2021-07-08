// eslint-disable-next-line

import React, { useState } from 'react';
import '../App.css';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CreateForm(){
    let [titleOfPost, tOP_change] = useState('')
    let [descriptionOfPost, dOP_change] = useState('')

    return(
        <div>
            <Form className='container'>
                <Form.Group className="mb-3">
                    <Form.Label>제목</Form.Label>
                    <Form.Control id='title' name='title' type="text" onChange={
                        (e)=>{
                            tOP_change(e.target.value);
                        }
                    }/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>내용</Form.Label>
                    <Form.Control id='description' name='description' as="textarea" rows={4} onChange={
                        (e)=>{
                            dOP_change(e.target.value);
                        }
                    }/>
                </Form.Group>
            </Form>
            <Link to='/'>
                <button className='btn btn-primary' onClick={
                    ()=>{
                        axios.post('/create_process', {'title':titleOfPost , 'description':descriptionOfPost})
                        .then(()=>{
                            
                        })
                        .catch((err)=>{
                            console.log(err)
                        })
                    }
                }>제출</button>
            </Link>
        </div>
    )
}

export default CreateForm;