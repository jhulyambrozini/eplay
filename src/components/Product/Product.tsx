import Tag from '../Tag/Tag'
import { Card, Description, Title } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" alt="" />
    <Title>Nome do jogo</Title>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Description>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aliquam,
      delectus sequi, temporibus facere vero odio dicta eaque exercitationem
      distinctio nostrum unde fuga nobis, obcaecati a quidem! Esse, consequuntur
      suscipit!
    </Description>
  </Card>
)

export default Product
