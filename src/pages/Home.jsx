import CoinTable from "../components/CoinTable/CoinTable"
import Navbar from "../components/NavBar/NavBar"
import Banner from "../components/Banner/Banner"

function Home() {
    return(
        <>
            <Navbar />
            <Banner />
            <CoinTable />
        </>
    )
}

export default Home;