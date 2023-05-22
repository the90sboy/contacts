import {Card, Col} from 'react-bootstrap'
import React from "react";

const User = ({user}) => {



	return (
		<Col md="4" >
			<Card style={{display: "flex", flexWrap: "wrap",  gap: "10px"}}>
				<Card.Body>
					<Card.Subtitle className="mb-2 text-muted">
						User Name
					</Card.Subtitle>
					<Card.Title>{user.name}</Card.Title>
					<Card.Text>
						<>Email: {user.email}</>
						<>Gen: {user.gen}</>
					</Card.Text>
					<Card.Link href="#">Edit</Card.Link>
					<Card.Link href="#">Delete</Card.Link>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default User;