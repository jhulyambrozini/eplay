import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList/ProductsList'
import { Game } from '../Home'

const Categories = () => {
  const [gameAction, setGameAction] = useState<Game[]>([])
  const [gameSports, setGameSports] = useState<Game[]>([])
  const [gameSimulation, setGameSimulation] = useState<Game[]>([])
  const [gameFight, setGameFight] = useState<Game[]>([])
  const [gameRPG, setGameRPG] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGameAction(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGameSports(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGameSimulation(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGameFight(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGameRPG(res))
  }, [])
  return (
    <>
      <ProductsList games={gameAction} title="Ação" background="black" />
      <ProductsList games={gameSports} title="Esportes" background="grey" />
      <ProductsList games={gameFight} title="Luta" background="black" />
      <ProductsList games={gameRPG} title="RPG" background="grey" />
      <ProductsList
        games={gameSimulation}
        title="Simulação"
        background="black"
      />
    </>
  )
}

export default Categories
