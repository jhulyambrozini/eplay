import Section from '../Section/Section'
import { Action, Item, ListItems, Modal, ModalContent } from './styles'

import Play from '../../assets/images/play.png'
import Zoom from '../../assets/images/zoom.png'
import Zelda from '../../assets/images/zelda.png'
import Close from '../../assets/images/fechar.png'

type Galleryitem = {
  type: 'image' | 'video'
  url: string
}
const mock: Galleryitem[] = [
  {
    url: '',
    type: 'image'
  },
  {
    url: '',
    type: 'image'
  },
  {
    url: '',
    type: 'video'
  }
]

type Props = {
  defaultCover: string
  name: string
}

const Gallery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (item: Galleryitem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: Galleryitem) => {
    if (item.type === 'image') return Zoom
    return Play
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <ListItems>
          {mock.map((media, index) => (
            <Item key={media.url}>
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Toque para maximar a mídia"
                />
              </Action>
            </Item>
          ))}
          <Item>
            <img src={Zelda} alt="Imagem do link" />
          </Item>
          <Item>
            <img src={Zelda} alt="Imagem do link" />
          </Item>
          <Item>
            <img src={Zelda} alt="Imagem do link" />
          </Item>
        </ListItems>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={Close} alt="" />
          </header>
          <img src="" alt="" />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery
