/*eslint-disable-next-line*/

import React from 'react'
import { Card, Button, Modal, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function PostCard(props){
  const [modalShow, setModalShow] = React.useState(false);

    return(
        <Card className='container mt-2'>
          <Card.Body>
            <Card.Title>
              {props.post.title}
              <Button variant="btn" onClick={() => setModalShow(true)}>
                · · ·
              </Button>
              <MyVerticallyCenteredModal show={modalShow} post={props.post} onHide={() => setModalShow(false)}/>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">작성자</Card.Subtitle>
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
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.post.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Container>
          <Row>
            <Col xs={12} md={8} className='text-center'>
              <Link to={`/update/${props.post.id}`}>글 수정</Link>
            </Col>
            <hr/>
            <Col xs={12} md={8} className='text-center'>
              글 삭제
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default PostCard;