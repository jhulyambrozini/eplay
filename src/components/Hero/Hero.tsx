import Banner from '../../assets/images/fundo_hogwarts.png'
import { Game } from '../../pages/Home'
import Button from '../Button/Button'
import Tag from '../Tag/Tag'
import { BannerHero, Infos } from './styles'
import { formatPrice } from '../ProductsList/ProductsList'

type Props = {
  game: Game
}
const Hero = ({ game }: Props) => (
  <BannerHero style={{ backgroundImage: `url(${game.media.cover})` }}>
    <div className="container">
      <div>
        <Tag>{game.details.category}</Tag>
        <Tag>{game.details.system}</Tag>
      </div>
      <Infos>
        <h2>{game.name}</h2>
        <p>
          {game.prices.discount && (
            <span>De {formatPrice(game.prices.old)}</span>
          )}

          {game.prices.current && <>Por {formatPrice(game.prices.current)}</>}
        </p>
        {game.prices.current && (
          <Button
            type="button"
            title="Clique aqui para adicionar este jogo ao carrinho"
            variant="primary"
          >
            Adicionar ao carrinho
          </Button>
        )}
      </Infos>
    </div>
  </BannerHero>
)

export default Hero
