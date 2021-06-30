import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom';

export const TopMenu = () => {
    return(
      
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home"><img src="./swlogo_min.png" alt="STAR WARS"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
                <Link to="/" className="nav-link">Сhoose heroes</Link>
                <Link to="/favorite" className="nav-link">Favorite heroes</Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}