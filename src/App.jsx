
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Home/Navbar'
import Footer from './Component/Shared/Footer'

function App() {


  return (
   
     <div>
     <Navbar></Navbar>
<Outlet></Outlet>
<Footer></Footer>
     </div>
  )
}

export default App
