import { Link } from "react-router-dom"

function SideBar() {
    return <aside>
        <Link to="/#newest-movies">Newest Movies</Link>
        <Link to="">Most Popular</Link>
        <Link to="">Max Earnings</Link>
        <Link to="/#children-movies">Children Movies</Link>
    </aside>
}

export default SideBar