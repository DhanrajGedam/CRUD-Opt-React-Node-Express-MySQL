import React from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Student from './Student'
import CreateStudent from './CreateStudent'
import UpdateStudent from './UpdateStudent'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={ <Student />}></Route>
      <Route path='/create' exact element={ <CreateStudent />}></Route>
      <Route path='/update/:id' exact element={ <UpdateStudent />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App