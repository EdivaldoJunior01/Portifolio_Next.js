import {HomeContainer} from '../styles/HomeStyles'
import Header from "../components/Header";
import HomeHero from '../components/HomeHero';
import ExperienciaCertificado from '../components/Experiencia_Certificado';
export default function Home() {
  return (
    <HomeContainer>
    <Header/>

    <main className="container">
      <HomeHero />
      <ExperienciaCertificado />

    </main>
    </HomeContainer>
  ) ;

}
