import React from 'react'
import teamimg1 from '../assets/images/team-img1.png'
import teamimg2 from '../assets/images/team-img2.png'
import teamimg3 from '../assets/images/team-img3.png'
import { Col, Container, Row } from 'react-bootstrap'
const teams = [
        {
                teamimg1: teamimg1,
                haddingt: "Prime Bullister ",
                teamp: "Pruduct Designer",
                alt: 'image'
        },
        {
                teamimg1: teamimg2,
                haddingt: "Solvador Bulli ",
                teamp: "Artist",
                alt: 'image'
        },
        {
                teamimg1: teamimg3,
                haddingt: "Meta Bully ",
                teamp: "Pruduct Designer",
                alt: 'image'
        },
]

const Teamsection = () => {
        const teamc = teams.map((teamc) => (
                <Col lg={4} md={6} className='mb-3'>
                        <div className='d-flex flex-column align-items-center justify-content-center'>
                                <img src={teamc.teamimg1} alt="teamc.alt" />
                                <h2 className=' ff-poppins fs-xl fw-semibold text-white lh-136 pt-3 m-0 '>{teamc.haddingt}</h2>
                                <p className='fs-md ff-poppins fw-normal lh-136 text-white '>{teamc.teamp}</p>
                        </div>
                </Col >
        ))
        return (
                <div className='bg-blue pt-5' id="team">
                        <Container>
                                <h3 className="fs-xl1 fw-medium text-white lh-136 text-center m-0 pb-5 ff-poppins ">Our Team</h3>
                                <Row>
                                        {teamc}
                                </Row>
                        </Container>
                </div>
        )
}

export default Teamsection
