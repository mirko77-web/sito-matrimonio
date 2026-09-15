import { useState } from 'react'

function Rsvp() {
  const [datiForm, setDatiForm] = useState({
    nome: '',
    presenza: 'si',
    numeroPersone: 1,
    note: ''
  })

  const gestisciCambiamento = (evento) => {
    const { name, value } = evento.target
    setDatiForm({
      ...datiForm,
      [name]: value
    })
  }

    return (
    <section className="rsvp">
      <h2>Conferma la tua presenza</h2>
      <form className="rsvp-form">
        <label>
          Nome e Cognome
          <input
            type="text"
            name="nome"
            value={datiForm.nome}
            onChange={gestisciCambiamento}
            required
          />
        </label>

        <label>
          Sarai presente?
          <select
            name="presenza"
            value={datiForm.presenza}
            onChange={gestisciCambiamento}
          >
            <option value="si">Sì, ci sarò</option>
            <option value="no">Non potrò essere presente</option>
          </select>
        </label>

        <label>
          Numero di persone
          <input
            type="number"
            name="numeroPersone"
            min="1"
            value={datiForm.numeroPersone}
            onChange={gestisciCambiamento}
          />
        </label>

        <label>
          Note (allergie, intolleranze, altro)
          <textarea
            name="note"
            value={datiForm.note}
            onChange={gestisciCambiamento}
          />
        </label>

        <button type="submit">Invia conferma</button>
      </form>
    </section>
  )
}

export default Rsvp