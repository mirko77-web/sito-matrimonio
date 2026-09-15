import { useState, useEffect, useRef } from 'react'

const momenti = [
  { orario: '11:30', titolo: 'Arrivo in chiesa' },
  { orario: '12:00', titolo: 'Inizio rito' },
  { orario: '13:00', titolo: 'Aperitivo ' },
  { orario: '14:30', titolo: 'Inizio Pranzo' },
  { orario: '18:00', titolo: 'Taglio della torta' },
  { orario: '21:00', titolo: 'Festa e musica' },
  { orario: '23:00', titolo: 'Open bar' },
]

function Programma() {
  const timelineRef = useRef(null)
  const [progresso, setProgresso] = useState(0)

    useEffect(() => {
        const gestisciScroll = () => {
      if (!timelineRef.current) return

      const rect = timelineRef.current.getBoundingClientRect()
      const altezzaFinestra = window.innerHeight

      const percorsoTotale = altezzaFinestra + rect.height
      const distanzaPercorsa = altezzaFinestra - rect.top
      const percentuale = (distanzaPercorsa / percorsoTotale) * 100

      setProgresso(Math.min(100, Math.max(0, percentuale)))
    }

    window.addEventListener('scroll', gestisciScroll)
    gestisciScroll()

    return () => window.removeEventListener('scroll', gestisciScroll)
  }, [])

  return (
    <section className="programma">
      <h2>Programma della giornata</h2>
      <div className="timeline" ref={timelineRef}>
        <div className="timeline-linea-sfondo"></div>
        <div
          className="timeline-linea-progresso"
          style={{ height: `${progresso}%` }}
        ></div>

        {momenti.map((momento, indice) => (
          <div key={indice} className="timeline-item">
            <div className="timeline-pallino"></div>
            <div className="timeline-contenuto">
              <span className="timeline-orario">{momento.orario}</span>
              <p className="timeline-titolo">{momento.titolo}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
 
export default Programma