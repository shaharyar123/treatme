import React from 'react';
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Home = props => {
    return (
        // <div className='container-fluid'>
        //     <div className="row">
        //         <Col sm={10} md={6} lg={6} >Content</Col>
        //         {/* <div className="col">



        //         </div> */}
        //     </div>
        // </div>
        <Container fluid>
            <Row className="justify-content-center">
                <Col sm={10} md={6} lg={6} >
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src="https://i.picsum.photos/id/76/400/300.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
    </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Cras justo odio</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>


    );
};

export default Home;