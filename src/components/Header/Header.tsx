import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'

import * as Style from './styles'

import logoImage from '../../assets/images/logo.svg'
import cartIcon from '../../assets/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <Style.HeaderBar>
      <Style.HeaderRow>
        <div>
          <Style.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </Style.Hamburguer>
          <Link to="/">
            <h1>
              <img src={logoImage} alt="EPLAY" />
            </h1>
          </Link>
          <nav>
            <Style.Links>
              <Style.LinkItem>
                <Link
                  title="Clique aqui para acessar a página de categorias"
                  to="/categories"
                >
                  Categorias
                </Link>
              </Style.LinkItem>
              <Style.LinkItem>
                <HashLink
                  title="Clique aqui para acessar a seção de em breve"
                  to="/#coming-soon"
                >
                  Em breve
                </HashLink>
              </Style.LinkItem>
              <Style.LinkItem>
                <HashLink
                  title="Clique aqui para acessar a seção de promoções"
                  to="/#on-sale"
                >
                  Promoções
                </HashLink>
              </Style.LinkItem>
            </Style.Links>
          </nav>
        </div>
        <Style.ButtonCart role="button" onClick={openCart}>
          {items.length} <span> - produto(s)</span>{' '}
          <img src={cartIcon} alt="Carrinho de compras" />
        </Style.ButtonCart>
      </Style.HeaderRow>
      <Style.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <Style.Links>
          <Style.LinkItem>
            <Link
              title="Clique aqui para acessar a página de categorias"
              onClick={() => setIsMenuOpen(false)}
              to="/categories"
            >
              Categorias
            </Link>
          </Style.LinkItem>
          <Style.LinkItem>
            <HashLink
              onClick={() => setIsMenuOpen(false)}
              title="Clique aqui para acessar a seção de em breve"
              to="/#coming-soon"
            >
              Em breve
            </HashLink>
          </Style.LinkItem>
          <Style.LinkItem>
            <HashLink
              onClick={() => setIsMenuOpen(false)}
              title="Clique aqui para acessar a seção de promoções"
              to="/#on-sale"
            >
              Promoções
            </HashLink>
          </Style.LinkItem>
        </Style.Links>
      </Style.NavMobile>
    </Style.HeaderBar>
  )
}

export default Header
