import React from 'react'
import {Row,Col} from 'react-bootstrap'

const Buttons = ({ondelete,onshow}) => {
  return (
 
    <Row className="justify-content-center">
    <Col sm={8} className="d-flex justify-content-between " >
      <button onClick={ondelete} className="butt">Delete All</button>
      <button onClick={onshow}  className="butt">Show Data </button>
    </Col>
    </Row>
    
  )
}

export default Buttons