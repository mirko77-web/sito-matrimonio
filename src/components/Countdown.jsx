import { useState, useEffect } from 'react'

function Countdown() {
  const dataMatrimonio = new Date('2026-09-21T16:00:00')

  const [tempoRimasto, setTempoRimasto] = useState({
    giorni: 0,
    ore: 0,
    minuti: 0,
    secondi: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const ora = new Date()
      const differenza = dataMatrimonio - ora

      if (differenza <= 0) {
        clearInterval(timer)
        return
      }

      setTempoRimasto({
        giorni: Math.floor(differenza / (1000 * 60 * 60 * 24)),
        ore: Math.floor((differenza / (1000 * 60 * 60)) % 24),
        minuti: Math.floor((differenza / (1000 * 60)) % 60),
        secondi: Math.floor((differenza / 1000) % 60)
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="countdown">
      <div className="countdown-titolo">
        <span className="countdown-titolo-testo">Il conto alla rovescia è iniziato!</span>
      </div>

      <div className="countdown-box">
        <span className="countdown-numero">{tempoRimasto.giorni}</span>
        <span className="countdown-label">giorni</span>
      </div>
      <div className="countdown-box">
        <span className="countdown-numero">{tempoRimasto.ore}</span>
        <span className="countdown-label">ore</span>
      </div>
      <div className="countdown-box">
        <span className="countdown-numero">{tempoRimasto.minuti}</span>
        <span className="countdown-label">minuti</span>
      </div>
      <div className="countdown-box">
        <span className="countdown-numero">{tempoRimasto.secondi}</span>
        <span className="countdown-label">secondi</span>
      </div>
    </section>
  )
}

export default Countdown