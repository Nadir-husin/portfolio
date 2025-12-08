import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbarr = ()=>{
    return (
        <>
                <Navbar expand="lg" className="">
                <Container>
                    <h3 href="#home" className="fs-2 fst-italic ">NH</h3>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"  className="custom-toggler" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ms-auto gap-5 fs-6 mt-3 py-3">
                        <AnchorLink href="#home" className='' >Home</AnchorLink>
                        <AnchorLink href="#skills">Skills</AnchorLink>
                        <AnchorLink href="#projects">Projects</AnchorLink>
                        <AnchorLink href="#testimonials">Testimonials</AnchorLink>
                        <AnchorLink href="#contact">Contact</AnchorLink>
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </>
    )
}

export default Navbarr;