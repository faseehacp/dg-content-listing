import styles from './Content.module.css';

const Content = (props) => {
    return ( 
        <div className={styles.content}>
            <img src={props.image} alt="Content image" />
            <h2>{props.title}</h2>
        </div>
     );
}
 
export default Content;