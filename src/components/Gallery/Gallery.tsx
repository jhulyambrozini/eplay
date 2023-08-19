import { useState } from 'react'

import Section from '../Section/Section'

import * as Style from './styles'

import playIcon from '../../assets/images/play.png'
import zoomIcon from '../../assets/images/zoom.png'
import closeIcon from '../../assets/images/fechar.png'

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
    if (item.type === 'image') return zoomIcon
    return playIcon
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
        <Style.ListItems>
          {items.map((media, index) => (
            <Style.Item
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
              <Style.Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Toque para maximar a mídia"
                />
              </Style.Action>
            </Style.Item>
          ))}
        </Style.ListItems>
      </Section>
      <Style.Modal className={modal.isVisible ? 'is-visible' : ''}>
        <Style.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={closeIcon}
              alt="Clique aqui para fechar modal"
              onClick={closeModal}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt="" />
          ) : (
            <iframe src={modal.url} frameBorder={0} />
          )}
        </Style.ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </Style.Modal>
    </>
  )
}

export default Gallery
