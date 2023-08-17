import {
  HeaderBar,
  ButtonCart,
  LinkItem,
  Links,
  Hamburguer,
  HeaderRow,
  NavMobile
} from './styles'
import Logo from '../../assets/images/logo.svg'
import Carrinho from '../../assets/images/carrinho.svg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </Hamburguer>
          <Link to="/">
            <img src={Logo} alt="EPLAY" />
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
          {items.length} <span> - produto(s)</span>{' '}
          <img src={Carrinho} alt="Carrinho de compras" />
        </ButtonCart>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
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
      </NavMobile>
    </HeaderBar>
  )
}

export default Header
