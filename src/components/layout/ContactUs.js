import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import Contact from '../images/Contact Us.gif'

const ContactUs = () => {
    return (
			<Container>
				<Row>
					<Col md={12} xs={12}>
						<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}> 
							<img
								src={Contact}
								alt={Contact}
								style={{ height: "530px", width: "340px" }}
							/>
						</div>
					</Col>
				</Row>
			</Container>
		);
}

export default ContactUs
