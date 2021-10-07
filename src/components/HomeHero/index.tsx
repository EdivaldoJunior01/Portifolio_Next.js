import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/eu.webp'



function HomeHero () {
  return (
    <Container>
     <img src={picture} alt="Minha Foto" />
     <div>
       <TextContainer>
         <h1>Olá</h1>
         <h2>Me chamo Edivaldo Júnior</h2>
       </TextContainer>
       <InfosContainer>
         <CodeItem> {/* caixinha com as informações */}
           <span className="comment">//Minha Apresentação</span>
           <span className="roxo">Infos</span> {'\u007B'} {/* unicode de abrir chave {}  */}
           <div>
             Nome: <span className="blue">Edivaldo,</span>
           </div>
           <div>
             Sobrenome: <span className="blue">Júnior</span>
           </div>
           {'\u007B'}
         </CodeItem>
         <CodeItem>
           <span className="comment">//O que faço atualmente</span>
           <span className="roxo">Infos</span>  {'\u007B'}
           <div>
             Cursando: <span>Sistemas da Depressão,</span>
           </div>
           <div>
             Onde: <span>IFTO - Campus Paraíso do Tocantins</span>
           </div>
           <div>
           Estagiário: <span>Badeco da ACIP- Paraíso</span>
           </div>
           {'\u007B'}
         </CodeItem>
       </InfosContainer>
     </div>

    </Container>
  );
};

export default HomeHero;
