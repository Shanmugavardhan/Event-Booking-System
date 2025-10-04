import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import UserMenu from "../components/UserMenu";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import EventsSection from "../components/EventsSection";
import EventDetails from "../components/EventDetails";
import WhySection from "../components/WhySection";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Header></Header>
            <HeroSection />
            <Signin />
            <Signup />
            <UserMenu />
            <EventsSection />
            <EventDetails />
            <WhySection />
            <Footer />
        </>
    );
}
export default Home;