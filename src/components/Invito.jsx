import { useState } from 'react'
import sigilloImg from '../assets/sigillo.png'

function Invito({ onApri }) {
  const [statoBusta, setStatoBusta] = useState('chiusa')

  const gestisciClick = () => {
    setStatoBusta('apertura')

    setTimeout(() => {
      setStatoBusta('nascosta')
    }, 800)

    setTimeout(() => {
      onApri()
    }, 1400)
  }

    return (
    <div className={`invito-overlay invito-${statoBusta}`}>
      <div className="busta" onClick={gestisciClick}>
        <div className="busta-corpo">
  <div className="busta-lettera">
    <p className="busta-lettera-testo">Nomeuomo & NomeDonna</p>
  </div>
  <div className="busta-risvolto"></div>
  <div className="busta-sigillo">
     <img src={sigilloImg} alt="Sigillo" className="busta-sigillo-img" />
    <span className="busta-sigillo-testo">♥</span>
  </div>
</div>
        <p className="busta-istruzione">Tocca per aprire l'invito</p>
      </div>
    </div>
  )
}

export default Invito