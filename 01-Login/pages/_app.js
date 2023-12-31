import '../styles/globals.css';

import Banner from '../components/banner';
import styles from '../styles/App.module.css';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className={styles.video}>
        <Banner />
        
      <div className={styles.mainContainer}>
        <Component {...pageProps} />
        </div>
      </div>
      
      
    </>
  );
}

export default MyApp;