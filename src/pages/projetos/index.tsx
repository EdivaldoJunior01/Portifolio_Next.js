import Header from '../../components/Header'
import {ProjetosContainer} from '../../styles/ProjetoStyles'
import ProjetoItem from '../../components/ProjetoItem'
export default function Projetos(){
  return(
    <ProjetosContainer>
      <Header/> {/* chamando o componente da pag, header */}
      <main className="container">{/* essa classe e p/ herdar o estilo de container  */}
      <ProjetoItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2021/04/7-Best-Website-Templates-for-Musicians-and-Bands-358x188.jpg"
        />
          <ProjetoItem
          title="Projeto 02"
          type="Website"
          slug="teste2"
          imgUrl="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2021/04/7-Best-Website-Templates-for-Musicians-and-Bands-358x188.jpg"
        />
          <ProjetoItem
          title="Projeto 03"
          type="Website"
          slug="teste3"
          imgUrl="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2021/04/7-Best-Website-Templates-for-Musicians-and-Bands-358x188.jpg"
        />
          <ProjetoItem
          title="Projeto 04"
          type="Website"
          slug="teste4"
          imgUrl="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2021/04/7-Best-Website-Templates-for-Musicians-and-Bands-358x188.jpg"
        />
        <ProjetoItem
          title="Projeto 05"
          type="Website"
          slug="teste5"
          imgUrl="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2021/04/7-Best-Website-Templates-for-Musicians-and-Bands-358x188.jpg"
        />
      </main>
    </ProjetosContainer>
  )
}
