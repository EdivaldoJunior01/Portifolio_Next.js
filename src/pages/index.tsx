import {HomeContainer} from '../styles/HomeStyles'
import Header from "../components/Header";
import HomeHero from '../components/HomeHero';
import ExperienciaCertificado from '../components/Experiencia_Certificado';
import Projetos from '../components/Projetos';
import Conhecimentos from '../components/Conhecimentos';
import FormContato from '../components/FormContato';
import Footer from '../components/Footer';
export default function Home() {
  return (
    <HomeContainer>
    <Header/>

    <main className="container">
      <HomeHero />
      <ExperienciaCertificado />
      <Projetos/>
      <Conhecimentos/>
      <FormContato/>
    </main>
    <Footer/> {/* footer vai fora do main pq o main e um container */}
    </HomeContainer>
  ) ;

}
