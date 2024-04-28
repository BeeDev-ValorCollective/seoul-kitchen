import { Link } from "react-router-dom"


const Nav = () => {


    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/contact">Hours & Location</Link>
            <Link to="/menu">Menu</Link>
        </nav>
    )
}

export default Nav