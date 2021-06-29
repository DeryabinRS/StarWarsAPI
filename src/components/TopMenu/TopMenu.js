import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom';

export const TopMenu = () => {
    return(
      
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
                <Link to="/" className="nav-link"><a>Сhoose heroes</a></Link>
                <Link to="/favorite" className="nav-link"><a>Favorite heroes</a></Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}