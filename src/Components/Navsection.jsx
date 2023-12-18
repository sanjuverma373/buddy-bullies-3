import React from 'react'
import { Container } from 'react-bootstrap';

const Navsection = () => {

        function openNav() {
                document.getElementById("navBar").classList.toggle("start-0");
                document.body.classList.toggle("overflow-hidden");
                document.querySelector(".menu").classList.toggle("cross")

        }
        function closeNav() {
                document.getElementById("navBar").classList.remove("start-0");
                document.body.classList.remove("overflow-hidden");
                document.querySelector(".menu").classList.remove("cross")
        }
       
        return (
                <div>                        
                        <Container>
                                <nav className="pt-4">
                                        <div className="d-flex align-items-cneter justify-content-between">
                                                <span className=' ff-poppins text-white fs-lg fw-semibold lh-150'>Logo</span>
                                                <div onClick={openNav} className="menu d-block d-lg-none z-5">
                                                        <span className="nav-line1"></span>
                                                        <span className="my-2 nav-line2"></span>
                                                        <span className="nav-line3"></span>
                                                </div>
                                                <ul id="navBar" className="d-flex align-items-center gap-5 mb-0 mobileView">
                                                        <li><a onClick={closeNav} href="#minting"
                                                                className="fs-md ff-poppins fw-medium text-white mb-0 position-relative nav-line minting">Minting</a>
                                                        </li>
                                                        <li><a onClick={closeNav} href="#roadmap"
                                                                className="fs-md ff-poppins fw-medium text-white mb-0 position-relative nav-line roadmap">Road Map</a>
                                                        </li>
                                                        <li><a onClick={closeNav} href="#faq"
                                                                className="fs-md ff-poppins fw-medium text-white mb-0 position-relative nav-line faq">Faq</a>
                                                        </li>
                                                        <li><a onClick={closeNav} href="#team"
                                                                className="fs-md ff-poppins fw-medium text-white mb-0 position-relative nav-line team">Team</a>
                                                        </li>
                                                        <li><a onClick={closeNav} href="#join"
                                                                className="fs-md ff-poppins fw-medium text-white mb-0 position-relative nav-line join">Join Us</a>
                                                        </li>

                                                </ul>
                                        </div>
                                </nav>
                        </Container>
                </div>
        )
}

export default Navsection
