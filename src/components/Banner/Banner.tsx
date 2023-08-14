import { Image, Prices, Title } from './styles'
import BannerImage from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag/Tag'
import Button from '../Button/Button'

const Banner = () => (
  <Image style={{ backgroundImage: `url(${BannerImage})` }}>
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <div>
        <Title>Marvel&apos;s Spidet-Man: Miles Morales PS4 & PS5</Title>
        <Prices>
          De <span>R$ 250,00 </span>
          <br />
          Por apenas R$ 99,90
        </Prices>
      </div>
      <Button
        type="link"
        to="/produtos"
        title="Clique aqui para aproveitar esta oferta"
      >
        Aproveitar
      </Button>
    </div>
  </Image>
)

export default Banner
