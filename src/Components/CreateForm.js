/* eslint-disable */

import React, { useState } from 'react';
import '../App.css';
import { Form, Card } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CreateForm(){
    let [titleOfPost, tOP_change] = useState('')
    let [descriptionOfPost, dOP_change] = useState('')
    let [imgData, imgData_change] = useState(null);

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
                <Form.Group className="mb-3">
                    <div id='thumbNail' className='container mb-3'>
                        {/* 사진 들어갈 공간 */}
                    </div>
                    <input type='file' id='imageInput' accept='image/*' name='img' onChange={(event)=>{
                        var reader = new FileReader();
                        reader.onload = function(event){
                            var img = document.createElement('img');
                            img.setAttribute('src', event.target.result);
                            img.setAttribute('style', 'width:50%');
                            img.setAttribute('class', 'image');
                            document.getElementById('thumbNail').appendChild(img);
                        }
                        reader.readAsDataURL(event.target.files[0]);
                        imgData_change(event.target.files[0]);
                    }}/>
                </Form.Group>
                <Link to='/'>
                    <button className='btn btn-primary mb-3' onClick={
                        ()=>{
                            axios.post('/create_process', {'title': titleOfPost, 'description': descriptionOfPost, 'test': formData})
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