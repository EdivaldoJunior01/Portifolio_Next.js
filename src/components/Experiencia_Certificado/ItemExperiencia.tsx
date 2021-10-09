import {ItemContainer} from './styles';

interface ExpericenciaProps{
  year: string;
  title: string;
  description: string;
}

export default function ItemExperiencia({year, title, description}: ExpericenciaProps){
  return(
    <ItemContainer>
      <div> {/* necessidade da div, sem ela as animações n funcionam */}
      <h1>{year}</h1>
      <h2>{title}</h2>
      <p>{description}</p>
      </div>
    </ItemContainer>

  )
}
