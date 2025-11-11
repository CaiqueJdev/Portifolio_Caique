import HeroSection from "../components/HeroSection";
import Sobre from "../components/Sobre";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";

const HomePage = () => {
    return ( 
        <>
           <Layout>
            <main>
               <HeroSection/>
               <Sobre/>
               <Projects />
               <Contacts />
            </main>
           </Layout>
        </>
     );
}
 
export default HomePage;