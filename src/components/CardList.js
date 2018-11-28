import React from 'react';
import Card from './Card';
//props -> robots as input

const CardList = ({ objects, route }) =>{ //pure function, deterministic 
// try adding an array for the menu names and image url-s to the app.js and create cards with those when nothing is selected - 27/11/2018

	return (
		<div>
			{
				objects.map((obj, i) =>{
					return (
						<Card
							 key={i}
							 obj={obj}
							 type={route}
				 		/>
					);
				})
			}
		</div>
	);
}

export default CardList;