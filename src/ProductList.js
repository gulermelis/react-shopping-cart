import React, { Component } from 'react'
import { Table, Button,Container,Row,Col} from  "reactstrap";
import propTypes from "prop-types";
import Cart from './Cart';

export default class Productlist extends Component {
    static propTypes = {
        relatedProducts : propTypes.array 
    }
    state={

        addProducts:[] ,
        total:0,
      
    }
  
    addToCart=(p)=>{
        this.setState({
        total: this.state.total + p.price,
        addProducts: this.pushProduct(p)
        }) 

        window.alert("Added !");
     }
    
     pushProduct(p){
      let arr=this.state.addProducts;
      let element=arr.find((item)=>(item.id===p.id));
      if(element){
        element.amount+=1;
        element.price+=p.price;
        let arr2=arr.filter((item)=>(item.id!==p.id));
            arr2.push({"id": element.id , "name":element.name, "amount":element.amount, "price":element.price });
            return arr2;
        }
      else
        {
        arr.push({"id": p.id , "name":p.name, "amount":1 , "price":p.price })
        return arr;
        }
     }
      
    render() {
        const {cartVisible, relatedProducts, products, info, currentCategory}= this.props;
        return (
            <Container>       
            { cartVisible ? 
            <Row>
                <Cart total={this.state.total} addProducts={this.state.addProducts} makePayment={this.makePayment}/>
            </Row>
            :
            <Row>
            <Col>
            <h3>{ info.title + "-"} {currentCategory }</h3>
            <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th> Product Name</th>
                    <th> Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                currentCategory === "" ?
                products.map(product => (
                 <tr key={product.id}>        
                    <th scope="row">{}</th>
                    <td>{product.name}</td>
                    <td>{product.price} ₺</td>
                    <th>{<Button color="success"  onClick={()=>this.addToCart(product)}>Add to Cart</Button> }</th>
                    </tr>

                ))
                :
                relatedProducts.map(product => (
                    <tr key={product.id}>        
                       <th scope="row">{}</th>
                       <td>{product.name}</td>
                       <td>{product.price} ₺</td>
                       <th>{<Button color="success"  onClick={()=>this.addToCart(product)}>Add to Cart</Button> }</th>
                       </tr>
   
                   ))
                }
            </tbody>
            </Table>
            </Col>
            </Row>
        }
    
            </Container>

       
        )
    }
}
