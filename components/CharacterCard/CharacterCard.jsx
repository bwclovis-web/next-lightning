import styles from  './card.module.scss'
// import { format } from 'date-fns'
import {format} from 'https://cdn.skypack.dev/date-fns'

const CharacterCard = ({data}) => {
    const editedOn = new Date(data.edited)

    return (
        <li className={styles.card}>
            <h2>{data.name}</h2>
            <p>Edited On: {format(editedOn, 'MM/dd/yyyy')}</p>
        </li>
    )
}

export default CharacterCard