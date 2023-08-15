import Banner from '../../components/Banner/Banner'
import ProductsList from '../../components/ProductsList/ProductsList'
import Game from '../../models/Games'

const promotions: Game[] = [
  {
    id: 0,
    category: 'aaaaaaa',
    description: 'bbbbbbbbb',
    image: '//placehold.it/222x250',
    infos: ['-34%', 'rs345'],
    system: 'kkkkkkk',
    title: 'lkjhbj'
  },
  {
    id: 1,
    category: 'aaaaaaa',
    description: 'bbbbbbbbb',
    image: '//placehold.it/222x250',
    infos: ['-34%', 'rs345'],
    system: 'kkkkkkk',
    title: 'lkjhbj'
  },
  {
    id: 2,
    category: 'aaaaaaa',
    description: 'bbbbbbbbb',
    image: '//placehold.it/222x250',
    infos: ['-34%', 'rs345'],
    system: 'kkkkkkk',
    title: 'lkjhbj'
  },
  {
    id: 3,
    category: 'aaaaaaa',
    description: 'bbbbbbbbb',
    image: '//placehold.it/222x250',
    infos: ['-34%', 'rs345'],
    system: 'kkkkkkk',
    title: 'lkjhbj'
  }
]

const soon: Game[] = [
  {
    id: 4,
    category: 'aaaaaaa',
    description: 'bbbbbbbbb',
    image: '//placehold.it/222x250',
    infos: ['-34%', 'rs345'],
    system: 'kkkkkkk',
    title: 'lkjhbj'
  },
  {
    id: 5,
    category: 'aaaaaaa',
    description: 'bbbbbbbbb',
    image: '//placehold.it/222x250',
    infos: ['-34%', 'rs345'],
    system: 'kkkkkkk',
    title: 'lkjhbj'
  },
  {
    id: 6,
    category: 'aaaaaaa',
    description: 'bbbbbbbbb',
    image: '//placehold.it/222x250',
    infos: ['-34%', 'rs345'],
    system: 'kkkkkkk',
    title: 'lkjhbj'
  },
  {
    id: 7,
    category: 'aaaaaaa',
    description: 'bbbbbbbbb',
    image: '//placehold.it/222x250',
    infos: ['-34%', 'rs345'],
    system: 'kkkkkkk',
    title: 'lkjhbj'
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promotions} title="Promoções" background="grey" />
    <ProductsList games={soon} title="Em breve" background="black" />
  </>
)

export default Home
