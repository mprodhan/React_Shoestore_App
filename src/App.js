import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      shoe: []
    };
  }
  componentDidMount(){
    fetch('http://127.0.0.1:8000/api/shoe/').
    then(res => res.json()).
    then(data => {
      this.setState({shoe: data})
    }
    );
  }
  render(){
    return(
      <div>
          {this.state.shoe.map((sh) => {
          return(<ul>
          <li>{sh.manufacturer}</li>
          <li>{sh.brand_name}</li>
          <li>{sh.shoe_size}</li>
          <li>{sh.color}</li>
          <li>{sh.material}</li>
          <li>{sh.shoe_type}</li>
          <li>{sh.fasten_type}</li>
        </ul>)
      })}
      </div>
    )
  }
}

export default App;
