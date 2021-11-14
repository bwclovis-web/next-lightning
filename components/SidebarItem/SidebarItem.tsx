import {FC} from 'react'
import { format } from 'date-fns'
// import {format} from 'https://cdn.skypack.dev/date-fns?dts'
interface DataI {
    data: {
        name: string
        manufacturer: string
        cost_in_credits: string
        edited: string
    }
}
const SidebarItem:FC<DataI> = ({data}) =>  {
    const editedOn = new Date(data.edited)
    return (
        <li>
            <h1>{data.name}</h1>
            <p>Manufactured by: {data.manufacturer}</p>
            <p>Cost in credits: {data.cost_in_credits}</p>
            <p>Edited On: {format(editedOn, 'MM/dd/yyyy')}</p>
        </li>
    )}

export default SidebarItem