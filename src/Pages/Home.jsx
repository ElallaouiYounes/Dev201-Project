import Header from '../components/HomeComponents/Header'
import Navbar from '../components/HomeComponents/Navbar'
import TopSales from '../components/HomeComponents/TopSales'
import Hero from '../components/HomeComponents/Hero'
import ShopByCategory from '../components/HomeComponents/ShopByCategory'

const Home = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <Hero />
        <TopSales />
        <ShopByCategory />
    </div>
  )
}

export default Home