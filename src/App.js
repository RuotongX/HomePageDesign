import styles from "./styles/Home.module.css";
import Header from "./components/Header.jsx";
import DynamicPoster from "./PosterSlide.jsx";
import DynamicAward from "./AwardSlide.jsx";
import DynamicExpertise from "./ExpertiseSlide.jsx";
import DynamicPortfolio from "./PortfolioSlide.jsx";
import DynamicFooter from "./ContactFooter.jsx";

function App() {
  return (
    <div>
      
      <div id="poster">
        <Header />
      </div>
      <DynamicPoster />

      <div className={styles.continuePage} id="expertise">
      <div className={styles.backgroundPicture}>
          <div className={styles.backgroundMesh}>
            <DynamicExpertise/>
            <div id="portfolio">
              <DynamicPortfolio/>
            </div>
          </div>
        </div>
      </div>
      <div id="award">
        <DynamicAward />
      </div>

      <footer id="contact">
        <DynamicFooter />
      </footer>
    </div>
  );
}

export default App;
