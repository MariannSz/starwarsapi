import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';


import './App.css';
//props -> robots as input
//STATE - an object that describes our app
//children receive the STATE as props

class App extends Component { // smart component bc it has state (containers)
	constructor() {// state describes our app, things that can change an d affect the app
		super()
		this.state = { // the virtual dom collects this and react uses it to render and pass them as props to components
			menu: ['Films', 'People', 'Planets', 'Species', 'Starships', 'Vehicles'],
			objects: [],
			searchfield: '',
			selected: ''
		};
	}


	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value} )
	}

	onSelection = (route) => {
		fetch(`https://swapi.co/api/${route}`) // fetch is a function of window, it fetches a json object
			.then(response => response.json())
			.then(data => this.setState( {objects: data.results, selected: route} ));
  	}

	render() {	// TRY MAKING ARRAYS FOR EVERYTHING AND FILL THEM WITH THE CORRESPONDING DATA WHEN LOADING THE PAGE - 25/1/2018

		if (this.state.selected === 'films') {
			var filteredObjs = this.state.objects.filter(obj => {
				return obj.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
			});	
		} else {
			var filteredObjs = this.state.objects.filter(obj => {
				return obj.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
			});
		}


		if (this.state.selected === '') { // tried putting buttons in a component, and calling 'onSelection' from there, but got TypeError 'onSelection is not a funciton'
			return(
				<div className='tc'>
				<h1 className='f1'>Star Wars</h1>
				<h3>Choose a category to browse or search</h3>
					<div className="mw5 mw7-ns center pa3 ph5-ns">
			          <button className="tc bg-light-yellow dib br3 pa5 ma2 grow bw2 shadow-5" onClick={ () => this.onSelection('films')}>Films</button>
			          <button className="tc bg-light-yellow dib br3 pa5 ma2 grow bw2 shadow-5" onClick={ () => this.onSelection('people')}>People</button>
			          <button className="tc bg-light-yellow dib br3 pa5 ma2 grow bw2 shadow-5" onClick={ () => this.onSelection('planets')}>Planets</button>
			          <button className="tc bg-light-yellow dib br3 pa5 ma2 grow bw2 shadow-5" onClick={ () => this.onSelection('species')}>Species</button>
			          <button className="tc bg-light-yellow dib br3 pa5 ma2 grow bw2 shadow-5" onClick={ () => this.onSelection('starships')}>Starships</button>
			          <button className="tc bg-light-yellow dib br3 pa5 ma2 grow bw2 shadow-5" onClick={ () => this.onSelection('vehicles')}>Vehicles</button>
			          
	        		</div>
				</div>
			);
		} else { // filteredObjs is undefined and i dont now why - 22/11/2018
			return(
				<div className='tc'>
				<h1 className='f1' >Star Wars</h1>
					<div>
			          <button className="f6 link dim ph3 pv2 mb2 dib white ma2 bg-black" onClick={ () => this.onSelection('films')}>Films</button>
			          <button className="f6 link dim ph3 pv2 mb2 dib white ma2 bg-black" onClick={ () => this.onSelection('people')}>People</button>
			          <button className="f6 link dim ph3 pv2 mb2 dib white ma2 bg-black" onClick={ () => this.onSelection('planets')}>Planets</button>
			          <button className="f6 link dim ph3 pv2 mb2 dib white ma2 bg-black" onClick={ () => this.onSelection('species')}>Species</button>
			          <button className="f6 link dim ph3 pv2 mb2 dib white ma2 bg-black" onClick={ () => this.onSelection('starships')}>Starships</button>
			          <button className="f6 link dim ph3 pv2 mb2 dib white ma2 bg-black" onClick={ () => this.onSelection('vehicles')}>Vehicles</button>
		        	</div>					
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll> 
					<CardList objects={filteredObjs} route={this.state.selected}/>
					</Scroll>
				</div>
			);
		}
	}
}

export default App;

//if objects is empty and route is empty display h1, h2 and navigation
