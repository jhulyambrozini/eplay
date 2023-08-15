import { HeaderBar, LinkCart, LinkItem, Links } from './styles'
import Logo from '../../assets/images/logo.svg'
import Carrinho from '../../assets/images/carrinho.svg'
import { Link } from 'react-router-dom'

const Header = () => (
  <HeaderBar>
    <div>
      <img src={Logo} alt="logo da EPLAY" />
      <nav>
        <Links>
          <LinkItem>
            <Link to="/categorias">Categorias</Link>
          </LinkItem>
          <LinkItem>
            <Link to="/">Novidades</Link>
          </LinkItem>
          <LinkItem>
            <Link to="/">Promoções</Link>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCart href="#">
      0 - produto(s) <img src={Carrinho} alt="Carrinho de compras" />
    </LinkCart>
  </HeaderBar>
)

export default Header
