import Faq from "../Faq/Faq";
import Footer from "../Footer/Footer";
import HappyClients from "../HappyClients/HappyClients";
import Banner from "../Header/Banner/Banner"
import Services from "../Services/Services";
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <HappyClients></HappyClients>
            <Faq></Faq> 
            <Footer></Footer>
        </div>
    );
};

export default Home;