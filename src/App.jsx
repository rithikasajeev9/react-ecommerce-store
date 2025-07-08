import { useState } from 'react'
import './App.css'
import Home from './page/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './components/Nav'
import Details from './page/Details'
import Cart from './page/Cart'
function App() {

  const [search,setSearch]=useState("")
  const [cnt,setCnt]=useState(0)
  //console.log(search)
  return (
    <>
     <BrowserRouter>
      <Nav setSearch={setSearch} cnt={cnt}/>
        <Routes>
          <Route path='/' element={<Home  search={search}/>}/>
          <Route path='/details/:id' element={<Details setCnt={setCnt} cnt={cnt}/>}  />
          <Route path='/cart' element={<Cart setCnt={setCnt} cnt={cnt}/>}/>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
