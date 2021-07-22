/* eslint-disable */

import React, { useEffect, useState } from 'react';
import '../App.css';
import { Form, Card } from 'react-bootstrap';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import imageCompression from 'browser-image-compression';


function CreateForm(){
    let [titleOfPost, tOP_change] = useState('')
    let [descriptionOfPost, dOP_change] = useState('')
    let [img, setImage] = useState(null);

    let history = useHistory();

    //이미지 압축
    function handleFileonChange(event){
        let file = event.target.files[0]
        const options = {
            maxSizeMB: 2,
            maxWidthOrHeight: 1000
        }
        imageCompression(file, options)
        .then((compressedFile)=>{
            setImage(compressedFile);
        })  //이미지 압축이 완료되면 이미지 set을 하고 그게 완료되면 미리보기 실행
        .then(previewImage(event))
        .catch((err)=>{
            console.log(err)
        })
    }

    // 이미지 미리보기
    function previewImage(event){
        var reader = new FileReader();
        reader.onload = function(event){
            var img = document.createElement('img');
            img.setAttribute('src', event.target.result);
            img.setAttribute('style', 'width:50%');
            img.setAttribute('class', 'image');
            document.getElementById('thumbNail').appendChild(img);
        }
        reader.readAsDataURL(event.target.files[0]);
    }

    return(
        <form className="container" encType='multipart/form-data' onSubmit={(e)=>{
            e.preventDefault();
            const formData = new FormData();
            formData.append('title', titleOfPost)
            formData.append('description', descriptionOfPost)
            formData.append('img', img)
            formData.append('imgName', img.name)
            axios.post('/create_process', formData)
            .then()
            .catch()
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
                handleFileonChange(event)
            }}/>
            <div>
            <input type='submit' className="btn btn-primary"/>
            </div>
        </form>
    )
}





export default CreateForm;