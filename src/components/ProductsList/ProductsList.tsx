import Product from '../Product/Product'
import { Container, List } from './styles'

type Props = {
  title: string
  background: 'grey' | 'black'
}

const ProductsList = ({ title, background }: Props) => (
  <Container>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product />
        <Product />
        <Product />
        <Product />
      </List>
    </div>
  </Container>
)

export default ProductsList
