import styles from "./LandingPage.module.scss";

const LandingPage = ({ heading }) => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <h3>Company ABC</h3>
        <div className={styles.navLinks}>
          <a href="#">About</a>
          <a href="#">Services</a>
        </div>
      </nav>

      <header className={styles.hero}>
        <h1 dangerouslySetInnerHTML={{ __html: heading }}></h1>
        <p>
          Powerful AI solutions that go beyond mere data sorting and exploration.
          Use our array of AI-enabled solutions that understand your business and
          recommend the optimal way forward.
        </p>
        <button className={styles.cta}>Get Started</button>
      </header>
    </div>
  );
};

export default LandingPage;
