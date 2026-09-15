import foto1 from "../assets/cuo.jpg"
import foto2 from "../assets/mani.jpg"
import foto3 from "../assets/sss.png"
import foto4 from "../assets/scarpe.jpg"
import foto5 from "../assets/sss.png"

import { useState, useEffect } from 'react'

const foto = [foto1, foto2, foto3, foto4, foto5]

function Galleria() {
  const [indiceAttuale, setIndiceAttuale] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndiceAttuale((indicePrecedente) => (indicePrecedente + 1) % foto.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="galleria">
      <h2>Galleria</h2>
      <div className="carosello">
        <div
          className="carosello-pista"
          style={{ transform: `translateX(-${indiceAttuale * 100}%)` }}
        >
          {foto.map((src, indice) => (
            <img
              key={indice}
              src={src}
              alt={`Foto ${indice + 1}`}
              className="carosello-foto"
            />
          ))}
        </div>

        <div className="carosello-pallini">
          {foto.map((_, indice) => (
            <span
              key={indice}
              className={`pallino ${indice === indiceAttuale ? 'pallino-attivo' : ''}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Galleria