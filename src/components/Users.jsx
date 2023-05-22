import {Row} from 'react-bootstrap';
import React from 'react';
import User from './User';


const Users = ({users}) => {
	return (
		
			<Row style={{display: "flex", flexWrap: "wrap",  gap: "10px"}}>

				{
					users.map((user, index) => {
						return  <User user={user} key={index}/>
						
					})
					
				}
				
			</Row>
	);
}

export default Users;