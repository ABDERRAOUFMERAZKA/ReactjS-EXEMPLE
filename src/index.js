import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import citations from './citations.js';
class App extends React.Component{
	state={};
   
    componentWillMount(){
      this.generateCitation();
    }

    generateCitation = event => {
    	// on transforme les citations en Array
    	const KeyArray = Object.keys(citations);
    	
    	// une citation au hasard
    	const randomKey = KeyArray[Math.floor(Math.random() * KeyArray.length  )];

    	if (this.state.citation === citations[randomKey].citation ) {
    		this.generateCitation();
    		return;
    	}



    	this.setState(citations[randomKey]);
    }

	render(){
		return(
			<div>
			<p>
			{this.state.citation}
			<span>- {this.state.auteur} </span>
			</p>
			<button onClick={e => this.generateCitation(e)}> Futur citation ! </button>
			</div>
			) 
	}
}

ReactDom.render(
<App/>,
document.getElementById('root')
);