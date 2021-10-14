import Header from '../../../components/Header';
import {ContainerProjeto} from '../../../styles/ContainerProjeto';
import BannerProjeto from '../../../components/BannerProjeto';
export default function Projeto(){
  return(
    <ContainerProjeto>
      <Header/>{/* chamando o companente da pag Header*/}
      <BannerProjeto
      title="Projeto 01"
      type="website"
      imgUrl="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2021/04/7-Best-Website-Templates-for-Musicians-and-Bands-358x188.jpg"
      />{/* componente */}


      <main>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aspernatur ut,
           alias ducimus adipisci nulla deserunt, nemo ad quibusdam autem maiores dicta in.
            Quae distinctio eius quisquam libero voluptatem cumque dolorem neque, facere et
             nemo minus officia, odit mollitia eligendi illo omnis consequuntur itaque quos
             sit vero. Odit eos perferendis debitis harum nostrum. Tenetur quae id aspernatur
             exercitationem perspiciatis rerum voluptas iste amet veniam dolorem accusantium
             quis aut officiis deserunt assumenda commodi maiores laudantium rem, molestias
             sed consectetur possimus illo quaerat? Aperiam, earum? Ea ducimus, a facilis
             commodi suscipit similique, obcaecati, non minus alias asperiores itaque
              atque mollitia aut.
        </p>
        <button type="button">
          <a href="#">Ver projeto online</a>
        </button>

      </main>
      </ContainerProjeto>
  )
}
