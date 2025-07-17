import Banner from "../home/Banner"
import Book from "../home/Book"
import FAQ from "../home/FAQ"
import Featured from "../home/Featured"
import OurUsers from "../home/OurUsers"
import WhyChoose from "../home/WhyChoose"
import Works from "../home/Works"

const Home = () => {
    return (
        <>
            <Banner/>
            <Works/>
            <OurUsers/>
            <FAQ/>
            <Book/>
            <Featured/>
            <WhyChoose/>
        </>
    )
}

export default Home
