import BrowserFilters from "../components/filters/BrowserFilters"
import styles from "../styles/browserPage.module.css"

function BrowserPage() {
  return (
    <div>
      <header className={styles.browserTabs}>
        <h2 className={styles.tabs}>Freelancers</h2>
        <h2 className={styles.tabs}>Ofertas</h2>
      </header>
      <main className={styles.browser}>
        <BrowserFilters />
        <section className={styles.cardContainer}>
        </section>
      </main> 
    </div>
  )
}

export default BrowserPage