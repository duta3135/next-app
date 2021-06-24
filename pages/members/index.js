import {useState, useEffect} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/Members.module.css'
import Pfp from '../../components/pfp';
import { NameContext } from '../../NameContext';
function Users() {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsers(json));
    }, [])
    
    
    return (
        
        <div className={styles.container}>
            <Head>
            <title>members</title>
        </Head>
            <Link href="/" passHref><button className={styles.backBtn}>Go Back</button></Link>
            <h1 className={styles.h1}>Members</h1>
            
            <div className={styles.list}>
                {users.map(member=>
                    {return <div key={member.id} className={styles.memName}>
                                <NameContext.Provider value={member.name}>
                                    <Pfp/>
                                </NameContext.Provider>
                                
                                <Link href={`/members/${member.id}`}>{JSON.stringify(member.name)}</Link>
                            </div>}
                    )}
            </div>
        </div >
    )
}

export default Users
