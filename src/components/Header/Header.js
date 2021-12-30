import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { searchResults } from "../../store/actions/action";
import navBar from '../../assets/images/nav_bar.png';
import backBtn from '../../assets/images/Back.png';
import search from '../../assets/images/search.png';
import styles from './Header.module.css';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useDispatch();

    const onClickHandler = (e) => {
        e.preventDefault();
        dispatch(searchResults(searchQuery));
    }

    const onChangeHandler = (e) => {
        setSearchQuery(e.target.value);
    }

    return ( 
        <div className={styles.headerNav}>
            <img src={navBar} alt="nav" />
            <div className={styles.container}>
                <div className={styles.backButton}>
                    <img src={backBtn} alt="back button" />
                </div>
                <h1>Romantic comedy</h1>
                <div className={styles.searchBox}>
                    <form onSubmit={onClickHandler}>
                        <input className={styles.searchInput} type="text" name="search" value={searchQuery} onChange={onChangeHandler} placeholder="Search" />
                        <img src={search} alt="search icon" />
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Header;
