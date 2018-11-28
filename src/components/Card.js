import React from 'react';

const Card = ({ obj, type }) => { //destructuring in the brackets

	switch (type) {
	case 'films': {
		return (
		<div className='tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
			<div>
				<h2>{obj.title}</h2>
				<h4>{`Episode: ${obj.episode_id}`}</h4>
				<h4>{`Director: ${obj.director}`}</h4>
				<h4>{`Release date: ${obj.release_date}`}</h4>
			</div>
		</div>		
		);
	}
	case 'people': {
		return (
		<div className='tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
			<div>
				<h2>{obj.name}</h2>
				<h4>{`Height: ${obj.height} cm`}</h4>
				<h4>{`Weight: ${obj.mass} kg`}</h4>
				<h4>{`Hair color: ${obj.hair_color}`}</h4>
			</div>
		</div>		
		);
	}
	case 'planets': {
		return (
		<div className='tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
			<div>
				<h2>{obj.name}</h2>
				<h4>{`Climate: ${obj.climate}`}</h4>
				<h4>{`Terrain: ${obj.terrain}`}</h4>
				<h4>{`Population: ${obj.population}`}</h4>
			</div>
		</div>		
		);
	}
	case 'species': {
		return (
		<div className='tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
			<div>
				<h2>{obj.name}</h2>
				<h4>{`Classification: ${obj.classification}`}</h4>
				<h4>{`Language: ${obj.language}`}</h4>
				<h4>{`Average lifespan: ${obj.average_lifespan}`}</h4>
			</div>
		</div>		
		);
	}
	case 'starships': {
		return (
		<div className='tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
			<div>
				<h2>{obj.name}</h2>
				<h4>{`Model: ${obj.model}`}</h4>
				<h4>{`Manufacturer: ${obj.manufacturer}`}</h4>
				<h4>{`Cost: ${obj.cost_in_credits} Credits`}</h4>
			</div>
		</div>		
		);
	}
	case 'vehicles': {
		return (
		<div className='tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
			<div>
				<h2>{obj.name}</h2>
				<h4>{`Model: ${obj.model}`}</h4>
				<h4>{`Manufacturer: ${obj.manufacturer}`}</h4>
				<h4>{`Cost: ${obj.cost_in_credits} Credits`}</h4>
			</div>
		</div>		
		);
	}
	}
}

/*switch(variable_expression) { 
   case constant_expr1: { 
      //statements; 
      break; 
   } 
   case constant_expr2: { 
      //statements;
      break; 
   } 
   default: { 
      //statements; 
      break; 
   } 

}*/

export default Card;