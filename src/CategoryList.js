import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from  "reactstrap";

export default class Categorylist extends Component {
/*
Burada this.props.title için bazı kaynaklar aşagıdaki blogu yazmayı zorunlu kılmısıtr
*/
    render() {
        return (
        <div>
        <h3>{ this.props.info.title}</h3>
        <ListGroup>
            { this.props.categories.map(category=> (             
           
                <ListGroupItem
            onClick={ ()=> this.props.changeCategory(category) }
                key={category.categoryID}>
                  
                  {category.name} 

              </ListGroupItem>   
             
              
            ))}
        </ListGroup>
      
        
        </div>
        )
    }
}