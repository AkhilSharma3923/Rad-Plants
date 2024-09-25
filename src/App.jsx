import React from 'react'
import Navbar from './components/Navbar'
import Routing from './components/Routing'
import Home from './components/Home'
import Catalogus from './components/Catalogus'
import About from './components/About'
import Contact from './components/Contact'
import Search from './components/Search'
import Cart from './components/Cart'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='max-w-[1400px] mx-auto text-black'>
      <Navbar />
      <Routing />
      <Catalogus />
      <About />
      <Cart />
      <Search />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
