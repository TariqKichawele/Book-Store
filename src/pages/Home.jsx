import Banner from "../components/Banner"
import News from "../components/News"
import Recommend from "../components/Recommend"
import TopSellers from "../components/TopSellers"

const Home = () => {
  return (
    <>
        <Banner />
        <TopSellers />
        <Recommend />
        <News />
    </>
  )
}

export default Home