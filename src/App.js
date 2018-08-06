import React, { Component } from 'react';
import Projects from './Components/Projects'
import AddProject from './Components/addProject'
import './App.css';


class App extends Component {
  constructor(props){
    super();
    this.state = {
      projects : []
    }
  }
  componentWillMount(){
    this.setState({projects : [
       {
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          title: 'Social App',
          category: 'Mobile'
        },
        {
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development'
        },
      ]})
  };
  render() {
    return (
      <div className="App">
        <Projects projects={this.state.projects}/>
        <AddProject />
      </div>

    );
  }
}

export default App;
