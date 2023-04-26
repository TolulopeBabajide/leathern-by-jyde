import React from 'react'
import Nav from '../components/navbar/Nav'
import Footer from '../components/footer/Footer'
import Carousel from '../components/carousel/Carousel'
import New from '../components/new/New'

const Home = () => {
  return (
    <>
        <Nav/>
        <Carousel/>
        <New/>
        <Footer/>
    </>
  )
}

export default Home