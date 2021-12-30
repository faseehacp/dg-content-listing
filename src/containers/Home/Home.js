import styles from './Home.module.css';
import Header from "../../components/Header/Header";
import Contents from '../../components/Contents/Contents';

const Home = () => {
  
  return (
    <div className={styles.Home}>
        <Header/>
        <Contents />
    </div>
  );
}

export default Home;