import React from 'react'
import {Row,Col}from 'react-bootstrap'


const Body = ({persons}) => {
  return (
<Row className="justify-content-center">
  <Col sm={8}>
    <div className="rectangel">
      {persons.length ?(persons.map((item)=>{
        return( 
          
        <div key={item.id} className="all p-2 border-bottom ">
          <span className="numid">{item.id}</span>
        <img className="images" src={item.image} alt="no image"/>
        <div className="px-6 con">
          <p className="fs-35 tname" >{item.name}</p>
          <p> {item.date}</p>
          </div>
        </div>

      )
      })):

      <h2 className="nodata">No Dates</h2>}
      </div>
  </Col>
  </Row>
  )
}

export default Body