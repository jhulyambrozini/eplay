import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../Button/Button'
import Tag from '../Tag/Tag'

import * as Style from './styles'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formatPrice, getTotalPrice } from '../../utils'

const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const closeCart = () => {
    dispatch(close())
  }

  const goToCheckout = () => {
    navigate('./checkout')
    closeCart()
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }
  return (
    <Style.CartContainer className={isOpen ? 'is-open' : ''}>
      <Style.Overlay onClick={closeCart} />
      <Style.SideBar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <Style.CartItem key={item.id}>
                  <img src={item.media.thumbnail} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <Tag>{item.details.category}</Tag>
                    <Tag>{item.details.system}</Tag>
                    <span>{formatPrice(item.prices.current)}</span>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    type="button"
                  ></button>
                </Style.CartItem>
              ))}
            </ul>
            <Style.Quantity>{items.length} jogo(s) no carrinho</Style.Quantity>
            <Style.Prices>
              Total de {formatPrice(getTotalPrice(items))}{' '}
              <span>Em até 6x sem juros</span>
            </Style.Prices>
            <Button
              onClick={goToCheckout}
              title="Clique aqui para continuar com a compra"
              type="button"
            >
              Continuar com a compra
            </Button>
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, adicione pelo menos um produto para continuar
            com a compra
          </p>
        )}
      </Style.SideBar>
    </Style.CartContainer>
  )
}

export default Cart
