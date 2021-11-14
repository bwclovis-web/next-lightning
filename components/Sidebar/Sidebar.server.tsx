import fetchData from '../../lib/useFetch'
import useData from '../../lib/useData'
import SidebarItem from '../SidebarItem/SidebarItem'

const Sidebar = () => {
    const ships = useData('top', ()=> fetchData())

    if(!ships.results) {
        return (
            <div>LOADING</div>
        )
    }

    return (
        <aside>
            <ul>
                {ships.results.map((ship: { edited: any; name: string; manufacturer: string; cost_in_credits: string }) => {
                    return <SidebarItem data={ship} key={ship.edited} />
                })}
            </ul>
        </aside>
    )
}

export default Sidebar;