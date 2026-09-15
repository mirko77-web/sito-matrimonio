function Footer() {
  const annoCorrente = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-contenuto">
        <p className="footer-saluto">Vi aspettiamo con gioia!</p>
        <p className="footer-hashtag">#nomeuomo&nomedonna2026</p>

        <div className="footer-linea"></div>

        <div className="footer-contatti">
          <p>nomeuomo: 000 000 0000</p>
          <p>nomedonna : 000 000 0000</p>
          <p>nomecognome@email.it</p>
        </div>

        <p className="footer-copy">&copy; {annoCorrente}</p>
      </div>
    </footer>
  )
}

export default Footer