
import styles from '../styles/Banner.module.css';

export default function Banner() {
    return ( 
        <div>
        
            <div className={styles.headerText}>OCTET</div>
            <video autoPlay muted loop  className={styles.video}>
            <source src="/videos/background.mp4" type="video/mp4"/>
            </video>
                
        </div>
    );
}
