import React, {useContext} from 'react';
import { NameContext } from '../NameContext';
import styles from '../styles/Pfp.module.css'
function Pfp() {
    const name = useContext(NameContext)
    let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');

    let initials = [...name.matchAll(rgx)] || [];

    initials = (
    (initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
    ).toUpperCase();

    return (
        <div className={styles.pfp}>
            <span className={styles.initials}>{initials}</span>
        </div>
    )
}

export default Pfp
