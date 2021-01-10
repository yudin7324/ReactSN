import React from 'react';
import styles from './Users.module.css';

let Users = (props) => {

    /*if(props.users.length === 0) {
        props.setUsers([

            ]
        )
    }*/


    return <div>
    {
        props.users.map( u => <div key={u.id}>
            <div>
                <div>
                    <img className={styles.userPhoto} src={u.photoUrl} alt="photo"/>
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
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </div>
                <div>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </div>
            </div>
        </div> )
    }
    </div>
}

export default Users;