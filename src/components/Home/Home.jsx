
import Faq from "../Faq/Faq";
import Footer from "../Footer/Footer";
import HappyClients from "../HappyClients/HappyClients";
import Banner from "../Header/Banner/Banner"
import Services from "../Services/Services";
// import Services from "../Booking/Booking";
// import Service from "../Service/Service"


const Home = () => {
    return (
        <div className="max-w-[1140px] px-6 mx-auto">
            <Banner></Banner>
            <Services></Services>
            <HappyClients></HappyClients>
            <Faq></Faq> 
            <Footer></Footer>
        </div>
    );
};

export default Home;