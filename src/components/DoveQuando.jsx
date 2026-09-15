function DoveQuando() {
  return (
    <section className="dove-quando">
      <h2>Dove e Quando</h2>

      <div className="evento">
        <h3>Cerimonia</h3>
        <p className="evento-orario">Ore 16:00</p>
        <p className="evento-luogo">Nome Chiesa</p>
        <p className="evento-indirizzo">Via Esempio 1, Città</p>
        <iframe
  className="evento-mappa"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.6404001742317!2d17.7254795!3d40.350322500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13469250643d1f4f%3A0xfd9ca561322c93a3!2sChiesa%20Madre%20di%20San%20Giovanni%20Battista!5e0!3m2!1sit!2sit!4v1788979960432!5m2!1sit!2sit"
  width="100%"
  height="300"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  title="Mappa Cerimonia"
></iframe>
      </div>

      <div className="evento">
        <h3>Ricevimento</h3>
        <p className="evento-orario">Ore 18:30</p>
        <p className="evento-luogo">Nome Location</p>
        <p className="evento-indirizzo">Via Esempio 2, Città</p>
        <iframe
          className="evento-mappa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.910681356147!2d17.8769261116014!3d40.38867215722755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13468f683897c005%3A0x1ee38768e13872c2!2sCastello%20Monaci!5e0!3m2!1sit!2sit!4v1788980193533!5m2!1sit!2sit"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Mappa Ricevimento"
        ></iframe>
      </div>
    </section>
  )
}

export default DoveQuando