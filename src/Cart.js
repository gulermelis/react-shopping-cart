import React, { Component } from 'react'
import { Card, Button, CardTitle } from 'reactstrap';
import {Container,Row,Col, Table } from 'reactstrap';
import Paymentpage from "./Paymentpage";
export default class Cart extends Component {
 
  constructor(props){
   super(props);
   this.state={
    paymentTypes:[
      {id:1, title:"Cash on Delivery"} ,
      {id:2, title:"Online Credit Cart"} ,
   ],
   payBoolean:"",
   paymentSection:"",
   cartProduct: this.props.addProducts,
   cartTotal:this.props.total
  
 
  };
  this.makePayment= this.makePayment.bind(this);
 }

  makePayment(){
    if(this.state.cartTotal === 0 ){
      window.alert("Cart is Empty !");
    }
     else{
      this.setState({
        payBoolean: 1
      });
     }
      

  }


  delete=(p)=>{
    this.setState({
    cartTotal:this.state.cartTotal - this.updateTotal(p),
    cartProduct: this.updateCart(p)
    }) 

 }

 updateTotal(p){
   let element= this.state.cartProduct.find(item=> item.id=== p.id);
  return element.price;
 }

 updateCart(p){

  let arr2=this.state.cartProduct.filter((item)=>(item.id!==p.id));
  return arr2;
    
 }


    render() {
      //const {cardTotal}= this.props;  //desturctring
      return (
       <Container>
      { this.state.payBoolean !== 1 ?  <Row xs="12 pt-5">
        <Col xs="12">
        <Card body outline color="secondary">
        <CardTitle><h4 align="center"><b>Your Shopping Cart</b></h4></CardTitle>
        
          <Table size="sm">
           <thead>
            <tr>
              <th xs="6">Product</th>
              <th xs="3"> Amout</th>
              <th xs="3"> Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
              {this.state.cartProduct.map(product => (
                 <tr key={product.id}>        
                    <td>{product.name}</td>
                    <td>{product.amount}</td>
                    <td>{product.price} ₺</td>
                    <td><Button color="danger" onClick= {()=> this.delete(product)} >X</Button> </td>
                </tr>

              ))}
          </tbody>
          <tfoot>
          <tr>
                <td xs="4"><h6>Total:</h6></td>
                <td xs="4"></td>
                <td xs="4"><h6>{this.state.cartTotal} ₺</h6></td>
               </tr>
          </tfoot>
          </Table>
         
              <Button onClick={this.makePayment} > Pay </Button>
          </Card>
        
        </Col>
     </Row>: 
      
     <Row xs="12 pt-3">
        <Paymentpage payBoolean={this.state.payBoolean} paymentTypes={this.state.paymentTypes} showTotal={this.state.cartTotal}/>
      </Row>
    }
      </Container>
        )
    }
}
