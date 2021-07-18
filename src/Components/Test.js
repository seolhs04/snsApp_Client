/* eslint-disable */

import React, { useState } from 'react';
import '../App.css';
import { Form, Card } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Test(){
    const [img, setImage] = useState(null);

    return (
        <form encType='multipart/form-data' onSubmit={(e)=>{
            e.preventDefault();
            const formData = new FormData();
            formData.append('file', img)
            axios.post('/create_process', formData)
            .then(()=>{
                console.log('이미지 업로드 완료')
            })
            .catch((err)=>{
                console.log(err)
            })
        }}>
            <input name='photo' type='file' accept='image/*' onChange={(e)=>{
                setImage(e.target.files[0]);
            }}/>
            <input type='submit'/>
        </form>
    );
}


export default Test;