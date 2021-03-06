/* eslint-disable */

import React from 'react'
import { Card, Button, Modal, Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function PostCard(props){
  const [modalShow, setModalShow] = React.useState(false);
    return(
        <Card className='postCard container mt-2'>  
          <Card.Body>
            <Card.Title>
            <Card className='postsTitle'>작성자</Card>
              <Button className='detailBtn' variant="outline-danger" onClick={() => setModalShow(true)}>
                ···
              </Button>
              <MyVerticallyCenteredModal show={modalShow} post={props.post} onHide={() => setModalShow(false)}/>
            </Card.Title>
            {
              props.post.image !== null ? <Image src={`/images/${props.post.image}`} className='mb-3 postsImgs' fluid /> : null
            }
            <Card.Title className="mb-2">{props.post.title}</Card.Title>
            <Card.Text>
              {props.post.description}
            </Card.Text>
          </Card.Body>
        </Card>
    )
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.post.title}
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body>
      <Container>
          <Row>
            <Col xs={12} md={18} className='text-center'>
              <Link to={`/update/${props.post.id}`}>글 수정</Link>
            </Col>
            <hr/>
            <Col xs={12} md={18} className='text-center'>
              <Link to={`/delete/${props.post.id}`}>글 삭제</Link>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default PostCard;