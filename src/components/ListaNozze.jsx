import { useState } from 'react'

function ListaNozze() {
  const iban = 'IT00 X000 0000 0000 0000 0000 000'
  const [copiato, setCopiato] = useState(false)

  const copiaIban = () => {
    navigator.clipboard.writeText(iban)
    setCopiato(true)
    setTimeout(() => setCopiato(false), 2000)
  }

  return (
    <section className="lista-nozze">
      <h2>Lista Nozze</h2>
      <p>
Cibo, musica e open bar li mettiamo noi, voi portate solo la voglia di ballare! Se poi volete lasciarci un regalo, preferiamo un piccolo contributo per iniziare questa nuova avventura insieme.      </p>
      <p className="lista-nozze-iban">{iban}</p>
      <button className="copia-iban-btn" onClick={copiaIban}>
        {copiato ? 'Copiato ✓' : 'Copia IBAN'}
      </button>
    </section>
  )
}

export default ListaNozze