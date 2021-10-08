import SectionTitle from '../SectionTitle';
import ItensProjetos from './ItensProjetos';
import { Container } from './styles';
import Link from 'next/link';

function Projetos() {
  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" description="Um pouquinho de cada coisa que aprendi"/>
      <section>
        <ItensProjetos
        img="https://ibecensino.org.br/wp-content/uploads/2017/07/109246-5-habilidades-essenciais-de-um-gerente-de-projetos-820x820.jpg"
        title="Projeto 01"
        type="Website"
        slug="teste"
        /> {/* ccada vez que chama adc um new project */}
          <ItensProjetos
        img="https://ibecensino.org.br/wp-content/uploads/2017/07/109246-5-habilidades-essenciais-de-um-gerente-de-projetos-820x820.jpg"
        title="Projeto 01"
        type="Website"
        slug="teste"
        /> {/* ccada vez que chama adc um new project */}
          <ItensProjetos
        img="https://ibecensino.org.br/wp-content/uploads/2017/07/109246-5-habilidades-essenciais-de-um-gerente-de-projetos-820x820.jpg"
        title="Projeto 01"
        type="Website"
        slug="teste"
        /> {/* ccada vez que chama adc um new project */}



      </section>
      <button type="button">
        <Link href="/projetos">
            <a> Ver todos os projetos </a>
        </Link>
      </button>

    </Container>
  );
};

export default Projetos;
