import  { NavLinkContainer} from './styles'; /* estilizado em styles */
import {useRouter} from 'next/router'
import Link from 'next/link';

interface Props{ /* referencia onde chama la no index do header */
    title: string;
    path: string;
}

export default function NavLink ({title, path}: Props){ /* recebe o titulo e o path que e para onde vai o link */
  const router = useRouter();

  const isActive = router.pathname ===path; /* basicamente so vai ficar ativo se ficar na rota path */
  console.log(router.pathname)

  return(
    <NavLinkContainer isActive={isActive}> {/* isActive vai para o css */}
      <Link href={path}>
      <a>{title}</a>
      </Link>
    </NavLinkContainer>
  )
}
