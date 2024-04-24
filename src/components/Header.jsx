import Nav from './Nav'
import Logo from '../static/assets/logo01.jpg'

const Header = () => {



    return (
        <header>
        <img src={Logo} alt="" />
        <Nav />
        </header>
    )
}

export default Header