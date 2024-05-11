import Header from './components/Header.jsx'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

import "./styles/App.scss"
import "./styles/Header.scss"
import "./styles/Home.scss"
import "./styles/Footer.scss"
import "./styles/Contact.scss"
import "./styles/mediaquery.scss"


function App() {
 

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
