/* eslint-disable */

import React, { useState } from 'react';
import '../App.css';
import { Form, Card } from 'react-bootstrap';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

function CreateForm(){
    let [titleOfPost, tOP_change] = useState('')
    let [descriptionOfPost, dOP_change] = useState('')
    let [img, setImage] = useState(null);

    let history = useHistory();

    return(
        <form className="container" encType='multipart/form-data' onSubmit={(e)=>{
            e.preventDefault();
            const formData = new FormData();
            formData.append('title', titleOfPost)
            formData.append('description', descriptionOfPost)
            formData.append('img', img)
            axios.post('/create_process', formData)
            .then()
            .catch()
            console.log('이미지 업로드 완료')
            history.push('/')
        }}>
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
            <div id='thumbNail' className='container mb-3'>
                {/* 사진 들어갈 공간 */}
            </div>
            <input name='photo' className='mb-3' type='file' accept='image/*' onChange={(event)=>{
                setImage(event.target.files[0]);
                var reader = new FileReader();
                reader.onload = function(event){
                    var img = document.createElement('img');
                    img.setAttribute('src', event.target.result);
                    img.setAttribute('style', 'width:50%');
                    img.setAttribute('class', 'image');
                    document.getElementById('thumbNail').appendChild(img);
                }
                reader.readAsDataURL(event.target.files[0]);
            }}/>
            <div>
            <input type='submit' className="btn btn-primary"/>
            </div>
        </form>
    )
}


export default CreateForm;