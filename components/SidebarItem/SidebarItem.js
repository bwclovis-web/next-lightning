import {format} from 'https://cdn.skypack.dev/date-fns'

const SidebarItem = ({data}) =>  {
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