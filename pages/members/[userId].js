import {useRouter} from 'next/router'
import Link from 'next/link'

import {useEffect, useState} from 'react'
import styles from '../../styles/Details.module.css'
function DetailPage() {
    const router = useRouter();
    const id = router.query.userId;
    const [user, setUser] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(json => setUser(json));
    }, [])
    const email = JSON.stringify(user.email)
    
    return (
        <div className={styles.container}>
            <Link href="/members" passHref><button className={styles.backBtn}>Go Back</button></Link>
            <h1 className={styles.h1}>details</h1>
            <h4>Name: {JSON.stringify(user.name)}</h4>
            <h4>Username: {JSON.stringify(user.username)}</h4>
            <h4>phone-number: {JSON.stringify(user.phone)}</h4>
            <a href={`mailto:${email}`}><button className={styles.emailBtn}>email</button></a>
        </div>
    )
}

export default DetailPage
