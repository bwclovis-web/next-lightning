import Sidebar from "../components/Sidebar/Sidebar.server"

const serverSidebarPage = () => {
    return (
        <section className="split_2">
            <Sidebar />
            <div>
                <h2>Just common content</h2>
            </div>
        </section>
    )
}

export default serverSidebarPage