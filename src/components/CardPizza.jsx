import React from 'react'
import { Card, Button } from 'react-bootstrap';

export default function CardPizza(props) {
  return (
    <div className='container mt-5 '>
      <Card className='shadow-box-example z-depth-5' style={{ width: '18rem' }}>
        <Card.Img variant="top" style={{ height: '285px'  }} src={props.img} />
        <Card.Body>
          <Card.Title >{props.name1}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="outline-success">ADD TO CART</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
