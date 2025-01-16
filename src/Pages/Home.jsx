import React from 'react'
import Header from '../components/HomeComponents/Header'
import Navbar from '../components/HomeComponents/Navbar'
import TopSales from '../components/HomeComponents/TopSales'
import Hero from '../components/HomeComponents/Hero'

const Home = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <Hero />
        <TopSales />
    </div>
  )
}

export default Home