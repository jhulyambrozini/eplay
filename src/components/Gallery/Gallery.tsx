import Section from '../Section/Section'
import { Action, Item, ListItems, Modal, ModalContent } from './styles'

import Play from '../../assets/images/play.png'
import Zoom from '../../assets/images/zoom.png'
import Zelda from '../../assets/images/zelda.png'
import Close from '../../assets/images/fechar.png'

import { Galleryitem } from '../../pages/Home'
import { useState } from 'react'

type Props = {
  defaultCover: string
  name: string
  items: Galleryitem[]
}

interface ModalState extends Galleryitem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: Galleryitem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: Galleryitem) => {
    if (item.type === 'image') return Zoom
    return Play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <ListItems>
          {items.map((media, index) => (
            <Item
              key={media.url}
              onClick={() =>
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }
            >
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
        </ListItems>
      </Section>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={Close}
              alt="Clique aqui para fechar modal"
              onClick={closeModal}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt="" />
          ) : (
            <iframe src={modal.url} frameBorder={0} />
          )}
        </ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </Modal>
    </>
  )
}

export default Gallery
