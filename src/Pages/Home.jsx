import Header from '../components/HomeComponents/Header'
import Navbar from '../components/HomeComponents/Navbar'
import TopSales from '../components/HomeComponents/TopSales'
import Hero from '../components/HomeComponents/Hero'
import ShopByCategory from '../components/HomeComponents/ShopByCategory'
import MoreToLove from '../components/HomeComponents/MoreToLove'

const Home = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <Hero />
        <TopSales />
        <ShopByCategory />
        <MoreToLove />
    </div>
  )
}

export default Home