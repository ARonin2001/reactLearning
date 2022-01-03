import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Users.module.css';
import user_ava from '../../assets/img/ava.jpg';

let Users = props => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++) 
        pages.push(i);

    return (
        <div className={styles.users}>
            <div className={styles.pagination}>
                {
                    pages.map(page => {
                        return(
                            <span onClick={(e) => props.onPageChanged(page)} 
                                className={
                                props.currentPage === page && styles.selected_page
                            }>{page}</span>
                        )
                    })
                }
            </div>
            <div className={styles.container}>
                {
                    props.users.map(u => <div className={styles.item} key={u.id}>
                        <div className={styles.left}>
                            <NavLink to={'/profile/' + u.id} className={styles.ava}>
                                <img src={u.photos.small !== null ? u.photos.small : user_ava} alt="ava" />
                            </NavLink>
                            <div className={styles.user_info}>
                                <h3 className={styles.fullName}>{u.name}</h3>
                                <span className={styles.status}>{u.status}</span>
                                <div className={styles.user_location}>
                                    <div className={styles.country_container}>
                                        <span className={styles.country}>
                                            Страна: 
                                        </span>
                                        <span className={styles.country_name}>{"u.location.country"}</span>
                                    </div>
                                    
                                    <div className={styles.city_container}>
                                        <span className={styles.city}>
                                            Город: 
                                        </span>
                                        <span className={styles.city_name}>{"u.location.city"}</span>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.btn_follow}>
                                {
                                    u.followed 
                                    ? <button className={styles.btn + " " + styles.btn_unFollow }
                                        disabled={props.followingInProgress.some(id => id === u.id)} 
                                        onClick={ () => {props.unFollow(u.id)}}>unFollow</button>
                                    : <button className={styles.btn + " " + styles.btn_Follow} 
                                        disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={ () => {props.follow(u.id)}}>Follow</button>
                                }
                                
                            </div>
                        </div>
                    </div>
                        
                    )
                }
            </div>
        </div>
    )
}



export default Users;