import Tag from '../Tag/Tag'
import Button from '../Button/Button'

import * as Style from './styles'

import { useGetFeaturedGameQuery } from '../../services/api'
import { formatPrice } from '../../utils'
import Loader from '../Loader/Loader'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <Style.Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Style.Title>{game.name}</Style.Title>
          <Style.Prices>
            De <span>{formatPrice(game.prices.old)}</span>
            <br />
            Por apenas {formatPrice(game.prices.current)}
          </Style.Prices>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Style.Image>
  )
}

export default Banner
