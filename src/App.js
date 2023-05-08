import {  Container } from "react-bootstrap"
import { persons } from "./data"
import Datacount from './component/Datacount'
import Body from "./component/Body"
import Buttons from "./component/Buttons"
import { useState } from "react"

function App() {
  const [datapersons,setdatapersons]=useState(persons)
  const deletedata=()=>{
    setdatapersons([])
  }
  const showdates=()=>{
    setdatapersons(persons)
  }
  return (
    <div className="font color-body">
       <Container className="py-3">
       <Datacount persons={datapersons}/>
       <Body persons={datapersons}/>
       <Buttons ondelete={deletedata} onshow={showdates}/>
      </Container>
    </div>
  )
}

export default App;
