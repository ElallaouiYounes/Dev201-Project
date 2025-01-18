
import Header from '../components/HomeComponents/Header'
import Navbar from '../components/HomeComponents/Navbar'
import TopSales from '../components/HomeComponents/TopSales'
import Hero from '../components/HomeComponents/Hero'
import Footer from '../components/HomeComponents/Footer'

const Home = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <Hero />
        <TopSales />
        <Footer />
    </div>
  )
}

export default Home