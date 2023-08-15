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

const Categories = () => (
  <>
    <ProductsList games={promotions} title="RPG" background="grey" />
    <ProductsList games={soon} title="Ação" background="black" />
    <ProductsList games={promotions} title="Aventura" background="grey" />
    <ProductsList games={soon} title="RPS" background="black" />
  </>
)

export default Categories
