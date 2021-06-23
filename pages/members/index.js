import {Fragment, useState, useEffect} from 'react'
import Link from 'next/link'
import styles from '../../styles/Members.module.css'
function Users() {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsers(json));
    })
    
    
    return (
        <div className={styles.container}>
            <h1>Members</h1>
            <div>
                {users.map(item=>
                    {return <div className={styles.memName}>
                                <div className={styles.pfp}>
                                    <span className={styles.initials}>DS</span>
                                </div>
                                <Link href={`/members/${item.id}`}>{JSON.stringify(item.name)}</Link>
                            </div>}
                    )}
            </div>
        </div >
    )
}

export default Users
