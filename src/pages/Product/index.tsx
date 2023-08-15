import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero/Hero'
import Section from '../../components/Section/Section'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
      <Section title="Sobre o jogo" background="black">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          placeat deserunt at obcaecati reiciendis sint, voluptates vero, alias
          officiis totam dolorum libero dolorem porro repellendus velit nam, id
          rem aliquam.
        </p>
      </Section>
      <Section title="Mais detalhes" background="grey">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          placeat deserunt at obcaecati reiciendis sint, voluptates vero, alias
          officiis totam dolorum libero dolorem porro repellendus velit nam, id
          rem aliquam.
        </p>
      </Section>
      <Section title="Galeria" background="black">
        <div>fotos</div>
      </Section>
    </>
  )
}

export default Product
