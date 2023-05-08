import React from 'react'
import {Row,Col} from 'react-bootstrap'

 const Datacount = ({persons}) => {
  return (
    <Row className="justify-content-center">
    <Col sm={8} className="py-3 hed">
  You have <span className='num'>{persons.length}</span> Dates Today
    </Col>
    </Row>
  )
}

export default Datacount