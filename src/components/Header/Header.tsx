import { HeaderBar, ButtonCart, LinkItem, Links } from './styles'
import Logo from '../../assets/images/logo.svg'
import Carrinho from '../../assets/images/carrinho.svg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <HeaderBar>
      <div>
        <Link to="/">
          <img src={Logo} alt="logo da EPLAY" />
        </Link>
        <nav>
          <Links>
            <LinkItem>
              <Link to="/categories">Categorias</Link>
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
      <ButtonCart onClick={openCart}>
        {items.length} - produto(s){' '}
        <img src={Carrinho} alt="Carrinho de compras" />
      </ButtonCart>
    </HeaderBar>
  )
}

export default Header
