import React, { Component } from 'react';
import {Col ,Card, CardTitle, Row, Container } from  "reactstrap";
import Cashform from './Cashform';
import CreditCartForm from './CreditCartForm';


export default class Paymentpage extends Component {
    constructor(props){
    super(props);
    this.state={
        isVisiblePaymentForm:null,
        paymentName:"",
        paymentId:null,
       };
    }
    showForm=(item)=>{
        this.setState({
            paymentName:item.title,
            paymentId:item.id,
            isVisiblePaymentForm:true

        })

     
    }
    
    render() {
        const {payBoolean , paymentTypes, showTotal} = this.props; //destuructiring
      return(       
     
        <Container>
           <Row>
           { payBoolean &&  
            <Card body outline color="secondary">
                <CardTitle><h6><b> #Choose Payment Option </b></h6></CardTitle>
                <Row >
                <Container>
             
                <Row xs=" mx-auto">
                { paymentTypes.map(item=> (             
                    <Col xs="6 border " onClick={() => this.showForm(item)}   key={item.id}>
                        <div>
                          <p> {item.title}</p> 
                        </div>
                    </Col>
                ))}
                </Row>

                <Row>
                <Col xs="12 pt-5">
                {
                    this.state.isVisiblePaymentForm && this.state.paymentId===1 ?

                    <Cashform paymentName={this.state.paymentName} formTotal={showTotal}/> : null
                }
                          
                {
                    this.state.isVisiblePaymentForm && this.state.paymentId===2 ?

                        <CreditCartForm paymentName={this.state.paymentName} formTotal={showTotal}/> : null
                }
                </Col>
                </Row>
               
                </Container>
               </Row>
            </Card>
         }
           </Row>
        </Container>
   
     )        
        
    }
}
