import React from 'react';
import styles from './Users.module.css';
import userPhoto from "../../assets/images/user.webp";
import { NavLink } from 'react-router-dom';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i= 1; i <= pagesCount; i++ ) {
        pages.push(i);
    }

    return (
            <div className={styles.users}>
                <div className={styles.numBox}>
                    {pages.map( p => {
                    return <span className={props.currentPage === p && styles.selectedPage} onClick={(e)=>{props.onPageChanged(p)}}>{p}</span>}
                    )}
                </div>
                {
                props.users.map( u =>  <div key={u.id}>
                    <div>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small || userPhoto} className={styles.userPhoto} alt=""/>
                            </NavLink>
                        </div>
                        <div>
                            { u.followed
                                ? <button onClick={ () => { props.unfollow(u.id) } }>Unfollow</button>
                                : <button onClick={ () => { props.follow(u.id) } }>follow</button>
                            }
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </div>
                    </div>
                </div> )}
            </div>
        )
}

export default Users;