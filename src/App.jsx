import { useState } from "react"
import { Button } from "./Button"

const opciones = [
  { id: 1, type: 'piedra' },
  { id: 2, type: 'papel' },
  { id: 3, type: 'tijeras' }
]

function App() {

  const [elecciones, setElecciones] = useState([
    { id: 'player', option: null },
    { id: 'pc', option: opciones[Math.round(Math.random() * 2)].type }
  ])

  const [ganador, setGanador] = useState(null)

  const handleClick = (id) => {
    setElecciones(elecciones, elecciones[0].option = opciones[id - 1].type)
    handleWinner()
  }

  const handleWinner = () => {
    if (elecciones[0].option === elecciones[1].option) {
      setGanador('Empate')
      return
    }

    if (elecciones[0].option === 'piedra' && elecciones[1].option === 'papel') {
      setGanador('El ordenador gana')
      return
    }

    if (elecciones[0].option === 'tijeras' && elecciones[1].option === 'piedra') {
      setGanador('El ordenador gana')
      return
    }

    if (elecciones[0].option === 'papel' && elecciones[1].option === 'tijeras') {
      setGanador('El ordenador gana')
      return
    }

    setGanador('Has ganado')

  }

  console.log(elecciones)

  return (
    <>
      {
        opciones.map(({ id, type }) => (
          <Button fn={() => handleClick(id)} key={id} text={type} />
        ))
      }

      <p>Tú Elección: {elecciones[0]?.option && elecciones[0].option}</p>
      <p>Elección del ordenador: {elecciones[1].option}</p>

      <p>{ganador && ganador}</p>
    </>
  )
}

export default App
