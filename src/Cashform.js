import React, { Component } from 'react'
import { Form, Row,Col, FormGroup,Label,Input,Button, Container, ListGroup, ListGroupItem} from  "reactstrap";

class Cashform extends Component {
    render() {
        return (
            
            <Container xs="p-2">
                <Form >
                <h6 ><b> #{this.props.paymentName}</b></h6>
                
                <ListGroup>
                    <ListGroupItem >
                    <Row>
                       <Col xs="4" ></Col>
                       <Col > <b><i>TOTAL : {this.props.formTotal} ₺</i></b> </Col> 
                       <Col xs="4" ></Col>
                    </Row>
                    </ListGroupItem>
                </ListGroup>
              

              <Row form>
              <Col md={12}>
                  <FormGroup>
                    <Label for="exampleName">Full Name</Label>
                    <Input type="text" name="fullName" id="exampleNamw" placeholder="firstname" />
                  </FormGroup>
                </Col>
              
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">Email Adress</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="#ornek@gmail.com" />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">Phone</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="(53x) xxx xx xx" />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="exampleAddress">Address</Label>
                <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
              </FormGroup>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleCity">City</Label>
                    <Input type="text" name="city" id="exampleCity"/>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleState">State</Label>
                    <Input type="text" name="state" id="exampleState"/>
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="exampleZip">Zip</Label>
                    <Input type="text" name="zip" id="exampleZip"/>
                  </FormGroup>  
                </Col>
              </Row>
              <FormGroup check>
                <Input type="checkbox" name="accept" id="exampleCheck"/>
                <Label for="exampleCheck" check>Check me out</Label>
              </FormGroup>
            </Form>
            <Row xs="12 mt-4">
            <Col xs="3"></Col>
            <Col xs="6">
            <Button color="warning" size="xs" block>Place Order </Button>
            </Col>
            </Row>
            </Container>
          );
     }
}
export default Cashform;




