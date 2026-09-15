import { useState } from 'react'
import Invito from './components/Invito'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import Programma from './components/Programma'
import NostraStoria from './components/NostraStoria'
import DoveQuando from './components/DoveQuando'
import Galleria from './components/Galleria'
import Rsvp from './components/Rsvp'
import ListaNozze from './components/ListaNozze'
import Footer from './components/Footer'

function App() {
  const [invitoAperto, setInvitoAperto] = useState(false)

  return (
    <div className="App">
      {!invitoAperto && <Invito onApri={() => setInvitoAperto(true)} />}
      <Hero />
      <Countdown />
      <Programma />
      <NostraStoria />
      <DoveQuando />
      <Galleria />
      <Rsvp />
      <ListaNozze />
      <Footer />
    </div>
  )
}

export default App