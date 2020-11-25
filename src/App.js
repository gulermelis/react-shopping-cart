import React, {Component} from 'react';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import {Container,Row,Col,NavbarBrand} from  "reactstrap";

//css ayaraları için npm install reactstrap sonra npm install bootstrap
// app normalde function componetti biz comp arası transfer için bunu class comp e ceviriyoruz.

export default class App extends Component {
 
  state={ 
  
   categories:[ 
  {
    categoryID : 2,
    description : "Sweet and savory sauces relishes spreads and seasonings",
    name : "Condiments"
  },
  {
    categoryID : 1,
    description : "Soft drinks coffees teas beers and ales",
    name : "Beverages"
  },
  {
    categoryID : 3,
    description : "Desserts candies and sweet breads",
    name : "Confections"
  },
  {
    categoryID : 4,
    description : "Cheeses",
    name : "Dairy Products"
  },
  {
    categoryID : 5,
    description : "Breads crackers pasta and cereal",
    name: "Grains/Cereals"
  }
],
   
   products:[
     {
       id:1,
       categoryId:1,
       name:"Chang ",
       price:19
     },
     {
      id:2,
      categoryId:1,
      name:" Aniseed Syrup",
      price:10
    },
    {
      id:3,
      categoryId:2,
      name:"Grandma's Boysenberry Spread ",
      price:25
    },
    {
      id:4,
      categoryId:2,
      name:" Chef Anton's Cajun Seasoning",
      price:22
    },
    {
      id:5,
      categoryId:2,
      name:"Chef Anton's Gumbo Mix ",
      price:21
    },
    {
      id:6,
      categoryId:3,
      name:" Pavlova",
      price:17
    },
    {
      id:7,
      categoryId:4,
      name:"Queso Manchego La Pastora ",
      price:35
    },
    {
      id:8,
      categoryId:5,
      name:"Gnocchi di nonna Alice ",
      price:35
    },
    {
      id:9,
      categoryId:5,
      name:"Ravioli Angelo",
      price:19.5
    },
    {
      id:10,
      categoryId:4,
      name:"Camembert Pierrot ",
      price:30
    },
    {
      id:11,
      categoryId:4,
      name:"aclette Courdavault ",
      price:55
    }

   ],
 
  
   currentCategory:"" ,
   relatedProducts:[],
   visible:""

  }

  isViewCart = () =>{
    this.setState({
      visible: 1
    })
  }


  changeCategory = (category) => { //bind etmemize gerek kalmıyor arrow function old için.
    this.setState(
      {currentCategory: category.name,
        relatedProducts:this.getProducts(category.categoryID),
        visible:0
        
      }
     
    )
  }

  getProducts(cid){
    return ( 
        this.state.products
        .filter(product => ( product.categoryId === cid))

    )  
  }

  render() { 
   let categoryInfo= {title:"Category List"};
   let productInfo= {title:"Product List"};
    return (
      //div bir tag componentdir. html de div ile aynı görevi yapar. 
      <Container className="App">
        
        <Row xs="12  pb-5">
        
        <Col xs="10"> 
          <NavbarBrand href="/components"> Home
           </NavbarBrand>
         
        </Col>
        <Col xs="1">
          <NavbarBrand  onClick={()=>this.isViewCart()}>  
          Cart  
          <svg width="2em" height="1em" viewBox="0 0 16 16" className="bi bi-cart4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg>
|
          </NavbarBrand>
        </Col>
        <Col xs="1">
          <NavbarBrand  >      Exit  </NavbarBrand>
        </Col>

        </Row>

        <Row>
          <Col xs="4">  
            <CategoryList categories= {this.state.categories} changeCategory={this.changeCategory} info={ categoryInfo }/>   
          </Col>
          <Col xs="8"> 
            <ProductList cartVisible={this.state.visible}
             addToCart={this.addToCart}
              relatedProducts={this.state.relatedProducts} 
              products={this.state.products} 
              currentCategory={this.state.currentCategory} 
              info={ productInfo }
              />   
          </Col>
        </Row>
        </Container>
     
      );
  }

}
