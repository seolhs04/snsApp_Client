/* eslint-disable */

import React, { useState } from 'react';
import '../App.css';
import { Form, Card } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CreateForm(){
    let [titleOfPost, tOP_change] = useState('')
    let [descriptionOfPost, dOP_change] = useState('')

    return(
        <Card className='container mt-3'>
            <Form className='container'>
                <Form.Group className="mb-3">
                    <Form.Label className='mt-3'>제목</Form.Label>
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
                <Link to='/'>
                    <button className='btn btn-primary mb-3' onClick={
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
            </Form>
        </Card>
    )
}

export default CreateForm;