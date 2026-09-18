import sfondoHero from '../assets/matri.jpg'

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${sfondoHero})` }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-contenuto">
        <p className="hero-eyebrow">Siamo immensamente felici di invitarvi al nostro matrimonio</p>
        <p className="hero-citazione">
        Quando la felicità di qualcun altro è la tua felicità, quello è amore.
        </p>

        <h1 className="hero-nomi">
         NomeUomo
          <span className="hero-e-commerciale">&</span>
          NomeDonna
        </h1>

        <div className="hero-data-riga">
          <span className="hero-linea"></span>
          <span className="hero-data">data/data/data</span>
          <span className="hero-linea"></span>
        </div>

        <div className="hero-freccia">↓</div>
      </div>
    </section>
  )
}

export default Hero