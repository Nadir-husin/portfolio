import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useEffect, useState } from 'react';

const Navbarr = ()=>{
    const [scrolled , setScrolled ] = useState(false);


    useEffect(()=>{
        const handleScroll =() =>{
            if(window.scrollY > 50){
                setScrolled(true );
            }
            else{
                setScrolled(false);
            }
        };
        window.addEventListener("scroll",handleScroll);
        return () =>window.removeEventListener("scroll",handleScroll)
    },[])

   const navBg = scrolled ?  
      { backgroundColor: "#DC4492", transition: "0.3s ease" ,  zIndex:40 }
    : { backgroundColor: "transparent", transition: "0.3s ease",  zIndex:40  };

    return (
        <>
                <Navbar expand="lg" className="px-lg-5 px-3 position-fixed top-0 start-0 w-100"  style={ navBg }  >
                    <h3 href="#home" className="fs-2 fst-italic  ">NH</h3>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"  className="custom-toggler" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ms-auto gap-5 fs-6  py-3">
                        <AnchorLink href="#home" className='' >Home</AnchorLink>
                        <AnchorLink href="#skills">Skills</AnchorLink>
                        <AnchorLink href="#projects">Projects</AnchorLink>
                        <AnchorLink href="#testimonials">Testimonials</AnchorLink>
                        <AnchorLink href="#contact">Contact</AnchorLink>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
        </>
    )
}

export default Navbarr;