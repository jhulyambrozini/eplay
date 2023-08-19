import Tag from '../Tag/Tag'

import * as Style from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image,
  id
}: Props) => {
  const getDescription = (desc: string) => {
    if (desc.length > 95) {
      return desc.slice(0, 92) + '...'
    }
    return desc
  }
  return (
    <Style.Card
      title={`Clique aqui para ver mais detalhes do jogo: ${title}`}
      to={`/product/${id}`}
    >
      <img src={image} alt={title} />
      <Style.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Style.Infos>
      <Style.Title>{title}</Style.Title>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Style.Description>{getDescription(description)}</Style.Description>
    </Style.Card>
  )
}

export default Product
