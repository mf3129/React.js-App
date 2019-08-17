import React, { Component } from 'react';
import CardList from './CardList'; 
// import { robots } from './robot.js'; 
import SearchBox from './SearchBox';
import './App.css';

//STATE - Is what describes you app react.js 3 vid 9 min  //STATE >> PROP
// const state = {
//     robots: robots,
//     searchfield: ''
// }

//Because App.js has a state we call the file smart components as opposed to CardList & searchbox which just contain functions. 

class App extends Component {

    constructor() {
        super()
        this.state = { //States are things that can change in the app. 
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
       fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}))

    //    this.setState( {robots: robots } ); //Used this when initially loading data from robots.js file as opposed to calling from an api.
    }
 
    onSearchChange = (event) => {
        this.setState( {searchfield: event.target.value} )
        // console.log(filterRobots);
    }


    render() {
      const filterRobots = this.state.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
     })

     if (this.state.robots.length == 0){
         return <h1> Loading </h1>
     } else {
        return (
            <div className='tc'>
                <h1 className='f1'> Sample Project </h1>
                <SearchBox searchChange={ this.onSearchChange }/>
                <CardList robots={filterRobots}/>
            </div>
            );
     }

    }
} 

// const App = () => {
//     return (
//     <div className='tc'>
//         <h1> RoboFriends</h1>
//         <SearchBox />
//         <CardList robots={robots}/>
//     </div>
//     );

// }

export default App; 