import Banner from '../../assets/images/fundo_hogwarts.png'
import Button from '../Button/Button'
import Tag from '../Tag/Tag'
import { BannerHero, Infos } from './styles'
const Hero = () => (
  <BannerHero style={{ backgroundImage: `url(${Banner})` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>
      <Infos>
        <h2>Hogwarts Legacy</h2>
        <p>
          <span>De R$ 250,00</span>
          Por R$ 190,00
        </p>
        <Button
          type="button"
          title="Clique aqui para adicionar este jogo ao carrinho"
          variant="primary"
        >
          Adicionar ao carrinho
        </Button>
      </Infos>
    </div>
  </BannerHero>
)

export default Hero
