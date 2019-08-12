import React, { Component } from 'react';
import CardList from './CardList'; 
import { robots } from './robot.js'; 
import SearchBox from './SearchBox';

//STATE - Is what describes you app react.js 3 vid 9 min  //STATE >> PROP
// const state = {
//     robots: robots,
//     searchfield: ''
// }


class App extends Component {

    constructor() {
        super()
        this.state = { //States are things that can change in the app. 
            robots: robots,
            searchfield: ''
        }
    }
 
    onSearchChange = (event) => {
        this.setState( {searchfield: event.target.value} )
        // console.log(filterRobots);
    }


    render() {
      const filterRobots = this.state.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
     })
        return (
            <div className='tc'>
                <h1> RoboFriends</h1>
                <SearchBox searchChange={ this.onSearchChange }/>
                <CardList robots={filterRobots}/>
            </div>
            );
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